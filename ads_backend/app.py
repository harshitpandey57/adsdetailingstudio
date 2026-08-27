"""
ADS Detailing — Flask Backend
====================================================
Powers the ADS Detailing React (Vite) frontend — ceramic coating,
PPF, car/bike detailing & window tinting studio in Lucknow / Delhi NCR.

Features:
  • Serves the built React app (npm run build -> dist/)
  • Booking / enquiry API   →  POST /api/book-appointment
  • Admin panel             →  GET  /admin  (Basic-Auth protected)
  • Admin API               →  GET  /api/admin/appointments
  • Rate-limiting           →  5 submissions / hour per IP
  • SQLite storage          →  appointments.db
  • Email alerts            →  configure SMTP via .env
  • CORS enabled            →  so the Vite dev server (5173) can call
                                the Flask API (5000) during development
"""

from dotenv import load_dotenv
load_dotenv()

import os
import sqlite3
import smtplib
import logging
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from functools import wraps

from flask import (
    Flask, request, jsonify, render_template,
    send_from_directory, Response
)
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

# ── App setup ────────────────────────────────────────────────────────────────
# React build output (npm run build) lands in my-app/dist — point Flask there.
DIST_DIR = os.getenv("DIST_DIR", os.path.join(os.path.dirname(__file__), "dist"))

# static_folder=None disables Flask's automatic "/<path:filename>" static route,
# which would otherwise intercept every URL (including real React routes like
# "/about") and 404 them before our own catch-all below ever runs.
app = Flask(__name__, static_folder=None)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # allow the Vite dev server too

logging.basicConfig(level=logging.INFO, format="%(asctime)s  %(levelname)s  %(message)s")
log = logging.getLogger(__name__)

# ── Rate limiter ─────────────────────────────────────────────────────────────
limiter = Limiter(get_remote_address, app=app, default_limits=[], storage_uri="memory://")

# ── Config (override via environment variables / .env) ───────────────────────
class Config:
    DB_PATH        = os.getenv("DB_PATH", "appointments.db")

    ADMIN_USERNAME = os.getenv("ADMIN_USERNAME", "admin")
    ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "ads@2024")

    SMTP_HOST      = os.getenv("SMTP_HOST", "smtp.gmail.com")
    SMTP_PORT      = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER      = os.getenv("SMTP_USER", "")
    SMTP_PASSWORD  = os.getenv("SMTP_PASSWORD", "")
    NOTIFY_EMAIL   = os.getenv("NOTIFY_EMAIL", "info@adsdetailing.com")
    FROM_EMAIL     = os.getenv("FROM_EMAIL", "noreply@adsdetailing.com")

cfg = Config()

# ── Database ──────────────────────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(cfg.DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS appointments (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                name        TEXT    NOT NULL,
                email       TEXT    NOT NULL,
                phone       TEXT    NOT NULL,
                service     TEXT    NOT NULL,
                message     TEXT,
                ip_address  TEXT,
                status      TEXT    DEFAULT 'new',
                created_at  TEXT    DEFAULT (datetime('now','localtime'))
            )
        """)
        conn.commit()
    log.info("Database ready: %s", cfg.DB_PATH)

# ── Email helper ──────────────────────────────────────────────────────────────
SERVICE_LABELS = {
    "ceramic-coating":        "Ceramic Coating",
    "paint-protection-film":  "Paint Protection Film (PPF)",
    "car-detailing":          "Car Detailing",
    "bike-detailing":         "Bike Detailing",
    "window-tinting":         "Window Tinting",
}

def send_email_notification(appt: dict):
    if not cfg.SMTP_USER or not cfg.SMTP_PASSWORD:
        log.info("SMTP not configured — skipping email notification.")
        return

    service_label = SERVICE_LABELS.get(appt["service"], appt["service"])
    subject = f"New Appointment Request from {appt['name']} — ADS Detailing"

    body_html = f"""
    <html><body style="font-family:Arial,sans-serif;color:#333;">
      <h2 style="color:#ef4444;">New Appointment Request — ADS Detailing</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr style="background:#fef2f2;"><td><b>Name</b></td><td>{appt['name']}</td></tr>
        <tr><td><b>Phone</b></td><td>{appt['phone']}</td></tr>
        <tr style="background:#fef2f2;"><td><b>Email</b></td><td>{appt['email']}</td></tr>
        <tr><td><b>Service</b></td><td>{service_label}</td></tr>
        <tr style="background:#fef2f2;"><td><b>Message</b></td><td>{appt.get('message') or '—'}</td></tr>
        <tr><td><b>Received</b></td><td>{appt['created_at']}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;margin-top:24px;">
        This alert was sent automatically by the ADS Detailing website.
      </p>
    </body></html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"]    = cfg.FROM_EMAIL
    msg["To"]      = cfg.NOTIFY_EMAIL
    msg.attach(MIMEText(body_html, "html"))

    try:
        with smtplib.SMTP(cfg.SMTP_HOST, cfg.SMTP_PORT) as server:
            server.starttls()
            server.login(cfg.SMTP_USER, cfg.SMTP_PASSWORD)
            server.sendmail(cfg.FROM_EMAIL, cfg.NOTIFY_EMAIL, msg.as_string())
        log.info("Email sent to %s", cfg.NOTIFY_EMAIL)
    except Exception as exc:
        log.error("Email failed: %s", exc)

# ── Input validation ──────────────────────────────────────────────────────────
def validate_appointment(data: dict) -> list[str]:
    errors = []
    name    = (data.get("name") or "").strip()
    email   = (data.get("email") or "").strip()
    phone   = (data.get("phone") or "").strip()
    service = (data.get("service") or "").strip()
    message = (data.get("message") or "").strip()

    if not name:
        errors.append("Name is required.")
    elif len(name) > 120:
        errors.append("Name is too long (max 120 chars).")

    if not email:
        errors.append("Email is required.")
    elif "@" not in email or "." not in email.split("@")[-1]:
        errors.append("Please enter a valid email address.")
    elif len(email) > 254:
        errors.append("Email address is too long.")

    if not phone:
        errors.append("Phone number is required.")
    else:
        digits = "".join(c for c in phone if c.isdigit())
        if len(digits) < 7 or len(digits) > 15:
            errors.append("Please enter a valid phone number.")

    if service not in SERVICE_LABELS:
        errors.append("Please select a valid service.")

    if not message:
        errors.append("Please tell us about your vehicle and requirements.")
    elif len(message) > 2000:
        errors.append("Message is too long (max 2000 chars).")

    return errors

# ── Basic-Auth decorator (admin panel) ───────────────────────────────────────
def require_basic_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or auth.username != cfg.ADMIN_USERNAME or auth.password != cfg.ADMIN_PASSWORD:
            return Response(
                "Please log in to access the admin panel.", 401,
                {"WWW-Authenticate": 'Basic realm="ADS Admin"'}
            )
        return f(*args, **kwargs)
    return decorated

# ═══════════════════════════════════════════════════════════════════════════════
#  API ROUTES
# ═══════════════════════════════════════════════════════════════════════════════

@app.route("/api/health")
def health():
    return jsonify({"status": "ok", "service": "ADS Detailing Backend"})

# ── Book an appointment (used by Contact.jsx & ContactFormAndDetails.jsx) ─────
@app.route("/api/book-appointment", methods=["POST"])
@limiter.limit("5 per hour")
def book_appointment():
    data = request.get_json(silent=True) or {}
    errors = validate_appointment(data)
    if errors:
        return jsonify({"success": False, "errors": errors}), 400

    record = {
        "name":       data.get("name", "").strip(),
        "email":      data.get("email", "").strip(),
        "phone":      data.get("phone", "").strip(),
        "service":    data.get("service", "").strip(),
        "message":    data.get("message", "").strip() or None,
        "ip_address": request.remote_addr,
        "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }

    with get_db() as conn:
        cursor = conn.execute(
            """INSERT INTO appointments (name, email, phone, service, message, ip_address)
               VALUES (:name, :email, :phone, :service, :message, :ip_address)""",
            record
        )
        record["id"] = cursor.lastrowid
        conn.commit()

    log.info("New appointment #%d from %s (%s) — %s",
              record["id"], record["name"], record["phone"], record["service"])
    send_email_notification(record)

    return jsonify({
        "success": True,
        "message": "Appointment request received! We'll contact you shortly to confirm.",
        "appointment_id": record["id"]
    }), 201

# ── Admin: view all appointments (JSON API) ───────────────────────────────────
@app.route("/api/admin/appointments")
@require_basic_auth
def api_admin_appointments():
    status = request.args.get("status")
    page   = max(1, int(request.args.get("page", 1)))
    limit  = min(100, int(request.args.get("limit", 50)))
    offset = (page - 1) * limit

    with get_db() as conn:
        if status:
            rows = conn.execute(
                "SELECT * FROM appointments WHERE status=? ORDER BY id DESC LIMIT ? OFFSET ?",
                (status, limit, offset)
            ).fetchall()
            total = conn.execute(
                "SELECT COUNT(*) FROM appointments WHERE status=?", (status,)
            ).fetchone()[0]
        else:
            rows = conn.execute(
                "SELECT * FROM appointments ORDER BY id DESC LIMIT ? OFFSET ?",
                (limit, offset)
            ).fetchall()
            total = conn.execute("SELECT COUNT(*) FROM appointments").fetchone()[0]

    return jsonify({"total": total, "page": page, "limit": limit,
                     "appointments": [dict(r) for r in rows]})

# ── Admin: update appointment status ──────────────────────────────────────────
@app.route("/api/admin/appointments/<int:appt_id>", methods=["PATCH"])
@require_basic_auth
def update_appointment_status(appt_id):
    """PATCH body: {"status": "confirmed" | "completed" | "cancelled" | "new"}"""
    data   = request.get_json(silent=True) or {}
    status = data.get("status", "").strip()
    if status not in ("new", "confirmed", "completed", "cancelled"):
        return jsonify({"error": "Invalid status. Use: new, confirmed, completed, cancelled"}), 400

    with get_db() as conn:
        result = conn.execute("UPDATE appointments SET status=? WHERE id=?", (status, appt_id))
        conn.commit()
        if result.rowcount == 0:
            return jsonify({"error": "Appointment not found"}), 404

    return jsonify({"success": True, "id": appt_id, "status": status})

# ── Admin: delete appointment ─────────────────────────────────────────────────
@app.route("/api/admin/appointments/<int:appt_id>", methods=["DELETE"])
@require_basic_auth
def delete_appointment(appt_id):
    with get_db() as conn:
        result = conn.execute("DELETE FROM appointments WHERE id=?", (appt_id,))
        conn.commit()
        if result.rowcount == 0:
            return jsonify({"error": "Appointment not found"}), 404
    return jsonify({"success": True, "deleted_id": appt_id})

# ── Admin: HTML dashboard ──────────────────────────────────────────────────────
@app.route("/admin")
@require_basic_auth
def admin_panel():
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM appointments ORDER BY id DESC").fetchall()
        counts = conn.execute(
            "SELECT status, COUNT(*) as n FROM appointments GROUP BY status"
        ).fetchall()
    stats = {r["status"]: r["n"] for r in counts}
    return render_template("admin.html", appointments=rows, stats=stats,
                            service_labels=SERVICE_LABELS)

# ═══════════════════════════════════════════════════════════════════════════════
#  SERVE THE REACT (VITE) FRONTEND
# ═══════════════════════════════════════════════════════════════════════════════
# React is a single-page app (App.jsx swaps views with useState — no react-router),
# so every non-API route should just serve index.html and let React handle it.

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path.startswith("api/") or path == "admin":
        # Let Flask's normal routing/404 handle these — don't swallow them here.
        return jsonify({"error": "Not found"}), 404

    full_path = os.path.join(DIST_DIR, path)
    if path and os.path.exists(full_path):
        return send_from_directory(DIST_DIR, path)
    return send_from_directory(DIST_DIR, "index.html")

# ═══════════════════════════════════════════════════════════════════════════════
#  ENTRY POINT
# ═══════════════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    init_db()
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_ENV", "development") == "development"
    log.info("Starting ADS Detailing backend on port %d (debug=%s)", port, debug)
    log.info("Serving React build from: %s", DIST_DIR)
    app.run(host="0.0.0.0", port=port, debug=debug)

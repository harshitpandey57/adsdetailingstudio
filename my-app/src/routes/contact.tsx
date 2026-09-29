import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { useState, useEffect } from "react";
import { z } from "zod";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  Building,
  Info 
} from "lucide-react";
import ctaImg from "@/assets/cta.jpg";

const contactSearchSchema = z.object({
  package: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: contactSearchSchema,
  head: () => ({
    meta: [
      { title: "Contact Us | Yamuna Holidays - Book Char Dham Yatra" },
      {
        name: "description",
        content:
          "Get in touch with Yamuna Holidays. Speak with our Char Dham experts, inquire about customized tour packages, or plan your group yatra.",
      },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold font-medium";

// Map URL slug back to select dropdown value
const mapSlugToSelectValue = (slug?: string) => {
  if (!slug) return "char-dham";
  if (slug.includes("complete-char-dham")) return "char-dham";
  if (slug.includes("do-dham")) return "do-dham";
  if (slug.includes("kedarnath")) return "kedarnath";
  if (slug.includes("badrinath")) return "badrinath";
  if (slug.includes("helicopter") || slug.includes("heli")) return "heli";
  if (slug.includes("senior")) return "senior";
  return "custom";
};

// Backend base URL. Set VITE_API_URL in a .env file for production;
// falls back to the local Flask dev server.
const API_URL = import.meta.env.VITE_API_URL || "";

function ContactPage() {
  const { package: packageSlug } = Route.useSearch();
  const [selectedPkg, setSelectedPkg] = useState("char-dham");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (packageSlug) {
      setSelectedPkg(mapSlugToSelectValue(packageSlug));
    }
  }, [packageSlug]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      package: selectedPkg,
      travel_date: data.get("travel_date"),
      travelers: Number(data.get("travelers")) || 1,
      message: data.get("message"),
    };

    try {
      const res = await fetch(`${API_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        const firstError =
          result?.errors && Object.values(result.errors)[0];
        throw new Error(
          (firstError as string) || result?.error || "Something went wrong. Please try again.",
        );
      }

      setSent(true);
      form.reset();
      setSelectedPkg("char-dham");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send your inquiry. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={ctaImg}
            alt="Snow covered Himalayan range"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/55 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-amber-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Connect With Us
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Speak With a Yatra Planner
              </h1>
              <p className="text-white/90 text-base sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                Have questions about routes, stays, or registrations? We are here to guide you through every step of your divine journey.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="bg-cream py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
            {/* Left Side: Contact Channels & Location */}
            <Reveal>
              <span className="text-amber-600 font-semibold uppercase tracking-[0.25em] text-xs">
                Reach Us Anytime
              </span>
              <h2 className="text-3xl sm:text-5xl font-display text-foreground mt-4 leading-tight">
                Get in Touch
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                Call, write, or drop by our office. Our expert pilgrimage planners usually respond to digital inquiries within an hour during the yatra season.
              </p>

              <ul className="mt-10 space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card border border-border text-gold">
                    <Phone className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Phone Booking Support</h4>
                    <p className="mt-1">
                      <a href="tel:+91 97607 12664" className="text-base font-semibold text-foreground hover:text-gold">
                        +91 97607 12664
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card border border-border text-gold">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">WhatsApp Consultation</h4>
                    <p className="mt-1">
                      <a
                        href="https://wa.me/919760712664"
                        className="text-base font-semibold text-foreground hover:text-gold"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp: +91 97607 12664
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card border border-border text-gold">
                    <Mail className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Email Inquiry</h4>
                    <p className="mt-1">
                      <a href="mailto:Holidaysyamuna@gmail.com" className="text-base font-semibold text-foreground hover:text-gold">
                        Holidaysyamuna@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card border border-border text-gold">
                    <MapPin className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Main Office</h4>
                    <p className="mt-1 text-muted-foreground font-medium">
                      Trikhali, Kunshala, Rana, Uttarakhand 249141, India
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 overflow-hidden rounded-[2rem] shadow-soft border border-border">
                <iframe
                  title="Yamuna Holidays office location"
                  src="https://www.google.com/maps?q=30.9073163,78.348665&output=embed"
                  loading="lazy"
                  className="h-80 w-full border-0"
                />
              </div>
            </Reveal>

            {/* Right Side: Detailed Booking Inquiry Form */}
            <Reveal delay={0.12}>
              <form
                onSubmit={handleSubmit}
                className="rounded-[2.5rem] bg-card p-8 shadow-luxe border border-border/40 sm:p-12"
              >
                <h3 className="font-display text-3xl text-foreground">Booking &amp; General Inquiry</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Fill in your details below and a travel advisor will call you to finalize your customized plan.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Your Name</span>
                    <input name="name" required className={fieldClass} placeholder="Your full name" />
                  </label>
                  <label className="block">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</span>
                    <input name="phone" required type="tel" className={fieldClass} placeholder="+91" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Email Address</span>
                    <input name="email" required type="email" className={fieldClass} placeholder="you@email.com" />
                  </label>
                  <label className="block">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Selected Package</span>
                    <select
                      className={fieldClass}
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value)}
                    >
                      <option value="char-dham">Complete Char Dham Yatra</option>
                      <option value="do-dham">Do Dham Yatra</option>
                      <option value="kedarnath">Kedarnath Yatra</option>
                      <option value="badrinath">Badrinath Yatra</option>
                      <option value="heli">Helicopter Package</option>
                      <option value="senior">Senior Citizen Special</option>
                      <option value="custom">Custom Trip</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Approx. Travel Date</span>
                    <input name="travel_date" required type="date" className={fieldClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Total Travelers</span>
                    <input name="travelers" type="number" min={1} defaultValue={2} className={fieldClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Message / Custom Requests</span>
                    <textarea
                      name="message"
                      rows={4}
                      className={fieldClass}
                      placeholder="Share details about your group, medical requirements, or hotel preferences."
                    />
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  <Send className="h-4 w-4" strokeWidth={1.7} />
                  {submitting ? "Sending..." : "Send Inquiry"}
                </button>
                {sent ? (
                  <p className="mt-4 text-center text-sm font-semibold text-gold">
                    Thank you — our yatra planner will contact you shortly.
                  </p>
                ) : null}
                {error ? (
                  <p className="mt-4 text-center text-sm font-semibold text-red-600">
                    {error}
                  </p>
                ) : null}
              </form>
            </Reveal>
          </div>
        </section>

        {/* Office Hours & FAQ Link Section */}
        <section className="bg-background py-20 lg:py-28 border-t border-border/30">
          <div className="mx-auto max-w-5xl px-5 lg:px-10">
            <div className="grid gap-12 sm:grid-cols-2">
              <Reveal>
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-cream text-gold shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">Operational Hours</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      During Yatra season (April – November), our helpline operates <strong>24/7</strong> for on-trip support. Our booking office is open daily from 9:00 AM to 8:00 PM.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-cream text-gold shrink-0">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">Branch Offices</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      We have operational hubs in <strong>Haridwar</strong> (near railway station) and <strong>Dehradun</strong> (near Jolly Grant Airport) to coordinate arrivals and vehicle boarding.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

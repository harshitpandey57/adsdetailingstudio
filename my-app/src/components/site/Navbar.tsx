import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logoUrl from "@/assets/logo.png";

const links = [
  { label: "About", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Experiences", to: "/", hash: "experiences" },
  { label: "Packages", to: "/packages" },
  { label: "Blog", to: "/", hash: "blog" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "FAQs", to: "/", hash: "faqs" },
  { label: "Contact", to: "/contact" },
];

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = scrolled || theme === "light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/85 py-3 shadow-soft backdrop-blur-xl"
        : theme === "light"
        ? "bg-background/85 py-5 backdrop-blur-xl border-b border-border/40"
        : "bg-transparent py-5"
        }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logoUrl}
            alt="Yamuna Holidays Logo"
            className="h-14 w-14 object-contain shrink-0 rounded-full"
          />
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-xl leading-tight ${isSolid ? "text-foreground" : "text-white"}`}
            >
              Yamuna Holidays
            </span>
            <span
              className={`block text-[0.6rem] tracking-[0.28em] uppercase ${isSolid ? "text-muted-foreground" : "text-white/70"}`}
            >
              Char Dham Yatra
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              activeProps={{ className: isSolid ? "text-primary font-semibold" : "text-gold font-semibold" }}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${isSolid ? "text-foreground/80" : "text-white/85"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+91 97607 12664"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" strokeWidth={1.6} />
            +91 97607 12664
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${isSolid ? "border-border text-foreground" : "border-white/40 text-white"
            }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-gold font-semibold" }}
                  className="border-b border-border/60 py-3 text-sm text-foreground/80 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+91 97607 12664"
                className="mt-4 rounded-full bg-primary py-3 text-center text-sm text-primary-foreground"
              >
                Call +91 97607 12664
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
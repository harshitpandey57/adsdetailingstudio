import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ArrowRight,
  Clock,
  Tag,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { testimonials, faqs } from "./data";
import { blogPosts as fallbackBlogPosts, BlogPost } from "./blogData";
import kedarnath from "@/assets/kedarnath.jpg";
import badrinath from "@/assets/badrinath.jpg";
import gangotri from "@/assets/gangotri.jpg";
import yamunotri from "@/assets/yamunotri.jpg";
import road from "@/assets/g-road.jpg";
import pilgrims from "@/assets/g-pilgrims.jpg";
import river from "@/assets/g-river.jpg";
import heli from "@/assets/g-heli.jpg";
import cta from "@/assets/cta.jpg";
import logoUrl from "@/assets/logo.png";
const galleryImages = [
  { src: kedarnath, alt: "Kedarnath temple below a snow peak" },
  { src: pilgrims, alt: "Pilgrims walking a Himalayan trail to a temple" },
  { src: badrinath, alt: "Badrinath temple facade with mountains behind" },
  { src: road, alt: "Winding Himalayan mountain road above the clouds" },
  { src: gangotri, alt: "Gangotri temple beside the Bhagirathi river" },
  { src: heli, alt: "Helicopter flying over snow covered Himalayan peaks" },
  { src: yamunotri, alt: "Yamunotri temple in a forested valley" },
  { src: river, alt: "Oil lamps floating on a sacred river at dusk" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the mountains"
          intro="Photographs from our yatras — temples, trails, rivers and the pilgrims who walk them."
        />
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 3) * 0.08}>
              <figure className="group overflow-hidden rounded-[1.5rem] shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogCards() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || ""}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const allBlogs = [...data, ...fallbackBlogPosts];
        const uniqueBlogs = Array.from(new Map(allBlogs.map((b) => [b.slug, b])).values());
        setBlogs(uniqueBlogs.slice(0, 3)); // show top 3 on homepage
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setBlogs(fallbackBlogPosts.slice(0, 3));
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="From Our Blog"
          title="Stories, guides & travel wisdom"
          intro="Insights from 15 seasons on the Char Dham circuit — practical advice, pilgrimage tales and everything in between."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full text-center py-10 text-muted-foreground">Loading articles...</div>
          ) : blogs.length === 0 ? (
             <div className="col-span-full text-center py-10 text-muted-foreground">No articles found.</div>
          ) : (
            blogs.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <motion.article
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-soft"
                  whileHover={{ y: -6, boxShadow: "0 40px 80px -30px oklch(0.245 0.05 158 / 0.35)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.coverImage || post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    {/* Category badge */}
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-forest-deep/80 px-3 py-1 text-[0.6rem] tracking-[0.2em] font-medium uppercase text-gold-soft backdrop-blur-sm">
                      <Tag className="h-2.5 w-2.5" />
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-7">
                    {/* Meta row */}
                    <div className="flex items-center gap-3 text-[0.7rem] tracking-wide text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-xl leading-snug text-foreground sm:text-[1.35rem]">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    {/* Read more link */}
                    <Link
                      to="/blog/$blogSlug"
                      params={{ blogSlug: post.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-gold transition-all duration-300 hover:gap-3"
                    >
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-gold to-gold-soft transition-all duration-500 group-hover:w-full" />
                </motion.article>
              </Reveal>
            ))
          )}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-all hover:border-gold hover:text-gold"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <SectionHeading eyebrow="Testimonials" title="Journeys our pilgrims remember" />

        <div className="relative mt-14 min-h-[20rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] bg-card p-9 text-center shadow-luxe sm:p-12"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">
                {t.name.charAt(0)}
              </div>
              <div className="mt-5 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl leading-relaxed text-foreground italic sm:text-[1.7rem]">
                “{t.text}”
              </p>
              <footer className="mt-7">
                <p className="text-base text-foreground">{t.name}</p>
                <p className="mt-1 text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  {t.city}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-3 bg-border"}`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <SectionHeading eyebrow="FAQs" title="Everything you may want to ask" />
        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl text-foreground sm:text-2xl">{q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-gold">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 leading-relaxed text-muted-foreground">{a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingCta() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <img
        src={cta}
        alt="Snow covered Himalayan range at blue hour"
        loading="lazy"
        width={1920}
        height={912}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 bg-forest-deep/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow">Your journey awaits</p>
          <h2 className="mt-5 text-4xl leading-[1.1] text-white sm:text-6xl">
            Begin Your Sacred Char Dham Journey Today
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-9 py-4 text-sm tracking-wide text-forest-deep transition-transform hover:scale-105"
            >
              Book Now
            </Link>
            <a
              href="tel:+91 97607 12664"
              className="inline-flex items-center gap-2 rounded-full border border-white/45 px-9 py-4 text-sm tracking-wide text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" strokeWidth={1.6} />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Speak with a Char Dham planner
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Call, message or write to us — we usually reply within an hour during yatra season.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
              <a href="tel:+91 97607 12664" className="text-foreground hover:text-gold">
                +91 97607 12664
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
              <a
                href="https://wa.me/919760712664"
                className="text-foreground hover:text-gold"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: +91 97607 12664
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
              <a href="mailto:Holidaysyamuna@gmail.com" className="text-foreground hover:text-gold">
                Holidaysyamuna@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
              <span className="text-foreground">
                Trikhali, Kunshala, Rana, Uttarakhand 249141, India
              </span>
            </li>
          </ul>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] shadow-soft">
            <iframe
              title="Yamuna Holidays office location"
              src="https://www.google.com/maps?q=30.9073163,78.348665&output=embed"
              loading="lazy"
              className="h-72 w-full border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-[2rem] bg-card p-7 shadow-luxe sm:p-10"
          >
            <h3 className="text-2xl">Booking Inquiry</h3>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow text-[0.6rem]">Name</span>
                <input required className={fieldClass} placeholder="Your full name" />
              </label>
              <label className="block">
                <span className="eyebrow text-[0.6rem]">Phone</span>
                <input required type="tel" className={fieldClass} placeholder="+91" />
              </label>
              <label className="block sm:col-span-2">
                <span className="eyebrow text-[0.6rem]">Email</span>
                <input required type="email" className={fieldClass} placeholder="you@email.com" />
              </label>
              <label className="block">
                <span className="eyebrow text-[0.6rem]">Package</span>
                <select className={fieldClass} defaultValue="char-dham">
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
                <span className="eyebrow text-[0.6rem]">Travel Date</span>
                <input type="date" className={fieldClass} />
              </label>
              <label className="block sm:col-span-2">
                <span className="eyebrow text-[0.6rem]">Number of Travelers</span>
                <input type="number" min={1} defaultValue={2} className={fieldClass} />
              </label>
              <label className="block sm:col-span-2">
                <span className="eyebrow text-[0.6rem]">Message</span>
                <textarea
                  rows={4}
                  className={fieldClass}
                  placeholder="Tell us about your group, preferred dates or special requirements"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" strokeWidth={1.7} />
              Send Inquiry
            </button>
            {sent ? (
              <p className="mt-4 text-center text-sm text-gold">
                Thank you — our yatra planner will call you shortly.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const footerCols = [
  {
    title: "Char Dham",
    links: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
  },
  {
    title: "Packages",
    links: ["Complete Char Dham", "Do Dham Yatra", "Helicopter Package", "Senior Citizen Special"],
  },
  {
    title: "Quick Links",
    links: ["About Us", "Yatra Process", "Gallery", "Contact"],
  },
  {
    title: "Policies",
    links: ["Terms & Conditions", "Privacy Policy", "Cancellation Policy", "Payment Terms"],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep pt-20 pb-10 text-white/70">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div>
            <Link to="/" className="flex items-center gap-3 w-fit">
              <img
                src={logoUrl}
                alt="Yamuna Holidays Logo"
                className="h-14 w-14 object-contain shrink-0 rounded-full bg-white/10"
              />
              <span>
                <span className="block font-display text-xl text-white">Yamuna Holidays</span>
                <span className="block text-[0.6rem] tracking-[0.28em] uppercase">
                  Char Dham Yatra
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Your trusted partner for Char Dham Yatra. Government-registered Uttarakhand
              pilgrimage specialists with 15+ years of Himalayan experience.
            </p>
            <div className="mt-6 flex gap-3">
              {["Facebook", "Instagram", "YouTube", "WhatsApp"].map((s) => (
                <Link
                  key={s}
                  to="/contact"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs transition-colors hover:border-gold hover:text-gold-soft"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm tracking-[0.22em] text-gold-soft uppercase">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => {
                  let to = "/";
                  let hash = undefined;
                  let params = undefined;

                  if (col.title === "Char Dham") {
                    to = "/destinations/$destSlug";
                    params = { destSlug: l.toLowerCase() };
                  } else if (col.title === "Packages") {
                    to = "/packages/$packageSlug";
                    let slug = "complete-char-dham";
                    if (l.includes("Do Dham")) slug = "do-dham-yatra";
                    if (l.includes("Helicopter")) slug = "char-dham-by-helicopter";
                    if (l.includes("Senior")) slug = "senior-citizen-special";
                    params = { packageSlug: slug };
                  } else if (col.title === "Quick Links") {
                    if (l === "About Us") to = "/about";
                    else if (l === "Yatra Process") { to = "/"; hash = "process"; }
                    else if (l === "Gallery") { to = "/"; hash = "gallery"; }
                    else if (l === "Contact") to = "/contact";
                  } else {
                    to = "/contact";
                  }

                  return (
                    <li key={l}>
                      <Link to={to} hash={hash} params={params} className="transition-colors hover:text-white">
                        {l}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Yamuna Holidays. All rights reserved.</p>
          <p>Rishikesh · Haridwar · Dehradun, Uttarakhand</p>
        </div>
      </div>
    </footer>
  );
}
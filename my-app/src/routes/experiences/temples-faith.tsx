import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, CalendarDays, Phone } from "lucide-react";

export const Route = createFileRoute("/experiences/temples-faith")({
  head: () => ({
    meta: [
      { title: "Temples & Faith | Yamuna Holidays – Sacred Uttarakhand" },
      {
        name: "description",
        content:
          "Explore sacred temples of Uttarakhand — from the Char Dham circuit to Tungnath, Triyuginarayan, Kartik Swami, and Jageshwar Dham. Book your pilgrimage with Yamuna Holidays.",
      },
    ],
  }),
  component: TemplesFaithPage,
});

const temples = [
  {
    name: "Yamunotri",
    location: "Uttarkashi District",
    altitude: "3,293 m",
    bestTime: "May – June, Sep – Oct",
    description:
      "The first dham of the Char Dham circuit. Sacred to Goddess Yamuna, reached through cedar forests past the boiling Surya Kund hot spring.",
    highlights: ["Surya Kund hot spring", "Divya Shila rock", "Janki Chatti trek"],
    image: "/images/yamunotri.jpg",
    tag: "Char Dham",
  },
  {
    name: "Gangotri",
    location: "Uttarkashi District",
    altitude: "3,100 m",
    bestTime: "May – June, Sep – Oct",
    description:
      "Where the sacred Ganga descended to earth. A serene white temple on emerald waters, watched over by granite Himalayan spires.",
    highlights: ["Bhagirath Shila", "Gaumukh glacier trail", "Evening Ganga aarti"],
    image: "/images/gangotri.jpg",
    tag: "Char Dham",
  },
  {
    name: "Kedarnath",
    location: "Rudraprayag District",
    altitude: "3,583 m",
    bestTime: "May – June, Sep – Oct",
    description:
      "One of the twelve Jyotirlingas, standing in timeless stone silence beneath the Kedarnath massif — the most moving moment of any pilgrimage.",
    highlights: ["Jyotirlinga darshan", "Gaurikund trek", "Helicopter shuttle"],
    image: "/images/kedarnath.jpg",
    tag: "Char Dham",
  },
  {
    name: "Badrinath",
    location: "Chamoli District",
    altitude: "3,300 m",
    bestTime: "May – June, Sep – Oct",
    description:
      "The vividly painted seat of Lord Vishnu beneath Neelkanth peak, with healing Tapt Kund springs and Mana — the last Indian village before Tibet.",
    highlights: ["Tapt Kund", "Mana village", "Vasudhara Falls"],
    image: "/images/badrinath.jpg",
    tag: "Char Dham",
  },
  {
    name: "Tungnath",
    location: "Rudraprayag District",
    altitude: "3,680 m",
    bestTime: "May – Nov",
    description:
      "The highest Shiva temple in the world, perched above a rhododendron forest with sweeping views of Nanda Devi, Kedarnath and Chaukhamba peaks.",
    highlights: ["World's highest Shiva temple", "Chandrashila summit nearby", "Rhododendron forests"],
    image: "/images/tungnath.jpg",
    tag: "Panch Kedar",
  },
  {
    name: "Triyuginarayan",
    location: "Rudraprayag District",
    altitude: "1,980 m",
    bestTime: "Year-round",
    description:
      "The mythological site of Lord Shiva and Parvati's divine wedding. An eternal fire burns in the temple courtyard — a symbol of eternal union.",
    highlights: ["Akhand dhuni eternal fire", "Vishnu Kund", "Divine marriage site"],
    image: "/images/triyuginarayan.jpg",
    tag: "Mythological",
  },
  {
    name: "Kartik Swami",
    location: "Rudraprayag District",
    altitude: "3,048 m",
    bestTime: "Apr – Nov",
    description:
      "A serene hilltop shrine dedicated to Kartikeya (Murugan), Son of Shiva — offering sweeping panoramas of the snow-capped Himalayan ranges.",
    highlights: ["Panoramic Himalayan views", "Short scenic trek", "Ancient temple"],
    image: "/images/kartik_swami.png",
    tag: "Hidden Gem",
  },
  {
    name: "Jageshwar Dham",
    location: "Almora District",
    altitude: "1,870 m",
    bestTime: "Year-round",
    description:
      "A cluster of 124 ancient stone temples nestled in a dense deodar forest — one of the most important Shiva shrines in all of North India.",
    highlights: ["124 ancient temples", "Deodar forest setting", "Nagesh inscription"],
    image: "/images/jageshwar_dham.png",
    tag: "Ancient Temples",
  },
];

function TemplesFaithPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/kedarnath.jpg"
            alt="Kedarnath temple in the Himalayan mountains"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-amber-900/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-amber-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Find Your Uttarakhand
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Temples & Faith
              </h1>
              <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Sacred Char Dham shrines, ancient Jyotirlingas and mythological sites — pilgrimage routes that have guided souls for over a thousand years.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Sacred Sites"
              title="Temples, shrines & pilgrim destinations"
              intro="Each destination carries centuries of devotion. Our pilgrimage specialists handle all permits, registrations and logistics so you can focus entirely on your faith."
            />

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {temples.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.07}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="group h-full flex flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft border border-border/30"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className="inline-block rounded-full bg-amber-500/90 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-white uppercase">
                          {t.tag}
                        </span>
                        <h3 className="mt-2 font-display text-2xl text-white">{t.name}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        {t.location}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>

                      <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border/60 py-4 text-sm">
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase flex items-center gap-1">
                            <CalendarDays className="h-3 w-3 text-gold" /> Best Time
                          </dt>
                          <dd className="mt-1 font-medium text-foreground">{t.bestTime}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                            Altitude
                          </dt>
                          <dd className="mt-1 font-medium text-foreground">{t.altitude}</dd>
                        </div>
                      </dl>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {t.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6">
                        <Link
                          to="/contact"
                          search={{ subject: `Pilgrimage Enquiry: ${t.name}` }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                        >
                          Plan this pilgrimage <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-10">
            <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 sm:p-16 relative overflow-hidden shadow-luxe">
              <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10 text-[20rem] font-display leading-none select-none">
                ॐ
              </div>
              <div className="relative z-10 max-w-2xl">
                <p className="text-amber-300 font-semibold uppercase tracking-[0.25em] text-xs">
                  Start Your Sacred Journey
                </p>
                <h2 className="font-display text-3xl sm:text-5xl mt-4 leading-tight">
                  Let us plan your pilgrimage
                </h2>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed text-base sm:text-lg">
                  Our yatra specialists handle all registrations, accommodation near the temple gates, and 24×7 coordination — so your mind stays on devotion.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ subject: "Temples & Faith Pilgrimage Enquiry" }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-105"
                  >
                    Enquire Now <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+91 97607 12664"
                    className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                  >
                    <Phone className="h-4 w-4" /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, CalendarDays, Phone } from "lucide-react";

export const Route = createFileRoute("/experiences/lakes-hills")({
  head: () => ({
    meta: [
      { title: "Lakes & Hills of Uttarakhand | Yamuna Holidays" },
      {
        name: "description",
        content:
          "Discover the beautiful lakes and hill stations of Uttarakhand — Nainital, Bhimtal, Tehri Lake, Sattal, Kausani, Mussoorie and more.",
      },
    ],
  }),
  component: LakesHillsPage,
});

type FilterType = "All" | "Lakes" | "Hills";

const destinations = [
  {
    name: "Nainital",
    type: "Lakes",
    location: "Kumaon Division",
    altitude: "2,084 m",
    bestTime: "Mar – Jun, Sep – Nov",
    description:
      "The 'Lake District of India' — a crescent-shaped emerald lake ringed by forested hills and colonial-era charm, Uttarakhand's most beloved hill station.",
    highlights: ["Naini Lake boating", "Snow View Point", "Mall Road"],
    image: "/images/nainital.jpg",
  },
  {
    name: "Bhimtal",
    type: "Lakes",
    location: "Nainital District",
    altitude: "1,370 m",
    bestTime: "Year-round",
    description:
      "Quieter and larger than Nainital, Bhimtal's lake is dotted with an island aquarium and surrounded by dense oak and rhododendron forests.",
    highlights: ["Island aquarium", "Rowboat & kayak", "Bhimtal temple"],
    image: "/images/bhimtal.png",
  },
  {
    name: "Tehri Lake",
    type: "Lakes",
    location: "Tehri Garhwal District",
    altitude: "820 m",
    bestTime: "Year-round",
    description:
      "India's largest man-made reservoir, created by the Tehri Dam. Offers jet skiing, kayaking, parasailing and stunning dam-side views.",
    highlights: ["Jet skiing & parasailing", "Dam viewpoint", "Adventure sports hub"],
    image: "/images/tehri_lake.jpg",
  },
  {
    name: "Sattal",
    type: "Lakes",
    location: "Nainital District",
    altitude: "1,370 m",
    bestTime: "Mar – Jun, Oct – Nov",
    description:
      "A cluster of seven interconnected freshwater lakes hidden in oak and pine forests — a paradise for birdwatchers and nature lovers.",
    highlights: ["7 interconnected lakes", "Birdwatching haven", "Kayaking & camping"],
    image: "/images/sattal.jpg",
  },
  {
    name: "Mussoorie",
    type: "Hills",
    location: "Dehradun District",
    altitude: "2,005 m",
    bestTime: "Mar – Jun, Sep – Nov",
    description:
      "The 'Queen of Hills' — Uttarakhand's most popular hill station with sweeping Doon Valley views, colonial-era charm and the famous Kempty Falls.",
    highlights: ["Kempty Falls", "Gun Hill cable car", "Mall Road & Camel's Back Road"],
    image: "/images/mussorie_new.jpg",
  },
  {
    name: "Kausani",
    type: "Hills",
    location: "Bageshwar District",
    altitude: "1,890 m",
    bestTime: "Mar – Jun, Sep – Nov",
    description:
      "Gandhi's 'Switzerland of India' — a peaceful tea-garden village offering one of the broadest Himalayan panoramas, from Nanda Devi to Panchachuli peaks.",
    highlights: ["Nanda Devi panorama", "Tea gardens", "Anashakti Ashram"],
    image: "/images/kausani.png",
  },
  {
    name: "Mukteshwar",
    type: "Hills",
    location: "Nainital District",
    altitude: "2,285 m",
    bestTime: "Mar – Jun, Sep – Dec",
    description:
      "A serene village with a Shiva temple, apple orchards and a sheer rock face for thrill-seekers. Stunning views of the Kumaon Himalayas at sunrise.",
    highlights: ["Shiva temple & chauli ki jaali", "Rock climbing", "Apple orchard stays"],
    image: "/images/mukteshwar_new.jpg",
  },
  {
    name: "Chopta",
    type: "Hills",
    location: "Rudraprayag District",
    altitude: "2,680 m",
    bestTime: "Apr – Jun, Sep – Nov",
    description:
      "Mini Switzerland of India — a meadow-covered ridgeline in the Kedarnath wildlife sanctuary, base camp for the Tungnath–Chandrashila trek.",
    highlights: ["Chandrashila summit", "Rhododendron forest", "Deer & monal pheasant"],
    image: "/images/chopta_new.jpg",
  },
  {
    name: "Ranikhet",
    type: "Hills",
    location: "Almora District",
    altitude: "1,829 m",
    bestTime: "Mar – Jun, Sep – Nov",
    description:
      "A quiet cantonment hill town ringed by pine and oak forests, with sweeping views of Nanda Devi — free of the tourist hustle of other hill stations.",
    highlights: ["Golf course at 1,800m", "Jhula Devi temple", "Kumaon Regimental Centre"],
    image: "/images/ranikhet_new.jpg",
  },
];

const filters: FilterType[] = ["All", "Lakes", "Hills"];

function LakesHillsPage() {
  const [active, setActive] = useState<FilterType>("All");
  const filtered = active === "All" ? destinations : destinations.filter((d) => d.type === active);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/nainital.jpg"
            alt="Nainital lake Uttarakhand"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/80 via-sky-900/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-sky-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Find Your Uttarakhand
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Lakes & Hills
              </h1>
              <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Alpine lakes shimmering with Himalayan reflections, misty hill stations and cool forested valleys — Uttarakhand's serene side.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Lakes & Hill Stations"
              title="Discover Uttarakhand's scenic splendour"
              intro="Filter by type and explore destinations that match your mood — from adventure water sports to quiet mountain sunrises."
            />

            {/* Filter Pills */}
            <div className="mt-10 flex justify-center gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  id={`filter-${f.toLowerCase()}`}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${active === f
                    ? "bg-primary text-primary-foreground shadow-soft scale-105"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-primary"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
              >
                {filtered.map((d, i) => (
                  <Reveal key={d.name} delay={i * 0.06}>
                    <motion.article
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className="group h-full flex flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft border border-border/30"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={d.image}
                          alt={d.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <span className={`inline-block rounded-full px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-white uppercase ${d.type === "Lakes" ? "bg-sky-500/90" : "bg-emerald-600/90"}`}>
                            {d.type}
                          </span>
                          <h3 className="mt-2 font-display text-2xl text-white">{d.name}</h3>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                          <MapPin className="h-3.5 w-3.5 text-gold" />
                          {d.location}
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                        <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border/60 py-4 text-sm">
                          <div>
                            <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase flex items-center gap-1">
                              <CalendarDays className="h-3 w-3 text-gold" /> Best Time
                            </dt>
                            <dd className="mt-1 text-xs font-medium text-foreground">{d.bestTime}</dd>
                          </div>
                          <div>
                            <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase">Altitude</dt>
                            <dd className="mt-1 text-xs font-medium text-foreground">{d.altitude}</dd>
                          </div>
                        </dl>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {d.highlights.map((h) => (
                            <span key={h} className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground">
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto pt-6">
                          <Link
                            to="/contact"
                            search={{ subject: `Lakes & Hills Enquiry: ${d.name}` }}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                          >
                            Plan your visit <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-10">
            <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 sm:p-16 relative overflow-hidden shadow-luxe">
              <div className="relative z-10 max-w-2xl">
                <p className="text-sky-300 font-semibold uppercase tracking-[0.25em] text-xs">
                  Plan Your Escape
                </p>
                <h2 className="font-display text-3xl sm:text-5xl mt-4 leading-tight">
                  Your perfect hill station awaits
                </h2>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed">
                  Weekend getaway or week-long retreat — we curate hotel stays, sightseeing and travel so you arrive refreshed.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ subject: "Lakes & Hills Holiday Enquiry" }}
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

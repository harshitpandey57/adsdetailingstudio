import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, CalendarDays, Phone, Snowflake } from "lucide-react";

export const Route = createFileRoute("/experiences/snow-skiing")({
  head: () => ({
    meta: [
      { title: "Snow & Skiing in Uttarakhand | Yamuna Holidays" },
      {
        name: "description",
        content:
          "Experience the best snow destinations and ski resorts in Uttarakhand — Auli, Dayara Bugyal, Munsiyari, Mundali and Chopta.",
      },
    ],
  }),
  component: SnowSkiingPage,
});

const destinations = [
  {
    name: "Auli",
    location: "Chamoli District",
    altitude: "2,519 m",
    bestTime: "Dec – Mar (skiing); Apr – Jun (meadows)",
    activity: "Skiing & Snowboarding",
    description:
      "India's premier ski destination — groomed slopes managed by GMVN with a 4 km ski run, Asia's longest cable car and breathtaking views of Nanda Devi.",
    highlights: ["4 km ski run", "GMVN ski school", "Nanda Devi views", "Cable car to 3,049 m"],
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&q=80",
    tag: "Premier Ski Resort",
    tagColor: "bg-blue-500",
  },
  {
    name: "Dayara Bugyal",
    location: "Uttarkashi District",
    altitude: "3,408 m",
    bestTime: "Jan – Mar",
    activity: "Snow Trekking & Skiing",
    description:
      "A vast alpine meadow transformed into a sea of white in winter. Ideal for beginner-level skiing and unforgettable snow camping experiences.",
    highlights: ["Beginner-friendly slopes", "Snow camping", "Bandarpunch peak views", "Pristine snowfields"],
    image: "/images/dayara_bugyal_new.png",
    tag: "Snow Trekking",
    tagColor: "bg-sky-500",
  },
  {
    name: "Munsiyari",
    location: "Pithoragarh District",
    altitude: "2,200 m",
    bestTime: "Dec – Feb",
    activity: "Snow Trekking & Photography",
    description:
      "The 'Little Kashmir of Uttarakhand' — a remote Himalayan frontier town draped in snow from December to February, with the Panchachuli peaks looming large.",
    highlights: ["Panchachuli views", "Khaliya Top trek", "Birthi Falls", "Tribal culture"],
    image: "/images/munsiyari.png",
    tag: "Snow Trekking",
    tagColor: "bg-sky-500",
  },
  {
    name: "Mundali",
    location: "Chakrata, Dehradun District",
    altitude: "2,800 m",
    bestTime: "Dec – Mar",
    activity: "Skiing & Snow Play",
    description:
      "A hidden gem near Chakrata — an untouched snowfield perfect for snow play, short ski runs and a peaceful alternative to busy Auli.",
    highlights: ["Uncrowded slopes", "Snow play area", "Pine forest setting", "Beginner skiing"],
    image: "/images/mundali.png",
    tag: "Hidden Gem",
    tagColor: "bg-purple-500",
  },
  {
    name: "Chopta",
    location: "Rudraprayag District",
    altitude: "2,680 m",
    bestTime: "Jan – Mar",
    activity: "Snow Trek to Tungnath",
    description:
      "The winter snow trek to Tungnath — the world's highest Shiva temple — is an experience unlike any other. Crystal-clear skies and knee-deep snow make it magical.",
    highlights: ["Tungnath snow trek", "Chandrashila in winter", "Golden sunrise on snow"],
    image: "/images/chopta_snow.png",
    tag: "Winter Trek",
    tagColor: "bg-indigo-500",
  },
];

function SnowSkiingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1548777123-e216912df7d8?w=1600&q=85"
            alt="Auli ski resort Uttarakhand"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-blue-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Find Your Uttarakhand
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Snow & Skiing
              </h1>
              <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                India's best ski slopes, pristine winter snowfields and breathtaking snow-capped peaks — Uttarakhand in winter is a world apart.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Snow Destinations"
              title="Slopes, snowfields & winter magic"
              intro="Whether you're a first-time skier or a seasoned snow trekker, Uttarakhand's winter landscapes offer an experience you'll never forget."
            />

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {destinations.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.07}>
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
                        <span className={`inline-block rounded-full ${d.tagColor} px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-white uppercase`}>
                          {d.tag}
                        </span>
                        <h3 className="mt-2 font-display text-2xl text-white">{d.name}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        {d.location}
                      </div>
                      <p className="text-xs text-blue-600 font-semibold tracking-wide mb-3 flex items-center gap-1">
                        <Snowflake className="h-3 w-3" /> {d.activity}
                      </p>
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
                          search={{ subject: `Snow & Skiing Enquiry: ${d.name}` }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                        >
                          Plan this trip <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-10">
            <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 sm:p-16 relative overflow-hidden shadow-luxe">
              <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
                <Snowflake className="h-96 w-96" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <p className="text-blue-300 font-semibold uppercase tracking-[0.25em] text-xs">Book Your Snow Trip</p>
                <h2 className="font-display text-3xl sm:text-5xl mt-4 leading-tight">Gear up for Uttarakhand's winter</h2>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed">
                  We arrange ski equipment rental, GMVN ski instructors, warm accommodation near the slopes and safe transport on mountain roads.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ subject: "Snow & Skiing Trip Enquiry" }}
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

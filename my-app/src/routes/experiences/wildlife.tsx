import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, CalendarDays, Phone, Bird } from "lucide-react";

export const Route = createFileRoute("/experiences/wildlife")({
  head: () => ({
    meta: [
      { title: "Wildlife of Uttarakhand | Yamuna Holidays" },
      {
        name: "description",
        content:
          "Explore Uttarakhand's rich wildlife — Jim Corbett, Rajaji National Park, Nanda Devi Biosphere, Binsar Wildlife Sanctuary and Kedarnath Wildlife Sanctuary.",
      },
    ],
  }),
  component: WildlifePage,
});

const sanctuaries = [
  {
    name: "Jim Corbett National Park",
    location: "Nainital & Pauri Districts",
    bestTime: "Nov – Jun",
    area: "520 km²",
    description:
      "India's oldest national park and the cradle of Project Tiger. Home to over 200 Bengal tigers, leopards, elephants and 600+ bird species in dense sal forests.",
    highlights: ["Bengal tiger safari", "Elephant safari", "Dhikala Zone", "600+ bird species"],
    image: "/images/jim_corbett.jpg",
    tag: "Tiger Reserve",
    tagColor: "bg-orange-500",
  },
  {
    name: "Rajaji National Park",
    location: "Haridwar & Dehradun Districts",
    bestTime: "Nov – Jun",
    area: "820 km²",
    description:
      "A 820 km² wilderness at the Himalayan foothills, home to large herds of wild Asian elephants, tigers, leopards and over 315 bird species including the great hornbill.",
    highlights: ["Asian elephant herds", "Great hornbill", "Jeep & elephant safaris", "Chilla range"],
    image: "/images/rajaji.jpg",
    tag: "Elephant Corridor",
    tagColor: "bg-emerald-600",
  },
  {
    name: "Nanda Devi Biosphere Reserve",
    location: "Chamoli District",
    bestTime: "May – Oct",
    area: "5,860 km²",
    description:
      "A UNESCO World Heritage Site surrounding the 7,816 m Nanda Devi peak. Snow leopards, Himalayan musk deer, bharal (blue sheep) and rare medicinal plants inhabit this pristine wilderness.",
    highlights: ["Snow leopard habitat", "Himalayan musk deer", "UNESCO World Heritage", "Alpine flora"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    tag: "UNESCO Site",
    tagColor: "bg-blue-500",
  },
  {
    name: "Binsar Wildlife Sanctuary",
    location: "Almora District",
    bestTime: "Mar – Jun, Sep – Nov",
    area: "47 km²",
    description:
      "A compact 47 km² forest sanctuary at 2,400m offering spectacular 300 km views of the Himalayas and exceptional birdwatching — over 200 species recorded.",
    highlights: ["Himalayan panorama", "200+ bird species", "Leopard & deer sightings", "Quiet oak forests"],
    image: "/images/binsar.png",
    tag: "Birdwatching",
    tagColor: "bg-teal-500",
  },
  {
    name: "Kedarnath Wildlife Sanctuary",
    location: "Rudraprayag & Chamoli Districts",
    bestTime: "May – Jun, Sep – Oct",
    area: "975 km²",
    description:
      "The buffer zone of the Kedarnath shrine — a vast high-altitude sanctuary home to snow leopards, Himalayan black bears, musk deer, serow and the resplendent monal pheasant.",
    highlights: ["Snow leopard territory", "Monal pheasant", "Himalayan black bear", "Alpine meadows"],
    image: "https://images.unsplash.com/photo-1698574996391-73f103113f60?w=800&q=80",
    tag: "High Altitude",
    tagColor: "bg-purple-500",
  },
];

function WildlifePage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/jim_corbett.jpg"
            alt="Tiger in Jim Corbett"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-emerald-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Find Your Uttarakhand
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Wildlife
              </h1>
              <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Tigers stalking sal forests, elephants crossing ancient corridors, snow leopards on frozen ridgelines — Uttarakhand's wild heart is extraordinary.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Wildlife Sanctuaries"
              title="National Parks & Nature Reserves"
              intro="From terai grasslands to high-altitude sanctuaries, Uttarakhand protects an extraordinary range of Himalayan and subtropical wildlife."
            />

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {sanctuaries.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.07}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="group h-full flex flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft border border-border/30"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className={`inline-block rounded-full ${s.tagColor} px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-white uppercase`}>
                          {s.tag}
                        </span>
                        <h3 className="mt-2 font-display text-2xl text-white leading-tight">{s.name}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        {s.location}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                      <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border/60 py-4 text-sm">
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase flex items-center gap-1">
                            <CalendarDays className="h-3 w-3 text-gold" /> Best Time
                          </dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{s.bestTime}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase">Area</dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{s.area}</dd>
                        </div>
                      </dl>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.highlights.map((h) => (
                          <span key={h} className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-6">
                        <Link
                          to="/contact"
                          search={{ subject: `Wildlife Safari Enquiry: ${s.name}` }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                        >
                          Plan a safari <ArrowUpRight className="h-4 w-4" />
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
                <Bird className="h-96 w-96" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <p className="text-emerald-300 font-semibold uppercase tracking-[0.25em] text-xs">Book Your Safari</p>
                <h2 className="font-display text-3xl sm:text-5xl mt-4 leading-tight">Into the wild with expert naturalists</h2>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed">
                  Our naturalist guides, safari jeep booking, forest rest-house stays and permit arrangements are all handled — you just watch for the tiger.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ subject: "Wildlife Safari Enquiry" }}
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

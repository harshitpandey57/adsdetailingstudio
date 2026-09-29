import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, CalendarDays, Phone, Home } from "lucide-react";

export const Route = createFileRoute("/experiences/village-life")({
  head: () => ({
    meta: [
      { title: "Village Life in Uttarakhand | Yamuna Holidays" },
      {
        name: "description",
        content:
          "Experience authentic Garhwali & Kumaoni village life — Harsil, Mana, Khirsu, Munsiyari, Chopta and local homestays in the Himalayas.",
      },
    ],
  }),
  component: VillageLifePage,
});

const villages = [
  {
    name: "Mana Village",
    location: "Chamoli District, Near Badrinath",
    altitude: "3,200 m",
    bestTime: "May – Jun, Sep – Oct",
    description:
      "The last Indian village before the Tibetan plateau, just 3 km from Badrinath. Local Bhotiya community, ancient cave of Vyas Rishi and the Saraswati river's origin make this utterly unique.",
    highlights: ["Last Indian village", "Vyas Gufa cave", "Bhim Pul natural rock bridge", "Saraswati river source"],
    image: "/images/village_mana.jpg",
    tag: "Frontier Village",
    tagColor: "bg-orange-500",
  },
  {
    name: "Harsil",
    location: "Uttarkashi District",
    altitude: "2,620 m",
    bestTime: "Apr – Jun, Sep – Nov",
    description:
      "A hidden Garhwali gem on the upper Bhagirathi river — apple orchards, wooden houses, serene deodar forests and a pace of life untouched by modern tourism.",
    highlights: ["Apple orchards", "Deodar forest walks", "Bhagirathi river", "Wilson's cottage heritage"],
    image: "/images/village_harsil.jpg",
    tag: "Hidden Gem",
    tagColor: "bg-green-500",
  },
  {
    name: "Khirsu",
    location: "Pauri Garhwal District",
    altitude: "1,700 m",
    bestTime: "Mar – Jun, Sep – Nov",
    description:
      "A serene Garhwali village surrounded by dense oak and rhododendron forests, with unobstructed views of Chaukhamba, Nanda Devi and Trishul peaks — barely visited by tourists.",
    highlights: ["Himalayan panorama", "Apple & pear orchards", "Garhwali homestays", "Quiet forest trails"],
    image: "/images/village_khirsu.jpg",
    tag: "Slow Travel",
    tagColor: "bg-amber-500",
  },
  {
    name: "Munsiyari",
    location: "Pithoragarh District",
    altitude: "2,200 m",
    bestTime: "Apr – Jun, Sep – Nov",
    description:
      "A Shauka tribe frontier town with a rich weaving tradition, yak wool shawl markets and the magnificent Panchachuli five-peak glacier dominating the skyline.",
    highlights: ["Shauka tribe culture", "Yak wool shawls", "Birthi Falls", "Panchachuli glacier views"],
    image: "/images/village_4.jpg",
    tag: "Tribal Culture",
    tagColor: "bg-purple-500",
  },
  {
    name: "Tirthan Valley",
    location: "Kullu-Manali border, Chamoli",
    altitude: "1,600 m",
    bestTime: "Mar – Jun, Sep – Nov",
    description:
      "A remote valley of traditional wooden houses, trout streams, great Himalayan national park treks and authentic Himachali-Garhwali village hospitality.",
    highlights: ["Trout fishing", "Wooden heritage houses", "GHN Park gateway", "Birdwatching & hiking"],
    image: "/images/village_5.jpg",
    tag: "Rural Retreat",
    tagColor: "bg-teal-500",
  },
  {
    name: "Chopta Villages",
    location: "Rudraprayag District",
    altitude: "1,800 – 2,700 m",
    bestTime: "Apr – Jun, Sep – Nov",
    description:
      "The small shepherd hamlets around Chopta — Ukhimath, Dugalbitta and Baniyakund — offer authentic Garhwali hospitality in a landscape of cedar forests and Himalayan peaks.",
    highlights: ["Shepherd culture", "Garhwali homestays", "Cedar forest walks", "Local cuisine"],
    image: "/images/village_chopta.jpg",
    tag: "Shepherd Country",
    tagColor: "bg-lime-600",
  },
];

function VillageLifePage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/mussoorie.jpg"
            alt="Himalayan village life Uttarakhand"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-950/80 via-orange-900/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-orange-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Find Your Uttarakhand
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Village Life
              </h1>
              <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Wooden houses with Himalayan views, apple orchards, tribal weavers and a pace of life that reminds you what living is for.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Garhwali & Kumaoni Villages"
              title="Slow travel in the high Himalayas"
              intro="Step off the pilgrim circuit and into village Uttarakhand — ancient communities, handloomed textiles, organic mountain food and genuine warm welcome."
            />

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {villages.map((v, i) => (
                <Reveal key={v.name} delay={i * 0.07}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="group h-full flex flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft border border-border/30"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={v.image}
                        alt={v.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className={`inline-block rounded-full ${v.tagColor} px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-white uppercase`}>
                          {v.tag}
                        </span>
                        <h3 className="mt-2 font-display text-2xl text-white">{v.name}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        {v.location}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                      <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border/60 py-4 text-sm">
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase flex items-center gap-1">
                            <CalendarDays className="h-3 w-3 text-gold" /> Best Time
                          </dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{v.bestTime}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase">Altitude</dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{v.altitude}</dd>
                        </div>
                      </dl>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {v.highlights.map((h) => (
                          <span key={h} className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-6">
                        <Link
                          to="/contact"
                          search={{ subject: `Village Stay Enquiry: ${v.name}` }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                        >
                          Plan a village stay <ArrowUpRight className="h-4 w-4" />
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
                <Home className="h-96 w-96" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <p className="text-orange-300 font-semibold uppercase tracking-[0.25em] text-xs">Book a Village Stay</p>
                <h2 className="font-display text-3xl sm:text-5xl mt-4 leading-tight">Live the Garhwali way of life</h2>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed">
                  We connect you with authentic homestay families, village guides and local experiences — from cooking traditional Garhwali food to working in apple orchards.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ subject: "Village Life Homestay Enquiry" }}
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

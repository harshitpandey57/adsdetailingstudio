import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mountain, Timer, Phone } from "lucide-react";

export const Route = createFileRoute("/experiences/trekking")({
  head: () => ({
    meta: [
      { title: "Trekking in Uttarakhand | Yamuna Holidays" },
      {
        name: "description",
        content:
          "Explore the best treks in Uttarakhand — Har Ki Dun, Valley of Flowers, Kuari Pass, Dayara Bugyal and more. Expert guides and full logistics with Yamuna Holidays.",
      },
    ],
  }),
  component: TrekkingPage,
});

const treks = [
  {
    name: "Gulabi Kantha track",
    location: "Ukhimath, Uttarakhand",
    duration: "3-4 Days",
    difficulty: "Easy-Moderate",
    bestTime: "December - April",
    description: "Gulabi Kantha is a popular winter trek in Uttarakhand known for its stunning snow-covered meadows. The trek offers panoramic views of Himalayan peaks including Swargarohini, Bandarpoonch, and Kedarnath.",
    highlights: ["Snow trek in winter", "360° Himalayan panorama", "Beginner-friendly"],
    image: "/images/gulabi_kantha.jpeg",
    difficultyColor: "bg-emerald-500",
  },
  {
    name: "Valley of Flowers",
    location: "Chamoli District",
    altitude: "3,658 m",
    duration: "6 Days",
    difficulty: "Easy – Moderate",
    bestTime: "Jul – Sep",
    description:
      "A UNESCO World Heritage Site bursting with hundreds of species of alpine wildflowers. One of the most magical walks in all the Himalayas.",
    highlights: ["UNESCO World Heritage", "500+ flower species", "Hemkund Sahib nearby"],
    image: "/images/valley_of_flowers.jpg",
    difficultyColor: "bg-emerald-500",
  },
  {
    name: "Har Ki Dun",
    location: "Uttarkashi District",
    altitude: "3,566 m",
    duration: "7 Days",
    difficulty: "Moderate",
    bestTime: "May – Jun, Sep – Nov",
    description:
      "The Valley of Gods — a glacial valley surrounded by ancient forests, Himalayan peaks and the mystical villages of Osla and Gangad still following old Mahabharata traditions.",
    highlights: ["Swargarohini peak views", "Osla village", "Bali Pass extension"],
    image: "/images/har_ki_dun.png",
    difficultyColor: "bg-yellow-500",
  },
  {
    name: "Kuari Pass",
    location: "Chamoli District",
    altitude: "3,640 m",
    duration: "6 Days",
    difficulty: "Moderate",
    bestTime: "Oct – Dec, Mar – Apr",
    description:
      "Lord Curzon's favourite Himalayan walk. Panoramic views of Nanda Devi, Dronagiri, Kamet and Hathi–Ghodi peaks from the open pass.",
    highlights: ["360° Himalayan panorama", "Lord Curzon's Trail", "Tapovan meadows"],
    image: "/images/kuari_pass.png",
    difficultyColor: "bg-yellow-500",
  },
  {
    name: "Dayara Bugyal",
    location: "Uttarkashi District",
    altitude: "3,408 m",
    duration: "4 Days",
    difficulty: "Easy",
    bestTime: "May – Jun, Sep – Nov",
    description:
      "One of India's most beautiful alpine meadows, carpeted in wildflowers in summer and a snow-covered winter wonderland — perfect for beginner trekkers.",
    highlights: ["Vast alpine meadow", "Snow trek in winter", "Bandarpunch views"],
    image: "/images/dayara_bugyal.jpg",
    difficultyColor: "bg-emerald-500",
  },
  {
    name: "Deoria Tal",
    location: "Rudraprayag District",
    altitude: "2,438 m",
    duration: "2 Days",
    difficulty: "Easy",
    bestTime: "Year-round",
    description:
      "A pristine high-altitude lake perfectly reflecting the Chaukhamba massif. A short forest walk from Sari village makes this ideal for families.",
    highlights: ["Chaukhamba reflection", "Sari village base", "Family-friendly"],
    image: "/images/deoria_tal.png",
    difficultyColor: "bg-emerald-500",
  },
  {
    name: "Roopkund Trek",
    location: "Chamoli District",
    altitude: "5,029 m",
    duration: "8 Days",
    difficulty: "Difficult",
    bestTime: "May – Jun, Sep",
    description:
      "The mysterious skeleton lake at 5,000m. High-altitude ridgelines, vast bugyals and one of the most dramatic destinations in the Indian Himalayas.",
    highlights: ["Skeleton lake at 5,029m", "Bedni Bugyal meadows", "Ali Bugyal"],
    image: "/images/roopkund_trek.png",
    difficultyColor: "bg-red-500",
  },
];

function TrekkingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/himalayan_lake.jpg"
            alt="Himalayan trekking trail"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-900/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-emerald-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Find Your Uttarakhand
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Trekking
              </h1>
              <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Bugyal meadows, glacial moraines, ancient ridgeline trails — Uttarakhand's trekking routes are among the finest in Asia.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Treks Grid */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Trek Destinations"
              title="Trails for every level of adventurer"
              intro="From two-day lakeside walks to high-altitude passes, our expert guides and complete logistics make every trek safe and unforgettable."
            />

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {treks.map((t, i) => (
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
                        <span className={`inline-block rounded-full ${t.difficultyColor} px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-white uppercase`}>
                          {t.difficulty}
                        </span>
                        <h3 className="mt-2 font-display text-2xl text-white">{t.name}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-gold" />
                          {t.location}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>

                      <dl className="mt-5 grid grid-cols-3 gap-2 border-y border-border/60 py-4 text-sm">
                        <div>
                          <dt className="text-[0.6rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase flex items-center gap-1">
                            <Mountain className="h-3 w-3 text-gold" /> Altitude
                          </dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{t.altitude}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.6rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase flex items-center gap-1">
                            <Timer className="h-3 w-3 text-gold" /> Duration
                          </dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{t.duration}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.6rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                            Best Time
                          </dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{t.bestTime}</dd>
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
                          search={{ subject: `Trekking Enquiry: ${t.name}` }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                        >
                          Plan this trek <ArrowUpRight className="h-4 w-4" />
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
                <Mountain className="h-96 w-96" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <p className="text-emerald-300 font-semibold uppercase tracking-[0.25em] text-xs">
                  Book Your Trek
                </p>
                <h2 className="font-display text-3xl sm:text-5xl mt-4 leading-tight">
                  Expert guides, full logistics
                </h2>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed text-base sm:text-lg">
                  From permits and camping gear to acclimatization schedules and emergency support — we handle every detail so you can focus on the trail.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ subject: "Trekking Package Enquiry" }}
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

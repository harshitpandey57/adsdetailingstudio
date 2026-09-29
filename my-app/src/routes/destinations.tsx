import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { destinations } from "@/components/site/data";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Compass, MapPin, CalendarDays, Mountain } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Sacred Destinations | Yamuna Holidays - Char Dham Yatra" },
      {
        name: "description",
        content:
          "Explore the four sacred shrines of the Garhwal Himalayas: Yamunotri, Gangotri, Kedarnath, and Badrinath. Details on altitude, best times to visit, and highlights.",
      },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={heroImg}
            alt="Sunrise over Himalayan peaks"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-amber-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Sacred Sanctuaries
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                The Four Holy Shrines
              </h1>
              <p className="text-white/90 text-base sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                Journey to the places where the earth touches the heavens. Understand the altitude, mythology, and trails of Uttarakhand's Char Dham.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Shrines Overview Section */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Detailed Travel Guides"
              title="Click on any Dham to see the complete guide, rituals and how to reach"
              intro="Proper planning is key to high-altitude Himalayan pilgrimages. Get standard advice on routes, temperatures, and darshan details."
            />

            <div className="mt-20 grid gap-10 sm:grid-cols-2">
              {destinations.map((d, i) => {
                const slug = d.name.toLowerCase();
                return (
                  <Reveal key={d.name} delay={i * 0.1}>
                    <motion.article
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className="group h-full overflow-hidden rounded-[2.5rem] bg-card shadow-soft border border-border/30 flex flex-col"
                    >
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={d.image}
                          alt={`${d.name} temple`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-8">
                          <p className="text-[0.65rem] tracking-[0.3em] text-amber-300 font-semibold uppercase">
                            {d.deity}
                          </p>
                          <h3 className="mt-1 text-3xl sm:text-4xl text-white font-display">{d.name}</h3>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <p className="leading-relaxed text-muted-foreground text-base">{d.description}</p>
                        
                        <div className="mt-auto pt-6">
                          <dl className="grid grid-cols-2 gap-4 border-y border-border/60 py-5 text-sm mb-6">
                            <div>
                              <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase flex items-center gap-1.5">
                                <CalendarDays className="h-3.5 w-3.5 text-gold" /> Best Time
                              </dt>
                              <dd className="mt-1 text-foreground font-medium">{d.best}</dd>
                            </div>
                            <div>
                              <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase flex items-center gap-1.5">
                                <Mountain className="h-3.5 w-3.5 text-gold" /> Altitude
                              </dt>
                              <dd className="mt-1 text-foreground font-medium">{d.altitude}</dd>
                            </div>
                          </dl>
                          
                          <div className="flex flex-wrap gap-2 mb-8">
                            {d.highlights.map((h) => (
                              <span
                                key={h}
                                className="rounded-full bg-secondary/80 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
                              >
                                {h}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-border/30">
                            <Link
                              to="/destinations/$destSlug"
                              params={{ destSlug: slug }}
                              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary transition-colors hover:text-gold"
                            >
                              Explore Detailed Guide
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>

                            <Link
                              to="/packages"
                              className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground font-semibold"
                            >
                              View Packages
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Travel Advisory Section */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-10">
            <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 sm:p-16 relative overflow-hidden shadow-luxe">
              <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
                <Compass className="h-96 w-96" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <p className="text-amber-300 font-semibold uppercase tracking-[0.25em] text-xs">
                  Important Travel Advice
                </p>
                <h2 className="text-3xl sm:text-5xl font-display mt-4 leading-tight">
                  High Altitude Preparation & Safety Guidelines
                </h2>
                <p className="mt-6 text-primary-foreground/80 leading-relaxed text-base sm:text-lg">
                  Travelling to heights above 3,000 meters requires physical preparedness. The shrines open from May to November, with monsoon seasons occurring in July and August. We recommend starting light cardiovascular exercise 30 days before your trip.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="h-6 w-6 text-amber-300 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base text-white">Route Regulations</h4>
                      <p className="mt-1 text-primary-foreground/75">
                        Biometric registration is mandatory for all pilgrims and is covered end-to-end by our teams.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mountain className="h-6 w-6 text-amber-300 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base text-white">Acclimatization</h4>
                      <p className="mt-1 text-primary-foreground/75">
                        We plan stops at intermediate altitudes (e.g. Guptkashi, Barkot) to prevent acute mountain sickness.
                      </p>
                    </div>
                  </div>
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

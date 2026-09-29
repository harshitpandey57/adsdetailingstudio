import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { TransportServices } from "@/components/site/Sections";
import { packages } from "@/components/site/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Clock, 
  Utensils, 
  Check, 
  Search, 
  SlidersHorizontal,
  Compass, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Char Dham Yatra Packages | Yamuna Holidays" },
      {
        name: "description",
        content:
          "Browse our curated Char Dham, Do Dham, and helicopter pilgrimage packages. Flexible pricing, comfortable hotel stays, vegetarian meals, and expert guides.",
      },
    ],
  }),
  component: PackagesPage,
});

// Slug mapper for paths
export const getPackageSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

function PackagesPage() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all"); // all, char-dham, do-dham, single-dham, premium
  const [filterDuration, setFilterDuration] = useState("all"); // all, short (<= 5 days), medium (6-9 days), long (>= 10 days)

  // Filter packages based on search query and selected filters
  const filteredPackages = packages.filter((p) => {
    // Search filter
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.route.toLowerCase().includes(search.toLowerCase());

    // Type filter
    let matchesType = true;
    if (filterType === "char-dham") {
      matchesType = p.title.toLowerCase().includes("char dham") || p.route.toLowerCase().includes("all four");
    } else if (filterType === "do-dham") {
      matchesType = p.title.toLowerCase().includes("do dham");
    } else if (filterType === "single-dham") {
      matchesType = p.title.toLowerCase().includes("kedarnath yatra") || p.title.toLowerCase().includes("badrinath yatra");
    } else if (filterType === "premium") {
      matchesType = p.tag?.toLowerCase() === "premium" || p.title.toLowerCase().includes("helicopter");
    }

    // Duration filter
    let matchesDuration = true;
    // Extract days number (e.g. "10 Nights / 11 Days" -> 11)
    const daysMatch = p.duration.match(/(\d+)\s*Days?/);
    const days = daysMatch ? parseInt(daysMatch[1], 10) : 0;
    if (filterDuration === "short") {
      matchesDuration = days <= 5;
    } else if (filterDuration === "medium") {
      matchesDuration = days >= 6 && days <= 9;
    } else if (filterDuration === "long") {
      matchesDuration = days >= 10;
    }

    return matchesSearch && matchesType && matchesDuration;
  });

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={ctaImg}
            alt="Himalayan valley"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/55 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-amber-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Pilgrimage Itineraries
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Char Dham &amp; Do Dham Packages
              </h1>
              <p className="text-white/90 text-base sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                Thoughtfully crafted schedules, clean accommodation, and private transport, designed for safety and spiritual fulfillment.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-cream py-16 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <div className="bg-card p-6 sm:p-8 rounded-[2rem] shadow-soft border border-border/40 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Search Input */}
                <div className="relative flex-grow max-w-lg">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search package (e.g. Kedarnath, Helicopter)..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground outline-none focus:border-gold font-medium"
                  />
                </div>

                {/* Filter Options */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-gold shrink-0" />
                    <span className="font-semibold text-foreground/80">Category:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      ["All", "all"],
                      ["Char Dham", "char-dham"],
                      ["Do Dham", "do-dham"],
                      ["Single Dham", "single-dham"],
                      ["Premium / Heli", "premium"],
                    ].map(([label, val]) => (
                      <button
                        key={val}
                        onClick={() => setFilterType(val)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                          filterType === val
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-border/60"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="font-semibold text-foreground/80">Duration:</span>
                  <div className="flex gap-1.5">
                    {[
                      ["All", "all"],
                      ["1-5 Days", "short"],
                      ["6-9 Days", "medium"],
                      ["10+ Days", "long"],
                    ].map(([label, val]) => (
                      <button
                        key={val}
                        onClick={() => setFilterDuration(val)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                          filterDuration === val
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-border/60"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="bg-background py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            {filteredPackages.length === 0 ? (
              <div className="text-center py-20 bg-cream rounded-3xl border border-dashed border-border/60">
                <Compass className="h-16 w-16 text-muted-foreground mx-auto animate-pulse" />
                <h3 className="font-display text-2xl text-foreground mt-4">No Packages Match Your Search</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  Try adjusting your keywords or clearing the category and duration filters to view all available itineraries.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setFilterType("all");
                    setFilterDuration("all");
                  }}
                  className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase hover:scale-[1.02] transition-transform"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredPackages.map((p, i) => {
                    const slug = getPackageSlug(p.title);
                    return (
                      <Reveal key={p.title} delay={i * 0.05}>
                        <motion.article
                          layout
                          whileHover={{ y: -8 }}
                          transition={{ type: "spring", stiffness: 220, damping: 22 }}
                          className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-soft hover:shadow-luxe relative"
                        >
                          <div className="relative h-56 w-full overflow-hidden shrink-0">
                            <img
                              src={p.image}
                              alt={p.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                            />
                            {p.tag ? (
                              <span className="absolute top-6 right-6 rounded-full bg-gold/90 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.22em] text-white shadow-sm uppercase flex items-center gap-1 backdrop-blur-md">
                                <Sparkles className="h-3 w-3" /> {p.tag}
                              </span>
                            ) : null}
                          </div>

                          <div className="flex flex-1 flex-col p-8 pt-6">
                            <h3 className="text-2xl font-display leading-snug">{p.title}</h3>
                          <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                            <Clock className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                            {p.duration}
                          </p>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-medium bg-cream/70 p-3.5 rounded-xl border border-border/20">
                            {p.route}
                          </p>
                          
                          <ul className="mt-6 space-y-3 text-sm flex-grow">
                            {p.includes.map((inc) => (
                              <li key={inc} className="flex items-center gap-2.5 text-foreground/85 font-medium">
                                <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                                {inc}
                              </li>
                            ))}
                            <li className="flex items-center gap-2.5 text-foreground/85 font-medium">
                              <Utensils className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                              Pure vegetarian meals (Breakfast &amp; Dinner)
                            </li>
                          </ul>

                          <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-border/40">
                            <div>
                              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                                Starting from
                              </p>
                              <p className="font-display text-3xl text-foreground font-bold mt-1">{p.price}</p>
                            </div>
                            
                            <div className="flex flex-col gap-2 w-full sm:w-auto">
                              
                              <Link
                                to="/contact"
                                search={{ package: slug }}
                                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-primary-foreground hover:scale-[1.03] transition-transform text-center"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                          </div>
                        </motion.article>
                      </Reveal>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        <TransportServices />
      </main>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Mountain,
  BadgeCheck,
  BedDouble,
  Compass,
  Bus,
  Plane,
  HeartPulse,
  Headphones,
  Sparkles,
  IndianRupee,
  Clock,
  Utensils,
  Check,
  Tent,
  Waves,
  Snowflake,
  Bird,
  Flower2,
  Home,
  Church,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { destinations, packages, reasons, steps } from "./data";
import yamunotri from "@/assets/yamunotri.jpg";
import kedarnath from "@/assets/kedarnath.jpg";

const reasonIcons = [
  Mountain,
  BadgeCheck,
  BedDouble,
  Compass,
  Bus,
  Plane,
  HeartPulse,
  Headphones,
  Sparkles,
  IndianRupee,
];

const getPackageSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="The Char Dham"
          title="Four shrines. One journey that reshapes a lifetime."
          intro="Set high in the Garhwal Himalayas, the Char Dham circuit traces the birthplaces of India's holiest rivers and the seats of Shiva and Vishnu. Pilgrims have walked this route for over a thousand years — we make it gentle, safe and unforgettable."
        />

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={yamunotri}
                alt="Yamunotri temple beside a hot spring in a forested Himalayan valley"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[26rem] w-full object-cover transition-transform duration-[1.6s] hover:scale-105 lg:h-[32rem]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">Where it begins</p>
            <h3 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Yamunotri &amp; Gangotri — the river sources
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The yatra opens at Yamunotri, where the Yamuna emerges beside the boiling Surya
              Kund and rice is cooked as offering. From there the road climbs to Gangotri, the
              place where the Ganga is said to have descended to earth — a white temple on
              emerald water, ringed by granite spires and deodar forest.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These first two dhams set the rhythm of the journey: slow mountain roads, cold
              clear mornings and the sound of rivers that never stops.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={kedarnath}
                alt="Kedarnath temple beneath a snow covered Himalayan peak"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[26rem] w-full object-cover transition-transform duration-[1.6s] hover:scale-105 lg:h-[32rem]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:order-1">
            <p className="eyebrow">Where it culminates</p>
            <h3 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Kedarnath &amp; Badrinath — Shiva and Vishnu
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Kedarnath stands alone on a glacial meadow at 3,583 m, one of the twelve
              Jyotirlingas, reached on foot from Gaurikund or by helicopter. Nothing prepares
              you for the first sight of that grey stone temple against the snow.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The journey closes at Badrinath — brilliantly painted, warmed by the Tapt Kund
              springs and watched over by Neelkanth peak. Beyond it lies Mana, the last village
              before Tibet.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Sacred Destinations"
          title="The four dhams of Uttarakhand"
          intro="Each shrine has its own altitude, season and character. Here is what to expect at every stop of the circuit."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="group h-full overflow-hidden rounded-[2rem] bg-card shadow-soft"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name} temple`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[0.65rem] tracking-[0.3em] text-gold-soft uppercase">
                      {d.deity}
                    </p>
                    <h3 className="mt-1 text-3xl text-white">{d.name}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="leading-relaxed text-muted-foreground">{d.description}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm">
                    <div>
                      <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                        Best Time
                      </dt>
                      <dd className="mt-1 text-foreground">{d.best}</dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                        Altitude
                      </dt>
                      <dd className="mt-1 text-foreground">{d.altitude}</dd>
                    </div>
                  </dl>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {d.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/destinations/$destSlug"
                    params={{ destSlug: d.name.toLowerCase() }}
                    className="mt-7 inline-flex items-center gap-2 text-sm tracking-wide text-primary transition-colors hover:text-gold"
                  >
                    Explore {d.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Packages() {
  return (
    <section id="packages" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Featured Packages"
          title="Yatra itineraries, thoughtfully priced"
          intro="Every package includes accommodation, meals, private transport, guide support and 24×7 coordination. Prices are per person on twin sharing."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft transition-shadow hover:shadow-luxe"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                  />
                  {p.tag ? (
                    <span className="absolute left-6 top-6 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-medium tracking-[0.22em] text-foreground shadow-sm uppercase backdrop-blur-md">
                      {p.tag}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-8 pt-6">
                  <h3 className="text-2xl leading-snug">{p.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" strokeWidth={1.6} />
                    {p.duration}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.route}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2.5 text-foreground/85">
                        <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                        {inc}
                      </li>
                    ))}
                    <li className="flex items-center gap-2.5 text-foreground/85">
                      <Utensils className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.7} />
                      Pure vegetarian dining
                    </li>
                  </ul>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                    <div>
                      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                        Starting from
                      </p>
                      <p className="font-display text-3xl text-foreground">{p.price}</p>
                    </div>
                    <Link
                      to="/contact"
                      search={{ package: getPackageSlug(p.title) }}
                      className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:scale-105"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="bg-primary py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <SectionHeading
          align="left"
          light
          eyebrow="Why Yamuna Holidays"
          title="Fifteen seasons in the Garhwal Himalayas"
          intro="We do not sell general tourism. Every itinerary we run is a Char Dham pilgrimage, planned by people who travel these roads each season and know exactly where comfort matters most."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map(([title, text], i) => {
            const Icon = reasonIcons[i];
            return (
              <Reveal key={title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-dark h-full rounded-2xl p-5"
                >
                  <Icon className="h-5 w-5 text-gold-soft" strokeWidth={1.5} />
                  <h3 className="mt-4 text-lg text-primary-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {text}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Yatra Process"
          title="From first call to first darshan"
          intro="Five simple steps, and a coordinator with you at every one of them."
        />

        <ol className="relative mt-16 space-y-10 border-l border-gold/35 pl-8 sm:pl-12">
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute top-1 -left-[3.05rem] grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground sm:-left-[4.05rem]">
                  {i + 1}
                </span>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const transportServices = [
  {
    title: "Pony / Horse",
    subtitle: "॥ अश्व सेवा ॥",
    emoji: "🐴",
    price: "₹4,499",
    features: [
      "Trained ponies, local handler",
      "Best for elderly & women",
      "Janki Chatti → Yamunotri (6km)",
      "3-4 hours round trip",
    ],
  },
  {
    title: "Dandi / Palki",
    subtitle: "॥ डंडी पालकी सेवा ॥",
    emoji: "🛺",
    price: "₹9,999",
    features: [
      "4 trained porters per palki",
      "Most comfortable for elderly",
      "Cushioned seat with backrest",
      "Best for disabled/pregnant",
    ],
  },
  {
    title: "Kandi (Basket)",
    subtitle: "॥ कंडी सेवा ॥",
    emoji: "🧺",
    price: "₹4,999",
    features: [
      "Single porter — economical",
      "Ideal for children 5-12 yrs",
      "Quick uphill journey",
      "For pilgrims under 60kg",
    ],
  },
  {
    title: "Helicopter Service",
    subtitle: "॥ हेलीकॉप्टर सेवा ॥",
    emoji: "🚁",
    price: "On Request",
    features: [
      "Quickest and most comfortable",
      "Scenic aerial views of the valley",
      "Ideal for elderly and tight schedules",
      "Subject to weather conditions",
    ],
  },
];

export function TransportServices() {
  return (
    <section id="transport" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Yatra Transport"
          title="Pony, Palki, Kandi & Helicopter Services"
          intro="Trek Yamunotri in comfort with experienced transport and trained handlers. Transparent pricing shared before booking confirmation."
          align="left"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {transportServices.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft transition-shadow hover:shadow-luxe"
              >
                <div className="p-8 pb-0 text-center">
                  <div className="text-6xl">{t.emoji}</div>
                  <h3 className="mt-6 text-xl font-medium">{t.title}</h3>
                  <p className="mt-1 text-sm tracking-widest text-primary/70">{t.subtitle}</p>
                </div>

                {/* <div className="mt-6 px-8">
                  <div className="flex items-center justify-between rounded-xl bg-cream p-4">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      Round Trip Rate
                    </span>
                    <span className="font-display text-2xl text-primary">{t.price}</span>
                  </div>
                </div> */}

                <div className="flex flex-1 flex-col p-8 pt-6">
                  <ul className="space-y-3.5 text-sm">
                    {t.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      to="/contact"
                      search={{ subject: `Transport Service: ${t.title}` }}
                      className="block w-full rounded-full bg-primary py-3.5 text-center text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Explore Uttarakhand ──────────────────────────────────────────────────────

const experienceCategories = [
  {
    label: "Temples & Faith",
    tagline: "Char Dham, Jyotirlingas & beyond",
    to: "/experiences/temples-faith",
    icon: Church,
    gradient: "from-amber-900/80 via-amber-800/40 to-transparent",
    bg: "https://images.unsplash.com/photo-1698574996391-73f103113f60?w=800&q=80",
  },
  {
    label: "Trekking",
    tagline: "Bugyal meadows, glacial passes & ridgelines",
    to: "/experiences/trekking",
    icon: Tent,
    gradient: "from-green-900/80 via-green-800/40 to-transparent",
    bg: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  },
  {
    label: "Lakes & Hills",
    tagline: "Alpine lakes, misty hill stations & valleys",
    to: "/experiences/lakes-hills",
    icon: Waves,
    gradient: "from-sky-900/80 via-sky-800/40 to-transparent",
    bg: "/images/lakes_hills.jpg",
  },
  {
    label: "Snow & Skiing",
    tagline: "Auli slopes, Dayara Bugyal snowfields",
    to: "/experiences/snow-skiing",
    icon: Snowflake,
    gradient: "from-blue-900/80 via-blue-800/40 to-transparent",
    bg: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&q=80",
  },
  {
    label: "Wildlife",
    tagline: "Tigers, elephants & Himalayan birds",
    to: "/experiences/wildlife",
    icon: Bird,
    gradient: "from-emerald-900/80 via-emerald-800/40 to-transparent",
    bg: "/images/jim_corbett.jpg",
  },
  {
    label: "Yoga & Wellness",
    tagline: "Rishikesh ashrams & Himalayan retreats",
    to: "/experiences/yoga-wellness",
    icon: Flower2,
    gradient: "from-purple-900/80 via-purple-800/40 to-transparent",
    bg: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
  },
  {
    label: "Village Life",
    tagline: "Harsil, Mana & Garhwali homestays",
    to: "/experiences/village-life",
    icon: Home,
    gradient: "from-orange-900/80 via-orange-800/40 to-transparent",
    bg: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
  },
];

export function ExploreUttarakhand() {
  return (
    <section id="experiences" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Find Your Uttarakhand"
          title="Choose your experience"
          intro="From sacred Char Dham shrines to snow-dusted ski slopes and silent forest trails — every face of the Himalayas is waiting."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {experienceCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.label} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="group relative overflow-hidden rounded-[2rem] shadow-soft cursor-pointer"
                >
                  <Link to={cat.to} className="block">
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <img
                        src={cat.bg}
                        alt={cat.label}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`} />
                      <div className="absolute inset-0 bg-forest-deep/0 transition-colors duration-500 group-hover:bg-forest-deep/25" />

                      {/* Icon chip */}
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/25 backdrop-blur-md border border-white/25">
                          <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h3 className="font-display text-2xl leading-tight text-white">{cat.label}</h3>
                        <p className="mt-1 text-xs tracking-wide text-white/75 leading-relaxed">{cat.tagline}</p>
                        <div className="mt-3 flex items-center gap-1.5 text-gold-soft text-xs font-semibold tracking-widest uppercase opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          Explore
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
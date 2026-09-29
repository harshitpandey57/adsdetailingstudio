import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, CalendarDays, Phone, Flower2 } from "lucide-react";

export const Route = createFileRoute("/experiences/yoga-wellness")({
  head: () => ({
    meta: [
      { title: "Yoga & Wellness in Uttarakhand | Yamuna Holidays" },
      {
        name: "description",
        content:
          "Discover yoga ashrams, meditation retreats and wellness centres in Uttarakhand — Rishikesh, Uttarkashi, Kausani, and the high Himalayas.",
      },
    ],
  }),
  component: YogaWellnessPage,
});

const retreats = [
  {
    name: "Rishikesh Ashrams",
    location: "Rishikesh, Dehradun District",
    altitude: "372 m",
    bestTime: "Sep – Mar",
    type: "Yoga & Meditation",
    description:
      "The Yoga Capital of the World. Ganga-side ashrams, world-class yoga teacher training courses, pranayama retreats and sound healing sessions in the shadow of the Himalayas.",
    highlights: ["Ganga aarti at Triveni Ghat", "200-hr YTTC courses", "Sound bath & meditation", "Ayurveda treatments"],
    image: "/images/yoga_rishikesh.jpg",
    tag: "Yoga Capital",
    tagColor: "bg-purple-500",
  },
  {
    name: "Uttarkashi Yoga Retreats",
    location: "Uttarkashi District",
    altitude: "1,165 m",
    bestTime: "Apr – Jun, Sep – Nov",
    type: "Yoga & Meditation",
    description:
      "Deep in the upper Bhagirathi valley, Uttarkashi's ancient ashrams offer intensive yoga and Vedic study away from tourist crowds — a purer Himalayan spiritual experience.",
    highlights: ["Vedic study programmes", "River-side meditation", "High-altitude yoga", "Kashi Vishwanath temple"],
    image: "/images/yoga_uttarkashi.png",
    tag: "Himalayan Retreat",
    tagColor: "bg-indigo-500",
  },
  {
    name: "Kausani Anashakti Ashram",
    location: "Kausani, Bageshwar District",
    altitude: "1,890 m",
    bestTime: "Mar – Jun, Sep – Nov",
    type: "Spiritual Retreat",
    description:
      "Where Gandhi found peace and wrote the Anashakti Yoga commentary. A tranquil hilltop ashram with unobstructed views of Nanda Devi — perfect for silent meditation retreats.",
    highlights: ["Mahatma Gandhi's retreat", "Nanda Devi panorama", "Silent meditation retreat", "Tea garden walks"],
    image: "/images/yoga_kausani.jpg",
    tag: "Spiritual Heritage",
    tagColor: "bg-amber-500",
  },
  {
    name: "Munsiyari Wellness Camps",
    location: "Pithoragarh District",
    altitude: "2,200 m",
    bestTime: "Apr – Jun, Sep – Oct",
    type: "Forest Wellness",
    description:
      "Curative Himalayan air at 2,200m, forest bathing trails and guided meditation overlooking the Panchachuli glacier. A remote wellness escape for the truly serious.",
    highlights: ["Forest bathing sessions", "Glacier meditation", "Himalayan herbal remedies", "Remote & peaceful"],
    image: "/images/yoga_munsiyari.png",
    tag: "Forest Retreat",
    tagColor: "bg-green-500",
  },
  {
    name: "Haridwar Wellness Centres",
    location: "Haridwar",
    altitude: "314 m",
    bestTime: "Oct – Mar",
    type: "Ayurveda & Wellness",
    description:
      "One of India's seven sacred cities and the gateway to the Himalayas. Traditional Ayurveda clinics, Ganga snan (ritual bathing) and evening aarti at Har Ki Pauri for complete spiritual renewal.",
    highlights: ["Har Ki Pauri Ganga aarti", "Ayurveda panchakarma", "Sacred Ganga snan", "Gurukul ashrams"],
    image: "/images/yoga_haridwar.png",
    tag: "Ayurveda",
    tagColor: "bg-teal-500",
  },
];

function YogaWellnessPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/rishikesh.jpg"
            alt="Yoga on Ganga banks Rishikesh"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/50 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-purple-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Find Your Uttarakhand
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                Yoga & Wellness
              </h1>
              <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Ancient ashrams, mountain meditation retreats and Himalayan air at 2,000 metres — Uttarakhand has been healing minds and bodies for millennia.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Retreats Grid */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Wellness Destinations"
              title="Ashrams, retreats & sacred spaces"
              intro="Whether you're seeking a week-long yoga immersion or a silent meditation retreat at altitude, we connect you with the right space and guide your entire journey."
            />

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {retreats.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.07}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="group h-full flex flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft border border-border/30"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className={`inline-block rounded-full ${r.tagColor} px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-white uppercase`}>
                          {r.tag}
                        </span>
                        <h3 className="mt-2 font-display text-2xl text-white">{r.name}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        {r.location}
                      </div>
                      <p className="text-xs text-purple-600 font-semibold tracking-wide mb-3 flex items-center gap-1">
                        <Flower2 className="h-3 w-3" /> {r.type}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{r.description}</p>
                      <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border/60 py-4 text-sm">
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase flex items-center gap-1">
                            <CalendarDays className="h-3 w-3 text-gold" /> Best Time
                          </dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{r.bestTime}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase">Altitude</dt>
                          <dd className="mt-1 text-xs font-medium text-foreground">{r.altitude}</dd>
                        </div>
                      </dl>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {r.highlights.map((h) => (
                          <span key={h} className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-6">
                        <Link
                          to="/contact"
                          search={{ subject: `Wellness Retreat Enquiry: ${r.name}` }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                        >
                          Plan your retreat <ArrowUpRight className="h-4 w-4" />
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
                <Flower2 className="h-96 w-96" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <p className="text-purple-300 font-semibold uppercase tracking-[0.25em] text-xs">Begin Your Healing</p>
                <h2 className="font-display text-3xl sm:text-5xl mt-4 leading-tight">Your wellness journey starts here</h2>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed">
                  We connect you with certified yoga teachers, trusted ashrams and curated wellness experiences — and handle all logistics so your mind stays at peace.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    search={{ subject: "Yoga & Wellness Retreat Enquiry" }}
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

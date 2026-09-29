import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal } from "@/components/site/Reveal";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Compass, 
  Thermometer, 
  ChevronRight, 
  Flame, 
  Sparkles, 
  Info,
  Car,
  Footprints
} from "lucide-react";
import { destinations } from "@/components/site/data";
import yamunotriImg from "@/assets/yamunotri.jpg";
import gangotriImg from "@/assets/gangotri.jpg";
import kedarnathImg from "@/assets/kedarnath.jpg";
import badrinathImg from "@/assets/badrinath.jpg";

export const Route = createFileRoute("/destinations/$destSlug")({
  head: ({ params }) => {
    const slug = params.destSlug.toLowerCase();
    const name = slug.charAt(0).toUpperCase() + slug.slice(1);
    return {
      meta: [
        { title: `${name} Dham Guide | Yamuna Holidays` },
        {
          name: "description",
          content: `Comprehensive pilgrim guide to ${name} Dham, including history, sightseeing points, best times to visit, elevation, and how to reach.`,
        },
      ],
    };
  },
  component: DestinationDetailPage,
});

// Detailed mapping for the four dhams
interface DhamDetail {
  title: string;
  deity: string;
  image: string;
  altitude: string;
  bestTime: string;
  history: string;
  significance: string;
  trekInfo: string;
  weather: string;
  howToReach: {
    air: string;
    rail: string;
    road: string;
    trek: string;
  };
  sights: {
    name: string;
    desc: string;
  }[];
}

const dhamData: Record<string, DhamDetail> = {
  yamunotri: {
    title: "Yamunotri Dham",
    deity: "Goddess Yamuna",
    image: yamunotriImg,
    altitude: "3,293 m (10,804 ft)",
    bestTime: "May – June & September – October",
    history: "As the source of the holy Yamuna River, Yamunotri is the traditional starting point of the Char Dham Yatra. Mythologically, Yamuna is the daughter of Surya (the Sun God) and sister of Yama (the God of Death). Taking a holy dip in the river is believed to purify the soul and protect devotees from untimely death.",
    significance: "The temple was built by Maharani Gularia of Jaipur in the late 19th century and has been rebuilt twice due to snow and glacial damage. The primary deity is represented by a black marble idol of Goddess Yamuna. It is situated on the left bank of the Yamuna River, set against the imposing Bandarpunch peaks.",
    trekInfo: "Yamunotri requires a 6 km uphill trek from Janki Chatti. The path is well-paved, but steep. For those who cannot walk, ponies, wooden palkies (palanquins), and basket carriers (pitthus) are available at Janki Chatti.",
    weather: "Highly unpredictable. Summer temperatures range from 6°C to 18°C. During evenings and in September/October, the wind chill is severe and temperatures can drop near freezing point.",
    howToReach: {
      air: "Jolly Grant Airport in Dehradun is the nearest airport, located about 210 km away.",
      rail: "Dehradun (175 km) and Haridwar (220 km) are the nearest railheads.",
      road: "Buses and private cabs run up to Janki Chatti from Rishikesh, Dehradun, and Barkot.",
      trek: "A 6 km paved trek starts from Janki Chatti. Average trek time is 3 to 4 hours."
    },
    sights: [
      {
        name: "Surya Kund",
        desc: "A hot sulphur spring near the temple where water is around 88°C. Pilgrims dip rice or potatoes tied in muslin cloths into the spring to cook them as holy prasad."
      },
      {
        name: "Divya Shila",
        desc: "A reddish-brown rock pillar located near the Surya Kund. It is customary for pilgrims to offer prayers at the Divya Shila before entering the main temple."
      },
      {
        name: "Janki Chatti",
        desc: "The base camp and final road terminal for Yamunotri, famous for its hot springs and scenic landscape ringed by majestic pine forests."
      }
    ]
  },
  gangotri: {
    title: "Gangotri Dham",
    deity: "Goddess Ganga",
    image: gangotriImg,
    altitude: "3,100 m (10,170 ft)",
    bestTime: "May – June & September – October",
    history: "Gangotri marks the place where Goddess Ganga descended from heaven to Earth. According to Hindu mythology, King Bhagirath performed intense penance for centuries to bring Ganga down to cleanse the ashes of his ancestors. To break the impact of Ganga's powerful descent, Lord Shiva captured her in his matted locks.",
    significance: "The beautiful white granite temple was constructed in the early 18th century by the Gorkha commander Amar Singh Thapa. It sits along the bank of the Bhagirathi River (the source name of the Ganga). The temple is surrounded by deodar forest, green mountains, and the soothing sound of the rushing holy waters.",
    trekInfo: "No trekking is required to reach Gangotri. The temple is directly connected by road. Vehicles go right up to the temple area, making it the most easily accessible Dham of the circuit.",
    weather: "Crisp and cold. Summer day temperatures average around 12°C to 20°C, but nights drop significantly to 5°C. Light woollens are required in summer, and heavy woollens in autumn.",
    howToReach: {
      air: "Jolly Grant Airport, Dehradun, is the nearest airport (250 km).",
      rail: "Rishikesh is the nearest railway station (243 km).",
      road: "Direct highways link Gangotri to Rishikesh, Uttarkashi, and Haridwar.",
      trek: "Zero trekking is required to visit the temple. A paved flat walk of 200m from the parking lot leads to the shrine."
    },
    sights: [
      {
        name: "Bhagirath Shila",
        desc: "A sacred stone slab near the temple where King Bhagirath is believed to have sat on one leg while meditating to bring Ganga down."
      },
      {
        name: "Pandav Gufa",
        desc: "Located 1.5 km from Gangotri, this natural cave is believed to be the place where the five Pandava brothers meditated and rested during their journey to heaven."
      },
      {
        name: "Gaumukh Glacier Snout",
        desc: "The geological snout of the Gangotri Glacier, located 18 km upstream inside the Gangotri National Park. It is the literal birthplace of the Ganga."
      }
    ]
  },
  kedarnath: {
    title: "Kedarnath Dham",
    deity: "Lord Shiva",
    image: kedarnathImg,
    altitude: "3,583 m (11,755 ft)",
    bestTime: "May – June & September – October",
    history: "Kedarnath is one of the twelve Jyotirlingas and the most revered temple of Lord Shiva. Built by the Pandavas of Mahabharata fame, the temple is said to have been revived by Adi Shankaracharya in the 8th century. Shiva hid here from the Pandavas in the form of a bull, and when they pursued him, he dived into the ground, leaving his hump on the surface.",
    significance: "The temple is constructed of heavy, interlocking grey stone slabs and stands on a glacial valley plateau beneath the snow-covered Kedarnath peak. It miraculously survived the catastrophic 2013 floods, protected by a massive boulder (Bheem Shila) that rolled down and stood as a shield behind the structure.",
    trekInfo: "Kedarnath requires a challenging 16 to 18 km steep uphill trek from Gaurikund. The path climbs past waterfalls and steep gorges. For convenience, pilgrims can opt for helicopter shuttles from Phata, Sersi, or Guptkashi, or hire ponies/palkies.",
    weather: "Extremely cold. Even in peak summer, night temperatures often touch sub-zero (0°C to -2°C). High-quality heavy woollens, thermals, gloves, and windproof jackets are mandatory here.",
    howToReach: {
      air: "Jolly Grant Airport, Dehradun, is the nearest airport (239 km to Gaurikund).",
      rail: "Rishikesh (216 km) and Haridwar (240 km) are the closest railheads.",
      road: "Vehicles travel up to Sonprayag/Gaurikund. Beyond Gaurikund, the road ends.",
      trek: "A 16-18 km steep mountain trek from Gaurikund. Helicopter flights are available from helipads in Guptkashi, Phata, and Sersi."
    },
    sights: [
      {
        name: "Bhairav Nath Temple",
        desc: "Located 1 km uphill from Kedarnath temple. Bhairav Nath is considered the guardian deity of the valley who guards the shrine during the heavy winter snows."
      },
      {
        name: "Bheem Shila",
        desc: "A massive rock that rolled down from the mountains during the 2013 floods and stopped exactly behind the temple, shielding it from the roaring waters."
      },
      {
        name: "Gaurikund",
        desc: "The base point of the Kedarnath trek, featuring hot water springs and a temple dedicated to Goddess Parvati, where she is said to have meditated to win Shiva's hand."
      }
    ]
  },
  badrinath: {
    title: "Badrinath Dham",
    deity: "Lord Vishnu",
    image: badrinathImg,
    altitude: "3,300 m (10,826 ft)",
    bestTime: "May – June & September – October",
    history: "Badrinath is the seat of Lord Vishnu and the final stop of the Char Dham Yatra. It is also part of India's larger Char Dham circuit (along with Dwarka, Puri, and Rameswaram). Vishnu is said to have sat in deep meditation here. To protect him from the harsh sun, Goddess Lakshmi took the form of a Badri (jujube) tree to shade him.",
    significance: "The temple has an iconic, brightly painted front facade that resembles a Buddhist monastery. Inside, the self-manifested (Swayambhu) deity of Lord Badrinarayan is made of black Saligram stone. It is situated on the banks of the Alaknanda River, sandwiched between the Nar and Narayana mountain ranges.",
    trekInfo: "No trekking is required. The Badrinath temple is fully accessible by road. Devotees can drive directly to the temple parking lot, which is about a 5-minute flat walk from the temple complex.",
    weather: "Cold and breezy. Summer temperatures range from 8°C to 18°C. Winters begin early in October, dropping temperatures below freezing point quickly. Normal woollens are required during the day.",
    howToReach: {
      air: "Jolly Grant Airport in Dehradun is located about 310 km from Badrinath.",
      rail: "Rishikesh is the nearest railhead, located 295 km away.",
      road: "Fully motorable national highway connect Rishikesh to Badrinath via Joshimath.",
      trek: "No trekking is required. Direct road access."
    },
    sights: [
      {
        name: "Tapt Kund",
        desc: "A natural thermal hot spring situated just below the temple on the Alaknanda riverbed. It is customary to take a hot bath here before entering the temple."
      },
      {
        name: "Mana Village",
        desc: "Located 3 km beyond Badrinath, Mana is the last Indian village before the Tibet border. It houses Vyas Gufa, where Sage Vyas wrote the Mahabharata."
      },
      {
        name: "Bhim Pul",
        desc: "A giant natural rock bridge over the roaring Saraswati River in Mana village. Mythologically, the Pandava brother Bhim placed this rock to help Draupadi cross."
      }
    ]
  }
};

function DestinationDetailPage() {
  const { destSlug } = Route.useParams();
  const slug = destSlug.toLowerCase();
  const dham = dhamData[slug];

  if (!dham) {
    return (
      <div className="bg-background min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-10">
          <div className="text-center">
            <h1 className="text-4xl font-display text-foreground">Dham Not Found</h1>
            <p className="text-muted-foreground mt-4">We couldn't find details for "{destSlug}".</p>
            <Link to="/destinations" className="inline-flex items-center gap-2 text-primary mt-6 hover:text-gold font-semibold">
              <ArrowLeft className="h-4 w-4" /> Back to Destinations
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          <img
            src={dham.image}
            alt={dham.title}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/50 to-forest-deep/90 z-0" />
          
          <div className="relative z-10 w-full max-w-7xl px-5 lg:px-10 mt-20">
            <Reveal>
              <Link 
                to="/destinations" 
                className="inline-flex items-center gap-2 text-amber-300 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider mb-6"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Shrines
              </Link>
              <span className="block text-amber-300 font-semibold uppercase tracking-[0.25em] text-xs sm:text-sm">
                Sacred Seat of {dham.deity}
              </span>
              <h1 className="text-5xl sm:text-7xl text-white font-display mt-3 leading-none">
                {dham.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 mt-8 text-white/90 text-sm">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <MapPin className="h-4 w-4 text-amber-300" /> {dham.altitude} Elevation
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <Calendar className="h-4 w-4 text-amber-300" /> Best Time: {dham.bestTime}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="bg-cream py-20 lg:py-32">
          <div className="mx-auto max-w-7xl gap-16 px-5 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <Reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-display text-foreground leading-tight">
                  Spiritual History &amp; Mythology
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {dham.history}
                </p>
                
                <h2 className="text-3xl sm:text-4xl font-display text-foreground mt-12 leading-tight">
                  Significance &amp; Shrine Architecture
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {dham.significance}
                </p>

                {dham.trekInfo && (
                  <>
                    <h2 className="text-3xl sm:text-4xl font-display text-foreground mt-12 leading-tight flex items-center gap-3">
                      <Footprints className="h-8 w-8 text-gold" /> Trekking Details
                    </h2>
                    <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {dham.trekInfo}
                    </p>
                  </>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-14 lg:mt-0 space-y-8">
                {/* Quick Info Card */}
                <div className="bg-card p-8 rounded-3xl border border-border/40 shadow-soft">
                  <h3 className="font-display text-2xl text-foreground mb-6 pb-4 border-b border-border flex items-center gap-2">
                    <Info className="h-5 w-5 text-gold" /> Quick Dham Facts
                  </h3>
                  <dl className="space-y-4 text-sm">
                    <div className="flex justify-between py-2 border-b border-border/40">
                      <dt className="text-muted-foreground font-medium">Primary Deity</dt>
                      <dd className="font-semibold text-foreground">{dham.deity}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/40">
                      <dt className="text-muted-foreground font-medium">Elevation</dt>
                      <dd className="font-semibold text-foreground">{dham.altitude}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/40">
                      <dt className="text-muted-foreground font-medium">District</dt>
                      <dd className="font-semibold text-foreground">Uttarakhand Himalayas</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/40">
                      <dt className="text-muted-foreground font-medium">Portal Opening</dt>
                      <dd className="font-semibold text-foreground">Akshaya Tritiya (April/May)</dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="text-muted-foreground font-medium">Portal Closing</dt>
                      <dd className="font-semibold text-foreground">Yama Dwitiya / Bhai Dooj (Nov)</dd>
                    </div>
                  </dl>
                </div>

                {/* Weather Alert */}
                <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-soft flex items-start gap-4">
                  <Thermometer className="h-6 w-6 text-amber-300 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-white">Weather Condition</h4>
                    <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                      {dham.weather}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sightseeing Highlights */}
        <section className="bg-background py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <h2 className="text-3xl sm:text-5xl font-display text-center text-foreground mb-16">
                Sights to Explore at {dham.title}
              </h2>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-3">
              {dham.sights.map((sight, index) => (
                <Reveal key={sight.name} delay={index * 0.08}>
                  <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-soft h-full hover:shadow-md transition-shadow">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-cream text-gold mb-6">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground">{sight.name}</h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {sight.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How to Reach & Logistics */}
        <section className="bg-cream py-20 lg:py-32 border-t border-border/30">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <h2 className="text-3xl sm:text-5xl font-display text-center text-foreground mb-16">
                Travel Logistics &amp; How to Reach
              </h2>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={0.05}>
                <div className="bg-card p-6 rounded-2xl border border-border/40 h-full">
                  <h3 className="font-bold text-sm tracking-wider uppercase text-forest-deep flex items-center gap-2 mb-4">
                    ✈ By Air
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dham.howToReach.air}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="bg-card p-6 rounded-2xl border border-border/40 h-full">
                  <h3 className="font-bold text-sm tracking-wider uppercase text-forest-deep flex items-center gap-2 mb-4">
                    🚂 By Train
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dham.howToReach.rail}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-card p-6 rounded-2xl border border-border/40 h-full">
                  <h3 className="font-bold text-sm tracking-wider uppercase text-forest-deep flex items-center gap-2 mb-4">
                    <Car className="h-4 w-4" /> By Road
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dham.howToReach.road}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-card p-6 rounded-2xl border border-border/40 h-full">
                  <h3 className="font-bold text-sm tracking-wider uppercase text-forest-deep flex items-center gap-2 mb-4">
                    🥾 Trek Route
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dham.howToReach.trek}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA to Booking */}
        <section className="bg-primary text-primary-foreground py-20 text-center relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5 translate-x-20 -translate-y-20">
            <Compass className="h-96 w-96" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-5">
            <Reveal>
              <h2 className="text-3xl sm:text-5xl font-display text-white">
                Ready to plan your yatra to {dham.title}?
              </h2>
              <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto text-base sm:text-lg">
                Let our travel experts arrange a comfortable vehicle, neat accommodations, guides, and VIP temple darshan slot passes for you.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/packages"
                  className="rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-forest-deep transition-transform hover:scale-105"
                >
                  Explore Packages
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/45 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Contact Expert
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal } from "@/components/site/Reveal";
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Check, 
  X, 
  Phone, 
  Send,
  Hotel,
  Compass, 
  Utensils, 
  CalendarDays,
  CalendarCheck
} from "lucide-react";
import { useState } from "react";
import { packages } from "@/components/site/data";

export const Route = createFileRoute("/packages/$packageSlug")({
  head: ({ params }) => {
    const slug = params.packageSlug;
    const name = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      meta: [
        { title: `${name} Itinerary & Booking | Yamuna Holidays` },
        {
          name: "description",
          content: `View the complete day-by-day itinerary, price, and inclusions for the ${name} package by Yamuna Holidays.`,
        },
      ],
    };
  },
  component: PackageDetailPage,
});

interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
  meals: string;
  distance: string;
}

interface PackageDetail {
  title: string;
  duration: string;
  price: string;
  route: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  stays: string;
  itinerary: ItineraryDay[];
}

const detailedPackages: Record<string, PackageDetail> = {
  "complete-char-dham": {
    title: "Complete Char Dham Yatra",
    duration: "10 Nights / 11 Days",
    price: "₹28,500",
    route: "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Rishikesh → Haridwar",
    overview: "A comprehensive 11-day spiritual road journey starting from Haridwar/Rishikesh. This package covers all four sacred Himalayan shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath. Ideal for devotees who wish to complete the entire holy circuit at a balanced, comfortable pace with professional coordination.",
    highlights: [
      "Darshan of all four sacred Himalayan Dhams",
      "Holy dip in natural thermal springs (Surya Kund & Tapt Kund)",
      "Explore Mana, the last Indian village on the Tibet border",
      "Coordinated trekking/pony/palki support at Kedarnath",
      "Daily Sattvic breakfast and dinner included"
    ],
    inclusions: [
      "Deluxe double/triple sharing rooms at hand-picked hotel stays",
      "10 Nights hotel accommodation with breakfast and dinner",
      "Private air-conditioned vehicle (AC turned off in hills) for all sightseeing",
      "Fuel, toll tax, state permits, and driver allowances",
      "Biometric Yatra registration assistance",
      "Oxygen cylinders & basic first aid kits in all vehicles"
    ],
    exclusions: [
      "Helicopter tickets, pony, palki, or pitthu charges at Kedarnath/Yamunotri",
      "Lunch, snacks, tea, coffee, and personal refreshments",
      "VIP temple entry tickets (can be arranged on request)",
      "Travel insurance or emergency evacuation costs",
      "Any expenses caused by landslides, blockages, or natural causes"
    ],
    stays: "Standard 3★ hotels in Barkot, Uttarkashi, Guptkashi, Joshimath, and Badrinath.",
    itinerary: [
      { day: 1, title: "Haridwar/Rishikesh to Barkot (200 km / 7-8 hrs)", desc: "Start early from Haridwar or Rishikesh. Drive through scenic Mussoorie bypass and Yamuna valley. Check-in at Barkot hotel. Rest and prepare for the next day's trek.", meals: "Dinner", distance: "200 km" },
      { day: 2, title: "Barkot to Yamunotri to Barkot (Trek 6 km each way)", desc: "Drive to Janki Chatti. Begin the 6 km paved trek to Yamunotri. Take a holy dip in Surya Kund, perform puja at Divya Shila, and have Goddess Yamuna darshan. Return to Janki Chatti and drive back to Barkot.", meals: "Breakfast, Dinner", distance: "45 km drive / 12 km trek" },
      { day: 3, title: "Barkot to Uttarkashi (82 km / 3 hrs)", desc: "Drive along the flowing Yamuna river to Uttarkashi. Check-in at hotel. In the evening, visit the historic Kashi Vishwanath Temple on the banks of Bhagirathi.", meals: "Breakfast, Dinner", distance: "82 km" },
      { day: 4, title: "Uttarkashi to Gangotri to Uttarkashi (100 km each way / 3 hrs)", desc: "Drive along the stunning Bhagirathi valley to Gangotri temple. Take a holy dip in the river, perform prayers at Bhagirath Shila, and enjoy Ganga Aarti. Drive back to Uttarkashi in the afternoon.", meals: "Breakfast, Dinner", distance: "200 km roundtrip" },
      { day: 5, title: "Uttarkashi to Guptkashi (220 km / 8-9 hrs)", desc: "A long but beautiful drive crossing the Mandakini and Alaknanda river confluence at Tehri. Arrive at Guptkashi, overlooking the snow-capped Mandakini valley. Rest and coordinate Kedarnath arrangements.", meals: "Breakfast, Dinner", distance: "220 km" },
      { day: 6, title: "Guptkashi to Sonprayag to Kedarnath (32 km drive + 16 km trek)", desc: "Drive to Sonprayag/Gaurikund. Start the 16 km trek to Kedarnath. Optional helicopter shuttle. Arrive at Kedarnath peak. Check-in at stays, attend the evening Shiva Aarti at the temple.", meals: "Breakfast, Dinner", distance: "32 km drive / 16 km trek" },
      { day: 7, title: "Kedarnath Temple to Guptkashi (16 km trek + 32 km drive)", desc: "Get early morning VIP darshan at Kedarnath. After breakfast, trek down to Gaurikund. Return drive to Guptkashi for dinner and overnight rest.", meals: "Breakfast, Dinner", distance: "16 km trek / 32 km drive" },
      { day: 8, title: "Guptkashi to Joshimath/Pipalkoti (160 km / 6-7 hrs)", desc: "Drive towards Joshimath via Ukhimath and Chopta forest. Check-in at Joshimath or Pipalkoti. Spend the evening exploring local temples.", meals: "Breakfast, Dinner", distance: "160 km" },
      { day: 9, title: "Joshimath to Badrinath (45 km / 2 hrs)", desc: "Drive to Badrinath Dham. Take a warm sulphur bath at Tapt Kund. Perform prayers to Lord Badrinarayan. Afternoon visit to Mana Village, Saraswati River, and Bhim Pul. Overnight at Badrinath.", meals: "Breakfast, Dinner", distance: "45 km" },
      { day: 10, title: "Badrinath to Rudraprayag/Srinagar (160 km / 6 hrs)", desc: "Perform morning prayers. Start return drive, passing Vishnuprayag, Nandaprayag, and Karnaprayag confluences. Check-in at hotel.", meals: "Breakfast, Dinner", distance: "160 km" },
      { day: 11, title: "Rudraprayag to Haridwar via Rishikesh (165 km / 5-6 hrs)", desc: "Drive back towards Rishikesh. Visit Ram Jhula, Laxman Jhula, and Triveni Ghat. Continue to Haridwar railway station for your departure home.", meals: "Breakfast", distance: "165 km" }
    ]
  },
  "do-dham-yatra": {
    title: "Do Dham Yatra",
    duration: "6 Nights / 7 Days",
    price: "₹19,900",
    route: "Haridwar → Guptkashi → Kedarnath → Badrinath → Rudraprayag → Haridwar",
    overview: "A targeted 7-day pilgrimage focusing on the two main deities of the Himalayan circuit: Lord Shiva (Kedarnath) and Lord Vishnu (Badrinath). Highly recommended for pilgrims with limited time who still wish to seek blessings at both temples.",
    highlights: [
      "Complete visits to Kedarnath and Badrinath",
      "Helicopter shuttle booking assistance",
      "All transits in comfortable Tempo Travellers or private cabs",
      "Hygienic deluxe hotel stays close to road heads"
    ],
    inclusions: [
      "Deluxe hotel stays in Guptkashi, Kedarnath, and Joshimath",
      "Breakfast and Dinner daily",
      "Dedicated hill-trained driver and private vehicle",
      "Permits, tolls, and registration assistance"
    ],
    exclusions: [
      "Helicopter, pony, or palki fees",
      "Lunches & personal tips",
      "GST taxes"
    ],
    stays: "Deluxe double-sharing rooms in Guptkashi, Joshimath, and Kedarnath camps.",
    itinerary: [
      { day: 1, title: "Haridwar to Guptkashi (220 km / 8 hrs)", desc: "Pickup from Haridwar/Rishikesh and drive to Guptkashi. Enjoy the beautiful confluences of Devprayag and Rudraprayag on the way.", meals: "Dinner", distance: "220 km" },
      { day: 2, title: "Guptkashi to Kedarnath (30 km drive + 16 km trek)", desc: "Early transfer to Gaurikund or Phata helipad. Trek or fly to Kedarnath. Arrive at Kedarnath temple, perform evening puja.", meals: "Breakfast, Dinner", distance: "30 km drive / 16 km trek" },
      { day: 3, title: "Kedarnath to Guptkashi", desc: "Enjoy morning temple darshan. Trek back down to Gaurikund, drive back to Guptkashi for overnight rest.", meals: "Breakfast, Dinner", distance: "16 km trek / 30 km drive" },
      { day: 4, title: "Guptkashi to Joshimath/Pipalkoti (160 km / 6 hrs)", desc: "Scenic drive passing through Joshimath. Check-in at hotel and enjoy local walking tours.", meals: "Breakfast, Dinner", distance: "160 km" },
      { day: 5, title: "Joshimath to Badrinath to Joshimath (45 km each way)", desc: "Morning drive to Badrinath Dham. Take bath in Tapt Kund, perform puja at the temple, and visit Mana village. Return to Joshimath for overnight stay.", meals: "Breakfast, Dinner", distance: "90 km roundtrip" },
      { day: 6, title: "Joshimath to Rudraprayag (115 km / 4 hrs)", desc: "Relaxed drive down the mountains to Rudraprayag. Check-in at riverside resort.", meals: "Breakfast, Dinner", distance: "115 km" },
      { day: 7, title: "Rudraprayag to Haridwar (165 km / 5 hrs)", desc: "Return drive to Haridwar via Rishikesh. Drop-off at Haridwar station in the afternoon.", meals: "Breakfast", distance: "165 km" }
    ]
  },
  "kedarnath-yatra": {
    title: "Kedarnath Yatra",
    duration: "4 Nights / 5 Days",
    price: "₹13,500",
    route: "Haridwar → Guptkashi → Kedarnath → Rishikesh → Haridwar",
    overview: "A dedicated 5-day tour focused entirely on Lord Shiva's sanctuary at Kedarnath. Ideal for solo travellers, groups of friends, or Shiva devotees looking for a quick and highly efficient pilgrimage.",
    highlights: [
      "Dedicated Kedarnath Yatra guide",
      "Overnight stay near the temple for early morning darshan",
      "Includes trek support and booking assistance"
    ],
    inclusions: [
      "Accommodations in Guptkashi and Kedarnath",
      "All meals included (100% vegetarian)",
      "Hill-licensed sedan/SUV transport",
      "Emergency medical backup and oxygen support"
    ],
    exclusions: [
      "Pony, palki, or helicopter shuttle charges",
      "Personal expenses & GST"
    ],
    stays: "Comfort hotels in Guptkashi, tented cottages in Kedarnath.",
    itinerary: [
      { day: 1, title: "Haridwar to Guptkashi (220 km / 8 hrs)", desc: "Drive from Haridwar/Rishikesh up to Guptkashi. Check-in at hotel and briefing.", meals: "Dinner", distance: "220 km" },
      { day: 2, title: "Guptkashi to Kedarnath (30 km drive + 16 km trek)", desc: "Trek to Kedarnath from Gaurikund. Walk past Rambara and Lincholi. Check-in at cottage, attend evening aarti.", meals: "Breakfast, Dinner", distance: "30 km drive / 16 km trek" },
      { day: 3, title: "Kedarnath to Guptkashi", desc: "Perform morning darshan, visit Bhairav temple. Trek down to Gaurikund and drive back to Guptkashi.", meals: "Breakfast, Dinner", distance: "16 km trek / 30 km drive" },
      { day: 4, title: "Guptkashi to Rishikesh (190 km / 6 hrs)", desc: "Return road trip to Rishikesh. Attend the Ganga Aarti at Parmarth Niketan. Overnight stay at Rishikesh.", meals: "Breakfast, Dinner", distance: "190 km" },
      { day: 5, title: "Rishikesh to Haridwar (25 km)", desc: "After breakfast, transfer to Haridwar railway station for departure.", meals: "Breakfast", distance: "25 km" }
    ]
  },
  "badrinath-yatra": {
    title: "Badrinath Yatra",
    duration: "3 Nights / 4 Days",
    price: "₹11,800",
    route: "Haridwar → Joshimath → Badrinath → Rudraprayag → Haridwar",
    overview: "A direct 4-day trip to Badrinath temple, seat of Lord Vishnu. No trekking required, making it a very comfortable option for elderly pilgrims or families seeking a short spiritual break.",
    highlights: [
      "Direct road access to the temple",
      "Explore Mana Village (Bhim Pul, Vyas Gufa)",
      "Riverside hotel stays along the Alaknanda"
    ],
    inclusions: [
      "Hotel rooms in Joshimath and Badrinath",
      "Pure vegetarian dining",
      "Private cab transfers",
      "Tour coordination"
    ],
    exclusions: [
      "Tapt Kund bath accessories",
      "Personal laundry & tips"
    ],
    stays: "Standard riverside hotels in Joshimath, temple area stays in Badrinath.",
    itinerary: [
      { day: 1, title: "Haridwar to Joshimath (276 km / 9 hrs)", desc: "Drive along the Alaknanda river route. Check-in at Joshimath hotel.", meals: "Dinner", distance: "276 km" },
      { day: 2, title: "Joshimath to Badrinath (45 km / 2 hrs)", desc: "Drive to Badrinath. Bathe in Tapt Kund, offer prayers at Badrinath temple. Evening walk in local markets.", meals: "Breakfast, Dinner", distance: "45 km" },
      { day: 3, title: "Badrinath to Rudraprayag (160 km / 6 hrs)", desc: "Visit Mana Village. Drive down to Rudraprayag, passing through Karnaprayag and Nandaprayag.", meals: "Breakfast, Dinner", distance: "160 km" },
      { day: 4, title: "Rudraprayag to Haridwar (165 km / 5 hrs)", desc: "Drive back to Haridwar, dropping off at Haridwar/Dehradun railway station.", meals: "Breakfast", distance: "165 km" }
    ]
  },
  "char-dham-by-helicopter": {
    title: "Char Dham by Helicopter",
    duration: "4 Nights / 5 Days",
    price: "₹1,85,000",
    route: "Dehradun → Yamunotri → Gangotri → Kedarnath → Badrinath → Dehradun",
    overview: "The ultimate luxury pilgrimage. Cover all four Shrines in just 5 days with private helicopter charters starting from Dehradun. Includes VIP quick Darshan passes, luxury resort accommodations, and full concierge support.",
    highlights: [
      "All four Dhams covered in 5 days",
      "VIP quick-darshan passes included at all temples",
      "Stay in premium luxury resorts and orchard camps",
      "No trekking required (palki/car included for Yamunotri)"
    ],
    inclusions: [
      "Private helicopter charter transfers from Dehradun helipad",
      "Premium 5★ resort stays in Kharsali, Harsil, Sersi, and Badrinath",
      "All gourmet meals (vegetarian) prepared by executive chefs",
      "VIP darshan passes and temple guide fees",
      "Ground handling, local coordinate logistics, and airport transfers"
    ],
    exclusions: [
      "Personal shopping and contributions to priests",
      "Incidental expenses"
    ],
    stays: "Luxury resorts and premium orchard glamping sites at each Dham.",
    itinerary: [
      { day: 1, title: "Dehradun to Kharsali (Yamunotri)", desc: "Assemble at Sahastradhara helipad, Dehradun. Fly to Kharsali. Check-in at luxury camp. Transfer to Yamunotri temple via palki (palanquin) or pony. VIP darshan and return.", meals: "Breakfast, Lunch, Dinner", distance: "Helicopter Flight" },
      { day: 2, title: "Kharsali to Harsil (Gangotri)", desc: "Fly from Kharsali to Harsil, the scenic valley of apple orchards. Drive 25 km in luxury cab to Gangotri temple. VIP Darshan, explore the scenic baghirathi banks, stay in Harsil valley.", meals: "Breakfast, Lunch, Dinner", distance: "Heli Flight / 25 km drive" },
      { day: 3, title: "Harsil to Sersi/Phata (Kedarnath)", desc: "Fly to Sersi. Board the shuttle chopper directly to Kedarnath temple helipad. VIP darshan and pooja at the shrine. Fly back to Sersi for luxury stay.", meals: "Breakfast, Lunch, Dinner", distance: "Heli Flights" },
      { day: 4, title: "Sersi to Badrinath", desc: "Fly to Badrinath. Check-in at luxury hotel. Proceed for VIP Badrinath Darshan. Afternoon sightseeing in Mana village and evening Vishnu Aarti.", meals: "Breakfast, Lunch, Dinner", distance: "Heli Flight" },
      { day: 5, title: "Badrinath to Dehradun", desc: "After breakfast, fly back to Sahastradhara helipad, Dehradun. Transfer to Dehradun airport or station for departure.", meals: "Breakfast", distance: "Heli Flight" }
    ]
  },
  "senior-citizen-special": {
    title: "Senior Citizen Special",
    duration: "8 Nights / 9 Days",
    price: "₹34,900",
    route: "Haridwar → Yamunotri → Gangotri → Kedarnath (via Heli) → Badrinath → Haridwar",
    overview: "A highly relaxed and comfortable yatra designed specifically for senior citizens. Includes medical kits with on-call oxygen, ground-floor room assignments, light sattvic meals, and included pony/palki support for Yamunotri and helicopter tickets for Kedarnath.",
    highlights: [
      "Relaxed pace with shorter daily drives",
      "Ground floor room bookings in all hotels",
      "Helicopter tickets for Kedarnath included",
      "Pony/Palki pre-booked for Yamunotri"
    ],
    inclusions: [
      "Hôtel stays with senior-friendly amenities",
      "Helicopter shuttle tickets for Kedarnath",
      "Pre-booked pony/palki for Yamunotri",
      "Oxygen support, medical kit, and dedicated helper assistance",
      "Pure sattvic meals (onion/garlic free on request)"
    ],
    exclusions: [
      "Personal medical expenses or medicines",
      "Pooja offerings"
    ],
    stays: "Premium hotels with easy accessibility and ground floor preferences.",
    itinerary: [
      { day: 1, title: "Haridwar to Barkot (200 km / 8 hrs)", desc: "Drive at a relaxed pace with multiple breaks. Check-in at hotel, overnight rest.", meals: "Dinner", distance: "200 km" },
      { day: 2, title: "Barkot to Yamunotri to Barkot", desc: "Transfer to Janki Chatti. Ride pre-booked ponies/palkies to Yamunotri temple. Perform darshan and return comfortably.", meals: "Breakfast, Dinner", distance: "45 km drive / 12 km ride" },
      { day: 3, title: "Barkot to Uttarkashi (82 km / 3 hrs)", desc: "Short drive to Uttarkashi. Afternoon rest, evening visit to Vishwanath temple.", meals: "Breakfast, Dinner", distance: "82 km" },
      { day: 4, title: "Uttarkashi to Gangotri to Uttarkashi", desc: "Direct drive to Gangotri. Quick VIP entry, afternoon return to Uttarkashi hotel.", meals: "Breakfast, Dinner", distance: "200 km roundtrip" },
      { day: 5, title: "Uttarkashi to Guptkashi (220 km / 9 hrs)", desc: "Comfortable drive with multiple stops. Arrive at Guptkashi, rest for helicopter boarding next day.", meals: "Breakfast, Dinner", distance: "220 km" },
      { day: 6, title: "Guptkashi to Kedarnath (via Helicopter)", desc: "Transfer to Sersi helipad. Fly to Kedarnath temple. Stay in premium VIP camps near the temple. Attend evening puja.", meals: "Breakfast, Dinner", distance: "Heli Flight" },
      { day: 7, title: "Kedarnath to Badrinath (via Heli + Drive)", desc: "Fly back to Sersi. Drive comfortably to Badrinath Dham. Check-in at hotel.", meals: "Breakfast, Dinner", distance: "170 km drive" },
      { day: 8, title: "Badrinath Temple to Rudraprayag (160 km / 6 hrs)", desc: "Perform holy dip and morning darshan. Relaxed return drive to Rudraprayag hotel.", meals: "Breakfast, Dinner", distance: "160 km" },
      { day: 9, title: "Rudraprayag to Haridwar (165 km / 6 hrs)", desc: "Slow drive to Haridwar via Rishikesh. Drop off at railway station.", meals: "Breakfast", distance: "165 km" }
    ]
  }
};

function PackageDetailPage() {
  const { packageSlug } = Route.useParams();
  const pkg = detailedPackages[packageSlug];
  const [sent, setSent] = useState(false);

  if (!pkg) {
    return (
      <div className="bg-background min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-10">
          <div className="text-center">
            <h1 className="text-4xl font-display text-foreground">Package Not Found</h1>
            <p className="text-muted-foreground mt-4">We couldn't find details for package "{packageSlug}".</p>
            <Link to="/packages" className="inline-flex items-center gap-2 text-primary mt-6 hover:text-gold font-semibold">
              <ArrowLeft className="h-4 w-4" /> Back to Packages
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
        <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-forest-deep/80 z-10" />
          <div className="relative z-20 w-full max-w-7xl px-5 lg:px-10 mt-20 text-left">
            <Reveal>
              <Link 
                to="/packages" 
                className="inline-flex items-center gap-2 text-amber-300 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider mb-6"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Packages
              </Link>
              <h1 className="text-4xl sm:text-6xl text-white font-display leading-tight">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap gap-6 mt-6 text-white/90 text-sm">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 font-medium">
                  <Clock className="h-4 w-4 text-amber-300" /> {pkg.duration}
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 font-semibold text-amber-300">
                  Starts at {pkg.price} per person
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview & Grid */}
        <section className="bg-cream py-20 lg:py-32">
          <div className="mx-auto max-w-7xl gap-16 px-5 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            {/* Left Side: Overview & Itinerary */}
            <div>
              <Reveal>
                <h2 className="text-3xl font-display text-foreground mb-6">Trip Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8 font-medium">
                  {pkg.overview}
                </p>
                
                <h3 className="text-lg font-bold text-forest-deep uppercase tracking-wider mb-4">Route Map</h3>
                <div className="bg-card p-5 rounded-2xl border border-border shadow-soft text-sm text-foreground/80 mb-12 font-semibold">
                  {pkg.route}
                </div>
              </Reveal>

              {/* Day-by-Day Itinerary */}
              <Reveal>
                <h2 className="text-3xl font-display text-foreground mb-10 flex items-center gap-3">
                  <CalendarDays className="h-8 w-8 text-gold" /> Detailed Day-by-Day Itinerary
                </h2>
                
                <div className="relative border-l border-gold/35 pl-8 sm:pl-10 ml-4 space-y-12">
                  {pkg.itinerary.map((item) => (
                    <div key={item.day} className="relative">
                      {/* Day Circle badge */}
                      <span className="absolute top-0.5 -left-[3.05rem] sm:-left-[3.55rem] grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                        D{item.day}
                      </span>
                      
                      <h3 className="text-xl sm:text-2xl font-display text-foreground">{item.title}</h3>
                      
                      <div className="flex flex-wrap gap-4 mt-2 mb-4 text-xs font-semibold text-muted-foreground">
                        {item.distance && <span className="bg-secondary/70 px-3 py-1 rounded-md">Distance: {item.distance}</span>}
                        {item.meals && <span className="bg-secondary/70 px-3 py-1 rounded-md flex items-center gap-1"><Utensils className="h-3 w-3 text-gold" /> Meals: {item.meals}</span>}
                      </div>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Side: Quick Book & Inclusions */}
            <div className="mt-16 lg:mt-0 space-y-8">
              {/* Quick Inquiry Form */}
              <Reveal>
                <div className="bg-card p-8 rounded-[2rem] border border-border/40 shadow-soft">
                  <h3 className="font-display text-2xl text-foreground flex items-center gap-2 mb-6">
                    <CalendarCheck className="h-6 w-6 text-gold" /> Book This Package
                  </h3>
                  
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-4"
                  >
                    <label className="block">
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Your Name</span>
                      <input required type="text" placeholder="Full name" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold" />
                    </label>

                    <label className="block">
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</span>
                      <input required type="tel" placeholder="+91" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold" />
                    </label>

                    <label className="block">
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Preferred travel date</span>
                      <input required type="date" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold" />
                    </label>

                    <label className="block">
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">Travelers</span>
                      <input type="number" min={1} defaultValue={2} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold" />
                    </label>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] transition-transform"
                    >
                      <Send className="h-4 w-4" strokeWidth={1.7} /> Send Booking Request
                    </button>

                    {sent && (
                      <p className="text-center text-sm text-gold mt-4 font-semibold">
                        Inquiry sent! A travel planner will call you shortly.
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>

              {/* Inclusions Card */}
              <Reveal>
                <div className="bg-card p-8 rounded-[2rem] border border-border/40 shadow-soft">
                  <h3 className="font-display text-2xl text-foreground mb-6">Stays &amp; Inclusions</h3>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-4 flex items-center gap-1.5">
                    <Hotel className="h-4 w-4 text-gold" /> Stays: {pkg.stays}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-xs uppercase text-green-700 tracking-wider mb-3">✓ What's Included</h4>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {pkg.inclusions.map((inc) => (
                          <li key={inc} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/40">
                      <h4 className="font-bold text-xs uppercase text-red-700 tracking-wider mb-3">✕ What's Excluded</h4>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {pkg.exclusions.map((exc) => (
                          <li key={exc} className="flex items-start gap-2">
                            <X className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-primary text-primary-foreground py-20 text-center relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 translate-x-20 -translate-y-20">
            <Compass className="h-96 w-96" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-5">
            <Reveal>
              <h2 className="text-3xl sm:text-5xl font-display text-white">
                Have custom requirements for your group?
              </h2>
              <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto text-base sm:text-lg">
                We can customize stays, pick-up points, vehicles, and adjust pacing according to your preferences. Talk to an expert planner.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+91 97607 12664"
                  className="rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-forest-deep transition-transform hover:scale-105 inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> Call +91 97607 12664
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/45 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Message Us on WhatsApp
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

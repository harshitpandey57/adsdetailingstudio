import yamunotri from "@/assets/yamunotri.jpg";
import gangotri from "@/assets/gangotri.jpg";
import kedarnath from "@/assets/kedarnath.jpg";
import badrinath from "@/assets/badrinath.jpg";
import hero from "@/assets/hero.jpg";
import gHeli from "@/assets/g-heli.jpg";
import gRoad from "@/assets/g-road.jpg";

export const destinations = [
  {
    name: "Yamunotri",
    image: yamunotri,
    deity: "Goddess Yamuna",
    description:
      "The source of the Yamuna and the first stop of the yatra, reached through cedar forests and the warm Surya Kund thermal springs.",
    best: "May – June, Sep – Oct",
    altitude: "3,293 m",
    highlights: ["Surya Kund hot spring", "Divya Shila", "Janki Chatti trek"],
  },
  {
    name: "Gangotri",
    image: gangotri,
    deity: "Goddess Ganga",
    description:
      "Where the Ganga first touched earth. A serene white temple on the banks of the emerald Bhagirathi, framed by granite spires.",
    best: "May – June, Sep – Oct",
    altitude: "3,100 m",
    highlights: ["Bhagirath Shila", "Gaumukh trail", "Evening Ganga aarti"],
  },
  {
    name: "Kedarnath",
    image: kedarnath,
    deity: "Lord Shiva",
    description:
      "One of the twelve Jyotirlingas, standing in stone silence beneath the Kedarnath massif — the most moving moment of the journey.",
    best: "May – June, Sep – Oct",
    altitude: "3,583 m",
    highlights: ["Jyotirlinga darshan", "Gaurikund trek", "Helicopter shuttle"],
  },
  {
    name: "Badrinath",
    image: badrinath,
    deity: "Lord Vishnu",
    description:
      "The vividly painted seat of Lord Vishnu beneath Neelkanth peak, with the healing Tapt Kund springs at its feet.",
    best: "May – June, Sep – Oct",
    altitude: "3,300 m",
    highlights: ["Tapt Kund", "Mana — last village", "Vasudhara Falls"],
  },
];

export const packages = [
  {
    title: "Complete Char Dham Yatra",
    duration: "10 Nights / 11 Days",
    route: "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath",
    price: "₹28,500",
    tag: "Most Booked",
    image: hero,
    includes: ["3★ / 4★ Hotels", "All Meals", "AC Vehicle", "Yatra Guide"],
  },
  {
    title: "Do Dham Yatra",
    duration: "6 Nights / 7 Days",
    route: "Haridwar → Kedarnath → Badrinath",
    price: "₹19,900",
    image: gangotri,
    includes: ["Deluxe Hotels", "Breakfast & Dinner", "Tempo Traveller", "Local Guide"],
  },
  {
    title: "Kedarnath Yatra",
    duration: "4 Nights / 5 Days",
    route: "Haridwar → Guptkashi → Kedarnath",
    price: "₹13,500",
    image: kedarnath,
    includes: ["Comfort Hotels", "All Meals", "Sedan / SUV", "Trek Assistance"],
  },
  {
    title: "Badrinath Yatra",
    duration: "3 Nights / 4 Days",
    route: "Haridwar → Joshimath → Badrinath",
    price: "₹11,800",
    image: badrinath,
    includes: ["Riverside Stays", "All Meals", "Private Cab", "Temple Guide"],
  },
  {
    title: "Senior Citizen Special",
    duration: "8 Nights / 9 Days",
    route: "Haridwar → All Four Dhams (relaxed pace)",
    price: "₹34,900",
    image: gRoad,
    includes: ["Ground-floor Rooms", "Sattvic Meals", "Palki / Pony", "Medical Support"],
  },
];

export const reasons = [
  ["Char Dham Specialists", "Fifteen seasons of running only Uttarakhand pilgrimages."],
  ["Government Registered", "Registered with Uttarakhand Tourism & recognised operator."],
  ["Comfortable Hotels", "Hand-inspected stays close to every temple gate."],
  ["Experienced Local Guides", "Garhwali guides who know each trail and ritual."],
  ["Safe Transportation", "Hill-tested vehicles with certified mountain drivers."],
  ["Helicopter Assistance", "IRCTC & operator slot booking handled end to end."],
  ["Medical Assistance", "Oxygen support, first aid and on-call doctors."],
  ["24×7 Support", "A dedicated coordinator through your entire yatra."],
  ["Custom Packages", "Family, group or private itineraries built around you."],
  ["Transparent Pricing", "One clear quote. No hidden charges, ever."],
] as const;

export const steps = [
  ["Choose Package", "Pick a Char Dham, Do Dham or custom itinerary that fits your days and budget."],
  ["Talk to Travel Expert", "A yatra planner refines the route, stays and pace for your group."],
  ["Confirm Booking", "Simple advance payment, instant confirmation and full documentation."],
  ["Travel Arrangements", "Hotels, vehicles, permits, registration and heli slots are secured."],
  ["Begin Your Divine Journey", "You travel; we handle everything else, all the way home."],
] as const;

export const testimonials = [
  {
    name: "Rakesh Sharma",
    city: "Jaipur, Rajasthan",
    text: "Every detail was handled — hotels near the temples, a calm driver on those roads, and a guide who explained each ritual. Our Char Dham felt effortless.",
  },
  {
    name: "Meera Iyer",
    city: "Pune, Maharashtra",
    text: "We travelled with my 74-year-old father. The team arranged palki at Kedarnath and ground-floor rooms everywhere. Deeply grateful to Yamuna Holidays.",
  },
  {
    name: "Anil & Sunita Verma",
    city: "Lucknow, Uttar Pradesh",
    text: "The helicopter package was worth every rupee. Four dhams in five days, VIP darshan, and not a single delay. Truly professional service.",
  },
];

export const faqs = [
  [
    "What is the best time for Char Dham Yatra?",
    "The portals open in late April/May and close in November. May–June and September–October offer the clearest weather; July–August brings heavy monsoon rain and landslide risk.",
  ],
  [
    "How many days are required?",
    "A complete Char Dham Yatra by road takes 10–12 days from Haridwar. Do Dham needs 6–7 days, a single dham 4–5 days, and the helicopter circuit covers all four in 5 days.",
  ],
  [
    "Is helicopter service available?",
    "Yes. We arrange Kedarnath shuttle services from Phata, Sersi and Guptkashi, as well as full Char Dham helicopter charters from Dehradun, including registration and slot booking.",
  ],
  [
    "Can senior citizens travel?",
    "Absolutely. Our Senior Citizen Special runs at a relaxed pace with ground-floor rooms, sattvic meals, palki and pony support, oxygen cylinders and medical assistance on call.",
  ],
  [
    "What is included in the package?",
    "Accommodation, meals as specified, private transport with driver, yatra registration assistance, guide services, all applicable taxes and 24×7 coordination support.",
  ],
  [
    "How can I book?",
    "Choose a package, speak with our travel expert, and confirm with a 25% advance. You receive the full itinerary, hotel vouchers and a dedicated coordinator immediately.",
  ],
] as const;
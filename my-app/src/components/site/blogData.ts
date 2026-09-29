import kedarnath from "@/assets/kedarnath.jpg";
import heli from "@/assets/g-heli.jpg";
import river from "@/assets/g-river.jpg";
import gangotri from "@/assets/gangotri.jpg";
import pilgrims from "@/assets/g-pilgrims.jpg";
import road from "@/assets/g-road.jpg";
import badrinath from "@/assets/badrinath.jpg";
import yamunotri from "@/assets/yamunotri.jpg";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogTip {
  icon: string;
  title: string;
  detail: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  coverImage: string;
  secondaryImage: string;
  intro: string;
  sections: BlogSection[];
  tips: BlogTip[];
  relatedSlugs: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kedarnath-guide",
    category: "Pilgrimage Guide",
    readTime: "6 min read",
    date: "April 12, 2025",
    author: "Vikram Negi",
    authorRole: "Senior Yatra Guide, Yamuna Holidays",
    title: "Kedarnath Yatra: Everything You Need to Know Before You Go",
    subtitle: "A complete first-timer's guide to one of India's most sacred pilgrimages",
    excerpt:
      "From the Gaurikund trek to helicopter options, altitude acclimatisation tips, and the best time to visit — a complete first-timer's guide to Kedarnath.",
    coverImage: kedarnath,
    secondaryImage: pilgrims,
    intro:
      "Kedarnath is not just a pilgrimage — it is an experience that reshapes you. Sitting at 3,583 metres beneath the Kedarnath massif, this ancient Jyotirlinga temple is one of the most emotionally moving destinations on the Char Dham circuit. But the journey demands respect for the mountains. Whether you are planning to trek or fly by helicopter, this guide covers everything you need to know before you set foot on the trail.",
    sections: [
      {
        heading: "The Best Time to Visit",
        body: "The Kedarnath portals open every year on Akshaya Tritiya (late April or early May) and close on Bhai Dooj in November. The ideal windows are May to mid-June and mid-September to late October. During these periods the skies are clear, the trail is dry, and the crowds — while substantial — are manageable. Avoid July and August if possible: the monsoon brings heavy rainfall, landslides on the Gaurikund road, and flash-flood risk in the valley. The 2013 disaster occurred precisely during this season.",
      },
      {
        heading: "Getting to Gaurikund: The Base Camp",
        body: "All road journeys to Kedarnath end at Gaurikund (1,982 m), a small town featuring hot-water springs and a Parvati temple. From Haridwar or Rishikesh, the road distance is approximately 215 km via Rudraprayag and Sonprayag. Note that private vehicles can only go as far as Sonprayag; from there, shared jeeps ferry pilgrims the final 5 km to Gaurikund. Allow 8–10 hours for the full road journey from Haridwar on a clear day — mountain roads slow progress considerably.",
      },
      {
        heading: "The Trek: 16 km of Himalayan Terrain",
        body: "The paved-and-stone trail from Gaurikund to the temple is 16 km (one-way) with a total elevation gain of roughly 1,600 metres. It is steep in the first 8 km, eases through Linchauli forest camp, and then climbs again through a dramatic gorge before the valley opens up at Kedarnath meadow. Average walkers cover it in 6–8 hours ascending and 4–5 hours descending. The trail is flanked by tea stalls, first aid posts, and helicopter sightings above. Start early — by 4 a.m. to 5 a.m. — to avoid afternoon clouds and the afternoon rush hour near the temple.",
      },
      {
        heading: "Helicopter Option: All You Need to Know",
        body: "For pilgrims who cannot trek due to age, health, or time constraints, helicopter services operate from three helipads — Phata, Sersi, and Guptkashi — located 15–25 km from Sonprayag. The 10-minute flight offers breathtaking aerial views of the Mandakini valley and Kedarnath glacier. Round-trip prices range from ₹4,000 to ₹6,500 per person depending on the season. Slots sell out months in advance for the May–June season; book through IRCTC's official portal or through Yamuna Holidays. Weather cancellations are common — always have a backup day or trek plan.",
      },
      {
        heading: "Altitude and Acclimatisation",
        body: "Kedarnath sits at 3,583 m — high enough for Acute Mountain Sickness (AMS) to affect first-time visitors from the plains. Symptoms include headache, nausea, dizziness, and breathlessness. To minimise risk: spend the night before at Guptkashi (1,319 m) rather than pushing straight to Gaurikund; walk slowly and rest frequently on the trail; stay hydrated with 3–4 litres of water per day; avoid alcohol for 48 hours before and during the yatra; and carry a personal pulse-oximeter. Yamuna Holidays ensures all our groups have oxygen cylinders and a first-aid coordinator.",
      },
      {
        heading: "What to Pack",
        body: "Even in May, nighttime temperatures at Kedarnath drop to -2°C or below. Layers are essential. Pack: thermal inner-wear, a fleece mid-layer, a wind-and-waterproof outer jacket, woollen gloves and a cap, waterproof trekking boots with grip, and a reliable head-torch for pre-dawn starts. A small daypack (20–25 L) works better than a large rucksack on the crowded trail. Carry dry snacks, glucose biscuits, and ORS packets. ATMs and mobile signals disappear beyond Sonprayag — carry adequate cash and download offline maps.",
      },
    ],
    tips: [
      { icon: "🕐", title: "Start at 4 AM", detail: "Beat the crowd and afternoon cloud cover by beginning the trek before dawn." },
      { icon: "💧", title: "Hydrate Aggressively", detail: "Drink 3–4 litres of water daily. Dehydration worsens altitude sickness significantly." },
      { icon: "🚁", title: "Book Heli Early", detail: "Helicopter slots for May–June open in February. Don't wait — they vanish quickly." },
      { icon: "🧥", title: "Layer Up", detail: "Temperatures can swing 20°C between noon and midnight. Always carry warm layers." },
      { icon: "💰", title: "Carry Cash", detail: "ATMs end at Sonprayag. Bring enough rupees for the full journey in." },
      { icon: "🩺", title: "Pre-Yatra Health Check", detail: "If you have heart or lung conditions, consult your doctor before the trek." },
    ],
    tags: ["Kedarnath", "Char Dham", "Trekking", "Pilgrimage", "Uttarakhand"],
    relatedSlugs: ["heli-char-dham", "sacred-rivers"],
  },
  {
    slug: "heli-char-dham",
    category: "Travel Tips",
    readTime: "4 min read",
    date: "March 28, 2025",
    author: "Priya Rawat",
    authorRole: "Travel Consultant, Yamuna Holidays",
    title: "Char Dham by Helicopter: Is It Worth It?",
    subtitle: "Weighing the cost, convenience and spiritual experience of the aerial Char Dham circuit",
    excerpt:
      "We break down the helicopter Char Dham circuit — costs, slots, weather windows and why more pilgrims are choosing this premium route every season.",
    coverImage: heli,
    secondaryImage: road,
    intro:
      "Every year, a growing number of pilgrims are choosing to complete the Char Dham Yatra by helicopter. What was once an option for only the most affluent has become increasingly accessible — and for senior pilgrims, those with health constraints, or devotees with limited leave, the helicopter circuit has become the preferred choice. But is it worth the significant premium? We weigh the pros and cons after having operated this circuit for over a decade.",
    sections: [
      {
        heading: "What Is the Helicopter Char Dham Circuit?",
        body: "The helicopter Char Dham circuit departs from Dehradun's Sahastradhara helipad and covers all four dhams — Yamunotri, Gangotri, Kedarnath, and Badrinath — in 4 nights and 5 days. Each dham is reached by a helicopter flight of 10–30 minutes from a valley helipad, followed by a short walk or palki ride to the temple. VIP darshan slots are pre-arranged, eliminating multi-hour queues. Accommodation is at premium lodges or hotels near the helipads.",
      },
      {
        heading: "How Much Does It Cost?",
        body: "In the 2025 season, a complete helicopter Char Dham package from Yamuna Holidays starts at ₹1,85,000 per person, inclusive of all flights, accommodation, meals, and darshan arrangements. This is significantly higher than the road-based Complete Char Dham package (from ₹28,500 per person). However, when you consider that the road journey takes 11–12 days versus 5 days by helicopter, and that the helicopter route eliminates exhausting high-altitude trekking, many pilgrims — especially those above 60 — find the premium well justified.",
      },
      {
        heading: "The Booking Challenge: Slots Are Scarce",
        body: "Government-regulated helicopter slots for each dham — especially Kedarnath — are allocated through IRCTC and the Uttarakhand Civil Aviation Development Authority. Demand vastly outstrips supply every season. Slots for the May–June peak window typically open in February and are exhausted within days. Booking through an experienced operator like Yamuna Holidays, who maintain allocations across multiple operators, meaningfully increases your chances of securing dates on your preferred schedule.",
      },
      {
        heading: "Weather: The Biggest Variable",
        body: "Helicopter operations in the Himalayas are entirely weather-dependent. Fog, low clouds, wind, and rain ground all flights — sometimes for 24–48 hours. Reputable operators build buffer days into itineraries. Even so, weather delays occur in every season. Pilgrims taking the helicopter route need flexibility. If your schedule allows zero deviation, the helicopter circuit is risky. May and early June offer the most stable flying windows; September and October can be mixed.",
      },
      {
        heading: "The Spiritual Experience: Does It Differ?",
        body: "Critics of the helicopter circuit argue that the physical effort of the trek is itself a form of devotion — the hardship purifies and prepares the pilgrim. This is a deeply personal view, and many trekkers hold it sincerely. However, those who have completed the route by helicopter report that the aerial perspective — seeing the Himalayan range from above, approaching each temple from the sky — creates its own profound spiritual atmosphere. For elderly pilgrims who might otherwise be unable to reach these shrines at all, the helicopter is not a shortcut but an enabler.",
      },
      {
        heading: "Our Verdict: Who Should Choose the Helicopter Route?",
        body: "The helicopter Char Dham circuit is ideal for: senior pilgrims (65+) or those with heart, lung, or joint conditions; devotees with 5–6 days of leave rather than 12; families travelling with very young children; and those seeking maximum comfort and minimum logistical risk. It is not ideal for: pilgrims who value the trek as spiritual practice; those on a tight budget; or those whose dates are completely inflexible.",
      },
    ],
    tips: [
      { icon: "📅", title: "Book by February", detail: "May–June slots open in February and sell out within days. Don't procrastinate." },
      { icon: "☁️", title: "Build in Buffer Days", detail: "Always keep one spare day per dham for weather delays. Mountains are unpredictable." },
      { icon: "🛂", title: "Use a Registered Operator", detail: "Only DGCA-approved operators can fly. Yamuna Holidays works exclusively with certified fleets." },
      { icon: "🎒", title: "Pack Light", detail: "Helicopter weight limits are strict — 15 kg including cabin baggage. Pack only essentials." },
      { icon: "📱", title: "Download Offline Maps", detail: "Signal disappears in all four dham valleys. Download maps offline before flying." },
      { icon: "🩺", title: "Carry Medical Records", detail: "Operators may require a fit-to-fly certificate for passengers above 70 or with heart conditions." },
    ],
    tags: ["Helicopter", "Char Dham", "Premium Travel", "Senior Pilgrimage", "Uttarakhand"],
    relatedSlugs: ["kedarnath-guide", "sacred-rivers"],
  },
  {
    slug: "sacred-rivers",
    category: "Spiritual Journey",
    readTime: "5 min read",
    date: "February 15, 2025",
    author: "Ananya Sharma",
    authorRole: "Cultural Writer & Pilgrim",
    title: "The Sacred Rivers of Uttarakhand: A Pilgrim's Perspective",
    subtitle: "Understanding the waters you will cross on the Char Dham Yatra",
    excerpt:
      "Ganga, Yamuna, Alaknanda — each river carries its own mythology. Discover the spiritual significance of the waters you will cross on the Char Dham Yatra.",
    coverImage: river,
    secondaryImage: gangotri,
    intro:
      "To travel through Uttarakhand on the Char Dham Yatra is to travel through water. Every road follows a river. Every temple sits beside one. The rivers of Garhwal — the Yamuna, the Bhagirathi, the Mandakini, the Alaknanda — are not merely geographical features; they are deities, mythological actors, and living embodiments of grace. Understanding their stories transforms the yatra from a journey between four temples into a dialogue with the landscape itself.",
    sections: [
      {
        heading: "The Yamuna: First River, First Goddess",
        body: "The Char Dham Yatra traditionally begins at Yamunotri, the source of the Yamuna. In Hindu cosmology, Yamuna (also called Yami) is the daughter of Surya — the Sun God — and the twin sister of Yama, the god of death. Bathing in the Yamuna is believed to protect devotees from untimely death and purify accumulated karmic debt. The river originates from the Champasar Glacier at 4,421 metres and flows as a crystalline stream through the Janki Chatti valley before the trail begins.",
      },
      {
        heading: "The Bhagirathi: Ganga Before the Plains",
        body: "Ganga is the most sacred river in Hinduism, but in Uttarakhand, at its source, it carries a different name: the Bhagirathi. Named after King Bhagirath — who is said to have performed penance for thousands of years to bring Ganga down from heaven — the Bhagirathi originates from the Gangotri Glacier snout called Gaumukh (the Cow's Mouth), 18 km above Gangotri. The evening Ganga Aarti at Gangotri, with oil lamps floated on the dark green current, is one of the most visually striking rituals of the entire yatra.",
      },
      {
        heading: "The Mandakini: The Gentlest River",
        body: "The Mandakini flows through the Kedarnath valley and is, in temperament, the most intimate of the four rivers. It accompanies pilgrims throughout the 16 km trek from Gaurikund. Mythologically, the Mandakini was the celestial Ganga that flowed through Shiva's matted hair — a river from heaven itself. After the catastrophic 2013 floods, when swollen glacier lakes burst into the valley, the Mandakini assumed a new, dual significance in the Kedarnath story: both destroyer and witness.",
      },
      {
        heading: "The Alaknanda: The Final Confluence",
        body: "The Alaknanda flows past Badrinath and is the final great river of the yatra. Born in the Satopanth glacier above Badrinath, it flows south through Joshimath and eventually joins the Bhagirathi at Devprayag — where the combined stream finally takes the name Ganga. Along the Alaknanda are Panch Prayag — five sacred confluences — where tributaries merge in different colours and temperatures. Standing at Devprayag, watching the milky-green Alaknanda merge with the grey-blue Bhagirathi to form the wide amber Ganga, is one of the most moving geographical experiences in India.",
      },
      {
        heading: "Bathing in Sacred Waters: The Practice",
        body: "At each dham, ritual bathing (snan) before the main darshan is expected and encouraged. The water is always cold — often glacial. The Tapt Kund hot spring at Badrinath is the notable exception: geothermal water at around 45°C runs directly beside the frigid Alaknanda, and pilgrims traditionally bathe in the warm spring before entering the cold river. The act of bathing is understood as an outward manifestation of inner purification — the river carries away what you release.",
      },
      {
        heading: "Listening to the Water",
        body: "One practice that experienced pilgrims recommend and that no guide book emphasises enough: simply sit by the river. Anywhere. For twenty minutes. The sound of a Himalayan river — the specific mid-frequency roar that combines power and white noise — is unlike anything in daily life. It fills the skull and quiets thought. Many pilgrims report that the most profound moment of their entire yatra was not inside a temple but beside the water, watching it move over stones in the evening light.",
      },
    ],
    tips: [
      { icon: "🌊", title: "Bring a Change of Clothes", detail: "Ritual bathing at each dham means wet clothes. Pack a quick-dry spare set." },
      { icon: "🕯️", title: "Attend the Aarti", detail: "Evening aarti at Gangotri and Badrinath with river lamps is unmissable. Check timings in advance." },
      { icon: "🌡️", title: "Expect Cold Water", detail: "Even in June, river water is glacial. Brief immersions are fine; prolonged bathing risks hypothermia." },
      { icon: "📷", title: "No Photography at Ghats", detail: "Respect other pilgrims — photography is generally forbidden at bathing areas." },
      { icon: "🙏", title: "Carry a Small Offering", detail: "Flowers, rice, or a small diya to float on the river are deeply meaningful acts." },
      { icon: "🪔", title: "Devprayag Stop", detail: "Break the return journey at Devprayag to witness the Alaknanda–Bhagirathi confluence." },
    ],
    tags: ["Rivers", "Spirituality", "Ganga", "Uttarakhand", "Char Dham", "Culture"],
    relatedSlugs: ["kedarnath-guide", "heli-char-dham"],
  },
  {
    slug: "badrinath-guide",
    category: "Pilgrimage Guide",
    readTime: "5 min read",
    date: "May 5, 2025",
    author: "Suresh Bisht",
    authorRole: "Garhwali Heritage Guide, Yamuna Holidays",
    title: "Badrinath Dham: The Final Stop and Its Timeless Secrets",
    subtitle: "Everything a first-time pilgrim needs to know about Lord Vishnu's Himalayan seat",
    excerpt:
      "From the vivid painted facade to Tapt Kund's warm waters and the last Indian village of Mana — a complete guide to Badrinath, the crown jewel of the Char Dham circuit.",
    coverImage: badrinath,
    secondaryImage: road,
    intro:
      "Badrinath is where the Char Dham Yatra reaches its crescendo. After the rugged trek to Kedarnath and the glacier-cold roads to Gangotri and Yamunotri, Badrinath greets the pilgrim with a burst of colour — its famous painted facade rising against the steel-grey Neelkanth peak. The temple is fully accessible by road, making it the most logistically straightforward of the four dhams, yet none of its spiritual weight is diminished for it. If anything, the ease of access simply means you arrive with your full attention to give.",
    sections: [
      {
        heading: "The Temple: Architecture and Daily Ritual",
        body: "The Badrinath temple is a striking composition: a brightly painted three-storeyed structure with a gilded dome, set on the banks of the Alaknanda River below the snow line. The front facade — repainted every year before the portals open — features vivid ochre, green, and white bands that make the shrine instantly recognisable in any photograph. Inside, the presiding deity is a 1-metre black Saligram stone image of Lord Badrinarayan seated in meditative pose. Daily rituals begin with the Abhishek at 4:30 a.m. and close with the Shayan Aarti at 9 p.m. — attending either is one of the most quietly moving experiences of the yatra.",
      },
      {
        heading: "Tapt Kund: The Hot Spring Before Darshan",
        body: "Just below the temple, built into the riverbank, is Tapt Kund — a natural geothermal spring where water emerges at around 45°C. Tradition requires pilgrims to bathe here before entering the temple. In the cold mountain air, the warm sulphurous water is deeply welcome, and the contrast with the ice-cold Alaknanda flowing a metre away is striking. Separate bathing areas are maintained for men and women. The spring is most atmospheric in the early morning, when steam rises against the dark mountain walls and the first bells ring from the temple above.",
      },
      {
        heading: "Mana: India's Last Village",
        body: "Three kilometres beyond Badrinath lies Mana, an ancient stone-built village that holds the distinction of being the last inhabited settlement before the Tibet border. It is well worth the short drive or walk. Mana is home to Vyas Gufa — a cave where the sage Vyas is said to have dictated the Mahabharata — and to Bhim Pul, a large flat boulder spanning the roaring Saraswati River, which Bhim placed there for Draupadi to cross. The village also has small tea stalls selling the warming atta-based local breads and chai. In October, the entire village migrates to lower elevations before the winter snows seal the valley.",
      },
      {
        heading: "How to Reach: The Road to Badrinath",
        body: "Badrinath is connected by National Highway 7 (the old NH 58) to Rishikesh, a distance of approximately 295 km. The road passes through Devprayag, Srinagar (Garhwal), Rudraprayag, Chamoli, and Joshimath. The drive takes 10–12 hours from Rishikesh under normal conditions. Taxis and buses run regularly. Private vehicles can drive all the way to the temple parking lot, about 200 metres from the shrine. No trekking is required. Joshimath, 45 km before Badrinath, is the recommended overnight halt for acclimatisation and logistics.",
      },
      {
        heading: "Best Time to Visit",
        body: "The Badrinath portals open on Akshaya Tritiya (usually late April or early May) and close on the day of Bhai Dooj (early November). The ideal months are May–June and mid-September to mid-October. In the monsoon months of July and August, landslides frequently block the Chamoli highway; closures of 12–48 hours are common. November opening days and the weeks leading up to closure see enormous crowds — many pilgrims visit specifically to witness the Closing Ceremony, when the doors are shut with much ceremony until the next spring.",
      },
      {
        heading: "Nearby Attractions: Beyond the Main Temple",
        body: "The area around Badrinath holds several sites worth visiting. Charan Paduka, a rock 3 km above Badrinath bearing a footprint said to be Vishnu's, offers an excellent view of the temple valley. Vasudhara Falls, 9 km from Mana, is a 145-metre waterfall that emerges from a sheer cliff — the walk there crosses boulder fields with views of the Tibetan plateau. Satopanth Lake, at 4,600 m, is a high-altitude glacial lake requiring a 24 km trek and a night's camp, but considered one of the most beautiful landscapes in the entire Garhwal Himalaya.",
      },
    ],
    tips: [
      { icon: "🛕", title: "Attend Abhishek or Aarti", detail: "The 4:30 AM Abhishek and 9 PM Shayan Aarti are the most atmospheric times to be at the temple." },
      { icon: "🌡️", title: "Bathe in Tapt Kund Early", detail: "The hot spring is least crowded before 7 AM. Go early for a meditative experience." },
      { icon: "🏘️", title: "Don't Skip Mana", detail: "The last Indian village is only 3 km away. Bhim Pul and Vyas Gufa are unmissable." },
      { icon: "🏨", title: "Stay in Joshimath", detail: "Joshimath is the nearest town with proper hotels, 45 km below Badrinath." },
      { icon: "📅", title: "Avoid the Monsoon", detail: "July–August landslides can block the highway for days. Stick to May–June or September–October." },
      { icon: "🎒", title: "Carry Warm Layers", detail: "Even in June, temperatures drop to 8°C at night. A fleece and windproof jacket are essential." },
    ],
    tags: ["Badrinath", "Char Dham", "Pilgrimage", "Uttarakhand", "Lord Vishnu"],
    relatedSlugs: ["kedarnath-guide", "sacred-rivers"],
  },
  {
    slug: "himalayan-packing-list",
    category: "Travel Tips",
    readTime: "7 min read",
    date: "June 18, 2025",
    author: "Priya Rawat",
    authorRole: "Travel Consultant, Yamuna Holidays",
    title: "The Ultimate Char Dham Packing List: What to Bring and What to Leave Behind",
    subtitle: "Fifteen seasons of Himalayan yatras distilled into one definitive packing guide",
    excerpt:
      "Too much luggage slows the trek and strains the vehicle. Too little leaves you cold, wet, and unprepared. After 15 seasons on the Char Dham circuit, here is exactly what to pack.",
    coverImage: pilgrims,
    secondaryImage: road,
    intro:
      "Every year, pilgrims arrive at Gaurikund dragging suitcases that have no place on a mountain trail, or shivering at Kedarnath in thin cotton because nobody warned them how cold 3,600 metres gets after sundown. Packing for the Char Dham Yatra is genuinely different from packing for a city holiday — the altitudes are serious, the weather changes by the hour, and the trails punish unnecessary weight. This is the list our yatra guides hand to every group before departure.",
    sections: [
      {
        heading: "Clothing: The Layering Principle",
        body: "The key to dressing for the Char Dham is layers, not bulk. You need three distinct layers: a moisture-wicking base (thermal inner-wear, not cotton — cotton stays wet and chills you), an insulating mid-layer (a fleece or down gilet that traps warmth), and a windproof and waterproof outer shell. This system lets you add or remove as conditions change. In May, a sunny trail at noon may be 22°C; the same spot at 5 a.m. may be 4°C. Pack: 3–4 sets of thermal inner-wear, 2 fleece or down mid-layers, 1 quality rain jacket that packs small, 2 pairs of trekking trousers (not jeans — they chafe and take forever to dry), and 3–4 T-shirts for the lower altitude sections.",
      },
      {
        heading: "Footwear: The Most Important Item",
        body: "Your footwear choice will define your trek. Waterproof ankle-height trekking boots with a firm grip sole are the minimum for Kedarnath and Yamunotri trails. They must be broken in before the yatra — new boots on a 16 km trek will produce blisters by kilometre 6. Carry a second pair of lightweight shoes or sandals for the evenings and for temple precincts where boots must be removed. Wool or synthetic trekking socks (not cotton) should be packed in multiples — wet socks on cold trails cause blisters and, at higher altitude, add to cold stress. Two pairs of waterproof gloves complete the extremity protection.",
      },
      {
        heading: "Medicines and First Aid",
        body: "Our guides carry group medical kits, but every pilgrim should have a personal kit with: paracetamol or ibuprofen for headaches and body pain; ORS (oral rehydration salts) sachets for dehydration; antacids and a basic stomach upset medicine (Himalayan food and water can sometimes upset a plains-accustomed digestive system); a pulse-oximeter to monitor blood oxygen levels at altitude; lip balm and sunscreen (SPF 50+ — UV exposure is intense above 3,000 m and the reflection off snow doubles the effect); blister plasters; and, if prescribed by your doctor, Diamox (acetazolamide) for altitude sickness prevention. If you are above 60 or have any heart or lung condition, discuss the yatra with your physician before departure.",
      },
      {
        heading: "Bags: The Right Luggage for Each Stage",
        body: "Use a hard-shell or large duffel for the vehicle sections — this stays in the car or at the guesthouse. For the trekking sections (Yamunotri and Kedarnath), carry only a 20–30 litre daypack with your water, snacks, medicines, documents, a warm layer, and your rain jacket. This keeps your hands free for the trail and your body from being top-heavy on steep terrain. A good daypack with a waist belt reduces shoulder strain significantly. Do not carry valuables in the daypack on the crowded trail — keep documents and cash in a zipped inner pocket or a flat travel wallet under your shirt.",
      },
      {
        heading: "What NOT to Pack",
        body: "The most common overpacking mistakes we see: large trolley suitcases (they cannot go on the trail and barely fit in mountain taxis); denim jeans (heavy, slow-drying, cold when wet); cotton thermals (useless when wet); an excessive number of footwear choices; full-size shampoo and toiletry bottles (decant into 50 ml travel bottles); and heavy books or laptops (mobile data and signal disappear above Sonprayag and Guptkashi anyway). The lighter your overall load, the more energy you conserve for the actual climb and the less back pain you experience in the vehicle on the long mountain roads.",
      },
      {
        heading: "Documents and Money",
        body: "Every pilgrim must carry: a government-issued photo ID (Aadhaar or passport — required for yatra registration and hotel check-in); the Yatra Registration slip (obtainable online or at Haridwar/Rishikesh); hotel booking confirmations; and the emergency contact number for your Yamuna Holidays coordinator. ATMs are available in Rishikesh, Haridwar, Uttarkashi, Rudraprayag, and Joshimath, but frequently run out of cash during peak season. Withdraw enough cash in Rishikesh to last the full yatra. UPI payments work at most dhabas on the trail, but do not rely on it exclusively above 2,500 m where signal drops.",
      },
    ],
    tips: [
      { icon: "🎒", title: "20–30L Daypack Only for Treks", detail: "Leave the big bag at the guesthouse. You only need essentials on the Kedarnath and Yamunotri trails." },
      { icon: "👟", title: "Break In Your Boots First", detail: "Wear your trekking boots on 3–4 long walks at home before the yatra. New boots cause blisters." },
      { icon: "🧴", title: "SPF 50+ Sunscreen", detail: "UV at 3,500 m is twice as intense as at sea level. Reapply every 2 hours, including lips." },
      { icon: "💊", title: "Carry ORS Sachets", detail: "Dehydration at altitude hits hard and fast. Mix ORS in your water bottle from day one." },
      { icon: "💵", title: "Withdraw Cash in Rishikesh", detail: "ATMs above Rishikesh often run dry during peak season. Carry sufficient cash from the start." },
      { icon: "🌧️", title: "Pack a Rain Cover", detail: "A pack-size rain jacket and a daypack rain cover are non-negotiable. Mountain showers arrive without warning." },
    ],
    tags: ["Packing", "Travel Tips", "Char Dham", "Trekking", "Preparation"],
    relatedSlugs: ["kedarnath-guide", "heli-char-dham"],
  },
  {
    slug: "yamunotri-guide",
    category: "Pilgrimage Guide",
    readTime: "5 min read",
    date: "July 2, 2025",
    author: "Vikram Negi",
    authorRole: "Senior Yatra Guide, Yamuna Holidays",
    title: "Yamunotri: The Hidden First Dham and Why It Deserves More Attention",
    subtitle: "The source of the Yamuna, the trek through cedar forest, and the boiling hot spring that cooks your prasad",
    excerpt:
      "Yamunotri is the least visited of the four dhams, yet arguably the most intimate. A cedar-forest trek, a boiling sulphur spring, and a black-marble goddess — here is everything you need to know.",
    coverImage: yamunotri,
    secondaryImage: gangotri,
    intro:
      "Of the four dhams, Yamunotri receives the fewest visitors — and that is precisely what makes it special. While Kedarnath draws crowds of tens of thousands on peak days, Yamunotri retains an atmosphere of genuine remoteness. The trail to the temple winds through dense cedar and pine forest above the rushing Yamuna, past viewpoints of the Bandarpunch and Kalanag peaks, and arrives at a temple that sits with quiet dignity at the edge of a hot spring that has been boiling for centuries. If you begin your Char Dham here, you begin it on the best possible terms.",
    sections: [
      {
        heading: "The Mythology: Daughter of the Sun",
        body: "Yamuna occupies a unique place in Hindu cosmology. She is the daughter of Surya (the Sun God) and Sanjna, the twin sister of Yama (the God of Death and Dharma), and the sister of Shani (Saturn). Bathing in the Yamuna is believed to grant freedom from untimely death — a boon directly linked to Yama, who would not take his own sister's devotees prematurely. The river is also associated with Lord Krishna, who played on her banks at Vrindavan and Mathura. At Yamunotri, you encounter the Yamuna before any of that mythology accumulated downstream — she is simply a cold, clear stream born from a glacier, and the contrast with her wide, grey waters at Delhi is startling.",
      },
      {
        heading: "The Trek: 6 km Through Living Forest",
        body: "The Yamunotri trek begins at Janki Chatti (2,650 m) and covers 6 km (one way) to the temple at 3,293 m. Unlike the bare, exposed climb to Kedarnath, the Yamunotri trail spends much of its length inside thick forest — towering cedars, rhododendrons (spectacular when in bloom in late April and May), and oak. The trail is paved and well-maintained, with chai stalls every kilometre. Ascent time for a fit walker is approximately 2.5–3.5 hours; descent 1.5–2.5 hours. The trail is steep in the final 2 km but never technically demanding. Ponies, palkis, and doli carriers are available at Janki Chatti for those who need them.",
      },
      {
        heading: "Surya Kund: The Boiling Hot Spring",
        body: "The most extraordinary element of the Yamunotri complex is not the temple itself but the Surya Kund — a hot sulphur spring that reaches approximately 88°C, close to the boiling point at this altitude. Pilgrims tie uncooked rice and potatoes in muslin cloth and dip them into the spring to cook as prasad (holy food) offered to the goddess. This ritual is unique among the four dhams and utterly fascinating to witness. The water is too hot and the river source too swift for bathing, so unlike at the other dhams, no snan (immersion) is expected here. Simply witnessing the spring and receiving the cooked prasad is the central ritual.",
      },
      {
        heading: "The Temple and the Deity",
        body: "The Yamunotri temple was originally built by Maharani Gularia of Jaipur in the 19th century and has been rebuilt twice following avalanche and earthquake damage. The presiding deity is a beautiful black marble idol of Goddess Yamuna, flanked by a golden image of Ganga. Smaller shrines within the complex honour Hanuman and Divya Shila, a reddish-brown rock pillar that must be circumambulated and worshipped before entering the main sanctum. The temple precincts are compact and intimate — nothing like the sprawling ghat complexes of Haridwar or the open high-altitude meadows of Kedarnath. You are simply in a small temple in a forest valley, with the sound of hot springs and cold river water surrounding you.",
      },
      {
        heading: "Getting There: Janki Chatti and Beyond",
        body: "The road journey to Janki Chatti from Rishikesh covers approximately 220 km via Dharasu and Barkot. The drive takes 7–9 hours. The road climbs through the Tons River valley — one of Uttarakhand's most scenic drives — through pine forests, past old Garhwali villages, and across a series of narrow bridges above fast-flowing rivers. Barkot, 46 km from Janki Chatti, is the recommended overnight halt before the trek, with adequate guesthouses and the first reliable ATM on this route. Beyond Barkot, the road narrows considerably and requires a confident driver.",
      },
      {
        heading: "The Yatra Season and Timing Tips",
        body: "Yamunotri opens on Akshaya Tritiya (the same day as the other dhams, late April or early May) and closes after Diwali, usually in late October or early November. The best months are May–June and September–October. The temple sees its lightest crowds in September, when the monsoon has just cleared and the trails are still green. Avoid arriving between 11 a.m. and 2 p.m. on peak days — this is when organised bus groups from Haridwar arrive simultaneously and queues lengthen considerably. Starting the trek by 6 a.m. means you reach the temple by 9 a.m. and are back at Janki Chatti well before the midday rush.",
      },
    ],
    tips: [
      { icon: "🍚", title: "Cook Prasad in Surya Kund", detail: "Bring raw rice in a small cloth bag. Dipping it in the 88°C spring to cook as prasad is one of the yatra's most unique rituals." },
      { icon: "🌲", title: "Trek in the Morning", detail: "The cedar forest is most beautiful in the early morning light. Start by 6 AM to beat the crowds." },
      { icon: "🏨", title: "Overnight in Barkot", detail: "Barkot is 46 km from Janki Chatti with better accommodation and the last reliable ATM before the trail." },
      { icon: "🌸", title: "Visit in April–May for Rhododendrons", detail: "The trail blooms with red and pink rhododendrons in late April and May — the most spectacular time to trek." },
      { icon: "📷", title: "Photograph the Kund", detail: "The steam rising from Surya Kund against the forest is one of the most photogenic sights of the entire yatra." },
      { icon: "👘", title: "Carry Temple Wrap", detail: "A dupatta or stole is required to cover the head inside the temple. Keep one in your daypack." },
    ],
    tags: ["Yamunotri", "Char Dham", "Pilgrimage", "Uttarakhand", "Goddess Yamuna"],
    relatedSlugs: ["kedarnath-guide", "sacred-rivers"],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getBlogBySlug(slug);
  if (!post) return [];
  return post.relatedSlugs
    .map((s) => getBlogBySlug(s))
    .filter((p): p is BlogPost => p !== undefined);
}

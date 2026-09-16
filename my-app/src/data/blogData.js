// Shared blog data — card metadata + full article content for all 6 posts

import imgCeramicCoating from '../assets/blog_ceramic_coating.jpg';
import imgPPF from '../assets/blog_ppf.jpg';
import imgInterior from '../assets/blog_interior_detailing.jpg';
import imgCarCare from '../assets/blog_car_care.jpg';
import imgWindowTinting from '../assets/blog_window_tinting.jpg';
import imgMaintenance from '../assets/blog_maintenance.jpg';

const blogData = [
  /* ─────────────────────────────────────────────────────────────────────── */
  /*  BLOG 1 — Ceramic Coating                                               */
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    id: 1,
    category: 'Ceramic Coating',
    readTime: '9 min read',
    date: 'Aug 28, 2026',
    title: 'Why Ceramic Coating Is the Best Long-Term Investment for Your Car',
    excerpt:
      'Ceramic coatings create a permanent, hydrophobic layer on your car\'s paint that repels water, UV rays, chemical contaminants, bird droppings, and fine scratches. Unlike traditional wax that wears off in weeks, a professional ceramic coating can last 3–7 years — making it one of the smartest long-term investments for any car owner. In this guide, we break down exactly how ceramic coating works, what to expect during the application process, how to choose the right grade for your vehicle, and how to care for your coating to maximise its lifespan.',
    image: imgCeramicCoating,
    tag: 'Protection',
    content: {
      intro:
        'Your car\'s paint is under constant attack — from the sun\'s UV rays, acid rain, bird droppings, industrial fallout, and everyday washing. Traditional paint protection like wax and sealants offer short-lived relief, but they simply can\'t match the durability and performance of a professional ceramic coating. If you\'re serious about preserving your vehicle\'s appearance and resale value, ceramic coating is the most significant upgrade you can make. In this comprehensive guide, we cover everything — from the science behind the coating to real-world care tips that every car owner should know.',
      sections: [
        {
          heading: 'What Exactly Is Ceramic Coating?',
          body: 'Ceramic coating (also called nano-ceramic coating) is a liquid polymer made from silicon dioxide (SiO₂) that chemically bonds to your car\'s factory paint when applied by a professional. Once cured, it forms a rigid, glass-like protective layer over the entire surface. Unlike wax or sealant, it does not sit on top of the paint — it becomes part of it. The science behind it is fascinating: at a nanoscopic level, the coating fills in the micro-pores and imperfections in the clear coat, creating a perfectly smooth, sealed surface that is fundamentally hostile to contamination.',
          bullets: [
            'Creates a semi-permanent, chemical bond with the clear coat',
            'Highly hydrophobic — water, mud, bird droppings, and grime bead and slide off',
            'Protects against UV oxidation, preventing paint from fading or yellowing',
            'Resists chemical etching from acidic bird droppings, acid rain, and tree sap',
            'Provides a deep, wet-look gloss that intensifies the colour of the paint',
            'Hardness rating of 9H on the pencil hardness scale — significantly harder than clear coat',
          ],
        },
        {
          heading: 'Ceramic Coating vs. Wax vs. Paint Sealant',
          body: 'Many car owners are familiar with traditional wax and synthetic paint sealants. While both have their place, neither comes close to the long-term performance of a professional ceramic coating. Here\'s how they compare in a real-world context:',
          bullets: [
            'Carnauba Wax — Natural, warm gloss. Lasts 4–8 weeks. Offers minimal chemical resistance. Must be reapplied constantly.',
            'Synthetic Sealant — Better durability than wax. Lasts 3–6 months. Moderate hydrophobicity. Still degrades with UV and washing.',
            'Consumer Ceramic Spray — Entry-level protection. Lasts 3–6 months. Easy to apply but minimal thickness and bonding depth.',
            'Professional Ceramic Coating — Maximum thickness, deepest bond, 2–7 year longevity. Requires professional application but delivers unmatched results.',
            'The cost-per-year analysis almost always favours professional ceramic coating when you factor in time, products, and repeat applications of inferior alternatives.',
          ],
        },
        {
          heading: 'How Long Does It Last?',
          body: 'One of the biggest advantages of ceramic coating over wax is longevity. A quality ceramic coating applied by a trained professional can last anywhere from 2 to 7 years depending on the grade selected, the quality of the preparation work done beforehand, and how well the vehicle is maintained afterwards. Entry-level consumer-grade coatings last 1–2 years, while professional-grade coatings (like those applied at ADS) can offer 5–7 years of protection. The longevity is also influenced by geography — cars in coastal areas or cities with high industrial pollution may see slightly shorter lifespans due to higher levels of airborne contamination. Regular maintenance washes and periodic ceramic booster applications can significantly extend the effective life of any coating.',
          bullets: null,
        },
        {
          heading: 'The Application Process — Stage by Stage',
          body: 'Proper ceramic coating is not a DIY weekend job — it requires precision, a controlled environment, trained hands, and professional-grade products. Skipping even one step in the preparation process will compromise the final result and dramatically reduce the coating\'s longevity. At ADS, our coating process follows a strict multi-stage workflow that typically takes 1–2 full days depending on the condition of the vehicle:',
          bullets: [
            'Stage 1 — Thorough decontamination wash: foam pre-wash, contact wash with pH-neutral shampoo, rinse',
            'Stage 2 — Iron fallout remover to dissolve embedded brake dust and metallic contamination',
            'Stage 3 — Clay bar or clay mitt treatment to remove bonded surface contamination',
            'Stage 4 — Paint depth measurement to assess paint thickness before any correction',
            'Stage 5 — Machine paint correction (1-stage or 2-stage polish) to eliminate swirl marks and scratches',
            'Stage 6 — IPA (isopropyl alcohol) wipe-down to remove all oils, polish residue, and surface contamination',
            'Stage 7 — Ceramic coating application panel by panel in a temperature-controlled, dust-free environment',
            'Stage 8 — Infrared curing lamps to accelerate and harden the curing process',
            'Stage 9 — Multi-point quality inspection under specialist lighting to confirm uniform, defect-free application',
          ],
        },
        {
          heading: 'Ceramic Coating Grades Available at ADS',
          body: 'Not all ceramic coatings are the same. At ADS, we offer multiple grades tailored to your needs and budget. Each tier uses progressively higher concentrations of active SiO₂, more coating layers, and longer warranties:',
          bullets: [
            'Essential Coat — Single-layer, entry-level professional coating. Ideal for daily drivers seeking better protection than wax. 2-year protection.',
            'Pro Shield — Dual-layer coating with enhanced chemical resistance and deeper gloss. Ideal for family cars and SUVs. 3-year protection.',
            'Elite Ceramic — Three-layer system with superior hardness and hydrophobicity. The most popular choice for enthusiasts. 5-year protection.',
            'Graphene Apex — Our flagship graphene-infused ceramic coating. Exceptional heat dissipation, lowest water spot tendency, industry-leading gloss. 7-year protection.',
          ],
        },
        {
          heading: 'What Ceramic Coating Cannot Do',
          body: 'Ceramic coating is exceptional, but it\'s important to set realistic expectations. Understanding its limitations helps you decide whether additional protection (like PPF) is needed alongside it:',
          bullets: [
            'It does NOT prevent stone chips or rock strikes — for that, Paint Protection Film (PPF) is needed on high-impact zones',
            'It does NOT eliminate the need for washing — it makes washing easier and less frequent, but contamination still builds up',
            'It does NOT self-heal from deep scratches or swirl marks applied during washing (unlike PPF)',
            'It does NOT make the car bulletproof against key scratches or severe abrasion — but it does raise the threshold significantly',
            'It will NOT cover up existing paint defects — these must be corrected before coating application',
          ],
        },
        {
          heading: 'Post-Coating Care Tips',
          body: 'To get the most out of your ceramic coating and maximise its lifespan, following the right care routine is essential. The habits you build in the weeks after application determine whether you get 2 years or 7 years of protection:',
          bullets: [
            'Avoid washing your car for at least 7 days after application (the coating is still curing)',
            'Use only pH-neutral car shampoos — never dish soap, alkaline degreasers, or acidic cleaners',
            'Wash every 1–2 weeks to prevent contamination build-up from bonding to the surface',
            'Always use a clean, plush microfiber wash mitt — never a sponge or old cloth',
            'Dry the car immediately after washing with a soft microfiber drying towel or a blower',
            'Avoid automatic car washes with abrasive brushes entirely',
            'Apply a ceramic booster spray every 3–4 months to refresh the hydrophobic layer and add slickness',
            'Address bird droppings and tree sap immediately — don\'t leave them sitting in the sun for more than a few minutes',
            'Have the car professionally decontaminated and inspected annually',
          ],
        },
        {
          heading: 'Is It Worth the Investment?',
          body: 'Let\'s look at the numbers. A professional ceramic coating typically costs between ₹15,000–₹60,000 depending on the grade and vehicle size. Over a 5-year period, a car owner without ceramic protection will spend thousands on wax, sealants, detailing products, and professional washes — plus the hidden cost of paint degradation that reduces resale value. A ceramic-coated car retains a noticeably better appearance and higher resale value. Most of our customers who have had their cars coated tell us they would never go back. The combination of effortless cleaning, lasting gloss, and peace of mind is simply unmatched.',
          bullets: null,
        },
      ],
      conclusion:
        'A professional ceramic coating is the single best thing you can do for your car\'s paint after purchase. It protects your investment, keeps your car cleaner for longer, and maintains that showroom-fresh look for years — all while saving you time and money on maintenance in the long run. If you\'re ready to experience the ADS difference, book a free consultation with our team today. We\'ll assess your paint condition, recommend the right grade, and give you a clear, transparent quote with no hidden charges.',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  /*  BLOG 2 — PPF vs. Ceramic Coating                                       */
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    id: 2,
    category: 'PPF',
    readTime: '8 min read',
    date: 'Aug 15, 2026',
    title: 'Paint Protection Film vs. Ceramic Coating: Which One Do You Need?',
    excerpt:
      'Both PPF and ceramic coatings protect your paint, but they work differently. We break down the pros, cons, and ideal use cases for each solution.',
    image: imgPPF,
    tag: 'Comparison',
    content: {
      intro:
        'When it comes to protecting your car\'s paint, two solutions dominate the premium market: Paint Protection Film (PPF) and Ceramic Coating. Both are excellent products, but they serve fundamentally different purposes and offer different types of protection. Choosing the wrong one — or missing the opportunity to combine both — can be a costly mistake. This in-depth guide breaks down everything you need to know about how each product works, where it excels, and how to make the smartest decision for your vehicle and driving habits.',
      sections: [
        {
          heading: 'What Is Paint Protection Film (PPF)?',
          body: 'PPF (also called clear bra or paint protection wrap) is a thick, transparent thermoplastic urethane (TPU) film that is physically cut and applied over your car\'s paint panels. Developed originally for the military to protect helicopter blades, modern automotive PPF has evolved into one of the most effective paint protection solutions available. It acts as a sacrificial barrier — absorbing stone chips, scratches, bug splatter, and minor abrasions before they can reach your paint. Top-grade PPF features self-healing technology — the urethane\'s elastic memory allows light surface scratches to flow out and disappear within minutes of heat exposure from the sun or warm water.',
          bullets: [
            'Physical protection against stone chips, rock strikes, and road debris impact',
            'Self-healing surface — light scratches and swirl marks disappear with heat',
            'Preserves original paint in showroom condition against physical damage',
            'Available in finishes: gloss (factory look), satin, matte, and colour-tinted variants',
            'Offers scratch, stain, and yellowing resistance over its full lifespan',
            'Typically backed by 5–10 year manufacturer warranties when professionally installed',
          ],
        },
        {
          heading: 'What Is Ceramic Coating?',
          body: 'Ceramic coating is a chemical liquid polymer — primarily composed of silicon dioxide (SiO₂) and sometimes titanium dioxide (TiO₂) — that chemically bonds to your paint at a molecular level when applied and cured. It creates a hard, hydrophobic glass-like layer over the surface. Unlike PPF, ceramic coating is invisible and paper-thin (measured in microns), yet it delivers exceptional chemical protection, UV resistance, and the ability to repel water, dirt, and grime with remarkable effectiveness. Its primary strength is not physical impact protection, but rather chemical and environmental defence combined with a superior aesthetic finish.',
          bullets: [
            'Superior UV protection — prevents paint oxidation and colour fading',
            'Chemical resistance against bird droppings, acid rain, industrial fallout, and insects',
            'Extreme hydrophobicity — water beads and rolls off, carrying dirt with it',
            'Deep, wet-look gloss that enhances the vehicle\'s colour and visual depth',
            'Hard 9H surface rating — more resistant to light scratching than bare clear coat',
            'Does NOT protect against stone chips, key scratches, or significant physical impact',
          ],
        },
        {
          heading: 'Head-to-Head Protection Comparison',
          body: 'Here\'s a detailed breakdown of how both solutions compare across every key protection category. Understanding this table will help you identify exactly what your vehicle needs most based on your driving environment:',
          bullets: [
            'Stone chip & rock strike protection → PPF ✅✅ | Ceramic ❌',
            'Self-healing from light scratches → PPF ✅✅ | Ceramic ❌',
            'UV / oxidation / paint fading protection → PPF ✅ | Ceramic ✅✅',
            'Chemical resistance (bird droppings, acid rain) → PPF ✅ | Ceramic ✅✅',
            'Hydrophobic self-cleaning effect → PPF ✅ | Ceramic ✅✅',
            'Gloss enhancement and visual depth → PPF ✅ (subtle) | Ceramic ✅✅ (dramatic)',
            'Longevity → PPF 5–10 years | Ceramic 2–7 years',
            'Maintenance difficulty → PPF low | Ceramic very low',
            'Cost (full body) → PPF significantly higher | Ceramic moderate',
            'Suitable as DIY → PPF No (professional only) | Ceramic No (professional recommended)',
          ],
        },
        {
          heading: 'Understanding the Cost Difference',
          body: 'One of the most common questions we receive is: "Why is PPF so much more expensive?" The answer lies in the material itself and the labour involved. PPF film is substantially more expensive to produce than ceramic coating liquid. It also requires significantly more labour — each panel must be precisely cut (using computer-aided cutting software), carefully pre-fit, and then applied wet to avoid bubbles and lifting edges. A full-body PPF installation can take 3–5 days for a complex vehicle. Ceramic coating, while also labour-intensive in preparation, is faster to apply. In India, PPF pricing typically ranges from ₹40,000 to ₹1,50,000+ for a full body depending on film grade, while ceramic coating ranges from ₹15,000 to ₹60,000.',
          bullets: null,
        },
        {
          heading: 'Which Should You Choose?',
          body: 'The right choice depends entirely on your driving profile, vehicle value, and primary concern. Use this decision guide:',
          bullets: [
            'You frequently drive on highways, expressways, or construction zones → Prioritise PPF on the front end',
            'You\'re buying a new or expensive vehicle you want to keep immaculate → Consider full-body PPF + ceramic on top',
            'You\'re a city driver with moderate road conditions → Full-body ceramic coating is excellent value',
            'You\'re concerned about bird droppings, acid rain, and UV damage → Ceramic coating is your primary solution',
            'You want the absolute best protection money can buy → PPF (full body or key zones) + ceramic coating on top',
            'Budget is your primary constraint → Zone-specific PPF (front bumper, bonnet, mirrors) + full-body ceramic',
          ],
        },
        {
          heading: 'Zone-Based PPF Strategy',
          body: 'Not everyone needs (or can afford) full-body PPF. A smart, budget-conscious approach is to apply PPF only to the highest-risk impact zones — the areas that suffer the most stone chip and debris damage in real-world driving. Combine this with a full-body ceramic coating for chemical and UV protection across the entire vehicle:',
          bullets: [
            'Front bumper — the single highest-impact zone on any vehicle',
            'Full bonnet (hood) — catches most of the stone chips thrown up from the road',
            'Front wing/fenders — take significant debris from the front wheels',
            'Wing mirrors (door mirrors) — extremely vulnerable to car park scratches and debris',
            'A-pillars and roof leading edge — constant highway debris impact zone',
            'Door edge guards — protect against dings in car parks',
            'Rear bumper — protects against scuff marks from loading and car park contact',
          ],
        },
        {
          heading: 'The Best of Both Worlds — PPF + Ceramic',
          body: 'For car enthusiasts and premium vehicle owners, combining PPF on high-impact zones with a full-body ceramic coating on top is the ultimate paint protection system. The PPF handles physical impact and provides its self-healing capability, while the ceramic coating applied over the PPF (and on unpainted areas) delivers hydrophobicity, chemical resistance, UV protection, and a stunning gloss. This combination is our most popular recommendation for customers with premium vehicles, and it represents the highest possible level of paint protection available today.',
          bullets: null,
        },
        {
          heading: 'How to Care for PPF',
          body: 'PPF is remarkably durable, but it still benefits from proper care to maintain its clarity and self-healing properties over the years:',
          bullets: [
            'Wash regularly with a pH-neutral car shampoo — never use alkaline or abrasive cleaners',
            'Avoid high-pressure washing directly at film edges — this can lift the edges over time',
            'Do not wax over PPF with carnauba wax — it can leave residue in textured areas; use a PPF-safe spray detailer instead',
            'If ceramic coated over the PPF, follow the ceramic coating maintenance routine',
            'For self-healing to work effectively on light scratches, park in direct sunlight or pour warm water over the affected area',
            'Have the film professionally inspected annually for edge lifting, yellowing, or contamination',
          ],
        },
      ],
      conclusion:
        'Whether you choose PPF, ceramic coating, or the gold-standard combination of both, investing in professional paint protection is one of the smartest decisions you can make for your vehicle. It preserves resale value, eliminates the anxiety of stone chips and bird droppings, and keeps your car looking its very best for years. Our experts at ADS will assess your vehicle, your driving habits, and your budget to recommend the perfect protection plan. Book a no-obligation consultation today.',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  /*  BLOG 3 — Interior Detailing                                            */
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    id: 3,
    category: 'Interior Detailing',
    readTime: '10 min read',
    date: 'Jul 30, 2026',
    title: 'The Ultimate Guide to Deep Interior Car Detailing at Home',
    excerpt:
      'A spotless cabin is not just about looks — it\'s about hygiene and comfort. Follow our step-by-step guide to achieve showroom-level interior cleanliness.',
    image: imgInterior,
    tag: 'DIY Tips',
    content: {
      intro:
        'Most car owners focus on keeping the outside of their car clean, but the interior is where you actually spend your time. Every drive accumulates dust, bacteria, allergens, food particles, skin oils, pet hair, and odours in the cabin — affecting air quality, comfort, and even your long-term health. Studies have shown that the average car interior harbours significantly more bacteria per square centimetre than a public toilet seat. A thorough interior detail doesn\'t just make your car look good; it makes it healthier, more pleasant, and more valuable. This complete guide walks you through every step of a professional-quality deep interior clean you can do at home.',
      sections: [
        {
          heading: 'What You\'ll Need Before You Start',
          body: 'Having the right tools and products assembled before you begin is the difference between a frustrating three-hour ordeal and an efficient, satisfying deep clean. Never substitute household cleaning products for automotive-specific ones — the wrong cleaner can permanently damage leather, plastics, or electronic screens. Here\'s the complete toolkit:',
          bullets: [
            'Handheld vacuum cleaner with crevice, brush, and wide-head attachments',
            'Compressed air canister or electric air blower for vents and tight gaps',
            'Multiple microfiber cloths — at minimum 6 to 8, colour-coded by area',
            'Detailing brushes in multiple sizes: soft boar-bristle for vents, medium for upholstery, stiff nylon for mats',
            'Interior all-purpose cleaner (APC), diluted to the recommended ratio',
            'Leather cleaner and pH-balanced leather conditioner (for leather surfaces)',
            'Fabric/upholstery cleaner or stain remover (for cloth seats and carpet)',
            'Ammonia-free glass cleaner (critical for tinted windows — ammonia degrades tint adhesive)',
            'Lint-free glass polishing cloth',
            'Enzymatic odour eliminator spray',
            'UV dashboard protectant or interior trim dressing (non-greasy, matte finish preferred)',
            'Wet-dry vacuum for extraction (optional but strongly recommended for deep stains)',
          ],
        },
        {
          heading: 'Step 1 — Empty the Cabin Completely',
          body: 'Before any cleaning begins, remove absolutely everything from the car: floor mats, boot liner, child seats, loose items in door pockets and the glove box, sunshades, and any accessories. This gives you unobstructed access to every surface and prevents you from having to move things around as you clean. Once empty, give the floor mats a thorough shake outside the car, and set them aside to be cleaned separately.',
          bullets: null,
        },
        {
          heading: 'Step 2 — Vacuum Everything Thoroughly',
          body: 'Vacuuming is the foundational step that makes every subsequent stage of cleaning easier and more effective. Work methodically from top to bottom and front to back so dislodged dust and debris fall onto already-vacuumed surfaces. Don\'t rush this step — it\'s the one most home detailers underestimate. A proper vacuum session on a heavily soiled interior can take 30–45 minutes alone.',
          bullets: [
            'Seats — vacuum all surfaces including the back of the seat, the sides, and under the headrests',
            'Under seats — use the crevice tool to reach beneath and behind each seat rail',
            'Centre console — remove any removable trays and vacuum inside the cubby',
            'Door pockets and map pockets — often full of dust, crumbs, and receipts',
            'Dashboard crevices — use a soft brush attachment to avoid scratching',
            'Carpet — use multiple passes in different directions to lift embedded debris',
            'Boot/boot liner — often the most neglected and most contaminated area',
          ],
        },
        {
          heading: 'Step 3 — Blow Out Vents, Buttons, and Seams',
          body: 'Air vents, button clusters, stitched seams on seats, and the gaps around trim panels are impossible to clean properly with a cloth or vacuum alone. This is where compressed air (or an electric blower) becomes essential. Blast air into every vent opening, around every button, along seat stitching, and into the gap between the dashboard and windscreen. Follow up immediately with the vacuum to capture the dislodged dust before it resettles. This one step has a dramatic impact on air quality inside the vehicle — especially for people who suffer from allergies.',
          bullets: null,
        },
        {
          heading: 'Step 4 — Clean All Hard Surfaces',
          body: 'Hard interior surfaces — the dashboard, door panels, centre console, A/B/C pillars, steering wheel, gear knob, and any trim pieces — accumulate a layer of dust, skin oils, and fingerprints that becomes increasingly difficult to remove over time. Spray your diluted APC onto a microfiber cloth (never spray directly onto electronics, screens, or steering wheels) and wipe each surface thoroughly. For heavily textured surfaces, use a soft detailing brush to work the cleaner into the grain before wiping clean.',
          bullets: [
            'Always work top to bottom — dashboard before console, console before door pockets',
            'Use separate cloths for the dashboard vs. lower surfaces — lower areas are grimier',
            'Use a cotton swab dipped in APC for button labels and tiny gaps between controls',
            'For piano-black gloss trims, use only a damp microfiber — never a brush (will scratch)',
            'Never use silicone-based dressings on the steering wheel or gear knob — they create a dangerously slippery surface',
            'Finish hard plastic surfaces with a UV protectant spray to prevent fading and cracking',
          ],
        },
        {
          heading: 'Step 5 — Detail the Infotainment Screen and Instrument Cluster',
          body: 'Modern cars have large, glossy touchscreens and digital instrument clusters that attract fingerprints and dust like magnets. These require special care because they are covered in oleophobic coatings (fingerprint-resistant treatments) that can be permanently damaged by harsh cleaners. Never use glass cleaner, alcohol-based solutions, or paper towels on these screens. Use a dedicated screen cleaning solution or a barely dampened microfiber cloth, and wipe gently in one direction without circular scrubbing. Finish with a dry, lint-free microfiber cloth.',
          bullets: null,
        },
        {
          heading: 'Step 6 — Deep Clean Seats',
          body: 'Seat cleaning is the most time-intensive part of an interior detail and requires different approaches depending on the material:',
          bullets: [
            'Leather seats: Apply leather cleaner with a soft bristle brush, agitate gently in circular motions, wipe off with a clean microfiber. Immediately apply a quality leather conditioner to re-moisturise the leather and prevent cracking. Buff with a dry cloth.',
            'Perforated leather: Use a soft brush to work the cleaner into the perforations, then vacuum out any residue with a fine-tip attachment before wiping.',
            'Cloth/fabric seats: Spray upholstery cleaner liberally, agitate with a medium brush in the direction of the fabric weave, then blot (never rub) with a clean cloth. Repeat for heavily stained areas. Extract moisture with a wet-dry vacuum for best results.',
            'Alcantara/suede: Use a specialist Alcantara cleaner only. Brush gently in the direction of the nap. Never saturate — use as little moisture as possible.',
            'Seat backs and sides: Often overlooked — give them the same attention as the seat surface itself.',
          ],
        },
        {
          heading: 'Step 7 — Treat and Clean the Carpet',
          body: 'Car carpets endure the most abuse of any interior surface — mud, drinks, food, pet hair, and constant foot traffic. For a proper deep clean, pre-spray the carpet with a diluted APC or dedicated carpet cleaner and allow it to dwell for 2–3 minutes before agitating with a stiff brush. Work in sections. Blot or extract the loosened soiling with a wet-dry vacuum. For stubborn stains, apply a dedicated stain remover, agitate gently, and allow to dwell longer before extraction. Treat the floor mats in the same way outside the car where they can be rinsed if necessary.',
          bullets: null,
        },
        {
          heading: 'Step 8 — Clean Interior Glass',
          body: 'Interior glass surfaces collect a persistent greasy film caused by outgassing from dashboard plastics, cigarette smoke, and skin oils transferred through touch and breath. This film causes glare and reduces visibility — particularly when driving into the sun or at night. Use an ammonia-free glass cleaner sprayed onto a microfiber cloth, and wipe in overlapping horizontal strokes. Flip the cloth and buff dry with vertical strokes. Always use ammonia-free formulas for tinted windows — ammonia attacks the adhesive layer of window tint, causing bubbling and peeling over time.',
          bullets: [
            'Clean the windscreen last — it has the largest surface area and causes the most product mist',
            'Use a long-reach tool or wrap your hand in a cloth for the lower part of the windscreen',
            'Use a second dry microfiber to buff out any streaks after the cleaner dries',
            'Check the glass in both natural light and at an angle to ensure no streaks remain',
          ],
        },
        {
          heading: 'Step 9 — Tackle Odours at the Source',
          body: 'Masking odours with air fresheners is a temporary fix — a truly clean car should have no unpleasant smell at all. After thoroughly cleaning all surfaces, most ordinary odours will be eliminated at the source. For persistent smells from smoke, pets, food spills, or mould, apply an enzymatic odour eliminator spray to carpet and fabric surfaces — these products contain bacteria-eating enzymes that break down the organic compounds responsible for odours at the molecular level. For extreme cases (heavy smoke smell, mould), a professional ozone treatment is the most effective solution and is available as a service at ADS.',
          bullets: null,
        },
      ],
      conclusion:
        'A thorough interior detail — done properly and patiently — transforms your driving experience in a way that is immediately and deeply satisfying. It\'s also one of the most impactful things you can do for resale value. Done right, a full deep interior detail takes 4–6 hours. If you\'d prefer to leave it to professionals who do it every day, our ADS interior detailing team uses professional-grade extractors, steam cleaners, and industry-specific products to restore your cabin to concours condition. Book your interior detail service today and treat yourself to a truly fresh start.',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  /*  BLOG 4 — Detailing Mistakes                                            */
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    id: 4,
    category: 'Car Care',
    readTime: '7 min read',
    date: 'Jul 12, 2026',
    title: '5 Common Detailing Mistakes That Are Damaging Your Car\'s Paint',
    excerpt:
      'Even well-intentioned car owners make critical mistakes when washing their vehicles. Discover the most common errors and how to avoid them permanently.',
    image: imgCarCare,
    tag: 'Tips & Tricks',
    content: {
      intro:
        'Most paint damage on cars isn\'t caused by accidents or road debris — it\'s caused by improper washing and detailing. The swirl marks, micro-scratches, and dull, hazy paint you see on almost every used car are almost always the result of avoidable mistakes made during routine cleaning over the years. The worst part? Many of these mistakes are committed by people who think they\'re doing the right thing. In this guide, we break down the five most common and most damaging detailing mistakes, explain the science behind why they cause harm, and give you the exact solutions to fix your habits going forward.',
      sections: [
        {
          heading: 'Mistake #1 — The Single-Bucket Wash',
          body: 'The classic single-bucket wash is one of the leading causes of paint swirl marks and micro-scratches on cars worldwide. Here\'s the problem: every time you drag your wash mitt across a panel, it picks up grit, dirt, and abrasive particles. When you dip that dirty mitt back into the same bucket of soapy water, you contaminate the entire bucket — and on the very next panel, you\'re essentially wiping those particles back across the paint like sandpaper. Multiply this by dozens of washes over the life of the car, and the cumulative damage is significant. The solution is the Two-Bucket Method, which every serious detailer uses:',
          bullets: [
            'Bucket 1 — Fill with clean water and your car shampoo (the "soap" bucket)',
            'Bucket 2 — Fill with clean rinse water only (the "rinse" bucket)',
            'After washing each panel, rinse your mitt thoroughly in Bucket 2 before reloading it in Bucket 1',
            'Install a grit guard at the bottom of each bucket — this traps dirt particles below the waterline so they can\'t be picked up again',
            'Never dip a mitt that has touched the lower panels or wheels directly into the soap bucket without rinsing first',
            'Wash the lower panels and wheel arches last, as they carry the most contamination',
          ],
        },
        {
          heading: 'Mistake #2 — Washing in Direct Sunlight or on Hot Paint',
          body: 'This mistake is enormously common, especially in India\'s climate. When you wash a car in direct sunlight, the water and shampoo solution evaporate far faster than you can rinse the panel. This leaves behind mineral-rich water spots that etch into the clear coat, soap residue that bakes into the surface, and streaks that are extremely difficult to remove. Over time, repeated washing in direct sunlight creates a permanent layer of etched water spot damage that requires machine polishing to correct. The rule is simple: always wash in shade, in a covered area, or during early morning or late evening when temperatures are lower and the paint surface is cool.',
          bullets: [
            'Touch the panel before washing — if it\'s warm to the touch, wait or move to shade',
            'Pre-rinse the car with cool water to bring down the panel temperature before applying shampoo',
            'Work one panel at a time to prevent shampoo from drying before you rinse',
            'On particularly hot days, keep a hose nearby to mist panels before they dry',
          ],
        },
        {
          heading: 'Mistake #3 — Using the Wrong Cleaning Products',
          body: 'This is perhaps the most damaging category of mistake because car owners often don\'t realise they\'re doing harm until significant damage has been done. Using household cleaning products on automotive paint is the automotive equivalent of using bleach on delicate fabric — the short-term cleaning action comes at the cost of long-term destruction.',
          bullets: [
            'Dish soap — Cuts through grease and degreases aggressively. Strips wax, sealant, and ceramic coatings completely. Leaves paint unprotected and causes it to oxidise faster.',
            'Multi-purpose household cleaners — Often highly alkaline or acidic. Can etch and discolour paint, plastics, and rubber trim if left in contact.',
            'Bathroom glass cleaners containing ammonia — Safe on household glass but degrades window tint adhesive, causing bubbling and peeling.',
            'Furniture polish or silicone sprays — Can contaminate paint surfaces and interfere with any future protective coating application.',
            'Always use a dedicated, pH-neutral automotive car shampoo for washing, and product-specific cleaners for leather, glass, and plastics.',
          ],
        },
        {
          heading: 'Mistake #4 — Using the Wrong Wash Mitt or Drying Towel',
          body: 'The choice of washing and drying media is critically important. Every time you drag something across your paint, the texture of that surface determines whether you\'re cleaning safely or scratching. Household sponges, bath towels, and cheap synthetic cloths are simply too rough and too flat — they trap dirt particles against the paint surface rather than lifting them away, causing direct abrasion with every wipe. The same applies to drying. Dragging a rough towel across wet paint while dirt particles are still present is one of the most effective ways to induce swirl marks.',
          bullets: [
            'Use only high-quality, deep-pile microfiber wash mitts — 1,200gsm or higher for washing',
            'A wash mitt\'s deep pile traps and lifts dirt away from the paint surface, preventing it from causing scratches',
            'Use a dedicated plush microfiber drying towel (or a water-activated chamois) for drying',
            'Use a separate, dedicated mitt for the lower panels and wheel arches — these carry grit that will contaminate a clean mitt',
            'Wash microfiber towels separately from regular laundry in a gentle cycle with no fabric softener (softener clogs the fibres)',
            'Replace any microfiber that is matted, pilling, or feels rough — worn microfiber is more abrasive than new',
            'Never use a microfiber cloth that has been dropped on the ground without washing it first',
          ],
        },
        {
          heading: 'Mistake #5 — Skipping the Pre-Rinse and Pre-Wash',
          body: 'Skipping a thorough pre-rinse before applying shampoo is one of the single most damaging shortcuts a car owner can take. When you apply a wash mitt to a car that has only been lightly rinsed (or not rinsed at all), the loose surface dust and grit act like sandpaper under the mitt. A proper pre-rinse sequence should remove as much loose contamination as possible before you touch the paint with anything. For best results, use a pre-wash foam (foam cannon) applied to the entire car and left to dwell for 3–5 minutes before rinsing. The foam chemically loosens and suspends grit so it can be rinsed away safely.',
          bullets: [
            'Always pre-rinse the entire car from top to bottom with a strong stream of water before touching it',
            'Use a pre-wash foam or snow foam applied with a foam cannon for maximum contamination removal before contact washing',
            'Pay special attention to the lower panels, wheel arches, and wheels — these carry the most road grit',
            'Allow the pre-wash foam to dwell for the recommended time before rinsing — don\'t let it dry on the paint',
            'Only begin the contact wash phase after the pre-rinse is complete and most loose contamination has been removed',
          ],
        },
        {
          heading: 'Bonus Mistake — Never Decontaminating the Paint',
          body: 'Beyond the five main mistakes, one of the most overlooked aspects of paint care is chemical and physical decontamination. Even after a perfect wash, microscopic particles of iron (from brake dust), tar, and industrial fallout remain bonded to the paint surface. Over time, these particles cause rust blooming (tiny rust dots visible in bright light), paint etching, and a rough, gritty texture. A full decontamination routine — using an iron fallout remover, followed by a tar remover, followed by clay bar or clay mitt treatment — should be performed every 3–6 months depending on driving conditions. This is a standard part of every professional detail at ADS.',
          bullets: null,
        },
      ],
      conclusion:
        'Paint correction to remove swirl marks, micro-scratches, and etching caused by years of improper washing is one of the most frequently requested services at ADS — and all of it is completely avoidable with the right products and technique. The good news: once you\'ve corrected these habits, maintenance is simple and your paint stays in excellent condition indefinitely. If your car\'s paint is already showing the effects of years of improper washing, our paint correction service can restore it to a flawless, swirl-free finish — ready to be protected with a ceramic coating or PPF for the long term.',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  /*  BLOG 5 — Window Tinting                                                */
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    id: 5,
    category: 'Window Tinting',
    readTime: '8 min read',
    date: 'Jun 22, 2026',
    title: 'Everything You Need to Know About Car Window Tinting in India',
    excerpt:
      'From legal regulations to heat rejection performance — window tinting is more than just an aesthetic upgrade. We cover every angle in this complete guide.',
    image: imgWindowTinting,
    tag: 'Guide',
    content: {
      intro:
        'Window tinting is one of the most popular and practical upgrades for cars in India — and for good reason. With outdoor temperatures regularly reaching 40–48°C in summer, cabin temperatures inside an untinted, parked car can soar to 70–80°C. The right window tint dramatically reduces this heat load, protects your health, and makes every drive significantly more comfortable. But beyond the thermal benefits, quality window tinting also provides UV protection, glare reduction, privacy, safety, and interior preservation. This complete guide covers everything you need to know — from Indian regulations to film technology — before you book your appointment.',
      sections: [
        {
          heading: 'The Real Benefits of Window Tinting',
          body: 'Many people consider window tinting primarily for aesthetics or privacy. But the performance benefits of a quality tint film — particularly a ceramic or graphene film — are far more impactful than most people realise. Here\'s what a quality tint actually does for you:',
          bullets: [
            'Solar heat rejection — premium ceramic films can block 60–70% of total solar energy, reducing cabin temperature by up to 15–20°C',
            'UV protection — blocks up to 99% of UVA and UVB rays, significantly reducing your and your passengers\' skin cancer risk on long drives',
            'Glare reduction — dramatically reduces eyestrain from direct sunlight and headlight glare at night, improving driving safety',
            'Privacy and security — makes it harder for opportunistic thieves to see valuables inside the car',
            'Safety in accidents — in a collision, the film holds shattered glass together as a unit, reducing the risk of glass-related injuries',
            'Interior preservation — prevents UV-induced fading, cracking, and discolouration of leather, fabric, and plastic surfaces',
            'Reduced air-conditioning load — less solar heat entering the cabin means less work for the AC, improving fuel efficiency',
          ],
        },
        {
          heading: 'The Legal Framework in India',
          body: 'This is the most important section to understand before proceeding with any tinting. The Supreme Court of India issued specific directives on permissible window tint levels, which are enforced by traffic police across the country. The regulation is based on Visual Light Transmission (VLT) — the percentage of visible light that passes through the glass. A higher VLT percentage means a lighter tint and more light passing through:',
          bullets: [
            'Front windscreen: Minimum 70% VLT (effectively no visible tint — only a very light UV-blocking film)',
            'Front side windows (driver\'s and front passenger\'s): Minimum 70% VLT',
            'Rear windscreen: Minimum 50% VLT',
            'Rear side windows (behind the B-pillar): Minimum 50% VLT',
            'Reflective and metalized mirror films: PROHIBITED entirely across all windows',
            'Penalty for violation: Traffic challan, mandatory film removal, possible vehicle detention',
            'Factory-installed privacy glass on factory rear windows is generally considered compliant',
          ],
        },
        {
          heading: 'Understanding VLT — What It Means in Practice',
          body: 'VLT percentages can be confusing in practice. Here\'s a practical guide to what different VLT levels look like from the outside and inside, and what they mean for your driving experience:',
          bullets: [
            '70% VLT (legal front windows) — Very light tint, barely noticeable. Blocks UV and some heat but minimal privacy and heat rejection.',
            '50% VLT (legal rear windows) — Noticeably darker. Good privacy, significant glare reduction, moderate heat rejection.',
            '35% VLT — Medium dark. Popular for rear windows (note: only legal on rear on some interpretations). Excellent balance of aesthetics and performance.',
            '20% VLT — Dark. High privacy, strong heat and glare rejection. Only legal on rear windows when combined with factory glass that already has some VLT reduction.',
            'Note: VLT regulations measure the COMBINED VLT of the window film AND the factory glass together, not just the film alone.',
          ],
        },
        {
          heading: 'Types of Window Tint Films Available',
          body: 'The market for window tint films spans a wide quality range — from cheap dyed films sold at roadside shops to premium graphene films used in the luxury segment. Understanding the difference between these technologies will help you make an informed decision:',
          bullets: [
            'Dyed Film — Entry-level. Made with a layer of dye between adhesive layers. Low cost, basic privacy, minimal heat rejection (blocks primarily visible light, not infrared). Fades to purple within 2–3 years in Indian sunlight. Generates interference on GPS and mobile signals with metallic variants.',
            'Carbon Film — No metal content. Better UV and heat rejection than dyed films. Stable colour (does not fade or purple). No signal interference. Mid-range price. Good lifespan of 5–7 years.',
            'Ceramic Film — Premium technology. Uses non-conductive nano-ceramic particles to block infrared radiation (the primary source of heat). Blocks 60–70%+ of total solar heat with high VLT. Crystal clear visibility. No signal interference. 10+ year lifespan. The best value in the premium segment.',
            'Graphene Film — Cutting edge. Graphene is one of the strongest and most thermally conductive materials known. Graphene tint films offer the highest heat rejection, lowest water spot tendency, and superior durability. Premium price but the best all-round performer currently available.',
          ],
        },
        {
          heading: 'Why Ceramic Film Is Worth the Premium',
          body: 'Many customers initially hesitate at the price difference between carbon and ceramic films. Here\'s why the premium for ceramic technology is justified:',
          bullets: [
            'Ceramic films block infrared radiation — the spectrum of sunlight responsible for 50–60% of the heat you feel in your car. Cheaper dyed films primarily block visible light but transmit infrared freely, meaning the cabin still heats up significantly even with a dark-looking film.',
            'Higher VLT at the same heat rejection level — you can have a 70% VLT (legally compliant) ceramic film that blocks more heat than a 20% VLT dyed film. This is the key advantage for front window compliance.',
            'Superior longevity — ceramic films maintain their performance and appearance for 10+ years versus 2–3 years for dyed films.',
            'Zero signal interference — ceramic is non-conductive and non-metallic, so it has absolutely no effect on GPS, mobile data, Bluetooth, or tyre pressure sensor signals.',
          ],
        },
        {
          heading: 'The Installation Process at ADS',
          body: 'The quality of the installation is just as important as the quality of the film. A premium film installed poorly will bubble, lift at the edges, and develop contamination within months. At ADS, every window tint installation follows a rigorous process:',
          bullets: [
            'Step 1 — Thorough cleaning of all glass surfaces with an automotive glass decontaminator',
            'Step 2 — Computer-aided pattern cutting to produce precise, panel-matched film pieces for your specific vehicle model',
            'Step 3 — Test-fit of each piece before final application to confirm perfect coverage and edge alignment',
            'Step 4 — Application in a clean, temperature-controlled, dust-free environment using a slip solution',
            'Step 5 — Careful squeegee work to eliminate all moisture, bubbles, and contaminants beneath the film',
            'Step 6 — Edge sealing and final inspection under specialist lighting',
            'Curing period: 3–7 days depending on temperature and film grade — avoid rolling windows down during this period',
          ],
        },
        {
          heading: 'Caring for Your Tinted Windows',
          body: 'Window tint film is durable but requires a few simple precautions to maximise its lifespan:',
          bullets: [
            'Do not roll windows down for 3–7 days after installation (allow adhesive to fully cure)',
            'Clean interior glass with an ammonia-free glass cleaner — never use ammonia-based products on tinted glass',
            'Use soft microfiber cloths for cleaning — never abrasive cloths, paper towels, or scrubbing pads',
            'Do not use sharp objects or nails near the window edges — the film edge is the most vulnerable point',
            'If a small bubble appears during the first week, it is likely trapped moisture still curing — it will usually disappear on its own',
            'If a bubble persists beyond 2 weeks, contact the installer — a quality film should be bubble-free after full curing',
          ],
        },
      ],
      conclusion:
        'Window tinting is one of the best value-for-money upgrades available for Indian car owners — dramatically reducing heat, UV exposure, and glare while improving privacy and safety, all at a one-time cost. The key is choosing the right film technology and ensuring it\'s installed professionally within legal VLT limits. At ADS, we use only certified premium ceramic and graphene films, installed by trained technicians, with a VLT compliance certificate provided with every installation. Book your window tinting appointment today and experience the difference a quality tint makes from the very first drive.',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  /*  BLOG 6 — Post-Detail Maintenance                                       */
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    id: 6,
    category: 'Maintenance',
    readTime: '9 min read',
    date: 'Jun 05, 2026',
    title: 'How to Maintain Your Car After a Professional Detail Job',
    excerpt:
      'Getting a professional detail is just the beginning. Learn the daily habits, products, and schedules that will keep your vehicle looking brand new for longer.',
    image: imgMaintenance,
    tag: 'Maintenance',
    content: {
      intro:
        'You\'ve just picked up your car from a professional detail — the paint is gleaming like a mirror, the interior is spotless and fresh, the wheels are immaculate, and every surface feels pristine. It\'s an incredible feeling. Now what? The hard reality is that this condition will begin to deteriorate the moment you drive out of the studio — but how fast it deteriorates is entirely up to you. The habits you build and the products you use in the days, weeks, and months after a professional detail determine whether you maintain that showroom finish for years or undo all that work within a few months. This comprehensive guide gives you everything you need to protect your investment and keep your car looking extraordinary for as long as possible.',
      sections: [
        {
          heading: 'The Critical First 7 Days',
          body: 'If your car received a ceramic coating as part of your detail, the first seven days are the most important of the coating\'s entire lifespan. During this period, the ceramic coating is completing its chemical cure and is significantly more vulnerable to water spotting, contamination bonding, and mechanical disturbance. Treat the car with extra care during this window:',
          bullets: [
            'Do NOT wash the car for at least 7 full days (longer in humid conditions or if advised by your detailer)',
            'Keep the car in a garage, covered parking, or under a car cover whenever possible',
            'If you must drive in rain, allow the car to air dry naturally after — do not towel dry during the first week',
            'If a bird dropping lands on the car, gently blot it with a dampened microfiber cloth — do not rub',
            'Do not apply any additional products to coated surfaces during the curing period',
            'Avoid driving on unsealed roads or behind construction vehicles that could throw tar or debris onto a freshly detailed car',
          ],
        },
        {
          heading: 'Building the Right Washing Routine',
          body: 'After the curing period, establish a regular washing routine. How you wash your car is the single greatest factor determining how long your detail work lasts. Even one improper wash can introduce swirl marks and contamination that undoes weeks of protective work. The goal is to remove contaminants regularly before they have time to bond to the surface or chemically etch into the coating. A contaminated car left unwashed is actively damaging its own protective coating.',
          bullets: [
            'Frequency: Wash every 1–2 weeks. More frequent in coastal areas (salt air), dusty environments, or monsoon season.',
            'Pre-rinse: Always start with a thorough pressure rinse from top to bottom to blast off loose contamination before touching the paint.',
            'Pre-wash foam: Apply a snow foam via foam cannon and allow it to dwell for 3–5 minutes before rinsing. This chemically lifts the bulk of grime.',
            'Contact wash: Use the two-bucket method with a quality pH-neutral car shampoo and a clean, deep-pile microfiber wash mitt.',
            'Wheels last: Wash wheels separately with a dedicated wheel cleaner and a wheel mitt/brush — never use the body mitt on wheels.',
            'Drying: Dry immediately using a plush microfiber drying towel or a leaf blower — standing water causes mineral spotting.',
            'Never use drive-through automatic car washes with rotating brushes — they are swirl mark machines.',
          ],
        },
        {
          heading: 'The Role of a Quick Detailer',
          body: 'A quick detailer (also called a spray detail spray) is a lightweight product that provides a thin layer of lubrication and protection, and leaves a glossy, streak-free finish. It\'s used after washing to boost the gloss and add a sacrificial layer between the coating and the environment. It\'s also invaluable between washes for removing light dust, fingerprints, and bird droppings without a full wash cycle. Apply with a clean microfiber, wipe, then buff with a dry microfiber. Always ensure the panel is dust-free before applying — wiping dust across a panel with a quick detailer will cause fine scratches.',
          bullets: null,
        },
        {
          heading: 'Monthly Maintenance Products',
          body: 'In addition to regular washing, a set of monthly maintenance products will keep your protection layers performing at their peak. Think of these as the "vitamins" of your car\'s paint protection regimen:',
          bullets: [
            'Ceramic Boost Spray — Applied every 2–3 months after washing, this tops up the hydrophobic properties of your ceramic coating and adds a fresh layer of protection. It restores the "water beading" effect if it has started to diminish.',
            'Iron Fallout Remover — Used every 2–3 months. A spray-on chemical decontaminant that dissolves iron particles (primarily from brake dust) that embed in the paint and coating, turning purple as it reacts. These iron particles, if left untreated, cause surface rust blooming and coating degradation.',
            'Tar and Adhesive Remover — Used quarterly. Road tar is one of the most persistent contaminants on lower panels and wheel arches. A dedicated tar remover dissolves it cleanly without damaging the coating.',
            'Tyre and Trim Dressing — Applied after washing to keep rubber tyres from browning and cracking and to maintain a dark, clean appearance. Use a water-based, non-silicone dressing on plastic trims to avoid greasiness and sling-off during driving.',
          ],
        },
        {
          heading: 'Exterior Protection Beyond Paint',
          body: 'A complete maintenance routine extends beyond the painted surfaces. Wheels, tyres, glass, and rubber trims all benefit from dedicated care:',
          bullets: [
            'Wheels: Clean weekly with a pH-neutral wheel cleaner. Use an iron fallout remover monthly to prevent brake dust staining. Consider a wheel coating (ceramic coating for wheels) to make cleaning dramatically easier and protect the finish.',
            'Glass: Clean with an ammonia-free glass cleaner every 2 weeks. Apply a glass water-repellent (hydrophobic glass coating) to the windscreen every 3–6 months — this causes water to bead and clear at speed above 60 km/h, dramatically improving wet-weather visibility.',
            'Rubber seals and trims: Apply a rubber conditioner every 2–3 months to prevent seals from drying out, cracking, and leaking.',
            'Convertible soft tops: Use a dedicated fabric or vinyl cleaner and protectant to prevent fading, mildew, and water ingress.',
          ],
        },
        {
          heading: 'Interior Maintenance to Match',
          body: 'A beautifully detailed exterior paired with a neglected interior is a missed opportunity. Build these interior habits into your monthly routine:',
          bullets: [
            'Vacuum carpets, seats, and boot every 2–4 weeks — more often if you carry pets or children',
            'Wipe down all hard surfaces (dashboard, console, door panels) with a damp microfiber weekly',
            'Condition leather seats every 3 months with a pH-balanced leather conditioner to prevent drying, cracking, and colour fading',
            'Clean interior glass monthly with an ammonia-free glass cleaner for maximum clarity and visibility',
            'Apply a UV dashboard protectant monthly to prevent the dash from cracking and discolouring from sun exposure',
            'Address spills immediately — blot (never rub) with a clean cloth and treat with an appropriate stain remover before the spill sets',
            'Keep a small pack of detailing wipes in the glovebox for quick clean-ups on the go',
          ],
        },
        {
          heading: 'Protecting the Car When Stored or Parked',
          body: 'How and where you park your car has a surprisingly large impact on its long-term condition. Small choices made consistently add up to a major difference in paint and interior preservation over years:',
          bullets: [
            'Park in a garage whenever possible — UV exposure is the single largest cause of paint degradation and interior fading',
            'If outdoor parking is unavoidable, use a breathable, dust-proof car cover — this shields against UV, bird droppings, tree sap, and morning dew',
            'Avoid parking under trees — bird droppings and tree sap are chemically aggressive and can etch through a ceramic coating if left for extended periods',
            'Avoid parking adjacent to construction sites — dust, cement particles, and industrial fallout settle on paint and are highly abrasive',
            'If the car will be stored for an extended period (weeks or more), apply a ceramic booster or sealant before storage and fit a quality car cover',
          ],
        },
        {
          heading: 'Your Annual Professional Detail Schedule',
          body: 'Even with a perfect home maintenance routine, an annual (or bi-annual) professional detail is recommended to address what home washing simply cannot handle. Professional detailers have access to stronger decontamination chemicals, machine polishers, steam cleaners, and coating-grade products that deliver results impossible to achieve at home:',
          bullets: [
            'Every 6 months — Professional maintenance wash, full decontamination (iron + clay), ceramic coating inspection and boost application',
            'Every 12 months — Full exterior detail, paint depth measurements, swirl mark assessment, minor paint touch-up if needed, full interior detail',
            'Every 2–3 years — Full machine paint correction to remove accumulated micro-scratches from washing, followed by fresh ceramic coating application',
            'As needed — Touch-up for stone chips, bird drop etching, or accident damage before they worsen',
          ],
        },
      ],
      conclusion:
        'Maintaining a freshly detailed car is far easier — and far more cost-effective — than restoring a neglected one. The secret is consistency: washing regularly with the right products and technique, applying maintenance products on schedule, and addressing issues the moment they appear rather than allowing them to worsen. Every small, regular effort compounds over time into a car that looks as impressive at five years as it did the day it came out of the studio. Our team at ADS is always available to advise you on the best products, schedule, and approach for your specific vehicle, location, and protection system. Don\'t hesitate to get in touch — we\'d love to help you keep your car at its best.',
    },
  },
];

export default blogData;

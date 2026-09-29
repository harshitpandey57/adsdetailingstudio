import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { About, WhyUs } from "@/components/site/Sections";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { ShieldCheck, Heart, Award, Map } from "lucide-react";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Yamuna Holidays - Char Dham Yatra Specialists" },
      {
        name: "description",
        content:
          "Learn about Yamuna Holidays, a government-registered Char Dham Yatra operator with 15+ years of experience helping pilgrims reach Kedarnath, Badrinath, Yamunotri, and Gangotri.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={ctaImg}
            alt="Snow covered Himalayan range at dusk"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/60 to-forest-deep/90 z-0" />
          <div className="relative z-10 text-center max-w-4xl px-5 mt-16">
            <Reveal>
              <p className="text-amber-300 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Our Sacred Mission
              </p>
              <h1 className="text-4xl sm:text-6xl text-white font-display mt-4 leading-tight">
                About Yamuna Holidays
              </h1>
              <p className="text-white/90 text-base sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                Guiding pilgrims safely and comfortably through the high Himalayan sanctuaries for over fifteen seasons.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Existing About Section */}
        <About />

        {/* Founding Story & Philosophy */}
        <section className="bg-cream py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <Reveal>
                <span className="text-amber-600 font-semibold uppercase tracking-[0.25em] text-xs">
                  How We Began
                </span>
                <h2 className="text-3xl sm:text-5xl font-display text-foreground mt-4 leading-tight">
                  A journey born out of devotion and care
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Yamuna Holidays was founded in 2011 in Rishikesh by a family of pilgrims who realized how challenging the journey was for elders. The high-altitude terrain, unpredictability of mountain roads, and lack of hygienic stays often overshadowed the spiritual bliss of the yatra.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We set out to change that by establishing a network of hand-picked stays, reliable local transport, and trained guides from the mountains who treat every pilgrim like family. Today, we have guided over 10,000 pilgrims from all across India and the world.
                </p>
              </Reveal>

              <div className="grid gap-6 sm:grid-cols-2">
                <Reveal delay={0.05}>
                  <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/40 h-full">
                    <ShieldCheck className="h-8 w-8 text-gold mb-4" />
                    <h3 className="font-display text-xl text-foreground">Safety Certified</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      All vehicles carry oxygen cylinders, first-aid boxes, and emergency medical kits.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/40 h-full">
                    <Heart className="h-8 w-8 text-gold mb-4" />
                    <h3 className="font-display text-xl text-foreground">Sattvic Dining</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Carefully curated, 100% vegetarian meals cooked under clean and hygienic conditions.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/40 h-full">
                    <Map className="h-8 w-8 text-gold mb-4" />
                    <h3 className="font-display text-xl text-foreground">Local Expertise</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Local Garhwali drivers and coordinators who understand mountain passes and weather patterns.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/40 h-full">
                    <Award className="h-8 w-8 text-gold mb-4" />
                    <h3 className="font-display text-xl text-foreground">Govt. Registered</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Recognized and licensed operator under Uttarakhand Tourism Development Board.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Why Us Section */}
        <WhyUs />

        {/* Licensing & Safety Section */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <SectionHeading
                eyebrow="Credentials"
                title="Registered & Recognized Travel Partner"
                intro="We maintain complete compliance with local tourism and transport authorities to ensure your journey is safe and legally protected."
              />
              <div className="mt-12 inline-grid grid-cols-1 sm:grid-cols-2 gap-8 text-left bg-cream p-8 sm:p-12 rounded-[2rem] shadow-soft border border-border w-full">
                <div>
                  <h4 className="text-lg font-bold text-forest-deep uppercase tracking-wider">
                    Registration & License
                  </h4>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong>UTDB Reg No:</strong> UTDB/REG/2011/0458
                    </li>
                    <li>
                      <strong>GSTIN ID:</strong> 05AAHFY1295D1ZX
                    </li>
                    <li>
                      <strong>Office Address:</strong> Rishikesh Main Office, Near Haridwar Bypass
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-forest-deep uppercase tracking-wider">
                    Our Commitments
                  </h4>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>✓ 100% compliance with Uttarakhand yatra guidelines</li>
                    <li>✓ Prior registration assistance for all pilgrims</li>
                    <li>✓ Eco-friendly disposal policies along high-altitude routes</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

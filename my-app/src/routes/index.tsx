import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About, Destinations, Packages, WhyUs, Process, TransportServices, ExploreUttarakhand } from "@/components/site/Sections";
import {
  Gallery,
  BlogCards,
  Testimonials,
  Faqs,
  BookingCta,
  Contact,
  Footer,
} from "@/components/site/Closing";

const description =
  "Char Dham Yatra packages by Yamuna Holidays — Yamunotri, Gangotri, Kedarnath and Badrinath with comfortable hotels, expert guides, helicopter assistance and 24×7 support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yamuna Holidays | Premium Char Dham Yatra Packages" },
      { name: "description", content: description },
      { property: "og:title", content: "Yamuna Holidays | Char Dham Yatra Packages" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <ExploreUttarakhand />
        <Packages />
        <TransportServices />
        <WhyUs />
        <Process />
        <Gallery />
        <BlogCards />
        <Testimonials />
        <Faqs />
        <BookingCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

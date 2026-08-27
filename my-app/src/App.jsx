import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import AboutWhyChooseUs from './components/AboutWhyChooseUs';
import ContactHero from './components/ContactHero';
import ContactIntro from './components/ContactIntro';
import ContactFormAndDetails from './components/ContactFormAndDetails';
import Services from './components/Services';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import StatsBanner from './components/StatsBanner';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

export default function App() {
  const [view, setView] = useState('home'); // 'home', 'about', 'contact', or 'services'
  const [selectedService, setSelectedService] = useState('');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="page-wrapper">
      <Navbar currentView={view} setView={setView} />

      {view === 'home' ? (
        <>
          <Hero setView={setView} />
          <AboutUs />
          <WhyChooseUs setView={setView} />
          <ServicesPreview setView={setView} />
          <Gallery />
          <Testimonials />
          <Contact selectedService={selectedService} />
        </>
      ) : view === 'about' ? (
        <>
          <AboutHero setView={setView} />
          <AboutStory />
          <AboutWhyChooseUs setView={setView} />
          <StatsBanner />
          <FAQ />
          <CTA setView={setView} />
        </>
      ) : view === 'contact' ? (
        <>
          <ContactHero />
          <ContactIntro />
          <ContactFormAndDetails selectedService={selectedService} />
        </>
      ) : view === 'privacy' ? (
        <PrivacyPolicy />
      ) : view === 'terms' ? (
        <TermsAndConditions />
      ) : (
        <Services setView={setView} setSelectedService={setSelectedService} />
      )}

      <FloatingButtons />
      <Footer setView={setView} />
    </div>
  );
}
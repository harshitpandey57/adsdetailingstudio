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
import BlogCards from './components/BlogCards';
import BlogPost from './components/BlogPost';
import AllBlogs from './components/AllBlogs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

export default function App() {
  const [view, setView] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('blog/')) return 'blog';
    return hash || 'home';
  });
  const [selectedService, setSelectedService] = useState('');
  const [activeBlog, setActiveBlog] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('blog/')) return parseInt(hash.split('/')[1], 10);
    return null;
  });

  // Sync state to URL hash
  useEffect(() => {
    if (view === 'blog' && activeBlog) {
      window.history.replaceState(null, '', `#blog/${activeBlog}`);
    } else if (view === 'home') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else {
      window.history.replaceState(null, '', `#${view}`);
    }
  }, [view, activeBlog]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('blog/')) {
        setView('blog');
        setActiveBlog(parseInt(hash.split('/')[1], 10));
      } else {
        setView(hash || 'home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
          <BlogCards setView={setView} setActiveBlog={setActiveBlog} />
          <Testimonials />
          <FAQ />
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
      ) : view === 'blog' ? (
        <BlogPost blogId={activeBlog} setView={setView} setActiveBlog={setActiveBlog} />
      ) : view === 'all-blogs' ? (
        <AllBlogs setView={setView} setActiveBlog={setActiveBlog} />
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
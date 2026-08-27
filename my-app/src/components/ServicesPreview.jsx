import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesPreview({ setView }) {
  const handleExploreClick = (e) => {
    e.preventDefault();
    setView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="services-hero-banner py-24 sm:py-32 text-left" id="services-preview">
      <div className="container-layout z-10">
        <div className="max-w-2xl">
          <span className="text-[var(--color-brand-red)] font-extrabold text-xs tracking-widest uppercase block mb-3 font-outfit">
            OUR SERVICES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-outfit leading-tight">
            Professional Care For <br />Every Vehicle
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-medium">
            Premium detailing and protection solutions designed to restore, protect, and maintain your vehicle.
          </p>
          <button 
            onClick={handleExploreClick}
            className="banner-cta-button"
          >
            Explore Services & Packages 
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

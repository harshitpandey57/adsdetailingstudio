import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactHero() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-dark-bg py-24 md:py-36 lg:py-44 overflow-hidden flex items-center text-left">
      <div className="container-layout">
        <div className="max-w-2xl space-y-6">
          
          {/* Label: BOOK APPOINTMENT (red) */}
          <span className="text-[var(--color-brand-red)] font-extrabold text-xs uppercase tracking-widest block font-outfit">
            BOOK APPOINTMENT
          </span>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-outfit">
            Give Your Car the Care<br />It Deserves
          </h1>
          
          {/* Subtitle / Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Whether you're looking for a quick wash, premium detailing, or long-term paint protection, our team is ready to make your vehicle look its absolute best.
          </p>
          
          {/* CTA Button */}
          <div className="pt-2">
            <a 
              href="#contact-form-section" 
              onClick={handleScrollToForm}
              className="border border-white hover:border-[var(--color-brand-red)] hover:bg-[var(--color-brand-red)] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
            >
              Book Now 
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

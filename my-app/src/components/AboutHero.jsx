import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutHero({ setView }) {
  return (
    <section className="hero-dark-bg py-24 md:py-36 lg:py-44 overflow-hidden flex items-center text-left">
      <div className="container-layout">
        <div className="max-w-2xl space-y-6">
          
          {/* Label: ABOUT US (black) */}
          <span className="text-black font-extrabold text-xs uppercase tracking-widest block font-outfit">
            ABOUT US
          </span>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-outfit">
            Passion. Precision.<br />Perfection.
          </h1>
          
          {/* Subtitle / Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            For over eight years, we've helped car owners protect, restore, and maintain their vehicles with premium detailing services.
          </p>
          
          {/* CTA Button */}
          <div className="pt-2">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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

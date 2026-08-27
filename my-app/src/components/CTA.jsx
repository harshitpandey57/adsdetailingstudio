import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA({ setView }) {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100" id="cta">
      <div className="container-layout text-center">
        
        {/* Content Container */}
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 leading-tight font-outfit">
            Ready To Experience <span className="text-[var(--color-brand-red)]">Premium<br />Car Care?</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Give your vehicle the attention it deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-black hover:bg-gray-900 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              Book Now 
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                setView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-gray-300 hover:border-gray-900 bg-white text-gray-800 hover:text-gray-900 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              View Services
              <span className="w-[18px] h-[18px] rounded-full border border-gray-400 flex items-center justify-center text-[8px] font-bold">➔</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

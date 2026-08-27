import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero({ setView }) {
  return (
    <section className="bg-slate-50 py-12 md:py-20 lg:py-24 overflow-hidden border-b border-gray-100">
      <div className="container-layout">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">

          {/* Left Content Column */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center space-y-8">

            {/* Tagline / Header */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-gray-900 leading-[1.1] font-outfit">
                <span className="text-[var(--color-brand-red)]">Premium Car Detailing</span>
                <br />
                <span className="text-gray-900">That Makes Your</span>
                <br />
                <span className="text-gray-900">Vehicle Look </span>
                <span className="text-[var(--color-brand-red)] font-extrabold">Brand New</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                Professional interior cleaning, ceramic coating, paint correction, and premium detailing services dedicated to protect your investment and make its showroom shine.
              </p>
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-black hover:bg-gray-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-3 sm:px-6 sm:py-4 rounded-md transition-all duration-300 flex items-center gap-2 group shadow-lg cursor-pointer"
              >
                Book Now
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  setView('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-gray-300 hover:border-gray-900 bg-white text-gray-800 hover:text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-3 sm:px-8 sm:py-4 rounded-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                View Services
                <span className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold">➔</span>
              </a>
            </div>

            {/* Key Performance Indicators (KPIs) Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80">

              {/* Stat 1: Star Rating */}
              <div className="space-y-1">
                <div className="flex text-amber-500">
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                </div>
                <div className="text-gray-900 font-extrabold text-lg sm:text-xl font-outfit">4.8 Rating</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">100+ Reviews</div>
              </div>

              {/* Stat 2: Cars Detailed */}
              <div className="space-y-1">
                <div className="text-[var(--color-brand-red)] font-black text-2xl sm:text-3xl font-outfit leading-none">800+</div>
                <div className="text-gray-900 font-extrabold text-sm sm:text-base">Cars Detailed</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Flawless Finish</div>
              </div>

              {/* Stat 3: Experience */}
              <div className="space-y-1">
                <div className="text-[var(--color-brand-red)] font-black text-2xl sm:text-3xl font-outfit leading-none">1+</div>
                <div className="text-gray-900 font-extrabold text-sm sm:text-base">Years Exp.</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Industry Leader</div>
              </div>

            </div>

          </div>

          {/* Right Image Collage Column */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex justify-center items-center py-10 lg:py-0">
            <div className="relative w-full max-w-[480px] h-[340px] sm:h-[420px] lg:h-[460px]">

              {/* Top Image (Interior dashboard) */}
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=500&h=350&q=80"
                alt="Luxury Car Interior Detailing"
                className="collage-img absolute top-0 right-0 w-[62%] h-[160px] sm:h-[200px] lg:h-[220px] rounded-2xl object-cover z-10"
              />

              {/* Middle Image (Sleek white car headlight) */}
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&h=350&q=80"
                alt="Paint Protection Detail"
                className="collage-img absolute top-[85px] sm:top-[110px] lg:top-[120px] left-0 w-[62%] h-[160px] sm:h-[200px] lg:h-[220px] rounded-2xl object-cover z-20 border-[6px] border-white"
              />

              {/* Bottom Image (Red leather interior) */}
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&h=350&q=80"
                alt="Polished Red Sportscar Seats"
                className="collage-img absolute bottom-0 right-4 w-[62%] h-[160px] sm:h-[200px] lg:h-[220px] rounded-2xl object-cover z-10"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

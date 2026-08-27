import React from 'react';
import { Star } from 'lucide-react';

export default function ContactIntro() {
  return (
    <section className="bg-white py-16 md:py-24" id="contact-intro">
      <div className="container-layout">

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Detailing Studio Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
                alt="ADS Detailing Workshop"
                className="w-full object-cover aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Right Column - Title, Text & Stats Grid */}
          <div className="lg:col-span-7 space-y-8 lg:pl-4 text-left">

            <div className="space-y-2">
              <span className="text-gray-500 font-extrabold text-xs uppercase tracking-widest block">
                BOOK YOUR VISIT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-outfit">
                Schedule Your <span className="text-[var(--color-brand-red)]">Premium<br />Car Detailing</span> Service
              </h2>
            </div>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
              Choose your preferred service, share your vehicle details, and we'll get back to you shortly to confirm your appointment.
            </p>

            {/* Stats Subgrid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-4 border-t border-gray-100">

              {/* Stat 1: Stars */}
              <div className="space-y-1">
                <div className="flex text-amber-500 gap-0.5">
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" className="opacity-40" />
                </div>
                <div className="text-gray-900 font-bold text-sm font-outfit pt-1">4.5 Rating</div>
              </div>

              {/* Stat 2: Cars Detailed */}
              <div className="space-y-1">
                <div className="text-[var(--color-brand-red)] font-black text-2xl font-outfit leading-none">
                  800+
                </div>
                <div className="text-gray-500 font-bold text-xs">
                  Cars Detailed
                </div>
              </div>

              {/* Stat 3: Ceramic Coatings */}
              <div className="space-y-1">
                <div className="text-[var(--color-brand-red)] font-black text-2xl font-outfit leading-none">
                  500+
                </div>
                <div className="text-gray-500 font-bold text-xs">
                  Ceramic Coatings Applied
                </div>
              </div>

              {/* Stat 4: Experience */}
              <div className="space-y-1">
                <div className="text-[var(--color-brand-red)] font-black text-2xl font-outfit leading-none">
                  1+
                </div>
                <div className="text-gray-500 font-bold text-xs">
                  Years Experience
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

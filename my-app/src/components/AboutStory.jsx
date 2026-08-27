import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="bg-white py-16 md:py-24" id="about-story">
      <div className="container-layout">

        {/* Main Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Polished Car Image in Workshop */}
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

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">

            <div className="space-y-2">
              <span className="text-gray-500 font-extrabold text-xs uppercase tracking-widest block">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-outfit">
                Crafting <span className="text-[var(--color-brand-red)]">Showroom Quality</span> Since 2024
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Founded with a passion for automotive excellence, ADS Shine Detailing began with one simple mission—to provide professional detailing services that exceed customer expectations.
              </p>
              <p>
                Over the years, we've built a reputation for exceptional craftsmanship, honest service, and attention to every detail. Whether it's a daily commuter, family SUV, luxury sedan, or sports car, we treat every vehicle with the same level of care and precision.
              </p>
              <p>
                Today, we're proud to be trusted by thousands of satisfied customers who rely on us to keep their vehicles looking their absolute best.
              </p>
            </div>

          </div>

        </div>

        {/* Mission & Vision Cards Row (Below the Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">

          {/* Mission Card */}
          <div className="flex gap-4 p-6 border border-gray-150 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up">
            <div className="text-[var(--color-brand-red)] mt-1 shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-lg mb-2 font-outfit">
                Our <span className="text-[var(--color-brand-red)]">Mission</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                To provide exceptional car detailing services using premium products, advanced techniques, and personalized care that enhance every customer's driving experience.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex gap-4 p-6 border border-gray-150 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up">
            <div className="text-[var(--color-brand-red)] mt-1 shrink-0">
              <Eye size={24} />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-lg mb-2 font-outfit">
                Our <span className="text-[var(--color-brand-red)]">Vision</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                To become the most trusted and recognized premium detailing destination by delivering consistent quality and building long-term customer relationships.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

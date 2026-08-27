import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import aboutUsImg from '../assets/about_us_black_cars.png';

export default function AboutUs() {
  return (
    <section className="bg-white py-16 md:py-24" id="about">
      <div className="container-layout">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Polished Car Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <img
                src={aboutUsImg}
                alt="ADS Showroom Detailing Work"
                className="w-full object-cover aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4 text-left">

            <div className="space-y-2">
              <span className="text-black font-extrabold text-xs uppercase tracking-widest block">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-outfit">
                <span className="text-[var(--color-brand-red)]">Detailing</span> Excellence Since 2024
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Marvel Clean Detailing, we believe every vehicle deserves exceptional care. Our certified technicians use semi-grade products and advanced detailing techniques to restore, protect, and enhance every aspect of your car.
              </p>
              <p>
                Whether it's a daily commuter or luxury vehicle, we treat every vehicle with the same level of care and precision.
              </p>
            </div>

            {/* Badges / Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">

              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-red-50 text-[var(--color-brand-red)] shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm leading-tight">Certified</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Professionals</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-red-50 text-[var(--color-brand-red)] shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm leading-tight">Premium</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Products Used</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-red-50 text-[var(--color-brand-red)] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm leading-tight">100% Satisfaction</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Guarantee</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

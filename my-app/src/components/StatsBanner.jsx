import React from 'react';
import { Star } from 'lucide-react';

export default function StatsBanner() {
  return (
    <section className="stats-banner-container py-12 md:py-16">
      <div className="container-layout">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center items-center">

          {/* Stat 1: Stars Rating */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex text-amber-500 justify-center">
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" className="opacity-40" />
            </div>
            <div className="text-sm text-gray-300 font-semibold tracking-wide">
              4.5+ Average Customer Rating
            </div>
          </div>

          {/* Stat 2: Cars Detailed */}
          <div className="flex flex-col items-center space-y-1">
            <div className="text-white font-extrabold text-3xl sm:text-4xl font-outfit">
              800+
            </div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
              Cars Detailed
            </div>
          </div>

          {/* Stat 3: Ceramic Coatings */}
          <div className="flex flex-col items-center space-y-1">
            <div className="text-white font-extrabold text-3xl sm:text-4xl font-outfit">
              500+
            </div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
              Ceramic Coatings Applied
            </div>
          </div>

          {/* Stat 4: Experience */}
          <div className="flex flex-col items-center space-y-1">
            <div className="text-white font-extrabold text-3xl sm:text-4xl font-outfit">
              1+
            </div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
              Years Experience
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

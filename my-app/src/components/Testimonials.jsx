import React from 'react';
import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "I brought my Creta for a ceramic coating, and the finish exceeded my expectations. The paint has an incredible shine, and cleaning the car has become so much easier.",
      name: "Rajesh Kumar",
      vehicle: "Creta Owner"
    },
    {
      stars: 5,
      text: "Outstanding service! They installed paint protection film (PPF) on my new Honda City. The work is seamless and invisible. The attention to detail is truly top-tier.",
      name: "Priya Sharma",
      vehicle: "City Owner"
    },
    {
      stars: 5,
      text: "The interior detailing was phenomenal. Every stain is gone and the cabin smells brand new. Their professionalism and fast turnaround time make them the best in town.",
      name: "Vikram Singh",
      vehicle: "Thar Owner"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24" id="testimonials">
      <div className="container-layout text-center">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto space-y-4 mb-16">
          <span className="text-gray-900 font-extrabold text-xs uppercase tracking-widest block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-outfit">
            What Our <span className="text-[var(--color-brand-red)]">Customers</span> Say
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Real reviews from car owners who trust us to keep their vehicles looking their best.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left justify-between"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium italic">
                  "{review.text}"
                </p>
              </div>

              <div>
                {/* Red Customer Tag */}
                <span className="text-[var(--color-brand-red)] text-[10px] font-extrabold uppercase tracking-widest block mb-3">
                  Customer
                </span>

                {/* Profile Header */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 text-sm leading-tight font-outfit">{review.name}</h4>
                    <p className="text-xs text-gray-400 font-semibold">{review.vehicle}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

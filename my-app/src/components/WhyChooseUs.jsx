import React from 'react';
import { ArrowRight, Sparkles, Droplet, Compass, Zap, ShieldCheck, Leaf } from 'lucide-react';

export default function WhyChooseUs({ setView }) {
  const cards = [
    {
      icon: <Sparkles size={24} />,
      titlePrefix: "Interior ",
      titleSuffix: "Detailing",
      prefixRed: false,
      text: "Our trained professionals use precision detailing techniques to achieve flawless results for every vehicle."
    },
    {
      icon: <Droplet size={24} />,
      titlePrefix: "Premium ",
      titleSuffix: "Products",
      prefixRed: true,
      text: "We only use high-quality detailing products and coatings from leading automotive brands."
    },
    {
      icon: <Compass size={24} />,
      titlePrefix: "Attention to ",
      titleSuffix: "Detail",
      prefixRed: false,
      text: "Every surface is carefully cleaned, restored, and protected with precision and care."
    },
    {
      icon: <Zap size={24} />,
      titlePrefix: "Fast ",
      titleSuffix: "Turnaround",
      prefixRed: true,
      text: "Efficient service without compromising quality, so you get back on the road sooner."
    },
    {
      icon: <ShieldCheck size={24} />,
      titlePrefix: "Satisfaction ",
      titleSuffix: "Guaranteed",
      prefixRed: false,
      text: "Your satisfaction is our priority, and we stand behind the quality of every service we provide."
    },
    {
      icon: <Leaf size={24} />,
      titlePrefix: "Eco-Friendly ",
      titleSuffix: "Solutions",
      prefixRed: true,
      text: "Safe, environmentally responsible cleaning products that protect both your vehicle and the planet."
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24" id="why-choose-us">
      <div className="container-layout">
        
        {/* Top Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-gray-200/60">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-black font-extrabold text-xs uppercase tracking-widest block">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-outfit">
                Why Car Owners <span className="text-[var(--color-brand-red)]">Trust ADS</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              We combine industry-leading products, skilled professionals, and meticulous attention to detail to deliver premium detailing services that protect your investment and keep your vehicle looking its absolute best.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-black hover:bg-gray-900 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-all duration-300 flex items-center gap-2 group cursor-pointer"
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
                className="border border-gray-300 hover:border-gray-900 bg-white text-gray-800 hover:text-gray-900 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                View Services
                <span className="w-[18px] h-[18px] rounded-full border border-gray-400 flex items-center justify-center text-[8px] font-bold">➔</span>
              </a>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&h=533&q=80" 
                alt="Professional Car Polishing and Detailing" 
                className="w-full object-cover aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/80 rounded-xl p-6 sm:p-8 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 group text-left"
            >
              {/* Card Icon */}
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center mb-6 shrink-0 transition-colors group-hover:bg-[var(--color-brand-red)] group-hover:text-white">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-extrabold text-gray-950 text-lg mb-3 font-outfit">
                {card.prefixRed ? (
                  <>
                    <span className="text-[var(--color-brand-red)]">{card.titlePrefix}</span>
                    <span>{card.titleSuffix}</span>
                  </>
                ) : (
                  <>
                    <span>{card.titlePrefix}</span>
                    <span className="text-[var(--color-brand-red)]">{card.titleSuffix}</span>
                  </>
                )}
              </h3>

              {/* Card Description */}
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

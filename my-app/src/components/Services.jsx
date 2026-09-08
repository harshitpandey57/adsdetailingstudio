import React, { useState } from 'react';
import { ArrowRight, Paintbrush, ShieldCheck, Wand2, Wrench, Package } from 'lucide-react';

export default function Services({ setView, setSelectedService }) {
  const [activeCategory, setActiveCategory] = useState('detailing');

  const categories = [
    { id: 'detailing', name: 'Detailing', icon: <Paintbrush size={16} /> },
    { id: 'protection', name: 'Protection', icon: <ShieldCheck size={16} /> },
    { id: 'enhancement', name: 'Enhancement', icon: <Wand2 size={16} /> },
    { id: 'maintenance', name: 'Maintenance', icon: <Wrench size={16} /> },
    { id: 'packages', name: 'Packages', icon: <Package size={16} /> }
  ];

  const servicesData = {
    detailing: {
      label: 'DETAILING',
      titlePrefix: 'Restore Your Vehicle\'s ',
      titleRed: 'Original Beauty',
      description: 'We provide deep cleaning and restoration services for both interior and exterior surfaces.',
      cards: [
        {
          title: 'Interior Detailing',
          image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Complete cabin cleaning, vacuuming, leather conditioning, dashboard restoration.',
          duration: '3-4 hrs',
          price: '₹2200'
        },
        {
          title: 'Exterior Wash',
          image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Premium exterior wash to remove dirt and grime.',
          duration: '1-2 hrs',
          price: '₹350 onwards'
        },
        {
          title: 'Full Interior + Exterior',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Engine Bay cleaning, Paint Decontamination, Alloy Wheel coating, Trim Restoration.',
          duration: '4-5 hrs',
          price: '₹2500 onwards'
        }
      ]
    },
    protection: {
      label: 'PROTECTION',
      titlePrefix: 'Shield Your Car With ',
      titleRed: 'Premium Coatings',
      description: 'Advanced defensive layers that prevent environmental damage and preserve your vehicle\'s value.',
      cards: [
        {
          title: 'Ceramic Coating 10H',
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'High-gloss silica shell defending your paint from UV, bird droppings, and light scratches.',
          duration: '1 day',
          price: '₹12,000 onwards'
        },
        {
          title: 'Ceramic Coating Graphene',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Advanced graphene infused coating for extreme durability and water beading.',
          duration: '1 day',
          price: '₹16,000 onwards'
        },
        {
          title: 'Ceramic Coating Borophene',
          image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Next generation borophene coating offering unparalleled scratch resistance and longevity.',
          duration: '1 day',
          price: '₹20,000 onwards'
        },
        {
          title: 'PPF (Paint Protection Film)',
          image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Self-healing urethane barrier that protects paint from stone chips and road debris.',
          duration: '2-3 days',
          price: '₹53,000 onwards'
        },
        {
          title: 'Glass Coating Protection',
          image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Hydrophobic coating applied to all glass panels for enhanced wet-weather visibility.',
          duration: '3-4 hrs',
          price: '₹2000'
        }
      ]
    },
    enhancement: {
      label: 'ENHANCEMENT',
      titlePrefix: 'Restore and Revive Your ',
      titleRed: 'Paint\'s Showroom Shine',
      description: 'Professional color correction techniques designed to eliminate swirls, scratches, and haze.',
      cards: [
        {
          title: 'Full Body Paint Correction',
          image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Comprehensive multi-stage machine polish removing major defects and scratches.',
          duration: '4-5 days',
          price: '₹30,000 onwards'
        },
        {
          title: 'Minor PC',
          image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Single-stage machine polish removing minor swirls and restoring overall gloss levels.',
          duration: '1-2 days',
          price: '₹2,800 onwards'
        },
        {
          title: 'Major PC',
          image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Two-stage compound and polish removing 85%+ of moderate defects.',
          duration: '3-4 days',
          price: '₹15,000 onwards'
        },
        {
          title: 'Chrome Parts Restoration',
          image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Chemical and hand polishing to remove oxidation and scale from chrome details.',
          duration: '1 hr',
          price: '₹2500 onwards'
        }
      ]
    },
    maintenance: {
      label: 'MAINTENANCE',
      titlePrefix: 'Preserve Your Vehicle\'s ',
      titleRed: 'Immaculate State',
      description: 'Routine upkeep programs designed to maintain ceramic coatings and regular detailing results.',
      cards: [
        {
          title: 'Interior Sanitization',
          image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Steam cleaning of ventilation systems and sterilization of contact surfaces.',
          duration: 'Coming Soon',
          price: 'Coming Soon'
        },
        {
          title: 'Headlight Restoration',
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Restore cloudy, dull, and yellowed headlights to like-new condition.',
          duration: 'Coming Soon',
          price: 'Coming Soon'
        }
      ]
    },
    packages: {
      label: 'PACKAGES',
      titlePrefix: 'Complete Care Plans for ',
      titleRed: 'Maximum Protection',
      description: 'Carefully curated service bundles that offer the highest level of detail and convenience.',
      cards: [
        {
          title: 'Platinum Coating (5yr jronx coating)',
          image: 'https://images.unsplash.com/photo-1658244500543-47f32dc51dc2?auto=format&fit=crop&w=600&h=450&q=80',
          desc: 'Our signature 5-year premium ceramic coating protection package.',
          duration: 'Coming Soon',
          price: 'Coming Soon'
        }
      ]
    }
  };

  const currentCategoryData = servicesData[activeCategory];

  return (
    <div id="services">
      {/* 1. Services Hero Banner */}
      <section className="services-hero-banner py-24 sm:py-32">
        <div className="container-layout z-10">
          <div className="max-w-2xl">
            <span className="text-[var(--color-brand-red)] font-extrabold text-xs tracking-widest uppercase block mb-3 font-outfit">
              OUR SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-outfit leading-tight">
              Professional Care For <br />Every Vehicle
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-medium">
              Premium detailing and protection solutions designed to restore, protect, and maintain your vehicle.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setView('home');
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="banner-cta-button"
            >
              Book Now
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Services Grid and Categories */}
      <section className="bg-white py-16 sm:py-24 text-left">
        <div className="container-layout">
          {/* Header row */}
          <h2 className="text-3xl font-extrabold text-gray-950 font-outfit tracking-tight mb-8">
            Select a Service Category
          </h2>

          {/* Custom Tabs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-[var(--color-brand-red)] border-[var(--color-brand-red)] text-white shadow-md'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-gray-950 hover:text-gray-950'
                    }`}
                >
                  {cat.name}
                  {cat.icon}
                </button>
              );
            })}
          </div>

          {/* Active Category Header */}
          <div className="mb-12">
            <span className="text-gray-950 font-black text-xs tracking-widest uppercase block mb-2 font-outfit">
              {currentCategoryData.label}
            </span>
            <h3 className="text-3xl font-black text-gray-950 font-outfit tracking-tight leading-tight mb-2">
              {currentCategoryData.titlePrefix}
              <span className="text-[var(--color-brand-red)]">{currentCategoryData.titleRed}</span>
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
              {currentCategoryData.description}
            </p>
          </div>

          {/* Active Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategoryData.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg hover:bg-gray-100/60 transition-shadow duration-300"
              >
                <div>
                  {/* Card Image */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Card Title */}
                  <h4 className="text-[var(--color-brand-red)] font-extrabold text-lg mb-2 font-outfit">
                    {card.title}
                  </h4>

                  {/* Card Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {card.desc}
                  </p>
                </div>

                {/* Card Footer Details */}
                <div>
                  <div className="flex justify-between items-center mb-5 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-gray-400 text-xs block font-bold uppercase tracking-wider">Duration:</span>
                      <span className="text-gray-950 font-black text-lg font-outfit">{card.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 text-xs block font-bold uppercase tracking-wider">Starting From:</span>
                      <span className="text-gray-950 font-black text-lg font-outfit">{card.price}</span>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  {card.price === 'Coming Soon' || card.duration === 'Coming Soon' ? (
                    <button
                      disabled
                      className="w-full bg-gray-200 text-gray-500 font-bold text-xs uppercase tracking-wider py-3.5 rounded-md flex items-center justify-center gap-1.5 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        if (setSelectedService) {
                          setSelectedService(card.title);
                        }
                        setView('contact');
                        setTimeout(() => {
                          const formSection = document.getElementById('contact-form-section');
                          if (formSection) {
                            formSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
                          }
                        }, 100);
                      }}
                      className="w-full bg-black hover:bg-gray-950 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-md flex items-center justify-center gap-1.5 transition-all duration-200"
                    >
                      Book Now <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

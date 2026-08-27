import React from 'react';
import { Smile, User } from 'lucide-react';

export default function MeetOurTeam() {
  const team = [
    {
      name: "Sophia Mitchell",
      role: "Interior Care Expert",
      desc: "Sophia ensures every cabin is restored with precision, leaving interiors spotless and refreshed.",
      icon: <Smile size={24} />
    },
    {
      name: "Daniel Brooks",
      role: "Customer Excellence Manager",
      desc: "Daniel helps customers choose the right services and ensures every visit exceeds expectations.",
      icon: <Smile size={24} />
    },
    {
      name: "Ryan Carter",
      role: "Lead Detailing Specialist",
      desc: "With over 10 years of detailing experience, Ryan specializes in paint correction and ceramic coatings.",
      icon: <User size={24} />
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="team">
      <div className="container-layout text-center">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto space-y-4 mb-16">
          <span className="text-gray-500 font-extrabold text-xs uppercase tracking-widest block">
            MEET OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-outfit">
            Meet the Experts <span className="text-[var(--color-brand-red)]">Behind the Shine</span>
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Experienced professionals dedicated to delivering outstanding detailing services.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-150 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-355 flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center">
                {/* Smiley/User Icon in Circle */}
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-slate-400 mb-6 bg-slate-50">
                  {member.icon}
                </div>

                {/* Name & Role */}
                <h3 className="font-extrabold text-gray-950 text-lg mb-1 font-outfit">{member.name}</h3>
                <p className="text-xs text-[var(--color-brand-red)] font-bold uppercase tracking-wider mb-4">{member.role}</p>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "How long does detailing take?",
      answer: "The time required depends on the service you choose and the condition of your vehicle. A basic detailing service typically takes 2-3 hours, while full interior and exterior detail may take 4-6 hours. Advanced services like paint correction or ceramic coating can require 1-2 days to ensure the best possible results."
    },
    {
      question: "Do I need an appointment?",
      answer: "Yes, we highly recommend booking an appointment to ensure we can dedicate the necessary time and attention to your vehicle. Walk-ins are subject to availability."
    },
    {
      question: "How often should I detail my car?",
      answer: "To keep your vehicle protected and in pristine condition, we recommend a professional detail every 4 to 6 months. Regular maintenance washing should occur every 2 weeks."
    },
    {
      question: "Is ceramic coating worth it?",
      answer: "Absolutely. Ceramic coating offers semi-permanent protection against UV damage, oxidation, bird droppings, and minor micro-scratches. It makes washing much easier due to its hydrophobic properties and maintains a high-gloss showroom shine for years."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24" id="faqs">
      <div className="container-layout max-w-4xl">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-12 font-outfit text-left">
          FAQs
        </h2>

        {/* Accordions Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-accordion-item"
              >
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="faq-accordion-header"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl font-bold shrink-0 ml-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`faq-accordion-content ${isOpen ? 'expanded' : ''}`}>
                  <div className="faq-accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

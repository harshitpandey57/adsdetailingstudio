import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function ContactFormAndDetails({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || 'Interior Detailing',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | sending | success | error
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });
    setErrors([]);
    try {
      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ state: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', service: 'Interior Detailing', message: '' });
      } else {
        setErrors(data.errors || ['Something went wrong. Please try again.']);
        setStatus({ state: 'error', message: '' });
      }
    } catch (err) {
      setStatus({ state: 'error', message: '' });
      setErrors(['Network error. Please call us directly.']);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100" id="contact-form-section">
      <div className="container-layout">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 space-y-8 text-left">

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-outfit">
                Get In <span className="text-[var(--color-brand-red)]">Touch</span>
              </h2>
              <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
                Ready to give your car the care it deserves? Contact us today to schedule your detailing appointment.
              </p>
            </div>

            {/* Contact Items List */}
            <div className="grid grid-cols-1 gap-6 pt-2">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-red-100 bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] font-extrabold uppercase tracking-wider block mb-0.5">Phone Number</span>
                  <a href="tel:+917985761756" className="text-gray-900 font-bold text-sm sm:text-base hover:text-[var(--color-brand-red)] transition-colors">
                    +91 79857 61756, +91 63878 37871
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-red-100 bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] font-extrabold uppercase tracking-wider block mb-0.5">Email Address</span>
                  <a href="mailto:ads.inc.corp@gmail.com" className="text-gray-900 font-bold text-sm sm:text-base hover:text-[var(--color-brand-red)] transition-colors">
                    ads.inc.corp@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-red-100 bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] font-extrabold uppercase tracking-wider block mb-0.5">Studio Location</span>
                  <p className="text-gray-900 font-bold text-sm sm:text-base leading-snug">
                    <a 
                      href="https://maps.google.com/?q=2/90,+Vijayant+Khand-+2,+Vijayant+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-brand-red)] transition-colors block"
                    >
                      2/90, Vijayant Khand- 2, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-red-100 bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div className="w-full">
                  <span className="text-gray-400 text-[10px] font-extrabold uppercase tracking-wider block mb-1">Business Hours</span>
                  <div className="grid grid-cols-2 text-xs font-bold text-gray-600 max-w-[240px]">
                    <div>Mon - Sat:</div>
                    <div className="text-right text-gray-900">9:00 AM - 7:00 PM</div>
                    <div className="mt-1">Sunday:</div>
                    <div className="text-right text-[var(--color-brand-red)] mt-1">Closed</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Google Map Embedded Iframe */}
            <div className="w-full h-44 sm:h-80 lg:h-56 min-h-[100px] mt-6 rounded-xl overflow-hidden border border-gray-100 shadow-sm relative">
              <iframe
                src="https://maps.google.com/maps?q=2/90,+Vijayant+Khand-+2,+Vijayant+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact/Booking Form */}
          <div className="lg:col-span-7 bg-white">
            {status.state === 'success' && (
              <div className="mb-4 p-3 rounded-md bg-green-50 text-green-700 text-sm font-semibold">
                ✅ {status.message}
              </div>
            )}
            {errors.length > 0 && (
              <div className="mb-4 p-3 rounded-md bg-red-50 text-red-700 text-sm font-semibold">
                ⚠️ {errors.join(' ')}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 text-left border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">

              {/* Name Field */}
              <div className="relative border-b border-gray-200 pb-2 focus-within:border-[var(--color-brand-red)] transition-colors">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full bg-transparent border-none text-gray-900 font-semibold text-sm py-1 placeholder-gray-300 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="relative border-b border-gray-200 pb-2 focus-within:border-[var(--color-brand-red)] transition-colors">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full bg-transparent border-none text-gray-900 font-semibold text-sm py-1 placeholder-gray-300 focus:outline-none"
                />
              </div>

              {/* Phone Field */}
              <div className="relative border-b border-gray-200 pb-2 focus-within:border-[var(--color-brand-red)] transition-colors">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  minLength="10"
                  className="w-full bg-transparent border-none text-gray-900 font-semibold text-sm py-1 placeholder-gray-300 focus:outline-none"
                />
              </div>

              {/* Service Selection Field */}
              <div className="relative border-b border-gray-200 pb-2 focus-within:border-[var(--color-brand-red)] transition-colors">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full bg-transparent border-none text-gray-900 font-semibold text-sm py-1 focus:outline-none cursor-pointer"
                >
                  <option value="Interior Detailing">Interior Detailing - ₹2200</option>
                  <option value="Exterior Wash">Exterior Wash - ₹350 onwards</option>
                  <option value="Full Interior + Exterior">Full Interior + Exterior - ₹2500 onwards</option>
                  <option value="Headlight Restoration">Headlight Restoration - Contact Us</option>
                  <option value="Ceramic Coating 10H">Ceramic Coating 10H - ₹12,000 onwards</option>
                  <option value="Ceramic Coating Graphene">Ceramic Coating Graphene - ₹16,000 onwards</option>
                  <option value="Ceramic Coating Borophene">Ceramic Coating Borophene - ₹20,000 onwards</option>
                  <option value="PPF (Paint Protection Film)">PPF (Paint Protection Film) - ₹53,000 onwards</option>
                  <option value="Glass Coating Protection">Glass Coating Protection - ₹2000</option>
                  <option value="Full Body Paint Correction">Full Body Paint Correction - ₹30,000 onwards</option>
                  <option value="Minor PC">Minor PC - ₹2,800 onwards</option>
                  <option value="Major PC">Major PC - ₹15,000 onwards</option>
                  <option value="Chrome Parts Restoration">Chrome Parts Restoration - ₹2500 onwards</option>
                  <option value="Interior Sanitization" disabled>Interior Sanitization - Coming Soon</option>
                  <option value="Platinum Coating (5yr jronx coating)" disabled>Platinum Coating (5yr jronx coating) - Coming Soon</option>
                  {selectedService &&
                    !['Interior Detailing', 'Exterior Wash', 'Full Interior + Exterior', 'Headlight Restoration', 'Ceramic Coating 10H', 'Ceramic Coating Graphene', 'Ceramic Coating Borophene', 'PPF (Paint Protection Film)', 'Glass Coating Protection', 'Full Body Paint Correction', 'Minor PC', 'Major PC', 'Chrome Parts Restoration', 'Interior Sanitization', 'Platinum Coating (5yr jronx coating)'].includes(selectedService) && (
                      <option value={selectedService}>{selectedService}</option>
                    )}
                </select>
              </div>

              {/* Message Field */}
              <div className="relative border-b border-gray-200 pb-2 focus-within:border-[var(--color-brand-red)] transition-colors">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us about your vehicle and requirements"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="w-full bg-transparent border-none text-gray-900 font-semibold text-sm py-1 placeholder-gray-300 resize-none focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status.state === 'sending'}
                  className="bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-hover)] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer shadow-md shadow-red-500/10 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === 'sending' ? 'Sending…' : 'Schedule Appointment'}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

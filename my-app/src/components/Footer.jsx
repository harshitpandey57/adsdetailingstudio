import React from 'react';
import logo from '../assets/header-logo.svg';

export default function Footer({ setView }) {
  const currentYear = new Date().getFullYear();

  const handleServicesLinkClick = (e) => {
    e.preventDefault();
    setView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeLinkClick = (e, hash) => {
    e.preventDefault();
    setView('home');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-container">
      <div className="container-layout">

        {/* Main Footer Links and Information Grid */}
        <div className="footer-grid">

          {/* Brand Profile Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-box">
              <img src={logo} alt="ADS Detailing Studio" className="footer-logo-img" />
            </div>
            <p className="footer-brand-text">
              Premium automotive detailing studio specializing in ceramic coatings, advanced paint protection films, and professional restoration treatments.
            </p>
            {/* Social Icons (Instagram, Facebook) */}
            <div className="footer-social-inline">
              <a
                href="https://www.instagram.com/adsdetailingstudio?igsi=MWFjdmE3dG83NnFtOQ=="
                target="_blank"
                rel="noreferrer"
                className="text-[#E1306C] hover:scale-110 transition-transform block"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#1877F2] hover:scale-110 transition-transform block"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Our Services Column */}
          <div className="footer-links-col">
            <h3 className="footer-col-heading">Our Services</h3>
            <ul className="footer-list">
              <li><a href="#services" onClick={handleServicesLinkClick} className="footer-list-link">Ceramic Coating</a></li>
              <li><a href="#services" onClick={handleServicesLinkClick} className="footer-list-link">Paint Protection Film (PPF)</a></li>
              <li><a href="#services" onClick={handleServicesLinkClick} className="footer-list-link">Car Detailing</a></li>
              <li><a href="#services" onClick={handleServicesLinkClick} className="footer-list-link">Bike Detailing</a></li>
              <li><a href="#services" onClick={handleServicesLinkClick} className="footer-list-link">Window Tinting</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h3 className="footer-col-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#home" onClick={(e) => handleHomeLinkClick(e, '')} className="footer-list-link">Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); setView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="footer-list-link">About Us</a></li>
              <li><a href="#gallery" onClick={(e) => handleHomeLinkClick(e, '#gallery')} className="footer-list-link">Our Gallery</a></li>
              <li><a href="#testimonials" onClick={(e) => handleHomeLinkClick(e, '#testimonials')} className="footer-list-link">Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="footer-list-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-links-col">
            <h3 className="footer-col-heading">Contact Info</h3>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Address:</span>
                <p className="contact-value">
                  <a
                    href="https://maps.google.com/?q=2/90,+Vijayant+Khand-+2,+Vijayant+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-brand-red)] transition-colors"
                  >
                    2/90, Vijayant Khand- 2, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                  </a>
                </p>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <p className="contact-value">
                  <a href="tel:+917985761756" className="hover:text-[var(--color-brand-red)] transition-colors">+91 79857 61756</a>, <a href="tel:+916387837871" className="hover:text-[var(--color-brand-red)] transition-colors">+91 63878 37871</a>
                </p>
              </li>
              <li>
                <span className="contact-label">Email:</span>
                <p className="contact-value">
                  <a href="mailto:ads.inc.corp@gmail.com" className="hover:text-[var(--color-brand-red)] transition-colors">ads.inc.corp@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar with grid line separator */}
        <div className="footer-bottom-grid">
          {/* Copyright notice */}
          <p className="m-0 text-xs text-zinc-500 font-medium">
            &copy; 2026 ADS Shine Detailing. All Rights Reserved.
          </p>

          {/* Privacy Policy & Terms on the right side */}
          <div className="footer-legal-inline">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); setView('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="footer-legal-link">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); setView('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="footer-legal-link">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
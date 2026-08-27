import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/header-logo.svg';

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, targetView, hash) => {
    setIsOpen(false);
    if (targetView === 'services') {
      e.preventDefault();
      setView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetView === 'about') {
      e.preventDefault();
      setView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetView === 'contact') {
      e.preventDefault();
      setView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home') {
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
      } else {
        if (hash) {
          e.preventDefault();
          const element = document.getElementById(hash.replace('#', ''));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="navbar-container" id="home">
      <div className="container-layout">
        <div className="navbar-inner">

          {/* Logo Wrapper */}
          <a href="/" className="logo-wrapper" onClick={(e) => handleNavClick(e, 'home', '')}>
            <img src={logo} alt="ADS Detailing Studio" className="brand-logo-img" />
          </a>

          {/* Desktop Links */}
          <div className="nav-desktop-links">
            <a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'home', '')}>Home</a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about', '')}>About</a>
            <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, 'home', '#gallery')}>Gallery</a>
            <a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, 'home', '#testimonials')}>Testimonials</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact', '')}>Contact</a>
            <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services', '')}>Services</a>
          </div>

          {/* Book Appointment CTA Button */}
          <a href="#contact" className="btn-cta-nav transition-all" onClick={(e) => handleNavClick(e, 'contact', '')}>
            Book Appointment <ArrowRight size={15} />
          </a>

          {/* Mobile Toggle Button */}
          <div className="mobile-toggle-btn">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="cursor-pointer">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-mobile-menu">
          <a href="#home" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'home', '')}>Home</a>
          <a href="#about" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'about', '')}>About</a>
          <a href="#gallery" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'home', '#gallery')}>Gallery</a>
          <a href="#testimonials" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'home', '#testimonials')}>Testimonials</a>
          <a href="#contact" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'contact', '')}>Contact</a>
          <a href="#services" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'services', '')}>Services</a>
          <a href="#contact" className="btn-cta-mobile text-white font-bold no-underline flex items-center justify-center gap-1.5 mt-2" onClick={(e) => handleNavClick(e, 'contact', '')}>
            Book Appointment <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="hero-container">
      <div className="container-layout">
        <div className="hero-content">
          <span className="hero-tagline">
            ADS Detailing Studio
          </span>
          <h1 className="hero-heading">
            Premium Car Detailing That Makes Your Vehicle Look <span className="hero-highlight">Brand New</span>
          </h1>
          <p className="hero-description">
            Professional friction detailing, ceramic coating, paint protection film (PPF) and luxury treatment plans matching your expectations.
          </p>
          <div className="hero-btn-group">
            <button className="btn-primary">
              Book Now <ArrowRight size={16} />
            </button>
            <button className="btn-secondary">
              See Services
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
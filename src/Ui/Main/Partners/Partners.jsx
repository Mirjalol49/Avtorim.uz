import React from 'react';
import './Partners.css';
import bmw from '../../../assets/Images/brands/bmw.png';
import mercedes from '../../../assets/Images/brands/mercedes.png';
import audi from '../../../assets/Images/brands/audi.png';
import toyota from '../../../assets/Images/brands/toyota.png';
import lexus from '../../../assets/Images/brands/lexus.png';
import honda from '../../../assets/Images/brands/honda.png';

const Partners = () => {
  const partners = [
    { name: 'BMW', logo: bmw },
    { name: 'Mercedes-Benz', logo: mercedes },
    { name: 'Audi', logo: audi },
    { name: 'Toyota', logo: toyota },
    { name: 'Lexus', logo: lexus },
    { name: 'Honda', logo: honda },
  ];

  return (
    <section className="partners">
      <div className="container">
        <div className="partners-header">
          <span className="partners-badge">Premium Brendlar</span>
          <h2 className="partners-title">Bizning Hamkorlar</h2>
          <p className="partners-subtitle">
            Biz dunyoning yetakchi avtomobil brendlari bilan hamkorlik qilamiz va ularning rasmiy servis markazimiz
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="partner-card">
                <div className="partner-logo-wrapper">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="partner-logo"
                  />
                </div>
                <h3 className="partner-name">{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 
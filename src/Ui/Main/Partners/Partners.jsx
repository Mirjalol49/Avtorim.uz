import React from 'react';
import './Partners.css';

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners-header">
          <span className="partners-badge">Premium Brendlar</span>
          <h2 className="partners-title">Bizning Hamkorlar</h2>
          <p className="partners-subtitle">
            Biz dunyoning yetakchi avtomobil brendlari bilan hamkorlik qilamiz
          </p>
        </div>

        <div className="partners-grid">
          <div className="partner-card">
            <img 
              src="/src/assets/Images/brands/bmw.svg" 
              alt="BMW" 
              className="partner-logo"
            />
            <h3 className="partner-name">BMW</h3>
          </div>

          <div className="partner-card">
            <img 
              src="/src/assets/Images/brands/mercedes.svg" 
              alt="Mercedes-Benz" 
              className="partner-logo"
            />
            <h3 className="partner-name">Mercedes-Benz</h3>
          </div>

          <div className="partner-card">
            <img 
              src="/src/assets/Images/brands/audi.svg" 
              alt="Audi" 
              className="partner-logo"
            />
            <h3 className="partner-name">Audi</h3>
          </div>

          <div className="partner-card">
            <img 
              src="/src/assets/Images/brands/toyota.svg" 
              alt="Toyota" 
              className="partner-logo"
            />
            <h3 className="partner-name">Toyota</h3>
          </div>

          <div className="partner-card">
            <img 
              src="/src/assets/Images/brands/lexus.svg" 
              alt="Lexus" 
              className="partner-logo"
            />
            <h3 className="partner-name">Lexus</h3>
          </div>

          <div className="partner-card">
            <img 
              src="/src/assets/Images/brands/honda.svg" 
              alt="Honda" 
              className="partner-logo"
            />
            <h3 className="partner-name">Honda</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 
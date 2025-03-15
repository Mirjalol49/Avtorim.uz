import React from 'react';
import './Hero.css';
import heroImg from '../../../assets/Images/hero1.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-subtitle">Professional Avto Servis</span>
            <h1 className="hero-title">
              Avtomobilingiz uchun Professional Xizmat
            </h1>
            <p className="hero-description">
              15 yillik tajriba va malakali mutaxassislar jamoasi bilan avtomobilingizni 
              ishonchli qo'llarga topshiring. Zamonaviy uskunalar va sifatli xizmat kafolati.
            </p>
            <div className="hero-cta">
              <a href="#services" className="primary-btn">
                Xizmatlarni Ko'rish
              </a>
              <a href="#contact" className="secondary-btn">
                Biz Bilan Bog'lanish
              </a>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img 
              src={heroImg} 
              alt="Professional Auto Service" 
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
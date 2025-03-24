import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../hooks/useLanguage';
import './Hero.css';
import heroImg from '../../../assets/Images/hero1.png';

const Hero = () => {
  const { language } = useLanguage();
  
  const translations = {
    shopCars: {
      en: 'Buy auto car parts',
      ru: 'Купить автозапчасти',
      uz: 'Avto Detallarni Xarid Qilish'
    },

    HeroTitle: {
      en: 'Professional Service for your car',
      ru: 'Профессиональный сервис для вашего автомобиля',
      uz: 'Avtomobilingiz uchun Professional Xizmat'
    },

    HeroDescription: {
      en: '15 years of experience and skilled technicians with a team of professionals to ensure the reliability of your vehicle. Modern equipment and quality service.',
      ru: '15 лет опыта и квалифицированные специалисты с командой профессионалов для обеспечения надежности вашего автомобиля. Современное оборудование и качественный сервис.',
      uz: '15 yillik tajriba va malakali mutaxassislar jamoasi bilan avtomobilingizni ishonchli qo\'llarga topshiring. Zamonaviy uskunalar va sifatli xizmat kafolati.'     
    },

    HeroCTA: {
      en: 'View Services',
      ru: 'Посмотреть услуги',
      uz: 'Xizmatlarni Ko\'rish'
    }
  };
  
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-subtitle">{translations.HeroTitle[language]}</span>
            <h1 className="hero-title">
              {translations.HeroTitle[language]}
            </h1>
            <p className="hero-description">
              {translations.HeroDescription[language]}
            </p>
            <div className="hero-cta">
              <a href="#services" className="primary-btn">
                {translations.HeroCTA[language]}
              </a>
              <Link to="/shop" className="shop-cars-btn animated-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                {translations.shopCars[language]}
              </Link>
             
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
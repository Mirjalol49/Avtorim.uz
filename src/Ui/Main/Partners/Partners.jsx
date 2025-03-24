import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import './Partners.css';

const Partners = () => {
  const { language } = useLanguage();

  const translations = {
    title: {
      en: 'Our Trusted Brand Partners',
      ru: 'Наши Надежные Партнеры',
      uz: 'Ishonchli hamkor brendlar'
    },
    subtitle: {
      en: 'We partner with leading automotive brands to ensure quality parts and exceptional service for your vehicle.',
      ru: 'Мы сотрудничаем с ведущими автомобильными брендами, чтобы обеспечить качественные запчасти и исключительный сервис для вашего автомобиля.',
      uz: 'Yetakchi avtomobil brendlari bilan hamkorlikda avtomobilingiz uchun sifatli ehtiyot qismlar va ajoyib xizmatni ta\'minlaymiz.'
    },
    badge: {
      en: 'Partners',
      ru: 'Партнеры',
      uz: 'Hamkorlar'
    }
  };

  const partners = [
    {
      id: 1,
      name: 'BYD',
      logo: '/images/partners/byd-logo.svg',
    },
    {
      id: 2,
      name: 'Chevrolet',
      logo: '/images/partners/chevrolet-logo.svg',
    },
    {
      id: 3,
      name: 'Li',
      logo: '/images/partners/li-logo.svg',
    },
    {
      id: 4,
      name: 'Zeekr',
      logo: '/images/partners/zeekr-logo.svg',
    },
    {
      id: 5,
      name: 'Jetour',
      logo: '/images/partners/jetour-logo.svg',
    },
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-header">
        <span className="partners-badge">{translations.badge[language]}</span>
        <h2 className="partners-title">{translations.title[language]}</h2>
        <p className="partners-subtitle">{translations.subtitle[language]}</p>
      </div>

      <div className="partners-grid">
        {partners.map(partner => (
          <div key={partner.id} className="partner-card">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="partner-logo"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150x50?text=' + partner.name;
              }}
            />
            <h3 className="partner-name">{partner.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners; 
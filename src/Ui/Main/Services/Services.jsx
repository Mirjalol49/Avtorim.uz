import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import './Services.css';
import { useLocation } from 'react-router-dom';

// Import service images
import Kuzov from "../../../assets/Images/1one.webp";
import Dvigatel from "../../../assets/Images/2one.jpeg";
import Elektrik from "../../../assets/Images/3.png";
import Vakum from "../../../assets/Images/4.png";

// Import icons if using a library like react-icons
// If not, we'll use SVG paths directly

const Services = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const translations = {
    title: {
      en: 'Our Services',
      ru: 'Наши Услуги',
      uz: 'Bizning Xizmatlar'
    },
    subtitle: {
      en: 'We offer professional car repair and technical services to ensure your vehicle runs safely and smoothly.',
      ru: 'Мы предлагаем профессиональные услуги по ремонту автомобилей и технические услуги, чтобы ваш автомобиль работал безопасно и плавно.',
      uz: 'Avtomobilingizning ravon va xavfsiz yurishini ta\'minlash uchun biz mutaxassis avtomobil ta\'mirlash va texnik xizmat ko\'rsatish xizmatlarini taqdim etamiz.'
    },
    learnMore: {
      en: 'Learn More About Our Services',
      ru: 'Узнать Больше О Наших Услугах',
      uz: 'Xizmatlarimiz Haqida Ko\'proq Bilish'
    },
    carRepair: {
      title: {
        en: 'Auto Repair',
        ru: 'Ремонт Автомобиля',
        uz: 'Avtomobil Ta\'mirlash'
      },
      description: {
        en: 'Professional car repair services',
        ru: 'Профессиональные услуги по ремонту автомобилей',
        uz: 'Avtomobilning barcha xususiyatlari va texnik xizmatlarini ta\'mirlash'
      },
      services: [
        {
          en: 'Suspension Repair',
          ru: 'Ремонт подвески',
          uz: 'Turtgan joylarini to\'g\'irlash'
        },
        {
          en: 'Paint Work',
          ru: 'Покрасочные работы',
          uz: 'Bo\'yash ishlari'
        },
        {
          en: 'Panel Replacement',
          ru: 'Замена панелей',
          uz: 'Panel Almashtirish'
        }
      ]
    },
    engineRepair: {
      title: {
        en: 'Engine Repair',
        ru: 'Ремонт Двигателя',
        uz: 'Dvigatel Ta\'mirlash'
      },
      description: {
        en: 'Engine diagnostics and repair services',
        ru: 'Диагностика и ремонт двигателя',
        uz: 'To\'liq dvigatel diagnostikasi va ta\'mirlash yechimlari'
      },
      services: [
        {
          en: 'Engine Diagnostics',
          ru: 'Диагностика двигателя',
          uz: 'Dvigatel Diagnostikasi'
        },
        {
          en: 'Fuel System Cleaning',
          ru: 'Чистка топливной системы',
          uz: 'Yoqilg\'i qismlarini Almashtirish'
        },
        {
          en: 'Engine Overhaul',
          ru: 'Капитальный ремонт двигателя',
          uz: 'Dvigatelni Sozlash'
        }
      ]
    },
    electricalDiagnostics: {
      title: {
        en: 'Electrical Diagnostics',
        ru: 'Электрическая Диагностика',
        uz: 'Elektrik Diagnostikasi'
      },
      description: {
        en: 'Modern electronic systems diagnostics and repair',
        ru: 'Диагностика и ремонт современных электронных систем',
        uz: 'Zamonaviy elektr tizimlarini diagnostikasi va ta\'mirlash'
      },
      services: [
        {
          en: 'Computer Diagnostics',
          ru: 'Компьютерная диагностика',
          uz: 'Tizim Tekshiruvi'
        },
        {
          en: 'Cable Replacement',
          ru: 'Замена кабелей',
          uz: 'Kabel Tamirlash'
        },
        {
          en: 'Battery Service',
          ru: 'Обслуживание аккумулятора',
          uz: 'Akkumulyator Xizmati'
        }
      ]
    },
    vacuumSystems: {
      title: {
        en: 'Paintless Dent Repair',
        ru: 'Мастер по ремонту кузова',
        uz: 'Kuzov qismlarini  ta’mirlash'
      },
      description: {
        en: 'Professional vacuum system repair services',
        ru: 'Профессиональные услуги по ремонту вакуумных систем',
        uz: 'Vakum tizimlarini professional ta\'mirlash'
      },
      services: [
        {
          en: 'Smoothing deep and scratched areas',
          ru: 'Выравнивание углублений и царапин',
          uz: 'Chuqur va tirnalgan joylarni tekislash'
        },
        {
          en: 'Paint Work',
          ru: 'Покрасочные работы',
          uz: 'Bo\'yash ishlari'
        },
        {
          en: 'Anti-corrosion treatment',
          ru: 'Антикоррозионная обработка',
          uz: 'Korroziyaga qarshi ishlov berish'
        }
      ]
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (!isHomePage) {
      window.location.href = '/#contact';
      return;
    }
    
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V9h2v2h2v2h-2v4zm3-8h-6V7h6v2z"/>
        </svg>
      ),
      image: Kuzov,
      title: translations.carRepair.title[language],
      description: translations.carRepair.description[language],
      services: translations.carRepair.services.map(service => service[language])
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.01 2.01 0 0 0 15.74 1H12v2h3.74l1.19 5.23A4.68 4.68 0 0 0 15 7.5V5H9v2.5c0 .85.35 1.61.92 2.16l-3.58 3.58L7.82 16zm12.18 3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-3h2v3h12v-3h2v3z"/>
        </svg>
      ),
      image: Dvigatel,
      title: translations.engineRepair.title[language],
      description: translations.engineRepair.description[language],
      services: translations.engineRepair.services.map(service => service[language])
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14.83L12 9.83l5 5V12h2v8h-2v-2H7z M12 3l-1.41 1.41L16.17 10H4v2h12.17l-5.58 5.59L12 19l8-8z"/>
        </svg>
      ),
      image: Elektrik,
      title: translations.electricalDiagnostics.title[language],
      description: translations.electricalDiagnostics.description[language],
      services: translations.electricalDiagnostics.services.map(service => service[language])
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10h-2v2h2v-2zm0-6h-2v4h2V6z"/>
        </svg>
      ),
      image: Vakum,
      title: translations.vacuumSystems.title[language],
      description: translations.vacuumSystems.description[language],
      services: translations.vacuumSystems.services.map(service => service[language])
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">{translations.title[language]}</h2>
          <p className="services-subtitle">{translations.subtitle[language]}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-image-overlay"></div>
              </div>
              <div className="service-content">
                <div className="service-card-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.services.map((item, i) => (
                    <div className="service-feature" key={i}>
                      <span className="service-check-icon">✓</span>
                      <span className="service-feature-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <a href="#contact" className="services-learn-more" onClick={scrollToContact}>
            {translations.learnMore[language]}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="arrow-icon">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
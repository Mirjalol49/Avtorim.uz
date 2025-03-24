import React from 'react';
import './WhyUs.css';
import { GiAutoRepair, GiCarWheel } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useLanguage } from '../../../hooks/useLanguage';

const WhyUs = () => {
  const { language } = useLanguage();
  
  const translations = {
    whyUs: {
      title: {
        en: "Why Choose Us",
        ru: "Почему Выбирают Нас",
        uz: "Nega Aynan Biz"
      },
      subtitle: {
        en: "We're committed to excellence in auto service and repair",
        ru: "Мы стремимся к совершенству в автосервисе и ремонте",
        uz: "Avtomobil xizmati va ta'mirlashda mukammallikka intilamiz"
      },
      experience: {
        en: "Chinese Experts",
        ru: "Китайские специалисты",
        uz: "Xitoylik Mutaxassislar"
      },
      experienceDesc: {
        en: "Our experienced Chinese specialists work with modern technologies and equipment.",
        ru: "Наши опытные китайские специалисты работают с современными технологиями и оборудованием.",
        uz: "Tajribali xitoylik mutaxassislarimiz zamonaviy texnologiyalar va uskunalar bilan ishlaydi"
      },


      qualityService: {
        en: "Express Delivery",
        ru: "Быстрая доставка",
        uz: "Tezkor Yetkazib Berish"
      },
      qualityServiceDesc: {
        en: "We will deliver spare parts from China in the shortest possible time",
        ru: "Мы доставляем запчасти из Китая в кратчайшие сроки.",
        uz: "Xitoydan ehtiyot qismlarni eng qisqa muddatda yetkazib beramiz"
      },

      quality1: {
        en: "Within 7-14 days",
        ru: "В течение 7-14 дней",
        uz: "7-14 kun ichida"
      },
      
      quality2: {
        en: "Direct import",
        ru: "Прямой импорт",
        uz: "To'g'ridan-to'g'ri import"
      },

            
      quality3: {
        en: "Direct delivery",
        ru: "Надежная логистика",
        uz: "Ishonchli logistika"
      },

      equipment: {
        en: "Original Spare Parts",
        ru: "Оригинальные Запасные",
        uz: "Original Ehtiyot Qismlar"
      },
      equipmentDesc: {
        en: "We import original spare parts directly from China.",
        ru: "Мы импортируем оригинальные запчасти напрямую из Китая.",
        uz: "Xitoydan to'g'ridan-to'g'ri original ehtiyot qismlarni import qilamiz"
      },

      pricing: {
        en: "Competitive Pricing",
        ru: "Конкурентные Цены",
        uz: "Hamyonbop Narxlar",
      },
      pricingDesc: {
        en: "Due to direct imports, we offer the lowest prices in the market.",
        ru: "Благодаря прямому импорту мы предлагаем самые низкие цены на рынке.",
        uz: "To'g'ridan-to'g'ri import tufayli bozordagi eng arzon narxlarni taklif qilamiz"
      }
      ,

      pricing1: {
        en: "Competitive prices",
        ru: "Конкурентоспособные цены",
        uz: "Raqobatbardosh narxlar"
      },
      
      pricing2: {
        en: "Discount system",
        ru: "Система скидок",
        uz: "Chegirmalar tizimi"
      },

      pricing3: {
        en: "Flexible payment options",
        ru: "Гибкие способы оплаты",
        uz: "Ixtiyoriy to'lov usullari"
      },
    }
  };

  return (
    <section className="why-us" id="whyus">
      <div className="container">
        <div className="why-us-header">
          <span className="why-us-badge">{translations.whyUs.title[language]}</span>
          <h2 className="why-us-title">{translations.whyUs.title[language]}</h2>
          <p className="why-us-subtitle">
            {translations.whyUs.subtitle[language]}
          </p>
        </div>

        <div className="why-us-grid">
          <div className="why-us-card">
            <div className="card-icon">
              <GiAutoRepair />
            </div>
            <h3 className="card-title">{translations.whyUs.experience[language]}</h3>
            <p className="card-description">
              {translations.whyUs.experienceDesc[language]}
            </p>
            <ul className="card-features">
              <li>{translations.whyUs.experience[language]}</li>
              <li>{translations.whyUs.equipment[language]}</li>
              <li>{translations.whyUs.qualityService[language]}</li>
            </ul>
          </div>

          <div className="why-us-card">
            <div className="card-icon">
              <GiCarWheel />
            </div>
            <h3 className="card-title">{translations.whyUs.equipment[language]}</h3>
            <p className="card-description">
              {translations.whyUs.equipmentDesc[language]}
            </p>
            <ul className="card-features">
              <li>{translations.whyUs.qualityService[language]}</li>
              <li>{translations.whyUs.equipment[language]}</li>
              <li>{translations.whyUs.pricing[language]}</li>
            </ul>
          </div>

          <div className="why-us-card">
            <div className="card-icon">
              <TbTruckDelivery />
            </div>
            <h3 className="card-title">{translations.whyUs.qualityService[language]}</h3>
            <p className="card-description">
              {translations.whyUs.qualityServiceDesc[language]}
            </p>
            <ul className="card-features">
              <li>{translations.whyUs.quality1[language]}</li>
              <li>{translations.whyUs.quality2[language]}</li>
              <li>{translations.whyUs.quality3[language]}</li>
            </ul>
          </div>

          <div className="why-us-card">
            <div className="card-icon">
              <RiMoneyDollarCircleLine />
            </div>
            <h3 className="card-title">{translations.whyUs.pricing[language]}</h3> 
            <p className="card-description">
              {translations.whyUs.pricingDesc[language]}
            </p>
            <ul className="card-features">
              <li>{translations.whyUs.pricing1[language]}</li>
              <li>{translations.whyUs.pricing2[language]}</li>
              <li>{translations.whyUs.pricing3[language]}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 
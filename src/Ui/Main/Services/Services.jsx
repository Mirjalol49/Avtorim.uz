import React from 'react';
import './Service.css';
import { FaCar, FaCogs, FaBolt, FaWind } from 'react-icons/fa';

import Kuzov from "../../../assets/Images/1one.webp";
import Dvigatel from "../../../assets/Images/2one.jpeg";
import Elektrik from "../../../assets/Images/3.png";
import Vakum from "../../../assets/Images/4.png";

const Services = () => {
  const services = [
    {
      icon: <FaCar />,
      image: Kuzov,
      title: "Avtomobil Ta'mirlash",
      description: "Avtomobilning barcha xususiyatlari va texnik xizmatlarini ta'mirlash",
      features: [
        "Turtgan joylarini to'g'irlash",
        "Bo'yash ishlari",
        "Panel Almashtirish"
      ]
    },
    {
      icon: <FaCogs />,
      image: Dvigatel,
      title: "Dvigatel Ta'mirlash",
      description: "To'liq dvigatel diagnostikasi va ta'mirlash yechimlari",
      features: [
        "Dvigatel Diagnostikasi",
        "Ehtiyoj qismlarini Almashtirish",
        "Dvigatelni Sozlash"
      ]
    },
    {
      icon: <FaBolt />,
      image: Elektrik,
      title: "Elektrik Diagnostikasi",
      description: "Zamonaviy elektr tizimlarini diagnostikasi va ta'mirlash",
      features: [
        "Tizim Tekshiruvi",
        "Kabel Tamirlash",
        "Akkumulyator Xizmati"
      ]
    },
    {
      icon: <FaWind />,
      image: Vakum,
      title: "Vakum Tizimlari",
      description: "Vakum tizimlarini professional ta'mirlash",
      features: [
        "Turtgan joylarini to'g'irlash",
        "Bo'yash ishlari",
        "Panel Almashtirish"
      ]
    }
  ];

  return (
    <section className='services' id="services">
      <div className='container'>
        <h2 className='services-title'>Bizning Xizmatlar</h2>
        <p className='services-subtitle'>Avtomobilingizning ravon va xavfsiz yurishini ta'minlash uchun biz mutaxassis avtomobil ta'mirlash va texnik xizmat ko'rsatish xizmatlarini taqdim etamiz.</p>
        <div className='services-list'>
          {services.map((service, index) => (
            <div key={index} className='services-item'>
              <img className='services-item-image' src={service.image} alt={service.title} />
              <div className='services-item-content'>
                <div className='services-item-icon'>{service.icon}</div>
                <h3 className='services-item-title'>{service.title}</h3>
                <p className='services-item-description'>{service.description}</p>
                <ul className='services-item-features'>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className='services-item-feature'>✅ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
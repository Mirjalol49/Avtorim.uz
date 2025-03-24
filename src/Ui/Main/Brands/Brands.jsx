import React from 'react'

import BYD from '../../../assets/Images/byd.svg'
import Li from '../../../assets/Images/li.png'
import Chevrolet from '../../../assets/Images/chevroletc.png'
import Zikr from '../../../assets/Images/zikr.png'
import Jetour from '../../../assets/Images/jetour.png'
import { useLanguage } from '../../../hooks/useLanguage';

import './Brands.css'



const Brands = () => {
  const { language } = useLanguage();
  
  const translations = {
  
    BrandsTitle: {
      en: 'Reliable partners',
      ru: 'Надежные партнеры',
      uz: 'Ishonchli hamkorlarimiz'
    },

    BrandsSubtitle: {
      en: 'Working with leading car brands',
      ru: 'Работа с ведущими автомобильными брендами',
      uz: 'Yetakchi avtomobil brendlari bilan hamkorlikda ishlash'
    },

  }

  return (
    <section className='brands-section'>
      <div className="container">
        <div className="brands-wrapper">
          <h2 className='brands-title'>{translations.BrandsTitle[language]}</h2>
          <p className="brands-subtitle">{translations.BrandsSubtitle[language]}</p>
          
          <div className="brands-grid">
            {[
              { img: BYD, name: "BYD" },
              { img: Chevrolet, name: "Chevrolet" },
              { img: Li, name: "Li Auto" },
              { img: Zikr, name: "Zikr" },
              { img: Jetour, name: "Jetour" }
            ].map((brand, index) => (
              <div key={index} className="brand-card">
                <img 
                  className='brand-logo' 
                  src={brand.img} 
                  alt={`${brand.name} logo`}
                  loading="lazy"
                />
                <span className="brand-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands

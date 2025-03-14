import React from 'react'

import BYD from '../../../assets/Images/byd.svg'
import Li from '../../../assets/Images/li.png'
import Chevrolet from '../../../assets/Images/chevroletc.png'
import Zikr from '../../../assets/Images/zikr.png'
import Jetour from '../../../assets/Images/jetour.png'

import './Brands.css'

const Brands = () => {
  return (
    <section className='brands-section'>
      <div className="container">
        <div className="brands-wrapper">
          <h2 className='brands-title'>Ishonchli hamkorlarimiz</h2>
          <p className="brands-subtitle">Yetakchi avtomobil brendlari bilan hamkorlikda ishlash</p>
          
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

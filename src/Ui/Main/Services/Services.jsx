import React from 'react'
import './Service.css'

import Kuzov from "../../../assets/Images/1one.webp" 
import Dvigatel from "../../../assets/Images/2one.jpeg"
import Elektrik from "../../../assets/Images/3.png"
import Vakum from "../../../assets/Images/4.png"
const Services = () => {
  return (
    <section className='services' id="services">
      <div className='container'>
        <h2 className='services-title'>Bizning Xizmatlar</h2>
        <p className='services-subtitle'>Avtomobilingizning ravon va xavfsiz yurishini ta’minlash uchun biz mutaxassis avtomobil ta’mirlash va texnik xizmat ko‘rsatish xizmatlarini taqdim etamiz.</p>
        <ul className='services-list'>
          <li className='services-item'>
            <img className='services-item-image' src={Kuzov} alt="Kuzov" />
            <div className='services-item-wrapper'>
              <h3 className='services-item-title'>Avtomobil Ta’mirlash</h3>
              <p className='services-item-description'>Avtomobilning barcha xususiyatlari va texnik xizmatlarini ta’mirlash</p>
              <p className='services-item-list-item'>✅ Turtgan joylarini to'g'irlash</p>
              <p className='services-item-list-item'>✅ Bo'yash ishlari</p> 
              <p className='services-item-list-item'>✅ Panel Almashtirish</p> 
            </div>
            </li>

            <li className='services-item'>
            <img className='services-item-image' src={Dvigatel} alt="Kuzov" />
            <div className='services-item-wrapper'>
              <h3 className='services-item-title'>Dvigatel Ta’mirlash</h3>
              <p className='services-item-description'>To'liq dvigatel diagnostikasi va ta’mirlash yechimlari</p>
              <p className='services-item-list-item'>✅ Dvigatel Diagnostikasi</p>
              <p className='services-item-list-item'>✅ Ehtiyoj qismlarini Almashtirish</p> 
              <p className='services-item-list-item'>✅ Dvigatelni Sozlash</p> 
            </div>
            </li>


            <li className='services-item'>
            <img className='services-item-image' src={Elektrik} alt="Kuzov" />
            <div className='services-item-wrapper'>
              <h3 className='services-item-title'>Elektrik Diagnostikasi</h3>
              <p className='services-item-description'>Zamonaviy elektr tizimlarini diagnostikasi va ta’mirlash</p>
              <p className='services-item-list-item'>✅ Tizim Tekshiruvi</p>
              <p className='services-item-list-item'>✅ Kabel Tamirlash</p> 
              <p className='services-item-list-item'>✅ Akkumulyator Xizmati</p> 
            </div>
            </li>


            <li className='services-item'>
            <img className='services-item-image' src={Vakum} alt="Kuzov" />
            <div className='services-item-wrapper'>
              <h3 className='services-item-title'>Vakum Tizimlari</h3>
              <p className='services-item-description'>Vakum tizimlarini professional ta'mirlash</p>
              <p className='services-item-list-item'>✅ Turtgan joylarini to'g'irlash</p>
              <p className='services-item-list-item'>✅ Bo'yash ishlari</p> 
              <p className='services-item-list-item'>✅ Panel Almashtirish</p> 
            </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Services

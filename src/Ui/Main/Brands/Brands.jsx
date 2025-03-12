import React from 'react'
import Hyundai from '../../../assets/Images/hyundai.gif'
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
            <h2 className='brands-title'>Partners</h2>
            <div className="brands-marquee">
                <img className='brands-marquee-img' src={BYD} alt="BYD" />
                <img className='brands-marquee-img' src={Chevrolet} alt="BYD" />
                <img className='brands-marquee-img' src={Li} alt="BYD" />
                <img className='brands-marquee-img' src={Hyundai} alt="BYD" />
                <img className='brands-marquee-img' src={Zikr} alt="BYD" />
                <img className='brands-marquee-img' src={Jetour} alt="BYD" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Brands

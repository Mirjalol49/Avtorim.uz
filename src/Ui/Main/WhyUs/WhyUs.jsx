import React from 'react';
import './WhyUs.css';
import { GiAutoRepair, GiCarWheel } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const WhyUs = () => {
  return (
    <section className="why-us" id="whyus">
      <div className="container">
        <div className="why-us-header">
          <span className="why-us-badge">Nega Aynan Biz?</span>
          <h2 className="why-us-title">Bizni Tanlashingiz Uchun Sabablar</h2>
          <p className="why-us-subtitle">
            Professional xizmat va arzon narxlar bilan mijozlarimiz ishonchini oqlaymiz
          </p>
        </div>

        <div className="why-us-grid">
          <div className="why-us-card">
            <div className="card-icon">
              <GiAutoRepair />
            </div>
            <h3 className="card-title">Xitoylik Mutaxassislar</h3>
            <p className="card-description">
              Tajribali xitoylik mutaxassislarimiz zamonaviy texnologiyalar va uskunalar bilan ishlaydi
            </p>
            <ul className="card-features">
              <li>20+ yillik tajriba</li>
              <li>Zamonaviy texnologiyalar</li>
              <li>Professional diagnostika</li>
            </ul>
          </div>

          <div className="why-us-card">
            <div className="card-icon">
              <GiCarWheel />
            </div>
            <h3 className="card-title">Original Ehtiyot Qismlar</h3>
            <p className="card-description">
              Xitoydan to'g'ridan-to'g'ri original ehtiyot qismlarni import qilamiz
            </p>
            <ul className="card-features">
              <li>100% original qismlar</li>
              <li>Ishonchli yetkazib berish</li>
              <li>Kafolat xizmati</li>
            </ul>
          </div>

          <div className="why-us-card">
            <div className="card-icon">
              <TbTruckDelivery />
            </div>
            <h3 className="card-title">Tezkor Yetkazib Berish</h3>
            <p className="card-description">
              Xitoydan ehtiyot qismlarni eng qisqa muddatda yetkazib beramiz
            </p>
            <ul className="card-features">
              <li>7-14 kun ichida</li>
              <li>To'g'ridan-to'g'ri import</li>
              <li>Ishonchli logistika</li>
            </ul>
          </div>

          <div className="why-us-card">
            <div className="card-icon">
              <RiMoneyDollarCircleLine />
            </div>
            <h3 className="card-title">Hamyonbop Narxlar</h3>
            <p className="card-description">
              To'g'ridan-to'g'ri import tufayli bozordagi eng arzon narxlarni taklif qilamiz
            </p>
            <ul className="card-features">
              <li>Raqobatbardosh narxlar</li>
              <li>Chegirmalar tizimi</li>
              <li>Qulay to'lov usullari</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 
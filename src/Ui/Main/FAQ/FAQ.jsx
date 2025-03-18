import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Xizmat ko'rsatish qancha vaqt oladi?",
      answer: "Xizmat turi va muammoning murakkabligiga qarab 1-3 kun davom etadi. Aniq vaqtni diagnostika natijalariga ko'ra aytishimiz mumkin."
    },
    {
      question: "Qanday to'lov usullari mavjud?",
      answer: "Naqd pul, bank kartasi va pul o'tkazish orqali to'lovni amalga oshirishingiz mumkin. Shuningdek, bo'lib to'lash imkoniyati ham mavjud."
    },
    {
      question: "Ehtiyot qismlar originalmi?",
      answer: "Ha, biz faqat original va sertifikatlangan ehtiyot qismlardan foydalanamiz. Barcha qismlar kafolat bilan ta'minlanadi."
    },
    {
      question: "Oldindan yozilish kerakmi?",
      answer: "Ha, navbatlarni tartibga solish uchun oldindan yozilish tavsiya etiladi. Shoshilinch holatlar uchun tezkor xizmat ham mavjud."
    },
    {
      question: "Xizmatlaringizga kafolat berasizmi?",
      answer: "Ha, barcha xizmatlarimizga 6 oydan 1 yilgacha kafolat beramiz. Kafolat muddati xizmat turiga qarab belgilanadi."
    },
    {
      question: "Diagnostika pullikmi?",
      answer: "Dastlabki ko'rik bepul. Chuqurlashtirilgan diagnostika xizmati pullik, ammo keyinchalik ta'mirlash ishlarini bizda amalga oshirsangiz, diagnostika narxi umumiy summadan chegirma qilib beriladi."
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
         
          <h2 className="section-title">Sizni Qiziqtirgan Savollar</h2>
          <p className="section-description">
            Mijozlarimiz tomonidan eng ko'p beriladigan savollarga javoblar
          </p>
        </div>

        <div className="faq-grid">
          {faqItems.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Boshqa savollaringiz bormi?</p>
          <a href="#contact" className="button-6">Biz bilan bog'laning</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
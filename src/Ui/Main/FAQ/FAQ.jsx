import React, { useState } from 'react';
import './FAQ.css';
import Btn from '../../../Components/Button/Btn';
import { useLanguage } from '../../../hooks/useLanguage';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { language } = useLanguage();

  const translations = {
    title: {
      en: "Frequently Asked Questions",
      ru: "Часто Задаваемые Вопросы",
      uz: "Sizni Qiziqtirgan Savollar"
    },
    description: {
      en: "Answers to the most common questions from our customers",
      ru: "Ответы на самые распространенные вопросы от наших клиентов",
      uz: "Mijozlarimiz tomonidan eng ko'p beriladigan savollarga javoblar"
    },
    ctaText: {
      en: "Have more questions?",
      ru: "Остались вопросы?",
      uz: "Boshqa savollaringiz bormi?"
    },
    buttonText: {
      en: "Contact us",
      ru: "Свяжитесь с нами",
      uz: "Biz bilan bog'laning"
    },
    faqItems: [
      {
        question: {
          en: "How long does the service take?",
          ru: "Сколько времени занимает обслуживание?",
          uz: "Xizmat ko'rsatish qancha vaqt oladi?"
        },
        answer: {
          en: "Service usually takes 1-3 days depending on the type of service and complexity of the problem. We can give you a more precise timeframe after diagnostics.",
          ru: "Обслуживание обычно занимает 1-3 дня в зависимости от типа услуги и сложности проблемы. Мы можем предоставить более точные сроки после диагностики.",
          uz: "Xizmat turi va muammoning murakkabligiga qarab 1-3 kun davom etadi. Aniq vaqtni diagnostika natijalariga ko'ra aytishimiz mumkin."
        }
      },
      {
        question: {
          en: "What payment methods are available?",
          ru: "Какие способы оплаты доступны?",
          uz: "Qanday to'lov usullari mavjud?"
        },
        answer: {
          en: "You can pay with cash, bank card, or bank transfer. We also offer installment payment options.",
          ru: "Вы можете оплатить наличными, банковской картой или банковским переводом. Мы также предлагаем возможность оплаты в рассрочку.",
          uz: "Naqd pul, bank kartasi va pul o'tkazish orqali to'lovni amalga oshirishingiz mumkin. Shuningdek, bo'lib to'lash imkoniyati ham mavjud."
        }
      },
      {
        question: {
          en: "Are the spare parts original?",
          ru: "Оригинальные ли запасные части?",
          uz: "Ehtiyot qismlar originalmi?"
        },
        answer: {
          en: "Yes, we only use original and certified spare parts. All parts come with a warranty.",
          ru: "Да, мы используем только оригинальные и сертифицированные запчасти. Все детали поставляются с гарантией.",
          uz: "Ha, biz faqat original va sertifikatlangan ehtiyot qismlardan foydalanamiz. Barcha qismlar kafolat bilan ta'minlanadi."
        }
      },
      {
        question: {
          en: "Do I need to make an appointment?",
          ru: "Нужно ли записываться заранее?",
          uz: "Oldindan yozilish kerakmi?"
        },
        answer: {
          en: "Yes, we recommend making an appointment to ensure proper scheduling. We also offer urgent service for emergency cases.",
          ru: "Да, мы рекомендуем записываться заранее для обеспечения правильного планирования. Мы также предлагаем срочное обслуживание для экстренных случаев.",
          uz: "Ha, navbatlarni tartibga solish uchun oldindan yozilish tavsiya etiladi. Shoshilinch holatlar uchun tezkor xizmat ham mavjud."
        }
      },
      {
        question: {
          en: "Do you provide warranty on your services?",
          ru: "Предоставляете ли вы гарантию на свои услуги?",
          uz: "Xizmatlaringizga kafolat berasizmi?"
        },
        answer: {
          en: "Yes, we provide a 6-month to 1-year warranty on all our services, depending on the type of service.",
          ru: "Да, мы предоставляем гарантию от 6 месяцев до 1 года на все наши услуги, в зависимости от типа услуги.",
          uz: "Ha, barcha xizmatlarimizga 6 oydan 1 yilgacha kafolat beramiz. Kafolat muddati xizmat turiga qarab belgilanadi."
        }
      },
      {
        question: {
          en: "Is diagnostics service free?",
          ru: "Бесплатна ли диагностика?",
          uz: "Diagnostika pullikmi?"
        },
        answer: {
          en: "Initial inspection is free. In-depth diagnostics is paid, but if you proceed with repairs at our service center, the diagnostics fee will be deducted from the total cost.",
          ru: "Первичный осмотр бесплатный. Углубленная диагностика платная, но если вы продолжите ремонт в нашем сервисном центре, стоимость диагностики будет вычтена из общей стоимости.",
          uz: "Dastlabki ko'rik bepul. Chuqurlashtirilgan diagnostika xizmati pullik, ammo keyinchalik ta'mirlash ishlarini bizda amalga oshirsangiz, diagnostika narxi umumiy summadan chegirma qilib beriladi."
        }
      }
    ]
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">{translations.title[language]}</h2>
          <p className="section-description">
            {translations.description[language]}
          </p>
        </div>

        <div className="faq-grid">
          {translations.faqItems.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question[language]}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer[language]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>{translations.ctaText[language]}</p>
          <Btn text={translations.buttonText[language]} href="#contact" />
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
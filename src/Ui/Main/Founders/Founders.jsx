import React from 'react';
import './Founders.css';
import { useLanguage } from '../../../hooks/useLanguage';
import ceo from '../../../assets/Images/ceo.jpg';
import emp2 from '../../../assets/Images/investor.png';

const Founders = () => {
  const { language } = useLanguage();

  const translations = {
    badge: {
      en: "Leadership",
      ru: "Руководство",
      uz: "Rahbariyat"
    },
    title: {
      en: "Meet Our Leadership",
      ru: "Наше Руководство",
      uz: "Bizning Rahbariyatimiz"
    },
    subtitle: {
      en: "The visionaries behind Avtorim",
      ru: "Визионеры, стоящие за Avtorim",
      uz: "Avtorim ortidagi g'oyachilar"
    },
    founder: {
      name: "Saidolim Tojiboyev",
      position: {
        en: "Founder & Expert",
        ru: "Основатель и Эксперт",
        uz: "Asoschisi va Expert"
      },
      description: {
        en: "Having more than 15 years of experience in the automotive industry, Saidolim leads our company with vision and expertise. He founded Avtorim with a mission to provide quality Chinese auto parts and exceptional service.",
        ru: "Имея более 15 лет опыта в автомобильной индустрии, Саидолим руководит нашей компанией с видением и экспертизой. Он основал Avtorim с миссией предоставлять качественные китайские автозапчасти и исключительный сервис.",
        uz: `Avtomobil sanoatida 15 yildan ortiq tajribaga ega Saidolim kompaniyamizni uzoqni ko‘ra oladigan va tajribali rahbar sifatida boshqarib kelmoqda. U sifatli Xitoy avtomobil ehtiyot qismlari va ajoyib xizmat ko‘rsatish missiyasi bilan Avtorim kompaniyasiga asos solgan.`
      },
      quote: {
        en: "Quality parts and exceptional service are at the heart of everything we do.",
        ru: "Качественные запчасти и исключительный сервис — в основе всего, что мы делаем.",
        uz: "Sifatli qismlar va ajoyib xizmat — biz qiladigan hamma narsaning asosida."
      }
    },
    investor: {
      name: "Ali Ibrahim Al-Marshoud",
      position: {
        en: "Lead Investor",
        ru: "Ведущий инвестор",
        uz: "Yetakchi sarmoyador"
      },
      description: {
        en: `A Kuwaiti investor who Obtained a mechanical engineering degree in 2006 from Philadelphia University, Jordan.
And a company manager
"ALI ALMARSHOUD AUTO PARTS" MCHJ`,
        ru: `Кувейтский инвестор, получивший степень инженера-механиста в 2006 году в Филадельфийском университете, Иордания.
А менеджер компании
ООО "ALI ALMARSHOUD AUTO PARTS"`,
        uz: `Quvaytlik investor, 2006-yilda Iordaniyaning Filadelfiya universitetida muhandislik darajasini olgan.
Kompaniya boshqaruvchisi
"ALI ALMARSHOUD AUTO PARTS" MCHJ`
      },
      quote: {
        en: "Investing in quality and expertise creates value for our customers and community.",
        ru: "Инвестиции в качество и экспертизу создают ценность для наших клиентов и сообщества.",
        uz: "Sifat va tajribaga investitsiya qilish mijozlarimiz va jamiyatimiz uchun qiymat yaratadi."
      }
    }
  };

  return (
    <section id="founders" className="founders-section">
      <div className="container">
        <div className="founders-header">
          <span className="founders-badge">{translations.badge[language]}</span>
          <h2 className="founders-title">{translations.title[language]}</h2>
          <p className="founders-subtitle">
            {translations.subtitle[language]}
          </p>
        </div>

        <div className="leadership-container">
          {/* Founder Section */}
          <div className="leadership-card founder-card">
            <div className="leadership-role">
              <span className="role-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
                <span className="role-text">{translations.founder.position[language]}</span>
              </span>
            </div>
            <div className="leadership-content">
              <div className="leadership-image-container">
                <img 
                  src={ceo}
                  alt={translations.founder.name} 
                  className="leadership-image"
                />
              </div>
              <div className="leadership-details">
                <h3 className="leadership-name">{translations.founder.name}</h3>
                <div 
                  className="leadership-description"
                  dangerouslySetInnerHTML={{
                    __html: language === 'uz' ? `
                      <p style="font-size: 1.1rem; margin-bottom: 15px; line-height: 1.6;">Sayidolim – 15 yildan ortiq avtomobilsozlik tajribasiga ega mutaxassis.</p>
                      
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">U xalqaro tajribaga (Rossiya, Koreya) ega bo'lib, avtomobil salon dizayni bo'yicha sertifikatga ega.</p>
                      
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">Xitoy avtomobil ehtiyot qismlarini yetkazib berish va mijozlarga yuqori sifatli xizmat ko'rsatish maqsadida AVTORIM kompaniyasini asos solgan.</p>
                      
                      <p style="font-size: 1.05rem; margin-bottom: 20px; line-height: 1.6;">Hozirda Xitoyda faoliyat yuritmoqda.</p>
                      
                      <p style="font-size: 1.15rem; font-weight: 600; margin-bottom: 15px; color: #3366cc;">Asosiy yo'nalishlari:</p>
                      
                      <div style="margin-left: 15px; margin-bottom: 25px;">
                        <p style="font-size: 1.05rem; margin-bottom: 12px; line-height: 1.5;">🚗 Xitoy avtomobil qismlariga ixtisoslashgan</p>
                        
                        <p style="font-size: 1.05rem; margin-bottom: 12px; line-height: 1.5;">🌍 Xalqaro tajriba (Rossiya, Koreya)</p>
                        
                        <p style="font-size: 1.05rem; margin-bottom: 12px; line-height: 1.5;">🏆 Avtomobil salon dizayni bo'yicha sertifikat</p>
                        
                        <p style="font-size: 1.05rem; margin-bottom: 12px; line-height: 1.5;">🇨🇳 Hozirda Xitoyda ishlaydi</p>
                      </div>
                      
                      <p style="font-size: 1.05rem; font-weight: 500; margin-top: 5px;">📱 Bog'lanish: <a href="https://www.instagram.com/sayidoliim/" target="_blank" style="color: #3366cc; font-weight: 600; text-decoration: none;">@Sayidoliim</a></p>
                    ` : language === 'ru' ? `
                      <p style="font-size: 1.05rem; line-height: 1.6;">Имея более 15 лет опыта в автомобильной индустрии, Джахонгир руководит нашей компанией с видением и экспертизой. Он основал Avtorim с миссией предоставлять качественные китайские автозапчасти и исключительный сервис.</p>
                    ` : `
                      <p style="font-size: 1.05rem; line-height: 1.6;">With over 15 years of experience in the automotive industry, Saidolim leads our company with vision and expertise. He founded Avtorim with a mission to provide quality Chinese auto parts and exceptional service.</p>
                    `
                  }}
                />
                <div className="leadership-quote">
                  <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                  <p>{translations.founder.quote[language]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investor Section */}
          <div className="leadership-card investor-card">
            <div className="leadership-role">
              <span className="role-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12Z" fill="currentColor"/>
                </svg>
                <span className="role-text">{translations.investor.position[language]}</span>
              </span>
            </div>
            <div className="leadership-content">
              <div className="leadership-image-container">
                <img 
                  src={emp2}
                  alt={translations.investor.name} 
                  className="leadership-image"
                />
              </div>
              <div className="leadership-details">
                <h3 className="leadership-name">{translations.investor.name}</h3>
                <div 
                  className="leadership-description"
                  dangerouslySetInnerHTML={{
                    __html: language === 'uz' ? `
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">Quvaytlik investor, 2006-yilda Iordaniyaning Filadelfiya universitetida muhandislik darajasini olgan.</p>
                      
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">Kompaniya boshqaruvchisi</p>
                      
                      <p style="font-size: 1.1rem; font-weight: 600; color: #3366cc; margin-bottom: 15px;">"ALI ALMARSHOUD AUTO PARTS" MCHJ</p>
                    ` : language === 'ru' ? `
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">Кувейтский инвестор, получивший степень инженера-механиста в 2006 году в Филадельфийском университете, Иордания.</p>
                      
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">А менеджер компании</p>
                      
                      <p style="font-size: 1.1rem; font-weight: 600; color: #3366cc; margin-bottom: 15px;">ООО "ALI ALMARSHOUD AUTO PARTS"</p>
                    ` : `
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">A Kuwaiti investor who Obtained a mechanical engineering degree in 2006 from Philadelphia University, Jordan.</p>
                      
                      <p style="font-size: 1.05rem; margin-bottom: 15px; line-height: 1.6;">And a company manager</p>
                      
                      <p style="font-size: 1.1rem; font-weight: 600; color: #3366cc; margin-bottom: 15px;">"ALI ALMARSHOUD AUTO PARTS" MCHJ</p>
                    `
                  }}
                />
                <div className="leadership-quote">
                  <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                  <p>{translations.investor.quote[language]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders; 
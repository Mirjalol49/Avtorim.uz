import { useState } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import "./Video.css";

const VideoNewsSection = () => {
  const { language } = useLanguage();
  
  const translations = {
    title: {
      en: "🚘 Auto Repair News",
      ru: "🚘 Новости Авторемонта",
      uz: "🚘 Avtomobil Ta'mirlash Yangiliklari"
    },
    subtitle: {
      en: "Video information about the latest auto repair methods and technologies",
      ru: "Видеоинформация о новейших методах и технологиях авторемонта",
      uz: "Eng so'nggi avtomobil ta'mirlash usullari va texnologiyalari haqida video ma'lumotlar"
    },
    videos: [
      {
        id: 1,
        title: {
          en: "Car Diagnostics",
          ru: "Диагностика Автомобиля",
          uz: "Avtomobil Diagnostikasi"
        },
        description: {
          en: "Identifying and resolving car issues with modern equipment",
          ru: "Выявление и устранение неисправностей автомобиля с помощью современного оборудования",
          uz: "Zamonaviy uskunalar yordamida avtomobil nosozliklarini aniqlash va bartaraf etish"
        },
        url: "https://player.vimeo.com/video/1066830215?h=f9f593c1dc&controls=1&title=0&byline=0&portrait=0",
      },
      {
        id: 2,
        title: {
          en: "Electric Car Repair",
          ru: "Ремонт Электромобилей",
          uz: "Elektr Avtomobil Ta'mirlash"
        },
        description: {
          en: "Special services for electric cars and battery replacement advice",
          ru: "Специальные услуги для электромобилей и советы по замене аккумуляторов",
          uz: "Elektr avtomobillar uchun maxsus xizmatlar va batareya almashtirish bo'yicha maslahatlar"
        },
        url: "https://player.vimeo.com/video/1066830147?h=5a7ca179ee&controls=1&title=0&byline=0&portrait=0",
      },
      {
        id: 3,
        title: {
          en: "Electric Car Maintenance",
          ru: "Обслуживание Электромобилей",
          uz: "Elektr Avtomobil Ta'mirlash"
        },
        description: {
          en: "Special services for electric cars and battery maintenance tips",
          ru: "Специальные услуги для электромобилей и советы по обслуживанию аккумуляторов",
          uz: "Elektr avtomobillar uchun maxsus xizmatlar va batareya almashtirish bo'yicha maslahatlar"
        },
        url: "https://player.vimeo.com/video/1066830240?h=10294929cb",
      },
      // {
      //   id: 4,
      //   title: {
      //     en: "Brake System Check",
      //     ru: "Проверка Тормозной Системы",
      //     uz: "Tormoz Tizimini Tekshirish"
      //   },
      //   description: {
      //     en: "Our specialists explain the process of checking and repairing brake systems",
      //     ru: "Наши специалисты объясняют процесс проверки и ремонта тормозных систем",
      //     uz: "Mutaxassislarimiz tormoz tizimini tekshirish va ta'mirlash jarayonini tushuntiradilar"
      //   },
      //   url: "https://player.vimeo.com/video/1066830117?h=ecdc03ff46",
      // },
    ]
  };

  return (
    <section className="video-section">
      <div className="container">
        <div className="video-header">
          <h2 className="video-title">{translations.title[language]}</h2>
          <p className="video-subtitle">
            {translations.subtitle[language]}
          </p>
        </div>

        <div className="video-grid">
          {translations.videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-frame">
                <iframe
                  src={video.url}
                  frameBorder="0"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title[language]}
                ></iframe>
              </div>
              <div className="video-content">
                <h3 className="video-card-title">{video.title[language]}</h3>
                <p className="video-card-description">{video.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoNewsSection;
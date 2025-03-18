import { useState } from "react";
import "./Video.css";

const VideoNewsSection = () => {
  const [videos] = useState([
    {
      id: 1,
      title: "Avtomobil Diagnostikasi",
      description: "Zamonaviy uskunalar yordamida avtomobil nosozliklarini aniqlash va bartaraf etish.",
      url: "https://player.vimeo.com/video/1066830215?h=f9f593c1dc&controls=1&title=0&byline=0&portrait=0",
    },
    {
      id: 2,
      title: "Elektr Avtomobil Ta'mirlash",
      description: "Elektr avtomobillar uchun maxsus xizmatlar va batareya almashtirish bo'yicha maslahatlar.",
      url: "https://player.vimeo.com/video/1066830147?h=5a7ca179ee&controls=1&title=0&byline=0&portrait=0",
    },
    {
      id: 3,
      title: "Elektr Avtomobil Ta'mirlash",
      description: "Elektr avtomobillar uchun maxsus xizmatlar va batareya almashtirish bo'yicha maslahatlar.",
      url: "https://player.vimeo.com/video/1066830240?h=10294929cb",
    },
    {
      id: 4,
      title: "Tormoz Tizimini Tekshirish",
      description: "Mutaxassislarimiz tormoz tizimini tekshirish va ta'mirlash jarayonini tushuntiradilar.",
      url: "https://player.vimeo.com/video/1066830117?h=ecdc03ff46",
    },
  ]);

  return (
    <section className="video-section">
      <div className="container">
        <div className="video-header">
          <h2 className="video-title">🚘 Avtomobil Ta'mirlash Yangiliklari</h2>
          <p className="video-subtitle">
            Eng so'nggi avtomobil ta'mirlash usullari va texnologiyalari haqida video ma'lumotlar
          </p>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-frame">
                <iframe
                  src={video.url}
                  frameBorder="0"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                ></iframe>
              </div>
              <div className="video-content">
                <h3 className="video-card-title">{video.title}</h3>
                <p className="video-card-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoNewsSection;
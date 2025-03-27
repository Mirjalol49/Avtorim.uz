import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import './News.css';

// Sample news data - in a real app, this would come from an API
const sampleNewsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/800x500',
    date: '2023-06-15',
    title: {
      en: 'New Auto Parts Shipment Has Arrived',
      ru: 'Прибыла новая партия автозапчастей',
      uz: 'Yangi avtomobil ehtiyot qismlari keldi'
    },
    summary: {
      en: 'We have received a large shipment of auto parts from China, including parts for popular models like Chery Tiggo, Haval and Geely.',
      ru: 'Мы получили большую партию автозапчастей из Китая, включая детали для популярных моделей, таких как Chery Tiggo, Haval и Geely.',
      uz: 'Xitoydan katta avtomobil ehtiyot qismlari yukini qabul qilib oldik, jumladan, Chery Tiggo, Haval va Geely kabi mashhur modellar uchun qismlar.'
    },
    content: {
      en: '<p>We are excited to announce that our latest shipment of auto parts has arrived from China. This shipment includes a wide range of parts for popular Chinese vehicle models including Chery Tiggo, Haval, and Geely.</p><p>The new inventory includes brake pads, air filters, oil filters, suspension components, and much more. All parts are of the highest quality and come with a warranty.</p><p>Visit our shop to see the full range of new products or contact us for specific parts.</p>',
      ru: '<p>Мы рады сообщить, что наша последняя партия автозапчастей прибыла из Китая. Эта поставка включает широкий ассортимент запчастей для популярных китайских автомобилей, включая Chery Tiggo, Haval и Geely.</p><p>Новый ассортимент включает тормозные колодки, воздушные фильтры, масляные фильтры, компоненты подвески и многое другое. Все детали высочайшего качества и поставляются с гарантией.</p><p>Посетите наш магазин, чтобы увидеть полный ассортимент новых товаров, или свяжитесь с нами для получения конкретных деталей.</p>',
      uz: '<p>Biz Xitoydan eng so\'nggi avtomobil ehtiyot qismlari yukimiz kelganini ma\'lum qilishdan mamnunmiz. Ushbu yuk Chery Tiggo, Haval va Geely kabi mashhur xitoy avtomobil modellari uchun keng turdagi qismlarni o\'z ichiga oladi.</p><p>Yangi inventar tormoz kolodkalari, havo filtrlari, moy filtrlari, suspenziya komponentlari va boshqa ko\'p narsalarni o\'z ichiga oladi. Barcha qismlar eng yuqori sifatga ega va kafolat bilan birga keladi.</p><p>Yangi mahsulotlarning to\'liq assortimentini ko\'rish uchun do\'konimizga tashrif buyuring yoki ma\'lum qismlar uchun biz bilan bog\'laning.</p>'
    }
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/800x500',
    date: '2023-05-20',
    title: {
      en: 'Expanded Service Center Now Open',
      ru: 'Открыт расширенный сервисный центр',
      uz: 'Kengaytirilgan xizmat markazi endi ochiq'
    },
    summary: {
      en: 'We have expanded our service center to better serve our customers with more service bays and specialized equipment.',
      ru: 'Мы расширили наш сервисный центр, чтобы лучше обслуживать наших клиентов с большим количеством сервисных отсеков и специализированного оборудования.',
      uz: 'Biz mijozlarimizga ko\'proq xizmat ko\'rsatish joylari va maxsus uskunalar bilan yaxshiroq xizmat ko\'rsatish uchun xizmat markazimizni kengaytirdik.'
    },
    content: {
      en: '<p>We are proud to announce the opening of our expanded service center. The new facility features additional service bays, state-of-the-art diagnostic equipment, and a comfortable waiting area for our customers.</p><p>Our expansion allows us to service more vehicles simultaneously, reducing wait times and improving efficiency. We\'ve also added specialized equipment for Chinese vehicles, making us the premier service center for Chinese auto brands in the region.</p><p>Visit us today to experience our improved service offerings.</p>',
      ru: '<p>Мы с гордостью объявляем об открытии нашего расширенного сервисного центра. Новый объект включает дополнительные сервисные отсеки, современное диагностическое оборудование и комфортабельную зону ожидания для наших клиентов.</p><p>Наше расширение позволяет нам обслуживать больше автомобилей одновременно, сокращая время ожидания и повышая эффективность. Мы также добавили специализированное оборудование для китайских автомобилей, что делает нас лучшим сервисным центром для китайских автомобильных марок в регионе.</p><p>Посетите нас сегодня, чтобы ощутить наши улучшенные предложения услуг.</p>',
      uz: '<p>Biz kengaytirilgan xizmat markazimizning ochilishini ma\'lum qilishdan faxrlanamiz. Yangi obyektda qo\'shimcha xizmat ko\'rsatish joylari, zamonaviy diagnostika uskunalari va mijozlarimiz uchun qulay kutish joyi mavjud.</p><p>Bizning kengaytirish bir vaqtning o\'zida ko\'proq avtomobillarga xizmat ko\'rsatish, kutish vaqtini qisqartirish va samaradorlikni oshirish imkonini beradi. Shuningdek, biz xitoy avtomobillari uchun maxsus jihozlarni qo\'shdik, bu bizni mintaqada xitoy avtomobil brendlari uchun etakchi xizmat markaziga aylantiradi.</p><p>Bizning yaxshilangan xizmatlarimizni his qilish uchun bugun bizni ziyorat qiling.</p>'
    }
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/800x500',
    date: '2023-04-10',
    title: {
      en: 'New Direct Import Partnership with Chinese Manufacturers',
      ru: 'Новое партнерство по прямому импорту с китайскими производителями',
      uz: 'Xitoy ishlab chiqaruvchilari bilan yangi to\'g\'ridan-to\'g\'ri import hamkorligi'
    },
    summary: {
      en: 'We have established direct partnerships with leading Chinese auto parts manufacturers to provide better prices and faster delivery times.',
      ru: 'Мы установили прямые партнерские отношения с ведущими китайскими производителями автозапчастей, чтобы обеспечить лучшие цены и более быстрые сроки доставки.',
      uz: 'Yaxshiroq narxlar va tezroq etkazib berish muddatlarini ta\'minlash uchun etakchi Xitoy avtomobil ehtiyot qismlari ishlab chiqaruvchilari bilan to\'g\'ridan-to\'g\'ri hamkorlik o\'rnatdik.'
    },
    content: {
      en: '<p>We are thrilled to announce our new direct import partnerships with leading Chinese auto parts manufacturers. These partnerships allow us to bypass intermediaries and import parts directly from the source.</p><p>The benefits for our customers include lower prices, faster availability of parts, and access to a wider range of products. We can now also offer special orders for rare or discontinued parts.</p><p>These relationships strengthen our position as the leading provider of Chinese auto parts in the region and allow us to better serve our growing customer base.</p>',
      ru: '<p>Мы рады объявить о нашем новом партнерстве по прямому импорту с ведущими китайскими производителями автозапчастей. Эти партнерства позволяют нам обойти посредников и импортировать запчасти непосредственно от источника.</p><p>Преимущества для наших клиентов включают более низкие цены, более быстрое наличие запчастей и доступ к более широкому ассортименту продукции. Теперь мы также можем предлагать специальные заказы для редких или снятых с производства деталей.</p><p>Эти отношения укрепляют нашу позицию в качестве ведущего поставщика китайских автозапчастей в регионе и позволяют нам лучше обслуживать нашу растущую клиентскую базу.</p>',
      uz: '<p>Biz etakchi Xitoy avtomobil ehtiyot qismlari ishlab chiqaruvchilari bilan yangi to\'g\'ridan-to\'g\'ri import hamkorligimizni e\'lon qilishdan mamnunmiz. Ushbu hamkorlik bizga vositachilarni chetlab o\'tish va qismlarni to\'g\'ridan-to\'g\'ri manbadan import qilish imkonini beradi.</p><p>Mijozlarimiz uchun afzalliklar pastroq narxlar, qismlarning tezroq mavjudligi va mahsulotlarning keng assortimentiga kirishni o\'z ichiga oladi. Endi biz kam uchraydigan yoki ishlab chiqarilishi to\'xtatilgan qismlar uchun maxsus buyurtmalar ham taklif qila olamiz.</p><p>Ushbu munosabatlar bizning mintaqada Xitoy avtomobil ehtiyot qismlari etkazib beruvchi sifatida etakchi o\'rnimizni mustahkamlaydi va o\'sib borayotgan mijozlar bazamizga yaxshiroq xizmat ko\'rsatish imkonini beradi.</p>'
    }
  }
];

const News = () => {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is enabled
  useEffect(() => {
    // Check if user prefers dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    // Listen for changes in color scheme preference
    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  // Simulate fetching news data
  useEffect(() => {
    const fetchNews = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    fetchNews();
  }, []);

  // Format date according to locale
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    if (language === 'en') {
      return date.toLocaleDateString('en-US', options);
    } else if (language === 'ru') {
      return date.toLocaleDateString('ru-RU', options);
    } else {
      return date.toLocaleDateString('uz-UZ', options);
    }
  };

  const translations = {
    title: {
      en: "News & Updates",
      ru: "Новости и Обновления",
      uz: "Yangiliklar va Yangilanishlar"
    },
    subtitle: {
      en: "Stay informed about our latest developments, services, and offers",
      ru: "Будьте в курсе наших последних разработок, услуг и предложений",
      uz: "Bizning so'nggi yangiliklarimiz, xizmatlarimiz va takliflarimiz haqida xabardor bo'ling"
    },
    readMore: {
      en: "Read more",
      ru: "Читать далее",
      uz: "Batafsil o'qish"
    },
    home: {
      en: "Home",
      ru: "Главная",
      uz: "Bosh sahifa"
    },
    news: {
      en: "News",
      ru: "Новости",
      uz: "Yangiliklar"
    },
    loading: {
      en: "Loading news...",
      ru: "Загрузка новостей...",
      uz: "Yangiliklar yuklanmoqda..."
    },
    noNews: {
      en: "No news available at the moment.",
      ru: "На данный момент нет доступных новостей.",
      uz: "Hozirda yangiliklar mavjud emas."
    }
  };

  return (
    <main className={`news-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="home-icon">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{translations.home[language]}</span>
          </Link>
          <span>/</span>
          <span className="current">{translations.news[language]}</span>
        </div>

        {/* Header */}
        <header className="news-header">
          <h1 className="news-title">{translations.title[language]}</h1>
          <p className="news-subtitle">{translations.subtitle[language]}</p>
        </header>

        {/* News List */}
        <div className="news-list">
          {isLoading ? (
            <div className="loading-indicator">
              <div className="loading-spinner"></div>
              <p>{translations.loading[language]}</p>
            </div>
          ) : sampleNewsData.length > 0 ? (
            sampleNewsData.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-card-image">
                  <img src={item.image} alt={item.title[language]} />
                </div>
                <div className="news-card-content">
                  <span className="news-date">{formatDate(item.date)}</span>
                  <h2 className="news-card-title">{item.title[language]}</h2>
                  <p className="news-card-summary">{item.summary[language]}</p>
                  <Link to={`/news/${item.id}`} className="read-more-link">
                    {translations.readMore[language]} 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="no-news-message">
              <p>{translations.noNews[language]}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default News; 
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import './News.css';

// We'll use the same sample data as News.jsx
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

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const listener = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', listener);
    return () => darkModeMediaQuery.removeEventListener('change', listener);
  }, []);

  // Force content to load even if image doesn't trigger onLoad
  useEffect(() => {
    // Maximum loading time of 3 seconds before forcing content to display
    const forcedTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(forcedTimer);
  }, []);

  useEffect(() => {
    // Simulate API call to fetch news item
    const fetchNewsItem = async () => {
      try {
        // Find the news item by ID - convert both to string for safer comparison
        const foundItem = sampleNewsData.find(item => String(item.id) === String(id));
        console.log("Found news item:", foundItem ? "yes" : "no", "with id:", id);
        
        setNewsItem(foundItem);
        
        // If image is already loaded or there's no image, hide loader
        if (imageLoaded || !foundItem) {
          setTimeout(() => setLoading(false), 500); // Small delay for smoother transition
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    
    // If news item is already loaded, we can hide the loader
    if (newsItem) {
      setTimeout(() => setLoading(false), 500); // Small delay for smoother transition
    }
  };

  const handleImageError = () => {
    // Handle image load error - still mark as loaded to avoid infinite loading
    setImageLoaded(true);
    if (newsItem) {
      setTimeout(() => setLoading(false), 500);
    }
  };

  // Format date according to locale
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    switch(language) {
      case 'en':
        return date.toLocaleDateString('en-US', options);
      case 'ru':
        return date.toLocaleDateString('ru-RU', options);
      case 'uz':
        return date.toLocaleDateString('uz-UZ', options);
      default:
        return dateString;
    }
  };

  // Function to handle Telegram sharing
  const shareOnTelegram = (newsItem) => {
    // Create an absolute URL instead of relative URL
    const baseUrl = window.location.origin;
    const relativeUrl = window.location.pathname;
    const absoluteUrl = baseUrl + relativeUrl;
    
    const title = newsItem.title[language];
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(absoluteUrl)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const translations = {
    loading: {
      en: "Loading article...",
      ru: "Загрузка статьи...",
      uz: "Maqola yuklanmoqda..."
    },
    backToNews: {
      en: "Back to News",
      ru: "Назад к новостям",
      uz: "Yangiliklariga qaytish"
    },
    newsNotFound: {
      en: "News article not found",
      ru: "Новостная статья не найдена",
      uz: "Yangilik topilmadi"
    },
    home: {
      en: "Home",
      ru: "Главная",
      uz: "Bosh sahifa"
    },
    news: {
      title: {
        en: "News",
        ru: "Новости",
        uz: "Yangiliklar"
      }
    },
    shareOnTelegram: {
      en: "Share on Telegram",
      ru: "Поделиться в Telegram",
      uz: "Telegram-da ulashing"
    }
  };

  return (
    <div className={`news-detail-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        {loading && (
          <div className="page-loader">
            <div className="page-loader-content">
              <div className="loading-spinner"></div>
              <p>{translations.loading[language] || 'Loading article...'}</p>
            </div>
          </div>
        )}
        
        {!loading && !newsItem && (
          <div className="error-container">
            <h2>{translations.newsNotFound[language] || 'News article not found'}</h2>
            <button className="btn-back" onClick={() => navigate('/news')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {translations.backToNews[language] || 'Back to News'}
            </button>
          </div>
        )}
        
        {newsItem && (
          <div className="news-detail-container">
            <div className="breadcrumbs">
              <Link to="/">{translations.home[language] || 'Home'}</Link>
              <span> / </span>
              <Link to="/news">{translations.news.title[language] || 'News'}</Link>
              <span> / </span>
              <span>{newsItem.title[language]}</span>
            </div>
            
            <div className="news-detail">
              <div className="news-detail-image">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title[language]} 
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
                <h1 className="news-detail-title">{newsItem.title[language]}</h1>
              </div>
              
              <div className="news-detail-date">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {formatDate(newsItem.date)}
              </div>
              
              <div className="news-detail-content" dangerouslySetInnerHTML={{ __html: newsItem.content[language] }}></div>
              
              <div className="news-detail-footer">
                <button className="btn-back" onClick={() => navigate('/news')}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {translations.backToNews[language] || 'Back to News'}
                </button>
                
                <button className="telegram-share-button" onClick={() => shareOnTelegram(newsItem)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 3L9.218 10.083M22 3L14.128 21.003L9.218 10.083M22 3L3 10.088L9.218 10.083" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {translations.shareOnTelegram[language] || 'Share on Telegram'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail; 
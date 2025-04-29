import React, { useEffect, useRef, useState } from 'react';
import './BrandStory.css';
import { useLanguage } from '../../../hooks/useLanguage';
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaFlagCheckered } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import logoSvg from '../../../assets/Images/logo.svg';
import logo from '../../../assets/Images/logo.png';
import rimImage from '../../../assets/Images/rim.png';

const BrandStory = ({ forwardedRef }) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Force dark mode on
  const sectionRef = useRef(null);
  
  // Check if dark theme is enabled
  useEffect(() => {
    const checkDarkTheme = () => {
      const isDark = true || // Force dark mode for testing
        document.documentElement.classList.contains('dark-theme') || 
        document.body.classList.contains('dark-theme');
      
      console.log("Dark theme detection:", isDark);
      setIsDarkTheme(isDark);
    };
    
    checkDarkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  
  // Set up animation trigger on scroll
  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentRef);
      }
    }, { threshold: 0.2 });
    
    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);
  
  // Set animation delays for breakdown cards and slogan items
  useEffect(() => {
    if (isVisible) {
      const breakdownCards = document.querySelectorAll('.breakdown-card');
      breakdownCards.forEach((card, index) => {
        card.style.setProperty('--delay', `${0.1 + index * 0.1}s`);
      });
      
      const sloganItems = document.querySelectorAll('.slogan-item');
      sloganItems.forEach((item, index) => {
        item.style.setProperty('--delay', `${0.2 + index * 0.1}s`);
      });
    }
  }, [isVisible]);

  // Custom translations
  const translations = {
    en: {
    
      title: "Forged in Battle",
      subtitle: "The story behind Avtorim's strength and resilience",
      battleStory1: "Avtorim was born from the necessity to provide superior vehicle protection in the harshest conditions. Like a warrior preparing for battle, each Avtorim part is meticulously crafted to withstand extreme challenges.",
      battleStory2: "Our journey began with a vision to transform ordinary vehicles into battle-ready machines. Every component we design faces rigorous testing – just as warriors are forged through trials of fire and steel.",
      breakdownTitle: "Understanding Our Brand",
      nameBreakdown: {
        title: "The Name",
        content: "Derived from 'Avtomobil' (automobile) and 'Rim' (shield), Avtorim represents the ultimate shield for your vehicle."
      },
      logoBreakdown: {
        title: "The Shield",
        content: "Our shield emblem symbolizes protection and strength, embodying our commitment to defend your vehicle against all challenges."
      },
      slogansTitle: "Battle Cries",
      slogans: [
        "Armor for the Modern Road Warrior",
        "Defend What Drives You",
        "Victory in Every Part"
      ]
    },
    ru: {
    
      title: "Закаленные в Бою",
      subtitle: "История за силой и стойкостью Avtorim",
      battleStory1: "Avtorim родился из необходимости обеспечить превосходную защиту автомобиля в самых суровых условиях. Как воин, готовящийся к битве, каждая деталь Avtorim тщательно создана, чтобы выдерживать экстремальные испытания.",
      battleStory2: "Наш путь начался с видения превратить обычные автомобили в машины, готовые к бою. Каждый компонент, который мы разрабатываем, проходит через строгие испытания – как воины, закаленные в испытаниях огнем и сталью.",
      breakdownTitle: "Понимание Avtorim",
      nameBreakdown: {
        title: "Имя",
        content: "Производное от 'Автомобиль' и 'Рим' (щит), Avtorim представляет собой идеальный щит для вашего автомобиля."
      },
      logoBreakdown: {
        title: "Щит",
        content: "Наша эмблема щита символизирует защиту и силу, воплощая нашу приверженность защищать ваш автомобиль от всех испытаний."
      },
      slogansTitle: "Боевые Кличи",
      slogans: [
        "Броня для современного воина дорог",
        "Защищайте то, что движет вами",
        "Победа в каждой детали"
      ]
    },
    uz: {
      title: "Jangda Toblangan",
      subtitle: "Avtorim kuchi va bardoshliligi ortidagi tarix",
      battleStory1: "Avtorim eng og'ir sharoitlarda transport vositalarini yuqori darajada himoya qilish zaruratidan tug'ilgan. Jangga tayyorgarlik ko'rayotgan jangchi kabi, Avtorimning har bir qismi o'ta murakkab sinovlarga bardosh berish uchun puxta ishlangan.",
      battleStory2: "Bizning sayohatimiz oddiy transport vositalarini jangovar mashinalarga aylantirish g'oyasidan boshlandi. Biz loyihalashtirgan har bir qism qattiq sinovlarga duch keladi - xuddi jangchilar olov va po'lat sinovlaridan o'tganidek.",
      breakdownTitle: "Avtorimni Tushunish",
      nameBreakdown: {
        title: "Nomi",
        content: "'Avtomobil' va 'Rim' (qalqon) so'zlaridan kelib chiqqan, Avtorim avtomobilingiz uchun ideal qalqonni ifodalaydi."
      },
      logoBreakdown: {
        title: "Qalqon",
        content: "Bizning qalqon emblemamiz himoya va kuchni anglatadi, avtomobilingizni barcha sinovlardan himoya qilish bo'yicha majburiyatimizni mujassamlashtiradi."
      },
      slogansTitle: "Jangovar Hayqiriqlar",
      slogans: [
        "Zamonaviy yo'l jangchisi uchun sovut",
        "O'zingizni harakatga undaydigan narsani himoya qiling",
        "Har bir detalda g'alaba"
      ]
    }
  };

  const text = translations[language] || translations.en;

  return (
    <section 
      id="brand-story" 
      className={`brand-story-section ${isDarkTheme ? 'dark-theme dark-mode' : ''} ${isVisible ? 'animate-in' : ''}`}
      ref={(node) => {
        sectionRef.current = node;
        if (forwardedRef) {
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else {
            forwardedRef.current = node;
          }
        }
      }}
    >
      <div className="container">
        <div className="brand-story-header">
          <h2 className="brand-story-title">{text.title}</h2>
          <span className="brand-story-badge">{text.badge}</span>
          <p className="brand-story-subtitle">{text.subtitle}</p>
        </div>
        
        <div className="brand-story-content">
          <div className="battle-story">
            <div className="battle-story-image">
              <img src={rimImage} alt="Avtorim Battle Story" />
            </div>
            
            <div className="battle-story-text">
              <p>{text.battleStory1}</p>
              <p>{text.battleStory2}</p>
            </div>
          </div>
          
          <div className="brand-breakdown">
            <h3 className="breakdown-title">
              <BsShieldFillCheck className="shield-icon" />
              {text.breakdownTitle}
            </h3>
            
            <div className="breakdown-cards">
              <div className="breakdown-card">
                <IoDocumentTextOutline className="breakdown-card-icon" />
                <h4>{text.nameBreakdown.title}</h4>
                <p>{text.nameBreakdown.content}</p>
              </div>
              
              <div className="breakdown-card">
                <FiTarget className="breakdown-card-icon" />
                <h4>{text.logoBreakdown.title}</h4>
                <p>{text.logoBreakdown.content}</p>
              </div>
            </div>
          </div>
          
          <div className="brand-slogans">
            <h3 className="slogans-title">
              <FaFlagCheckered className="flag-icon" />
              {text.slogansTitle}
            </h3>
            
            <div className="slogan-list">
              {text.slogans.map((slogan, index) => (
                <div className="slogan-item" key={index}>
                  <span className="slogan-item-content">{slogan}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory; 
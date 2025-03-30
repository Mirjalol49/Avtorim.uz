import React, { useState, useEffect } from 'react';
import { useLanguage, languages } from '../../hooks/useLanguage';

const EidBanner = () => {
  const { language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Multilingual greetings
  const greetings = {
    en: "EID MUBARAK TO ALL",
    uz: "BARCHA MUSULMONLARGA EID MUBORAK BO'LSIN",
    ru: "ИД МУБАРАК ВСЕМ",
  };
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Inline styles
  const bannerStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
    color: 'white',
    textAlign: 'center',
    padding: windowWidth <= 768 ? '6px 10px' : '8px 0',
    position: 'relative',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const greetingStyle = {
    fontSize: windowWidth <= 768 ? '1rem' : '1.2rem',
    fontWeight: 700,
    letterSpacing: '1.5px',
    marginBottom: '2px',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
  };

  const translationsStyle = {
    display: windowWidth <= 480 ? 'none' : 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: windowWidth <= 768 ? '8px' : '16px',
    fontSize: windowWidth <= 768 ? '0.7rem' : '0.75rem',
    opacity: 0.9,
    letterSpacing: '0.5px'
  };

  const translationStyle = {
    position: 'relative',
    paddingRight: '16px'
  };

  const dotStyle = {
    position: 'absolute',
    right: '5px',
    opacity: 0.7
  };

  return (
    <div style={bannerStyle}>
      <div style={contentStyle}>
        <span style={greetingStyle}>{greetings[language] || greetings.en}</span>
        <div style={translationsStyle}>
          {Object.keys(languages).map((lang, index) => 
            language !== lang && greetings[lang] && (
              <span key={lang} style={translationStyle}>
                {greetings[lang]}
                {index < Object.keys(languages).length - 2 && <span style={dotStyle}>•</span>}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default EidBanner; 
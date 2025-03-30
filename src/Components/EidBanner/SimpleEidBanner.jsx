import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const SimpleEidBanner = () => {
  const { language } = useLanguage();

  // Multilingual greetings
  const greetings = {
    en: "EID MUBARAK TO ALL",
    uz: "BARCHA MUSULMONLARGA EID MUBORAK BO'LSIN",
    ru: "ИД МУБАРАК ВСЕМ",
  };

  // Simple inline styles
  const bannerStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
    color: 'white',
    textAlign: 'center',
    padding: '8px 0',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    letterSpacing: '1px'
  };

  return (
    <div style={bannerStyle}>
      {greetings[language] || greetings.en}
    </div>
  );
};

export default SimpleEidBanner; 
import { createContext, useContext, useState, useEffect } from 'react';
import translations from '../utils/translations';

// Create a context for language management
export const LanguageContext = createContext();

// Languages available in the app
export const languages = {
  uz: 'Uzbek',
  en: 'English',
  ru: 'Russian'
};

// Create a provider component
export const LanguageProvider = ({ children }) => {
  // Try to get the language from localStorage or default to Uzbek
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'uz';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage, languages } from '../../hooks/useLanguage.jsx';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Force rendering all three languages
  const languageKeys = ['uz', 'en', 'ru'];

  // Check for mobile view on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // When using portals, we need a different approach to detect outside clicks
      if (isOpen && buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Check if click is outside the dropdown element too
        const dropdownElement = document.querySelector('.language-dropdown');
        if (!dropdownElement || !dropdownElement.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleLanguageSelect = (lang) => {
    toggleLanguage(lang);
    setIsOpen(false);
  };

  const getLanguageDisplayName = (code) => {
    const languageNames = {
      uz: 'UZ',
      en: 'EN',
      ru: 'RU'
    };
    return languageNames[code] || code.toUpperCase();
  };

  // Calculate dropdown position based on button position
  const getDropdownStyle = () => {
    if (!buttonRef.current) return {};
    
    const rect = buttonRef.current.getBoundingClientRect();
    return {
      position: 'fixed',
      top: `${rect.bottom + 8}px`,
      right: `${window.innerWidth - rect.right}px`,
      zIndex: 99999
    };
  };

  // Create dropdown element
  const renderDropdown = () => {
    if (!isOpen) return null;
    
    const dropdownElement = (
      <div 
        className="language-dropdown" 
        style={getDropdownStyle()}
      >
        {languageKeys.map(code => (
          <button
            key={code}
            className={`language-option ${code === language ? 'active' : ''}`}
            onClick={() => handleLanguageSelect(code)}
          >
            {getLanguageDisplayName(code)}
          </button>
        ))}
      </div>
    );
    
    // Use React Portal to render dropdown directly to body
    return ReactDOM.createPortal(
      dropdownElement,
      document.body
    );
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-button" 
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="Change language"
        ref={buttonRef}
      >
        <span>{getLanguageDisplayName(language)}</span>
        <svg 
          className={`language-arrow ${isOpen ? 'active' : ''}`} 
          width="10" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {renderDropdown()}
    </div>
  );
};

export default LanguageSwitcher; 
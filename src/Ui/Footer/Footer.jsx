import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assets/Images/logo.svg';
import { useLanguage } from '../../hooks/useLanguage.jsx';
import { getText } from '../../utils/translate';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const handleSectionLink = (e, sectionId) => {
    e.preventDefault();
    
    if (!isHomePage) {
      window.location.href = '/' + sectionId;
      return;
    }
    
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={Logo} alt="Avtorim Logo" className="footer-logo" />
            <p className="footer-description">
              {getText('footer.description', language)}
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/avto.rim/" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me/jetauravto" className="social-link" aria-label="Telegram">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3 className="footer-title">{getText('footer.services', language)}</h3>
              <ul className="footer-nav">
                <li className="footer-nav-item">
                  <a href="#services" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#services')}>
                    {getText('footer.bodyRepair', language)}
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#services" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#services')}>
                    {getText('footer.engineRepair', language)}
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#services" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#services')}>
                    {getText('footer.electricalService', language)}
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#services" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#services')}>
                    {getText('footer.diagnostics', language)}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">{getText('footer.company', language)}</h3>
              <ul className="footer-nav">
                <li className="footer-nav-item">
                  <a href="#about" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#about')}>
                    {getText('footer.aboutUs', language)}
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#team" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#team')}>
                    {getText('header.team', language)}
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#faq" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#faq')}>
                    {getText('footer.faq', language)}
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#contact" className="footer-nav-link" onClick={(e) => handleSectionLink(e, '#contact')}>
                    {getText('header.contact', language)}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">{getText('header.contact', language)}</h3>
              <ul className="contact-info">
                <li className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <span>Toshkent sh. Sergeli t, Index Bozor H8 Blok</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-phone contact-icon"></i>
                  <a href="tel:+998947696100" className="contact-link">+998 94 769 61 00</a>
                </li>
                <li className="contact-item">
                  <i className="fas fa-clock contact-icon"></i>
                  <span>24/7 {getText('', language)}</span>
                </li>
                <li className="contact-item">
                  <i className="fab fa-telegram contact-icon"></i>
                  <a href="https://t.me/jetauravto" className="contact-link">@avtorim_uz</a>
                </li>
                <li className="contact-item">
                  <i className="fab fa-instagram contact-icon"></i>
                  <a href="https://www.instagram.com/avto.rim/" className="contact-link">@avtorim_official</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Avtorim. {getText('footer.allRightsReserved', language)}
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-policy-link">{getText('footer.privacyPolicy', language)}</a>
            <a href="#" className="footer-policy-link">{getText('footer.termsOfUse', language)}</a>
            <div className="creator-credit">
              <span>Website by </span>
              <a href="https://t.me/mirjalol_shamsiddinov" target="_blank" rel="noopener noreferrer">
                @mirjalol_shamsiddinov
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
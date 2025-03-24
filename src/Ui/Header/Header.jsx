import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Images/logo.svg";
import Btn from "../../Components/Button/Btn";
import LanguageSwitcher from "../../Components/LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../../Components/ThemeToggle/ThemeToggle";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import { useShoppingCart } from "../../hooks/useShoppingCart.jsx";
import { getText } from "../../utils/translate";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const { getCartCount } = useShoppingCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const homeMenuItems = [
    { href: "#services", textKey: "header.services" },
    { href: "#whyus", textKey: "header.whyUs" },
    { href: "#team", textKey: "header.team" },
    { href: "#contact", textKey: "header.contact" }
  ];

  const shopMenuText = {
    en: "Shop",
    ru: "Магазин",
    uz: "Do'kon"
  };

  const cartMenuText = {
    en: "Cart",
    ru: "Корзина",
    uz: "Savat"
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <Link to="/" className="logo-link" aria-label="Avtorim - Bosh sahifaga o'tish">
            <img src={Logo} width={180} height="auto" alt="Avtorim logo" className="logo-image" />
          </Link>
          
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Asosiy navigatsiya">
            <ul className="nav-list">
              {isHomePage && homeMenuItems.map((item, index) => (
                <li key={item.href} className="nav-item" style={{"--item-index": index}}>
                  <a 
                    className="nav-item_link" 
                    href={item.href} 
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {getText(item.textKey, language, item.textKey)}
                  </a>
                </li>
              ))}
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length : 0}}>
                <Link 
                  className={`nav-item_link ${location.pathname.startsWith('/shop') ? 'active' : ''}`} 
                  to="/shop"
                  onClick={closeMenu}
                >
                  <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{marginRight: '6px'}}>
                    <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
                  </svg>
                  {shopMenuText[language]}
                </Link>
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 1 : 1}}>
                <Link 
                  className={`nav-item_link cart-link ${location.pathname === '/cart' ? 'active' : ''}`} 
                  to="/cart"
                  onClick={closeMenu}
                >
                  <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{marginRight: '6px'}}>
                    <path d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z"/>
                  </svg>
                  {cartMenuText[language]}
                  {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
                </Link>
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 2 : 2}}>
                <ThemeToggle />
              </li>
              
              <li className="nav-item language-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 3 : 3}}>
                <LanguageSwitcher />
              </li>
              
              <li className="nav-item btn-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 4 : 4}}>
                <Btn 
                  text={getText("header.freeConsultation", language, "Konsultatsiya")} 
                  onClick={(e) => scrollToSection(e, "#contact")} 
                  href="#contact"
                  className="header-cta-btn" 
                />
              </li>
            </ul>
          </nav>
          {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
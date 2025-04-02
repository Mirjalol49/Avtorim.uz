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
import { ShoppingBag, ShoppingCart } from 'lucide-react'; // Import icons

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
    // { href: "#team", textKey: "header.team" },
    { href: "#contact", textKey: "header.contact" }
  ];

  const shopMenuText = {
    en: "Shop",
    ru: "Магазин",
    uz: "Do'kon"
  };

  const newsMenuText = {
    en: "News",
    ru: "Новости",
    uz: "Yangiliklar"
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
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger"></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
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
                  <ShoppingBag size={20} className="menu-icon" />
                  {shopMenuText[language]}
                </Link>
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 1 : 1}}>
                <Link 
                  className={`nav-item_link ${location.pathname.startsWith('/news') ? 'active' : ''}`} 
                  to="/news"
                  onClick={closeMenu}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                    <path d="M3.99902 16V7C3.99902 5.89543 4.89445 5 5.99902 5H18.999C20.1036 5 20.999 5.89543 20.999 7V16C20.999 17.1046 20.1036 18 18.999 18H5.99902C4.89445 18 3.99902 17.1046 3.99902 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 14H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {newsMenuText[language]}
                </Link>
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 2 : 2}}>
                <Link 
                  className={`nav-item_link ${location.pathname === '/cart' ? 'active' : ''}`} 
                  to="/cart"
                  onClick={closeMenu}
                >
                  <ShoppingCart size={20} className="menu-icon" />
                  {cartMenuText[language]}
                  {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
                </Link>
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 3 : 3}}>
                <ThemeToggle />
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 4 : 4}}>
                <LanguageSwitcher />
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 5 : 5}}>
                <Btn 
                  text={getText("header.freeConsultation", language, "Consultation")} 
                  onClick={(e) => scrollToSection(e, "#contact")} 
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
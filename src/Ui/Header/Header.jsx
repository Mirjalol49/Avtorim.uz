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
                  className={`nav-item_link ${location.pathname === '/cart' ? 'active' : ''}`} 
                  to="/cart"
                  onClick={closeMenu}
                >
                  <ShoppingCart size={20} className="menu-icon" />
                  {cartMenuText[language]}
                  {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
                </Link>
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 2 : 2}}>
                <ThemeToggle />
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 3 : 3}}>
                <LanguageSwitcher />
              </li>
              
              <li className="nav-item" style={{"--item-index": isHomePage ? homeMenuItems.length + 4 : 4}}>
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
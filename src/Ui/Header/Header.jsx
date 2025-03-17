import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/Images/logo.svg";
import Btn from "../../Components/Button/Btn";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const menuItems = [
    { href: "#services", text: "Xizmatlar" },
    { href: "#whyus", text: "Nega aynan biz" },
    { href: "#team", text: "Jamoa" },
    { href: "#contact", text: "Aloqa" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <a href="https://www.avtorim.uz/" className="logo-link">
            <img src={Logo} width={250} height={150} alt="avtorim" />
          </a>
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li key={item.href} className="nav-item" style={{"--item-index": index}}>
                  <a 
                    className="nav-item_link" 
                    href={item.href} 
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="nav-item" style={{"--item-index": menuItems.length}}>
                <Btn text="Bepul Konsultatsiya " onClick={closeMenu} />
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
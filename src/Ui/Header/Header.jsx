import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/Images/logo.svg";

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

  const menuItems = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About us" },
    { href: "#projects", text: "Projects" },
    { href: "#faq", text: "FAQ" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <a href="https://www.avtorim.uz/" className="logo-link">
            <img src={Logo} width={250} height={150} alt="Dr Energy Logo" />
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
                  <a className="nav-item_link" href={item.href} onClick={closeMenu}>
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="nav-item" style={{"--item-index": menuItems.length}}>
                <a className="button-6" role="button" href="#contact" onClick={closeMenu}>
                 <span className="text">Contact Us</span>
                </a>
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
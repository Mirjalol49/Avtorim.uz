import React from 'react';
import './Footer.css';
import Logo from '../../assets/Images/logo.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={Logo} alt="Logo" className="footer-logo" />
            <p className="footer-description">
              Professional avtomobil ta'mirlash va texnik xizmat ko'rsatish markazi. 
              15 yillik tajriba va malakali mutaxassislar.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>Xizmatlar</h3>
              <ul>
                <li><a href="#services">Kuzov Ta'mirlash</a></li>
                <li><a href="#services">Dvigatel Ta'mirlash</a></li>
                <li><a href="#services">Elektrik Xizmati</a></li>
                <li><a href="#services">Diagnostika</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Kompaniya</h3>
              <ul>
                <li><a href="#about">Biz Haqimizda</a></li>
                <li><a href="#team">Jamoa</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Aloqa</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Aloqa</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                 Toshkent sh. Sergeli t, Index Bozor H8 Blok
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  +998 95 816 08 88
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  Dush-Shan: 9:00 - 18:00
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Avtoservis. Barcha huquqlar himoyalangan.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Maxfiylik Siyosati</a>
            <a href="#">Foydalanish Shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
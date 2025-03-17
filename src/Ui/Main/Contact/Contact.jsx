import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Biz Bilan Bog'laning</h2>
          <p className="contact-subtitle">
            Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Manzil</h3>
                <p>Toshkent sh, Chilonzor t, Bunyodkor ko'chasi, 15-uy</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Telefon</h3>
                <p>+998 95 736 66 11</p>
                <p>+998 94 769 61 00</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div>
                <h3>Ish Vaqti</h3>
                <p>Dushanba - Shanba: 9:00 - 18:00</p>
                <p>Yakshanba: Yopiq</p>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Ismingiz" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Telefon raqamingiz" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Xabaringiz" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Yuborish</button>
            </form>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2923.782871096112!2d69.23897507605017!3d41.2008699713242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzAzLjEiTiA2OcKwMTQnMjkuNiJF!5e1!3m2!1sen!2s!4v1742041436222!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998 ',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent phone number country code deletion
    if (name === 'phone' && !value.startsWith('+998')) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const botToken = '7816376176:AAHi59iDtRdHC4zR88jbxelRYJGv-ZJLSV4';
    const chatId = '1907166652';
    const message = `📨 Yangi xabar!\n\nIsmi: ${formData.name}\nTelefon: ${formData.phone}\nXabar: ${formData.message}`;

    try {
      const response = await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        params: {
          chat_id: chatId,
          text: message
        }
      });
      
      console.log('Telegram response:', response);
      alert('Xabaringiz yuborildi! Tez orada aloqaga chiqamiz');
      setFormData({
        name: '',
        phone: '+998 ',
        message: ''
      });
      
    } catch (error) {
      console.error('Xatolik:', error);
      alert('Xabar yuborishda xatolik, iltimos qayta urunib koʻring');
    }
  };

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
                <p>Toshkent sh. Sergeli t, Index Bozor H8 Blok</p>
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

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ismingiz" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Telefon raqamingiz" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Xabaringiz" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
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
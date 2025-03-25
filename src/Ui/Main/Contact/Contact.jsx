import React, { useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../../../hooks/useLanguage';
import { useToast } from '../../../context/ToastContext';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const { showSuccessToast, showErrorToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998 ',
    message: ''
  });

  const translations = {
    title: {
      en: "Contact Us",
      ru: "Свяжитесь с нами",
      uz: "Biz Bilan Bog'laning"
    },
    subtitle: {
      en: "Have questions? Contact us and we'll help you",
      ru: "Есть вопросы? Свяжитесь с нами, и мы вам поможем",
      uz: "Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz"
    },
    address: {
      en: "Address",
      ru: "Адрес",
      uz: "Manzil"
    },
    addressValue: {
      en: "Tashkent, Sergeli district, Index Market H8 Block",
      ru: "Ташкент, Сергелийский р-н, Индекс Базар H8 Блок",
      uz: "Toshkent sh. Sergeli, Index Bozor H8 Blok"
    },
    phone: {
      en: "Phone",
      ru: "Телефон",
      uz: "Telefon"
    },
    workHours: {
      en: "Working Hours",
      ru: "Рабочее время",
      uz: "Ish Vaqti"
    },
    workDays: {
      en: "Monday - Saturday: 9:00 - 18:00",
      ru: "Понедельник - Суббота: 9:00 - 18:00",
      uz: "24/7"
    },
    weekends: {
      en: " ",
      ru: " ",
      uz: " "
    },
    namePlaceholder: {
      en: "Your Name",
      ru: "Ваше имя",
      uz: "Ismingiz"
    },
    phonePlaceholder: {
      en: "Your Phone Number",
      ru: "Ваш номер телефона",
      uz: "Telefon raqamingiz"
    },
    messagePlaceholder: {
      en: "Your Message",
      ru: "Ваше сообщение",
      uz: "Xabaringiz"
    },
    submit: {
      en: "Send",
      ru: "Отправить",
      uz: "Yuborish"
    },
    successMessage: {
      en: "Your message has been sent! We will contact you soon.",
      ru: "Ваше сообщение отправлено! Мы скоро свяжемся с вами.",
      uz: "Xabaringiz yuborildi! Tez orada aloqaga chiqamiz"
    },
    errorMessage: {
      en: "Error sending message. Please try again.",
      ru: "Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.",
      uz: "Xabar yuborishda xatolik, iltimos qayta urunib koʻring"
    }
  };

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
      
      // Show success toast
      showSuccessToast(translations.successMessage[language]);
      
      setFormData({
        name: '',
        phone: '+998 ',
        message: ''
      });
      
    } catch (error) {
      console.error('Xatolik:', error);
      
      // Show error toast
      showErrorToast(translations.errorMessage[language]);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">{translations.title[language]}</h2>
          <p className="contact-subtitle">
            {translations.subtitle[language]}
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>{translations.address[language]}</h3>
                <p>{translations.addressValue[language]}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>{translations.phone[language]}</h3>
                <p>+998 95 736 66 11</p>
                <p>+998 94 769 61 00</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div>
                <h3>{translations.workHours[language]}</h3>
                <p>{translations.workDays[language]}</p>
                <p>{translations.weekends[language]}</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder={translations.namePlaceholder[language]} 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder={translations.phonePlaceholder[language]} 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder={translations.messagePlaceholder[language]} 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">{translations.submit[language]}</button>
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
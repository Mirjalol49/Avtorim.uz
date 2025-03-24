import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useModal } from '../../context/ModalContext';
import { useToast } from '../../context/ToastContext';
import { sendOrderToTelegram } from '../../utils/telegramBot';
import './OrderForm.css';

const OrderForm = ({ initialCarName = '', onFormSubmit }) => {
  const { language } = useLanguage();
  const { showSuccessToast, showErrorToast } = useToast();
  const [formData, setFormData] = useState({
    carName: initialCarName,
    name: '',
    phone: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const translations = {
    title: {
      en: 'Order Request Form',
      ru: 'Форма заказа',
      uz: 'Buyurtma shakli'
    },
    carName: {
      en: 'Auto Spare',
      ru: 'Автозапчасть',
      uz: 'Avtomobil ehtiyot qismi'
    },
    name: {
      en: 'Your Name',
      ru: 'Ваше имя',
      uz: 'Sizning ismingiz'
    },
    phone: {
      en: 'Phone Number',
      ru: 'Номер телефона',
      uz: 'Telefon raqami'
    },
    additionalInfo: {
      en: 'Additional Information (optional)',
      ru: 'Дополнительная информация (необязательно)',
      uz: 'Qo\'shimcha ma\'lumot (ixtiyoriy)'
    },
    submit: {
      en: 'Submit Order Request',
      ru: 'Отправить запрос',
      uz: 'Buyurtmani yuborish'
    },
    successMessage: {
      en: 'Order request sent! We\'ll contact you shortly.',
      ru: 'Запрос отправлен! Мы свяжемся с вами в ближайшее время.',
      uz: 'Buyurtma yuborildi! Tez orada siz bilan bog\'lanamiz.'
    },
    newSearch: {
      en: 'Search for another car',
      ru: 'Искать другой автомобиль',
      uz: 'Boshqa avtomobilni qidirish'
    },
    requiredField: {
      en: 'This field is required',
      ru: 'Обязательное поле',
      uz: 'Bu maydon talab qilinadi'
    },
    invalidPhone: {
      en: 'Please enter a valid phone number',
      ru: 'Пожалуйста, введите корректный номер телефона',
      uz: 'Iltimos, to\'g\'ri telefon raqamini kiriting'
    },
    errorMessage: {
      en: 'Failed to send order request. Please try again.',
      ru: 'Не удалось отправить запрос. Пожалуйста, попробуйте еще раз.',
      uz: 'Buyurtmani yuborishda xatolik. Iltimos, qayta urinib ko\'ring.'
    },
    carNameRequired: {
      en: 'Car Model/Name is required',
      ru: 'Модель/Название автомобиля обязательно',
      uz: 'Avtomobil modeli/nomi talab qilinadi'
    },
    nameRequired: {
      en: 'Your Name is required',
      ru: 'Ваше имя обязательно',
      uz: 'Sizning ismingiz talab qilinadi'
    },
    phoneRequired: {
      en: 'Phone Number is required',
      ru: 'Номер телефона обязательно',
      uz: 'Telefon raqami talab qilinadi'
    },
    processing: {
      en: 'Processing...',
      ru: 'Обработка...',
      uz: 'Jaratish...'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    // Validate car name
    if (!formData.carName.trim()) {
      setError(translations.carNameRequired[language]);
      return false;
    }
    
    // Validate name
    if (!formData.name.trim()) {
      setError(translations.nameRequired[language]);
      return false;
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      setError(translations.phoneRequired[language]);
      return false;
    }
    
    // Basic phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setError(translations.invalidPhone[language]);
      return false;
    }
    
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Format the car order data for Telegram
      const orderData = {
        type: 'car_order_request',
        carDetails: formData.carName.trim(),
        customer: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          additionalInfo: formData.additionalInfo?.trim() || 'None provided'
        }
      };
      
      // Send to Telegram
      const result = await sendOrderToTelegram(orderData);
      
      if (result.success) {
        // Show success toast and reset form
        showSuccessToast(translations.successMessage[language]);
        
        // Reset the form
        setFormData({
          carName: '',
          name: '',
          phone: '',
          additionalInfo: ''
        });
        
        // Call the onFormSubmit callback if provided
        if (onFormSubmit) {
          onFormSubmit(formData);
        }
      } else {
        showErrorToast(translations.errorMessage[language]);
        setError(translations.errorMessage[language]);
      }
    } catch (err) {
      console.error('Error submitting order form:', err);
      showErrorToast(translations.errorMessage[language]);
      setError(translations.errorMessage[language]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewSearch = () => {
    setFormData({
      carName: '',
      name: '',
      phone: '',
      additionalInfo: ''
    });
    
    // Call the onFormSubmit callback if provided
    if (onFormSubmit) {
      onFormSubmit(null);
    }
  };

  return (
    <div className="order-form-container">
      <form className="order-form" onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="carName">{translations.carName[language]}*</label>
          <input
            type="text"
            id="carName"
            name="carName"
            value={formData.carName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">{translations.name[language]}*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">{translations.phone[language]}*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">{translations.additionalInfo[language]}</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows="3"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="submit-order-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading-spinner">
              <span className="spinner-icon"></span>
              {translations.processing[language]}
            </span>
          ) : (
            translations.submit[language]
          )}
        </button>
      </form>
    </div>
  );
};

export default OrderForm; 
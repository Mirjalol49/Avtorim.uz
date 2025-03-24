import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useShoppingCart } from '../../hooks/useShoppingCart';
import { useModal } from '../../context/ModalContext';
import { useToast } from '../../context/ToastContext';
import { sendOrderToTelegram as sendOrderViaBot } from '../../utils/telegramBot';
import './Checkout.css';

const Checkout = () => {
  const { language } = useLanguage();
  const { cartItems, getCartTotal, clearCart } = useShoppingCart();
  const { showSuccessModal } = useModal();
  const { showErrorToast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comments: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const translations = {
    title: {
      en: 'Checkout',
      ru: 'Оформление заказа',
      uz: 'Buyurtmani rasmiylashtirish'
    },
    name: {
      en: 'Full Name',
      ru: 'Полное имя',
      uz: 'To\'liq ism'
    },
    phone: {
      en: 'Phone Number',
      ru: 'Номер телефона',
      uz: 'Telefon raqami'
    },
    address: {
      en: 'Address',
      ru: 'Адрес',
      uz: 'Manzil'
    },
    comments: {
      en: 'Additional Comments',
      ru: 'Дополнительные комментарии',
      uz: 'Qo\'shimcha izohlar'
    },
    orderSummary: {
      en: 'Order Summary',
      ru: 'Сводка заказа',
      uz: 'Buyurtma xulosasi'
    },
    item: {
      en: 'Item',
      ru: 'Товар',
      uz: 'Mahsulot'
    },
    quantity: {
      en: 'Qty',
      ru: 'Кол-во',
      uz: 'Miqdori'
    },
    price: {
      en: 'Price',
      ru: 'Цена',
      uz: 'Narxi'
    },
    total: {
      en: 'Total',
      ru: 'Итого',
      uz: 'Jami'
    },
    placeOrder: {
      en: 'Place Order',
      ru: 'Разместить заказ',
      uz: 'Buyurtma berish'
    },
    backToCart: {
      en: 'Back to Cart',
      ru: 'Вернуться в корзину',
      uz: 'Savatga qaytish'
    },
    orderSuccess: {
      en: 'Order Placed Successfully!',
      ru: 'Заказ успешно размещен!',
      uz: 'Buyurtma muvaffaqiyatli joylashtirildi!'
    },
    orderDetails: {
      en: 'Your order details have been sent. We will contact you shortly.',
      ru: 'Данные вашего заказа отправлены. Мы свяжемся с вами в ближайшее время.',
      uz: 'Buyurtma tafsilotlari yuborildi. Tez orada siz bilan bog\'lanamiz.'
    },
    backToShopping: {
      en: 'Continue Shopping',
      ru: 'Продолжить покупки',
      uz: 'Xaridni davom ettirish'
    },
    emptyCart: {
      en: 'Your cart is empty',
      ru: 'Ваша корзина пуста',
      uz: 'Savatchangiz bo\'sh'
    },
    requiredField: {
      en: 'This field is required',
      ru: 'Это поле обязательно',
      uz: 'Bu maydon talab qilinadi'
    },
    invalidPhone: {
      en: 'Please enter a valid phone number',
      ru: 'Пожалуйста, введите действительный номер телефона',
      uz: 'Iltimos, to\'g\'ri telefon raqamini kiriting'
    },
    errorTitle: {
      en: 'Error',
      ru: 'Ошибка',
      uz: 'Xato'
    },
    orderErrorMessage: {
      en: 'There was an error processing your order. Please try again.',
      ru: 'При обработке вашего заказа произошла ошибка. Пожалуйста, попробуйте еще раз.',
      uz: 'Buyurtmangizni qayta ishlashda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.'
    },
    processing: {
      en: 'Processing...',
      ru: 'Обработка...',
      uz: 'Qayta ishlash...'
    }
  };

  // Redirect to shop if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/shop');
    }
  }, [cartItems, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError(`${translations.name[language]}: ${translations.requiredField[language]}`);
      return false;
    }
    
    if (!formData.phone.trim()) {
      setError(`${translations.phone[language]}: ${translations.requiredField[language]}`);
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

  const sendOrderToTelegram = async (orderData) => {
    try {
      // Use the Telegram utility function
      const result = await sendOrderViaBot(orderData);
      return result;
    } catch (error) {
      console.error('Error sending order to Telegram', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Format item names based on current language
      const formattedItems = cartItems.map(item => ({
        id: item.id,
        name: item.name[language] || item.name,
        price: item.price,
        quantity: item.quantity
      }));
      
      // Prepare order data
      const orderData = {
        customer: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          address: formData.address?.trim() || '',
          comments: formData.comments?.trim() || ''
        },
        items: formattedItems,
        totalAmount: getCartTotal()
      };
      
      // Send order to Telegram
      const result = await sendOrderToTelegram(orderData);
      
      if (result.success) {
        // Clear cart after successful order
        clearCart();
        // Show success modal
        showSuccessModal(
          translations.orderSuccess[language],
          translations.orderDetails[language],
          {
            onConfirm: () => {
              navigate('/shop');
            }
          }
        );
      } else {
        // Show error toast
        showErrorToast(translations.orderErrorMessage[language]);
        setError(translations.orderErrorMessage[language]);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      showErrorToast(translations.orderErrorMessage[language]);
      setError(translations.orderErrorMessage[language]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToCart = () => {
    navigate('/cart');
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">{translations.title[language]}</h1>

      {cartItems.length === 0 ? (
        <div className="empty-checkout">
          <p>{translations.emptyCart[language]}</p>
          <button 
            className="continue-shopping-button" 
            onClick={handleContinueShopping}
          >
            {translations.backToShopping[language]}
          </button>
        </div>
      ) : (
        <div className="checkout-content">
          <div className="checkout-form-container">
            <form className="checkout-form" onSubmit={handleSubmit}>
              {error && <div className="form-error">{error}</div>}
              
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
                <label htmlFor="address">{translations.address[language]}</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="comments">{translations.comments[language]}</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="checkout-buttons">
                <button 
                  type="button" 
                  className="back-button"
                  onClick={handleBackToCart}
                  disabled={isSubmitting}
                >
                  {translations.backToCart[language]}
                </button>
                <button 
                  type="submit" 
                  className="order-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-spinner">
                      <span className="spinner-icon"></span>
                      {translations.processing[language]}
                    </span>
                  ) : (
                    translations.placeOrder[language]
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="order-summary">
            <h2>{translations.orderSummary[language]}</h2>
            
            <div className="summary-items">
              <div className="summary-header">
                <span>{translations.item[language]}</span>
                <span>{translations.quantity[language]}</span>
                <span>{translations.price[language]}</span>
              </div>
              
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <span className="item-name">
                    {typeof item.name === 'object' ? (item.name[language] || '') : item.name}
                  </span>
                  <span className="item-quantity">{item.quantity}</span>
                  <span className="item-price">${item.price.toLocaleString()}</span>
                </div>
              ))}
              
              <div className="summary-total">
                <span>{translations.total[language]}</span>
                <span>${getCartTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout; 
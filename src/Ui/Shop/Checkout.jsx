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
  const { showSuccessModal, showConfirmModal } = useModal();
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
    confirmOrder: {
      en: 'Confirm Order',
      ru: 'Подтвердите заказ',
      uz: 'Buyurtmani tasdiqlang'
    },
    confirmOrderMessage: {
      en: 'Are you sure you want to place this order?',
      ru: 'Вы уверены, что хотите разместить этот заказ?',
      uz: 'Haqiqatan ham bu buyurtmani joylashtirmoqchimisiz?'
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
    
    // Phone validation - accept any number with at least 9 digits
    const phoneDigits = formData.phone.trim().replace(/\D/g, '');
    if (phoneDigits.length < 9) {
      setError(translations.invalidPhone[language]);
      return false;
    }
    
    setError('');
    return true;
  };

  // We're using sendOrderViaBot directly, so this function is no longer needed
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Show confirmation modal
      showConfirmModal(
        translations.confirmOrder[language],
        translations.confirmOrderMessage[language],
        onConfirm
      );
    } catch (err) {
      console.error('Error submitting order:', err);
      showErrorToast(translations.orderErrorMessage[language]);
      setError(translations.orderErrorMessage[language]);
      setIsSubmitting(false);
    }
  };
  
  const onConfirm = async () => {
    try {
      // Format the order data with proper validation
      const formattedItems = cartItems.map(item => {
        // Ensure item has all required properties
        return {
          id: item.id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: item.name || 'Unknown Item',
          // Ensure price is a number for toFixed() calculation
          price: typeof item.price === 'number' ? item.price : parseFloat(item.price) || 0,
          // Ensure quantity is a number
          quantity: typeof item.quantity === 'number' ? item.quantity : parseInt(item.quantity) || 1,
          // Include image if available
          image: item.image || ''
        };
      });
      
      const orderData = {
        items: formattedItems,
        totalAmount: getCartTotal(),
        customer: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          address: formData.address?.trim() || '',
          comments: formData.comments?.trim() || ''
        }
      };
      
      console.log('Sending order data:', JSON.stringify(orderData));
      
      // Send to Telegram
      const result = await sendOrderViaBot(orderData);
      
      if (result.success) {
        console.log('Order successfully sent');
        // Show success modal
        showSuccessModal(
          translations.orderSuccess[language],
          translations.orderDetails[language],
          handleContinueShopping
        );
        
        // Clear the cart
        clearCart();
      } else {
        console.error('Failed to send order:', result.error);
        showErrorToast(translations.orderErrorMessage[language]);
        setError(translations.orderErrorMessage[language]);
      }
    } catch (err) {
      console.error('Error processing order:', err);
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
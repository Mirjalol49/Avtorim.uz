import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useShoppingCart } from '../../hooks/useShoppingCart';
import { useModal } from '../../context/ModalContext';
import { useToast } from '../../context/ToastContext';
import './Cart.css';

const Cart = () => {
  const { language } = useLanguage();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useShoppingCart();
  const { showConfirmModal } = useModal();
  const { showSuccessToast, showInfoToast } = useToast();
  const navigate = useNavigate();

  const translations = {
    title: {
      en: 'Shopping Cart',
      ru: 'Корзина Покупок',
      uz: 'Xarid Savati'
    },
    empty: {
      en: 'Your cart is empty',
      ru: 'Ваша корзина пуста',
      uz: 'Savatchangiz bo\'sh'
    },
    continueShopping: {
      en: 'Continue Shopping',
      ru: 'Продолжить Покупки',
      uz: 'Xaridni davom ettirish'
    },
    checkout: {
      en: 'Proceed to Checkout',
      ru: 'Перейти к Оформлению',
      uz: 'To\'lovga o\'tish'
    },
    clearCart: {
      en: 'Clear Cart',
      ru: 'Очистить Корзину',
      uz: 'Savatni tozalash'
    },
    price: {
      en: 'Price',
      ru: 'Цена',
      uz: 'Narxi'
    },
    quantity: {
      en: 'Quantity',
      ru: 'Количество',
      uz: 'Miqdori'
    },
    total: {
      en: 'Total',
      ru: 'Итого',
      uz: 'Jami'
    },
    remove: {
      en: 'Remove',
      ru: 'Удалить',
      uz: 'Olib tashlash'
    },
    confirmClearTitle: {
      en: 'Clear Cart',
      ru: 'Очистить Корзину',
      uz: 'Savatni Tozalash'
    },
    confirmClearMessage: {
      en: 'Are you sure you want to clear all items from your cart?',
      ru: 'Вы уверены, что хотите удалить все товары из корзины?',
      uz: 'Savatdagi barcha narsalarni o\'chirishni xohlaysizmi?'
    },
    itemRemoved: {
      en: 'removed from cart',
      ru: 'удален из корзины',
      uz: 'savatdan olib tashlandi'
    },
    cartCleared: {
      en: 'Cart has been cleared',
      ru: 'Корзина очищена',
      uz: 'Savat tozalandi'
    }
  };

  const handleQuantityChange = (carId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(carId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleClearCart = () => {
    showConfirmModal(
      translations.confirmClearTitle[language],
      translations.confirmClearMessage[language],
      () => {
        clearCart();
        showInfoToast(translations.cartCleared[language]);
      }
    );
  };

  const handleRemoveItem = (carId, carName) => {
    removeFromCart(carId);
    showSuccessToast(`${carName} ${translations.itemRemoved[language]}`);
  };

  // Helper function to safely get item name in current language
  const getItemName = (item) => {
    if (item && item.name) {
      // Handle both string names (old format) and object names (new format)
      return typeof item.name === 'object' ? (item.name[language] || '') : item.name;
    }
    return '';
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">{translations.title[language]}</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>{translations.empty[language]}</p>
          <button className="continue-shopping" onClick={handleContinueShopping}>
            {translations.continueShopping[language]}
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img 
                    src={item.image} 
                    alt={getItemName(item)} 
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150?text=Image+Error';
                    }}
                  />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{getItemName(item)}</h3>
                  <div className="cart-item-price-qty">
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <div className="cart-item-quantity">
                      <p>{translations.quantity[language]}: {item.quantity}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  className="remove-item-btn"
                  onClick={() => handleRemoveItem(item.id, getItemName(item))}
                  aria-label={`${translations.remove[language]} ${getItemName(item)}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>{translations.total[language]}:</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>
            <div className="cart-actions">
              <button className="clear-cart" onClick={handleClearCart}>
                {translations.clearCart[language]}
              </button>
              <button className="continue-shopping" onClick={handleContinueShopping}>
                {translations.continueShopping[language]}
              </button>
              <button className="checkout-button" onClick={handleCheckout}>
                {translations.checkout[language]}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 
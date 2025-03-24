import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useShoppingCart } from '../../hooks/useShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import './CarPart.css';

const CarPart = ({ part }) => {
  const { language } = useLanguage();
  const { addToCart } = useShoppingCart();
  const { showSuccessToast } = useToast();
  const navigate = useNavigate();

  // Extract part properties
  const { id, image, name, price, brand } = part;

  const translations = {
    addToCart: {
      en: 'Add to Cart',
      ru: 'Добавить в корзину',
      uz: 'Savatga qo\'shish'
    },
    buyNow: {
      en: 'Buy Now',
      ru: 'Купить сейчас',
      uz: 'Hozir sotib olish'
    },
    itemAddedMessage: {
      en: 'added to cart',
      ru: 'добавлен в корзину',
      uz: 'savatga qo\'shildi'
    }
  };

  const handleAddToCart = () => {
    addToCart(part);
    showSuccessToast(`${name[language]} ${translations.itemAddedMessage[language]}`);
  };

  const handleBuyNow = () => {
    addToCart(part);
    navigate('/checkout');
  };

  return (
    <div className="car-part-card">
      <div className="car-part-image-container">
        <img 
          src={image} 
          alt={name[language]} 
          className="car-part-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150?text=No+Image';
          }}
        />
        {brand && (
          <span className="car-part-brand">{brand[language]}</span>
        )}
      </div>
      <div className="car-part-details">
        <h3 className="car-part-name">{name[language]}</h3>
        <p className="car-part-price">${price.toFixed(2)}</p>
        <div className="car-part-actions">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            {translations.addToCart[language]}
          </button>
          <button 
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            {translations.buyNow[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarPart; 
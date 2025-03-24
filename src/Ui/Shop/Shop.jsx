import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useShoppingCart } from '../../hooks/useShoppingCart';
import { useModal } from '../../context/ModalContext';
import { useToast } from '../../context/ToastContext';
import OrderForm from './OrderForm';
// Fix the CarPart import path:
import CarPart from '../../Components/CarPart/CarPart';
import carParts, { brandOptions } from '../../data/carParts';
import './Shop.css';



const Shop = () => {
  const { language } = useLanguage();
  const { addToCart } = useShoppingCart();
  const { showSuccessToast } = useToast();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredParts, setFilteredParts] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeBrand, setActiveBrand] = useState('all');
  
  const translations = {
    title: {
      en: 'Our Shop',
      ru: 'Наш Магазин',
      uz: 'Bizning Do\'kon'
    },
    searchPlaceholder: {
      en: 'Search parts...',
      ru: 'Поиск запчастей...',
      uz: 'Qismlarni qidirish...'
    },
    viewCart: {
      en: 'View Cart',
      ru: 'Просмотр Корзины',
      uz: 'Savatni Ko\'rish'
    },
    noResults: {
      en: 'No parts found matching your search',
      ru: 'Запчасти по вашему запросу не найдены',
      uz: 'Qidiruv bo\'yicha ehtiyot qismlar topilmadi'
    },
    orderCustomPart: {
      en: 'Order the part you\'re looking for',
      ru: 'Заказать интересующую вас запчасть',
      uz: 'Siz qidirayotgan ehtiyot qismni buyurtma qiling'
    },
    loading: {
      en: 'Loading products...',
      ru: 'Загрузка продуктов...',
      uz: 'Mahsulotlar yuklanmoqda...'
    },
    filterByBrand: {
      en: 'Filter by Brand',
      ru: 'Фильтр по марке',
      uz: 'Brend bo\'yicha filtrlash'
    },
    allBrands: {
      en: 'All Brands',
      ru: 'Все марки',
      uz: 'Barcha brendlar'
    },
    home: {
      en: 'Home',
      ru: 'Главная',
      uz: 'Bosh Sahifa'
    }
  };

  // Initialize filtered parts on component mount
  useEffect(() => {
    setLoading(true);
    setFilteredParts(carParts);
    setLoading(false);
  }, []);

  // Filter parts based on search query and selected brand
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    let filtered = [...carParts];
    
    // Apply brand filter first if it's not 'all'
    if (activeBrand !== 'all') {
      filtered = filtered.filter(part => {
        // Convert the brand name to lowercase and check if it includes the activeBrand
        return part.brand[language].toLowerCase() === brandOptions[activeBrand][language].toLowerCase();
      });
    }

    // Then apply search filter
    if (query !== '') {
      filtered = filtered.filter(part => 
        (part.name[language] || '').toLowerCase().includes(query)
      );
    }
    
    setFilteredParts(filtered);
  }, [searchQuery, language, activeBrand]);

  const handleViewCart = () => {
    navigate('/cart');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOrderFormSubmit = (orderData) => {
    setSearchQuery('');
    setShowOrderForm(false);
  };

  const handleBrandChange = (brand) => {
    setActiveBrand(brand);
  };

  return (
    <div className="container">
      <div className="shop-container">
        <div className="shop-header">
          <Link to="/" className="home-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="home-icon">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span>{translations.home[language]}</span>
          </Link>
          <h1 className="shop-title">{translations.title[language]}</h1>
        </div>
        
        <div className="shop-actions">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder={translations.searchPlaceholder[language]}
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery && (
              <button 
                className="clear-search-button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          
          <button className="view-cart-button" onClick={handleViewCart}>
            {translations.viewCart[language]}
          </button>
        </div>
        
        <div className="tag-filter-container">
          <span className="tag-filter-label">{translations.filterByBrand[language]}:</span>
          <div className="tag-filters">
            <button 
              className={`tag-filter-btn ${activeBrand === 'all' ? 'active' : ''}`}
              onClick={() => handleBrandChange('all')}
            >
              {translations.allBrands[language]}
            </button>
            {Object.keys(brandOptions).map(brand => (
              <button 
                key={brand}
                className={`tag-filter-btn ${activeBrand === brand ? 'active' : ''}`}
                onClick={() => handleBrandChange(brand)}
              >
                {brandOptions[brand][language]}
              </button>
            ))}
          </div>
        </div>
        
        {loading ? (
          <div className="loading-container">
            <p>{translations.loading[language]}</p>
          </div>
        ) : filteredParts.length === 0 ? (
          <div className="no-results-container">
            <p className="no-results-message">{translations.noResults[language]}</p>
            <h2 className="order-form-title">{translations.orderCustomPart[language]}</h2>
            <OrderForm 
              initialCarName={searchQuery} 
              onFormSubmit={handleOrderFormSubmit} 
            />
          </div>
        ) : (
          <div className="parts-grid">
            {filteredParts.map(part => (
              <CarPart key={part.id} part={part} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
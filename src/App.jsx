import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Ui/Header/Header';
import Main from './Ui/Main/Main';
import Footer from './Ui/Footer/Footer';
import Shop from './Ui/Shop/Shop';
import Cart from './Ui/Shop/Cart';
import Checkout from './Ui/Shop/Checkout';
import { LanguageProvider } from './hooks/useLanguage.jsx';
import { ShoppingCartProvider } from './hooks/useShoppingCart.jsx';
import { ThemeProvider } from './hooks/useTheme.jsx';
import { ModalProvider } from './context/ModalContext';
import { ToastProvider } from './context/ToastContext';
import Modal from './Components/Modal/Modal';
import './styles/theme.css';
import { applyDarkModeOverrides } from './utils/darkModeOverride';
import { fixColorIssues } from './utils/fixColorIssues';
import "./styles/darkMode.css";

// Define CSS variables outside component to avoid recreation
const cssVariables = {
  // Primary colors
  '--primary-color': '#4caf50',
  '--primary-color-light': '#a5d6a7',
  '--primary-color-dark': '#388e3c',
  
  // Text colors
  '--text-color': '#333333',
  '--text-color-secondary': '#757575',
  
  // Background colors
  '--bg-color': '#ffffff',
  '--bg-color-lighter': '#f5f5f5',
  
  // Status colors
  '--danger-color': '#e74c3c',
  '--danger-color-light': '#fde8e7',
  '--danger-color-dark': '#c0392b',
  
  // Border colors
  '--border-color': '#e0e0e0',
  
  // Shadow
  '--shadow': 'rgba(0, 0, 0, 0.1)',
  '--shadow-strong': 'rgba(0, 0, 0, 0.15)',
  
  // Shop specific
  '--shop-card-bg': '#ffffff',
  '--cart-item-bg': '#ffffff',
};

function App() {
  // Apply CSS variables only once on mount
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply all CSS variables at once
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    
    // Apply styles overrides once
    applyDarkModeOverrides();
    fixColorIssues();
  }, []);

  // Memoize the routes to prevent unnecessary rerenders
  const routeElements = useMemo(() => (
    <Routes>
      {/* Public routes with header and footer */}
      <Route path="/" element={
        <>
          <Header />
          <Main />
          <Footer />
        </>
      } />
      <Route path="/shop" element={
        <>
          <Header />
          <Shop />
          <Footer />
        </>
      } />
      <Route path="/cart" element={
        <>
          <Header />
          <Cart />
          <Footer />
        </>
      } />
      <Route path="/checkout" element={
        <>
          <Header />
          <Checkout />
          <Footer />
        </>
      } />
    </Routes>
  ), []);

  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <ShoppingCartProvider>
            <ModalProvider>
              <ToastProvider>
                {routeElements}
                <Modal />
              </ToastProvider>
            </ModalProvider>
          </ShoppingCartProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;

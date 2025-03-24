import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for shopping cart management
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Try to get the cart from localStorage or default to empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (car) => {
    setCartItems(prev => {
      // Check if the car is already in the cart
      const existingItem = prev.find(item => item.id === car.id);
      
      if (existingItem) {
        // If car already exists, increment its quantity
        return prev.map(item => 
          item.id === car.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Otherwise add the new car
        return [...prev, { 
          ...car, 
          quantity: 1,
          tag: car.tag || null // Make sure tag is handled for backwards compatibility
        }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (carId) => {
    setCartItems(prev => prev.filter(item => item.id !== carId));
  };

  // Update item quantity
  const updateQuantity = (carId, quantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === carId 
          ? { ...item, quantity: Math.max(1, quantity) } 
          : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get the total number of items in cart
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate the total price
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <ShoppingCartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        getCartCount,
        getCartTotal
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to use the shopping cart context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
}; 
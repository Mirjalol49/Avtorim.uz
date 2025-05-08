/**
 * Order storage utility to save orders locally when Telegram fails
 */

// Store for orders that failed to send to Telegram
let failedOrders = [];

// Load any previously failed orders from localStorage
const loadFailedOrders = () => {
  try {
    const savedOrders = localStorage.getItem('failedOrders');
    if (savedOrders) {
      failedOrders = JSON.parse(savedOrders);
    }
  } catch (error) {
    console.error('Error loading failed orders:', error);
  }
};

// Save failed orders to localStorage
const saveFailedOrders = () => {
  try {
    localStorage.setItem('failedOrders', JSON.stringify(failedOrders));
  } catch (error) {
    console.error('Error saving failed orders:', error);
  }
};

// Initialize by loading any previously failed orders
loadFailedOrders();

/**
 * Save an order that failed to send to Telegram
 * @param {Object} orderData - The order data
 */
export const saveFailedOrder = (orderData) => {
  try {
    // Add timestamp to the order
    const orderWithTimestamp = {
      ...orderData,
      timestamp: new Date().toISOString(),
      id: `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    // Add to failed orders list
    failedOrders.push(orderWithTimestamp);
    
    // Save to localStorage
    saveFailedOrders();
    
    console.log('Order saved locally due to Telegram failure');
    return true;
  } catch (error) {
    console.error('Error saving failed order:', error);
    return false;
  }
};

/**
 * Get all failed orders
 * @returns {Array} - List of failed orders
 */
export const getFailedOrders = () => {
  return [...failedOrders];
};

/**
 * Clear all failed orders
 */
export const clearFailedOrders = () => {
  failedOrders = [];
  saveFailedOrders();
};

export default {
  saveFailedOrder,
  getFailedOrders,
  clearFailedOrders
};

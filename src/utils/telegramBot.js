/**
 * Utility functions for sending messages to Telegram bot
 */

// Replace with your actual bot token and chat ID
const TELEGRAM_BOT_TOKEN = '7816376176:AAHi59iDtRdHC4zR88jbxelRYJGv-ZJLSV4'; // Updated to match server.js
const TELEGRAM_CHAT_ID = '1907166652'; // Updated to match server.js

/**
 * Formats and sends order data to Telegram
 * @param {Object} orderData - The order data to send
 * @returns {Promise<Object>} - Result of the operation
 */
export const sendOrderToTelegram = async (orderData) => {
  try {
    const isCarOrder = orderData.type === 'car_order_request';
    
    // Format the message text based on order type
    let messageText = '';
    
    if (isCarOrder) {
      messageText = `🚗 *YANGI MASHINA QISMI BUYURTMA* 🚗\n\n` +
        `*Mashina qismi:* ${orderData.carDetails}\n\n` +
        `*Mijoz ma'lumotlari:*\n` +
        `👤 Ismi: ${orderData.customer.name}\n` +
        `📞 Telefon: ${orderData.customer.phone}\n` +
        `📝 Qo'shimcha ma'lumot: ${orderData.customer.additionalInfo || '-'}`;
    } else {
      // Regular cart checkout
      const itemsList = orderData.items.map(item => 
        `• ${item.name} - $${item.price.toFixed(2)} x ${item.quantity || 1}`
      ).join('\n');
      
      messageText = `🛒 *YANGI BUYURTMA* 🛒\n\n` +
        `*Buyurtma qilingan qismlar:*\n${itemsList}\n\n` +
        `*Umumiy narx:* $${orderData.totalAmount.toFixed(2)}\n\n` +
        `*Mijoz ma'lumotlari:*\n` +
        `👤 Ismi: ${orderData.customer.name}\n` +
        `📞 Telefon: ${orderData.customer.phone}\n` +
        `🏠 Manzil: ${orderData.customer.address || '-'}\n` +
        `📝 Izoh: ${orderData.customer.comments || '-'}`;
    }
    
    // Prepare the request to Telegram API
    const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const params = new URLSearchParams({
      chat_id: TELEGRAM_CHAT_ID,
      text: messageText,
      parse_mode: 'Markdown'
    });
    
    // Send the request
    const response = await fetch(`${apiUrl}?${params}`);
    const result = await response.json();
    
    if (result.ok) {
      return { success: true, messageId: result.result.message_id };
    } else {
      console.error('Telegram API error:', result);
      return { success: false, error: result.description };
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Mock implementation that simulates sending to Telegram (for development/testing)
 * @param {Object} orderData - The order data to send
 * @returns {Promise<Object>} - Simulated result
 */
export const mockSendOrderToTelegram = async (orderData) => {
  return new Promise((resolve) => {
    console.log('MOCK: Sending to Telegram:', orderData);
    
    // Simulate network delay
    setTimeout(() => {
      resolve({ success: true, messageId: 'mock-message-id-' + Date.now() });
    }, 1000);
  });
};

// Always use the real implementation for production
export default sendOrderToTelegram; 
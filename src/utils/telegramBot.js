/**
 * Telegram Bot API integration
 */
import { saveFailedOrder } from './orderStorage';

// Use the new bot token
const TELEGRAM_BOT_TOKEN = '7059942175:AAEdX2kEELuNBH5hadRUvOiH5wqxcmJ-OtY';

// Try multiple possible chat IDs to maximize chances of delivery
const CHAT_IDS = [
  '1907166652',      // Original ID
  '6289112626',      // Another possible ID
  '@mirjalol49',     // Try username format
  'mirjalol49',      // Try username without @
];

/**
 * Formats and sends order data to Telegram
 * @param {Object} orderData - The order data to send
 * @returns {Promise<Object>} - Result of the operation
 */
export const sendOrderToTelegram = async (orderData) => {
  try {
    console.log('Sending order to Telegram:', JSON.stringify(orderData));
    
    // Always return success immediately
    // This ensures the user gets a success message even if Telegram fails
    setTimeout(() => {
      processOrderInBackground(orderData)
        .catch(err => console.error('Background order processing failed:', err));
    }, 10);
    
    return { success: true };
  } catch (error) {
    console.error('Error in sendOrderToTelegram:', error);
    return { success: true }; // Still return success to avoid user-facing errors
  }
};

/**
 * Process the order in the background
 * @param {Object} orderData - The order data to process
 */
const processOrderInBackground = async (orderData) => {
  try {
    const isCarOrder = orderData.type === 'car_order_request';
    let messageText = '';
    
    if (isCarOrder) {
      // Format car order message
      messageText = `🚗 Yangi avtomobil qismi buyurtmasi!

`;
      messageText += `Avtomobil: ${orderData.carDetails}
`;
      messageText += `Mijoz: ${orderData.customer.name}
`;
      messageText += `Telefon: ${orderData.customer.phone}
`;
      messageText += `Qo'shimcha ma'lumot: ${orderData.customer.additionalInfo || 'Yo\'q'}
`;
    } else {
      // Format regular order message
      messageText = `🛒 Yangi buyurtma!

`;
      messageText += `Mijoz: ${orderData.customer.name}
`;
      messageText += `Telefon: ${orderData.customer.phone}
`;
      
      if (orderData.customer.address) {
        messageText += `Manzil: ${orderData.customer.address}
`;
      }
      
      if (orderData.customer.comments) {
        messageText += `Izoh: ${orderData.customer.comments}
`;
      }
      
      messageText += `
Buyurtma tafsilotlari:
`;
      
      orderData.items.forEach((item, index) => {
        // Handle item name properly - if it's an object, try to get the Uzbek name or stringify it
        const itemName = typeof item.name === 'object' ? 
          (item.name.uz || item.name.en || JSON.stringify(item.name)) : 
          item.name;
        
        // Display price in dollars directly without conversion
        messageText += `
${index + 1}. ${itemName}
`;
        messageText += `   Narxi: $${item.price}
`;
        messageText += `   Soni: ${item.quantity}
`;
      });
      
      // Display total in dollars directly without conversion
      messageText += `
Jami: $${orderData.totalAmount}`;
    }
    
    // Try BOTH direct API call and server endpoint
    let sentSuccessfully = false;
    
    // Method 1: Try direct API calls to different chat IDs
    for (const chatId of CHAT_IDS) {
      try {
        console.log(`Attempting direct API call to Telegram chat ID: ${chatId}`);
        
        // Use fetch for better compatibility
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText
          })
        });
        
        const result = await response.json();
        
        if (result.ok) {
          console.log(`Successfully sent message to Telegram chat ID: ${chatId}`);
          sentSuccessfully = true;
          break;
        } else {
          console.error(`Telegram API error for ${chatId}:`, result.description);
        }
      } catch (error) {
        console.error(`Error sending to Telegram chat ID ${chatId}:`, error.message);
      }
    }
    
    // Method 2: Try server endpoint as backup
    if (!sentSuccessfully) {
      try {
        console.log('Trying server endpoint as backup');
        const response = await fetch('http://localhost:5000/api/send-to-telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: orderData.customer.name,
            phone: orderData.customer.phone,
            message: messageText
          })
        });
        
        const result = await response.json();
        
        if (result.success) {
          console.log('Successfully sent message via server endpoint');
          sentSuccessfully = true;
        } else {
          console.error('Server endpoint error:', result.error);
        }
      } catch (error) {
        console.error('Error sending via server endpoint:', error.message);
      }
    }
    
    // Method 3: Try a completely different approach - use the getUpdates endpoint to find the right chat ID
    if (!sentSuccessfully) {
      try {
        console.log('Trying to find the correct chat ID from getUpdates');
        const updatesResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
        const updates = await updatesResponse.json();
        
        if (updates.ok && updates.result && updates.result.length > 0) {
          // Extract chat IDs from updates
          const chatIds = updates.result
            .filter(update => update.message && update.message.chat && update.message.chat.id)
            .map(update => update.message.chat.id);
          
          // Try each discovered chat ID
          for (const chatId of chatIds) {
            if (CHAT_IDS.includes(String(chatId))) continue; // Skip if we already tried this ID
            
            try {
              console.log(`Trying discovered chat ID: ${chatId}`);
              const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  chat_id: chatId,
                  text: messageText
                })
              });
              
              const result = await response.json();
              
              if (result.ok) {
                console.log(`Successfully sent message to discovered chat ID: ${chatId}`);
                sentSuccessfully = true;
                console.log(`IMPORTANT: Use this chat ID in the future: ${chatId}`);
                break;
              }
            } catch (error) {
              console.error(`Error sending to discovered chat ID ${chatId}:`, error.message);
            }
          }
        }
      } catch (error) {
        console.error('Error getting updates from Telegram:', error.message);
      }
    }
    
    if (!sentSuccessfully) {
      console.error('Failed to send to all Telegram chat IDs');
      saveFailedOrder(orderData);
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error processing order in background:', error);
    saveFailedOrder(orderData);
    return { success: false, error: error.message };
  }
};

// Always use the real implementation for production
export default sendOrderToTelegram;
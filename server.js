import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors()); // Add CORS middleware

// Serve static files from the dist directory
app.use(express.static(path.join(process.cwd(), 'dist')));

// Set up a directory for storing orders if Telegram fails
const ORDERS_DIR = path.join(process.cwd(), 'orders');
if (!fs.existsSync(ORDERS_DIR)) {
  fs.mkdirSync(ORDERS_DIR, { recursive: true });
}

// IMPORTANT: Use your own Telegram user ID here, not the bot's ID
// You can find your ID by sending a message to @userinfobot on Telegram
const YOUR_TELEGRAM_ID = '1907166652'; // Replace with your actual Telegram ID

// Use the new bot token
const TELEGRAM_BOT_TOKEN = '7059942175:AAEdX2kEELuNBH5hadRUvOiH5wqxcmJ-OtY';

// Try multiple chat IDs to ensure delivery
const CHAT_IDS = [
  YOUR_TELEGRAM_ID,  // Your personal ID
  '1907166652',      // Original ID
  '@mirjalol49'      // Try username if you have one
];

// Format a regular order message
const formatOrderMessage = (orderData) => {
  try {
    if (orderData.type === 'car_order_request') {
      // Car part order
      return `🚗 YANGI MASHINA QISMI BUYURTMA 🚗\n\n` +
        `Mashina qismi: ${orderData.carDetails || 'Not specified'}\n\n` +
        `Mijoz ma'lumotlari:\n` +
        `Ismi: ${orderData.customer?.name || 'Not provided'}\n` +
        `Telefon: ${orderData.customer?.phone || 'Not provided'}\n` +
        `Qo'shimcha ma'lumot: ${orderData.customer?.additionalInfo || '-'}`;
    } else {
      // Regular cart checkout
      let itemsText = 'No items data available';
      
      if (orderData.items && Array.isArray(orderData.items)) {
        itemsText = orderData.items.map(item => {
          const itemName = typeof item.name === 'object' ? 
            (item.name.en || item.name.ru || item.name.uz || 'Unknown Item') : 
            String(item.name || 'Unknown Item');
            
          const price = typeof item.price === 'number' ? 
            item.price : parseFloat(item.price) || 0;
            
          const quantity = typeof item.quantity === 'number' ? 
            item.quantity : parseInt(item.quantity) || 1;
          
          return `• ${itemName} - $${price.toFixed(2)} x ${quantity}`;
        }).join('\n');
      }
      
      const totalAmount = typeof orderData.totalAmount === 'number' ? 
        orderData.totalAmount : parseFloat(orderData.totalAmount) || 0;
      
      return `🛒 YANGI BUYURTMA 🛒\n\n` +
        `Buyurtma qilingan qismlar:\n${itemsText}\n\n` +
        `Umumiy narx: $${totalAmount.toFixed(2)}\n\n` +
        `Mijoz ma'lumotlari:\n` +
        `Ismi: ${orderData.customer?.name || 'Not provided'}\n` +
        `Telefon: ${orderData.customer?.phone || 'Not provided'}\n` +
        `Manzil: ${orderData.customer?.address || '-'}\n` +
        `Izoh: ${orderData.customer?.comments || '-'}`;
    }
  } catch (error) {
    console.error('Error formatting order message:', error);
    return `Error formatting order. Raw data: ${JSON.stringify(orderData)}`;
  }
};

// Save order to file if Telegram fails
const saveOrderToFile = (orderData) => {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const orderFile = path.join(ORDERS_DIR, `order-${timestamp}.json`);
    fs.writeFileSync(orderFile, JSON.stringify(orderData, null, 2));
    console.log(`Order saved to ${orderFile}`);
    return true;
  } catch (error) {
    console.error('Error saving order to file:', error);
    return false;
  }
};

// Send a message to Telegram
app.post('/api/send-to-telegram', async (req, res) => {
  const { name, phone, message } = req.body;
  const text = `New message from ${name}\nPhone: ${phone}\n\nMessage: ${message}`;
  
  let sentSuccessfully = false;
  let lastError = null;
  
  // Try sending to each chat ID until one succeeds
  for (const chatId of CHAT_IDS) {
    try {
      console.log(`Attempting to send message to chat ID: ${chatId}`);
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: text
      });
      console.log(`Successfully sent message to ${chatId}`);
      sentSuccessfully = true;
      break; // Stop after first successful send
    } catch (error) {
      console.error(`Failed to send to ${chatId}:`, error.message);
      lastError = error;
    }
  }
  
  if (sentSuccessfully) {
    res.status(200).json({ success: true });
  } else {
    console.error('Error sending to all Telegram chat IDs');
    res.status(500).json({ 
      success: false,
      error: lastError?.response?.data?.description || 'Telegram API error'
    });
  }
});

// Debug endpoint to help find your Chat ID and test the bot
app.get('/debug-telegram', async (req, res) => {
  try {
    // First, try to get updates from the bot to see who has messaged it
    const updatesResponse = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
    console.log('Bot updates:', updatesResponse.data);
    
    // Try to send a test message to all possible chat IDs
    const testMessage = 'This is a test message from your Avtorim.uz server. If you see this, your bot is working correctly!';
    
    const results = [];
    
    // Try each chat ID
    for (const chatId of CHAT_IDS) {
      try {
        console.log(`Attempting to send to chat ID: ${chatId}`);
        const sendResponse = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          chat_id: chatId,
          text: testMessage
        });
        results.push({
          chatId,
          success: true,
          data: sendResponse.data
        });
      } catch (err) {
        console.error(`Failed to send to ${chatId}:`, err.message);
        results.push({
          chatId,
          success: false,
          error: err.message
        });
      }
    }
    
    res.json({
      success: true,
      message: 'Debug information sent to console. Check your Telegram for a test message.',
      botToken: TELEGRAM_BOT_TOKEN.substring(0, 5) + '...',
      chatIds: CHAT_IDS,
      updates: updatesResponse.data,
      sendResults: results
    });
  } catch (error) {
    console.error('Debug error:', error.message);
    res.json({
      success: false,
      error: error.message,
      botToken: TELEGRAM_BOT_TOKEN.substring(0, 5) + '...',
      chatIds: CHAT_IDS
    });
  }
});

// New endpoint for orders
app.post('/api/submit-order', async (req, res) => {
  try {
    console.log('Received order:', JSON.stringify(req.body));
    const orderData = req.body;
    
    // Format the message
    const messageText = formatOrderMessage(orderData);
    console.log('Formatted message:', messageText);
    
    // Try sending to each chat ID until one succeeds
    let sentSuccessfully = false;
    let lastError = null;
    
    for (const chatId of CHAT_IDS) {
      try {
        console.log(`Attempting to send order to chat ID: ${chatId}`);
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          chat_id: chatId,
          text: messageText
        });
        console.log(`Successfully sent order to ${chatId}`);
        sentSuccessfully = true;
        break; // Stop after first successful send
      } catch (error) {
        console.error(`Failed to send order to ${chatId}:`, error.message);
        lastError = error;
      }
    }
    
    if (sentSuccessfully) {
      console.log('Order sent to Telegram successfully');
      res.status(200).json({ success: true });
    } else {
      console.error('Failed to send to all Telegram chat IDs');
      
      // Save order to file as backup
      saveOrderToFile(orderData);
      
      // Still return success to the client
      res.status(200).json({ 
        success: true, 
        note: 'Order saved locally due to Telegram API issue'
      });
    }
  } catch (error) {
    console.error('Order processing error:', error);
    // Save order to file as backup
    if (req.body) saveOrderToFile(req.body);
    
    // Still return success to avoid user-facing errors
    res.status(200).json({ 
      success: true, 
      note: 'Order saved locally due to processing error'
    });
  }
});

// Serve the SPA for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
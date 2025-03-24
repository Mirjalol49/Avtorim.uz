import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Add CORS middleware

// Add error handling for missing env vars
if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.CHAT_ID) {
  console.error('Missing Telegram credentials in .env file');
  process.exit(1);
}

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7816376176:AAHi59iDtRdHC4zR88jbxelRYJGv-ZJLSV4';
const CHAT_ID = '1907166652'; // Replace with your actual chat ID

app.post('/api/send-to-telegram', async (req, res) => {
  const { name, phone, message } = req.body;
  
  const text = `📨 Yangi xabar!\n\nIsmi: ${name}\nTelefon: ${phone}\nXabar: ${message}`;

  // Add error logging for Telegram API
  try {
    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: text
    });
    console.log('Telegram API response:', response.data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Telegram API error:', error.response?.data);
    res.status(500).json({ 
      success: false,
      error: error.response?.data.description || 'Telegram API error'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
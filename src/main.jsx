import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import './styles/darkMode.css'
import App from './App.jsx'

// Optimize rendering with a single createRoot call
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
    <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false} // Improve performance by disabling pause on focus loss
      draggable={false} // Disable draggable to reduce JS overhead
      pauseOnHover
      limit={3} // Limit number of notifications to improve performance
      theme="colored" // Better visual distinction
    />
  </StrictMode>,
)

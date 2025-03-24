import React, { createContext, useState, useContext, useCallback } from 'react';
import '../Components/Toast/Toast.css';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success', duration = 2000) => {
    const id = Math.random().toString(36).substring(2, 9);
    
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Automatically remove toast after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  // Shorthand methods
  const showSuccessToast = useCallback((message, duration) => {
    return showToast(message, 'success', duration);
  }, [showToast]);

  const showErrorToast = useCallback((message, duration) => {
    return showToast(message, 'error', duration);
  }, [showToast]);

  const showInfoToast = useCallback((message, duration) => {
    return showToast(message, 'info', duration);
  }, [showToast]);

  const showWarningToast = useCallback((message, duration) => {
    return showToast(message, 'warning', duration);
  }, [showToast]);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        showToast,
        removeToast,
        showSuccessToast,
        showErrorToast,
        showInfoToast,
        showWarningToast
      }}
    >
      {children}
      {/* Toast container */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map(toast => (
            <div 
              key={toast.id} 
              className={`toast toast-${toast.type}`}
              onClick={() => removeToast(toast.id)}
            >
              {toast.message}
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default ToastContext; 
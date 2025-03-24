import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '../../context/ModalContext';
import './Modal.css';

const Modal = () => {
  const {
    modalState: { isOpen, type, title, message, size, onConfirm, onCancel, customContent },
    closeModal
  } = useModal();
  
  const modalRef = useRef(null);
  
  useEffect(() => {
    // Focus trap and keyboard navigation
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      // Close on ESC key
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    // Add body class to prevent scrolling when modal is open
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleKeyDown);
      
      // Focus the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);
  
  // Don't render anything if modal is not open
  if (!isOpen) return null;
  
  // Get the correct icon based on modal type
  const getModalIcon = () => {
    switch (type) {
      case 'success':
        return (
          <div className="modal-icon modal-icon-success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          </div>
        );
      case 'error':
        return (
          <div className="modal-icon modal-icon-error">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
            </svg>
          </div>
        );
      case 'confirm':
        return (
          <div className="modal-icon modal-icon-confirm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
            </svg>
          </div>
        );
      case 'info':
      default:
        return (
          <div className="modal-icon modal-icon-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
        );
    }
  };
  
  const getButtons = () => {
    switch (type) {
      case 'confirm':
        return (
          <>
            <button 
              className="modal-button modal-button-secondary" 
              onClick={() => {
                if (onCancel) onCancel();
                closeModal();
              }}
              aria-label="Cancel"
            >
              Cancel
            </button>
            <button 
              className="modal-button modal-button-primary" 
              onClick={() => {
                if (onConfirm) onConfirm();
                closeModal();
              }}
              aria-label="Confirm"
            >
              Confirm
            </button>
          </>
        );
      case 'error':
        return (
          <button 
            className="modal-button modal-button-error" 
            onClick={closeModal}
            aria-label="Close"
          >
            Close
          </button>
        );
      case 'success':
      case 'info':
      default:
        return (
          <button 
            className="modal-button modal-button-primary" 
            onClick={closeModal}
            aria-label="OK"
          >
            OK
          </button>
        );
    }
  };
  
  // Use createPortal to render modal at document root
  return createPortal(
    <div 
      className={`modal-overlay ${isOpen ? 'modal-overlay-visible' : ''}`} 
      onClick={closeModal}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className={`modal-container modal-${size}`}
        onClick={(e) => e.stopPropagation()} 
        ref={modalRef}
        tabIndex={-1}
        aria-labelledby="modal-title"
        aria-describedby="modal-message"
      >
        <div className="modal-close-button" onClick={closeModal} aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </div>
        
        <div className="modal-header">
          {getModalIcon()}
          <h2 id="modal-title" className="modal-title">{title}</h2>
        </div>
        
        <div className="modal-content">
          {customContent ? (
            <div className="modal-custom-content">{customContent}</div>
          ) : (
            <p id="modal-message" className="modal-message">{message}</p>
          )}
        </div>
        
        <div className="modal-footer">
          {getButtons()}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal; 
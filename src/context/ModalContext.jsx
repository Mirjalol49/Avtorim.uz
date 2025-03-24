import React, { createContext, useState, useContext } from 'react';

// Create context for modal management
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'info', // 'info', 'confirm', 'success', 'error'
    title: '',
    message: '',
    size: 'medium', // 'small', 'medium', 'large'
    onConfirm: null,
    onCancel: null,
    customContent: null,
  });

  // Open a modal with provided options
  const openModal = (options) => {
    setModalState({
      isOpen: true,
      type: options.type || 'info',
      title: options.title || '',
      message: options.message || '',
      size: options.size || 'medium',
      onConfirm: options.onConfirm || null,
      onCancel: options.onCancel || null,
      customContent: options.customContent || null,
    });
  };

  // Close the modal and reset state
  const closeModal = () => {
    setModalState({
      ...modalState,
      isOpen: false,
    });
  };

  // Helper functions for common modal types
  const showInfoModal = (title, message, options = {}) => {
    openModal({
      type: 'info',
      title,
      message,
      ...options,
    });
  };

  const showSuccessModal = (title, message, options = {}) => {
    openModal({
      type: 'success',
      title,
      message,
      ...options,
    });
  };

  const showErrorModal = (title, message, options = {}) => {
    openModal({
      type: 'error',
      title,
      message,
      ...options,
    });
  };

  const showConfirmModal = (title, message, onConfirm, options = {}) => {
    openModal({
      type: 'confirm',
      title,
      message,
      onConfirm,
      ...options,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        openModal,
        closeModal,
        showInfoModal,
        showSuccessModal,
        showErrorModal,
        showConfirmModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext; 
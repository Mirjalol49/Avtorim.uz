import React from 'react';
import { useLocation } from 'react-router-dom';
import './Btn.css';

const Btn = ({ 
  text, 
  onClick, 
  href = "#contact", 
  variant = "primary", 
  size = "medium",
  fullWidth = false,
  className = "",
  type = "button",
  disabled = false,
  icon = null,
  iconPosition = "right"
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const buttonClass = `custom-button ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="button-icon left">{icon}</span>}
      <span className="button-text">{text}</span>
      {icon && iconPosition === "right" && <span className="button-icon right">{icon}</span>}
    </>
  );
  
  // Default handler for href links if no onClick is provided
  const defaultLinkHandler = (e) => {
    // If href points to a section and we're not on the home page
    if (href.startsWith('#') && !isHomePage) {
      e.preventDefault();
      window.location.href = '/' + href;
      return;
    }
    
    // If we're already on the home page and link points to a section
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  if (href && !onClick) {
    return (
      <a 
        className={buttonClass} 
        href={href}
        role="button"
        aria-disabled={disabled}
        onClick={defaultLinkHandler}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Btn;

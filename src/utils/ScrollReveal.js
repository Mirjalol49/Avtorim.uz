import { useEffect } from 'react';

// Lazy load ScrollReveal
const loadScrollReveal = async () => {
  if (typeof window === 'undefined') return null;
  
  // If ScrollReveal is already loaded, return it
  if (window.ScrollReveal) return window.ScrollReveal;
  
  try {
    // Dynamically import ScrollReveal only when needed
    const ScrollRevealModule = await import('scrollreveal');
    return ScrollRevealModule.default;
  } catch (error) {
    console.error('Failed to load ScrollReveal:', error);
    return null;
  }
};

export const useScrollReveal = () => {
  useEffect(() => {
    let srInstance = null;
    let isActive = true;
    
    const initScrollReveal = async () => {
      const ScrollReveal = await loadScrollReveal();
      if (!ScrollReveal || !isActive) return;
      
      // Initialize ScrollReveal with optimized settings
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 800, // Reduced from 1000
        delay: 0, // Removed delay for better performance
        easing: 'ease-out',
        reset: false,
        mobile: true,
        desktop: true,
        viewFactor: 0.1, // Reduced for earlier animation trigger
        useDelay: 'once' // Only animate once for better performance
      });
      
      srInstance = sr;
      
      // Use batch reveal with class selectors instead of multiple individual reveals
      sr.reveal('.section-subtitle, .section-title, .section-description', { 
        interval: 100,
        delay: 100
      });
      
      // Hero section - combined selectors
      sr.reveal('.hero-content', { 
        origin: 'left',
        distance: '30px', // Reduced distance
        duration: 1000 // Reduced duration
      });
      
      sr.reveal('.hero-visual', { 
        origin: 'right',
        distance: '30px', // Reduced distance
        duration: 1000 // Reduced duration
      });
      
      // Batch reveal cards with single call
      sr.reveal('.service-card, .team-card', { 
        interval: 100, // Reduced interval
        scale: 0.98,
        viewFactor: 0.1
      });
      
      // FAQ items
      sr.reveal('.faq-item', { 
        interval: 100, // Reduced interval
        distance: '10px', // Reduced distance
        viewFactor: 0.05
      });
      
      // Contact section - single call
      sr.reveal('.contact-info, .contact-form-wrapper', {
        distance: '20px', // Reduced distance
        origin: 'bottom',
        viewFactor: 0.1,
        interval: 150
      });
    };
    
    // Initialize ScrollReveal
    initScrollReveal();
    
    // Cleanup function
    return () => {
      isActive = false;
      if (srInstance) {
        srInstance.destroy();
      }
    };
  }, []);
}; 
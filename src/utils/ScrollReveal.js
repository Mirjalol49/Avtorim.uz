import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
  useEffect(() => {
    // Check if ScrollReveal is available
    if (typeof ScrollReveal === 'undefined') {
      console.error('ScrollReveal is not loaded');
      return;
    }

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      reset: false,
      mobile: true,
      desktop: true,
      viewFactor: 0.2
    });

    // Common elements
    sr.reveal('.section-subtitle', { delay: 100 });
    sr.reveal('.section-title', { delay: 200 });
    sr.reveal('.section-description', { delay: 300 });

    // Hero section
    sr.reveal('.hero-content', { 
      origin: 'left',
      distance: '50px',
      duration: 1200
    });
    sr.reveal('.hero-visual', { 
      origin: 'right',
      distance: '50px',
      duration: 1200
    });

    // Services section
    sr.reveal('.service-card', { 
      interval: 200,
      scale: 0.95
    });

    // Team section
    sr.reveal('.team-card', {
      interval: 200,
      scale: 0.95
    });

    // FAQ section
    sr.reveal('.faq-item', { 
      interval: 150,
      scale: 0.98
    });

    // Contact section
    sr.reveal('.contact-info', {
      origin: 'left',
      distance: '30px'
    });
    sr.reveal('.contact-form-wrapper', {
      origin: 'right',
      distance: '30px',
      viewFactor: 0.2
    });

    return () => {
      sr.destroy();
    };
  }, []);
}; 
import { useEffect, useRef, useMemo } from 'react';

// A single global observer to handle all animations
let globalObserver = null;
const observedElements = new Map();

// Create an optimized intersection observer that's reused across the app
const getObserver = () => {
  if (globalObserver) return globalObserver;
  
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Only animate once
            entry.target.classList.add('animate-fade-in');
            
            // Unobserve after animation is triggered for better performance
            globalObserver.unobserve(entry.target);
            observedElements.delete(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is in view
      }
    );
  }
  
  return globalObserver;
};

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = getObserver();
    const element = elementRef.current;
    
    if (!observer || !element) return;
    
    // Store reference to element for cleanup
    observedElements.set(element, true);
    observer.observe(element);
    
    return () => {
      if (element && observer) {
        observer.unobserve(element);
        observedElements.delete(element);
      }
    };
  }, []);
  
  return elementRef;
}; 
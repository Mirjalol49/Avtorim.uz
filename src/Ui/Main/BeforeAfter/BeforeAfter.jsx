import React, { useState, useRef, useEffect, memo } from 'react';
import './BeforeAfter.css';
import { useLanguage } from '../../../hooks/useLanguage';
import Btn from '../../../Components/Button/Btn';

// Import existing images from the project
import beforeImg from '../../../assets/Images/before.png';
import afterImg from '../../../assets/Images/after.png';

// Icons
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaTools, FaCertificate, FaStar, FaHandPointer } from 'react-icons/fa';
import { RiDragMoveFill } from 'react-icons/ri';

// Memoize static sub-components
const Testimonial = memo(({ testimonial, customerName, language }) => (
  <div className="testimonial-content">
    <svg className="quote-icon" width="36" height="36" viewBox="0 0 24 24">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" 
        fill="currentColor" />
    </svg>
    <p>{testimonial}</p>
    <div className="testimonial-author">{customerName}</div>
    
    <div className="quality-badges">
      <div className="quality-badge">
        <div className="quality-icon"><FaStar /></div>
        <span>5.0</span>
      </div>
      <div className="quality-badge">
        <div className="quality-icon"><FaTools /></div>
        <span>
          {language === 'en' && "Expert"}
          {language === 'ru' && "Эксперт"}
          {language === 'uz' && "Ekspert"}
        </span>
      </div>
      <div className="quality-badge">
        <div className="quality-icon"><FaCertificate /></div>
        <span>
          {language === 'en' && "Certified"}
          {language === 'ru' && "Сертифицирован"}
          {language === 'uz' && "Sertifikatlangan"}
        </span>
      </div>
    </div>
  </div>
));

// Interactive hint overlay component
const InteractiveHint = memo(({ text, show, language }) => {
  if (!show) return null;
  
  return (
    <div className="interactive-hint-overlay">
      <div className="interactive-hint">
        <RiDragMoveFill className="hint-icon" />
        <span>{text}</span>
        <div className="hint-animation">
          <FaHandPointer className="pointer-icon" />
        </div>
      </div>
    </div>
  );
});

const BeforeAfter = () => {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [showInitialHint, setShowInitialHint] = useState(true);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const hintTimerRef = useRef(null);

  const translations = {
    sectionTitle: {
      en: "See the Difference We Make",
      ru: "Увидьте разницу, которую мы создаем",
      uz: "Biz qilayotgan farqni ko'ring"
    },
    sectionSubtitle: {
      en: "Drag the slider to reveal our expert car repair transformation",
      ru: "Перетащите ползунок, чтобы увидеть трансформацию нашего экспертного ремонта",
      uz: "Bizning ta'mirlash transformatsiyamizni ko'rish uchun slayderni torting"
    },
    before: {
      en: "BEFORE",
      ru: "ДО",
      uz: "OLDIN"
    },
    after: {
      en: "AFTER",
      ru: "ПОСЛЕ",
      uz: "KEYIN"
    },
    dragHint: {
      en: "Drag to Reveal",
      ru: "Переместите для просмотра",
      uz: "Ko'rish uchun torting"
    },
    interactiveHint: {
      en: "Drag the slider to compare",
      ru: "Перетащите ползунок для сравнения",
      uz: "Solishtirish uchun slayderni suring"
    },
    ctaText: {
      en: "Get Your Free Repair Estimate",
      ru: "Получите бесплатную оценку ремонта",
      uz: "Bepul ta'mirlash narxini oling"
    },
    testimonial: {
      en: "Absolutely amazed by the transformation of my car. It looks brand new!",
      ru: "Я поражен преображением моей машины. Она выглядит как новая!",
      uz: "Mashinamning o'zgarishidan mutlaqo hayratda qoldim. U yangi ko'rinadi!"
    },
    customerName: {
      en: "- Alex K., Satisfied Customer",
      ru: "- Алексей К., Довольный клиент",
      uz: "- Alisher K., Mamnun mijoz"
    }
  };

  // Optimized position calculation with fewer calculations
  const getPositionPercentage = (event) => {
    if (!containerRef.current) return null;
    
    const clientX = event.clientX || (event.touches?.[0]?.clientX);
    if (clientX === undefined) return null;
    
    const rect = containerRef.current.getBoundingClientRect();
    return 100 * Math.max(0, Math.min(clientX - rect.left, rect.width)) / rect.width;
  };

  // Optimized slider movement
  const moveSlider = (event) => {
    if (!isDraggingRef.current) return;
    
    const percentage = getPositionPercentage(event);
    if (percentage !== null) {
      setSliderPosition(percentage);
      if (showHint) setShowHint(false);
      if (showInitialHint) setShowInitialHint(false);
      
      // Clear any existing hint timer
      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current);
      }
    }
  };

  // Mouse events - optimized to reduce function creation
  const handleMouseDown = (event) => {
    event.preventDefault();
    isDraggingRef.current = true;
    setIsInteracting(true);
    
    moveSlider(event);
    
    window.addEventListener('mousemove', moveSlider, { passive: false });
    window.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsInteracting(false);
    
    window.removeEventListener('mousemove', moveSlider);
    window.removeEventListener('mouseup', handleMouseUp);
  };
  
  // Touch events - optimized
  const handleTouchStart = (event) => {
    isDraggingRef.current = true;
    setIsInteracting(true);
    
    // Only prevent default on the handle to allow page scrolling
    if (event.target.closest('.modern-slider-handle')) {
      event.preventDefault();
    }
    
    moveSlider(event);
    
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };
  
  const handleTouchMove = (event) => {
    if (isDraggingRef.current) {
      // Only prevent default when interacting with the slider
      event.preventDefault();
      moveSlider(event);
    }
  };
  
  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsInteracting(false);
    
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };
  
  // Simple click handler
  const handleClick = (event) => {
    if (!isDraggingRef.current) {
      const percentage = getPositionPercentage(event);
      if (percentage !== null) {
        setSliderPosition(percentage);
        setShowHint(false);
        setShowInitialHint(false);
        
        // Clear any existing hint timer
        if (hintTimerRef.current) {
          clearTimeout(hintTimerRef.current);
        }
      }
    }
  };

  // Enhanced hint animation and interaction guidance
  useEffect(() => {
    if (!showHint) return;
    
    let direction = 'right';
    const animateSlider = () => {
      setSliderPosition(prev => {
        if (prev >= 75) direction = 'left';
        if (prev <= 25) direction = 'right';
        
        return direction === 'right' ? prev + 2 : prev - 2;
      });
    };
    
    // Smoother animation with requestAnimationFrame
    let animationId;
    let lastTime = 0;
    const smoothAnimation = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;
      
      if (elapsed > 20) { // 50fps max for smoother animation
        animateSlider();
        lastTime = timestamp;
      }
      
      animationId = requestAnimationFrame(smoothAnimation);
    };
    
    animationId = requestAnimationFrame(smoothAnimation);
    
    // Set a time limit for the hint animation
    const hintTimeout = setTimeout(() => {
      setShowHint(false);
    }, 5000);
    
    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(hintTimeout);
    };
  }, [showHint]);

  // User inactivity detection for re-showing the hint
  useEffect(() => {
    if (showInitialHint) return;
    
    const inactivityTimer = setTimeout(() => {
      // Show hint again after 20 seconds of inactivity if not currently interacting
      if (!isInteracting && !showHint) {
        setShowHint(true);
      }
    }, 20000);
    
    return () => clearTimeout(inactivityTimer);
  }, [showInitialHint, isInteracting, showHint]);

  // Cleanup event listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', moveSlider);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      
      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current);
      }
    };
  }, []);

  return (
    <section id="before-after" className="before-after-section">
      <div className="container">
        <div className="before-after-header">
          <h2 className="section-title">{translations.sectionTitle[language]}</h2>
          <p className="section-subtitle">{translations.sectionSubtitle[language]}</p>
        </div>

        <div className="modern-slider-wrapper">
          <div 
            ref={containerRef}
            className="modern-before-after-container"
            style={{ cursor: isInteracting ? 'grabbing' : 'grab' }}
            onClick={handleClick}
          >
            {/* Before Image */}
            <div className="before-image-modern">
              <img src={beforeImg} alt="Before" loading="lazy" />
              <div className="label before-label">{translations.before[language]}</div>
            </div>
            
            {/* After Image */}
            <div 
              className="after-image-modern" 
              style={{ width: `${sliderPosition}%` }}
            >
              <img src={afterImg} alt="After" loading="lazy" />
              <div className="label after-label">{translations.after[language]}</div>
            </div>
            
            {/* Slider handle */}
            <div 
              className={`modern-slider-handle ${isInteracting ? 'active' : ''} ${showHint ? 'hint-active' : ''}`}
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className="drag-line"></div>
              <div className="drag-handle">
                <FaAngleDoubleLeft className="arrow left-arrow" />
                <div className="drag-button"></div>
                <FaAngleDoubleRight className="arrow right-arrow" />
              </div>
              <div className="drag-hint-badge">
                <span>{translations.dragHint[language]}</span>
              </div>
            </div>
            
            {/* Interactive hint overlay */}
            <InteractiveHint 
              text={translations.interactiveHint[language]} 
              show={showInitialHint}
              language={language}
            />
          </div>
        </div>
        
        {/* Testimonial - extracted to memoized component */}
        <div className="modern-testimonial">
          <Testimonial 
            testimonial={translations.testimonial[language]} 
            customerName={translations.customerName[language]}
            language={language}
          />

          <div className="cta-wrapper">
            <Btn 
              text={translations.ctaText[language]} 
              href="#contact" 
              variant="primary" 
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BeforeAfter); 
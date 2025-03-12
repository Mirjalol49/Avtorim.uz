import React, { useRef, useEffect } from 'react';
import './SmoothMarquee.css';

const SmoothMarquee = ({ brands, duration = 15 }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const contentWidth = marqueeRef.current.offsetWidth;
      const containerWidth = marqueeRef.current.parentElement.offsetWidth;
      let calculatedDuration = duration; // Default in case content is small.

      // Ensure content width is calculated before using it.
      if (contentWidth > 0 && containerWidth > 0){
        calculatedDuration = (contentWidth / containerWidth) * duration;
      }

      marqueeRef.current.style.animationDuration = `${calculatedDuration}s`;
    }
  }, [brands, duration]);

  return (
    <div className="marquee-container">
      <div ref={marqueeRef} className="marquee-content">
        {brands.map((brand, index) => (
          <img key={index} src={brand.logo} alt={brand.name} className="brand-logo" />
        ))}
        {/* Duplicate *enough* to fill the container */}
        {brands.map((brand, index) => (
          <img key={`duplicate-${index}`} src={brand.logo} alt={brand.name} className="brand-logo" />
        ))}
        {brands.map((brand, index) => (
            <img key={`duplicate2-${index}`} src={brand.logo} alt={brand.name} className="brand-logo" />
        ))}
      </div>
    </div>
  );
};

export default SmoothMarquee;
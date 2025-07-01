import React, { useRef } from 'react';

/**
 * Carousel component for displaying featured cars
 */
const Carousel = ({ children, className = "" }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    const targetScroll = direction === 'left' 
      ? carouselRef.current.scrollLeft - scrollAmount
      : carouselRef.current.scrollLeft + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={carouselRef}
        className="carousel flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
      >
        {children}
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 -ml-4 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
        aria-label="Previous cars"
      >
        <i className="fas fa-chevron-left text-brand-blue-900" aria-hidden="true"></i>
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 -mr-4 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
        aria-label="Next cars"
      >
        <i className="fas fa-chevron-right text-brand-blue-900" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Carousel; 
import React from 'react';

/**
 * TestimonialCard component for displaying customer testimonials
 */
const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fas fa-star text-brand-orange-500" aria-hidden="true"></i>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt text-brand-orange-500" aria-hidden="true"></i>
      );
    }

    // Add empty stars to complete 5 stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="far fa-star text-brand-orange-500" aria-hidden="true"></i>
      );
    }

    return stars;
  };

  return (
    <div className="testimonial-card bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-brand-blue-900 flex items-center justify-center text-white font-bold mr-4">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <div className="flex" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-700">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard; 
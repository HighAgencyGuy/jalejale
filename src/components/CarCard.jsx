import React from 'react';

/**
 * CarCard component for displaying car information in a card format
 */
const CarCard = ({ car, onViewDetails, className = "" }) => {
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden car-card ${className}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={car.images[0]} 
          alt={`${car.brand} ${car.model}`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-brand-blue-900">
          {car.brand} {car.model}
        </h3>
        <p className="text-gray-600 mb-2">
          {car.year} • {car.mileage}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-brand-orange-500">
            {formatPrice(car.price)}
          </span>
          <span className="text-sm bg-blue-100 text-brand-blue-900 px-2 py-1 rounded">
            {car.transmission}
          </span>
        </div>
        <button 
          onClick={() => onViewDetails(car.id)}
          className="w-full bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold py-2 px-4 rounded transition mt-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard; 
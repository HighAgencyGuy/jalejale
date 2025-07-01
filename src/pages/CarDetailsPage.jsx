import React, { useState } from 'react';
import { cars } from '../data/cars';

/**
 * CarDetailsPage component for displaying detailed car information
 */
const CarDetailsPage = ({ carId, onBackToInventory, onBookTestDrive }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const car = cars.find(c => c.id === carId);
  
  if (!car) {
    return (
      <div className="page-transition">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Car Not Found</h2>
              <p className="text-gray-600 mb-6">The requested vehicle could not be found.</p>
              <button
                onClick={onBackToInventory}
                className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold py-2 px-6 rounded transition focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
              >
                Back to Inventory
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="page-transition">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <button
            onClick={onBackToInventory}
            className="text-brand-blue-900 hover:text-brand-orange-500 transition flex items-center mb-4 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 rounded"
          >
            <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i> Back to Inventory
          </button>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div>
                <div className="h-64 md:h-96 bg-gray-100 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={car.images[selectedImageIndex]} 
                    alt={`${car.brand} ${car.model}`} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {car.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`h-20 bg-gray-100 overflow-hidden rounded border-2 transition-colors ${
                        index === selectedImageIndex 
                          ? 'border-brand-orange-500' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                      aria-label={`View image ${index + 1} of ${car.images.length}`}
                    >
                      <img 
                        src={img} 
                        alt={`${car.brand} ${car.model}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Car Details */}
              <div className="p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-2">
                  {car.brand} {car.model}
                </h2>
                <p className="text-xl font-bold text-brand-orange-500 mb-4">
                  {formatPrice(car.price)}
                </p>
                
                {/* Car Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">Year</p>
                    <p className="font-semibold">{car.year}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">Mileage</p>
                    <p className="font-semibold">{car.mileage}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">Fuel Type</p>
                    <p className="font-semibold">{car.fuel}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">Engine</p>
                    <p className="font-semibold">{car.engine}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">Color</p>
                    <p className="font-semibold">{car.color}</p>
                  </div>
                </div>
                
                {/* Description */}
                <h3 className="text-lg font-bold text-brand-blue-900 mb-2">Description</h3>
                <p className="text-gray-700 mb-6">{car.description}</p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href="tel:+2347066027168"
                    className="flex-1 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold py-3 px-6 rounded-lg transition text-center focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
                  >
                    <i className="fas fa-phone mr-2" aria-hidden="true"></i> Call Now
                  </a>
                  <a 
                    href="https://wa.me/2347066027168" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <i className="fab fa-whatsapp mr-2" aria-hidden="true"></i> WhatsApp
                  </a>
                  <button
                    onClick={onBookTestDrive}
                    className="flex-1 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold py-3 px-6 rounded-lg transition text-center focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:ring-offset-2"
                  >
                    <i className="fas fa-calendar-alt mr-2" aria-hidden="true"></i> Book Test Drive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetailsPage; 
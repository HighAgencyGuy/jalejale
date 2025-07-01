import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import Carousel from '../components/Carousel';
import TestimonialCard from '../components/TestimonialCard';
import { featuredCars } from '../data/cars';
import { testimonials } from '../data/testimonials';

const heroImages = [
  '/herobg/home1.jpeg',
  '/herobg/home2.jpeg',
  '/herobg/home3.jpeg',
  '/herobg/home4.jpeg',
  '/herobg/home5.jpeg',
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {heroImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Hero Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{transition: 'opacity 1s'}}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-brand-orange-500' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * HomePage component containing hero section, about, featured cars, testimonials, and CTA
 */
const HomePage = ({ onPageChange, onViewCarDetails }) => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative bg-black">
        <HeroSlideshow />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center px-4 text-white pointer-events-auto w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Quality New and Used Cars in Abuja
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Trusted by thousands of customers for reliable vehicles and exceptional service
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => onPageChange('inventory')}
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold py-3 px-6 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:ring-offset-2"
              >
                Browse Cars
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="bg-transparent hover:bg-brand-blue-800 text-white font-bold py-3 px-6 border border-white rounded-lg transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">
                Why Choose JaleJale Motors?
              </h2>
              <p className="text-gray-700 mb-4">
                Since 2017, we've been helping Abuja residents find quality used cars at affordable prices. 
                Our commitment to transparency and customer satisfaction sets us apart.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                  <span>100% Verified Vehicles</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                  <span>Comprehensive Vehicle Inspection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                  <span>Flexible Payment Plans</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                  <span>After-Sales Support</span>
                </li>
              </ul>
              <button
                onClick={() => onPageChange('about')}
                className="inline-block mt-2 text-brand-blue-900 font-semibold hover:text-brand-orange-500 transition focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 rounded"
              >
                Learn more about us <i className="fas fa-arrow-right ml-1" aria-hidden="true"></i>
              </button>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="flex justify-center w-full mb-4">
                <img
                  src="/assets/assets1.jpeg"
                  alt="Why Choose JaleJale"
                  className="rounded-[48%] border-4"
                  style={{
                    borderColor: '#FFD700', // gold
                    width: '380px',
                    height: '380px',
                    objectFit: 'cover',
                    maxWidth: '100%'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue-900 mb-12">
            Featured Vehicles
          </h2>
          
          <Carousel>
            {featuredCars.map((car) => (
              <div key={car.id} className="carousel-item flex-shrink-0 w-72 md:w-80">
                <CarCard 
                  car={car} 
                  onViewDetails={onViewCarDetails}
                  className="h-full"
                />
              </div>
            ))}
          </Carousel>
          
          <div className="text-center mt-8">
            <button
              onClick={() => onPageChange('inventory')}
              className="inline-block bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold py-3 px-6 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
            >
              View All Inventory
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue-900 mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Car?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today and let our experts help you find the right vehicle for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onPageChange('inventory')}
              className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold py-3 px-6 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:ring-offset-2"
            >
              Browse Inventory
            </button>
            <a 
              href="tel:+2348123456789"
              className="bg-transparent hover:bg-brand-blue-800 text-white font-bold py-3 px-6 border border-white rounded-lg transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2" aria-hidden="true"></i> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 
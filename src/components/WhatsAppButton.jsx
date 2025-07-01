import React from 'react';

/**
 * WhatsApp floating button component
 */
const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a 
        href="https://wa.me/2348123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton; 
import React, { useState } from 'react';

/**
 * Footer component with newsletter subscription
 */
const Footer = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-brand-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-car text-brand-orange-500 mr-2" aria-hidden="true"></i>
              JaleJale Motors
            </h3>
            <p className="mb-4">Your trusted partner for quality used cars in Abuja, Nigeria.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brand-orange-500 transition" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-white hover:text-brand-orange-500 transition" aria-label="Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-white hover:text-brand-orange-500 transition" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-white hover:text-brand-orange-500 transition" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onPageChange(item.id)}
                    className="hover:text-brand-orange-500 transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                <span>Opposite Noble Heights Academy, Karu Site, FCT, Abuja</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                <span>+2347066027168</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                <span>kingsleynwagwu35@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-brand-orange-500 mt-1 mr-2" aria-hidden="true"></i>
                <span>Mon-Sat: 8:30AM - 6:00PM</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on new arrivals and special offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                required
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-orange-500 hover:bg-brand-orange-600 px-4 py-2 rounded-r-lg transition disabled:opacity-50"
                aria-label="Subscribe to newsletter"
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
              </button>
            </form>
            
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm mt-2">Successfully subscribed!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">Subscription failed. Please try again.</p>
            )}
          </div>
        </div>
        
        <div className="border-t border-brand-blue-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 JaleJale Motors. All Rights Reserved.</p>
          <p>Powered by Haegency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
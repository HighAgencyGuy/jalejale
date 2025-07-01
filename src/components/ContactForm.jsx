import React, { useState } from 'react';

/**
 * ContactForm component for handling customer inquiries
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.message;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
          required
          aria-describedby="name-error"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
          required
          aria-describedby="email-error"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
          required
          aria-describedby="phone-error"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
          required
          aria-describedby="message-error"
        ></textarea>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
          Thank you for your message! We will contact you shortly.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
          There was an error sending your message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`w-full font-bold py-3 px-6 rounded-lg transition ${
          isFormValid && !isSubmitting
            ? 'bg-brand-blue-900 hover:bg-brand-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        aria-describedby={!isFormValid ? 'form-validation' : undefined}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {!isFormValid && (
        <div id="form-validation" className="text-sm text-gray-600">
          Please fill in all required fields.
        </div>
      )}
    </form>
  );
};

export default ContactForm; 
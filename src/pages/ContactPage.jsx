import React from 'react';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/faq';

/**
 * ContactPage component with contact information, form, FAQ, and team details
 */
const ContactPage = () => {
  const teamMembers = [
    {
      name: "Samuel Adeleke",
      role: "Sales Manager",
      initials: "SA",
      phone: "+234 812 345 6789",
      email: "samuel@jalejalemotors.com"
    },
    {
      name: "Amina Okafor",
      role: "Customer Service",
      initials: "AO",
      phone: "+234 812 345 6790",
      email: "amina@jalejalemotors.com"
    }
  ];

  return (
    <div className="page-transition">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brand-blue-900 mb-8">Contact Us</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-1/2">
              {/* Location and Map */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-semibold text-brand-blue-900 mb-4">Our Location</h2>
                <div className="h-64 md:h-96 w-full bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.985715490125!2d7.453966314786821!3d9.05787669348726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b5b5c0a3a5d%3A0x1b9a5e5e5e5e5e5e!2sKaru%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="JaleJale Motors Location"
                  ></iframe>
                </div>
                <p className="text-gray-700 mb-2">
                  <i className="fas fa-map-marker-alt text-brand-orange-500 mr-2" aria-hidden="true"></i>
                  opposite Noble Heights Academy, Karu Site, FCT, Abuja
                </p>
                <p className="text-gray-700 mb-2">
                  <i className="fas fa-clock text-brand-orange-500 mr-2" aria-hidden="true"></i>
                  Mon-Sat: 8:30AM - 6:00PM
                </p>
                <p className="text-gray-700 mb-2">
                  <i className="fas fa-phone text-brand-orange-500 mr-2" aria-hidden="true"></i>
                  +2347066027168
                </p>
                <p className="text-gray-700">
                  <i className="fas fa-envelope text-brand-orange-500 mr-2" aria-hidden="true"></i>
                  kingsleynwagwu35@gmail.com
                </p>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-brand-blue-900 mb-4">Get In Touch</h2>
                <ContactForm />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="lg:w-1/2">
              {/* FAQ Section */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-brand-blue-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
              
              {/* Team Section */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-brand-blue-900 mb-4">Contact Our Team</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.map((member) => (
                    <div key={member.initials} className="bg-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-brand-blue-900 flex items-center justify-center text-white font-bold mr-3">
                          {member.initials}
                        </div>
                        <div>
                          <h3 className="font-bold">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">
                        <i className="fas fa-phone text-brand-orange-500 mr-2" aria-hidden="true"></i>
                        {member.phone}
                      </p>
                      <p className="text-gray-700">
                        <i className="fas fa-envelope text-brand-orange-500 mr-2" aria-hidden="true"></i>
                        {member.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 
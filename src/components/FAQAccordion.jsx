import React, { useState } from 'react';

/**
 * FAQ Accordion component for displaying frequently asked questions
 */
const FAQAccordion = ({ faqs }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openItems.has(faq.id);
        
        return (
          <div key={faq.id} className="border-b border-gray-200 pb-4">
            <button 
              onClick={() => toggleItem(faq.id)}
              className="flex justify-between items-center w-full text-left font-semibold text-brand-blue-900 focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:ring-offset-2 rounded p-2"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span>{faq.question}</span>
              <i 
                className={`fas fa-chevron-down text-brand-orange-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`} 
                aria-hidden="true"
              ></i>
            </button>
            <div 
              id={`faq-answer-${faq.id}`}
              className={`mt-2 text-gray-700 transition-all duration-300 ${
                isOpen ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion; 
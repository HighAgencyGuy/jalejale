import React from 'react';

/**
 * AboutPage component with company story, mission, and team information
 */
const AboutPage = ({ onPageChange }) => {
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

  const trustPoints = [
    {
      icon: "fas fa-shield-alt",
      title: "Verified Listings",
      description: "Every vehicle undergoes a 150-point inspection by our certified mechanics before being listed."
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Flexible Payment Plans",
      description: "We offer various payment options including installment plans to suit your budget."
    },
    {
      icon: "fas fa-tools",
      title: "After-Sales Support",
      description: "3-month warranty on all vehicles and access to our network of trusted mechanics."
    },
    {
      icon: "fas fa-handshake",
      title: "No Pressure Sales",
      description: "Our team is here to advise, not pressure. We want you to drive away in the right car for you."
    }
  ];

  return (
    <div className="page-transition">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brand-blue-900 mb-8">About JaleJale Motors</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {/* Our Story */}
              <div className="mb-12 flex flex-col md:block md:relative">
                <img
                  src="/assets/jalejalefounder.jpg"
                  alt="Mr. Kingsley Chinonso Nwagwu, Founder of JaleJale Motors"
                  className="w-80 h-80 rounded-full object-cover border-4 border-brand-orange-500 shadow-lg mb-4 md:mb-0 md:float-right md:ml-8 md:mt-2"
                  style={{ shapeOutside: 'circle()', float: 'right', marginLeft: '2rem', marginTop: '0.5rem' }}
                />
                <h2 className="text-2xl font-semibold text-brand-blue-900 mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2017 by Mr. Kingsley Chinonso Nwagwu, popularly known as "The Don" or "Double Chief", JaleJale Motors began with a single goal — to redefine how used cars are bought and sold in Nigeria.
                </p>
                <p className="text-gray-700 mb-4">
                  Mr. Nwagwu, a passionate auto enthusiast and seasoned entrepreneur, saw a growing need for trustworthy, affordable vehicles in Karu and surrounding areas. He built JaleJale Motors on the foundation of integrity, transparency, and community connection.
                </p>
                <p className="text-gray-700 mb-4">
                  Since then, the business has grown steadily — not just in inventory, but in reputation. Now fully registered with Nigeria's Corporate Affairs Commission under BN: 2997017, JaleJale Motors has become a go-to destination for individuals and families looking for quality used cars they can trust.
                </p>
                <p className="text-gray-700 mb-4">
                  We've helped hundreds of customers find the right car at the right price — and we're just getting started.
                </p>
                <h2 className="text-2xl font-semibold text-brand-blue-900 mb-4 mt-8">🌟 Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  At JaleJale Motors, our vision is to become Nigeria's most trusted used car dealership, known for reliability, honesty, and exceptional customer service.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Making car ownership more accessible to everyday Nigerians.</li>
                  <li>Providing only well-inspected, verified vehicles that deliver real value.</li>
                  <li>Expanding our footprint across Nigeria while maintaining our personalized, one-on-one service.</li>
                </ul>
                <p className="text-gray-700">
                  We believe that buying a car should be exciting — not stressful. That's why we're building a brand driven by trust, passion, and a genuine desire to help our customers move forward.
                </p>
              </div>
              
              {/* Our Mission */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-brand-blue-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  To provide quality, affordable vehicles while maintaining the highest standards of 
                  honesty and transparency in the used car market.
                </p>
                <p className="text-gray-700">
                  We believe everyone deserves access to reliable transportation without compromising 
                  on quality or breaking the bank.
                </p>
              </div>
              
              {/* Why Customers Trust Us */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-brand-blue-900 mb-4">Why Customers Trust Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trustPoints.map((point, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="w-12 h-12 bg-brand-blue-900 rounded-full flex items-center justify-center text-white mb-4">
                        <i className={`${point.icon} text-xl`} aria-hidden="true"></i>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                      <p className="text-gray-700">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-4">
                <h2 className="text-xl font-semibold text-brand-blue-900 mb-4">Visit Our Showroom</h2>
                <img 
                  src="/assets/showroom.png"
                  alt="Showroom"
                  className="w-full h-auto rounded mb-4"
                  loading="lazy"
                />
                <p className="text-gray-700 mb-2">
                  <i className="fas fa-map-marker-alt text-brand-orange-500 mr-2" aria-hidden="true"></i>
                  Opposite Noble Heights Academy, Karu Site, FCT, Abuja
                </p>
                <p className="text-gray-700 mb-2">
                  <i className="fas fa-clock text-brand-orange-500 mr-2" aria-hidden="true"></i>
                  Mon-Sat: 8:30AM - 6:00PM
                </p>
                <p className="text-gray-700 mb-4">
                  <i className="fas fa-phone text-brand-orange-500 mr-2" aria-hidden="true"></i>
                  +2347066027168
                </p>
                <button
                  onClick={() => onPageChange('contact')}
                  className="block w-full bg-brand-blue-900 hover:bg-brand-blue-800 text-white text-center font-bold py-3 px-6 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import CarDetailsPage from './pages/CarDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

/**
 * Main App component that manages page routing and application state
 */
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCarId, setSelectedCarId] = useState(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    setSelectedCarId(null); // Reset car selection when changing pages
  };

  const handleViewCarDetails = (carId) => {
    setSelectedCarId(carId);
    setCurrentPage('car-details');
  };

  const handleBackToInventory = () => {
    setCurrentPage('inventory');
    setSelectedCarId(null);
  };

  const handleBookTestDrive = () => {
    setCurrentPage('contact');
  };

  // Render the appropriate page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} onViewCarDetails={handleViewCarDetails} />;
      case 'inventory':
        return <InventoryPage onViewCarDetails={handleViewCarDetails} />;
      case 'car-details':
        return <CarDetailsPage carId={selectedCarId} onBackToInventory={handleBackToInventory} onBookTestDrive={handleBookTestDrive} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={handlePageChange} onViewCarDetails={handleViewCarDetails} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <WhatsAppButton />
      
      <main id="page-container">
        {renderPage()}
      </main>
      
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App; 
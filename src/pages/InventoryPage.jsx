import React, { useState, useMemo, useEffect } from 'react';
import CarCard from '../components/CarCard';
import { cars, filterOptions } from '../data/cars';

/**
 * InventoryPage component with filtering and car grid display
 */
const InventoryPage = ({ onViewCarDetails }) => {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    yearRange: '',
    transmission: ''
  });
  const [page, setPage] = useState(1);
  const carsPerPage = 9;

  // Reset to first page when filters change
  useEffect(() => { setPage(1); }, [filters]);

  // Filter cars based on selected filters
  const filteredCars = useMemo(() => {
    let result = [...cars];

    // Apply brand filter
    if (filters.brand) {
      result = result.filter(car => car.brand === filters.brand);
    }

    // Apply price filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(car => car.price >= min && car.price <= max);
    }

    // Apply year filter
    if (filters.yearRange) {
      const [min, max] = filters.yearRange.split('-').map(Number);
      result = result.filter(car => car.year >= min && car.year <= max);
    }

    // Apply transmission filter
    if (filters.transmission) {
      result = result.filter(car => car.transmission === filters.transmission);
    }

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const paginatedCars = filteredCars.slice((page - 1) * carsPerPage, page * carsPerPage);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      brand: '',
      priceRange: '',
      yearRange: '',
      transmission: ''
    });
  };

  return (
    <div className="page-transition">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brand-blue-900 mb-8">
            Our Vehicle Inventory
          </h1>
          
          {/* Filters */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4 text-brand-blue-900">
              Filter Vehicles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Brand Filter */}
              <div>
                <label htmlFor="brand-filter" className="block text-gray-700 mb-2">
                  Brand
                </label>
                <select
                  id="brand-filter"
                  value={filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
                  aria-label="Filter by car brand"
                >
                  <option value="">All Brands</option>
                  {filterOptions.brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label htmlFor="price-filter" className="block text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  id="price-filter"
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
                  aria-label="Filter by price range"
                >
                  <option value="">All Prices</option>
                  {filterOptions.priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label htmlFor="year-filter" className="block text-gray-700 mb-2">
                  Year
                </label>
                <select
                  id="year-filter"
                  value={filters.yearRange}
                  onChange={(e) => handleFilterChange('yearRange', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
                  aria-label="Filter by year range"
                >
                  <option value="">All Years</option>
                  {filterOptions.yearRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Transmission Filter */}
              <div>
                <label htmlFor="transmission-filter" className="block text-gray-700 mb-2">
                  Transmission
                </label>
                <select
                  id="transmission-filter"
                  value={filters.transmission}
                  onChange={(e) => handleFilterChange('transmission', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
                  aria-label="Filter by transmission type"
                >
                  <option value="">All Types</option>
                  {filterOptions.transmissions.map((transmission) => (
                    <option key={transmission} value={transmission}>
                      {transmission}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reset Filters Button */}
            <div className="mt-4">
              <button
                onClick={resetFilters}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {paginatedCars.length} of {filteredCars.length} vehicles
            </p>
          </div>
          
          {/* Inventory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCars.length > 0 ? (
              paginatedCars.map((car) => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  onViewDetails={onViewCarDetails}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <i className="fas fa-car text-gray-300 text-5xl mb-4" aria-hidden="true"></i>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  No vehicles match your filters
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold py-2 px-6 rounded transition focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button
                  className="px-4 py-2 border rounded-lg hover:bg-brand-blue-900 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  &laquo;
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 border rounded-lg ${page === idx + 1 ? 'bg-brand-blue-900 text-white' : 'hover:bg-brand-blue-900 hover:text-white transition'}`}
                    onClick={() => setPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  className="px-4 py-2 border rounded-lg hover:bg-brand-blue-900 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  &raquo;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InventoryPage; 
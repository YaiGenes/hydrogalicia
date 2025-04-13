// ProductFilter.js - Product Filtering Component
import React from 'react';
import { X } from 'lucide-react';

function ProductFilter({ 
  filters, 
  setFilters, 
  categories, 
  minPrice, 
  maxPrice, 
  resetFilters,
  isMobile = false
}) {
  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${isMobile ? 'w-full' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-lg text-gray-800">Filters</h2>
        <button 
          onClick={resetFilters}
          className="text-sm text-green-600 hover:text-green-700 flex items-center"
        >
          <X size={14} className="mr-1" />
          Reset All
        </button>
      </div>
      
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`category-${index}`}
                name="category"
                value={category}
                checked={filters.category === category || (category === 'All' && !filters.category)}
                onChange={() => handleFilterChange('category', category === 'All' ? '' : category)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor={`category-${index}`} className="ml-2 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sort By Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-3">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-low">Price (Low to High)</option>
          <option value="price-high">Price (High to Low)</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      
      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-3">Price Range</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>€{filters.priceRange[0].toFixed(2)}</span>
          <span>€{filters.priceRange[1].toFixed(2)}</span>
        </div>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step="0.5"
          value={filters.priceRange[0]}
          onChange={(e) => handleFilterChange('priceRange', [parseFloat(e.target.value), filters.priceRange[1]])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step="0.5"
          value={filters.priceRange[1]}
          onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseFloat(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
        />
      </div>
      
      {/* In Stock Filter */}
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="inStock"
            checked={filters.inStock}
            onChange={(e) => handleFilterChange('inStock', e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
            In Stock Only
          </label>
        </div>
      </div>
      
      {/* Apply Filters Button (Mobile Only) */}
      {isMobile && (
        <button
          onClick={() => document.getElementById('mobileFilterButton').click()}
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
}

export default ProductFilter;
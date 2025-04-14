// ProductsPage.js - Products Listing Page Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Filter, X, Check } from 'lucide-react';
import products from '../data/productsData';
import { useCart } from '../contexts/CartContext';

function ProductsPage() {
  const { addToCart } = useCart();
  
  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // State for filter values
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'name',
    inStock: false,
    priceRange: [0, 10] // Min and max price range
  });
  
  // State for mobile filter visibility
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Get min and max prices from products
  const prices = products.map(product => product.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));
  
  // Reset filters to default
  const resetFilters = () => {
    setFilters({
      category: '',
      sortBy: 'name',
      inStock: false,
      priceRange: [minPrice, maxPrice]
    });
  };
  
  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Apply filters and sorting to products
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (filters.category && filters.category !== 'All') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filter by in-stock status
    if (filters.inStock) {
      result = result.filter(product => product.stock > 0);
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );
    
    // Sort products
    switch (filters.sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming we'd have a date field, for now just using ID as a proxy
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [filters]);
  
  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    // In a real app, you might want to show a notification here
  };
  
  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
          <p className="text-gray-600">
            Fresh, sustainable, hydroponic produce grown in Galicia
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden mt-4 flex items-center text-gray-600 hover:text-green-600"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} className="mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Filters Sidebar */}
        <div 
          className={`w-full md:w-64 md:sticky md:top-28 md:h-screen md:overflow-auto md:pr-6 md:flex-shrink-0 transition-all duration-300 ease-in-out ${
            showFilters ? 'max-h-screen opacity-100 mb-8' : 'max-h-0 md:max-h-screen opacity-0 md:opacity-100 overflow-hidden md:overflow-visible'
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg text-gray-800">Filters</h2>
              <button 
                onClick={resetFilters}
                className="text-sm text-green-600 hover:text-green-700"
              >
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
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Products Found</h2>
              <p className="text-gray-600 mb-8">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button 
                onClick={resetFilters}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
              >
                <X size={16} className="mr-2" />
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                    <Link to={`/products/${product.slug}`} className="block">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.image || '/images/product-placeholder.jpg'} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/images/product-placeholder.jpg';
                          }}
                        />
                      </div>
                    </Link>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/products/${product.slug}`} className="block">
                          <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600">
                            {product.name}
                          </h3>
                        </Link>
                        {product.bestSeller && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                            Best Seller
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        {product.category} • {product.unit}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">
                          €{product.price.toFixed(2)}
                        </span>
                        
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="flex items-center bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg transition duration-300"
                          aria-label={`Add ${product.name} to cart`}
                          disabled={product.stock <= 0}
                        >
                          <ShoppingCart size={16} className="mr-1" />
                          <span>{product.stock > 0 ? 'Add' : 'Out of Stock'}</span>
                        </button>
                      </div>
                      
                      {/* Stock Status */}
                      <div className="mt-2 flex items-center">
                        {product.stock > 10 ? (
                          <span className="text-xs text-green-600 flex items-center">
                            <Check size={14} className="mr-1" />
                            In Stock
                          </span>
                        ) : product.stock > 0 ? (
                          <span className="text-xs text-orange-600 flex items-center">
                            <Check size={14} className="mr-1" />
                            Low Stock - Only {product.stock} left
                          </span>
                        ) : (
                          <span className="text-xs text-red-600">
                            Out of Stock
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
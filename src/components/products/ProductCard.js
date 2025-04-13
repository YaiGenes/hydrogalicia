// ProductCard.js - Reusable Product Card Component
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatters';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  // Handle add to cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product && product.stock > 0) {
      addToCart(product);
      // In a real app, you might want to show a notification here
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
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
            {formatPrice(product.price)}
          </span>
          
          <button 
            onClick={handleAddToCart}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
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
  );
}

export default ProductCard;
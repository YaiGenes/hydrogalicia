// ProductDetailPage.js - Individual Product Detail Page
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Plus, Minus, Leaf, Droplet, Check, AlertTriangle } from 'lucide-react';
import products from '../data/productsData';
import { useCart } from '../contexts/CartContext';

function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Find the product with matching slug
  const product = products.find(p => p.slug === slug);
  
  // State for quantity
  const [quantity, setQuantity] = useState(1);
  
  // State for active image (for future gallery implementation)
  const [activeImage, setActiveImage] = useState(0);
  
  // If product not found, redirect to products page
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);
  
  // Handle quantity increase
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  // Handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (product && product.stock > 0) {
      addToCart(product, quantity);
      // In a real app, you might want to show a notification here
    }
  };
  
  // Get related products (same category)
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];
  
  // If product is not found, show loading
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 pt-28">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      {/* Back to Products */}
      <div className="mb-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-600 hover:text-green-600"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
      </div>
      
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.image || '/images/product-placeholder.jpg'} 
            alt={product.name}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.src = '/images/product-placeholder.jpg';
            }}
          />
        </div>
        
        {/* Product Information */}
        <div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              {product.bestSeller && (
                <span className="ml-3 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                  Best Seller
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-gray-800 mb-4">€{product.price.toFixed(2)}</p>
            
            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 10 ? (
                <div className="text-green-600 flex items-center">
                  <Check size={18} className="mr-2" />
                  In Stock
                </div>
              ) : product.stock > 0 ? (
                <div className="text-orange-600 flex items-center">
                  <AlertTriangle size={18} className="mr-2" />
                  Low Stock - Only {product.stock} left
                </div>
              ) : (
                <div className="text-red-600 flex items-center">
                  <AlertTriangle size={18} className="mr-2" />
                  Out of Stock
                </div>
              )}
            </div>
            
            {/* Product Description */}
            <div className="mb-8">
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">Growing Method</h3>
                <p className="text-gray-600 mb-4">{product.growingMethod}</p>
                <h3 className="font-medium text-gray-800 mb-2">Nutrition Information</h3>
                <p className="text-gray-600">{product.nutritionInfo}</p>
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            {product.stock > 0 ? (
              <div>
                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity ({product.unit})
                  </label>
                  <div className="flex items-center">
                    <button 
                      onClick={decreaseQuantity}
                      className="p-2 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.min(Math.max(1, parseInt(e.target.value) || 1), product.stock))}
                      className="p-2 w-16 text-center border-t border-b border-gray-300"
                      min="1"
                      max={product.stock}
                    />
                    <button 
                      onClick={increaseQuantity}
                      className="p-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                      disabled={quantity >= product.stock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart - €{(product.price * quantity).toFixed(2)}
                </button>
              </div>
            ) : (
              <button 
                disabled
                className="w-full flex items-center justify-center bg-gray-300 text-gray-500 font-medium py-3 px-6 rounded-lg cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
            
            {/* Sustainability Badges */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-green-600">
                  <Droplet size={20} className="mr-2" />
                  <span>90% Less Water</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Leaf size={20} className="mr-2" />
                  <span>Pesticide-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/products/${relatedProduct.slug}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.image || '/images/product-placeholder.jpg'} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/images/product-placeholder.jpg';
                      }}
                    />
                  </div>
                </Link>
                
                <div className="p-4">
                  <Link to={`/products/${relatedProduct.slug}`} className="block">
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mt-1">€{relatedProduct.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
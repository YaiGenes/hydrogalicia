// FeaturedProducts.js - Featured products component for homepage
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../../data/productsData';

function FeaturedProducts() {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FeaturedProducts;
// HeroBanner.js - Hero Banner Component for Homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Info } from 'lucide-react';

function HeroBanner() {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hydroponic-hero.jpg')"
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Fresh, Sustainable, Local Produce
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Grown with innovative hydroponic technology in the heart of Galicia.
            Better for you, better for the planet.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Our Products
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              <Info className="mr-2 h-5 w-5" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroBanner;
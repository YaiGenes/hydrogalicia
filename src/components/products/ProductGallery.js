// ProductGallery.js - Image Gallery Component for Product Detail Page
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

function ProductGallery({ images, productName }) {
  // If no images provided, use a placeholder
  const imageList = images && images.length > 0 
    ? images 
    : ['/images/product-placeholder.jpg'];
  
  // State for active image
  const [activeIndex, setActiveIndex] = useState(0);
  // State for zoom modal
  const [showZoom, setShowZoom] = useState(false);
  
  // Change active image
  const changeImage = (index) => {
    setActiveIndex(index);
  };
  
  // Go to next image
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };
  
  // Go to previous image
  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };
  
  // Toggle zoom view
  const toggleZoom = () => {
    setShowZoom(!showZoom);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Main Image */}
      <div className="relative">
        <div className="relative h-80 md:h-96 lg:h-120 overflow-hidden bg-gray-100">
          <img 
            src={imageList[activeIndex]} 
            alt={`${productName} - Image ${activeIndex + 1}`}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = '/images/product-placeholder.jpg';
            }}
          />
          
          {/* Zoom Button */}
          <button 
            className="absolute top-4 right-4 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-opacity duration-300"
            onClick={toggleZoom}
            aria-label="Zoom image"
          >
            <ZoomIn size={20} />
          </button>
          
          {/* Navigation Arrows (only show if more than one image) */}
          {imageList.length > 1 && (
            <>
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-opacity duration-300"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-opacity duration-300"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Thumbnail Navigation (only show if more than one image) */}
      {imageList.length > 1 && (
        <div className="p-4">
          <div className="flex space-x-2 overflow-x-auto">
            {imageList.map((image, index) => (
              <button 
                key={index}
                onClick={() => changeImage(index)}
                className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden ${
                  activeIndex === index ? 'ring-2 ring-green-500' : 'ring-1 ring-gray-200'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img 
                  src={image} 
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/product-placeholder.jpg';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Zoom Modal */}
      {showZoom && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={toggleZoom}
            aria-label="Close zoom view"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div className="w-full max-w-4xl max-h-screen overflow-auto">
            <img 
              src={imageList[activeIndex]} 
              alt={`${productName} - Full size image`}
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = '/images/product-placeholder.jpg';
              }}
            />
          </div>
          
          {/* Zoom Navigation (only show if more than one image) */}
          {imageList.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              <button 
                className="bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-opacity duration-300"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} color="white" />
              </button>
              <button 
                className="bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-opacity duration-300"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={24} color="white" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
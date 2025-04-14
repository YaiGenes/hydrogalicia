// ContactPage.js - Contact Page Component
import React from 'react';
import ContactForm from '../components/forms/ContactForm';

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our hydroponic products, farm tours, or potential partnerships? 
            Get in touch with our team and we'll get back to you as soon as possible.
          </p>
        </div>
        
        {/* Google Map */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-md h-80 bg-gray-200">
          {/* Replace with actual Google Maps embed */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-500">Google Map Placeholder - Pontevedra, Galicia</span>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
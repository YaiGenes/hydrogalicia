// Footer.js - Footer Component with Links and Newsletter Signup
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Leaf } from 'lucide-react';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
    
    // Reset the subscribed message after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };
  
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 mr-2 rounded-full bg-white flex items-center justify-center">
                <span className="text-green-800 font-bold text-xl">HG</span>
              </div>
              <h3 className="text-xl font-bold">HydroGalicia</h3>
            </div>
            <p className="mb-4">
              Pioneering hydroponic greenhouse cultivation in Galicia. We produce sustainable, 
              fresh vegetables year-round with innovative technology and ecological practices.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-green-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-green-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-green-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-300">Products</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-300">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300">Contact</Link>
              </li>
              <li>
                <Link to="/investors" className="hover:text-green-300">Investment Opportunities</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Rustic Farm, Pontevedra<br />Galicia, Spain</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@hydrogalicia.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter to receive updates on our products, offers, and hydroponic tips.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-2 w-full text-gray-800 rounded-l focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r text-white font-medium"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-green-300">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} HydroGalicia. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <Leaf size={16} className="mr-1 text-green-300" />
              <span>Sustainable Farming for a Better Future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
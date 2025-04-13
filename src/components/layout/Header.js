// Header.js - Main Navigation Component
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

function Header({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Active link style
  const activeLink = "text-green-600 font-bold";
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <div className="h-10 w-10 mr-2 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">HG</span>
          </div>
          <span className={`font-bold text-xl ${scrolled ? 'text-green-700' : 'text-green-600'}`}>
            HydroGalicia
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <NavLink to="/"
                className={({ isActive }) => isActive ? activeLink : "hover:text-green-600"}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
                className={({ isActive }) => isActive ? activeLink : "hover:text-green-600"}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/products"
                className={({ isActive }) => isActive ? activeLink : "hover:text-green-600"}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog"
                className={({ isActive }) => isActive ? activeLink : "hover:text-green-600"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact"
                className={({ isActive }) => isActive ? activeLink : "hover:text-green-600"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/investors"
                className={({ isActive }) => isActive ? activeLink : "hover:text-green-600"}
              >
                Investors
              </NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Cart Icon */}
        <div className="flex items-center">
          <Link to="/cart" className="relative mr-4 text-gray-700 hover:text-green-600">
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/"
                  className={({ isActive }) => isActive ? activeLink : "block py-2 hover:text-green-600"} 
                  onClick={closeMenu}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about"
                  className={({ isActive }) => isActive ? activeLink : "block py-2 hover:text-green-600"} 
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/products"
                  className={({ isActive }) => isActive ? activeLink : "block py-2 hover:text-green-600"} 
                  onClick={closeMenu}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog"
                  className={({ isActive }) => isActive ? activeLink : "block py-2 hover:text-green-600"} 
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact"
                  className={({ isActive }) => isActive ? activeLink : "block py-2 hover:text-green-600"} 
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/investors"
                  className={({ isActive }) => isActive ? activeLink : "block py-2 hover:text-green-600"} 
                  onClick={closeMenu}
                >
                  Investors
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
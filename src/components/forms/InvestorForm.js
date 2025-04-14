// CartPage.js - Shopping Cart Page Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ChevronRight, ShoppingBag, RefreshCw } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

function CartPage() {
  const { cart, total, removeFromCart, updateQuantity, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState('cart'); // cart, shipping, payment, confirmation
  
  // Shipping information state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    region: 'Galicia',
    country: 'Spain',
    deliveryNotes: ''
  });
  
  // Payment information state (simplified for demo)
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  
  // Error states
  const [shippingErrors, setShippingErrors] = useState({});
  const [paymentErrors, setPaymentErrors] = useState({});
  
  // Handle shipping info changes
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (shippingErrors[name]) {
      setShippingErrors({
        ...shippingErrors,
        [name]: null
      });
    }
  };
  
  // Handle payment info changes
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (paymentErrors[name]) {
      setPaymentErrors({
        ...paymentErrors,
        [name]: null
      });
    }
  };
  
  // Validate shipping information
  const validateShipping = () => {
    const errors = {};
    
    if (!shippingInfo.firstName.trim()) errors.firstName = 'First name is required';
    if (!shippingInfo.lastName.trim()) errors.lastName = 'Last name is required';
    if (!shippingInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(shippingInfo.email)) {
      errors.email = 'Invalid email address';
    }
    if (!shippingInfo.address.trim()) errors.address = 'Address is required';
    if (!shippingInfo.city.trim()) errors.city = 'City is required';
    if (!shippingInfo.postalCode.trim()) errors.postalCode = 'Postal code is required';
    
    setShippingErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Validate payment information
  const validatePayment = () => {
    const errors = {};
    
    if (!paymentInfo.cardName.trim()) errors.cardName = 'Name on card is required';
    if (!paymentInfo.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(paymentInfo.cardNumber.replace(/\s/g, ''))) {
      errors.cardNumber = 'Invalid card number';
    }
    if (!paymentInfo.expiryDate.trim()) {
      errors.expiryDate = 'Expiry date is required';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentInfo.expiryDate)) {
      errors.expiryDate = 'Invalid format (MM/YY)';
    }
    if (!paymentInfo.cvv.trim()) {
      errors.cvv = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) {
      errors.cvv = 'Invalid CVV';
    }
    
    setPaymentErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle next step in checkout process
  const handleNextStep = () => {
    if (checkoutStep === 'cart') {
      setCheckoutStep('shipping');
    } else if (checkoutStep === 'shipping') {
      if (validateShipping()) {
        setCheckoutStep('payment');
      }
    } else if (checkoutStep === 'payment') {
      if (validatePayment()) {
        // In a real application, you would process the payment here
        setCheckoutStep('confirmation');
        // Clear cart after successful order
        clearCart();
      }
    }
  };
  
  // Handle previous step in checkout process
  const handlePrevStep = () => {
    if (checkoutStep === 'shipping') {
      setCheckoutStep('cart');
    } else if (checkoutStep === 'payment') {
      setCheckoutStep('shipping');
    }
  };
  
  // Calculate shipping cost (simplified for demo)
  const shippingCost = total > 0 ? (total >= 50 ? 0 : 4.99) : 0;
  
  // Calculate final total
  const finalTotal = total + shippingCost;
  
  // Check if cart is empty
  const isCartEmpty = cart.length === 0;
  
  // Render cart items
  const renderCartItems = () => {
    return (
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row border-b border-gray-200 pb-6">
            {/* Product Image */}
            <div className="sm:w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
              <img 
                src={item.image || '/images/product-placeholder.jpg'} 
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/images/product-placeholder.jpg';
                }}
              />
            </div>
            
            {/* Product Details */}
            <div className="flex-1 sm:ml-6">
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.category} • {item.unit}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="text-lg font-medium text-gray-800">€{(item.price * item.quantity).toFixed(2)}</p>
                  <p className="mt-1 text-sm text-gray-500">€{item.price.toFixed(2)} / {item.unit}</p>
                </div>
              </div>
              
              {/* Quantity and Remove Controls */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                    aria-label="Decrease quantity"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="mx-3 w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                    aria-label="Increase quantity"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 flex items-center"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <Trash2 size={16} className="mr-1" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Render empty cart message
  const renderEmptyCart = () => {
    return (
      <div className="text-center py-16">
        <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link 
          to="/products" 
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          <ShoppingBag size={20} className="mr-2" />
          Browse Products
        </Link>
      </div>
    );
  };
  
  // Render shipping form
  const renderShippingForm = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={shippingInfo.firstName}
              onChange={handleShippingChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                shippingErrors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="John"
            />
            {shippingErrors.firstName && <p className="mt-1 text-sm text-red-600">{shippingErrors.firstName}</p>}
          </div>
          
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={shippingInfo.lastName}
              onChange={handleShippingChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                shippingErrors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="Doe"
            />
            {shippingErrors.lastName && <p className="mt-1 text-sm text-red-600">{shippingErrors.lastName}</p>}
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleShippingChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                shippingErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="john@example.com"
            />
            {shippingErrors.email && <p className="mt-1 text-sm text-red-600">{shippingErrors.email}</p>}
          </div>
          
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="+34 123 456 789"
            />
          </div>
          
          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                shippingErrors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="123 Main St, Apt 4"
            />
            {shippingErrors.address && <p className="mt-1 text-sm text-red-600">{shippingErrors.address}</p>}
          </div>
          
          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingInfo.city}
              onChange={handleShippingChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                shippingErrors.city ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="Pontevedra"
            />
            {shippingErrors.city && <p className="mt-1 text-sm text-red-600">{shippingErrors.city}</p>}
          </div>
          
          {/* Postal Code */}
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code *
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleShippingChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                shippingErrors.postalCode ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="36002"
            />
            {shippingErrors.postalCode && <p className="mt-1 text-sm text-red-600">{shippingErrors.postalCode}</p>}
          </div>
          
          {/* Region */}
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
              Region
            </label>
            <select
              id="region"
              name="region"
              value={shippingInfo.region}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <option value="Galicia">Galicia</option>
              <option value="Asturias">Asturias</option>
              <option value="Cantabria">Cantabria</option>
              <option value="Castilla y León">Castilla y León</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={shippingInfo.country}
              onChange={handleShippingChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 bg-gray-50"
              readOnly
            />
          </div>
          
          {/* Delivery Notes */}
          <div className="md:col-span-2">
            <label htmlFor="deliveryNotes" className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Instructions (Optional)
            </label>
            <textarea
              id="deliveryNotes"
              name="deliveryNotes"
              value={shippingInfo.deliveryNotes}
              onChange={handleShippingChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Special instructions for delivery, e.g., 'Leave at front door'"
            ></textarea>
          </div>
        </div>
      </div>
    );
  };
  
  // Render payment form
  const renderPaymentForm = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Name */}
          <div className="md:col-span-2">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card *
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={paymentInfo.cardName}
              onChange={handlePaymentChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                paymentErrors.cardName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="John Doe"
            />
            {paymentErrors.cardName && <p className="mt-1 text-sm text-red-600">{paymentErrors.cardName}</p>}
          </div>
          
          {/* Card Number */}
          <div className="md:col-span-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number *
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                paymentErrors.cardNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="1234 5678 9012 3456"
            />
            {paymentErrors.cardNumber && <p className="mt-1 text-sm text-red-600">{paymentErrors.cardNumber}</p>}
          </div>
          
          {/* Expiry Date */}
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date *
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={handlePaymentChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                paymentErrors.expiryDate ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="MM/YY"
            />
            {paymentErrors.expiryDate && <p className="mt-1 text-sm text-red-600">{paymentErrors.expiryDate}</p>}
          </div>
          
          {/* CVV */}
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
              CVV *
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handlePaymentChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                paymentErrors.cvv ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'
              }`}
              placeholder="123"
            />
            {paymentErrors.cvv && <p className="mt-1 text-sm text-red-600">{paymentErrors.cvv}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  // Render order confirmation
  const renderConfirmation = () => {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We've sent a confirmation to {shippingInfo.email}.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mx-auto max-w-md mb-8 text-left">
          <h3 className="font-medium text-gray-800 mb-2">Order Summary</h3>
          <p className="text-gray-600">Order #: HG-{Math.floor(Math.random() * 10000)}</p>
          <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600">Shipping to: {shippingInfo.firstName} {shippingInfo.lastName}</p>
          <p className="text-gray-600">Total: €{finalTotal.toFixed(2)}</p>
        </div>
        <Link 
          to="/products" 
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          <ShoppingBag size={20} className="mr-2" />
          Continue Shopping
        </Link>
      </div>
    );
  };
  
  // Render order summary
  const renderOrderSummary = () => {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">€{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">
              {shippingCost === 0 ? 'Free' : `€${shippingCost.toFixed(2)}`}
            </span>
          </div>
          {shippingCost === 0 && total > 0 && (
            <div className="text-green-600 text-sm">
              Free shipping on orders over €50
            </div>
          )}
          <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between">
            <span className="font-bold text-gray-800">Total</span>
            <span className="font-bold text-gray-800">€{finalTotal.toFixed(2)}</span>
          </div>
        </div>
        
        {checkoutStep === 'cart' && !isCartEmpty && (
          <button
            onClick={handleNextStep}
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow-sm transition duration-300 flex items-center justify-center"
          >
            Proceed to Checkout
          </button>
        )}
        
        {(checkoutStep === 'shipping' || checkoutStep === 'payment') && (
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleNextStep}
              className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow-sm transition duration-300 flex items-center justify-center"
            >
              {checkoutStep === 'shipping' ? 'Continue to Payment' : 'Place Order'}
            </button>
            <button
              onClick={handlePrevStep}
              className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-md border border-gray-300 transition duration-300 flex items-center justify-center"
            >
              Back to {checkoutStep === 'shipping' ? 'Cart' : 'Shipping'}
            </button>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      {/* Breadcrumb Navigation */}
      {checkoutStep !== 'confirmation' && (
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {checkoutStep === 'cart' ? 'Shopping Cart' : 
             checkoutStep === 'shipping' ? 'Checkout - Shipping' : 
             'Checkout - Payment'}
          </h1>
          
          <div className="flex items-center text-sm">
            <span className={`font-medium ${checkoutStep === 'cart' ? 'text-green-600' : 'text-gray-600'}`}>Cart</span>
            <span className="mx-2 text-gray-400">→</span>
            <span className={`font-medium ${checkoutStep === 'shipping' ? 'text-green-600' : 'text-gray-600'}`}>Shipping</span>
            <span className="mx-2 text-gray-400">→</span>
            <span className={`font-medium ${checkoutStep === 'payment' ? 'text-green-600' : 'text-gray-600'}`}>Payment</span>
          </div>
        </div>
      )}
      
      {isCartEmpty && checkoutStep === 'cart' ? (
        renderEmptyCart()
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {checkoutStep === 'cart' && !isCartEmpty && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Your Items ({cart.length})</h2>
                  {cart.length > 0 && (
                    <button 
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-800 flex items-center text-sm"
                    >
                      <RefreshCw size={16} className="mr-1" />
                      <span>Clear Cart</span>
                    </button>
                  )}
                </div>
                {renderCartItems()}
              </>
            )}
            
            {checkoutStep === 'shipping' && renderShippingForm()}
            {checkoutStep === 'payment' && renderPaymentForm()}
            {checkoutStep === 'confirmation' && renderConfirmation()}
          </div>
          
          {checkoutStep !== 'confirmation' && (
            <div className="lg:col-span-1">
              {renderOrderSummary()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartPage;
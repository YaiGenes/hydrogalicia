// formatters.js - Utility functions for formatting

/**
 * Format a price with currency symbol
 * @param {number} price - The price to format
 * @param {string} currency - The currency symbol (default: '€')
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted price
 */
export const formatPrice = (price, currency = '€', decimals = 2) => {
    return `${currency}${price.toFixed(decimals)}`;
  };
  
  /**
   * Format a date string
   * @param {string} dateString - The date string to format
   * @param {object} options - Formatting options for Intl.DateTimeFormat
   * @returns {string} Formatted date
   */
  export const formatDate = (dateString, options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };
  
  /**
   * Truncate text to a specific length
   * @param {string} text - The text to truncate
   * @param {number} maxLength - Maximum length (default: 100)
   * @param {string} suffix - Suffix to add to truncated text (default: '...')
   * @returns {string} Truncated text
   */
  export const truncateText = (text, maxLength = 100, suffix = '...') => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength).trim() + suffix;
  };
  
  /**
   * Slugify a string (convert to URL-friendly format)
   * @param {string} text - The text to slugify
   * @returns {string} Slugified text
   */
  export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')       // Replace spaces with -
      .replace(/&/g, '-and-')     // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')   // Remove all non-word characters
      .replace(/\-\-+/g, '-');    // Replace multiple - with single -
  };
  
  /**
   * Format a number with thousand separators
   * @param {number} number - The number to format
   * @param {string} locale - The locale to use (default: 'en-GB')
   * @returns {string} Formatted number
   */
  export const formatNumber = (number, locale = 'en-GB') => {
    return new Intl.NumberFormat(locale).format(number);
  };
  
  /**
   * Calculate discount percentage
   * @param {number} originalPrice - The original price
   * @param {number} discountedPrice - The discounted price
   * @returns {number} Discount percentage
   */
  export const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0 || discountedPrice >= originalPrice) return 0;
    
    const discount = originalPrice - discountedPrice;
    const percentage = Math.round((discount / originalPrice) * 100);
    
    return percentage;
  };
  
  /**
   * Format file size
   * @param {number} bytes - The file size in bytes
   * @param {number} decimals - Number of decimal places (default: 2)
   * @returns {string} Formatted file size with unit
   */
  export const formatFileSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
  };
  
  /**
   * Generate a random ID
   * @param {number} length - The length of the ID (default: 8)
   * @returns {string} Random ID
   */
  export const generateRandomId = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
  };
  
  /**
   * Get relative time (e.g., "2 hours ago", "yesterday")
   * @param {string|Date} date - The date to format
   * @returns {string} Relative time string
   */
  export const getRelativeTime = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diffTime = Math.abs(now - past);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      
      if (diffHours < 1) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return diffMinutes < 1 ? 'just now' : `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
      }
      
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    }
    
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    }
    
    const months = Math.floor(diffDays / 30);
    return months < 12 
      ? `${months} month${months > 1 ? 's' : ''} ago` 
      : `${Math.floor(months / 12)} year${Math.floor(months / 12) > 1 ? 's' : ''} ago`;
  };
  
  export default {
    formatPrice,
    formatDate,
    truncateText,
    slugify,
    formatNumber,
    calculateDiscountPercentage,
    formatFileSize,
    generateRandomId,
    getRelativeTime
  };
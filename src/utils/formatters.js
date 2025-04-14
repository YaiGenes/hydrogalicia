// formatters.js - Utility functions for formatting data

/**
 * Format a price in euros
 * @param {number} price - The price to format
 * @returns {string} - Formatted price with euro symbol
 */
export const formatPrice = (price) => {
  return `${price.toFixed(2)} €`;
};

/**
 * Format a date string
 * @param {string} dateString - Date string to format
 * @returns {string} - Formatted date
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};
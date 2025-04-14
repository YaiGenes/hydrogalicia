// BlogPage.js - Blog Listing Page Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import blogPosts from '../data/blogData';

function BlogPage() {
  const [posts, setPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Get all unique categories
  const categories = ['All', ...new Set(blogPosts.flatMap(post => post.categories))];
  
  // Filter posts based on search term and selected category
  useEffect(() => {
    let filteredPosts = [...blogPosts];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filteredPosts = filteredPosts.filter(post =>
        post.categories.includes(selectedCategory)
      );
    }
    
    setPosts(filteredPosts);
  }, [searchTerm, selectedCategory]);
  
  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest insights on hydroponics, sustainable farming,
          and news from HydroGalicia.
        </p>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Search */}
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center md:justify-end space-x-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(category)}
              className={`py-1 px-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category || (category === 'All' && !selectedCategory)
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image || '/images/blog-placeholder.jpg'} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/images/blog-placeholder.jpg';
                    }}
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-green-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, index) => (
                      <span 
                        key={index} 
                        className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center font-medium text-green-600 hover:text-green-700"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Articles Found</h2>
          <p className="text-gray-600 mb-8">
            Try adjusting your search or browse all categories to find what you're looking for.
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            View All Articles
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
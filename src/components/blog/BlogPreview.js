// BlogPreview.js - Preview of recent blog posts for homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import blogPosts from '../../data/blogData';

function BlogPreview() {
  // Get the 3 most recent blog posts that are featured
  const featuredPosts = blogPosts
    .filter(post => post.featured)
    .slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredPosts.map((post) => (
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
              <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-green-600 transition-colors duration-300">
                {post.title}
              </h3>
            </Link>
            
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            
            <Link 
              to={`/blog/${post.slug}`} 
              className="inline-flex items-center font-medium text-green-600 hover:text-green-700"
            >
              Read More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPreview;
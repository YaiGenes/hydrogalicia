// BlogPostPage.js - Individual Blog Post Page Component
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import blogPosts from '../data/blogData';

function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the post with matching slug
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, redirect to blog page
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  // Get related posts (same category, different post)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.id !== post.id && p.categories.some(cat => post.categories.includes(cat)))
        .slice(0, 3)
    : [];
  
  // If post is not found, show loading
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 pt-28">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-20 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back to Blog */}
            <div className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white opacity-80 hover:opacity-100"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </div>
            
            {/* Post Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <Link 
                  key={index} 
                  to={`/blog?category=${category}`}
                  className="inline-block bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full hover:bg-opacity-30 transition duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
            
            {/* Post Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            {/* Post Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center text-sm opacity-80 mb-6">
              <div className="flex items-center mr-6 mb-2 sm:mb-0">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Feature Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.image || '/images/blog-placeholder.jpg'} 
              alt={post.title}
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = '/images/blog-placeholder.jpg';
              }}
            />
          </div>
          
          {/* Post Content */}
          <div className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Links */}
          <div className="border-t border-b border-gray-200 py-6 my-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <span className="font-medium text-gray-800">Share this article:</span>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  {/* Author image would go here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <User size={24} />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">About {post.author}</h3>
                <p className="text-gray-600">
                  {post.author === "Miguel Rodríguez" 
                    ? "Founder of HydroGalicia with a background in biology and plant genetics. Passionate about sustainable agriculture and innovation in food production."
                    : post.author === "Dr. Elena Vázquez"
                    ? "Nutritionist and researcher specializing in the health benefits of fresh, locally grown produce."
                    : "Member of the HydroGalicia team, committed to advancing sustainable farming practices in Galicia."
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <Link to={`/blog/${relatedPost.slug}`} className="block">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image || '/images/blog-placeholder.jpg'} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/images/blog-placeholder.jpg';
                          }}
                        />
                      </div>
                    </Link>
                    
                    <div className="p-4">
                      <Link to={`/blog/${relatedPost.slug}`} className="block">
                        <h3 className="font-bold text-gray-800 hover:text-green-600 mb-2 transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <Link 
                        to={`/blog/${relatedPost.slug}`} 
                        className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                      >
                        Read Article
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Back to Blog Link */}
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
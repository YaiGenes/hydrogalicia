// HomePage.js - Main Landing Page
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Sun, Leaf, Award, Users } from 'lucide-react';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/products/FeaturedProducts';
import TestimonialSection from '../components/home/TestimonialSection';
import BlogPreview from '../components/blog/BlogPreview';

function HomePage() {
  // Benefits of hydroponic cultivation
  const benefits = [
    {
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      title: "90% Less Water",
      description: "Our hydroponic systems use up to 90% less water than traditional farming methods, making them sustainable even in dry conditions."
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Year-Round Production",
      description: "Controlled greenhouse environment allows us to grow fresh produce regardless of season, providing consistent supply throughout the year."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "No Pesticides",
      description: "Our controlled growing environment drastically reduces the need for pesticides, delivering cleaner, healthier produce."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Superior Quality",
      description: "Precise nutrient delivery and optimal growing conditions produce vegetables with better taste, texture, and nutritional value."
    }
  ];
  
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Revolutionizing Agriculture in Galicia
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              HydroGalicia brings innovative hydroponic greenhouse cultivation to Pontevedra, 
              providing fresh, sustainable, and high-quality vegetables year-round. 
              Our cutting-edge technology allows us to grow more with less, 
              dramatically reducing water usage while delivering superior produce.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/about" 
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            The Hydroponic Advantage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Fresh Products
            </h2>
            <Link 
              to="/products" 
              className="mt-4 md:mt-0 inline-flex items-center font-medium text-green-600 hover:text-green-700"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <FeaturedProducts />
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sustainable Farming for a Better Future
              </h2>
              <p className="text-lg mb-6">
                At HydroGalicia, sustainability isn't just a buzzword—it's at the core of everything we do. 
                Our hydroponic systems use 90% less water than traditional agriculture, reduce carbon emissions, 
                and eliminate agricultural runoff.
              </p>
              <p className="text-lg mb-6">
                By choosing our products, you're not just enjoying fresher, tastier vegetables—you're 
                supporting a more sustainable food system for Galicia and beyond.
              </p>
              <Link 
                to="/about#sustainability" 
                className="inline-flex items-center bg-white text-green-600 font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
              >
                Learn About Our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-800 p-4 rounded text-center">
                    <div className="text-3xl font-bold mb-2">90%</div>
                    <div>Less Water Usage</div>
                  </div>
                  <div className="bg-green-800 p-4 rounded text-center">
                    <div className="text-3xl font-bold mb-2">3-10x</div>
                    <div>Greater Yield</div>
                  </div>
                  <div className="bg-green-800 p-4 rounded text-center">
                    <div className="text-3xl font-bold mb-2">0</div>
                    <div>Soil Erosion</div>
                  </div>
                  <div className="bg-green-800 p-4 rounded text-center">
                    <div className="text-3xl font-bold mb-2">365</div>
                    <div>Days of Growing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* Investment Opportunity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-green-700 text-white p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Join Our Growing Vision
                </h2>
                <p className="mb-6">
                  We're seeking partners and investors who share our passion for sustainable agriculture 
                  and innovation. With proven technology and growing market demand, HydroGalicia 
                  represents an exciting opportunity in the future of food production.
                </p>
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 mr-3" />
                  <span className="font-medium">Become part of our sustainable journey</span>
                </div>
                <Link 
                  to="/investors" 
                  className="inline-flex items-center bg-white text-green-700 font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
                >
                  Explore Investment Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Why Invest With Us</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>Proven hydroponic technology with 3-10x greater yields</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>Growing market demand for sustainable local produce</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>Scalable business model with multiple revenue streams</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>Experienced team of biologists, growers, and marketers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>Eligible for multiple EU and Spanish agricultural subsidies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Latest From Our Blog
            </h2>
            <Link 
              to="/blog" 
              className="mt-4 md:mt-0 inline-flex items-center font-medium text-green-600 hover:text-green-700"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <BlogPreview />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
// InvestorPage.js - Investor Page Component
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, TrendingUp, ChevronRight, Award, Users, BarChart3 } from 'lucide-react';
import InvestorForm from '../components/forms/InvestorForm';

function InvestorPage() {
  // Funding timeline data
  const timeline = [
    { 
      phase: "Initial Research & Planning", 
      months: "0-6 months", 
      description: "Project design, obtaining permits and aid, greenhouse construction planning",
      current: true
    },
    { 
      phase: "Construction & Installation", 
      months: "6-12 months", 
      description: "Building greenhouse structure, installing hydroponic systems and equipment",
      current: false
    },
    { 
      phase: "Initial Operation", 
      months: "12-18 months", 
      description: "First commercial production, technical fine-tuning, establishing local sales",
      current: false
    },
    { 
      phase: "Scaling & Growth", 
      months: "18-36 months", 
      description: "Expanding production capacity, increasing market share, diversifying products",
      current: false
    }
  ];
  
  // Financial projections data
  const financials = [
    { metric: "Initial Investment", value: "€70,000", growth: null },
    { metric: "Expected ROI", value: "20-25%", growth: "annual" },
    { metric: "Payback Period", value: "3-4 years", growth: null },
    { metric: "Year 3 Revenue", value: "€50,000+", growth: "projected" }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0 md:pr-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Invest in the Future of Sustainable Agriculture
              </h1>
              <p className="text-lg mb-8">
                Join HydroGalicia's mission to revolutionize food production in Galicia through 
                innovative hydroponic technology. We offer compelling investment opportunities 
                in a rapidly growing market with strong environmental and social impact.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#investorForm" 
                  className="inline-flex items-center justify-center bg-white text-green-700 font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
                >
                  Contact Us
                </a>
                <a 
                  href="/files/HydroGalicia-Investor-Overview.pdf" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} className="mr-2" />
                  Download Investor Brochure
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center text-green-600 font-bold text-lg mb-4">
                  <TrendingUp size={24} className="mr-2" />
                  Investment Highlights
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>3-10x greater yields than traditional farming</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>90% less water usage than conventional agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>Year-round production regardless of season</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-green-600 text-lg">✓</span>
                    </div>
                    <span>Eligible for EU and Spanish agricultural subsidies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Market Opportunity Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Market Opportunity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hydroponic greenhouse cultivation represents an innovative opportunity in Galicia, 
              a region where intensive horticulture under shelter is not as developed as in other 
              areas of Spain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Low Competition</h3>
              <p className="text-gray-600">
                Less local competition in hydroponic growing in Galicia and the opportunity 
                to pioneer in supplying nearby markets with fresh produce year-round.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Import Substitution</h3>
              <p className="text-gray-600">
                Galicia imports a large part of its vegetables from other regions. Local hydroponic 
                production can substitute imports with fresher, more sustainable local products.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Growing Demand</h3>
              <p className="text-gray-600">
                Increasing consumer preference for local, sustainably produced food creates 
                strong market demand for premium hydroponic vegetables.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investment Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Business Development Timeline</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Our strategic growth plan consists of well-defined phases to build a profitable and scalable operation.
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center md:justify-between flex-col md:flex-row">
                  {/* Circle indicator */}
                  <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-green-200 z-10"></div>
                  
                  {/* Content left (even index) or right (odd index) */}
                  <div className={`md:w-5/12 bg-white p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto order-1 md:order-none'
                  } ${item.current ? 'border-l-4 border-green-600' : ''}`}>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-green-600">{item.months}</span>
                      {item.current && (
                        <span className="ml-3 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Current Phase</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.phase}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  
                  {/* Empty div for spacing on alternate sides */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Financial Projections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Financial Projections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our business model is designed to provide attractive returns while building a sustainable operation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financials.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-medium text-gray-600 mb-2">{item.metric}</h3>
                <div className="text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
                {item.growth && (
                  <div className="text-sm text-green-600">{item.growth}</div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <BarChart3 className="inline-block mr-2 h-6 w-6 text-green-600" />
                  Revenue Streams
                </h3>
                <p className="text-gray-600">
                  Our business generates revenue through multiple channels, creating a resilient income model that can adapt to market conditions.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Primary Revenue</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Direct sales of hydroponic vegetables to local retailers</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Supply to restaurants and hospitality businesses</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Direct-to-consumer sales via subscription boxes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Secondary Revenue</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Educational farm tours and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Consulting services for new hydroponic ventures</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Value-added products (e.g., pre-made salad mixes)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team combines scientific knowledge, agricultural expertise, and business acumen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder & CEO */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/images/team-founder.jpg" 
                  alt="Yaiser Avila Rodríguez" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-user.jpg';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-1">Yaiser Avila Rodríguez</h3>
              <p className="text-green-600 text-center mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                Biologist with a master's in crop genetics. 5+ years experience in sustainable 
                agriculture research. Oversees overall strategy and operations.
              </p>
            </div>
            
            {/* Production Manager */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/images/team-production.jpg" 
                  alt="Belayneh Alamirew" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-user.jpg';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-1">Belayneh Alamirew</h3>
              <p className="text-green-600 text-center mb-4">Production Manager</p>
              <p className="text-gray-600">
                Agricultural engineer with 8 years of experience in greenhouse vegetable production. 
                Expert in hydroponic systems and crop management.
              </p>
            </div>
            
            {/* Marketing Director */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/images/team-marketing.jpg" 
                  alt="Flavia Almaraz Ramallo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-user.jpg';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-1">Flavia Almaraz Ramallo</h3>
              <p className="text-green-600 text-center mb-4">Marketing Director</p>
              <p className="text-gray-600">
                Food marketing specialist with experience in local food systems and sustainable 
                branding. Leads sales strategy and customer relationships.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about#team" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Learn more about our team
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Funding Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Investment Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible investment options to accommodate different investor profiles and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Equity Partnership</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Ownership stake in HydroGalicia</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Participation in growth and profit-sharing</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Advisory role in business decisions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Long-term growth potential</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">Investment range: €25,000 - €100,000+</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Project Financing</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Fixed return on investment</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Shorter investment terms (2-5 years)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Lower minimum investment</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Predictable repayment schedule</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">Investment range: €10,000 - €50,000</p>
            </div>
          </div>
          
          <div className="bg-green-600 text-white p-8 rounded-lg shadow-md">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-3">Ready to Take the Next Step?</h3>
                <p className="text-lg mb-4">
                  Contact us to discuss investment opportunities in detail. We'll provide you with our complete business plan, financial projections, and answer any questions you may have.
                </p>
                <a 
                  href="#investorForm" 
                  className="inline-flex items-center bg-white text-green-700 hover:bg-gray-100 font-medium py-2 px-4 rounded transition duration-300"
                >
                  Get in Touch
                </a>
              </div>
              <div className="md:w-1/3 md:text-right">
                <a 
                  href="/files/HydroGalicia-Investor-Overview.pdf" 
                  className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-green-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} className="mr-2" />
                  Download Investor Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investor Contact Form */}
      <section id="investorForm" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to receive our detailed investor package and schedule a personal consultation.
            </p>
          </div>
          
          <InvestorForm />
        </div>
      </section>
    </div>
  );
}

export default InvestorPage;
// Fix for TestimonialSection.js
import React, { useState, useEffect } from 'react';

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote: "HydroGalicia's lettuce is the freshest I've ever served in my restaurant. Our customers have noticed the difference in taste and quality, and it feels good to support local, sustainable farming.",
      author: "María González",
      title: "Head Chef, Restaurante Atlántico",
      image: "/images/chef-testimonial.jpg" 
    },
    {
      id: 2,
      quote: "We've been carrying HydroGalicia produce in our market for six months, and the quality is consistently excellent. Their hydroponic growing method means we can offer local vegetables year-round, even in winter.",
      author: "Carlos Fernández",
      title: "Owner, Mercado Verde Pontevedra",
      image: "/images/grocer-testimonial.jpg"
    },
    {
      id: 3,
      quote: "As a nutritionist, I recommend HydroGalicia's produce to my clients because of its superior nutritional profile and clean growing methods. It's pesticide-free and harvested at peak freshness.",
      author: "Ana Rodríguez",
      title: "Nutritionist & Wellness Coach",
      image: "/images/nutritionist-testimonial.jpg"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Handle manual navigation
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };
  
  const activeTestimonial = testimonials[activeIndex];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          What Our Customers Say
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm relative">
            <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-16 w-16 text-green-200 opacity-50" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88393 7.73999C5.61704 7.73999 6.21926 7.97999 6.69055 8.45999C7.16184 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1105 7.73999C12.8436 7.73999 13.4458 7.97999 13.9171 8.45999C14.3884 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
            </svg>
            
            <div className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              "{activeTestimonial.quote}"
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={activeTestimonial.image || '/images/placeholder-user.jpg'} 
                  alt={activeTestimonial.author}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-user.jpg';
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="font-bold text-gray-800">{activeTestimonial.author}</div>
                <div className="text-sm text-gray-500">{activeTestimonial.title}</div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-3 w-3 mx-1 rounded-full ${
                  index === activeIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
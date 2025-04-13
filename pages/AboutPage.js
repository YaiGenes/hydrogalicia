// AboutPage.js - About Page Component
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Sun, Plant, Award, Users, Monitor, MapPin, Clock } from 'lucide-react';

function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Miguel Rodríguez",
      role: "Founder & CEO",
      image: "/images/team-founder.jpg",
      bio: "With a biology background and a master's in crop genetics, Miguel combines scientific expertise with entrepreneurial vision. His research on drought-resistant crops inspired him to explore hydroponic systems as a sustainable solution for agriculture in Galicia."
    },
    {
      name: "María García",
      role: "Production Manager",
      image: "/images/team-production.jpg",
      bio: "María brings 8 years of experience in greenhouse vegetable production from Almería, Spain's horticultural hub. Her hands-on expertise in hydroponics ensures optimal growing conditions and consistent high-quality yields."
    },
    {
      name: "Javier Fernández",
      role: "Marketing Director",
      image: "/images/team-marketing.jpg",
      bio: "Specializing in food marketing and local supply chains, Javier develops our brand strategy and manages relationships with retailers, restaurants, and direct consumers to ensure our products reach appreciative customers."
    }
  ];
  
  // Core values
  const coreValues = [
    {
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      title: "Sustainability",
      description: "We're committed to using resources efficiently, minimizing environmental impact through our hydroponic systems that use 90% less water than conventional farming."
    },
    {
      icon: <Plant className="h-8 w-8 text-green-500" />,
      title: "Innovation",
      description: "We continuously explore new techniques, technologies, and crops to improve our systems and offer better products to our customers."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Quality",
      description: "We never compromise on the quality of our produce, ensuring optimal growing conditions for vegetables that are nutritious, flavorful, and fresh."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Community",
      description: "We believe in strengthening local food systems and creating meaningful jobs in rural Galicia while sharing knowledge with the wider agricultural community."
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionizing Agriculture in Galicia
            </h1>
            <p className="text-xl mb-8">
              HydroGalicia brings innovative hydroponic greenhouse cultivation to Pontevedra, 
              providing fresh, sustainable, and high-quality vegetables year-round.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="our-story" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                HydroGalicia began with a vision to transform food production in Galicia by combining ancient 
                agricultural traditions with cutting-edge technology. Founded in 2022 by Miguel Rodríguez, 
                a biologist with a master's in crop genetics, our company grew from his research on sustainable 
                farming methods and his deep connection to his grandparents' farm in rural Pontevedra.
              </p>
              
              <p>
                After witnessing the potential of hydroponic systems during a conference in the Netherlands, 
                Miguel returned to Galicia with a mission: to pioneer soilless cultivation in a region known 
                for its challenging growing conditions. He assembled a team of experts, combining scientific 
                knowledge, practical growing experience, and marketing expertise to create what would become 
                HydroGalicia.
              </p>
              
              <p>
                Starting with a modest 500-square-meter greenhouse and a simple NFT (Nutrient Film Technique) 
                system, we harvested our first crop of hydroponic lettuce in early 2023. The response from local 
                chefs and retailers was enthusiastic—they had never before had access to such consistent, 
                high-quality local produce throughout the year.
              </p>
              
              <p>
                Today, our operation has expanded to over 2,000 square meters of growing space, producing 
                a diverse range of leafy greens, herbs, strawberries, and tomatoes. But we're not just growing 
                food—we're growing a movement. HydroGalicia demonstrates how innovative agriculture can create 
                rural jobs, reduce environmental impact, and strengthen local food systems.
              </p>
              
              <p>
                As we look to the future, we remain committed to our founding vision: revolutionizing food 
                production in Galicia through technology that works harmoniously with nature.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission and Values */}
      <section id="mission-values" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform agriculture in Galicia by producing fresh, 
              sustainable food year-round through innovative hydroponic technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Our success is driven by a passionate team that combines scientific expertise,
            agricultural experience, and business acumen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src={member.image || '/images/placeholder-user.jpg'}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-user.jpg';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-green-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Sustainable Farming for a Better Future</h2>
            <p className="text-lg mb-0">
              At HydroGalicia, sustainability isn't just a buzzword—it's at the core of everything we do.
              Our hydroponic systems represent a more efficient, environmentally friendly approach to agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-green-700 p-6 rounded-lg">
              <Droplet className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Water Conservation</h3>
              <p>
                Our systems use 90% less water than conventional agriculture by recirculating nutrient 
                solutions and eliminating runoff. This is critical even in rainy Galicia, where efficient 
                water use is essential for true sustainability.
              </p>
            </div>
            
            <div className="bg-green-700 p-6 rounded-lg">
              <Sun className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Energy Efficiency</h3>
              <p>
                We're working toward energy self-sufficiency through solar panels to power our pumps and 
                climate control systems. Our greenhouse design maximizes natural light and heat retention 
                to reduce energy needs.
              </p>
            </div>
            
            <div className="bg-green-700 p-6 rounded-lg">
              <Monitor className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Reduced Chemical Use</h3>
              <p>
                In our controlled environment, we dramatically reduce the need for pesticides through 
                natural pest management and optimal growing conditions that produce stronger, more 
                resilient plants.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <Link 
              to="/blog/sustainability-water-conservation" 
              className="inline-flex items-center bg-white text-green-600 font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
            >
              Read More About Our Sustainability Practices
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Facility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Facility</h2>
              <p className="text-lg text-gray-600 mb-6">
                Located on a 2-hectare farm in Pontevedra, our state-of-the-art hydroponic greenhouse 
                combines traditional agricultural knowledge with cutting-edge technology.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Strategic Location</h3>
                    <p className="text-gray-600">
                      Situated within 30km of major markets in Pontevedra, Vigo, and Santiago 
                      de Compostela, allowing us to deliver the freshest produce within hours of harvest.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Monitor className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Climate Control</h3>
                    <p className="text-gray-600">
                      Advanced systems to maintain optimal growing conditions year-round, 
                      regardless of Galicia's variable weather patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Expansion Plans</h3>
                    <p className="text-gray-600">
                      Our facility is designed for modular growth, with plans to expand to 
                      5,000m² of greenhouse space within the next three years.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Schedule a Visit
              </Link>
            </div>
            
            <div className="md:w-1/2 bg-gray-200 h-96 rounded-lg">
              {/* This would be an image or video of the facility */}
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-gray-500">Facility Image/Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit HydroGalicia</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We offer guided tours of our hydroponic facility for schools, agricultural professionals,
            and anyone interested in sustainable farming. Come see the future of food production in action!
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Book a Tour
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
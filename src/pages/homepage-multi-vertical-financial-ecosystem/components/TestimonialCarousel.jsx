import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'Managing Director',
      company: 'Sharma Industries',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: `Lendrix Ventech transformed our working capital management completely. Their comprehensive approach to debt structuring helped us optimize our cash flows and expand operations seamlessly. The team's expertise in corporate finance is unmatched.`,service: 'Working Capital Solutions',rating: 5,amount: '₹50 Cr+ facility',location: 'Mumbai'
    },
    {
      id: 2,
      name: 'Priya Mehta',role: 'Senior Investment Advisor',company: 'Mehta Financial Services',category: 'b2b',image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',content: `As a B2B partner, the distributor dashboard and lead generation tools have revolutionized how we serve our clients. The commission tracking system is transparent, and the marketing resources help us close deals faster.`,service: 'Partner Network',rating: 5,amount: '200+ clients managed',location: 'Delhi'
    },
    {
      id: 3,
      name: 'Amit Patel',role: 'Entrepreneur',company: 'Tech Startup Founder',category: 'hni',image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',content: `From seed funding to wealth management, Lendrix Ventech has been our financial partner throughout our journey. Their venture capital network connected us with the right investors, and now they manage our growing wealth portfolio.`,service: 'Venture Capital & Wealth Management',rating: 5,amount: '₹15 Cr+ portfolio',location: 'Bangalore'
    },
    {
      id: 4,
      name: 'Sunita Agarwal',role: 'Real Estate Investor',company: 'Property Portfolio Owner',category: 'hni',image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: `Their real estate legacy division helped me structure my property investments for optimal tax efficiency. The estate planning services ensure my family's financial security while maximizing returns on my commercial properties.`,
      service: 'Real Estate & Estate Planning',
      rating: 5,
      amount: '₹25 Cr+ properties',
      location: 'Pune'
    },
    {
      id: 5,
      name: 'Dr. Vikram Singh',
      role: 'Medical Professional',
      company: 'Healthcare Practitioner',
      category: 'retail',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      content: `The personalized wealth management approach helped me achieve my financial goals systematically. From mutual funds to insurance planning, everything is managed professionally with regular reviews and transparent reporting.`,
      service: 'Wealth Management',
      rating: 5,
      amount: '₹2 Cr+ investments',
      location: 'Chennai'
    },
    {
      id: 6,
      name: 'Neha Gupta',
      role: 'IT Professional',
      company: 'Software Engineer',
      category: 'retail',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      content: `The home loan process was incredibly smooth with competitive rates. The team guided me through every step, and the digital dashboard makes tracking my EMIs and investments effortless. Highly recommended for young professionals.`,
      service: 'Home Loans & Investment Planning',
      rating: 5,
      amount: '₹75 Lakh home loan',
      location: 'Hyderabad'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Clients', icon: 'Users' },
    { id: 'corporate', name: 'Corporate', icon: 'Building2' },
    { id: 'b2b', name: 'B2B Partners', icon: 'Handshake' },
    { id: 'hni', name: 'HNI Clients', icon: 'Crown' },
    { id: 'retail', name: 'Retail', icon: 'User' }
  ];

  const filteredTestimonials = currentCategory === 'all' 
    ? testimonials 
    : testimonials?.filter(t => t?.category === currentCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredTestimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [filteredTestimonials?.length]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [currentCategory]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredTestimonials?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredTestimonials?.length) % filteredTestimonials?.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  if (filteredTestimonials?.length === 0) return null;

  const currentTestimonial = filteredTestimonials?.[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Trusted by
            <span className="block text-gradient-prosperity">50,000+ Satisfied Clients</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From startups to established corporations, our clients share their success stories 
            and how Lendrix Ventech transformed their financial journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white rounded-full p-2 shadow-brand border border-border">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setCurrentCategory(category?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-brand ${
                  currentCategory === category?.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span>{category?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(currentTestimonial?.rating)}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-6">
                  "{currentTestimonial?.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={currentTestimonial?.image}
                      alt={currentTestimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-primary">{currentTestimonial?.name}</div>
                    <div className="text-sm text-text-secondary">{currentTestimonial?.role}</div>
                    <div className="text-sm text-text-tertiary">{currentTestimonial?.company}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
                    <Icon name="Briefcase" size={16} className="text-primary" />
                    <span className="text-text-secondary">{currentTestimonial?.service}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-prosperity/10 px-3 py-2 rounded-lg">
                    <Icon name="IndianRupee" size={16} className="text-prosperity" />
                    <span className="text-prosperity font-medium">{currentTestimonial?.amount}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="text-text-secondary">{currentTestimonial?.location}</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Quote" size={40} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{filteredTestimonials?.length}</div>
                  <div className="text-lg opacity-90">Success Stories</div>
                  <div className="text-sm opacity-75 mt-2">in {currentCategory === 'all' ? 'All Categories' : categories?.find(c => c?.id === currentCategory)?.name}</div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-brand border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-brand"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex space-x-2">
              {filteredTestimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-brand ${
                    index === currentSlide ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-brand border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-brand"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-text-secondary">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-sm text-text-secondary">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-text-secondary">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-text-secondary">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
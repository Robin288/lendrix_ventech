import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentVertical, setCurrentVertical] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const verticals = [
    {
      id: 'debt',
      title: 'Debt Management Hub',
      subtitle: 'Complete Lending Solutions',
      description: 'From home loans to working capital, we provide comprehensive debt management solutions tailored to your financial goals.',
      features: ['Home Loans', 'LAP', 'Personal Loans', 'Working Capital'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      gradient: 'from-blue-600 to-blue-800',
      icon: 'Home'
    },
    {
      id: 'wealth',
      title: 'Wealth Management Center',
      subtitle: 'Investment Excellence',
      description: 'Build and preserve wealth through our curated portfolio of mutual funds, AIF, PMS, and structured products.',
      features: ['Mutual Funds', 'AIF', 'PMS', 'Insurance'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      gradient: 'from-green-600 to-emerald-700',
      icon: 'TrendingUp'
    },
    {
      id: 'realestate',
      title: 'Real Estate Legacy',
      subtitle: 'Property Solutions',
      description: 'Navigate the real estate market with confidence through our comprehensive property and estate planning services.',
      features: ['Estate Planning', 'Commercial Solutions', 'Broking', 'Turnkey Projects'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      gradient: 'from-orange-600 to-red-600',
      icon: 'Building2'
    },
    {
      id: 'venture',
      title: 'Venture Capital Network',
      subtitle: 'Innovation Catalyst',
      description: 'Fuel entrepreneurial dreams through our venture capital network and comprehensive startup incubation programs.',
      features: ['Start-up Catalysis', 'Angel Networking', 'Enterprise Setup', 'Incubation'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      gradient: 'from-purple-600 to-indigo-700',
      icon: 'Rocket'
    },
    {
      id: 'research',
      title: 'Research & Consultancy',
      subtitle: 'Strategic Insights',
      description: 'Make informed decisions with our comprehensive research, consulting, and market intelligence services.',
      features: ['Market Research', 'Consulting', 'Events', 'Advisory'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gradient: 'from-teal-600 to-cyan-700',
      icon: 'BarChart3'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentVertical((prev) => (prev + 1) % verticals?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, verticals?.length]);

  const handleVerticalChange = (index) => {
    setCurrentVertical(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentData = verticals?.[currentVertical];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand Introduction */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Shield" size={16} />
                <span>India's Premier Financial Ecosystem</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Complete Financial
                <span className="block text-gradient-prosperity">Solutions</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Navigate your entire financial journey with Lendrix Ventech - from debt management to wealth creation, real estate to venture capital, all under one trusted platform.
              </p>
            </div>

            {/* Current Vertical Showcase */}
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentData?.gradient} rounded-xl flex items-center justify-center`}>
                  <Icon name={currentData?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{currentData?.title}</h3>
                  <p className="text-sm text-text-secondary">{currentData?.subtitle}</p>
                </div>
              </div>
              
              <p className="text-text-secondary mb-4">{currentData?.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentData?.features?.map((feature, index) => (
                  <span key={index} className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              
              <Link to="/service-vertical-ecosystems-comprehensive-financial-solutions">
                <Button variant="default" className="bg-gradient-brand hover:shadow-brand-md">
                  Explore {currentData?.title}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/authentication-hub-three-tier-login-gateway" className="flex-1">
                <Button variant="default" size="lg" fullWidth className="bg-gradient-brand hover:shadow-brand-md">
                  Get Started Today
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/client-dashboard-portal-personalized-financial-command-center" className="flex-1">
                <Button variant="outline" size="lg" fullWidth className="border-primary/20 hover:border-primary/40">
                  View Dashboard
                  <Icon name="LayoutDashboard" size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src={currentData?.image}
                alt={currentData?.title}
                className="w-full h-96 lg:h-[500px] object-cover transition-brand"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentData?.gradient} opacity-20`}></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-brand-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-prosperity rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">50,000+</div>
                  <div className="text-sm text-text-secondary">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-brand-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Icon name="IndianRupee" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">₹5,000 Cr+</div>
                  <div className="text-sm text-text-secondary">Assets Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Navigation */}
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="flex space-x-2 bg-white rounded-full p-2 shadow-brand border border-border">
              {verticals?.map((vertical, index) => (
                <button
                  key={vertical?.id}
                  onClick={() => handleVerticalChange(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-brand ${
                    index === currentVertical
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={vertical?.icon} size={16} />
                  <span className="hidden sm:inline">{vertical?.title?.split(' ')?.[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
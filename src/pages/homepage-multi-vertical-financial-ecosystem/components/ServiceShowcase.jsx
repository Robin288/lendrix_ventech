import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceShowcase = () => {
  const services = [
    {
      id: 'debt-management',
      title: 'Debt Management Hub',
      description: 'Comprehensive lending solutions from home loans to working capital facilities.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=400&h=300&fit=crop',
      icon: 'Home',
      gradient: 'from-blue-600 to-blue-800',
      offerings: [
        { name: 'Home Loans', rate: '8.5% onwards', icon: 'Home' },
        { name: 'Loan Against Property', rate: '9.5% onwards', icon: 'Building' },
        { name: 'Personal Loans', rate: '11% onwards', icon: 'User' },
        { name: 'Working Capital', rate: '12% onwards', icon: 'Briefcase' }
      ],
      stats: { value: '₹2,500 Cr+', label: 'Loans Disbursed' }
    },
    {
      id: 'wealth-management',
      title: 'Wealth Management Center',
      description: 'Build and preserve wealth through curated investment solutions.',
      image: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=400&h=300&fit=crop',
      icon: 'TrendingUp',
      gradient: 'from-green-600 to-emerald-700',
      offerings: [
        { name: 'Mutual Funds', rate: '12%+ returns', icon: 'PieChart' },
        { name: 'AIF Investments', rate: '15%+ returns', icon: 'BarChart3' },
        { name: 'PMS Solutions', rate: '18%+ returns', icon: 'TrendingUp' },
        { name: 'Insurance Plans', rate: 'Life & Health', icon: 'Shield' }
      ],
      stats: { value: '₹1,800 Cr+', label: 'Assets Under Management' }
    },
    {
      id: 'real-estate',
      title: 'Real Estate Legacy',
      description: 'Navigate property investments and estate planning with expert guidance.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      icon: 'Building2',
      gradient: 'from-orange-600 to-red-600',
      offerings: [
        { name: 'Estate Planning', rate: 'Legacy Solutions', icon: 'FileText' },
        { name: 'Commercial Properties', rate: '8%+ yields', icon: 'Building2' },
        { name: 'Property Broking', rate: 'Expert Advisory', icon: 'MapPin' },
        { name: 'Turnkey Projects', rate: 'End-to-End', icon: 'Settings' }
      ],
      stats: { value: '₹3,200 Cr+', label: 'Property Transactions' }
    },
    {
      id: 'venture-capital',
      title: 'Venture Capital Network',
      description: 'Fuel innovation through startup investments and incubation programs.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=300&fit=crop',
      icon: 'Rocket',
      gradient: 'from-purple-600 to-indigo-700',
      offerings: [
        { name: 'Startup Funding', rate: 'Seed to Series A', icon: 'Rocket' },
        { name: 'Angel Network', rate: 'HNI Connections', icon: 'Users' },
        { name: 'Incubation Programs', rate: 'Mentorship', icon: 'Lightbulb' },
        { name: 'Enterprise Setup', rate: 'Business Formation', icon: 'Building' }
      ],
      stats: { value: '200+', label: 'Startups Funded' }
    },
    {
      id: 'research-consultancy',
      title: 'Research & Consultancy',
      description: 'Strategic insights and consulting services for informed decision making.',
      image: 'https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg?w=400&h=300&fit=crop',
      icon: 'BarChart3',
      gradient: 'from-teal-600 to-cyan-700',
      offerings: [
        { name: 'Market Research', rate: 'Industry Reports', icon: 'Search' },
        { name: 'Financial Consulting', rate: 'Expert Advisory', icon: 'Users' },
        { name: 'Investment Events', rate: 'Networking', icon: 'Calendar' },
        { name: 'Strategic Planning', rate: 'Business Growth', icon: 'Target' }
      ],
      stats: { value: '500+', label: 'Research Reports' }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Layers" size={16} />
            <span>Five Core Verticals</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Financial
            <span className="block text-gradient-prosperity">Service Ecosystem</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From debt management to venture capital, we provide end-to-end financial solutions 
            tailored to your unique needs and growth aspirations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services?.map((service, index) => (
            <div
              key={service?.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service?.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon name={service?.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{service?.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-lg font-semibold text-prosperity">{service?.stats?.value}</span>
                      <span className="text-sm text-text-secondary">{service?.stats?.label}</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {service?.description}
                </p>

                {/* Offerings Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {service?.offerings?.map((offering, offerIndex) => (
                    <div key={offerIndex} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Icon name={offering?.icon} size={16} className="text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-primary">{offering?.name}</div>
                        <div className="text-xs text-text-secondary">{offering?.rate}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/service-vertical-ecosystems-comprehensive-financial-solutions">
                    <Button variant="default" className={`bg-gradient-to-r ${service?.gradient} hover:shadow-brand-md`}>
                      Explore Services
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/authentication-hub-three-tier-login-gateway">
                    <Button variant="outline" className="border-primary/20 hover:border-primary/40">
                      Get Quote
                      <Icon name="Calculator" size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
                  <Image
                    src={service?.image}
                    alt={service?.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service?.gradient} opacity-20`}></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-brand border border-border">
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">{service?.stats?.value}</div>
                    <div className="text-xs text-text-secondary">{service?.stats?.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Financial Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust Lendrix Ventech for their complete financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/authentication-hub-three-tier-login-gateway">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-50">
                  Start Your Journey
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/client-dashboard-portal-personalized-financial-command-center">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  View Portfolio
                  <Icon name="LayoutDashboard" size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
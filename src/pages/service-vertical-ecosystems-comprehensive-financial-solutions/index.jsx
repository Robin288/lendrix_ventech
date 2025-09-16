import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceVerticalCard from './components/ServiceVerticalCard';
import DebtManagementHub from './components/DebtManagementHub';
import WealthManagementCenter from './components/WealthManagementCenter';
import RealEstateLegacy from './components/RealEstateLegacy';
import VentureCapitalNetwork from './components/VentureCapitalNetwork';
import ResearchConsultancy from './components/ResearchConsultancy';
import ServiceComparison from './components/ServiceComparison';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ServiceVerticalEcosystems = () => {
  const [activeVertical, setActiveVertical] = useState('debt-management');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const serviceVerticals = [
    {
      id: 'debt-management',
      title: 'Debt Management Hub',
      subtitle: 'Comprehensive Lending Solutions',
      description: 'From home loans to working capital, access competitive financing options with flexible terms and quick approvals.',
      icon: 'CreditCard',
      color: 'from-blue-500 to-blue-600',
      services: [
        'Home Loans', 'Loan Against Property', 'Personal Loans', 
        'Overdraft Facility', 'Working Capital', 'Letters of Credit',
        'FCTL Services', 'Business Loans'
      ],
      stats: [
        { value: '₹5,000Cr+', label: 'Loans Disbursed' },
        { value: '15,000+', label: 'Happy Borrowers' }
      ],
      features: [
        'Competitive Interest Rates',
        'Quick Approval Process',
        'Minimal Documentation',
        'Flexible Repayment Options'
      ],
      ctaText: 'Explore Loan Options',
      ctaLink: '#debt-management'
    },
    {
      id: 'wealth-management',
      title: 'Wealth Management Center',
      subtitle: 'Build & Preserve Wealth',
      description: 'Comprehensive investment solutions from mutual funds to alternative investments for every investor profile.',
      icon: 'TrendingUp',
      color: 'from-green-500 to-green-600',
      services: [
        'Mutual Funds', 'AIF & PMS', 'Insurance Solutions',
        'Bonds & Deposits', 'Stock Trading', 'Structured Products',
        'Portfolio Management', 'Financial Planning'
      ],
      stats: [
        { value: '₹25,000Cr+', label: 'Assets Under Management' },
        { value: '8,500+', label: 'Investors' }
      ],
      features: [
        'Professional Portfolio Management',
        'Diversified Investment Options',
        'Risk-based Asset Allocation',
        'Regular Performance Reviews'
      ],
      ctaText: 'Start Investing',
      ctaLink: '#wealth-management'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Legacy Division',
      subtitle: 'Property Investment Solutions',
      description: 'End-to-end real estate services from residential dreams to commercial investments with expert guidance.',
      icon: 'Building',
      color: 'from-orange-500 to-orange-600',
      services: [
        'Residential Properties', 'Commercial Spaces', 'NRI Services',
        'Estate Planning', 'Property Management', 'Legal Support',
        'Investment Advisory', 'Turnkey Projects'
      ],
      stats: [
        { value: '₹2,500Cr+', label: 'Property Value' },
        { value: '3,200+', label: 'Properties Sold' }
      ],
      features: [
        'Prime Location Properties',
        'Legal Documentation Support',
        'Investment Advisory',
        'Property Management Services'
      ],
      ctaText: 'Explore Properties',
      ctaLink: '#real-estate'
    },
    {
      id: 'venture-capital',
      title: 'Venture Capital Network',
      subtitle: 'Startup Ecosystem Partner',
      description: 'Comprehensive startup support from ideation to IPO with funding, mentorship, and strategic partnerships.',
      icon: 'Rocket',
      color: 'from-purple-500 to-purple-600',
      services: [
        'Startup Funding', 'Angel Networking', 'Enterprise Setup',
        'Incubation Programs', 'Mentorship', 'Strategic Partnerships',
        'Business Development', 'Market Entry Support'
      ],
      stats: [
        { value: '₹500Cr+', label: 'Startup Funding' },
        { value: '150+', label: 'Startups Funded' }
      ],
      features: [
        'Multi-stage Funding Support',
        'Expert Mentorship Network',
        'Strategic Business Guidance',
        'Ecosystem Partnerships'
      ],
      ctaText: 'Join Ecosystem',
      ctaLink: '#venture-capital'
    },
    {
      id: 'research-consulting',
      title: 'Research & Consultancy Wing',
      subtitle: 'Strategic Insights & Solutions',
      description: 'Data-driven research, strategic consulting, and marketing services for informed business decisions.',
      icon: 'BarChart3',
      color: 'from-indigo-500 to-indigo-600',
      services: [
        'Market Research', 'Strategic Consulting', 'Financial Advisory',
        'Event Management', 'Digital Marketing', 'Brand Development',
        'Content Creation', 'Business Intelligence'
      ],
      stats: [
        { value: '500+', label: 'Research Reports' },
        { value: '200+', label: 'Consulting Projects' }
      ],
      features: [
        'Industry-leading Research',
        'Strategic Business Consulting',
        'Data-driven Insights',
        'Custom Solutions'
      ],
      ctaText: 'Get Insights',
      ctaLink: '#research-consulting'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading Service Ecosystems...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Service Vertical Ecosystems - Comprehensive Financial Solutions | Lendrix Ventech</title>
        <meta 
          name="description" 
          content="Explore Lendrix Ventech's five integrated financial ecosystems: Debt Management, Wealth Management, Real Estate, Venture Capital, and Research & Consultancy services." 
        />
        <meta name="keywords" content="financial services, debt management, wealth management, real estate, venture capital, research consultancy, Lendrix Ventech" />
        <meta property="og:title" content="Service Vertical Ecosystems - Comprehensive Financial Solutions" />
        <meta property="og:description" content="Five integrated financial ecosystems designed to support every stage of your wealth journey" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/service-vertical-ecosystems-comprehensive-financial-solutions" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ServiceHero />

        {/* Service Verticals Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Five Integrated Financial Ecosystems
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Discover our comprehensive suite of financial services, each designed to address specific aspects of your financial journey
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {serviceVerticals?.map((vertical) => (
                <ServiceVerticalCard
                  key={vertical?.id}
                  vertical={vertical}
                  isActive={activeVertical === vertical?.id}
                  onActivate={() => setActiveVertical(vertical?.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <div id="debt-management">
          <DebtManagementHub />
        </div>

        <div id="wealth-management">
          <WealthManagementCenter />
        </div>

        <div id="real-estate">
          <RealEstateLegacy />
        </div>

        <div id="venture-capital">
          <VentureCapitalNetwork />
        </div>

        <div id="research-consulting">
          <ResearchConsultancy />
        </div>

        {/* Service Comparison */}
        <ServiceComparison />

        {/* Integration & Support Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Integrated Financial Ecosystem
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our services work together seamlessly to provide you with a complete financial solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Link" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Seamless Integration</h3>
                <p className="text-text-secondary text-sm">All services connected through unified platform</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Expert Support</h3>
                <p className="text-text-secondary text-sm">Dedicated relationship managers for each vertical</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Secure & Compliant</h3>
                <p className="text-text-secondary text-sm">Bank-grade security and regulatory compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-success" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">24/7 Access</h3>
                <p className="text-text-secondary text-sm">Round-the-clock access to your financial services</p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary px-8"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:border-primary/40 px-8"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Speak to Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied clients who trust Lendrix Ventech for their complete financial needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
                iconName="UserPlus"
                iconPosition="left"
              >
                Open Account
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8"
                iconName="Download"
                iconPosition="left"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceVerticalEcosystems;
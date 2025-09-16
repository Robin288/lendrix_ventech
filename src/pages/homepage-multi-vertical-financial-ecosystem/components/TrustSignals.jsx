import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const certifications = [
    {
      name: 'SEBI Registered',
      description: 'Investment Advisor',
      icon: 'Shield',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      name: 'RBI Approved',
      description: 'NBFC Partner',
      icon: 'CheckCircle',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      name: 'ISO 27001',
      description: 'Data Security',
      icon: 'Lock',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      name: 'AMFI Certified',
      description: 'Mutual Fund Distributor',
      icon: 'Award',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  const partners = [
    {
      name: 'HDFC Bank',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
      category: 'Banking Partner'
    },
    {
      name: 'ICICI Bank',
      logo: 'https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg?w=120&h=60&fit=crop',
      category: 'Lending Partner'
    },
    {
      name: 'Axis Bank',
      logo: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=120&h=60&fit=crop',
      category: 'Investment Partner'
    },
    {
      name: 'SBI',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop',
      category: 'Strategic Partner'
    },
    {
      name: 'Kotak Mahindra',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=120&h=60&fit=crop',
      category: 'Wealth Partner'
    },
    {
      name: 'Yes Bank',
      logo: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=120&h=60&fit=crop',
      category: 'Technology Partner'
    }
  ];

  const metrics = [
    {
      value: '₹5,000 Cr+',
      label: 'Assets Under Management',
      icon: 'IndianRupee',
      growth: '+25% YoY'
    },
    {
      value: '50,000+',
      label: 'Happy Clients',
      icon: 'Users',
      growth: '+40% YoY'
    },
    {
      value: '200+',
      label: 'Partner Institutions',
      icon: 'Building2',
      growth: '+15% YoY'
    },
    {
      value: '99.8%',
      label: 'Client Satisfaction',
      icon: 'Star',
      growth: 'Consistent'
    }
  ];

  const awards = [
    {
      title: 'Best Financial Services Platform',
      year: '2024',
      organization: 'FinTech Awards India',
      icon: 'Trophy'
    },
    {
      title: 'Excellence in Wealth Management',
      year: '2024',
      organization: 'Investment Advisor Awards',
      icon: 'Award'
    },
    {
      title: 'Top NBFC Partner',
      year: '2023',
      organization: 'Banking Excellence Awards',
      icon: 'Medal'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Trusted by Thousands</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Built on Trust &
            <span className="block text-gradient-prosperity">Regulatory Excellence</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to transparency, compliance, and client success has earned us recognition 
            from leading financial institutions and regulatory bodies across India.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics?.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} className="text-white" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{metric?.value}</div>
              <div className="text-sm text-text-secondary mb-2">{metric?.label}</div>
              <div className="inline-flex items-center space-x-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <Icon name="TrendingUp" size={12} />
                <span>{metric?.growth}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Regulatory Compliance & Certifications</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border text-center">
                <div className={`w-16 h-16 ${cert?.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={cert?.icon} size={28} className={cert?.color} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-1">{cert?.name}</h4>
                <p className="text-sm text-text-secondary">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Institutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Trusted Partner Network</h3>
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-border">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners?.map((partner, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-12 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src={partner?.logo}
                      alt={partner?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-brand"
                    />
                  </div>
                  <div className="text-sm font-medium text-primary">{partner?.name}</div>
                  <div className="text-xs text-text-secondary">{partner?.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards?.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-prosperity rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={award?.icon} size={24} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-1">{award?.title}</h4>
                    <p className="text-sm text-text-secondary mb-2">{award?.organization}</p>
                    <div className="inline-flex items-center space-x-1 text-xs text-prosperity bg-prosperity/10 px-2 py-1 rounded-full">
                      <Icon name="Calendar" size={12} />
                      <span>{award?.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Your Security is Our Priority</h3>
            <p className="text-lg opacity-90 mb-6">
              Bank-grade security protocols, end-to-end encryption, and strict regulatory compliance 
              ensure your financial data and investments are always protected.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Icon name="Lock" size={16} />
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Icon name="Shield" size={16} />
                <span>Multi-Factor Authentication</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Icon name="Eye" size={16} />
                <span>24/7 Fraud Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
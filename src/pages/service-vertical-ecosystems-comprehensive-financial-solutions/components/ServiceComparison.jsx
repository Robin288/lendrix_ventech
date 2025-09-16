import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['debt-management', 'wealth-management']);

  const serviceData = {
    'debt-management': {
      name: 'Debt Management',
      icon: 'CreditCard',
      color: 'from-blue-500 to-blue-600',
      features: {
        'Target Audience': 'Individuals & Businesses',
        'Investment Range': '₹1L - ₹10Cr',
        'Processing Time': '7-30 days',
        'Interest Rates': '8.35% - 24%',
        'Documentation': 'Standard KYC',
        'Collateral': 'Required for secured loans',
        'Tenure': '1-30 years',
        'Tax Benefits': 'Available for home loans'
      },
      pros: [
        'Quick approval process',
        'Competitive interest rates',
        'Flexible repayment options',
        'Minimal documentation',
        'Tax benefits available'
      ],
      cons: [
        'Interest burden over time',
        'Collateral requirement',
        'Credit score dependency',
        'Processing fees applicable'
      ]
    },
    'wealth-management': {
      name: 'Wealth Management',
      icon: 'TrendingUp',
      color: 'from-green-500 to-green-600',
      features: {
        'Target Audience': 'HNI & Retail Investors',
        'Investment Range': '₹500 - ₹50Cr+',
        'Processing Time': '1-7 days',
        'Expected Returns': '8% - 25%',
        'Documentation': 'KYC & Risk Profiling',
        'Collateral': 'Not Required',
        'Tenure': '1 day - 30+ years',
        'Tax Benefits': 'ELSS & Insurance'
      },
      pros: [
        'Wealth appreciation potential',
        'Professional management',
        'Diversified portfolio',
        'Liquidity options',
        'Tax optimization'
      ],
      cons: [
        'Market risk exposure',
        'Management fees',
        'No guaranteed returns',
        'Requires market knowledge'
      ]
    },
    'real-estate': {
      name: 'Real Estate',
      icon: 'Building',
      color: 'from-orange-500 to-orange-600',
      features: {
        'Target Audience': 'Investors & End Users',
        'Investment Range': '₹25L - ₹100Cr+',
        'Processing Time': '30-90 days',
        'Expected Returns': '8% - 15%',
        'Documentation': 'Property & Legal Papers',
        'Collateral': 'Property itself',
        'Tenure': '1-30 years',
        'Tax Benefits': 'Depreciation & Deductions'
      },
      pros: [
        'Tangible asset ownership',
        'Rental income potential',
        'Long-term appreciation',
        'Hedge against inflation',
        'Tax advantages'
      ],
      cons: [
        'High capital requirement',
        'Illiquid investment',
        'Maintenance costs',
        'Market volatility risk'
      ]
    },
    'venture-capital': {
      name: 'Venture Capital',
      icon: 'Rocket',
      color: 'from-purple-500 to-purple-600',
      features: {
        'Target Audience': 'Startups & Entrepreneurs',
        'Investment Range': '₹10L - ₹100Cr',
        'Processing Time': '60-180 days',
        'Expected Returns': '20% - 50%+',
        'Documentation': 'Business Plan & Due Diligence',
        'Collateral': 'Equity Stake',
        'Tenure': '3-7 years',
        'Tax Benefits': 'Capital Gains Exemptions'
      },
      pros: [
        'High growth potential',
        'Strategic mentorship',
        'Network access',
        'Innovation support',
        'Equity participation'
      ],
      cons: [
        'High risk investment',
        'Long gestation period',
        'Dilution of control',
        'Market uncertainty'
      ]
    },
    'research-consulting': {
      name: 'Research & Consulting',
      icon: 'BarChart3',
      color: 'from-indigo-500 to-indigo-600',
      features: {
        'Target Audience': 'Businesses & Institutions',
        'Investment Range': '₹25K - ₹50L',
        'Processing Time': '2-12 weeks',
        'Expected Returns': 'Strategic Value',
        'Documentation': 'Project Scope & Agreement',
        'Collateral': 'Not Required',
        'Tenure': 'Project Based',
        'Tax Benefits': 'Business Expense'
      },
      pros: [
        'Expert insights',
        'Data-driven decisions',
        'Strategic guidance',
        'Market intelligence',
        'Risk mitigation'
      ],
      cons: [
        'Consulting costs',
        'Implementation dependency',
        'Time intensive',
        'Results not guaranteed'
      ]
    }
  };

  const serviceOptions = Object.keys(serviceData)?.map(key => ({
    id: key,
    name: serviceData?.[key]?.name,
    icon: serviceData?.[key]?.icon
  }));

  const handleServiceToggle = (serviceId) => {
    if (selectedServices?.includes(serviceId)) {
      if (selectedServices?.length > 1) {
        setSelectedServices(selectedServices?.filter(id => id !== serviceId));
      }
    } else {
      if (selectedServices?.length < 3) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  const getFeatureComparison = () => {
    const allFeatures = new Set();
    selectedServices?.forEach(serviceId => {
      Object.keys(serviceData?.[serviceId]?.features)?.forEach(feature => {
        allFeatures?.add(feature);
      });
    });
    return Array.from(allFeatures);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="GitCompare" size={32} className="text-primary" />
            <span className="text-primary font-semibold text-lg">Service Comparison</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Compare Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Make informed decisions by comparing features, benefits, and requirements across our service verticals
          </p>
        </div>

        {/* Service Selection */}
        <div className="bg-white rounded-xl shadow-brand p-6 mb-8">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Select Services to Compare (Choose up to 3)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceOptions?.map((service) => (
              <button
                key={service?.id}
                onClick={() => handleServiceToggle(service?.id)}
                disabled={!selectedServices?.includes(service?.id) && selectedServices?.length >= 3}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-brand ${
                  selectedServices?.includes(service?.id)
                    ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/40 text-text-secondary hover:text-primary'
                } ${
                  !selectedServices?.includes(service?.id) && selectedServices?.length >= 3
                    ? 'opacity-50 cursor-not-allowed' :'cursor-pointer'
                }`}
              >
                <Icon name={service?.icon} size={24} className="mb-2" />
                <span className="text-sm font-medium text-center">{service?.name}</span>
                {selectedServices?.includes(service?.id) && (
                  <Icon name="Check" size={16} className="mt-1 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-brand overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-semibold text-primary">Features</th>
                  {selectedServices?.map((serviceId) => (
                    <th key={serviceId} className="text-center p-6 min-w-64">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${serviceData?.[serviceId]?.color} flex items-center justify-center mb-2`}>
                          <Icon name={serviceData?.[serviceId]?.icon} size={24} className="text-white" />
                        </div>
                        <span className="font-semibold text-primary">{serviceData?.[serviceId]?.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getFeatureComparison()?.map((feature, index) => (
                  <tr key={feature} className={`border-b border-border ${index % 2 === 0 ? 'bg-muted/30' : 'bg-white'}`}>
                    <td className="p-6 font-medium text-text-secondary">{feature}</td>
                    {selectedServices?.map((serviceId) => (
                      <td key={serviceId} className="p-6 text-center">
                        <span className="text-primary font-medium">
                          {serviceData?.[serviceId]?.features?.[feature] || 'N/A'}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {selectedServices?.slice(0, 2)?.map((serviceId) => (
            <div key={serviceId} className="bg-white rounded-xl shadow-brand p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${serviceData?.[serviceId]?.color} flex items-center justify-center`}>
                  <Icon name={serviceData?.[serviceId]?.icon} size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{serviceData?.[serviceId]?.name}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pros */}
                <div>
                  <h4 className="font-semibold text-success mb-3 flex items-center space-x-2">
                    <Icon name="ThumbsUp" size={16} />
                    <span>Advantages</span>
                  </h4>
                  <div className="space-y-2">
                    {serviceData?.[serviceId]?.pros?.map((pro, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <Icon name="Plus" size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cons */}
                <div>
                  <h4 className="font-semibold text-error mb-3 flex items-center space-x-2">
                    <Icon name="ThumbsDown" size={16} />
                    <span>Considerations</span>
                  </h4>
                  <div className="space-y-2">
                    {serviceData?.[serviceId]?.cons?.map((con, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <Icon name="Minus" size={14} className="text-error mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-text-secondary text-lg mb-6 max-w-2xl mx-auto">
              Our financial experts can help you identify the best combination of services based on your goals, risk profile, and financial situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary px-8"
                iconName="UserPlus"
                iconPosition="left"
              >
                Consult Our Experts
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary/40 px-8"
                iconName="Calculator"
                iconPosition="left"
              >
                Financial Calculator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
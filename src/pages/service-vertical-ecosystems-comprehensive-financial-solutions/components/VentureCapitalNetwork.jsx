import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const VentureCapitalNetwork = () => {
  const [activeProgram, setActiveProgram] = useState('startup-catalysis');

  const programs = {
    'startup-catalysis': {
      title: 'Start-up Catalysis',
      icon: 'Rocket',
      description: 'Accelerate your startup journey with funding, mentorship, and strategic guidance',
      content: {
        fundingStages: [
          {
            stage: 'Pre-Seed',
            range: '₹10L - ₹50L',
            equity: '8% - 15%',
            duration: '6-12 months',
            focus: 'MVP Development'
          },
          {
            stage: 'Seed',
            range: '₹50L - ₹2Cr',
            equity: '15% - 25%',
            duration: '12-18 months',
            focus: 'Market Validation'
          },
          {
            stage: 'Series A',
            range: '₹2Cr - ₹10Cr',
            equity: '20% - 30%',
            duration: '18-24 months',
            focus: 'Scale & Growth'
          }
        ],
        successStories: [
          {
            name: 'TechFlow Solutions',
            sector: 'FinTech',
            funding: '₹5.2 Crores',
            valuation: '₹45 Crores',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop'
          },
          {
            name: 'GreenEnergy Innovations',
            sector: 'CleanTech',
            funding: '₹8.7 Crores',
            valuation: '₹78 Crores',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=150&fit=crop'
          }
        ]
      }
    },
    'angel-networking': {
      title: 'Angel Networking',
      icon: 'Users',
      description: 'Connect with high-net-worth individuals and angel investors for early-stage funding',
      content: {
        angelStats: [
          { label: 'Active Angels', value: '250+', icon: 'UserCheck' },
          { label: 'Total Investments', value: '₹125Cr+', icon: 'TrendingUp' },
          { label: 'Success Rate', value: '78%', icon: 'Target' },
          { label: 'Average Ticket', value: '₹25L', icon: 'Banknote' }
        ],
        angelProfiles: [
          {
            name: 'Rajesh Mehta',
            title: 'Former CEO, Tech Corp',
            expertise: 'SaaS, B2B Tech',
            investments: '15+ startups',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
          },
          {
            name: 'Priya Sharma',
            title: 'Healthcare Entrepreneur',
            expertise: 'HealthTech, MedTech',
            investments: '12+ startups',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop'
          }
        ]
      }
    },
    'enterprise-setup': {
      title: 'Enterprise Setup',
      icon: 'Building2',
      description: 'Complete business incorporation and compliance services for new ventures',
      content: {
        services: [
          {
            name: 'Company Registration',
            description: 'Private Limited, LLP, Partnership registration',
            timeline: '7-14 days',
            price: '₹15,000 - ₹25,000'
          },
          {
            name: 'Compliance Management',
            description: 'ROC filings, GST registration, tax compliance',
            timeline: 'Ongoing',
            price: '₹5,000/month'
          },
          {
            name: 'Legal Documentation',
            description: 'Shareholder agreements, employment contracts',
            timeline: '5-10 days',
            price: '₹25,000 - ₹50,000'
          }
        ],
        packages: [
          {
            name: 'Startup Essentials',
            price: '₹35,000',
            features: ['Company Registration', 'GST Registration', 'Bank Account Opening', 'Basic Compliance']
          },
          {
            name: 'Growth Package',
            price: '₹75,000',
            features: ['Everything in Essentials', 'Legal Documentation', 'IP Registration', '6 Months Compliance']
          }
        ]
      }
    },
    'incubation': {
      title: 'Incubation Programs',
      icon: 'Lightbulb',
      description: 'Comprehensive incubation with workspace, mentorship, and ecosystem access',
      content: {
        programs: [
          {
            name: 'Tech Accelerator',
            duration: '6 months',
            cohortSize: '10-12 startups',
            equity: '6% - 8%',
            funding: '₹25L - ₹50L'
          },
          {
            name: 'Social Impact Program',
            duration: '4 months',
            cohortSize: '8-10 startups',
            equity: '4% - 6%',
            funding: '₹15L - ₹30L'
          }
        ],
        facilities: [
          'Co-working Space',
          'Meeting Rooms',
          'High-speed Internet',
          'Legal & Accounting Support',
          'Mentor Network Access',
          'Investor Connect Events'
        ]
      }
    }
  };

  const programTypes = [
    { id: 'startup-catalysis', label: 'Start-up Catalysis', icon: 'Rocket' },
    { id: 'angel-networking', label: 'Angel Networking', icon: 'Users' },
    { id: 'enterprise-setup', label: 'Enterprise Setup', icon: 'Building2' },
    { id: 'incubation', label: 'Incubation', icon: 'Lightbulb' }
  ];

  const currentProgram = programs?.[activeProgram];

  const renderContent = () => {
    switch (activeProgram) {
      case 'startup-catalysis':
        return (
          <div className="space-y-8">
            {/* Funding Stages */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Funding Stages</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {currentProgram?.content?.fundingStages?.map((stage, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-md transition-brand">
                    <h5 className="font-semibold text-primary mb-2">{stage?.stage}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-tertiary">Range:</span>
                        <span className="font-medium text-success">{stage?.range}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-tertiary">Equity:</span>
                        <span className="font-medium">{stage?.equity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-tertiary">Duration:</span>
                        <span className="font-medium">{stage?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-tertiary">Focus:</span>
                        <span className="font-medium text-primary">{stage?.focus}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Success Stories */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Success Stories</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentProgram?.content?.successStories?.map((story, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <Image
                      src={story?.image}
                      alt={story?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="font-semibold text-primary">{story?.name}</h5>
                      <p className="text-sm text-text-tertiary mb-2">{story?.sector}</p>
                      <div className="flex space-x-4 text-xs">
                        <span className="text-success font-medium">Funding: {story?.funding}</span>
                        <span className="text-primary font-medium">Valuation: {story?.valuation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'angel-networking':
        return (
          <div className="space-y-8">
            {/* Angel Stats */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Network Statistics</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {currentProgram?.content?.angelStats?.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <Icon name={stat?.icon} size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat?.value}</div>
                    <div className="text-sm text-text-tertiary">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Angel Profiles */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Featured Angels</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentProgram?.content?.angelProfiles?.map((angel, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 border border-border rounded-lg hover:shadow-brand-md transition-brand">
                    <Image
                      src={angel?.image}
                      alt={angel?.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="font-semibold text-primary text-lg">{angel?.name}</h5>
                      <p className="text-text-secondary mb-2">{angel?.title}</p>
                      <p className="text-sm text-text-tertiary mb-1">Expertise: {angel?.expertise}</p>
                      <p className="text-sm text-success font-medium">{angel?.investments}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'enterprise-setup':
        return (
          <div className="space-y-8">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Our Services</h4>
              <div className="space-y-4">
                {currentProgram?.content?.services?.map((service, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-semibold text-primary text-lg">{service?.name}</h5>
                      <span className="text-success font-bold">{service?.price}</span>
                    </div>
                    <p className="text-text-secondary mb-3">{service?.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-text-tertiary">
                      <Icon name="Clock" size={14} />
                      <span>Timeline: {service?.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Packages */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Service Packages</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentProgram?.content?.packages?.map((pkg, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-lg transition-brand">
                    <div className="text-center mb-4">
                      <h5 className="font-semibold text-primary text-xl mb-2">{pkg?.name}</h5>
                      <div className="text-3xl font-bold text-success">{pkg?.price}</div>
                    </div>
                    <div className="space-y-2">
                      {pkg?.features?.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2 text-sm">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="default" 
                      fullWidth
                      className="mt-4 bg-gradient-to-r from-primary to-secondary"
                    >
                      Choose Package
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'incubation':
        return (
          <div className="space-y-8">
            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Incubation Programs</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentProgram?.content?.programs?.map((program, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <h5 className="font-semibold text-primary text-lg mb-4">{program?.name}</h5>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-text-tertiary">Duration:</span>
                        <div className="font-medium">{program?.duration}</div>
                      </div>
                      <div>
                        <span className="text-text-tertiary">Cohort Size:</span>
                        <div className="font-medium">{program?.cohortSize}</div>
                      </div>
                      <div>
                        <span className="text-text-tertiary">Equity:</span>
                        <div className="font-medium text-primary">{program?.equity}</div>
                      </div>
                      <div>
                        <span className="text-text-tertiary">Funding:</span>
                        <div className="font-medium text-success">{program?.funding}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Facilities */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Incubation Facilities</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentProgram?.content?.facilities?.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-text-secondary">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Rocket" size={32} className="text-primary" />
            <span className="text-primary font-semibold text-lg">Venture Capital Network</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Fuel Your Startup Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From ideation to IPO, we provide comprehensive support through funding, mentorship, and strategic partnerships
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl p-2 shadow-brand max-w-4xl mx-auto">
          {programTypes?.map((program) => (
            <button
              key={program?.id}
              onClick={() => setActiveProgram(program?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                activeProgram === program?.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-secondary hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name={program?.icon} size={16} />
              <span>{program?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-brand p-8">
          {/* Program Header */}
          <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon name={currentProgram?.icon} size={32} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">{currentProgram?.title}</h3>
              <p className="text-text-secondary text-lg">{currentProgram?.description}</p>
            </div>
          </div>

          {/* Dynamic Content */}
          {renderContent()}

          {/* CTA Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Ready to Start Your Journey?
                </h4>
                <p className="text-text-secondary">
                  Join our network of successful entrepreneurs and innovative startups
                </p>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  className="border-primary/20 hover:border-primary/40"
                  iconName="FileText"
                  iconPosition="left"
                >
                  Download Guide
                </Button>
                <Button 
                  variant="default"
                  className="bg-gradient-to-r from-primary to-secondary"
                  iconName="Send"
                  iconPosition="left"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureCapitalNetwork;
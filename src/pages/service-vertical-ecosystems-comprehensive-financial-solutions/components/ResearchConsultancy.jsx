import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ResearchConsultancy = () => {
  const [activeService, setActiveService] = useState('research');

  const services = {
    research: {
      title: 'Research Services',
      icon: 'BarChart3',
      description: 'In-depth market research and financial analysis for informed decision making',
      offerings: [
        {
          title: 'Market Research Reports',
          description: 'Comprehensive industry analysis and market trends',
          deliverables: ['Industry Overview', 'Competitive Analysis', 'Market Sizing', 'Growth Projections'],
          timeline: '2-4 weeks',
          price: '₹50,000 - ₹2,00,000'
        },
        {
          title: 'Financial Due Diligence',
          description: 'Detailed financial assessment for investments and acquisitions',
          deliverables: ['Financial Analysis', 'Risk Assessment', 'Valuation Report', 'Recommendations'],
          timeline: '3-6 weeks',
          price: '₹1,00,000 - ₹5,00,000'
        },
        {
          title: 'Custom Research',
          description: 'Tailored research solutions for specific business needs',
          deliverables: ['Custom Methodology', 'Primary Research', 'Data Analysis', 'Strategic Insights'],
          timeline: '4-8 weeks',
          price: 'Quote on Request'
        }
      ],
      recentReports: [
        {
          title: 'Indian FinTech Market Outlook 2024',
          category: 'Financial Services',
          pages: '120 pages',
          price: '₹25,000',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
        },
        {
          title: 'Real Estate Investment Trends',
          category: 'Real Estate',
          pages: '85 pages',
          price: '₹18,000',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop'
        },
        {
          title: 'Startup Ecosystem Analysis',
          category: 'Venture Capital',
          pages: '95 pages',
          price: '₹22,000',
          image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop'
        }
      ]
    },
    consulting: {
      title: 'Consulting Services',
      icon: 'Users',
      description: 'Strategic consulting for business growth and operational excellence',
      offerings: [
        {
          title: 'Business Strategy Consulting',
          description: 'Strategic planning and business model optimization',
          deliverables: ['Strategy Framework', 'Implementation Roadmap', 'KPI Dashboard', 'Regular Reviews'],
          timeline: '6-12 weeks',
          price: '₹2,00,000 - ₹10,00,000'
        },
        {
          title: 'Financial Advisory',
          description: 'CFO services and financial planning for growing businesses',
          deliverables: ['Financial Planning', 'Cash Flow Management', 'Investor Relations', 'Compliance Support'],
          timeline: 'Ongoing',
          price: '₹50,000 - ₹2,00,000/month'
        },
        {
          title: 'Digital Transformation',
          description: 'Technology adoption and process digitization',
          deliverables: ['Digital Strategy', 'Technology Roadmap', 'Implementation Support', 'Change Management'],
          timeline: '8-16 weeks',
          price: '₹3,00,000 - ₹15,00,000'
        }
      ],
      clientSuccess: [
        {
          client: 'TechCorp Solutions',
          industry: 'Technology',
          challenge: 'Scaling Operations',
          result: '300% Revenue Growth',
          duration: '12 months'
        },
        {
          client: 'GreenEnergy Ltd',
          industry: 'Renewable Energy',
          challenge: 'Market Entry Strategy',
          result: '₹50Cr Funding Raised',
          duration: '8 months'
        }
      ]
    },
    events: {
      title: 'Events & Conferences',
      icon: 'Calendar',
      description: 'Industry events, conferences, and networking opportunities',
      offerings: [
        {
          title: 'Annual FinTech Summit',
          description: 'Premier financial technology conference in India',
          deliverables: ['Keynote Sessions', 'Panel Discussions', 'Networking', 'Exhibition'],
          timeline: 'March 2024',
          price: '₹15,000 - ₹50,000'
        },
        {
          title: 'Startup Pitch Fest',
          description: 'Platform for startups to pitch to investors',
          deliverables: ['Pitch Presentations', 'Investor Meetings', 'Mentorship', 'Awards'],
          timeline: 'Quarterly',
          price: '₹5,000 - ₹25,000'
        },
        {
          title: 'Custom Corporate Events',
          description: 'Tailored events for corporate clients',
          deliverables: ['Event Planning', 'Speaker Management', 'Logistics', 'Follow-up'],
          timeline: 'As per requirement',
          price: 'Quote on Request'
        }
      ],
      upcomingEvents: [
        {
          title: 'Future of Finance 2024',
          date: '15th March 2024',
          location: 'Mumbai',
          attendees: '500+ Expected',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop'
        },
        {
          title: 'Real Estate Investment Conclave',
          date: '22nd April 2024',
          location: 'Delhi',
          attendees: '300+ Expected',
          image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop'
        }
      ]
    },
    advertising: {
      title: 'Advertising & Marketing',
      icon: 'Megaphone',
      description: 'Digital marketing and brand building services for financial services',
      offerings: [
        {
          title: 'Digital Marketing Strategy',
          description: 'Comprehensive digital marketing planning and execution',
          deliverables: ['Marketing Strategy', 'Content Calendar', 'Campaign Management', 'Analytics'],
          timeline: '3-6 months',
          price: '₹1,00,000 - ₹5,00,000/month'
        },
        {
          title: 'Brand Development',
          description: 'Brand identity and positioning for financial services',
          deliverables: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Launch Campaign'],
          timeline: '6-10 weeks',
          price: '₹2,00,000 - ₹8,00,000'
        },
        {
          title: 'Content Marketing',
          description: 'Educational content creation for financial literacy',
          deliverables: ['Content Strategy', 'Blog Articles', 'Video Content', 'Social Media'],
          timeline: 'Ongoing',
          price: '₹50,000 - ₹2,00,000/month'
        }
      ],
      campaigns: [
        {
          client: 'Investment App',
          campaign: 'Financial Literacy Drive',
          reach: '2M+ Users',
          engagement: '15% CTR',
          result: '50K App Downloads'
        },
        {
          client: 'Insurance Company',
          campaign: 'Health Insurance Awareness',
          reach: '1.5M+ Users',
          engagement: '12% CTR',
          result: '25K Policy Sales'
        }
      ]
    }
  };

  const serviceTypes = [
    { id: 'research', label: 'Research', icon: 'BarChart3' },
    { id: 'consulting', label: 'Consulting', icon: 'Users' },
    { id: 'events', label: 'Events', icon: 'Calendar' },
    { id: 'advertising', label: 'Marketing', icon: 'Megaphone' }
  ];

  const currentService = services?.[activeService];

  const renderContent = () => {
    switch (activeService) {
      case 'research':
        return (
          <div className="space-y-8">
            {/* Service Offerings */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Research Offerings</h4>
              <div className="space-y-6">
                {currentService?.offerings?.map((offering, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="font-semibold text-primary text-lg mb-2">{offering?.title}</h5>
                        <p className="text-text-secondary">{offering?.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-success font-bold text-lg">{offering?.price}</div>
                        <div className="text-text-tertiary text-sm">{offering?.timeline}</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {offering?.deliverables?.map((deliverable, dIndex) => (
                        <div key={dIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Recent Reports */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Recent Research Reports</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {currentService?.recentReports?.map((report, index) => (
                  <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-brand-lg transition-brand group">
                    <div className="h-40 overflow-hidden">
                      <Image
                        src={report?.image}
                        alt={report?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-brand duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="font-semibold text-primary mb-2 group-hover:text-secondary transition-brand">
                        {report?.title}
                      </h5>
                      <p className="text-text-tertiary text-sm mb-3">{report?.category}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary text-sm">{report?.pages}</span>
                        <span className="font-bold text-success">{report?.price}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        fullWidth
                        className="mt-3 border-primary/20 hover:border-primary/40"
                        iconName="Download"
                        iconPosition="left"
                      >
                        Download Sample
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'consulting':
        return (
          <div className="space-y-8">
            {/* Consulting Services */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Consulting Services</h4>
              <div className="space-y-6">
                {currentService?.offerings?.map((offering, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="font-semibold text-primary text-lg mb-2">{offering?.title}</h5>
                        <p className="text-text-secondary">{offering?.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-success font-bold text-lg">{offering?.price}</div>
                        <div className="text-text-tertiary text-sm">{offering?.timeline}</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {offering?.deliverables?.map((deliverable, dIndex) => (
                        <div key={dIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Client Success Stories */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Client Success Stories</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentService?.clientSuccess?.map((success, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <h5 className="font-semibold text-primary text-lg mb-2">{success?.client}</h5>
                    <p className="text-text-tertiary text-sm mb-3">{success?.industry}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Challenge:</span>
                        <span className="font-medium">{success?.challenge}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Result:</span>
                        <span className="font-medium text-success">{success?.result}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Duration:</span>
                        <span className="font-medium">{success?.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-8">
            {/* Event Services */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Event Services</h4>
              <div className="space-y-6">
                {currentService?.offerings?.map((offering, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="font-semibold text-primary text-lg mb-2">{offering?.title}</h5>
                        <p className="text-text-secondary">{offering?.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-success font-bold text-lg">{offering?.price}</div>
                        <div className="text-text-tertiary text-sm">{offering?.timeline}</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {offering?.deliverables?.map((deliverable, dIndex) => (
                        <div key={dIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Upcoming Events */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Upcoming Events</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentService?.upcomingEvents?.map((event, index) => (
                  <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-brand-lg transition-brand group">
                    <div className="h-40 overflow-hidden">
                      <Image
                        src={event?.image}
                        alt={event?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-brand duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="font-semibold text-primary text-lg mb-2 group-hover:text-secondary transition-brand">
                        {event?.title}
                      </h5>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center space-x-2 text-text-secondary">
                          <Icon name="Calendar" size={14} />
                          <span>{event?.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-text-secondary">
                          <Icon name="MapPin" size={14} />
                          <span>{event?.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-text-secondary">
                          <Icon name="Users" size={14} />
                          <span>{event?.attendees}</span>
                        </div>
                      </div>
                      <Button 
                        variant="default" 
                        fullWidth
                        className="bg-gradient-to-r from-primary to-secondary"
                        iconName="Ticket"
                        iconPosition="left"
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'advertising':
        return (
          <div className="space-y-8">
            {/* Marketing Services */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Marketing Services</h4>
              <div className="space-y-6">
                {currentService?.offerings?.map((offering, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="font-semibold text-primary text-lg mb-2">{offering?.title}</h5>
                        <p className="text-text-secondary">{offering?.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-success font-bold text-lg">{offering?.price}</div>
                        <div className="text-text-tertiary text-sm">{offering?.timeline}</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {offering?.deliverables?.map((deliverable, dIndex) => (
                        <div key={dIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Campaign Results */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Campaign Success Stories</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {currentService?.campaigns?.map((campaign, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-brand">
                    <h5 className="font-semibold text-primary text-lg mb-2">{campaign?.client}</h5>
                    <p className="text-text-secondary mb-4">{campaign?.campaign}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="font-bold text-primary">{campaign?.reach}</div>
                        <div className="text-text-tertiary">Reach</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="font-bold text-primary">{campaign?.engagement}</div>
                        <div className="text-text-tertiary">Engagement</div>
                      </div>
                      <div className="col-span-2 text-center p-3 bg-success/10 rounded-lg">
                        <div className="font-bold text-success">{campaign?.result}</div>
                        <div className="text-text-tertiary">Result</div>
                      </div>
                    </div>
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
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="BookOpen" size={32} className="text-secondary" />
            <span className="text-secondary font-semibold text-lg">Research & Consultancy Wing</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Knowledge & Strategic Insights
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive research, strategic consulting, and marketing services to drive informed business decisions
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl p-2 shadow-brand max-w-3xl mx-auto">
          {serviceTypes?.map((service) => (
            <button
              key={service?.id}
              onClick={() => setActiveService(service?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                activeService === service?.id
                  ? 'bg-secondary text-white shadow-md'
                  : 'text-text-secondary hover:text-secondary hover:bg-secondary/10'
              }`}
            >
              <Icon name={service?.icon} size={16} />
              <span>{service?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-brand p-8">
          {/* Service Header */}
          <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-border">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <Icon name={currentService?.icon} size={32} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">{currentService?.title}</h3>
              <p className="text-text-secondary text-lg">{currentService?.description}</p>
            </div>
          </div>

          {/* Dynamic Content */}
          {renderContent()}

          {/* CTA Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl border border-secondary/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Need Custom Solutions?
                </h4>
                <p className="text-text-secondary">
                  Our experts can create tailored research and consulting solutions for your specific needs
                </p>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  className="border-secondary/20 hover:border-secondary/40"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Discuss Requirements
                </Button>
                <Button 
                  variant="default"
                  className="bg-gradient-to-r from-secondary to-primary"
                  iconName="Send"
                  iconPosition="left"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchConsultancy;
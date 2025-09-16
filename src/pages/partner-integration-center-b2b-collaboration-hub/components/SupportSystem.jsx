import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SupportSystem = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const supportChannels = [
    {
      name: 'Partner Helpdesk',
      icon: 'Headphones',
      availability: '24/7',
      responseTime: '< 2 hours',
      contact: '+91 1800-123-4567',
      description: 'Dedicated support for technical and business queries'
    },
    {
      name: 'Video Tutorials',
      icon: 'Play',
      availability: 'On-demand',
      responseTime: 'Instant',
      contact: 'tutorials.lendrix.com',
      description: 'Step-by-step guides for all platform features'
    },
    {
      name: 'Live Chat',
      icon: 'MessageCircle',
      availability: '9 AM - 9 PM',
      responseTime: '< 5 minutes',
      contact: 'chat.lendrix.com',
      description: 'Real-time assistance for immediate queries'
    },
    {
      name: 'Email Support',
      icon: 'Mail',
      availability: '24/7',
      responseTime: '< 4 hours',
      contact: 'partners@lendrix.com',
      description: 'Detailed support for complex technical issues'
    }
  ];

  const supportTickets = [
    {
      id: 'TKT001',
      title: 'API Integration Issue - Portfolio Sync',
      category: 'Technical',
      priority: 'High',
      status: 'Open',
      created: '2024-09-14',
      lastUpdate: '2024-09-14',
      assignedTo: 'Rahul Sharma',
      description: 'Portfolio sync API returning 500 error for client ID 12345. Need immediate resolution.',
      messages: [
        {
          sender: 'You',
          time: '2024-09-14 10:30 AM',
          message: 'Getting 500 error when calling /api/v1/portfolio/sync endpoint. Error occurs specifically for client ID 12345.'
        },
        {
          sender: 'Rahul Sharma',
          time: '2024-09-14 11:15 AM',
          message: 'Thank you for reporting this issue. I can see the error in our logs. This appears to be related to a data validation issue. Investigating now.'
        },
        {
          sender: 'Rahul Sharma',
          time: '2024-09-14 02:45 PM',
          message: 'Issue identified and fixed. The client had some invalid portfolio data that was causing the validation to fail. Please try the sync again.'
        }
      ]
    },
    {
      id: 'TKT002',
      title: 'Commission Calculation Discrepancy',
      category: 'Business',
      priority: 'Medium',
      status: 'In Progress',
      created: '2024-09-13',
      lastUpdate: '2024-09-13',
      assignedTo: 'Priya Patel',
      description: 'Commission calculated for mutual fund SIP is showing different amount than expected.',
      messages: [
        {
          sender: 'You',
          time: '2024-09-13 03:20 PM',
          message: 'Commission for client Rajesh Kumar (SIP amount: ₹25,000) showing ₹750 but should be ₹875 as per our agreement.'
        },
        {
          sender: 'Priya Patel',
          time: '2024-09-13 04:10 PM',
          message: 'I have reviewed your commission structure. The calculation appears correct based on the tier you are in. Let me send you the detailed breakdown.'
        }
      ]
    },
    {
      id: 'TKT003',
      title: 'New Feature Request - Bulk Client Upload',
      category: 'Feature Request',
      priority: 'Low',
      status: 'Under Review',
      created: '2024-09-12',
      lastUpdate: '2024-09-12',
      assignedTo: 'Tech Team',
      description: 'Request for bulk client upload feature to import existing client database.',
      messages: [
        {
          sender: 'You',
          time: '2024-09-12 09:15 AM',
          message: 'Would like to request a bulk upload feature for importing existing client data. Currently adding clients one by one is time consuming.'
        }
      ]
    }
  ];

  const upcomingWebinars = [
    {
      title: 'New Product Launch: ELSS Tax Saver Funds',
      date: '2024-09-20',
      time: '3:00 PM - 4:00 PM',
      presenter: 'Dr. Amit Gupta, Fund Manager',
      registrations: 234,
      maxCapacity: 500
    },
    {
      title: 'Market Outlook Q4 2024',
      date: '2024-09-25',
      time: '2:00 PM - 3:30 PM',
      presenter: 'Sunita Sharma, Market Analyst',
      registrations: 189,
      maxCapacity: 300
    },
    {
      title: 'Advanced API Integration Workshop',
      date: '2024-09-28',
      time: '11:00 AM - 1:00 PM',
      presenter: 'Ravi Kumar, Tech Lead',
      registrations: 67,
      maxCapacity: 100
    }
  ];

  const knowledgeBase = [
    {
      category: 'Getting Started',
      articles: [
        'Partner Onboarding Guide',
        'First Steps After Registration',
        'Understanding Commission Structure',
        'Setting Up API Integration'
      ]
    },
    {
      category: 'API Documentation',
      articles: [
        'Authentication & Security',
        'Portfolio Management APIs',
        'Transaction Processing',
        'Webhook Configuration'
      ]
    },
    {
      category: 'Business Operations',
      articles: [
        'Client Onboarding Process',
        'Commission Tracking',
        'Compliance Requirements',
        'Marketing Guidelines'
      ]
    },
    {
      category: 'Troubleshooting',
      articles: [
        'Common API Errors',
        'Integration Issues',
        'Performance Optimization',
        'Data Synchronization'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'open': return 'text-error bg-error/10';
      case 'in progress': return 'text-warning bg-warning/10';
      case 'resolved': return 'text-success bg-success/10';
      case 'under review': return 'text-primary bg-primary/10';
      default: return 'text-text-tertiary bg-muted';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'text-error bg-error/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-success bg-success/10';
      default: return 'text-text-tertiary bg-muted';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Partner Support System
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive support with dedicated helpdesk, video tutorials, and regular webinars
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportChannels?.map((channel, index) => (
            <div key={index} className="bg-white rounded-xl shadow-brand p-6 hover:shadow-brand-lg transition-brand">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={channel?.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="font-semibold text-primary mb-2">{channel?.name}</h3>
              <p className="text-sm text-text-secondary mb-4">{channel?.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Availability:</span>
                  <span className="font-medium text-primary">{channel?.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Response:</span>
                  <span className="font-medium text-success">{channel?.responseTime}</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="text-xs text-primary font-medium">{channel?.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Support Tickets */}
          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary">Support Tickets</h3>
              <Button variant="default" size="sm" iconName="Plus" iconPosition="left">
                New Ticket
              </Button>
            </div>

            <div className="space-y-4">
              {supportTickets?.map((ticket) => (
                <div
                  key={ticket?.id}
                  onClick={() => setSelectedTicket(selectedTicket === ticket?.id ? null : ticket?.id)}
                  className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-brand"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-primary">{ticket?.id}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(ticket?.status)}`}>
                        {ticket?.status}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket?.priority)}`}>
                        {ticket?.priority}
                      </span>
                    </div>
                    <Icon name={selectedTicket === ticket?.id ? "ChevronUp" : "ChevronDown"} size={16} className="text-text-tertiary" />
                  </div>
                  
                  <h4 className="font-medium text-primary mb-2">{ticket?.title}</h4>
                  <p className="text-sm text-text-secondary mb-3">{ticket?.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-text-tertiary">
                    <span>Created: {ticket?.created}</span>
                    <span>Assigned to: {ticket?.assignedTo}</span>
                  </div>

                  {selectedTicket === ticket?.id && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                        {ticket?.messages?.map((message, msgIndex) => (
                          <div key={msgIndex} className={`p-3 rounded-lg ${
                            message?.sender === 'You' ? 'bg-primary/5 ml-8' : 'bg-muted mr-8'
                          }`}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-primary">{message?.sender}</span>
                              <span className="text-xs text-text-tertiary">{message?.time}</span>
                            </div>
                            <p className="text-sm text-text-secondary">{message?.message}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Input
                          type="text"
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e?.target?.value)}
                          className="flex-1"
                        />
                        <Button variant="default" size="sm" iconName="Send" iconPosition="left">
                          Send
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Base */}
          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary">Knowledge Base</h3>
              <Button variant="outline" size="sm" iconName="Search" iconPosition="left">
                Search
              </Button>
            </div>

            <div className="space-y-6">
              {knowledgeBase?.map((category, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Folder" size={16} className="mr-2" />
                    {category?.category}
                  </h4>
                  <div className="space-y-2 ml-6">
                    {category?.articles?.map((article, articleIndex) => (
                      <button
                        key={articleIndex}
                        className="block w-full text-left text-sm text-text-secondary hover:text-primary transition-brand p-2 rounded hover:bg-muted/30"
                      >
                        <Icon name="FileText" size={14} className="inline mr-2" />
                        {article}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div className="bg-white rounded-xl shadow-brand p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-primary">Upcoming Webinars</h3>
            <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left">
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingWebinars?.map((webinar, index) => (
              <div key={index} className="p-6 border border-border rounded-lg hover:shadow-brand transition-brand">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Video" size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                    {webinar?.registrations}/{webinar?.maxCapacity} registered
                  </span>
                </div>
                
                <h4 className="font-semibold text-primary mb-2">{webinar?.title}</h4>
                <p className="text-sm text-text-secondary mb-3">{webinar?.presenter}</p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} className="text-text-tertiary" />
                    <span className="text-text-secondary">{webinar?.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-text-tertiary" />
                    <span className="text-text-secondary">{webinar?.time}</span>
                  </div>
                </div>
                
                <Button variant="default" size="sm" fullWidth iconName="UserPlus" iconPosition="left">
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSystem;
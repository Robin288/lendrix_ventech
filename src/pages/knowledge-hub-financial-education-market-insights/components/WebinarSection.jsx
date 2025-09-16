import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WebinarSection = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingWebinars = [
    {
      id: 1,
      title: "Navigating Market Volatility: Investment Strategies for 2024",
      description: "Learn proven strategies to protect and grow your portfolio during uncertain market conditions with expert insights from our senior wealth advisors.",
      speaker: "Dr. Rajesh Kumar",
      speakerRole: "Chief Market Strategist",
      speakerImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "2024-09-20",
      time: "7:00 PM IST",
      duration: "60 minutes",
      attendees: 1247,
      category: "Market Insights",
      level: "Intermediate",
      isLive: false,
      registrationOpen: true
    },
    {
      id: 2,
      title: "Real Estate Investment: Commercial vs Residential Analysis",
      description: "Comprehensive comparison of investment opportunities in commercial and residential real estate across major Indian cities with ROI analysis.",
      speaker: "Priya Sharma",
      speakerRole: "Real Estate Investment Head",
      speakerImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "2024-09-25",
      time: "6:30 PM IST",
      duration: "75 minutes",
      attendees: 892,
      category: "Real Estate",
      level: "Advanced",
      isLive: false,
      registrationOpen: true
    },
    {
      id: 3,
      title: "Startup Funding Landscape: Angel to Series A Journey",
      description: "Essential guide for entrepreneurs seeking funding, covering pitch preparation, valuation strategies, and investor relationship management.",
      speaker: "Amit Patel",
      speakerRole: "Venture Capital Partner",
      speakerImage: "https://randomuser.me/api/portraits/men/56.jpg",
      date: "2024-09-28",
      time: "8:00 PM IST",
      duration: "90 minutes",
      attendees: 654,
      category: "Venture Capital",
      level: "Beginner",
      isLive: false,
      registrationOpen: true
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Tax Planning Strategies for FY 2024-25",
      description: "Complete guide to maximizing tax savings through various investment instruments and planning strategies under current tax regime.",
      speaker: "Neha Gupta",
      speakerRole: "Tax Planning Expert",
      speakerImage: "https://randomuser.me/api/portraits/women/28.jpg",
      date: "2024-09-10",
      time: "7:00 PM IST",
      duration: "60 minutes",
      attendees: 2156,
      category: "Tax Planning",
      level: "Intermediate",
      isLive: false,
      registrationOpen: false,
      recording: true,
      views: 5420
    },
    {
      id: 5,
      title: "Mutual Fund Portfolio Rebalancing Masterclass",
      description: "Advanced techniques for portfolio optimization, asset allocation strategies, and systematic rebalancing for long-term wealth creation.",
      speaker: "Vikram Singh",
      speakerRole: "Portfolio Manager",
      speakerImage: "https://randomuser.me/api/portraits/men/41.jpg",
      date: "2024-09-05",
      time: "6:00 PM IST",
      duration: "75 minutes",
      attendees: 1834,
      category: "Wealth Management",
      level: "Advanced",
      isLive: false,
      registrationOpen: false,
      recording: true,
      views: 3892
    }
  ];

  const tabs = [
    { id: 'upcoming', name: 'Upcoming Webinars', count: upcomingWebinars?.length },
    { id: 'past', name: 'Past Webinars', count: pastWebinars?.length }
  ];

  const currentWebinars = activeTab === 'upcoming' ? upcomingWebinars : pastWebinars;

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Expert Webinar Series
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Join our industry experts for in-depth discussions on market trends, investment strategies, and financial planning
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 flex">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`px-6 py-3 rounded-md font-medium transition-brand flex items-center space-x-2 ${
                  activeTab === tab?.id
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                <span>{tab?.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeTab === tab?.id ? 'bg-primary/10 text-primary' : 'bg-white/50 text-text-tertiary'
                }`}>
                  {tab?.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Webinars Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentWebinars?.map((webinar) => (
            <div key={webinar?.id} className="bg-white border border-border rounded-xl shadow-brand hover:shadow-brand-lg transition-brand overflow-hidden group">
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {webinar?.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(webinar?.level)}`}>
                      {webinar?.level}
                    </span>
                  </div>
                  {webinar?.recording && (
                    <div className="flex items-center space-x-1 text-success">
                      <Icon name="Play" size={14} />
                      <span className="text-xs font-medium">Recording</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-brand leading-tight">
                  {webinar?.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {webinar?.description}
                </p>

                {/* Speaker Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={webinar?.speakerImage}
                    alt={webinar?.speaker}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-primary text-sm">{webinar?.speaker}</div>
                    <div className="text-text-tertiary text-xs">{webinar?.speakerRole}</div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Calendar" size={16} />
                    <span>{formatDate(webinar?.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Clock" size={16} />
                    <span>{webinar?.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Timer" size={16} />
                    <span>{webinar?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Users" size={16} />
                    <span>
                      {webinar?.recording ? `${webinar?.views} views` : `${webinar?.attendees} registered`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6">
                {activeTab === 'upcoming' ? (
                  <Button 
                    variant="default" 
                    fullWidth 
                    className="bg-gradient-brand"
                    iconName="UserPlus"
                    iconPosition="left"
                  >
                    Register Now
                  </Button>
                ) : (
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      fullWidth 
                      iconName="Play"
                      iconPosition="left"
                    >
                      Watch Recording
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="default"
                      iconName="Download"
                    >
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Video" size={48} className="mx-auto text-accent mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Never Miss an Expert Session
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our webinar series and get notified about upcoming sessions, exclusive content, and early access to recordings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                iconName="Bell"
                iconPosition="left"
              >
                Subscribe to Notifications
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Calendar"
                iconPosition="left"
              >
                View Full Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import QuickStats from './components/QuickStats';
import PortfolioChart from './components/PortfolioChart';
import RecentActivity from './components/RecentActivity';
import QuickActions from './components/QuickActions';
import GoalsTracker from './components/GoalsTracker';
import MarketInsights from './components/MarketInsights';

import Button from '../../components/ui/Button';

const ClientDashboardPortal = () => {
  const [userType, setUserType] = useState('customer'); // corporate, partner, customer
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const location = useLocation();

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);

    // Get user type from URL params or localStorage
    const urlParams = new URLSearchParams(location.search);
    const typeFromUrl = urlParams?.get('type');
    const savedUserType = localStorage.getItem('userType') || 'customer';
    
    if (typeFromUrl && ['corporate', 'partner', 'customer']?.includes(typeFromUrl)) {
      setUserType(typeFromUrl);
      localStorage.setItem('userType', typeFromUrl);
    } else {
      setUserType(savedUserType);
    }
  }, [location]);

  const getUserData = () => {
    switch (userType) {
      case 'corporate':
        return {
          userName: 'Rajesh Gupta',
          userRole: 'Finance Director',
          company: 'TechCorp Solutions Pvt Ltd'
        };
      case 'partner':
        return {
          userName: 'Priya Sharma',
          userRole: 'Senior Partner',
          company: 'Wealth Advisors Network'
        };
      case 'customer':
        return {
          userName: 'Amit Kumar',
          userRole: 'Premium Client',
          company: 'Individual Investor'
        };
      default:
        return {
          userName: 'User',
          userRole: 'Client',
          company: 'Lendrix Ventech'
        };
    }
  };

  const getNotifications = () => {
    const baseNotifications = [
      {
        title: 'Market Update',
        message: 'NIFTY 50 reaches new high, portfolio up 2.3% today',
        time: '10 minutes ago',
        type: 'success'
      },
      {
        title: 'SIP Reminder',
        message: 'Your monthly SIP of ₹25,000 is due tomorrow',
        time: '2 hours ago',
        type: 'warning'
      },
      {
        title: 'Goal Achievement',
        message: 'Emergency Fund goal reached 80% completion',
        time: '1 day ago',
        type: 'success'
      }
    ];

    if (userType === 'corporate') {
      return [
        {
          title: 'Payroll Processing',
          message: 'Monthly salary processing completed for all employees',
          time: '30 minutes ago',
          type: 'success'
        },
        {
          title: 'Compliance Alert',
          message: 'GST filing due in 3 days',
          time: '2 hours ago',
          type: 'warning'
        },
        ...baseNotifications?.slice(0, 2)
      ];
    } else if (userType === 'partner') {
      return [
        {
          title: 'Commission Credit',
          message: 'Monthly commission of ₹2,34,567 credited to your account',
          time: '1 hour ago',
          type: 'success'
        },
        {
          title: 'New Lead',
          message: 'High-value lead assigned: Potential AUM ₹50L',
          time: '3 hours ago',
          type: 'info'
        },
        ...baseNotifications?.slice(0, 2)
      ];
    }

    return baseNotifications;
  };

  const userData = getUserData();
  const notifications = getNotifications();

  const getDashboardTitle = () => {
    switch (userType) {
      case 'corporate':
        return 'Corporate Financial Command Center';
      case 'partner':
        return 'Partner Business Dashboard';
      case 'customer':
        return 'Personal Wealth Management Center';
      default:
        return 'Financial Dashboard';
    }
  };

  const getDashboardDescription = () => {
    switch (userType) {
      case 'corporate':
        return 'Comprehensive financial oversight and team management for corporate clients with multi-departmental analytics and service coordination tools.';
      case 'partner':
        return 'Advanced partner dashboard with client portfolio management, lead generation tools, commission tracking, and marketing resources.';
      case 'customer':
        return 'Personalized wealth tracking with real-time portfolio performance, investment management, and goal-based financial planning.';
      default:
        return 'Your personalized financial command center with comprehensive wealth management tools.';
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDashboardTitle()} | Lendrix Ventech</title>
        <meta name="description" content={getDashboardDescription()} />
        <meta name="keywords" content="financial dashboard, wealth management, portfolio tracking, investment planning, Lendrix Ventech" />
        <meta property="og:title" content={`${getDashboardTitle()} | Lendrix Ventech`} />
        <meta property="og:description" content={getDashboardDescription()} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lendrixventech.com/client-dashboard-portal-personalized-financial-command-center" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        <div className="flex pt-16">
          {/* Sidebar */}
          <Sidebar 
            isCollapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Main Content */}
          <main className={`flex-1 transition-brand ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
            {/* Dashboard Header */}
            <DashboardHeader
              userType={userType}
              userName={userData?.userName}
              userRole={userData?.userRole}
              notifications={notifications}
            />

            {/* Dashboard Content */}
            <div className="p-6 space-y-6">
              {/* User Type Selector (for demo purposes) */}
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-primary">Dashboard View</h2>
                    <p className="text-sm text-text-secondary">Switch between different user experiences</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {['customer', 'partner', 'corporate']?.map((type) => (
                      <Button
                        key={type}
                        variant={userType === type ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          setUserType(type);
                          localStorage.setItem('userType', type);
                        }}
                        className="capitalize"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <QuickStats userType={userType} />

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Portfolio Chart - Takes 2 columns */}
                <div className="xl:col-span-2">
                  <PortfolioChart userType={userType} />
                </div>

                {/* Quick Actions */}
                <div className="xl:col-span-1">
                  <QuickActions userType={userType} />
                </div>
              </div>

              {/* Secondary Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <RecentActivity userType={userType} />

                {/* Goals Tracker */}
                <GoalsTracker userType={userType} />
              </div>

              {/* Market Insights - Full Width */}
              <MarketInsights />

              {/* Footer Section */}
              <div className="bg-white rounded-lg border border-border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-semibold text-primary mb-1">Need Assistance?</h3>
                    <p className="text-sm text-text-secondary">
                      Our financial experts are available 24/7 to help you make informed decisions
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" iconName="Phone" iconPosition="left">
                      Call Support
                    </Button>
                    <Button variant="outline" iconName="MessageCircle" iconPosition="left">
                      Live Chat
                    </Button>
                    <Button variant="default" iconName="Calendar" iconPosition="left">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Floating Action Button for Mobile */}
        <div className="fixed bottom-6 right-6 lg:hidden">
          <Button
            variant="default"
            size="icon"
            className="w-14 h-14 rounded-full shadow-brand-lg bg-gradient-brand"
            iconName="Plus"
          />
        </div>
      </div>
    </>
  );
};

export default ClientDashboardPortal;
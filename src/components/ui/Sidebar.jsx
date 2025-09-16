import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggle, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/client-dashboard-portal-personalized-financial-command-center',
      icon: 'LayoutDashboard',
      description: 'Overview & Analytics'
    },
    {
      name: 'Services',
      path: '/service-vertical-ecosystems-comprehensive-financial-solutions',
      icon: 'Building2',
      description: 'Financial Solutions'
    },
    {
      name: 'Partners',
      path: '/partner-integration-center-b2b-collaboration-hub',
      icon: 'Users',
      description: 'B2B Collaboration'
    },
    {
      name: 'Knowledge Hub',
      path: '/knowledge-hub-financial-education-market-insights',
      icon: 'BookOpen',
      description: 'Education & Insights'
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      icon: 'PieChart',
      description: 'Investment Overview'
    },
    {
      name: 'Transactions',
      path: '/transactions',
      icon: 'Receipt',
      description: 'Financial History'
    }
  ];

  const secondaryItems = [
    {
      name: 'Settings',
      path: '/settings',
      icon: 'Settings',
      description: 'Account Preferences'
    },
    {
      name: 'Support',
      path: '/support',
      icon: 'HelpCircle',
      description: 'Help & Assistance'
    },
    {
      name: 'Notifications',
      path: '/notifications',
      icon: 'Bell',
      description: 'Alerts & Updates'
    }
  ];

  const isActivePath = (path) => location?.pathname === path;
  const shouldShowText = !isCollapsed || isHovered;

  const Logo = () => (
    <Link 
      to="/homepage-multi-vertical-financial-ecosystem" 
      className="flex items-center space-x-3 p-4 group"
    >
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand transition-brand-fast group-hover:shadow-brand-lg group-hover:scale-105">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {shouldShowText && (
        <div className="flex flex-col min-w-0">
          <span className="text-lg font-bold text-primary font-sans tracking-tight truncate">
            Lendrix
          </span>
          <span className="text-xs font-medium text-secondary -mt-1 tracking-wide truncate">
            Ventech
          </span>
        </div>
      )}
    </Link>
  );

  const NavItem = ({ item, isSecondary = false }) => (
    <Link
      to={item?.path}
      className={`group relative flex items-center px-4 py-3 rounded-lg transition-brand ${
        isActivePath(item?.path)
          ? 'bg-primary/10 text-primary shadow-sm'
          : 'text-text-secondary hover:text-primary hover:bg-muted'
      }`}
    >
      <div className="flex items-center min-w-0 flex-1">
        <Icon
          name={item?.icon}
          size={20}
          className={`flex-shrink-0 transition-brand ${
            isActivePath(item?.path) 
              ? 'text-primary' :'text-text-tertiary group-hover:text-primary'
          }`}
        />
        {shouldShowText && (
          <div className="ml-3 min-w-0 flex-1">
            <div className={`text-sm font-medium truncate ${
              isActivePath(item?.path) ? 'text-primary' : 'group-hover:text-primary'
            }`}>
              {item?.name}
            </div>
            {item?.description && (
              <div className="text-xs text-text-tertiary truncate mt-0.5">
                {item?.description}
              </div>
            )}
          </div>
        )}
      </div>
      
      {isActivePath(item?.path) && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></div>
      )}
      
      {/* Tooltip for collapsed state */}
      {isCollapsed && !isHovered && (
        <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand whitespace-nowrap z-50">
          {item?.name}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </Link>
  );

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 z-40 bg-white border-r border-border shadow-brand transition-brand ${
        isCollapsed ? 'w-16' : 'w-64'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border">
          <Logo />
          {shouldShowText && onToggle && (
            <button
              onClick={onToggle}
              className="p-2 mr-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-brand"
            >
              <Icon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} size={18} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-2">
            {navigationItems?.map((item) => (
              <NavItem key={item?.path} item={item} />
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 mx-4 border-t border-border"></div>

          {/* Secondary Navigation */}
          <div className="space-y-1 px-2">
            {secondaryItems?.map((item) => (
              <NavItem key={item?.path} item={item} isSecondary />
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4">
          {shouldShowText ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                <div className="w-8 h-8 bg-gradient-prosperity rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-primary truncate">
                    John Doe
                  </div>
                  <div className="text-xs text-text-tertiary truncate">
                    Premium Client
                  </div>
                </div>
              </div>
              <Link to="/authentication-hub-three-tier-login-gateway">
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth 
                  iconName="LogOut" 
                  iconPosition="left"
                  className="text-text-secondary hover:text-primary border-border hover:border-primary/40"
                >
                  Sign Out
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-3">
              <div className="w-8 h-8 bg-gradient-prosperity rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <button className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-brand">
                <Icon name="LogOut" size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
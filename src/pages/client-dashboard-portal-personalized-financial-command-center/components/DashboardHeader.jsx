import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardHeader = ({ userType, userName, userRole, notifications = [] }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const getDashboardTitle = () => {
    switch (userType) {
      case 'corporate':
        return 'Corporate Command Center';
      case 'partner':
        return 'Partner Dashboard';
      case 'customer':
        return 'Personal Wealth Center';
      default:
        return 'Dashboard';
    }
  };

  const getGreeting = () => {
    const hour = new Date()?.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="bg-white border-b border-border shadow-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                {getDashboardTitle()}
              </h1>
              <p className="text-text-secondary mt-1">
                {getGreeting()}, {userName}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Market Status */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-success/10 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-success">Markets Open</span>
            </div>

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative"
              >
                <Icon name="Bell" size={20} />
                {notifications?.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center">
                    {notifications?.length > 9 ? '9+' : notifications?.length}
                  </span>
                )}
              </Button>

              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-brand-lg border border-border z-50">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-primary">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications?.length > 0 ? (
                      notifications?.map((notification, index) => (
                        <div key={index} className="p-4 border-b border-border hover:bg-muted">
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification?.type === 'success' ? 'bg-success' :
                              notification?.type === 'warning' ? 'bg-warning' :
                              notification?.type === 'error' ? 'bg-error' : 'bg-primary'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-primary">
                                {notification?.title}
                              </p>
                              <p className="text-xs text-text-secondary mt-1">
                                {notification?.message}
                              </p>
                              <p className="text-xs text-text-tertiary mt-1">
                                {notification?.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-text-secondary">
                        <Icon name="Bell" size={24} className="mx-auto mb-2 opacity-50" />
                        <p className="text-sm">No new notifications</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3 px-3 py-2 bg-muted rounded-lg">
              <div className="w-8 h-8 bg-gradient-prosperity rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-primary">{userName}</p>
                <p className="text-xs text-text-secondary">{userRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
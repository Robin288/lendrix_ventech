import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStats = ({ userType, stats = [] }) => {
  const getDefaultStats = () => {
    switch (userType) {
      case 'corporate':
        return [
          {
            title: 'Total Portfolio Value',
            value: '₹2,45,67,890',
            change: '+12.5%',
            changeType: 'positive',
            icon: 'TrendingUp',
            description: 'vs last quarter'
          },
          {
            title: 'Active Services',
            value: '8',
            change: '+2',
            changeType: 'positive',
            icon: 'Building2',
            description: 'new this month'
          },
          {
            title: 'Team Members',
            value: '24',
            change: '+3',
            changeType: 'positive',
            icon: 'Users',
            description: 'active users'
          },
          {
            title: 'Monthly Savings',
            value: '₹8,45,000',
            change: '+8.2%',
            changeType: 'positive',
            icon: 'PiggyBank',
            description: 'cost optimization'
          }
        ];
      case 'partner':
        return [
          {
            title: 'Client Portfolio',
            value: '₹1,24,56,789',
            change: '+15.3%',
            changeType: 'positive',
            icon: 'Briefcase',
            description: 'AUM growth'
          },
          {
            title: 'Active Clients',
            value: '156',
            change: '+12',
            changeType: 'positive',
            icon: 'Users',
            description: 'new this month'
          },
          {
            title: 'Commission Earned',
            value: '₹2,34,567',
            change: '+18.7%',
            changeType: 'positive',
            icon: 'IndianRupee',
            description: 'this quarter'
          },
          {
            title: 'Lead Conversion',
            value: '68%',
            change: '+5.2%',
            changeType: 'positive',
            icon: 'Target',
            description: 'success rate'
          }
        ];
      case 'customer':
        return [
          {
            title: 'Total Wealth',
            value: '₹12,45,678',
            change: '+14.2%',
            changeType: 'positive',
            icon: 'Wallet',
            description: 'portfolio growth'
          },
          {
            title: 'Monthly SIP',
            value: '₹25,000',
            change: '₹5,000',
            changeType: 'positive',
            icon: 'Calendar',
            description: 'increased investment'
          },
          {
            title: 'Goal Progress',
            value: '72%',
            change: '+8%',
            changeType: 'positive',
            icon: 'Target',
            description: 'on track'
          },
          {
            title: 'Tax Saved',
            value: '₹1,56,000',
            change: '+₹45,000',
            changeType: 'positive',
            icon: 'Receipt',
            description: 'this FY'
          }
        ];
      default:
        return [];
    }
  };

  const displayStats = stats?.length > 0 ? stats : getDefaultStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayStats?.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-border p-6 hover:shadow-brand-md transition-brand"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              stat?.changeType === 'positive' ? 'bg-success/10' :
              stat?.changeType === 'negative' ? 'bg-error/10' : 'bg-primary/10'
            }`}>
              <Icon
                name={stat?.icon}
                size={24}
                className={
                  stat?.changeType === 'positive' ? 'text-success' :
                  stat?.changeType === 'negative' ? 'text-error' : 'text-primary'
                }
              />
            </div>
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
              stat?.changeType === 'positive' ? 'bg-success/10 text-success' :
              stat?.changeType === 'negative' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'
            }`}>
              <Icon
                name={stat?.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'}
                size={12}
              />
              <span>{stat?.change}</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-1">
              {stat?.value}
            </h3>
            <p className="text-sm font-medium text-text-secondary mb-1">
              {stat?.title}
            </p>
            <p className="text-xs text-text-tertiary">
              {stat?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
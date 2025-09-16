import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentActivity = ({ userType }) => {
  const [filter, setFilter] = useState('all');

  const getActivities = () => {
    switch (userType) {
      case 'corporate':
        return [
          {
            id: 1,
            type: 'transaction',
            title: 'Salary Processing Completed',
            description: 'Monthly salary disbursement for 24 employees processed successfully',
            amount: '₹18,45,000',
            time: '2 hours ago',
            status: 'completed',
            icon: 'Users'
          },
          {
            id: 2,
            type: 'service',
            title: 'New Working Capital Facility',
            description: 'Working capital limit of ₹50L approved and activated',
            amount: '₹50,00,000',
            time: '1 day ago',
            status: 'approved',
            icon: 'Building2'
          },
          {
            id: 3,
            type: 'alert',
            title: 'Compliance Review Due',
            description: 'Annual compliance review scheduled for next week',
            time: '2 days ago',
            status: 'pending',
            icon: 'AlertCircle'
          },
          {
            id: 4,
            type: 'transaction',
            title: 'Vendor Payment Released',
            description: 'Payment to ABC Suppliers processed via RTGS',
            amount: '₹2,34,567',
            time: '3 days ago',
            status: 'completed',
            icon: 'Send'
          },
          {
            id: 5,
            type: 'service',
            title: 'Insurance Policy Renewed',
            description: 'Group health insurance policy renewed for all employees',
            amount: '₹4,56,789',
            time: '5 days ago',
            status: 'completed',
            icon: 'Shield'
          }
        ];
      case 'partner':
        return [
          {
            id: 1,
            type: 'commission',
            title: 'Commission Credited',
            description: 'Monthly commission for September 2025 credited to account',
            amount: '₹2,34,567',
            time: '1 hour ago',
            status: 'completed',
            icon: 'IndianRupee'
          },
          {
            id: 2,
            type: 'client',
            title: 'New Client Onboarded',
            description: 'Rajesh Kumar successfully onboarded with ₹5L investment',
            amount: '₹5,00,000',
            time: '4 hours ago',
            status: 'completed',
            icon: 'UserPlus'
          },
          {
            id: 3,
            type: 'lead',
            title: 'Lead Converted',
            description: 'Priya Sharma converted to active client - Mutual Fund SIP',
            amount: '₹15,000',
            time: '1 day ago',
            status: 'converted',
            icon: 'Target'
          },
          {
            id: 4,
            type: 'training',
            title: 'Training Session Completed',
            description: 'Product knowledge session on new AIF offerings attended',
            time: '2 days ago',
            status: 'completed',
            icon: 'BookOpen'
          },
          {
            id: 5,
            type: 'marketing',
            title: 'Campaign Material Downloaded',
            description: 'Q3 marketing brochures and presentation templates downloaded',
            time: '3 days ago',
            status: 'completed',
            icon: 'Download'
          }
        ];
      case 'customer':
        return [
          {
            id: 1,
            type: 'investment',
            title: 'SIP Investment Processed',
            description: 'Monthly SIP of ₹25,000 invested in Equity Diversified Fund',
            amount: '₹25,000',
            time: '2 hours ago',
            status: 'completed',
            icon: 'Calendar'
          },
          {
            id: 2,
            type: 'transaction',
            title: 'Dividend Received',
            description: 'Dividend from HDFC Top 100 Fund credited to account',
            amount: '₹3,456',
            time: '1 day ago',
            status: 'completed',
            icon: 'TrendingUp'
          },
          {
            id: 3,
            type: 'goal',
            title: 'Goal Milestone Achieved',
            description: 'Child Education Fund reached 70% of target amount',
            amount: '₹7,00,000',
            time: '2 days ago',
            status: 'milestone',
            icon: 'Target'
          },
          {
            id: 4,
            type: 'tax',
            title: 'Tax Saving Investment',
            description: 'ELSS investment of ₹50,000 for tax saving under 80C',
            amount: '₹50,000',
            time: '4 days ago',
            status: 'completed',
            icon: 'Receipt'
          },
          {
            id: 5,
            type: 'rebalance',
            title: 'Portfolio Rebalanced',
            description: 'Asset allocation adjusted as per risk profile recommendation',
            time: '1 week ago',
            status: 'completed',
            icon: 'RotateCcw'
          }
        ];
      default:
        return [];
    }
  };

  const activities = getActivities();
  const filters = ['all', 'transaction', 'investment', 'service', 'commission', 'client'];

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities?.filter(activity => activity?.type === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10';
      case 'pending':
        return 'text-warning bg-warning/10';
      case 'approved':
        return 'text-primary bg-primary/10';
      case 'converted':
        return 'text-prosperity bg-prosperity/10';
      case 'milestone':
        return 'text-accent bg-accent/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'transaction': case'investment':
        return 'text-success';
      case 'commission':
        return 'text-prosperity';
      case 'client': case'lead':
        return 'text-primary';
      case 'alert':
        return 'text-warning';
      case 'goal': case'milestone':
        return 'text-accent';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">Recent Activity</h3>
          <p className="text-sm text-text-secondary">Latest updates and transactions</p>
        </div>
        <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
          View All
        </Button>
      </div>
      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
        {filters?.map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter(filterType)}
            className="whitespace-nowrap"
          >
            {filterType?.charAt(0)?.toUpperCase() + filterType?.slice(1)}
          </Button>
        ))}
      </div>
      {/* Activity List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredActivities?.map((activity) => (
          <div
            key={activity?.id}
            className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-brand"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white border border-border`}>
              <Icon
                name={activity?.icon}
                size={20}
                className={getIconColor(activity?.type)}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-primary text-sm mb-1">
                    {activity?.title}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    {activity?.description}
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-text-tertiary">
                      {activity?.time}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity?.status)}`}>
                      {activity?.status?.charAt(0)?.toUpperCase() + activity?.status?.slice(1)}
                    </span>
                  </div>
                </div>
                {activity?.amount && (
                  <div className="text-right ml-4">
                    <p className="font-semibold text-primary text-sm">
                      {activity?.amount}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredActivities?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Activity" size={48} className="mx-auto mb-4 text-text-tertiary opacity-50" />
          <p className="text-text-secondary">No activities found for the selected filter</p>
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
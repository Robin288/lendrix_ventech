import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = ({ userType }) => {
  const getActions = () => {
    switch (userType) {
      case 'corporate':
        return [
          {
            title: 'Process Payroll',
            description: 'Manage employee salary disbursement',
            icon: 'Users',
            color: 'bg-primary',
            link: '/payroll'
          },
          {
            title: 'Apply for Loan',
            description: 'Working capital & term loans',
            icon: 'Building2',
            color: 'bg-secondary',
            link: '/service-vertical-ecosystems-comprehensive-financial-solutions'
          },
          {
            title: 'View Reports',
            description: 'Financial analytics & insights',
            icon: 'BarChart3',
            color: 'bg-accent',
            link: '/reports'
          },
          {
            title: 'Team Management',
            description: 'Add/manage team members',
            icon: 'UserPlus',
            color: 'bg-success',
            link: '/team'
          },
          {
            title: 'Compliance Check',
            description: 'Regulatory compliance status',
            icon: 'Shield',
            color: 'bg-warning',
            link: '/compliance'
          },
          {
            title: 'Support Ticket',
            description: 'Raise service request',
            icon: 'HelpCircle',
            color: 'bg-error',
            link: '/support'
          }
        ];
      case 'partner':
        return [
          {
            title: 'Add New Client',
            description: 'Onboard new investor',
            icon: 'UserPlus',
            color: 'bg-primary',
            link: '/add-client'
          },
          {
            title: 'Generate Leads',
            description: 'Access lead generation tools',
            icon: 'Target',
            color: 'bg-secondary',
            link: '/leads'
          },
          {
            title: 'Commission Report',
            description: 'View earnings & payouts',
            icon: 'IndianRupee',
            color: 'bg-prosperity',
            link: '/commission'
          },
          {
            title: 'Marketing Materials',
            description: 'Download brochures & presentations',
            icon: 'Download',
            color: 'bg-accent',
            link: '/marketing'
          },
          {
            title: 'Training Center',
            description: 'Product knowledge & certification',
            icon: 'BookOpen',
            color: 'bg-success',
            link: '/training'
          },
          {
            title: 'Client Portfolio',
            description: 'Manage client investments',
            icon: 'Briefcase',
            color: 'bg-warning',
            link: '/portfolio'
          }
        ];
      case 'customer':
        return [
          {
            title: 'Start New SIP',
            description: 'Begin systematic investment',
            icon: 'Calendar',
            color: 'bg-primary',
            link: '/sip'
          },
          {
            title: 'Invest Lumpsum',
            description: 'One-time investment',
            icon: 'TrendingUp',
            color: 'bg-secondary',
            link: '/invest'
          },
          {
            title: 'Goal Planning',
            description: 'Plan for financial goals',
            icon: 'Target',
            color: 'bg-accent',
            link: '/goals'
          },
          {
            title: 'Tax Optimizer',
            description: 'Maximize tax savings',
            icon: 'Receipt',
            color: 'bg-success',
            link: '/tax'
          },
          {
            title: 'Loan Application',
            description: 'Apply for personal/home loan',
            icon: 'Home',
            color: 'bg-warning',
            link: '/service-vertical-ecosystems-comprehensive-financial-solutions'
          },
          {
            title: 'Insurance',
            description: 'Protect your wealth',
            icon: 'Shield',
            color: 'bg-error',
            link: '/insurance'
          }
        ];
      default:
        return [];
    }
  };

  const actions = getActions();

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">Quick Actions</h3>
          <p className="text-sm text-text-secondary">Frequently used services and tools</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions?.map((action, index) => (
          <Link
            key={index}
            to={action?.link}
            className="group block p-4 bg-muted/50 rounded-lg hover:bg-muted hover:shadow-brand-md transition-brand"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${action?.color} group-hover:scale-105 transition-brand`}>
                <Icon
                  name={action?.icon}
                  size={24}
                  className="text-white"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-primary text-sm mb-1 group-hover:text-secondary transition-brand">
                  {action?.title}
                </h4>
                <p className="text-xs text-text-secondary">
                  {action?.description}
                </p>
              </div>
              <Icon
                name="ArrowRight"
                size={16}
                className="text-text-tertiary group-hover:text-primary group-hover:translate-x-1 transition-brand"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={16} className="text-accent" />
            <span className="text-sm font-medium text-primary">Need Help?</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" iconName="Phone" iconPosition="left">
              Call Support
            </Button>
            <Button variant="outline" size="sm" iconName="MessageCircle" iconPosition="left">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
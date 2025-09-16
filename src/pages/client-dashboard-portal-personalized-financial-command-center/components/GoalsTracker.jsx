import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GoalsTracker = ({ userType }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const getGoals = () => {
    switch (userType) {
      case 'corporate':
        return [
          {
            id: 1,
            title: 'Business Expansion Fund',
            description: 'Capital for new branch opening',
            targetAmount: 50000000,
            currentAmount: 32000000,
            progress: 64,
            deadline: '2026-03-31',
            category: 'expansion',
            monthlyContribution: 2000000,
            icon: 'Building2'
          },
          {
            id: 2,
            title: 'Emergency Reserve',
            description: '6 months operational expenses',
            targetAmount: 30000000,
            currentAmount: 24000000,
            progress: 80,
            deadline: '2025-12-31',
            category: 'emergency',
            monthlyContribution: 1000000,
            icon: 'Shield'
          },
          {
            id: 3,
            title: 'Technology Upgrade',
            description: 'IT infrastructure modernization',
            targetAmount: 15000000,
            currentAmount: 6000000,
            progress: 40,
            deadline: '2026-06-30',
            category: 'technology',
            monthlyContribution: 750000,
            icon: 'Laptop'
          }
        ];
      case 'partner':
        return [
          {
            id: 1,
            title: 'AUM Growth Target',
            description: 'Reach ₹2Cr assets under management',
            targetAmount: 20000000,
            currentAmount: 12456789,
            progress: 62,
            deadline: '2026-03-31',
            category: 'business',
            monthlyContribution: 800000,
            icon: 'TrendingUp'
          },
          {
            id: 2,
            title: 'Client Acquisition',
            description: 'Onboard 200 new clients',
            targetAmount: 200,
            currentAmount: 156,
            progress: 78,
            deadline: '2025-12-31',
            category: 'clients',
            monthlyContribution: 15,
            icon: 'Users'
          },
          {
            id: 3,
            title: 'Commission Milestone',
            description: 'Earn ₹10L annual commission',
            targetAmount: 1000000,
            currentAmount: 634567,
            progress: 63,
            deadline: '2026-03-31',
            category: 'income',
            monthlyContribution: 85000,
            icon: 'IndianRupee'
          }
        ];
      case 'customer':
        return [
          {
            id: 1,
            title: 'Child Education Fund',
            description: 'Higher education expenses for daughter',
            targetAmount: 2500000,
            currentAmount: 1750000,
            progress: 70,
            deadline: '2030-06-30',
            category: 'education',
            monthlyContribution: 25000,
            icon: 'GraduationCap'
          },
          {
            id: 2,
            title: 'Dream Home',
            description: 'Down payment for 3BHK apartment',
            targetAmount: 5000000,
            currentAmount: 2800000,
            progress: 56,
            deadline: '2027-12-31',
            category: 'home',
            monthlyContribution: 50000,
            icon: 'Home'
          },
          {
            id: 3,
            title: 'Retirement Corpus',
            description: 'Comfortable retirement at age 60',
            targetAmount: 10000000,
            currentAmount: 3456789,
            progress: 35,
            deadline: '2045-12-31',
            category: 'retirement',
            monthlyContribution: 30000,
            icon: 'Palmtree'
          },
          {
            id: 4,
            title: 'Emergency Fund',
            description: '12 months expense coverage',
            targetAmount: 600000,
            currentAmount: 456000,
            progress: 76,
            deadline: '2025-12-31',
            category: 'emergency',
            monthlyContribution: 15000,
            icon: 'Shield'
          }
        ];
      default:
        return [];
    }
  };

  const goals = getGoals();

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000)?.toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000)?.toFixed(1)}L`;
    } else {
      return `₹${amount?.toLocaleString('en-IN')}`;
    }
  };

  const formatNumber = (num) => {
    return num?.toLocaleString('en-IN');
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'education':
        return 'bg-primary text-white';
      case 'home':
        return 'bg-success text-white';
      case 'retirement':
        return 'bg-accent text-white';
      case 'emergency':
        return 'bg-warning text-white';
      case 'business':
        return 'bg-secondary text-white';
      case 'expansion':
        return 'bg-prosperity text-white';
      case 'technology':
        return 'bg-error text-white';
      default:
        return 'bg-muted text-primary';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 60) return 'bg-accent';
    if (progress >= 40) return 'bg-warning';
    return 'bg-error';
  };

  const calculateTimeRemaining = (deadline) => {
    const now = new Date();
    const target = new Date(deadline);
    const diffTime = target - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 365) {
      return `${Math.floor(diffDays / 365)} years`;
    } else if (diffDays > 30) {
      return `${Math.floor(diffDays / 30)} months`;
    } else {
      return `${diffDays} days`;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">Goals Tracker</h3>
          <p className="text-sm text-text-secondary">Monitor progress towards your financial objectives</p>
        </div>
        <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
          Add Goal
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals?.map((goal) => (
          <div
            key={goal?.id}
            className={`p-5 rounded-lg border-2 transition-brand cursor-pointer ${
              selectedGoal === goal?.id 
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30 hover:shadow-brand-md'
            }`}
            onClick={() => setSelectedGoal(selectedGoal === goal?.id ? null : goal?.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(goal?.category)}`}>
                  <Icon name={goal?.icon} size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm">{goal?.title}</h4>
                  <p className="text-xs text-text-secondary">{goal?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-tertiary">Target</p>
                <p className="font-semibold text-primary text-sm">
                  {userType === 'partner' && goal?.category === 'clients' 
                    ? formatNumber(goal?.targetAmount) 
                    : formatCurrency(goal?.targetAmount)
                  }
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-primary">
                  {goal?.progress}% Complete
                </span>
                <span className="text-xs text-text-secondary">
                  {calculateTimeRemaining(goal?.deadline)} remaining
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-brand ${getProgressColor(goal?.progress)}`}
                  style={{ width: `${goal?.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Current Progress */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-text-secondary">Current Amount</p>
                <p className="font-semibold text-primary">
                  {userType === 'partner' && goal?.category === 'clients' 
                    ? formatNumber(goal?.currentAmount) 
                    : formatCurrency(goal?.currentAmount)
                  }
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-secondary">Monthly</p>
                <p className="font-medium text-success">
                  +{userType === 'partner' && goal?.category === 'clients' 
                    ? formatNumber(goal?.monthlyContribution) 
                    : formatCurrency(goal?.monthlyContribution)
                  }
                </p>
              </div>
            </div>

            {/* Expanded Details */}
            {selectedGoal === goal?.id && (
              <div className="border-t border-border pt-4 mt-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-text-secondary mb-1">Remaining Amount</p>
                    <p className="font-medium text-primary">
                      {userType === 'partner' && goal?.category === 'clients' 
                        ? formatNumber(goal?.targetAmount - goal?.currentAmount) 
                        : formatCurrency(goal?.targetAmount - goal?.currentAmount)
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary mb-1">Target Date</p>
                    <p className="font-medium text-primary">
                      {new Date(goal.deadline)?.toLocaleDateString('en-IN')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Modify Goal
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    Increase SIP
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {goals?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Target" size={48} className="mx-auto mb-4 text-text-tertiary opacity-50" />
          <h4 className="font-medium text-primary mb-2">No Goals Set</h4>
          <p className="text-text-secondary mb-4">Start planning for your financial future</p>
          <Button variant="default" iconName="Plus" iconPosition="left">
            Create Your First Goal
          </Button>
        </div>
      )}
    </div>
  );
};

export default GoalsTracker;
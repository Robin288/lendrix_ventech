import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommissionManagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current');
  const [selectedProduct, setSelectedProduct] = useState('all');

  const commissionData = {
    current: {
      totalEarned: 245000,
      pendingAmount: 45000,
      paidAmount: 200000,
      tdsDeducted: 24500,
      clientsActive: 1247,
      newClients: 23
    },
    previous: {
      totalEarned: 198000,
      pendingAmount: 0,
      paidAmount: 198000,
      tdsDeducted: 19800,
      clientsActive: 1224,
      newClients: 18
    }
  };

  const productCommissions = [
    {
      product: 'Mutual Funds',
      icon: 'TrendingUp',
      commission: 85000,
      percentage: 34.7,
      clients: 456,
      avgTicket: 186,
      growth: 12.5
    },
    {
      product: 'Insurance',
      icon: 'Shield',
      commission: 67000,
      percentage: 27.3,
      clients: 234,
      avgTicket: 286,
      growth: 8.2
    },
    {
      product: 'Real Estate',
      icon: 'Building',
      commission: 52000,
      percentage: 21.2,
      clients: 89,
      avgTicket: 584,
      growth: -3.1
    },
    {
      product: 'Loans',
      icon: 'CreditCard',
      commission: 28000,
      percentage: 11.4,
      clients: 167,
      avgTicket: 168,
      growth: 15.7
    },
    {
      product: 'Investments',
      icon: 'PieChart',
      commission: 13000,
      percentage: 5.3,
      clients: 78,
      avgTicket: 167,
      growth: 22.3
    }
  ];

  const recentTransactions = [
    {
      id: 'TXN001',
      client: 'Rajesh Kumar',
      product: 'Mutual Fund SIP',
      amount: 25000,
      commission: 750,
      date: '2024-09-14',
      status: 'processed',
      tds: 75
    },
    {
      id: 'TXN002',
      client: 'Priya Sharma',
      product: 'Term Insurance',
      amount: 50000,
      commission: 2500,
      date: '2024-09-13',
      status: 'pending',
      tds: 250
    },
    {
      id: 'TXN003',
      client: 'Amit Patel',
      product: 'Home Loan',
      amount: 2500000,
      commission: 12500,
      date: '2024-09-12',
      status: 'processed',
      tds: 1250
    },
    {
      id: 'TXN004',
      client: 'Sunita Gupta',
      product: 'ULIP',
      amount: 100000,
      commission: 3000,
      date: '2024-09-11',
      status: 'processed',
      tds: 300
    },
    {
      id: 'TXN005',
      client: 'Vikram Singh',
      product: 'Real Estate Investment',
      amount: 5000000,
      commission: 25000,
      date: '2024-09-10',
      status: 'pending',
      tds: 2500
    }
  ];

  const currentData = commissionData?.[selectedPeriod];

  const getStatusColor = (status) => {
    switch (status) {
      case 'processed': return 'text-success bg-success/10';
      case 'pending': return 'text-warning bg-warning/10';
      case 'failed': return 'text-error bg-error/10';
      default: return 'text-text-tertiary bg-muted';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Commission Management
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Transparent tracking, automated calculations with TDS provisions, and detailed reporting
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-brand">
            <button
              onClick={() => setSelectedPeriod('current')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-brand ${
                selectedPeriod === 'current' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-primary'
              }`}
            >
              Current Month
            </button>
            <button
              onClick={() => setSelectedPeriod('previous')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-brand ${
                selectedPeriod === 'previous' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-primary'
              }`}
            >
              Previous Month
            </button>
          </div>
        </div>

        {/* Commission Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="DollarSign" size={24} className="text-success" />
              </div>
              <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                +12.5%
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{formatCurrency(currentData?.totalEarned)}</p>
              <p className="text-sm text-text-secondary">Total Earned</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-warning" />
              </div>
              <span className="text-xs text-warning bg-warning/10 px-2 py-1 rounded-full">
                Pending
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{formatCurrency(currentData?.pendingAmount)}</p>
              <p className="text-sm text-text-secondary">Pending Amount</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircle" size={24} className="text-primary" />
              </div>
              <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                Paid
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{formatCurrency(currentData?.paidAmount)}</p>
              <p className="text-sm text-text-secondary">Amount Paid</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                <Icon name="Receipt" size={24} className="text-error" />
              </div>
              <span className="text-xs text-text-tertiary bg-muted px-2 py-1 rounded-full">
                TDS
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{formatCurrency(currentData?.tdsDeducted)}</p>
              <p className="text-sm text-text-secondary">TDS Deducted</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product-wise Commission */}
          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary">Product-wise Commission</h3>
              <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                Export
              </Button>
            </div>

            <div className="space-y-4">
              {productCommissions?.map((product, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-brand">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={product?.icon} size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">{product?.product}</h4>
                        <p className="text-sm text-text-secondary">{product?.clients} clients</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{formatCurrency(product?.commission)}</p>
                      <p className="text-sm text-text-secondary">{product?.percentage}%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Avg. Ticket: {formatCurrency(product?.avgTicket)}</span>
                    <span className={`flex items-center space-x-1 ${
                      product?.growth > 0 ? 'text-success' : 'text-error'
                    }`}>
                      <Icon name={product?.growth > 0 ? 'TrendingUp' : 'TrendingDown'} size={14} />
                      <span>{Math.abs(product?.growth)}%</span>
                    </span>
                  </div>
                  
                  <div className="mt-3">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-brand" 
                        style={{ width: `${product?.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-brand p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary">Recent Transactions</h3>
              <Button variant="outline" size="sm" iconName="Eye" iconPosition="left">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {recentTransactions?.map((transaction) => (
                <div key={transaction?.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-primary">{transaction?.client}</h4>
                      <p className="text-sm text-text-secondary">{transaction?.product}</p>
                    </div>
                    <div className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(transaction?.status)}`}>
                      {transaction?.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-text-secondary">Amount: </span>
                      <span className="font-medium text-primary">{formatCurrency(transaction?.amount)}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary">Commission: </span>
                      <span className="font-medium text-success">{formatCurrency(transaction?.commission)}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary">TDS: </span>
                      <span className="font-medium text-error">{formatCurrency(transaction?.tds)}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary">Date: </span>
                      <span className="font-medium text-primary">{transaction?.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Payment Schedule</span>
                <span className="font-medium text-primary">Next: 30th September 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="default" size="lg" iconName="Download" iconPosition="left">
            Download Statement
          </Button>
          <Button variant="outline" size="lg" iconName="Calculator" iconPosition="left">
            Commission Calculator
          </Button>
          <Button variant="outline" size="lg" iconName="HelpCircle" iconPosition="left">
            Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommissionManagement;
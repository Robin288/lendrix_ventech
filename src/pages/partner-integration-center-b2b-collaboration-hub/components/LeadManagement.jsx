import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LeadManagement = () => {
  const [selectedTab, setSelectedTab] = useState('pipeline');
  const [searchTerm, setSearchTerm] = useState('');

  const leadStats = {
    totalLeads: 1247,
    hotLeads: 89,
    conversionRate: 23.5,
    avgDealSize: 185000,
    monthlyGrowth: 12.3
  };

  const pipelineStages = [
    { name: 'New Leads', count: 156, color: 'bg-blue-500' },
    { name: 'Qualified', count: 89, color: 'bg-yellow-500' },
    { name: 'Proposal', count: 45, color: 'bg-orange-500' },
    { name: 'Negotiation', count: 23, color: 'bg-purple-500' },
    { name: 'Closed Won', count: 67, color: 'bg-green-500' }
  ];

  const leads = [
    {
      id: 'LD001',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 98765 43210',
      company: 'Tech Solutions Pvt Ltd',
      product: 'Mutual Funds',
      value: 250000,
      stage: 'Qualified',
      priority: 'High',
      lastContact: '2024-09-14',
      source: 'Website',
      assignedTo: 'Amit Sharma',
      notes: 'Interested in SIP for 5 years. Has existing portfolio worth 10L.'
    },
    {
      id: 'LD002',
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      phone: '+91 87654 32109',
      company: 'Marketing Hub',
      product: 'Insurance',
      value: 150000,
      stage: 'Proposal',
      priority: 'Medium',
      lastContact: '2024-09-13',
      source: 'Referral',
      assignedTo: 'Sunita Gupta',
      notes: 'Looking for term insurance for family. Comparing with other providers.'
    },
    {
      id: 'LD003',
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 76543 21098',
      company: 'Construction Co.',
      product: 'Real Estate',
      value: 5000000,
      stage: 'Negotiation',
      priority: 'High',
      lastContact: '2024-09-12',
      source: 'Cold Call',
      assignedTo: 'Ravi Kumar',
      notes: 'Interested in commercial property investment. Budget 50L-1Cr.'
    },
    {
      id: 'LD004',
      name: 'Anita Sharma',
      email: 'anita.sharma@email.com',
      phone: '+91 65432 10987',
      company: 'Freelancer',
      product: 'Loans',
      value: 800000,
      stage: 'New Leads',
      priority: 'Low',
      lastContact: '2024-09-11',
      source: 'Social Media',
      assignedTo: 'Deepak Joshi',
      notes: 'Home loan requirement. First time buyer. Needs guidance.'
    },
    {
      id: 'LD005',
      name: 'Rohit Agarwal',
      email: 'rohit.agarwal@email.com',
      phone: '+91 54321 09876',
      company: 'IT Services Ltd',
      product: 'Investments',
      value: 1200000,
      stage: 'Closed Won',
      priority: 'High',
      lastContact: '2024-09-10',
      source: 'Partner Referral',
      assignedTo: 'Meera Singh',
      notes: 'Invested in AIF. Happy with service. Potential for more business.'
    }
  ];

  const conversionMetrics = [
    { stage: 'Lead to Qualified', rate: 57, target: 60 },
    { stage: 'Qualified to Proposal', rate: 51, target: 55 },
    { stage: 'Proposal to Negotiation', rate: 51, target: 50 },
    { stage: 'Negotiation to Closed', rate: 74, target: 70 }
  ];

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'text-error bg-error/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-success bg-success/10';
      default: return 'text-text-tertiary bg-muted';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'New Leads': return 'text-blue-700 bg-blue-100';
      case 'Qualified': return 'text-yellow-700 bg-yellow-100';
      case 'Proposal': return 'text-orange-700 bg-orange-100';
      case 'Negotiation': return 'text-purple-700 bg-purple-100';
      case 'Closed Won': return 'text-green-700 bg-green-100';
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

  const filteredLeads = leads?.filter(lead =>
    lead?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    lead?.company?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    lead?.product?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Lead Management System
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Track client acquisition, conversion rates, and portfolio growth metrics with comprehensive analytics
          </p>
        </div>

        {/* Lead Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-brand p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <p className="text-2xl font-bold text-primary mb-1">{leadStats?.totalLeads}</p>
            <p className="text-sm text-text-secondary">Total Leads</p>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6 text-center">
            <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Flame" size={24} className="text-error" />
            </div>
            <p className="text-2xl font-bold text-primary mb-1">{leadStats?.hotLeads}</p>
            <p className="text-sm text-text-secondary">Hot Leads</p>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6 text-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={24} className="text-success" />
            </div>
            <p className="text-2xl font-bold text-primary mb-1">{leadStats?.conversionRate}%</p>
            <p className="text-sm text-text-secondary">Conversion Rate</p>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="DollarSign" size={24} className="text-accent" />
            </div>
            <p className="text-2xl font-bold text-primary mb-1">{formatCurrency(leadStats?.avgDealSize)}</p>
            <p className="text-sm text-text-secondary">Avg Deal Size</p>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6 text-center">
            <div className="w-12 h-12 bg-prosperity/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-prosperity" />
            </div>
            <p className="text-2xl font-bold text-primary mb-1">+{leadStats?.monthlyGrowth}%</p>
            <p className="text-sm text-text-secondary">Monthly Growth</p>
          </div>
        </div>

        {/* Pipeline Overview */}
        <div className="bg-white rounded-xl shadow-brand p-6 mb-8">
          <h3 className="text-xl font-semibold text-primary mb-6">Sales Pipeline</h3>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {pipelineStages?.map((stage, index) => (
              <div key={index} className="text-center">
                <div className={`w-full h-2 ${stage?.color} rounded-full mb-3`}></div>
                <p className="font-semibold text-primary text-lg">{stage?.count}</p>
                <p className="text-sm text-text-secondary">{stage?.name}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionMetrics?.map((metric, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{metric?.stage}</span>
                  <span className={`text-sm font-semibold ${
                    metric?.rate >= metric?.target ? 'text-success' : 'text-warning'
                  }`}>
                    {metric?.rate}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-brand ${
                      metric?.rate >= metric?.target ? 'bg-success' : 'bg-warning'
                    }`}
                    style={{ width: `${(metric?.rate / 100) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-text-tertiary mt-1">
                  <span>Target: {metric?.target}%</span>
                  <span className={metric?.rate >= metric?.target ? 'text-success' : 'text-warning'}>
                    {metric?.rate >= metric?.target ? '✓' : '⚠'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Management Interface */}
        <div className="bg-white rounded-xl shadow-brand p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-primary">Lead Database</h3>
              <div className="flex bg-muted rounded-lg p-1">
                <button
                  onClick={() => setSelectedTab('pipeline')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-brand ${
                    selectedTab === 'pipeline' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  Pipeline View
                </button>
                <button
                  onClick={() => setSelectedTab('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-brand ${
                    selectedTab === 'list' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  List View
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="search"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="w-full sm:w-64"
              />
              <Button variant="default" iconName="Plus" iconPosition="left">
                Add Lead
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredLeads?.map((lead) => (
              <div key={lead?.id} className="p-6 border border-border rounded-lg hover:shadow-brand transition-brand">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-primary">{lead?.name}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(lead?.priority)}`}>
                        {lead?.priority}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStageColor(lead?.stage)}`}>
                        {lead?.stage}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-text-secondary">Company: </span>
                        <span className="font-medium text-primary">{lead?.company}</span>
                      </div>
                      <div>
                        <span className="text-text-secondary">Product: </span>
                        <span className="font-medium text-primary">{lead?.product}</span>
                      </div>
                      <div>
                        <span className="text-text-secondary">Value: </span>
                        <span className="font-medium text-success">{formatCurrency(lead?.value)}</span>
                      </div>
                      <div>
                        <span className="text-text-secondary">Source: </span>
                        <span className="font-medium text-primary">{lead?.source}</span>
                      </div>
                    </div>

                    <div className="mt-3 text-sm">
                      <span className="text-text-secondary">Notes: </span>
                      <span className="text-primary">{lead?.notes}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" iconName="Phone" iconPosition="left">
                      Call
                    </Button>
                    <Button variant="outline" size="sm" iconName="Mail" iconPosition="left">
                      Email
                    </Button>
                    <Button variant="default" size="sm" iconName="Edit" iconPosition="left">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLeads?.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-text-tertiary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">No leads found</h3>
              <p className="text-text-secondary">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadManagement;
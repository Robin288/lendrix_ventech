import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationOverview = () => {
  const [activeTab, setActiveTab] = useState('api');

  const integrationTypes = [
    {
      id: 'api',
      name: 'API Integration',
      icon: 'Code',
      description: 'RESTful APIs for seamless system integration',
      features: ['Real-time portfolio sync', 'Transaction processing', 'Client onboarding', 'Automated reporting']
    },
    {
      id: 'webhook',
      name: 'Webhooks',
      icon: 'Zap',
      description: 'Event-driven notifications and updates',
      features: ['Transaction alerts', 'Status updates', 'Commission notifications', 'Client activity']
    },
    {
      id: 'sdk',
      name: 'SDK & Libraries',
      icon: 'Package',
      description: 'Pre-built libraries for faster development',
      features: ['JavaScript SDK', 'Python library', 'PHP package', 'Mobile SDKs']
    },
    {
      id: 'platform',
      name: 'Platform Connectors',
      icon: 'Link',
      description: 'Direct integrations with popular platforms',
      features: ['Banking APIs', 'CRM systems', 'Accounting software', 'Trading platforms']
    }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/partners/portfolio',
      description: 'Retrieve partner portfolio data',
      status: 'Active'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/clients/onboard',
      description: 'Onboard new client',
      status: 'Active'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/commissions/calculate',
      description: 'Calculate commission amounts',
      status: 'Active'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/transactions/process',
      description: 'Process client transactions',
      status: 'Beta'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Integration Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Choose from multiple integration options designed for different technical requirements and business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {integrationTypes?.map((type) => (
            <div
              key={type?.id}
              onClick={() => setActiveTab(type?.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-brand ${
                activeTab === type?.id
                  ? 'border-primary bg-primary/5 shadow-brand'
                  : 'border-border hover:border-primary/30 hover:bg-muted/50'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  activeTab === type?.id ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
                }`}>
                  <Icon name={type?.icon} size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{type?.name}</h3>
                  <p className="text-sm text-text-secondary">{type?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-brand p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">
                {integrationTypes?.find(t => t?.id === activeTab)?.name} Features
              </h3>
              <div className="space-y-4">
                {integrationTypes?.find(t => t?.id === activeTab)?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-success" />
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <Button 
                  variant="default" 
                  iconName="Download" 
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Download Documentation
                </Button>
                <Button 
                  variant="outline" 
                  iconName="Play" 
                  iconPosition="left"
                  className="w-full sm:w-auto ml-0 sm:ml-4"
                >
                  View Tutorial
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Popular API Endpoints
              </h3>
              <div className="space-y-3">
                {apiEndpoints?.map((endpoint, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-brand">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          endpoint?.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {endpoint?.method}
                        </span>
                        <code className="text-sm font-mono text-text-secondary">{endpoint?.endpoint}</code>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        endpoint?.status === 'Active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                      }`}>
                        {endpoint?.status}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{endpoint?.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="text-sm font-medium text-primary">Security & Compliance</span>
                </div>
                <p className="text-sm text-text-secondary">
                  All APIs are secured with OAuth 2.0, encrypted with TLS 1.3, and compliant with SEBI regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationOverview;
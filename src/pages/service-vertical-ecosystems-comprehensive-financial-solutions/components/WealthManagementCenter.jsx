import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WealthManagementCenter = () => {
  const [activeTab, setActiveTab] = useState('mutual-funds');

  const investmentProducts = {
    'mutual-funds': {
      title: 'Mutual Funds',
      icon: 'TrendingUp',
      description: 'Diversified investment options across equity, debt, and hybrid categories',
      products: [
        {
          name: 'HDFC Top 100 Fund',
          category: 'Large Cap Equity',
          nav: '₹756.23',
          returns: {
            '1Y': '12.45%',
            '3Y': '15.67%',
            '5Y': '13.89%'
          },
          risk: 'High',
          minInvestment: '₹500'
        },
        {
          name: 'ICICI Prudent Balanced',
          category: 'Hybrid Fund',
          nav: '₹45.67',
          returns: {
            '1Y': '9.23%',
            '3Y': '11.45%',
            '5Y': '10.78%'
          },
          risk: 'Moderate',
          minInvestment: '₹1,000'
        },
        {
          name: 'SBI Liquid Fund',
          category: 'Liquid Fund',
          nav: '₹4,234.56',
          returns: {
            '1Y': '3.45%',
            '3Y': '4.23%',
            '5Y': '4.67%'
          },
          risk: 'Low',
          minInvestment: '₹100'
        }
      ]
    },
    'aif-pms': {
      title: 'AIF & PMS',
      icon: 'Crown',
      description: 'Alternative Investment Funds and Portfolio Management Services for HNI clients',
      products: [
        {
          name: 'Kotak AIF Category II',
          category: 'Private Equity',
          nav: '₹125.45',
          returns: {
            '1Y': '18.67%',
            '3Y': '22.34%',
            '5Y': '19.89%'
          },
          risk: 'Very High',
          minInvestment: '₹1 Crore'
        },
        {
          name: 'IIFL PMS Growth',
          category: 'Equity PMS',
          nav: '₹89.23',
          returns: {
            '1Y': '16.45%',
            '3Y': '19.67%',
            '5Y': '17.23%'
          },
          risk: 'High',
          minInvestment: '₹50 Lakhs'
        }
      ]
    },
    'insurance': {
      title: 'Insurance Solutions',
      icon: 'Shield',
      description: 'Comprehensive life and health insurance products for financial protection',
      products: [
        {
          name: 'HDFC Life Click 2 Protect',
          category: 'Term Life Insurance',
          nav: 'Premium Based',
          returns: {
            '1Y': 'Protection',
            '3Y': 'Coverage',
            '5Y': 'Security'
          },
          risk: 'Protection',
          minInvestment: '₹500/month'
        },
        {
          name: 'Max Life Health Companion',
          category: 'Health Insurance',
          nav: 'Premium Based',
          returns: {
            '1Y': 'Medical Cover',
            '3Y': 'Family Protection',
            '5Y': 'Wellness Benefits'
          },
          risk: 'Protection',
          minInvestment: '₹5,000/year'
        }
      ]
    },
    'bonds-deposits': {
      title: 'Bonds & Deposits',
      icon: 'Banknote',
      description: 'Fixed income securities and deposit products for stable returns',
      products: [
        {
          name: 'Government of India Bond',
          category: 'Government Securities',
          nav: '₹1,000',
          returns: {
            '1Y': '6.45%',
            '3Y': '6.78%',
            '5Y': '7.12%'
          },
          risk: 'Very Low',
          minInvestment: '₹10,000'
        },
        {
          name: 'Corporate FD - AAA Rated',
          category: 'Fixed Deposit',
          nav: '₹1,000',
          returns: {
            '1Y': '7.25%',
            '3Y': '7.50%',
            '5Y': '7.75%'
          },
          risk: 'Low',
          minInvestment: '₹25,000'
        }
      ]
    }
  };

  const tabs = [
    { id: 'mutual-funds', label: 'Mutual Funds', icon: 'TrendingUp' },
    { id: 'aif-pms', label: 'AIF & PMS', icon: 'Crown' },
    { id: 'insurance', label: 'Insurance', icon: 'Shield' },
    { id: 'bonds-deposits', label: 'Bonds & Deposits', icon: 'Banknote' }
  ];

  const getRiskColor = (risk) => {
    switch (risk?.toLowerCase()) {
      case 'very low': return 'text-green-600 bg-green-50';
      case 'low': return 'text-green-500 bg-green-50';
      case 'moderate': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-orange-600 bg-orange-50';
      case 'very high': return 'text-red-600 bg-red-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const currentProducts = investmentProducts?.[activeTab];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="PieChart" size={32} className="text-secondary" />
            <span className="text-secondary font-semibold text-lg">Wealth Management Center</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Build & Preserve Your Wealth
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive investment solutions from mutual funds to alternative investments, designed for every investor profile
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl p-2 shadow-brand max-w-4xl mx-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                activeTab === tab?.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-secondary hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-brand p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Icon name={currentProducts?.icon} size={24} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">{currentProducts?.title}</h3>
              <p className="text-text-secondary">{currentProducts?.description}</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {currentProducts?.products?.map((product, index) => (
              <div key={index} className="border border-border rounded-xl p-6 hover:shadow-brand-md transition-brand group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1 group-hover:text-secondary transition-brand">
                      {product?.name}
                    </h4>
                    <p className="text-sm text-text-tertiary">{product?.category}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(product?.risk)}`}>
                    {product?.risk}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-text-tertiary mb-1">Current NAV</div>
                  <div className="text-xl font-bold text-primary">{product?.nav}</div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted rounded-lg">
                  <div className="text-center">
                    <div className="text-xs text-text-tertiary">1Y</div>
                    <div className="font-semibold text-success text-sm">{product?.returns?.['1Y']}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-text-tertiary">3Y</div>
                    <div className="font-semibold text-success text-sm">{product?.returns?.['3Y']}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-text-tertiary">5Y</div>
                    <div className="font-semibold text-success text-sm">{product?.returns?.['5Y']}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-text-tertiary mb-1">Minimum Investment</div>
                  <div className="font-semibold text-primary">{product?.minInvestment}</div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/20 hover:border-primary/40"
                    iconName="Info"
                    iconPosition="left"
                  >
                    Details
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-secondary to-primary"
                    iconName="ShoppingCart"
                    iconPosition="left"
                  >
                    Invest
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Need Personalized Investment Advice?
                </h4>
                <p className="text-text-secondary">
                  Our wealth management experts can help you create a customized portfolio
                </p>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  className="border-primary/20 hover:border-primary/40"
                  iconName="Calculator"
                  iconPosition="left"
                >
                  SIP Calculator
                </Button>
                <Button 
                  variant="default"
                  className="bg-gradient-to-r from-primary to-secondary"
                  iconName="UserPlus"
                  iconPosition="left"
                >
                  Consult Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthManagementCenter;
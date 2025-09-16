import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MarketInsights = () => {
  const [selectedTab, setSelectedTab] = useState('indices');

  const marketData = {
    indices: [
      {
        name: 'NIFTY 50',
        value: '19,674.25',
        change: '+234.50',
        changePercent: '+1.21%',
        trend: 'up'
      },
      {
        name: 'SENSEX',
        value: '65,953.48',
        change: '+789.23',
        changePercent: '+1.21%',
        trend: 'up'
      },
      {
        name: 'NIFTY BANK',
        value: '44,567.89',
        change: '-123.45',
        changePercent: '-0.28%',
        trend: 'down'
      },
      {
        name: 'NIFTY IT',
        value: '31,234.56',
        change: '+456.78',
        changePercent: '+1.48%',
        trend: 'up'
      }
    ],
    commodities: [
      {
        name: 'Gold (₹/10g)',
        value: '61,245',
        change: '+125',
        changePercent: '+0.20%',
        trend: 'up'
      },
      {
        name: 'Silver (₹/kg)',
        value: '74,567',
        change: '-234',
        changePercent: '-0.31%',
        trend: 'down'
      },
      {
        name: 'Crude Oil (₹/bbl)',
        value: '7,234',
        change: '+89',
        changePercent: '+1.25%',
        trend: 'up'
      }
    ],
    currencies: [
      {
        name: 'USD/INR',
        value: '83.24',
        change: '+0.12',
        changePercent: '+0.14%',
        trend: 'up'
      },
      {
        name: 'EUR/INR',
        value: '88.67',
        change: '-0.23',
        changePercent: '-0.26%',
        trend: 'down'
      },
      {
        name: 'GBP/INR',
        value: '102.45',
        change: '+0.34',
        changePercent: '+0.33%',
        trend: 'up'
      }
    ]
  };

  const newsItems = [
    {
      id: 1,
      title: 'RBI Keeps Repo Rate Unchanged at 6.50%',
      summary: 'The Reserve Bank of India maintains its accommodative stance while focusing on inflation control and growth support.',
      time: '2 hours ago',
      category: 'Policy',
      impact: 'neutral'
    },
    {
      id: 2,
      title: 'IT Sector Shows Strong Q2 Results',
      summary: 'Major IT companies report better-than-expected earnings with strong guidance for upcoming quarters.',
      time: '4 hours ago',
      category: 'Earnings',
      impact: 'positive'
    },
    {
      id: 3,
      title: 'FII Inflows Continue in September',
      summary: 'Foreign institutional investors maintain positive sentiment with net inflows of ₹12,000 crores this month.',
      time: '6 hours ago',
      category: 'Markets',
      impact: 'positive'
    },
    {
      id: 4,
      title: 'Inflation Concerns Persist',
      summary: 'Food inflation remains elevated despite government measures, impacting consumer spending patterns.',
      time: '8 hours ago',
      category: 'Economy',
      impact: 'negative'
    }
  ];

  const tabs = [
    { id: 'indices', label: 'Indices', icon: 'TrendingUp' },
    { id: 'commodities', label: 'Commodities', icon: 'Coins' },
    { id: 'currencies', label: 'Currencies', icon: 'DollarSign' }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'positive':
        return 'text-success bg-success/10';
      case 'negative':
        return 'text-error bg-error/10';
      case 'neutral':
        return 'text-warning bg-warning/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? 'TrendingUp' : 'TrendingDown';
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-success' : 'text-error';
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">Market Insights</h3>
          <p className="text-sm text-text-secondary">Real-time market data and financial news</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-xs text-text-secondary">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
          <Button variant="ghost" size="sm" iconName="RefreshCw">
            Refresh
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Data */}
        <div>
          <div className="flex items-center space-x-1 mb-4">
            {tabs?.map((tab) => (
              <Button
                key={tab?.id}
                variant={selectedTab === tab?.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedTab(tab?.id)}
                iconName={tab?.icon}
                iconPosition="left"
                className="text-xs"
              >
                {tab?.label}
              </Button>
            ))}
          </div>

          <div className="space-y-3">
            {marketData?.[selectedTab]?.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-brand"
              >
                <div>
                  <h4 className="font-medium text-primary text-sm">{item?.name}</h4>
                  <p className="text-lg font-bold text-primary">{item?.value}</p>
                </div>
                <div className="text-right">
                  <div className={`flex items-center space-x-1 ${getTrendColor(item?.trend)}`}>
                    <Icon name={getTrendIcon(item?.trend)} size={14} />
                    <span className="text-sm font-medium">{item?.change}</span>
                  </div>
                  <p className={`text-sm font-medium ${getTrendColor(item?.trend)}`}>
                    {item?.changePercent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial News */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-primary">Financial News</h4>
            <Button variant="ghost" size="sm" iconName="ExternalLink">
              View All
            </Button>
          </div>

          <div className="space-y-4 max-h-80 overflow-y-auto">
            {newsItems?.map((news) => (
              <div
                key={news?.id}
                className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-brand cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(news?.impact)}`}>
                    {news?.category}
                  </span>
                  <span className="text-xs text-text-tertiary">{news?.time}</span>
                </div>
                <h5 className="font-medium text-primary text-sm mb-2 line-clamp-2">
                  {news?.title}
                </h5>
                <p className="text-xs text-text-secondary line-clamp-2">
                  {news?.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Market Summary */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-success/10 rounded-lg">
            <Icon name="TrendingUp" size={24} className="mx-auto mb-2 text-success" />
            <p className="text-sm font-medium text-success">Market Sentiment</p>
            <p className="text-xs text-text-secondary">Bullish</p>
          </div>
          <div className="text-center p-4 bg-warning/10 rounded-lg">
            <Icon name="Activity" size={24} className="mx-auto mb-2 text-warning" />
            <p className="text-sm font-medium text-warning">Volatility</p>
            <p className="text-xs text-text-secondary">Moderate</p>
          </div>
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <Icon name="BarChart3" size={24} className="mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium text-primary">Volume</p>
            <p className="text-xs text-text-secondary">Above Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
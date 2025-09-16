import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PortfolioChart = ({ userType }) => {
  const [chartType, setChartType] = useState('performance');
  const [timeRange, setTimeRange] = useState('1M');

  const performanceData = [
    { month: 'Jan', value: 1200000, benchmark: 1150000 },
    { month: 'Feb', value: 1180000, benchmark: 1160000 },
    { month: 'Mar', value: 1250000, benchmark: 1200000 },
    { month: 'Apr', value: 1320000, benchmark: 1240000 },
    { month: 'May', value: 1280000, benchmark: 1220000 },
    { month: 'Jun', value: 1350000, benchmark: 1280000 },
    { month: 'Jul', value: 1420000, benchmark: 1320000 },
    { month: 'Aug', value: 1380000, benchmark: 1300000 },
    { month: 'Sep', value: 1456789, benchmark: 1350000 }
  ];

  const allocationData = userType === 'customer' ? [
    { name: 'Equity Mutual Funds', value: 45, amount: 656755, color: '#1B365D' },
    { name: 'Debt Funds', value: 25, amount: 364197, color: '#2C5282' },
    { name: 'Direct Stocks', value: 15, amount: 218518, color: '#D69E2E' },
    { name: 'Gold ETF', value: 10, amount: 145678, color: '#38A169' },
    { name: 'Real Estate', value: 5, amount: 72839, color: '#E67E22' }
  ] : userType === 'partner' ? [
    { name: 'Client AUM', value: 60, amount: 7473407, color: '#1B365D' },
    { name: 'Commission Pool', value: 20, amount: 2491136, color: '#2C5282' },
    { name: 'Marketing Fund', value: 15, amount: 1868352, color: '#D69E2E' },
    { name: 'Training Investment', value: 5, amount: 622284, color: '#38A169' }
  ] : [
    { name: 'Service Revenue', value: 40, amount: 9827156, color: '#1B365D' },
    { name: 'Operational Costs', value: 30, amount: 7370367, color: '#2C5282' },
    { name: 'Team Investment', value: 20, amount: 4913578, color: '#D69E2E' },
    { name: 'Growth Fund', value: 10, amount: 2456789, color: '#38A169' }
  ];

  const timeRanges = ['1W', '1M', '3M', '6M', '1Y', 'ALL'];

  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000)?.toFixed(1)}Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000)?.toFixed(1)}L`;
    } else {
      return `₹${value?.toLocaleString('en-IN')}`;
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-3 border border-border rounded-lg shadow-brand">
          <p className="font-medium text-primary">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {formatCurrency(entry?.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">
            {chartType === 'performance' ? 'Portfolio Performance' : 'Asset Allocation'}
          </h3>
          <p className="text-sm text-text-secondary">
            {chartType === 'performance' 
              ? 'Track your investment growth over time' :'Current distribution of your investments'
            }
          </p>
        </div>

        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={chartType === 'performance' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setChartType('performance')}
              className="h-8"
            >
              <Icon name="TrendingUp" size={16} className="mr-1" />
              Performance
            </Button>
            <Button
              variant={chartType === 'allocation' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setChartType('allocation')}
              className="h-8"
            >
              <Icon name="PieChart" size={16} className="mr-1" />
              Allocation
            </Button>
          </div>
        </div>
      </div>
      {chartType === 'performance' && (
        <>
          <div className="flex items-center space-x-2 mb-4">
            {timeRanges?.map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="h-8 px-3"
              >
                {range}
              </Button>
            ))}
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#718096"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#718096"
                  fontSize={12}
                  tickFormatter={formatCurrency}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1B365D"
                  strokeWidth={3}
                  dot={{ fill: '#1B365D', strokeWidth: 2, r: 4 }}
                  name="Portfolio Value"
                />
                <Line
                  type="monotone"
                  dataKey="benchmark"
                  stroke="#D69E2E"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#D69E2E', strokeWidth: 2, r: 3 }}
                  name="Benchmark"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
      {chartType === 'allocation' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {allocationData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value}%`, name]}
                  labelFormatter={() => ''}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {allocationData?.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item?.color }}
                  ></div>
                  <div>
                    <p className="font-medium text-primary text-sm">{item?.name}</p>
                    <p className="text-xs text-text-secondary">{item?.value}% allocation</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary text-sm">
                    {formatCurrency(item?.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioChart;
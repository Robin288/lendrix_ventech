import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InteractiveTools = () => {
  const [activeCalculator, setActiveCalculator] = useState('sip');
  const [sipInputs, setSipInputs] = useState({
    monthlyAmount: '10000',
    duration: '10',
    expectedReturn: '12'
  });

  const calculators = [
    {
      id: 'sip',
      name: 'SIP Calculator',
      icon: 'TrendingUp',
      description: 'Calculate your mutual fund SIP returns'
    },
    {
      id: 'emi',
      name: 'EMI Calculator',
      icon: 'Home',
      description: 'Calculate your loan EMI amount'
    },
    {
      id: 'retirement',
      name: 'Retirement Planner',
      icon: 'Target',
      description: 'Plan your retirement corpus'
    },
    {
      id: 'tax',
      name: 'Tax Calculator',
      icon: 'Receipt',
      description: 'Calculate your income tax liability'
    }
  ];

  const calculateSIP = () => {
    const P = parseFloat(sipInputs?.monthlyAmount);
    const r = parseFloat(sipInputs?.expectedReturn) / 100 / 12;
    const n = parseFloat(sipInputs?.duration) * 12;
    
    const futureValue = P * (((1 + r) ** n - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const totalReturns = futureValue - totalInvestment;
    
    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns)
    };
  };

  const sipResults = calculateSIP();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Interactive Financial Tools
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Make informed financial decisions with our comprehensive calculators and planning tools
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calculator Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-brand border border-border">
              <h3 className="text-lg font-semibold text-primary mb-4">Choose Calculator</h3>
              <div className="space-y-2">
                {calculators?.map((calc) => (
                  <button
                    key={calc?.id}
                    onClick={() => setActiveCalculator(calc?.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-brand text-left ${
                      activeCalculator === calc?.id
                        ? 'bg-primary text-white' :'hover:bg-muted text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon 
                      name={calc?.icon} 
                      size={18} 
                      className={activeCalculator === calc?.id ? 'text-white' : 'text-primary'}
                    />
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium text-sm ${
                        activeCalculator === calc?.id ? 'text-white' : 'text-primary'
                      }`}>
                        {calc?.name}
                      </div>
                      <div className={`text-xs truncate ${
                        activeCalculator === calc?.id ? 'text-white/80' : 'text-text-tertiary'
                      }`}>
                        {calc?.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-brand border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-brand p-6 text-white">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Icon 
                      name={calculators?.find(c => c?.id === activeCalculator)?.icon || 'Calculator'} 
                      size={24} 
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {calculators?.find(c => c?.id === activeCalculator)?.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {calculators?.find(c => c?.id === activeCalculator)?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* SIP Calculator Content */}
              {activeCalculator === 'sip' && (
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-primary mb-4">Investment Details</h4>
                      
                      <Input
                        label="Monthly SIP Amount"
                        type="number"
                        value={sipInputs?.monthlyAmount}
                        onChange={(e) => setSipInputs({...sipInputs, monthlyAmount: e?.target?.value})}
                        placeholder="Enter amount"
                        description="Minimum ₹500 per month"
                      />

                      <Input
                        label="Investment Duration (Years)"
                        type="number"
                        value={sipInputs?.duration}
                        onChange={(e) => setSipInputs({...sipInputs, duration: e?.target?.value})}
                        placeholder="Enter years"
                        description="Recommended minimum 5 years"
                      />

                      <Input
                        label="Expected Annual Return (%)"
                        type="number"
                        value={sipInputs?.expectedReturn}
                        onChange={(e) => setSipInputs({...sipInputs, expectedReturn: e?.target?.value})}
                        placeholder="Enter percentage"
                        description="Historical equity returns: 10-15%"
                      />

                      <Button 
                        variant="default" 
                        fullWidth 
                        className="bg-gradient-brand"
                        iconName="Calculator"
                        iconPosition="left"
                      >
                        Calculate Returns
                      </Button>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-primary mb-4">Investment Summary</h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-sm text-text-secondary mb-1">Total Investment</div>
                          <div className="text-2xl font-bold text-primary">
                            {formatCurrency(sipResults?.totalInvestment)}
                          </div>
                        </div>

                        <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                          <div className="text-sm text-success mb-1">Expected Returns</div>
                          <div className="text-2xl font-bold text-success">
                            {formatCurrency(sipResults?.totalReturns)}
                          </div>
                        </div>

                        <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                          <div className="text-sm text-primary mb-1">Maturity Value</div>
                          <div className="text-3xl font-bold text-primary">
                            {formatCurrency(sipResults?.futureValue)}
                          </div>
                        </div>
                      </div>

                      {/* Visual Representation */}
                      <div className="mt-6">
                        <div className="text-sm font-medium text-primary mb-3">Investment Breakdown</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-text-secondary">Principal Amount</span>
                            <span className="font-medium">
                              {((sipResults?.totalInvestment / sipResults?.futureValue) * 100)?.toFixed(1)}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full"
                              style={{ 
                                width: `${(sipResults?.totalInvestment / sipResults?.futureValue) * 100}%` 
                              }}
                            ></div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm mt-3">
                            <span className="text-text-secondary">Returns Generated</span>
                            <span className="font-medium">
                              {((sipResults?.totalReturns / sipResults?.futureValue) * 100)?.toFixed(1)}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-success h-2 rounded-full"
                              style={{ 
                                width: `${(sipResults?.totalReturns / sipResults?.futureValue) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Calculator Placeholders */}
              {activeCalculator !== 'sip' && (
                <div className="p-6">
                  <div className="text-center py-12">
                    <Icon name="Calculator" size={48} className="mx-auto text-text-tertiary mb-4" />
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {calculators?.find(c => c?.id === activeCalculator)?.name} Coming Soon
                    </h4>
                    <p className="text-text-secondary">
                      We're working on bringing you this powerful financial tool. Stay tuned!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Tools Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Goal Planner",
              description: "Plan for your financial goals",
              icon: "Target",
              color: "from-blue-500 to-blue-600"
            },
            {
              name: "Risk Profiler",
              description: "Assess your risk tolerance",
              icon: "Shield",
              color: "from-green-500 to-green-600"
            },
            {
              name: "Portfolio Analyzer",
              description: "Analyze your investments",
              icon: "PieChart",
              color: "from-purple-500 to-purple-600"
            },
            {
              name: "Comparison Tool",
              description: "Compare financial products",
              icon: "BarChart3",
              color: "from-orange-500 to-orange-600"
            }
          ]?.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border hover:shadow-brand-lg transition-brand group cursor-pointer">
              <div className={`w-12 h-12 bg-gradient-to-r ${tool?.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-brand`}>
                <Icon name={tool?.icon} size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2 group-hover:text-secondary transition-brand">
                {tool?.name}
              </h4>
              <p className="text-sm text-text-secondary">
                {tool?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTools;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DebtManagementHub = () => {
  const [loanAmount, setLoanAmount] = useState('2500000');
  const [tenure, setTenure] = useState('20');
  const [interestRate, setInterestRate] = useState('8.5');

  const loanProducts = [
    {
      id: 'home-loan',
      name: 'Home Loans',
      icon: 'Home',
      rate: '8.35% - 9.50%',
      maxAmount: '₹5 Crores',
      tenure: 'Up to 30 years',
      features: ['Zero processing fee', 'Quick approval', 'Flexible EMI options'],
      description: 'Fulfill your dream of owning a home with our competitive home loan rates'
    },
    {
      id: 'lap',
      name: 'Loan Against Property',
      icon: 'Building',
      rate: '9.50% - 12.00%',
      maxAmount: '₹10 Crores',
      tenure: 'Up to 20 years',
      features: ['High loan amount', 'Minimal documentation', 'Quick disbursal'],
      description: 'Unlock the value of your property for business or personal needs'
    },
    {
      id: 'personal-loan',
      name: 'Personal Loans',
      icon: 'User',
      rate: '10.50% - 24.00%',
      maxAmount: '₹40 Lakhs',
      tenure: 'Up to 7 years',
      features: ['No collateral', 'Instant approval', 'Flexible usage'],
      description: 'Meet your immediate financial needs with unsecured personal loans'
    },
    {
      id: 'overdraft',
      name: 'Overdraft Facility',
      icon: 'CreditCard',
      rate: '11.00% - 15.00%',
      maxAmount: '₹50 Lakhs',
      tenure: 'Revolving credit',
      features: ['Pay interest on usage', 'Instant access', 'Renewable facility'],
      description: 'Flexible credit facility for managing cash flow requirements'
    },
    {
      id: 'working-capital',
      name: 'Working Capital',
      icon: 'TrendingUp',
      rate: '9.75% - 14.00%',
      maxAmount: '₹25 Crores',
      tenure: 'Up to 12 months',
      features: ['Business growth', 'Seasonal funding', 'Quick processing'],
      description: 'Fund your business operations and growth initiatives'
    },
    {
      id: 'letter-credit',
      name: 'Letters of Credit',
      icon: 'FileText',
      rate: '0.50% - 2.00%',
      maxAmount: 'No limit',
      tenure: 'As per trade',
      features: ['Trade finance', 'Risk mitigation', 'Global acceptance'],
      description: 'Secure international trade transactions with bank guarantees'
    }
  ];

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(tenure) * 12;
    
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="CreditCard" size={32} className="text-primary" />
            <span className="text-primary font-semibold text-lg">Debt Management Hub</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Lending Solutions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From home loans to working capital, discover tailored financing options with competitive rates and flexible terms
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Loan Products */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {loanProducts?.map((product) => (
                <div key={product?.id} className="bg-white rounded-xl shadow-brand p-6 hover:shadow-brand-lg transition-brand group">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-brand">
                      <Icon name={product?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-1">{product?.name}</h3>
                      <p className="text-sm text-text-secondary">{product?.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted rounded-lg">
                    <div>
                      <div className="text-sm text-text-tertiary">Interest Rate</div>
                      <div className="font-semibold text-primary">{product?.rate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text-tertiary">Max Amount</div>
                      <div className="font-semibold text-primary">{product?.maxAmount}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-sm text-text-tertiary">Tenure</div>
                      <div className="font-semibold text-primary">{product?.tenure}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={14} className="text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    fullWidth
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    iconName="Calculator"
                    iconPosition="left"
                  >
                    Calculate EMI
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* EMI Calculator */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-brand p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Calculator" size={24} className="text-primary" />
                <h3 className="text-xl font-semibold text-primary">EMI Calculator</h3>
              </div>

              <div className="space-y-6">
                <Input
                  label="Loan Amount (₹)"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e?.target?.value)}
                  placeholder="Enter loan amount"
                />

                <Input
                  label="Tenure (Years)"
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e?.target?.value)}
                  placeholder="Enter tenure"
                />

                <Input
                  label="Interest Rate (%)"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e?.target?.value)}
                  placeholder="Enter interest rate"
                />

                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-text-tertiary mb-1">Monthly EMI</div>
                    <div className="text-2xl font-bold text-primary">
                      {formatCurrency(calculateEMI())}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-text-tertiary">Total Amount</div>
                    <div className="font-semibold text-primary">
                      {formatCurrency(calculateEMI() * tenure * 12)}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-text-tertiary">Total Interest</div>
                    <div className="font-semibold text-primary">
                      {formatCurrency((calculateEMI() * tenure * 12) - parseFloat(loanAmount))}
                    </div>
                  </div>
                </div>

                <Button 
                  variant="default" 
                  fullWidth
                  className="bg-gradient-to-r from-primary to-secondary"
                  iconName="Send"
                  iconPosition="right"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebtManagementHub;
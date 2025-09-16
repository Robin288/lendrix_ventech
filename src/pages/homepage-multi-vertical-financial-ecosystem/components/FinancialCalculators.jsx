import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const FinancialCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState('home-loan');
  const [calculatorInputs, setCalculatorInputs] = useState({
    'home-loan': { amount: '5000000', rate: '8.5', tenure: '20' },
    'sip': { amount: '10000', rate: '12', tenure: '10' },
    'fd': { amount: '100000', rate: '6.5', tenure: '5' },
    'loan-eligibility': { income: '100000', expenses: '30000', rate: '8.5' }
  });

  const calculators = [
    {
      id: 'home-loan',
      name: 'Home Loan EMI',
      icon: 'Home',
      description: 'Calculate your monthly EMI for home loans',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'sip',
      name: 'SIP Calculator',
      icon: 'TrendingUp',
      description: 'Plan your systematic investment returns',
      color: 'from-green-600 to-emerald-700'
    },
    {
      id: 'fd',
      name: 'Fixed Deposit',
      icon: 'PiggyBank',
      description: 'Calculate FD maturity amount and returns',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'loan-eligibility',
      name: 'Loan Eligibility',
      icon: 'Calculator',
      description: 'Check your loan eligibility amount',
      color: 'from-purple-600 to-indigo-700'
    }
  ];

  const tenureOptions = [
    { value: '5', label: '5 Years' },
    { value: '10', label: '10 Years' },
    { value: '15', label: '15 Years' },
    { value: '20', label: '20 Years' },
    { value: '25', label: '25 Years' },
    { value: '30', label: '30 Years' }
  ];

  const updateInput = (field, value) => {
    setCalculatorInputs(prev => ({
      ...prev,
      [activeCalculator]: {
        ...prev?.[activeCalculator],
        [field]: value
      }
    }));
  };

  const calculateHomeLoanEMI = () => {
    const inputs = calculatorInputs?.['home-loan'];
    const principal = parseFloat(inputs?.amount);
    const rate = parseFloat(inputs?.rate) / 12 / 100;
    const tenure = parseFloat(inputs?.tenure) * 12;
    
    if (rate === 0) return principal / tenure;
    
    const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    return emi;
  };

  const calculateSIP = () => {
    const inputs = calculatorInputs?.['sip'];
    const monthlyInvestment = parseFloat(inputs?.amount);
    const annualRate = parseFloat(inputs?.rate) / 100;
    const monthlyRate = annualRate / 12;
    const tenure = parseFloat(inputs?.tenure) * 12;
    
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, tenure)) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvestment = monthlyInvestment * tenure;
    const returns = futureValue - totalInvestment;
    
    return { futureValue, totalInvestment, returns };
  };

  const calculateFD = () => {
    const inputs = calculatorInputs?.['fd'];
    const principal = parseFloat(inputs?.amount);
    const rate = parseFloat(inputs?.rate) / 100;
    const tenure = parseFloat(inputs?.tenure);
    
    const maturityAmount = principal * Math.pow(1 + rate, tenure);
    const interest = maturityAmount - principal;
    
    return { maturityAmount, interest };
  };

  const calculateLoanEligibility = () => {
    const inputs = calculatorInputs?.['loan-eligibility'];
    const income = parseFloat(inputs?.income);
    const expenses = parseFloat(inputs?.expenses);
    const rate = parseFloat(inputs?.rate) / 12 / 100;
    const tenure = 20 * 12; // 20 years default
    
    const availableIncome = income - expenses;
    const maxEMI = availableIncome * 0.6; // 60% of available income
    
    if (rate === 0) return maxEMI * tenure;
    
    const eligibleAmount = (maxEMI * (Math.pow(1 + rate, tenure) - 1)) / (rate * Math.pow(1 + rate, tenure));
    return { eligibleAmount, maxEMI };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const renderCalculatorForm = () => {
    const currentInputs = calculatorInputs?.[activeCalculator];

    switch (activeCalculator) {
      case 'home-loan':
        const emi = calculateHomeLoanEMI();
        const totalAmount = emi * parseFloat(currentInputs?.tenure) * 12;
        const totalInterest = totalAmount - parseFloat(currentInputs?.amount);

        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Loan Amount"
                type="number"
                value={currentInputs?.amount}
                onChange={(e) => updateInput('amount', e?.target?.value)}
                placeholder="Enter loan amount"
              />
              <Input
                label="Interest Rate (%)"
                type="number"
                step="0.1"
                value={currentInputs?.rate}
                onChange={(e) => updateInput('rate', e?.target?.value)}
                placeholder="Enter interest rate"
              />
            </div>
            <Select
              label="Loan Tenure"
              options={tenureOptions}
              value={currentInputs?.tenure}
              onChange={(value) => updateInput('tenure', value)}
            />
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Calculation Results</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{formatCurrency(emi)}</div>
                  <div className="text-sm text-text-secondary">Monthly EMI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{formatCurrency(totalAmount)}</div>
                  <div className="text-sm text-text-secondary">Total Amount</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{formatCurrency(totalInterest)}</div>
                  <div className="text-sm text-text-secondary">Total Interest</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sip':
        const sipResults = calculateSIP();
        
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Monthly Investment"
                type="number"
                value={currentInputs?.amount}
                onChange={(e) => updateInput('amount', e?.target?.value)}
                placeholder="Enter monthly amount"
              />
              <Input
                label="Expected Return (%)"
                type="number"
                step="0.1"
                value={currentInputs?.rate}
                onChange={(e) => updateInput('rate', e?.target?.value)}
                placeholder="Enter expected return"
              />
            </div>
            <Select
              label="Investment Period"
              options={tenureOptions}
              value={currentInputs?.tenure}
              onChange={(value) => updateInput('tenure', value)}
            />
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Investment Projection</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{formatCurrency(sipResults?.futureValue)}</div>
                  <div className="text-sm text-text-secondary">Future Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{formatCurrency(sipResults?.totalInvestment)}</div>
                  <div className="text-sm text-text-secondary">Total Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{formatCurrency(sipResults?.returns)}</div>
                  <div className="text-sm text-text-secondary">Expected Returns</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'fd':
        const fdResults = calculateFD();
        
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Principal Amount"
                type="number"
                value={currentInputs?.amount}
                onChange={(e) => updateInput('amount', e?.target?.value)}
                placeholder="Enter principal amount"
              />
              <Input
                label="Interest Rate (%)"
                type="number"
                step="0.1"
                value={currentInputs?.rate}
                onChange={(e) => updateInput('rate', e?.target?.value)}
                placeholder="Enter interest rate"
              />
            </div>
            <Select
              label="Deposit Period"
              options={tenureOptions}
              value={currentInputs?.tenure}
              onChange={(value) => updateInput('tenure', value)}
            />
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Maturity Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{formatCurrency(fdResults?.maturityAmount)}</div>
                  <div className="text-sm text-text-secondary">Maturity Amount</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{formatCurrency(fdResults?.interest)}</div>
                  <div className="text-sm text-text-secondary">Interest Earned</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'loan-eligibility':
        const eligibilityResults = calculateLoanEligibility();
        
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Monthly Income"
                type="number"
                value={currentInputs?.income}
                onChange={(e) => updateInput('income', e?.target?.value)}
                placeholder="Enter monthly income"
              />
              <Input
                label="Monthly Expenses"
                type="number"
                value={currentInputs?.expenses}
                onChange={(e) => updateInput('expenses', e?.target?.value)}
                placeholder="Enter monthly expenses"
              />
            </div>
            <Input
              label="Interest Rate (%)"
              type="number"
              step="0.1"
              value={currentInputs?.rate}
              onChange={(e) => updateInput('rate', e?.target?.value)}
              placeholder="Enter expected rate"
            />
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Eligibility Assessment</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{formatCurrency(eligibilityResults?.eligibleAmount)}</div>
                  <div className="text-sm text-text-secondary">Eligible Amount</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{formatCurrency(eligibilityResults?.maxEMI)}</div>
                  <div className="text-sm text-text-secondary">Max EMI</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Calculator" size={16} />
            <span>Financial Planning Tools</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Smart Financial
            <span className="block text-gradient-prosperity">Calculators</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators. 
            Plan your investments, loans, and financial goals with precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-4">Choose Calculator</h3>
            <div className="space-y-3">
              {calculators?.map((calc) => (
                <button
                  key={calc?.id}
                  onClick={() => setActiveCalculator(calc?.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-brand ${
                    activeCalculator === calc?.id
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-border hover:border-primary/40 hover:bg-muted'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${calc?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={calc?.icon} size={20} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`font-medium ${activeCalculator === calc?.id ? 'text-primary' : 'text-text-primary'}`}>
                        {calc?.name}
                      </div>
                      <div className="text-sm text-text-secondary mt-1">
                        {calc?.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Tips */}
            <div className="mt-8 p-4 bg-muted rounded-xl">
              <h4 className="font-medium text-primary mb-2">💡 Quick Tips</h4>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Use realistic interest rates for accurate calculations</li>
                <li>• Consider inflation while planning long-term investments</li>
                <li>• Review and adjust your financial goals regularly</li>
                <li>• Consult our experts for personalized advice</li>
              </ul>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-brand">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${calculators?.find(c => c?.id === activeCalculator)?.color} rounded-xl flex items-center justify-center`}>
                  <Icon name={calculators?.find(c => c?.id === activeCalculator)?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {calculators?.find(c => c?.id === activeCalculator)?.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {calculators?.find(c => c?.id === activeCalculator)?.description}
                  </p>
                </div>
              </div>

              {renderCalculatorForm()}

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" className="bg-gradient-brand hover:shadow-brand-md flex-1">
                    Get Detailed Quote
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-primary/20 hover:border-primary/40 flex-1">
                    Speak to Expert
                    <Icon name="Phone" size={16} className="ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-text-tertiary mt-3 text-center">
                  *Calculations are indicative. Actual rates may vary based on profile and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialCalculators;
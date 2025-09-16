import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import WelcomeHeader from './components/WelcomeHeader';
import UserTypeSelector from './components/UserTypeSelector';
import AuthCard from './components/AuthCard';
import SecurityBadges from './components/SecurityBadges';

const AuthenticationHub = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const userTypes = [
    {
      id: 'corporate',
      title: 'Corporate User',
      description: 'Access virtual staff dashboard for team management and service coordination',
      icon: 'Building2',
      color: 'blue',
      features: [
        'Team Management Dashboard',
        'Service Coordination Tools',
        'Reporting Analytics',
        'Virtual Staff Access'
      ],
      mockCredentials: [
        { email: 'admin@company.com', password: 'Corp@123' },
        { email: 'manager@enterprise.com', password: 'Mgr@456' }
      ],
      redirectPath: '/client-dashboard-portal-personalized-financial-command-center'
    },
    {
      id: 'partner',
      title: 'B2B Partner',
      description: 'Distributor portal for client portfolio management and commission tracking',
      icon: 'Users',
      color: 'green',
      features: [
        'Client Portfolio Management',
        'Commission Tracking',
        'Lead Generation Tools',
        'Marketing Resources'
      ],
      mockCredentials: [
        { email: 'partner@distributor.com', password: 'Part@789' },
        { email: 'agent@network.com', password: 'Agent@321' }
      ],
      redirectPath: '/partner-integration-center-b2b-collaboration-hub'
    },
    {
      id: 'customer',
      title: 'Retail Customer',
      description: 'Personalized wealth management dashboard for investment tracking',
      icon: 'User',
      color: 'purple',
      features: [
        'Portfolio Dashboard',
        'Investment Management',
        'Wealth Tracking',
        'Service Exploration'
      ],
      mockCredentials: [
        { email: 'customer@email.com', password: 'Cust@123' },
        { email: 'investor@gmail.com', password: 'Inv@456' }
      ],
      redirectPath: '/client-dashboard-portal-personalized-financial-command-center'
    }
  ];

  const handleUserTypeSelect = (typeId) => {
    if (selectedUserType === typeId) {
      setShowLoginForm(true);
    } else {
      setSelectedUserType(typeId);
      setShowLoginForm(false);
    }
  };

  const handleLogin = (userType, formData) => {
    const selectedType = userTypes?.find(type => type?.id === userType);
    
    // Store user session data
    localStorage.setItem('userType', userType);
    localStorage.setItem('userEmail', formData?.email);
    localStorage.setItem('loginTime', new Date()?.toISOString());
    
    // Navigate to appropriate dashboard
    navigate(selectedType?.redirectPath);
  };

  const handleBackToSelection = () => {
    setShowLoginForm(false);
    setSelectedUserType(null);
  };

  const selectedType = userTypes?.find(type => type?.id === selectedUserType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <WelcomeHeader />

          <div className="max-w-7xl mx-auto">
            {!showLoginForm ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* User Type Selection */}
                <div className="lg:col-span-3">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-2">Choose Your Access Level</h2>
                    <p className="text-text-secondary">
                      Select your user type to access the appropriate dashboard and features
                    </p>
                  </div>
                  
                  <UserTypeSelector
                    userTypes={userTypes}
                    selectedType={selectedUserType}
                    onSelect={handleUserTypeSelect}
                  />

                  {selectedUserType && !showLoginForm && (
                    <div className="mt-8 text-center">
                      <button
                        onClick={() => setShowLoginForm(true)}
                        className={`px-8 py-3 bg-gradient-to-r from-${selectedType?.color}-500 to-${selectedType?.color}-600 text-white font-medium rounded-lg hover:from-${selectedType?.color}-600 hover:to-${selectedType?.color}-700 transition-brand shadow-brand hover:shadow-brand-md`}
                      >
                        Continue to Login
                      </button>
                    </div>
                  )}
                </div>

                {/* Security Information */}
                <div className="lg:col-span-1">
                  <SecurityBadges />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Login Form */}
                <div className="lg:col-span-2">
                  <AuthCard
                    userType={selectedType?.id}
                    title={selectedType?.title}
                    description={selectedType?.description}
                    icon={selectedType?.icon}
                    color={selectedType?.color}
                    onLogin={handleLogin}
                    isActive={true}
                    onSelect={handleBackToSelection}
                    mockCredentials={selectedType?.mockCredentials}
                  />
                </div>

                {/* Security Information */}
                <div className="lg:col-span-1">
                  <SecurityBadges />
                  
                  {/* Mock Credentials Info */}
                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="text-sm font-semibold text-yellow-800 mb-2">Demo Credentials</h4>
                    <div className="space-y-2 text-xs text-yellow-700">
                      {selectedType?.mockCredentials?.map((cred, index) => (
                        <div key={index} className="p-2 bg-yellow-100 rounded">
                          <div>Email: {cred?.email}</div>
                          <div>Password: {cred?.password}</div>
                        </div>
                      ))}
                      <div className="p-2 bg-yellow-100 rounded">
                        <div>OTP: 123456</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-brand border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Secure Access</h3>
                <p className="text-text-secondary text-sm">
                  Multi-factor authentication with biometric support and SMS OTP verification
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-brand border border-gray-100">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-success">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">RBI Compliant</h3>
                <p className="text-text-secondary text-sm">
                  Fully compliant with Indian financial regulations and data protection standards
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-brand border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">24/7 Available</h3>
                <p className="text-text-secondary text-sm">
                  Round-the-clock access to your financial dashboard and portfolio management
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthenticationHub;
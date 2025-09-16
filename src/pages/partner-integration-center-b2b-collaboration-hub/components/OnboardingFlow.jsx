import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const onboardingSteps = [
    {
      id: 1,
      title: 'Partner Registration',
      description: 'Complete your business profile and submit required documents',
      icon: 'FileText',
      duration: '5-10 minutes',
      requirements: ['Business Registration Certificate', 'PAN Card', 'GST Certificate', 'Bank Account Details']
    },
    {
      id: 2,
      title: 'Digital KYC Verification',
      description: 'SEBI-compliant digital verification process',
      icon: 'Shield',
      duration: '2-3 business days',
      requirements: ['Aadhaar Verification', 'Video KYC Call', 'Document Authentication', 'Background Check']
    },
    {
      id: 3,
      title: 'Agreement Generation',
      description: 'Automated partnership agreement based on your business model',
      icon: 'FileCheck',
      duration: '1 business day',
      requirements: ['Commission Structure Selection', 'Service Vertical Preferences', 'Territory Mapping', 'Digital Signature']
    },
    {
      id: 4,
      title: 'System Integration',
      description: 'API keys generation and system setup',
      icon: 'Settings',
      duration: '1-2 hours',
      requirements: ['API Key Generation', 'Webhook Configuration', 'Test Environment Access', 'Documentation Access']
    },
    {
      id: 5,
      title: 'Training & Certification',
      description: 'Complete product training and compliance certification',
      icon: 'GraduationCap',
      duration: '3-5 business days',
      requirements: ['Product Training Modules', 'Compliance Certification', 'Sales Process Training', 'System Usage Training']
    },
    {
      id: 6,
      title: 'Go Live',
      description: 'Activate your partner account and start earning',
      icon: 'Rocket',
      duration: 'Immediate',
      requirements: ['Final Verification', 'Account Activation', 'Marketing Material Access', 'Dedicated Support Assignment']
    }
  ];

  const kycDocuments = [
    { name: 'Business Registration', status: 'completed', icon: 'FileCheck' },
    { name: 'PAN Verification', status: 'completed', icon: 'FileCheck' },
    { name: 'GST Certificate', status: 'pending', icon: 'Clock' },
    { name: 'Bank Account', status: 'pending', icon: 'Clock' },
    { name: 'Aadhaar KYC', status: 'not-started', icon: 'FileX' },
    { name: 'Video Verification', status: 'not-started', icon: 'FileX' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-success bg-success/10';
      case 'pending': return 'text-warning bg-warning/10';
      default: return 'text-text-tertiary bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'CheckCircle';
      case 'pending': return 'Clock';
      default: return 'Circle';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Partner Onboarding Process
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Streamlined digital onboarding with SEBI-compliant KYC processes and automated agreement generation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Onboarding Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-6">Onboarding Timeline</h3>
            
            {onboardingSteps?.map((step, index) => (
              <div
                key={step?.id}
                className={`relative p-6 rounded-xl border-2 transition-brand cursor-pointer ${
                  currentStep === step?.id
                    ? 'border-primary bg-primary/5 shadow-brand'
                    : 'border-border bg-white hover:border-primary/30'
                }`}
                onClick={() => setCurrentStep(step?.id)}
              >
                {index < onboardingSteps?.length - 1 && (
                  <div className="absolute left-9 top-16 w-0.5 h-12 bg-border"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    currentStep === step?.id ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
                  }`}>
                    <Icon name={step?.icon} size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary">{step?.title}</h4>
                      <span className="text-sm text-text-tertiary">{step?.duration}</span>
                    </div>
                    <p className="text-text-secondary mb-3">{step?.description}</p>
                    
                    {currentStep === step?.id && (
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-primary">Requirements:</h5>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step?.requirements?.map((req, reqIndex) => (
                            <div key={reqIndex} className="flex items-center space-x-2">
                              <Icon name="Check" size={14} className="text-success" />
                              <span className="text-sm text-text-secondary">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KYC Status & Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-brand p-6">
              <h3 className="text-xl font-semibold text-primary mb-6">KYC Document Status</h3>
              
              <div className="space-y-4">
                {kycDocuments?.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name={doc?.icon} size={18} className={getStatusColor(doc?.status)} />
                      <span className="text-text-secondary">{doc?.name}</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc?.status)}`}>
                      <Icon name={getStatusIcon(doc?.status)} size={12} />
                      <span className="capitalize">{doc?.status?.replace('-', ' ')}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary">Overall Progress</span>
                  <span className="text-sm text-text-secondary">33% Complete</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-brand p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button 
                  variant="default" 
                  fullWidth 
                  iconName="Upload" 
                  iconPosition="left"
                >
                  Upload Documents
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth 
                  iconName="Video" 
                  iconPosition="left"
                >
                  Schedule Video KYC
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth 
                  iconName="Phone" 
                  iconPosition="left"
                >
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Need Help?</h4>
                  <p className="text-sm text-text-secondary mb-3">
                    Our dedicated partner success team is available to guide you through the onboarding process.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="Phone" size={14} className="text-primary" />
                      <span className="text-primary">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Mail" size={14} className="text-primary" />
                      <span className="text-primary">partners@lendrix.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingFlow;
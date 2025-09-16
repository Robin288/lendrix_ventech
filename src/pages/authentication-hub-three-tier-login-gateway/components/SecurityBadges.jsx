import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadges = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'SSL Encrypted',
      description: '256-bit encryption'
    },
    {
      icon: 'Lock',
      title: 'RBI Compliant',
      description: 'Regulatory approved'
    },
    {
      icon: 'Eye',
      title: 'Biometric Auth',
      description: 'Fingerprint & Face ID'
    },
    {
      icon: 'Smartphone',
      title: 'SMS OTP',
      description: 'Indian mobile verified'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Compliance'
    },
    {
      name: 'SEBI Registered',
      description: 'Securities Exchange Board of India'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Security Features */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <Icon name="ShieldCheck" size={20} className="mr-2 text-success" />
          Security Features
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {securityFeatures?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={feature?.icon} size={16} className="text-success" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-primary">{feature?.title}</div>
                <div className="text-xs text-text-secondary">{feature?.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <Icon name="Award" size={20} className="mr-2 text-accent" />
          Certifications
        </h3>
        <div className="space-y-3">
          {certifications?.map((cert, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
              <div>
                <div className="text-sm font-medium text-primary">{cert?.name}</div>
                <div className="text-xs text-text-secondary">{cert?.description}</div>
              </div>
              <Icon name="CheckCircle" size={16} className="text-success" />
            </div>
          ))}
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Users" size={20} className="text-primary" />
          <span className="text-sm font-medium text-primary">Trusted by 50,000+ clients</span>
        </div>
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="IndianRupee" size={20} className="text-primary" />
          <span className="text-sm font-medium text-primary">₹10,000+ Cr assets under management</span>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="Clock" size={20} className="text-primary" />
          <span className="text-sm font-medium text-primary">24/7 secure access</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityBadges;
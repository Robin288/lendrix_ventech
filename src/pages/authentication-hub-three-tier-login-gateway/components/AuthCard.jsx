import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const AuthCard = ({ 
  userType, 
  title, 
  description, 
  icon, 
  color, 
  onLogin, 
  isActive, 
  onSelect,
  mockCredentials 
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    otp: ''
  });
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData?.password) {
      newErrors.password = 'Password is required';
    }
    
    if (showOTP && !formData?.otp) {
      newErrors.otp = 'OTP is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check mock credentials
    const isValidCredentials = mockCredentials?.some(cred => 
      cred?.email === formData?.email && cred?.password === formData?.password
    );
    
    if (!isValidCredentials) {
      setErrors({
        email: `Invalid credentials. Use: ${mockCredentials?.[0]?.email}`,
        password: `Password: ${mockCredentials?.[0]?.password}`
      });
      setLoading(false);
      return;
    }
    
    if (!showOTP) {
      setShowOTP(true);
      setLoading(false);
      return;
    }
    
    // Validate OTP
    if (formData?.otp !== '123456') {
      setErrors({ otp: 'Invalid OTP. Use: 123456' });
      setLoading(false);
      return;
    }
    
    setLoading(false);
    onLogin(userType, formData);
  };

  const handleForgotPassword = () => {
    alert(`Password reset link sent to registered mobile number for ${userType} account`);
  };

  const handleBiometricLogin = () => {
    alert(`Biometric authentication initiated for ${userType} login`);
  };

  if (!isActive) {
    return (
      <div 
        onClick={onSelect}
        className={`relative p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-${color}-300 transition-brand cursor-pointer group hover:shadow-brand-md`}
      >
        <div className="text-center">
          <div className={`w-16 h-16 mx-auto mb-4 bg-${color}-100 rounded-full flex items-center justify-center group-hover:bg-${color}-200 transition-brand`}>
            <Icon name={icon} size={32} className={`text-${color}-600`} />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
          <div className="mt-4">
            <Button variant="outline" size="sm" className={`border-${color}-300 hover:border-${color}-500 hover:bg-${color}-50`}>
              Select Login Type
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative p-8 bg-white rounded-xl border-2 border-${color}-300 shadow-brand-lg`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-full flex items-center justify-center shadow-brand`}>
          <Icon name={icon} size={36} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData?.password}
          onChange={(e) => handleInputChange('password', e?.target?.value)}
          error={errors?.password}
          required
        />

        {showOTP && (
          <Input
            label="OTP Verification"
            type="text"
            placeholder="Enter 6-digit OTP"
            value={formData?.otp}
            onChange={(e) => handleInputChange('otp', e?.target?.value)}
            error={errors?.otp}
            description="OTP sent to your registered mobile number"
            required
          />
        )}

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            checked={formData?.rememberMe}
            onChange={(e) => handleInputChange('rememberMe', e?.target?.checked)}
          />
          <button
            type="button"
            onClick={handleForgotPassword}
            className={`text-sm text-${color}-600 hover:text-${color}-700 font-medium transition-brand`}
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={loading}
          className={`bg-gradient-to-r from-${color}-500 to-${color}-600 hover:from-${color}-600 hover:to-${color}-700`}
        >
          {showOTP ? 'Verify & Login' : 'Continue'}
        </Button>

        {/* Alternative Login Options */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-text-secondary text-center mb-4">Or login with</p>
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleBiometricLogin}
              iconName="Fingerprint"
              iconPosition="left"
              className="text-text-secondary hover:text-primary"
            >
              Biometric
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              iconName="Smartphone"
              iconPosition="left"
              className="text-text-secondary hover:text-primary"
            >
              SMS OTP
            </Button>
          </div>
        </div>
      </form>
      {/* Back Button */}
      <button
        onClick={onSelect}
        className="absolute top-4 left-4 p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-gray-100 transition-brand"
      >
        <Icon name="ArrowLeft" size={20} />
      </button>
    </div>
  );
};

export default AuthCard;
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const WelcomeHeader = () => {
  return (
    <div className="text-center mb-12">
      {/* Logo */}
      <Link to="/homepage-multi-vertical-financial-ecosystem" className="inline-flex items-center space-x-3 mb-6 group">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand transition-brand-fast group-hover:shadow-brand-lg group-hover:scale-105">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="absolute -inset-1 bg-gradient-prosperity rounded-lg opacity-0 group-hover:opacity-20 transition-brand-fast blur-sm"></div>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-2xl font-bold text-primary font-sans tracking-tight">
            Lendrix
          </span>
          <span className="text-sm font-medium text-secondary -mt-1 tracking-wide">
            Ventech
          </span>
        </div>
      </Link>

      {/* Welcome Text */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
          Welcome to Your
          <span className="text-gradient-primary block">Financial Command Center</span>
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          Access your personalized dashboard with secure, role-based authentication. 
          Choose your login type to continue to your dedicated financial ecosystem.
        </p>
        
        {/* Quick Stats */}
        <div className="flex items-center justify-center space-x-8 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-success" />
            <span>Bank-grade Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span>50,000+ Active Users</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-accent" />
            <span>24/7 Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
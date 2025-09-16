import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnerHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <span className="text-accent font-medium">Partner Integration Center</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                B2B Collaboration
                <span className="block text-accent">Hub</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive portal for distributors, financial advisors, and institutional partners. 
                Seamless integration, transparent commission tracking, and powerful collaboration tools.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">₹2.5Cr</div>
                <div className="text-sm text-white/80">Monthly Commissions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-white/80">API Uptime</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/authentication-hub-three-tier-login-gateway">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  iconName="LogIn"
                  iconPosition="right"
                >
                  Partner Login
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="FileText"
                iconPosition="left"
              >
                API Documentation
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Partner Dashboard</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm">Total Clients</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm">This Month Commission</span>
                    <span className="font-semibold text-accent">₹2,45,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm">Active Integrations</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Shield" size={16} className="text-green-400" />
                    <span>SEBI Compliant • Secure APIs • Real-time Sync</span>
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

export default PartnerHero;
import React from 'react';
import Header from '../../components/ui/Header';
import PartnerHero from './components/PartnerHero';
import IntegrationOverview from './components/IntegrationOverview';
import OnboardingFlow from './components/OnboardingFlow';
import ResourceLibrary from './components/ResourceLibrary';
import CommissionManagement from './components/CommissionManagement';
import LeadManagement from './components/LeadManagement';
import SupportSystem from './components/SupportSystem';

const PartnerIntegrationCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <PartnerHero />
        <IntegrationOverview />
        <OnboardingFlow />
        <ResourceLibrary />
        <CommissionManagement />
        <LeadManagement />
        <SupportSystem />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">Lendrix</div>
                  <div className="text-sm text-white/80">Ventech</div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Comprehensive financial services platform empowering partners with cutting-edge technology and transparent collaboration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Partner Resources</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-brand">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Integration Guides</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Marketing Materials</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Training Modules</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-brand">Partner Helpdesk</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Technical Support</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Business Support</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Knowledge Base</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-white/80">
                <div>
                  <p>Partner Support</p>
                  <p className="text-white">+91 1800-123-4567</p>
                </div>
                <div>
                  <p>Email</p>
                  <p className="text-white">partners@lendrix.com</p>
                </div>
                <div>
                  <p>Business Hours</p>
                  <p className="text-white">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date()?.getFullYear()} Lendrix Ventech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-brand">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-brand">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-brand">SEBI Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnerIntegrationCenter;
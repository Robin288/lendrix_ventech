import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Building2" size={32} className="text-accent" />
            <span className="text-accent font-medium text-lg">Comprehensive Financial Solutions</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Five Integrated
            <span className="block text-accent font-accent">Financial Ecosystems</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            From debt management to venture capital, discover our complete suite of financial services designed to support every stage of your wealth journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore All Services
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">₹50,000Cr+</div>
              <div className="text-white/80 text-sm">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">25,000+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80 text-sm">Partner Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
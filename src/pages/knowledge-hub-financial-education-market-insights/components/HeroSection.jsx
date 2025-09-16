import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="BookOpen" size={20} />
                <span className="text-sm font-medium tracking-wide uppercase">Knowledge Hub</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Financial Education &
                <span className="text-gradient-prosperity block mt-2">Market Insights</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Empowering your financial journey with expert insights, comprehensive education, and data-driven market analysis across all investment verticals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                iconName="TrendingUp"
                iconPosition="left"
              >
                Explore Market Insights
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Play"
                iconPosition="left"
              >
                Watch Webinars
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Research Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/80">Expert Webinars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-white/80">Market Reports</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Latest Market Update</h3>
                  <div className="flex items-center space-x-2 text-accent">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">2 hours ago</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">NIFTY 50</span>
                      <div className="flex items-center space-x-1 text-green-400">
                        <Icon name="TrendingUp" size={14} />
                        <span className="text-sm">+1.2%</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">19,845.30</div>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">USD/INR</span>
                      <div className="flex items-center space-x-1 text-red-400">
                        <Icon name="TrendingDown" size={14} />
                        <span className="text-sm">-0.3%</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">₹83.25</div>
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

export default HeroSection;
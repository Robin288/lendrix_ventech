import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MarketTicker from './components/MarketTicker';
import ServiceShowcase from './components/ServiceShowcase';
import TrustSignals from './components/TrustSignals';
import TestimonialCarousel from './components/TestimonialCarousel';
import FinancialCalculators from './components/FinancialCalculators';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MarketTicker />
        <ServiceShowcase />
        <TrustSignals />
        <TestimonialCarousel />
        <FinancialCalculators />
      </main>
    </div>
  );
};

export default Homepage;
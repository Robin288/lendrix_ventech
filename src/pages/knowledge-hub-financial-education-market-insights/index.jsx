import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ContentCategories from './components/ContentCategories';
import SearchAndFilter from './components/SearchAndFilter';
import FeaturedContent from './components/FeaturedContent';
import InteractiveTools from './components/InteractiveTools';
import WebinarSection from './components/WebinarSection';

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({});

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement search logic here
    console.log('Searching for:', query);
  };

  const handleFilter = (filters) => {
    setActiveFilters(filters);
    // Implement filter logic here
    console.log('Applying filters:', filters);
  };

  return (
    <>
      <Helmet>
        <title>Knowledge Hub - Financial Education & Market Insights | Lendrix Ventech</title>
        <meta 
          name="description" 
          content="Access comprehensive financial education, market insights, research reports, and interactive tools. Expert webinars and thought leadership content across all investment verticals." 
        />
        <meta name="keywords" content="financial education, market insights, investment research, financial calculators, webinars, tax planning, mutual funds, real estate investment" />
        <meta property="og:title" content="Knowledge Hub - Financial Education & Market Insights | Lendrix Ventech" />
        <meta property="og:description" content="Empowering your financial journey with expert insights, comprehensive education, and data-driven market analysis across all investment verticals." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/knowledge-hub-financial-education-market-insights" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          
          <ContentCategories 
            onCategoryChange={handleCategoryChange}
            activeCategory={activeCategory}
          />
          
          <SearchAndFilter 
            onSearch={handleSearch}
            onFilter={handleFilter}
            activeFilters={activeFilters}
          />
          
          <FeaturedContent />
          
          <InteractiveTools />
          
          <WebinarSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Knowledge Categories</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-brand">Market Insights</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Educational Resources</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Research Reports</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Interactive Tools</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-brand">Tax Planning</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Mutual Fund SIP</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Real Estate Investment</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Retirement Planning</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Expert Content</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-brand">Webinar Series</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Market Analysis</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Investment Guides</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Financial Calculators</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-brand">Newsletter</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Notifications</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">RSS Feed</a></li>
                  <li><a href="#" className="hover:text-white transition-brand">Mobile App</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
              <p>&copy; {new Date()?.getFullYear()} Lendrix Ventech. All rights reserved. | Knowledge Hub - Empowering Financial Decisions</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default KnowledgeHub;
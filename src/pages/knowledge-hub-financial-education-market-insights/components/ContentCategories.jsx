import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContentCategories = ({ onCategoryChange, activeCategory }) => {
  const categories = [
    {
      id: 'all',
      name: 'All Content',
      icon: 'Grid3X3',
      count: 847,
      description: 'Complete knowledge base'
    },
    {
      id: 'market-insights',
      name: 'Market Insights',
      icon: 'TrendingUp',
      count: 156,
      description: 'Real-time market analysis'
    },
    {
      id: 'education',
      name: 'Educational Resources',
      icon: 'BookOpen',
      count: 234,
      description: 'Learn financial concepts'
    },
    {
      id: 'research',
      name: 'Research Reports',
      icon: 'FileText',
      count: 89,
      description: 'In-depth market studies'
    },
    {
      id: 'tools',
      name: 'Interactive Tools',
      icon: 'Calculator',
      count: 45,
      description: 'Financial calculators'
    },
    {
      id: 'webinars',
      name: 'Webinars',
      icon: 'Video',
      count: 78,
      description: 'Expert sessions'
    },
    {
      id: 'news',
      name: 'Market News',
      icon: 'Newspaper',
      count: 245,
      description: 'Latest financial updates'
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Explore Our Knowledge Base
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Access comprehensive financial education and market insights across all investment verticals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              className={`group p-6 rounded-xl border transition-brand text-left ${
                activeCategory === category?.id
                  ? 'bg-primary text-white border-primary shadow-brand-lg'
                  : 'bg-white hover:bg-primary/5 border-border hover:border-primary/30 hover:shadow-brand'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg transition-brand ${
                  activeCategory === category?.id
                    ? 'bg-white/20' :'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  <Icon 
                    name={category?.icon} 
                    size={24} 
                    className={activeCategory === category?.id ? 'text-white' : 'text-primary'}
                  />
                </div>
                <div className={`text-2xl font-bold ${
                  activeCategory === category?.id ? 'text-white' : 'text-primary'
                }`}>
                  {category?.count}
                </div>
              </div>
              
              <h3 className={`text-lg font-semibold mb-2 ${
                activeCategory === category?.id ? 'text-white' : 'text-primary'
              }`}>
                {category?.name}
              </h3>
              
              <p className={`text-sm ${
                activeCategory === category?.id ? 'text-white/80' : 'text-text-secondary'
              }`}>
                {category?.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCategories;
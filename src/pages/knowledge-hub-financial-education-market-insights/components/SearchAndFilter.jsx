import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchAndFilter = ({ onSearch, onFilter, activeFilters = {} }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    contentType: '',
    level: '',
    dateRange: '',
    author: ''
  });

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'market-insights', label: 'Market Insights' },
    { value: 'wealth-management', label: 'Wealth Management' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'venture-capital', label: 'Venture Capital' },
    { value: 'debt-management', label: 'Debt Management' },
    { value: 'tax-planning', label: 'Tax Planning' }
  ];

  const contentTypeOptions = [
    { value: '', label: 'All Content Types' },
    { value: 'article', label: 'Articles' },
    { value: 'research', label: 'Research Reports' },
    { value: 'webinar', label: 'Webinars' },
    { value: 'tool', label: 'Interactive Tools' },
    { value: 'guide', label: 'Educational Guides' },
    { value: 'news', label: 'Market News' }
  ];

  const levelOptions = [
    { value: '', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const dateRangeOptions = [
    { value: '', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' }
  ];

  const authorOptions = [
    { value: '', label: 'All Authors' },
    { value: 'rajesh-kumar', label: 'Dr. Rajesh Kumar' },
    { value: 'priya-sharma', label: 'Priya Sharma' },
    { value: 'amit-patel', label: 'Amit Patel' },
    { value: 'neha-gupta', label: 'Neha Gupta' },
    { value: 'vikram-singh', label: 'Vikram Singh' }
  ];

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      category: '',
      contentType: '',
      level: '',
      dateRange: '',
      author: ''
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(filters)?.filter(value => value !== '')?.length;
  };

  const popularSearches = [
    'SIP Calculator',
    'Tax Saving',
    'Real Estate Investment',
    'Mutual Funds',
    'Home Loan',
    'Market Analysis',
    'Retirement Planning',
    'Startup Funding'
  ];

  return (
    <section className="py-8 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Icon 
                name="Search" 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-tertiary"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                placeholder="Search articles, guides, tools, and more..."
                className="w-full pl-12 pr-32 py-4 bg-white border border-border rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-brand"
              />
              <Button
                type="submit"
                variant="default"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-brand"
                iconName="Search"
                iconPosition="left"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-text-secondary">Popular:</span>
            {popularSearches?.slice(0, 6)?.map((search, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchQuery(search);
                  onSearch(search);
                }}
                className="px-3 py-1 bg-white border border-border rounded-full text-sm text-text-secondary hover:text-primary hover:border-primary/30 transition-brand"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filter Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              iconName="Filter"
              iconPosition="left"
              className="relative"
            >
              Filters
              {getActiveFilterCount() > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  {getActiveFilterCount()}
                </span>
              )}
            </Button>

            {getActiveFilterCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                iconName="X"
                iconPosition="left"
                className="text-text-secondary hover:text-primary"
              >
                Clear All
              </Button>
            )}
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-text-secondary">Sort by:</span>
            <Select
              options={[
                { value: 'relevance', label: 'Relevance' },
                { value: 'date-desc', label: 'Newest First' },
                { value: 'date-asc', label: 'Oldest First' },
                { value: 'popularity', label: 'Most Popular' },
                { value: 'title', label: 'Title A-Z' }
              ]}
              value="relevance"
              onChange={() => {}}
              className="w-40"
            />
          </div>
        </div>

        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="mt-6 bg-white rounded-xl border border-border p-6 shadow-brand">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <Select
                label="Category"
                options={categoryOptions}
                value={filters?.category}
                onChange={(value) => handleFilterChange('category', value)}
                placeholder="Select category"
              />

              <Select
                label="Content Type"
                options={contentTypeOptions}
                value={filters?.contentType}
                onChange={(value) => handleFilterChange('contentType', value)}
                placeholder="Select type"
              />

              <Select
                label="Difficulty Level"
                options={levelOptions}
                value={filters?.level}
                onChange={(value) => handleFilterChange('level', value)}
                placeholder="Select level"
              />

              <Select
                label="Date Range"
                options={dateRangeOptions}
                value={filters?.dateRange}
                onChange={(value) => handleFilterChange('dateRange', value)}
                placeholder="Select range"
              />

              <Select
                label="Author"
                options={authorOptions}
                value={filters?.author}
                onChange={(value) => handleFilterChange('author', value)}
                placeholder="Select author"
                searchable
              />
            </div>

            {/* Active Filters Display */}
            {getActiveFilterCount() > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Filter" size={16} className="text-text-secondary" />
                  <span className="text-sm font-medium text-text-secondary">Active Filters:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters)?.map(([key, value]) => {
                    if (!value) return null;
                    
                    const getFilterLabel = (key, value) => {
                      const optionsMap = {
                        category: categoryOptions,
                        contentType: contentTypeOptions,
                        level: levelOptions,
                        dateRange: dateRangeOptions,
                        author: authorOptions
                      };
                      const option = optionsMap?.[key]?.find(opt => opt?.value === value);
                      return option ? option?.label : value;
                    };

                    return (
                      <span
                        key={key}
                        className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        <span>{getFilterLabel(key, value)}</span>
                        <button
                          onClick={() => handleFilterChange(key, '')}
                          className="hover:text-primary/70 transition-brand"
                        >
                          <Icon name="X" size={14} />
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchAndFilter;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set([1, 5, 8]));

  const categories = [
    { id: 'all', name: 'All Resources', count: 47 },
    { id: 'marketing', name: 'Marketing Materials', count: 12 },
    { id: 'product', name: 'Product Fact Sheets', count: 15 },
    { id: 'training', name: 'Training Modules', count: 8 },
    { id: 'compliance', name: 'Compliance Guidelines', count: 7 },
    { id: 'technical', name: 'Technical Documentation', count: 5 }
  ];

  const resources = [
    {
      id: 1,
      title: 'Mutual Fund Product Brochure 2024',
      category: 'marketing',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      lastUpdated: '2024-09-10',
      description: 'Comprehensive brochure covering all mutual fund offerings with performance data and risk disclosures.',
      tags: ['Mutual Funds', 'Marketing', 'Client Presentation']
    },
    {
      id: 2,
      title: 'Digital Onboarding Process Guide',
      category: 'training',
      type: 'Video',
      size: '45 min',
      downloads: 892,
      lastUpdated: '2024-09-08',
      description: 'Step-by-step video guide for partner-assisted digital client onboarding process.',
      tags: ['Onboarding', 'Training', 'Process']
    },
    {
      id: 3,
      title: 'SEBI Compliance Checklist 2024',
      category: 'compliance',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 2156,
      lastUpdated: '2024-09-12',
      description: 'Updated compliance checklist with latest SEBI regulations and requirements.',
      tags: ['SEBI', 'Compliance', 'Regulations']
    },
    {
      id: 4,
      title: 'Insurance Product Comparison Sheet',
      category: 'product',
      type: 'Excel',
      size: '890 KB',
      downloads: 567,
      lastUpdated: '2024-09-05',
      description: 'Detailed comparison of all insurance products with features, benefits, and pricing.',
      tags: ['Insurance', 'Comparison', 'Product Sheet']
    },
    {
      id: 5,
      title: 'API Integration Tutorial Series',
      category: 'technical',
      type: 'Video',
      size: '2.5 hours',
      downloads: 334,
      lastUpdated: '2024-09-11',
      description: 'Complete tutorial series covering API integration, authentication, and best practices.',
      tags: ['API', 'Integration', 'Technical']
    },
    {
      id: 6,
      title: 'Social Media Marketing Kit',
      category: 'marketing',
      type: 'ZIP',
      size: '15.2 MB',
      downloads: 789,
      lastUpdated: '2024-09-07',
      description: 'Ready-to-use social media templates, graphics, and content for partner marketing.',
      tags: ['Social Media', 'Marketing', 'Templates']
    },
    {
      id: 7,
      title: 'Real Estate Investment Guide',
      category: 'product',
      type: 'PDF',
      size: '3.1 MB',
      downloads: 445,
      lastUpdated: '2024-09-09',
      description: 'Comprehensive guide to real estate investment products and services offered.',
      tags: ['Real Estate', 'Investment', 'Guide']
    },
    {
      id: 8,
      title: 'Commission Structure & Calculation',
      category: 'training',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 1678,
      lastUpdated: '2024-09-13',
      description: 'Detailed explanation of commission structures across all product verticals.',
      tags: ['Commission', 'Calculation', 'Structure']
    }
  ];

  const filteredResources = resources?.filter(resource => {
    const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleBookmark = (resourceId) => {
    const newBookmarks = new Set(bookmarkedItems);
    if (newBookmarks?.has(resourceId)) {
      newBookmarks?.delete(resourceId);
    } else {
      newBookmarks?.add(resourceId);
    }
    setBookmarkedItems(newBookmarks);
  };

  const getFileIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'pdf': return 'FileText';
      case 'video': return 'Play';
      case 'excel': return 'FileSpreadsheet';
      case 'zip': return 'Archive';
      default: return 'File';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      marketing: 'bg-blue-100 text-blue-700',
      product: 'bg-green-100 text-green-700',
      training: 'bg-purple-100 text-purple-700',
      compliance: 'bg-red-100 text-red-700',
      technical: 'bg-gray-100 text-gray-700'
    };
    return colors?.[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Resource Library
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Access marketing materials, product documentation, training modules, and compliance guidelines
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-brand p-6 sticky top-24">
              <div className="mb-6">
                <Input
                  type="search"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e?.target?.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary mb-4">Categories</h3>
                {categories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => setSelectedCategory(category?.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-brand ${
                      selectedCategory === category?.id
                        ? 'bg-primary/10 text-primary' :'text-text-secondary hover:bg-muted'
                    }`}
                  >
                    <span className="text-sm font-medium">{category?.name}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{category?.count}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-semibold text-primary mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Total Resources</span>
                    <span className="font-medium text-primary">47</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Downloads This Month</span>
                    <span className="font-medium text-primary">8,234</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Bookmarked</span>
                    <span className="font-medium text-primary">{bookmarkedItems?.size}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {filteredResources?.length} Resources Found
                </h3>
                <p className="text-sm text-text-secondary">
                  {selectedCategory !== 'all' && `Filtered by ${categories?.find(c => c?.id === selectedCategory)?.name}`}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" iconName="Filter" iconPosition="left">
                  Filter
                </Button>
                <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                  Bulk Download
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredResources?.map((resource) => (
                <div key={resource?.id} className="bg-white rounded-xl shadow-brand p-6 hover:shadow-brand-lg transition-brand">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={getFileIcon(resource?.type)} size={20} className="text-primary" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-primary truncate">{resource?.title}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(resource?.category)}`}>
                            {categories?.find(c => c?.id === resource?.category)?.name}
                          </span>
                        </div>
                        
                        <p className="text-text-secondary text-sm mb-3 line-clamp-2">{resource?.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {resource?.tags?.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-muted text-text-tertiary text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-text-tertiary">
                          <span>{resource?.type} • {resource?.size}</span>
                          <span>{resource?.downloads} downloads</span>
                          <span>Updated {resource?.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => toggleBookmark(resource?.id)}
                        className={`p-2 rounded-lg transition-brand ${
                          bookmarkedItems?.has(resource?.id)
                            ? 'text-warning bg-warning/10' :'text-text-tertiary hover:text-warning hover:bg-warning/10'
                        }`}
                      >
                        <Icon name="Bookmark" size={18} />
                      </button>
                      
                      <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredResources?.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-text-tertiary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">No resources found</h3>
                <p className="text-text-secondary">Try adjusting your search terms or category filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;
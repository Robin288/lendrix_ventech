import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedContent = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Indian Equity Markets: Q3 2024 Outlook and Investment Opportunities",
      excerpt: "Comprehensive analysis of sectoral performance, upcoming IPOs, and strategic investment themes for the next quarter based on current market dynamics and regulatory changes.",
      category: "Market Insights",
      readTime: "12 min read",
      publishDate: "2024-09-14",
      author: "Dr. Rajesh Kumar",
      authorRole: "Chief Market Strategist",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      tags: ["Equity Markets", "Investment Strategy", "Q3 Outlook"],
      featured: true
    },
    {
      id: 2,
      title: "Complete Guide to Mutual Fund SIP Planning for Indian Investors",
      excerpt: "Step-by-step guide covering SIP selection, portfolio diversification, tax implications, and long-term wealth creation strategies tailored for Indian market conditions.",
      category: "Educational Resources",
      readTime: "8 min read",
      publishDate: "2024-09-13",
      author: "Priya Sharma",
      authorRole: "Wealth Advisory Head",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800&h=400&fit=crop",
      tags: ["Mutual Funds", "SIP", "Wealth Creation"],
      featured: true
    },
    {
      id: 3,
      title: "Real Estate Investment Trends: Commercial vs Residential in Tier-1 Cities",
      excerpt: "Detailed comparison of investment returns, rental yields, and growth prospects across major Indian metropolitan areas with data-driven insights and future projections.",
      category: "Research Reports",
      readTime: "15 min read",
      publishDate: "2024-09-12",
      author: "Amit Patel",
      authorRole: "Real Estate Research Lead",
      image: "https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg?w=800&h=400&fit=crop",
      tags: ["Real Estate", "Investment Analysis", "Tier-1 Cities"],
      featured: true
    }
  ];

  const trendingTopics = [
    { name: "SEBI New Regulations", count: 45, trend: "up" },
    { name: "Digital Gold Investment", count: 38, trend: "up" },
    { name: "Tax Saving Strategies", count: 52, trend: "stable" },
    { name: "Startup Funding Trends", count: 29, trend: "up" },
    { name: "Home Loan Interest Rates", count: 67, trend: "down" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary">Featured Articles</h2>
              <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                View All
              </Button>
            </div>

            <div className="space-y-8">
              {featuredArticles?.map((article, index) => (
                <article 
                  key={article?.id}
                  className={`group cursor-pointer ${
                    index === 0 ? 'pb-8 border-b border-border' : ''
                  }`}
                >
                  <div className={`grid gap-6 ${
                    index === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
                  }`}>
                    <div className={`relative overflow-hidden rounded-xl ${
                      index === 0 ? 'lg:order-2' : ''
                    }`}>
                      <Image
                        src={article?.image}
                        alt={article?.title}
                        className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-brand"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                          {article?.category}
                        </span>
                      </div>
                    </div>

                    <div className={`space-y-4 ${
                      index === 0 ? 'lg:order-1 lg:col-span-1' : 'lg:col-span-2'
                    }`}>
                      <div className="space-y-3">
                        <h3 className={`font-bold text-primary group-hover:text-secondary transition-brand leading-tight ${
                          index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'
                        }`}>
                          {article?.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {article?.excerpt}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {article?.tags?.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-4 text-sm text-text-tertiary">
                          <div className="flex items-center space-x-2">
                            <Icon name="User" size={16} />
                            <span>{article?.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Clock" size={16} />
                            <span>{article?.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Calendar" size={16} />
                            <span>{new Date(article.publishDate)?.toLocaleDateString('en-IN')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Topics */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Trending Topics
              </h3>
              <div className="space-y-4">
                {trendingTopics?.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex-1">
                      <div className="font-medium text-primary group-hover:text-secondary transition-brand">
                        {topic?.name}
                      </div>
                      <div className="text-sm text-text-tertiary">
                        {topic?.count} articles
                      </div>
                    </div>
                    <div className={`flex items-center space-x-1 ${
                      topic?.trend === 'up' ? 'text-success' : 
                      topic?.trend === 'down' ? 'text-error' : 'text-text-tertiary'
                    }`}>
                      <Icon 
                        name={topic?.trend === 'up' ? 'TrendingUp' : 
                              topic?.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                        size={16} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-brand rounded-xl p-6 text-white">
              <div className="text-center space-y-4">
                <Icon name="Mail" size={32} className="mx-auto text-accent" />
                <h3 className="text-xl font-bold">Stay Updated</h3>
                <p className="text-white/90 text-sm">
                  Get weekly market insights and educational content delivered to your inbox.
                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  fullWidth
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>

            {/* Quick Tools */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <Icon name="Calculator" size={20} className="mr-2" />
                Quick Tools
              </h3>
              <div className="space-y-3">
                {[
                  { name: "SIP Calculator", icon: "TrendingUp" },
                  { name: "EMI Calculator", icon: "Home" },
                  { name: "Tax Calculator", icon: "Receipt" },
                  { name: "Retirement Planner", icon: "Target" }
                ]?.map((tool, index) => (
                  <button 
                    key={index}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-brand text-left"
                  >
                    <Icon name={tool?.icon} size={18} className="text-primary" />
                    <span className="font-medium text-primary">{tool?.name}</span>
                    <Icon name="ArrowRight" size={16} className="ml-auto text-text-tertiary" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
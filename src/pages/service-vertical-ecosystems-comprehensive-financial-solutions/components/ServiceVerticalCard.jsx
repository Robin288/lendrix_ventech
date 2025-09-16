import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceVerticalCard = ({ vertical, isActive, onActivate }) => {
  const {
    id,
    title,
    subtitle,
    description,
    icon,
    color,
    services,
    stats,
    features,
    ctaText,
    ctaLink
  } = vertical;

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-brand transition-brand duration-500 overflow-hidden cursor-pointer group ${
        isActive ? 'ring-2 ring-primary shadow-brand-lg scale-105' : 'hover:shadow-brand-lg hover:scale-102'
      }`}
      onClick={onActivate}
    >
      {/* Header */}
      <div className={`p-6 bg-gradient-to-r ${color} text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Icon name={icon} size={128} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name={icon} size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-white/90 text-sm">{subtitle}</p>
            </div>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Services Grid */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
            Key Services
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {services?.slice(0, 6)?.map((service, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                <span className="truncate">{service}</span>
              </div>
            ))}
          </div>
          {services?.length > 6 && (
            <div className="text-xs text-text-tertiary mt-2">
              +{services?.length - 6} more services
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted rounded-lg">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">{stat?.value}</div>
              <div className="text-xs text-text-tertiary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
            Key Features
          </h4>
          <div className="space-y-2">
            {features?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Star" size={14} className="text-accent flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-border">
          <Link to={ctaLink}>
            <Button 
              variant="default" 
              fullWidth
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-brand-md"
              iconName="ArrowRight"
              iconPosition="right"
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
      {/* Active Indicator */}
      {isActive && (
        <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default ServiceVerticalCard;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const RealEstateLegacy = () => {
  const [activeService, setActiveService] = useState('residential');

  const services = {
    residential: {
      title: 'Residential Solutions',
      icon: 'Home',
      description: 'Premium residential properties and home buying assistance',
      properties: [
        {
          id: 1,
          title: 'Luxury Apartments - Bandra West',
          location: 'Mumbai, Maharashtra',
          price: '₹3.5 - 5.2 Crores',
          area: '1,200 - 1,800 sq ft',
          type: '2-3 BHK',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
          features: ['Sea View', 'Premium Amenities', 'Vastu Compliant', 'Ready to Move']
        },
        {
          id: 2,
          title: 'Smart Homes - Whitefield',
          location: 'Bangalore, Karnataka',
          price: '₹1.2 - 2.8 Crores',
          area: '1,000 - 2,200 sq ft',
          type: '2-4 BHK',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
          features: ['Smart Technology', 'Green Building', 'Metro Connectivity', 'Under Construction']
        },
        {
          id: 3,
          title: 'Villa Community - Sector 50',
          location: 'Gurgaon, Haryana',
          price: '₹2.8 - 4.5 Crores',
          area: '2,500 - 3,500 sq ft',
          type: '3-4 BHK Villa',
          image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop',
          features: ['Private Garden', 'Club House', 'Security', 'Possession 2024']
        }
      ]
    },
    commercial: {
      title: 'Commercial Solutions',
      icon: 'Building2',
      description: 'Office spaces, retail outlets, and commercial investments',
      properties: [
        {
          id: 4,
          title: 'IT Park - Tech City',
          location: 'Hyderabad, Telangana',
          price: '₹85 - 120 per sq ft',
          area: '500 - 5,000 sq ft',
          type: 'Office Space',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
          features: ['IT Infrastructure', 'Parking', 'Food Court', 'Metro Access']
        },
        {
          id: 5,
          title: 'Retail Mall - Central Plaza',
          location: 'Pune, Maharashtra',
          price: '₹150 - 250 per sq ft',
          area: '200 - 2,000 sq ft',
          type: 'Retail Space',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
          features: ['High Footfall', 'Brand Presence', 'Escalators', 'Entertainment Zone']
        }
      ]
    },
    nri: {
      title: 'NRI Investment Services',
      icon: 'Globe',
      description: 'Specialized real estate services for Non-Resident Indians',
      properties: [
        {
          id: 6,
          title: 'NRI Friendly Projects',
          location: 'Multiple Cities',
          price: 'Starting ₹50 Lakhs',
          area: 'Various Options',
          type: 'Residential & Commercial',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
          features: ['FEMA Compliant', 'Remote Documentation', 'Property Management', 'Rental Guarantee']
        }
      ]
    },
    estate: {
      title: 'Estate Planning',
      icon: 'FileText',
      description: 'Comprehensive estate planning and wealth transfer solutions',
      properties: [
        {
          id: 7,
          title: 'Estate Planning Services',
          location: 'Pan India',
          price: 'Consultation Based',
          area: 'Advisory Services',
          type: 'Legal & Financial',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
          features: ['Will Drafting', 'Trust Formation', 'Tax Planning', 'Succession Planning']
        }
      ]
    }
  };

  const serviceTypes = [
    { id: 'residential', label: 'Residential', icon: 'Home' },
    { id: 'commercial', label: 'Commercial', icon: 'Building2' },
    { id: 'nri', label: 'NRI Services', icon: 'Globe' },
    { id: 'estate', label: 'Estate Planning', icon: 'FileText' }
  ];

  const currentService = services?.[activeService];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Building" size={32} className="text-accent" />
            <span className="text-accent font-semibold text-lg">Real Estate Legacy Division</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Your Real Estate Partner
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From residential dreams to commercial investments, we provide end-to-end real estate solutions with expert guidance
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl p-2 shadow-brand max-w-3xl mx-auto">
          {serviceTypes?.map((service) => (
            <button
              key={service?.id}
              onClick={() => setActiveService(service?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                activeService === service?.id
                  ? 'bg-accent text-white shadow-md'
                  : 'text-text-secondary hover:text-accent hover:bg-accent/10'
              }`}
            >
              <Icon name={service?.icon} size={16} />
              <span>{service?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-brand overflow-hidden">
          {/* Service Header */}
          <div className="p-8 bg-gradient-to-r from-accent/10 to-accent/5 border-b border-border">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                <Icon name={currentService?.icon} size={32} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{currentService?.title}</h3>
                <p className="text-text-secondary text-lg">{currentService?.description}</p>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {currentService?.properties?.map((property) => (
                <div key={property?.id} className="border border-border rounded-xl overflow-hidden hover:shadow-brand-lg transition-brand group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={property?.image}
                      alt={property?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-brand duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-primary">
                      {property?.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-brand">
                      {property?.title}
                    </h4>
                    <div className="flex items-center space-x-1 text-text-tertiary text-sm mb-3">
                      <Icon name="MapPin" size={14} />
                      <span>{property?.location}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted rounded-lg text-sm">
                      <div>
                        <div className="text-text-tertiary">Price</div>
                        <div className="font-semibold text-primary">{property?.price}</div>
                      </div>
                      <div>
                        <div className="text-text-tertiary">Area</div>
                        <div className="font-semibold text-primary">{property?.area}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {property?.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-accent/20 hover:border-accent/40"
                        iconName="Eye"
                        iconPosition="left"
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-accent to-accent/80"
                        iconName="Phone"
                        iconPosition="left"
                      >
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Integration */}
            <div className="mt-8 p-6 bg-muted/50 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary">Property Locations</h4>
                <Button 
                  variant="outline" 
                  size="sm"
                  iconName="MapPin"
                  iconPosition="left"
                >
                  View All Locations
                </Button>
              </div>
              <div className="h-64 bg-white rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Property Locations"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=19.0760,72.8777&z=10&output=embed"
                  className="border-0"
                ></iframe>
              </div>
            </div>

            {/* Services CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Complete Real Estate Solutions
                  </h4>
                  <p className="text-text-secondary">
                    From property search to legal documentation, we handle everything for you
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button 
                    variant="outline"
                    className="border-accent/20 hover:border-accent/40"
                    iconName="Calculator"
                    iconPosition="left"
                  >
                    EMI Calculator
                  </Button>
                  <Button 
                    variant="default"
                    className="bg-gradient-to-r from-accent to-accent/80"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Site Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateLegacy;
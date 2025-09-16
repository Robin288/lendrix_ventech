import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage-multi-vertical-financial-ecosystem',
      icon: 'Home'
    },
    {
      name: 'Services',
      path: '/service-vertical-ecosystems-comprehensive-financial-solutions',
      icon: 'Building2'
    },
    {
      name: 'Dashboard',
      path: '/client-dashboard-portal-personalized-financial-command-center',
      icon: 'LayoutDashboard'
    },
    {
      name: 'Partners',
      path: '/partner-integration-center-b2b-collaboration-hub',
      icon: 'Users'
    },
    {
      name: 'Knowledge Hub',
      path: '/knowledge-hub-financial-education-market-insights',
      icon: 'BookOpen'
    }
  ];

  const moreItems = [
    { name: 'Settings', path: '/settings', icon: 'Settings' },
    { name: 'Help & Support', path: '/help', icon: 'HelpCircle' },
    { name: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const Logo = () => (
    <Link to="/homepage-multi-vertical-financial-ecosystem" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand transition-brand-fast group-hover:shadow-brand-lg group-hover:scale-105">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute -inset-1 bg-gradient-prosperity rounded-lg opacity-0 group-hover:opacity-20 transition-brand-fast blur-sm"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-primary font-sans tracking-tight">
          Lendrix
        </span>
        <span className="text-sm font-medium text-secondary -mt-1 tracking-wide">
          Ventech
        </span>
      </div>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-brand shadow-brand border-b border-border'
          : 'bg-white/80 backdrop-blur-brand'
      } ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.slice(0, 4)?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand group ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon
                  name={item?.icon}
                  size={16}
                  className={`transition-brand ${
                    isActivePath(item?.path) ? 'text-primary' : 'text-text-tertiary group-hover:text-primary'
                  }`}
                />
                <span>{item?.name}</span>
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-brand">
                <Icon name="MoreHorizontal" size={16} className="text-text-tertiary group-hover:text-primary transition-brand" />
                <span>More</span>
                <Icon name="ChevronDown" size={14} className="text-text-tertiary group-hover:text-primary transition-brand" />
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-brand-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand">
                <div className="py-2">
                  {[...navigationItems?.slice(4), ...moreItems]?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-brand ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Auth Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/authentication-hub-three-tier-login-gateway">
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                Sign In
              </Button>
            </Link>
            <Link to="/authentication-hub-three-tier-login-gateway">
              <Button variant="default" size="sm" className="bg-gradient-brand hover:shadow-brand-md">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-brand"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-brand">
            <nav className="py-4 space-y-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-border pt-4 mt-4">
                {moreItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-brand"
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-4 space-y-3">
                <Link
                  to="/authentication-hub-three-tier-login-gateway"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <Button variant="outline" fullWidth className="border-primary/20 hover:border-primary/40">
                    Sign In
                  </Button>
                </Link>
                <Link
                  to="/authentication-hub-three-tier-login-gateway"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <Button variant="default" fullWidth className="bg-gradient-brand hover:shadow-brand-md">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
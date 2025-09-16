import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const MarketTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tickerIndex, setTickerIndex] = useState(0);

  const marketData = [
    { symbol: 'NIFTY 50', value: '21,456.75', change: '+234.50', changePercent: '+1.11%', isPositive: true },
    { symbol: 'SENSEX', value: '70,865.25', change: '+456.80', changePercent: '+0.65%', isPositive: true },
    { symbol: 'BANK NIFTY', value: '46,789.30', change: '-123.45', changePercent: '-0.26%', isPositive: false },
    { symbol: 'NIFTY IT', value: '32,145.60', change: '+189.25', changePercent: '+0.59%', isPositive: true },
    { symbol: 'NIFTY FMCG', value: '54,321.80', change: '+67.40', changePercent: '+0.12%', isPositive: true },
    { symbol: 'USD/INR', value: '83.25', change: '+0.15', changePercent: '+0.18%', isPositive: true },
    { symbol: 'GOLD', value: '₹62,450', change: '-125', changePercent: '-0.20%', isPositive: false },
    { symbol: 'CRUDE OIL', value: '$85.60', change: '+1.25', changePercent: '+1.48%', isPositive: true }
  ];

  const financialNews = [
    "RBI maintains repo rate at 6.5% in latest monetary policy review",
    "Indian equity markets hit new all-time highs amid strong FII inflows",
    "Government announces new tax benefits for long-term equity investments",
    "Banking sector shows robust growth with improved asset quality",
    "Mutual fund industry AUM crosses ₹50 lakh crore milestone"
  ];

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const tickerInterval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % financialNews?.length);
    }, 4000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(tickerInterval);
    };
  }, [financialNews?.length]);

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Kolkata'
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <section className="bg-primary text-white py-4 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Time and Market Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-white/80" />
              <div className="text-sm">
                <span className="font-medium">{formatTime(currentTime)} IST</span>
                <span className="text-white/60 ml-2">{formatDate(currentTime)}</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white/80">Markets Open</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Icon name="TrendingUp" size={16} className="text-green-400" />
              <span className="text-white/80">Market Cap: ₹3,45,67,890 Cr</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="Activity" size={16} className="text-white/80" />
              <span className="text-white/80">Live Updates</span>
            </div>
          </div>
        </div>

        {/* Market Data Ticker */}
        <div className="relative overflow-hidden bg-white/5 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-8 animate-marquee">
            {[...marketData, ...marketData]?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 whitespace-nowrap">
                <span className="font-medium text-white">{item?.symbol}</span>
                <span className="text-white/90">{item?.value}</span>
                <span className={`text-sm ${item?.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {item?.change} ({item?.changePercent})
                </span>
                <Icon 
                  name={item?.isPositive ? "TrendingUp" : "TrendingDown"} 
                  size={14} 
                  className={item?.isPositive ? 'text-green-400' : 'text-red-400'} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Financial News Ticker */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <Icon name="Newspaper" size={16} className="text-white" />
            </div>
            <span className="text-sm font-medium text-white/80">Market News:</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-sm text-white/90 animate-fade-in-up">
                {financialNews?.[tickerIndex]}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="flex space-x-1">
              {financialNews?.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-brand ${
                    index === tickerIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default MarketTicker;
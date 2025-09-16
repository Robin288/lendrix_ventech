import React from 'react';
import Icon from '../../../components/AppIcon';

const UserTypeSelector = ({ userTypes, selectedType, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {userTypes?.map((type) => (
        <div
          key={type?.id}
          onClick={() => onSelect(type?.id)}
          className={`relative p-6 rounded-xl border-2 transition-brand cursor-pointer group ${
            selectedType === type?.id
              ? `border-${type?.color}-400 bg-${type?.color}-50 shadow-brand-md`
              : 'border-gray-200 hover:border-gray-300 hover:shadow-brand'
          }`}
        >
          <div className="text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-brand ${
              selectedType === type?.id
                ? `bg-gradient-to-br from-${type?.color}-500 to-${type?.color}-600 shadow-brand`
                : `bg-${type?.color}-100 group-hover:bg-${type?.color}-200`
            }`}>
              <Icon 
                name={type?.icon} 
                size={32} 
                className={selectedType === type?.id ? 'text-white' : `text-${type?.color}-600`} 
              />
            </div>
            
            <h3 className={`text-xl font-semibold mb-2 transition-brand ${
              selectedType === type?.id ? 'text-primary' : 'text-primary group-hover:text-primary'
            }`}>
              {type?.title}
            </h3>
            
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {type?.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-4">
              {type?.features?.map((feature, index) => (
                <div key={index} className="flex items-center text-xs text-text-secondary">
                  <Icon name="Check" size={12} className={`mr-2 text-${type?.color}-500`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Selection Indicator */}
            {selectedType === type?.id && (
              <div className={`absolute top-3 right-3 w-6 h-6 bg-${type?.color}-500 rounded-full flex items-center justify-center`}>
                <Icon name="Check" size={14} className="text-white" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTypeSelector;
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  // FIX: Added onClick prop to allow Card to be clickable.
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, onClick }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`} onClick={onClick}>
      {title && (
        <div className="px-4 py-3 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
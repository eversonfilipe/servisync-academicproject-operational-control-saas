import React from 'react';

/**
 * @interface CardProps
 * @description Defines the props for the Card component.
 * @property {React.ReactNode} children - The content to be displayed inside the card.
 * @property {string} [className] - Optional additional CSS classes to apply to the card container.
 * @property {string} [title] - An optional title to display in the card's header.
 * @property {() => void} [onClick] - An optional function to handle clicks on the card.
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

/**
 * Renders a styled card component for displaying content sections.
 * It can optionally have a title and a click handler.
 * @param {CardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered Card component.
 */
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

import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  colorClass,
  delay = 0 
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={elementRef}
      className={`card-hover bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Decoration */}
      <div 
        className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity" 
        style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
      ></div>
      
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 bg-gradient-to-br ${colorClass} text-white transform transition-transform hover:scale-110`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
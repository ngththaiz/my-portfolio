"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  contentClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  hoverable = true,
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
        border border-gray-100 dark:border-gray-700
        ${hoverable ? 'transition-all hover:shadow-lg' : ''}
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          {title && <h3 className={`text-xl font-semibold dark:text-white ${titleClassName}`}>{title}</h3>}
          {subtitle && <p className={`text-gray-600 dark:text-gray-400 mt-1 ${subtitleClassName}`}>{subtitle}</p>}
        </div>
      )}
      
      <div className={`p-6 ${contentClassName}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default Card; 
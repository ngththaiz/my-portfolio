"use client";

import React, { ReactNode } from 'react';
import { ScrollAnimatedSection } from './MotionElements';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  return (
    <ScrollAnimatedSection
      className={`py-12 sm:py-16 md:py-20 ${className}`}
    >
      <div id={id} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 dark:text-white font-heading ${titleClassName}`}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl ${subtitleClassName}`}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8"
        >
          {children}
        </motion.div>
      </div>
    </ScrollAnimatedSection>
  );
};

export default Section; 
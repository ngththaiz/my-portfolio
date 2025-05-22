'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

// Fade up animation - dùng cho text và elements khi scroll vào
export const FadeUp = ({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: ReactNode; 
  delay?: number; 
  className?: string 
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation - hiệu ứng mờ dần hiện ra
export const FadeIn = ({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: ReactNode; 
  delay?: number; 
  className?: string 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger children - hiệu ứng xuất hiện lần lượt các phần tử con
export const StaggerContainer = ({ 
  children, 
  className = '',
  delayChildren = 0.1,
  staggerChildren = 0.1
}: { 
  children: ReactNode; 
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger item - dùng bên trong StaggerContainer
export const StaggerItem = ({ 
  children,
  className = '' 
}: { 
  children: ReactNode;
  className?: string;
}) => {
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// Scroll animated component - xuất hiện khi scroll đến
export const ScrollAnimatedSection = ({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}; 
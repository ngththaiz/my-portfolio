'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaintBrush, 
  FaCode, 
  FaMobileAlt, 
  FaDesktop, 
  FaBrain,
  FaDatabase
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-primary" size={30} />,
    title: 'Full Stack Development',
    description: 'I build scalable and efficient web applications using the latest technologies and best practices.'
  },
  {
    icon: <FaBrain className="text-primary" size={30} />,
    title: 'AI-assisted Development',
    description: 'I integrate AI-assisted tools into my daily workflow, using LLMs not only for coding support but also to enhance design thinking, improve documentation, and explore scalable software solutions.'
  },
  {
    icon: <FaDatabase className="text-primary" size={30} />,
    title: 'Database Design',
    description: 'I design and implement efficient database structures to support scalable and high-performance applications.'
  },
  {
    icon: <FaPaintBrush className="text-primary" size={30} />,
    title: 'UI/UX Design',
    description: 'I create intuitive and user-friendly interfaces that enhance user experience and engagement.'
  },
  {
    icon: <FaDesktop className="text-primary" size={30} />,
    title: 'Web Design',
    description: 'I design and implement efficient web applications using the latest technologies and best practices.'
  },
  {
    icon: <FaMobileAlt className="text-primary" size={30} />,
    title: 'Mobile Apps',
    description: 'I develop mobile applications, ensuring seamless integration with web applications.'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const iconVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2, 
    color: "#3498db",
    transition: { duration: 0.3, type: "spring", stiffness: 300 } 
  }
};

export default function WhatIDo() {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto">
        {/* Page header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 font-heading text-heading dark:text-heading-dark"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What I Do
          </motion.h1>
          <motion.p 
            className="text-lg text-body dark:text-body-dark max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I provide a wide range of development and design services to help bring your digital ideas to life. Here's how I can help you.
          </motion.p>
        </motion.div>
        
        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex p-6 rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                translateY: -5
              }}
            >
              <motion.div 
                className="mr-6 mt-1"
                variants={iconVariants}
                whileHover="hover"
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">{service.title}</h3>
                <p className="text-body dark:text-body-dark">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 
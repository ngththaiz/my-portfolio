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

export default function WhatIDo() {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto">
        {/* Page header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">
            What I Do
          </h1>
          <p className="text-lg text-body dark:text-body-dark max-w-2xl">
            I provide a wide range of development and design services to help bring your digital ideas to life. Here's how I can help you.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mr-6 mt-1">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">{service.title}</h3>
                <p className="text-body dark:text-body-dark">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioProjects, portfolioCategories } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollAnimatedSection } from '@/components/MotionElements';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <ScrollAnimatedSection className="py-32 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">
              Recent Works
            </h1>
            <p className="text-lg text-body dark:text-body-dark max-w-2xl">
              Check out some of my latest projects and work samples across different domains and technologies.
            </p>
          </div>

          {/* Portfolio Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 sm:mb-10"
          >
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {portfolioCategories.map((category) => (
                <div key={category.id} className="relative">
                  <input 
                    type="radio" 
                    name="portfolio_filter" 
                    id={`filter_${category.id}`} 
                    className="hidden" 
                    checked={selectedCategory === category.id}
                    onChange={() => setSelectedCategory(category.id)}
                  />
                  <label 
                    htmlFor={`filter_${category.id}`}
                    className={`text-sm font-medium cursor-pointer transition-colors ${
                      selectedCategory === category.id 
                        ? 'text-heading dark:text-heading-dark' 
                        : 'text-body dark:text-body-dark hover:text-heading dark:hover:text-heading-dark'
                    }`}
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence initial={false}>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-background-dark shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-0 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        fill
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2">
                      <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 font-heading text-heading dark:text-heading-dark">{project.title}</h3>
                    {project.description && (
                      <p className="text-body dark:text-body-dark mb-3 text-sm">{project.description}</p>
                    )}
                    {project.technologies && (
                      <div className="mb-4">
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Technologies:</span>
                        <p className="text-sm text-body dark:text-body-dark">{project.technologies.join(', ')}</p>
                      </div>
                    )}
                    <div className="flex space-x-4">
                      <Link 
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        View Details
                      </Link>
                      {project.website && (
                        <a 
                          href={project.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          Visit Website
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  );
} 
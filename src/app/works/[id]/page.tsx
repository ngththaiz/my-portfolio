'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { portfolioProjects } from '@/data/portfolio';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaLink, FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectId = Number(id);
  
  const project = portfolioProjects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="min-h-screen py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/works" 
          className="inline-flex items-center text-primary mb-8 hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-background-dark shadow-md">
          <div className="relative h-[400px] w-full overflow-hidden">
            <Image 
              src={project.thumbnail} 
              alt={project.title}
              className="object-cover"
              priority
              fill
            />
          </div>
          
          <div className="p-8">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4 font-heading text-heading dark:text-heading-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-primary mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <motion.div
                  className="prose prose-lg max-w-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-body dark:text-body-dark mb-6 leading-relaxed">
                    {project.fullDescription}
                  </p>
                  
                  {project.content && (
                    <div className="mt-8 space-y-8">
                      {project.content.map((section, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        >
                          <h3 className="text-xl font-bold mb-3 text-heading dark:text-heading-dark font-heading">
                            {section.heading}
                          </h3>
                          <p className="text-body dark:text-body-dark leading-relaxed">
                            {section.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-background-gray dark:bg-background-darkGray p-6 rounded-md">
                  <h3 className="text-xl font-semibold mb-4 font-heading text-heading dark:text-heading-dark">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaUser className="text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="text-sm text-gray-500 dark:text-gray-400">Client</h4>
                        <p className="font-medium text-body dark:text-body-dark">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCalendarAlt className="text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="text-sm text-gray-500 dark:text-gray-400">Date</h4>
                        <p className="font-medium text-body dark:text-body-dark">{project.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaTags className="text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="text-sm text-gray-500 dark:text-gray-400">Technologies</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-white dark:bg-background-dark text-primary text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {(project.website || project.link !== '#') && (
                      <div className="flex items-start">
                        <FaLink className="text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="text-sm text-gray-500 dark:text-gray-400">Project Link</h4>
                          <a 
                            href={project.website || project.link} 
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="text-primary hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-primary text-white p-6 rounded-md">
                  <h3 className="text-xl font-semibold mb-4">Need a similar project?</h3>
                  <p className="mb-4">If you're interested in a similar project, I'd be happy to discuss your needs.</p>
                  <Link 
                    href="/contact"
                    className="inline-block px-4 py-2 bg-white text-primary font-medium hover:bg-gray-100 transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 font-heading text-heading dark:text-heading-dark">Other Projects You Might Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {portfolioProjects
              .filter(p => p.id !== projectId)
              .slice(0, 3)
              .map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white dark:bg-background-dark shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-0 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={p.thumbnail} 
                        alt={p.title} 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        fill
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2">
                      <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider">{p.category}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-heading text-heading dark:text-heading-dark">{p.title}</h3>
                    <p className="text-body dark:text-body-dark mb-4 text-sm line-clamp-2">
                      {p.description}
                    </p>
                    <Link 
                      href={`/works/${p.id}`}
                      className="text-primary hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Dữ liệu bài viết blog
const blogs = [
  {
    id: 1,
    title: 'By spite about do of do allow blush',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog1.jpg',
    category: 'Design'
  },
  {
    id: 2,
    title: 'Two Before Arrow Not Relied',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog2.jpg',
    category: 'Branding'
  },
  {
    id: 3,
    title: 'By spite about do of do allow blush',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog3.jpg',
    category: 'Photography'
  },
  {
    id: 4,
    title: 'Unwilling Sportsmen He In Questions',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog4.jpg',
    category: 'Development'
  },
  {
    id: 5,
    title: 'Bringing Unlocked Me An Striking',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog5.jpg',
    category: 'UI/UX'
  },
  {
    id: 6,
    title: 'Far Quitting Dwelling Graceful The',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog6.jpg',
    category: 'Mockups'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto ">
        {/* Page header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">
            Latest Blog
          </h1>
          <p className="text-lg text-body dark:text-body-dark max-w-2xl">
            My thoughts, ideas, and perspectives on design, development, and creative process.
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-background-light dark:bg-background-dark shadow-sm">
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-body-dark">Image Placeholder</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{blog.category}</div>
                <h3 className="text-xl font-bold mb-3 font-heading text-heading dark:text-heading-dark">
                  <Link href={`/blog/${blog.id}`} className="hover:text-primary transition-colors">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-body dark:text-body-dark mb-4">
                  {blog.excerpt}
                </p>
                <div className="text-sm text-body dark:text-body-dark flex items-center justify-between">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <span className="w-10 h-10 flex items-center justify-center border border-primary text-heading dark:text-heading-dark">
              1
            </span>
            <span className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-body dark:text-body-dark hover:border-primary hover:text-heading dark:hover:text-heading-dark transition-colors">
              2
            </span>
            <span className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-body dark:text-body-dark hover:border-primary hover:text-heading dark:hover:text-heading-dark transition-colors">
              3
            </span>
            <span className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-body dark:text-body-dark hover:border-primary hover:text-heading dark:hover:text-heading-dark transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 
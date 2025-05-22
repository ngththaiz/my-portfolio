'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/what-i-do', label: 'What I Do' },
  { path: '/works', label: 'Works' },
  // { path: '/#blog-section', label: 'Blog' },
  { path: '/contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Theo dõi scroll để thay đổi style của navbar
  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setIsScrolled(true);
        return;
      }
      
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'}
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className={`text-2xl sm:text-3xl font-bold z-20 transition-colors duration-300 ${
            isScrolled ? 'text-heading dark:text-heading-dark' : 'text-white'
          }`}>
            Blue.
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-heading dark:text-heading-dark' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className={`text-sm transition-colors duration-300 uppercase tracking-[0.2em] hover:text-primary ${
                      isScrolled 
                        ? 'text-heading dark:text-heading-dark' 
                        : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden py-4 px-4 ${
            isScrolled 
              ? 'bg-background-light/95 dark:bg-background-dark/95' 
              : 'bg-black/90'
          } backdrop-blur-sm`}
        >
          <ul className="py-2 space-y-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path} 
                  className={`block py-3 text-sm font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-heading dark:text-heading-dark hover:text-primary dark:hover:text-primary' 
                      : 'text-white hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 
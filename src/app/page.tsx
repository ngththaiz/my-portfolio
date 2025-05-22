'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown, 
  FaPaintBrush, 
  FaDesktop,
  FaMobileAlt,
  FaCode,
  FaBrain,
  FaDatabase
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

// Services Data
const services = [
  {
    icon: <FaCode className="text-primary text-4xl" />,
    title: 'Full Stack Development',
    description: 'I build scalable and efficient web applications using the latest technologies and best practices.'
  },
  {
    icon: <FaBrain className="text-primary text-4xl" />,
    title: 'AI-assisted Development',
    description: 'I integrate AI-assisted tools into my daily workflow, using LLMs not only for coding support but also to enhance design thinking, improve documentation, and explore scalable software solutions.'
  },
  {
    icon: <FaDatabase className="text-primary text-4xl" />,
    title: 'Database Design',
    description: 'I design and implement efficient database structures to support scalable and high-performance applications.'
  },
  {
    icon: <FaPaintBrush className="text-primary text-4xl" />,
    title: 'UI/UX Design',
    description: 'I create intuitive and user-friendly interfaces that enhance user experience and engagement.'
  },
  {
    icon: <FaDesktop className="text-primary text-4xl" />,
    title: 'Web Design',
    description: 'I design and implement efficient web applications using the latest technologies and best practices.'
  },
  {
    icon: <FaMobileAlt className="text-primary text-4xl" />,
    title: 'Mobile Apps',
    description: 'I develop mobile applications, ensuring seamless integration with web applications.'
  }
];

// Portfolio Categories
const portfolioCategories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Apps' },
  { id: 'ai', name: 'AI Projects' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'enterprise', name: 'Enterprise' },
];

// Portfolio Items
const portfolioItems = [
  {
    id: 1,
    title: 'AI Journey',
    category: 'ai',
    description: 'A community hub for AI tools discovery and insights',
    technologies: 'React.js, Next.js, Tailwind CSS',
    website: 'https://aijourney.so/',
    image: '/images/works/ai_journey.jpeg'
  },
  {
    id: 2,
    title: 'Road 2 AI',
    category: 'ai',
    description: 'Static documentation site sharing AI articles and resources',
    technologies: 'Docusaurus, JavaScript',
    website: 'https://road2.ai/',
    image: '/images/works/road2ai.jpg'
  },
  {
    id: 3,
    title: 'HMM Microservices Platform',
    category: 'enterprise',
    description: 'Scalable microservices architecture for internal project',
    technologies: 'Vue 3, Tailwind CSS, Spring Boot, PostgreSQL',
    website: 'https://www.hmm21.com/',
    image: '/images/works/hmm_microservices.jpg'
  },
  {
    id: 4,
    title: 'ERP System',
    category: 'enterprise',
    description: 'Enterprise resource planning system with multiple features',
    technologies: 'Vue 2, Element UI, Node.js, MariaDB',
    image: '/images/works/erp_system.png'
  },
  {
    id: 5,
    title: 'E-commerce B2B/B2C',
    category: 'web',
    description: 'Industry domain e-commerce platform',
    technologies: 'Vue 2, Node.js, MongoDB',
    image: '/images/works/ecommerce.jpg'
  },
  {
    id: 6,
    title: 'Mobile Ordering App',
    category: 'mobile',
    description: 'Products ordering app with promotions and cart features',
    technologies: 'Flutter, Dart, Node.js',
    image: '/images/works/mobile_app.png'
  },
  {
    id: 7,
    title: 'Gas South Supply Chain',
    category: 'web',
    description: 'System for LPG, CNG, and LNG distribution management',
    technologies: 'React.js, Next.js, Node.js, MongoDB',
    image: '/images/works/gas_south.png'
  },
  {
    id: 8,
    title: 'Industry News Network',
    category: 'web',
    description: 'Social network for industry community news sharing',
    technologies: 'React.js, Next.js, Node.js',
    image: '/images/works/industry_news.png'
  }
];

// Blog Items
const blogItems = [
  {
    id: 1,
    title: 'By spite about do of do allow blush',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog1.png'
  },
  {
    id: 2,
    title: 'Two Before Arrow Not Relied',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog2.png'
  },
  {
    id: 3,
    title: 'By spite about do of do allow blush',
    excerpt: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.',
    author: 'Larry Stark',
    date: '7 September 2016',
    image: '/images/blog/blog3.png'
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  // Form states
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const filteredProjects = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mwpojorp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/images/hero/slide-bg-1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="centrize full-width h-full px-4 sm:px-6">
          <div className="vertical-center text-center">
            <div className="st-title max-w-3xl mx-auto">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI-assisted Development',
                  2000,
                  'Database Design',
                  2000,
                  'UI/UX Design',
                  2000,
                  'Web Design',
                  2000,
                  'Mobile Apps',
                  2000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-technology font-bold text-white drop-shadow-lg"
              />
            </div>
          </div>
        </div>
        <a 
          href="#about-section" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <FaChevronDown className="animate-bounce text-xl sm:text-2xl" />
        </a>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading text-heading dark:text-heading-dark"
            >
              I&apos;m Thai Nguyen Thanh, <br />
              Software Engineer <br />
              from Ho Chi Minh City, Vietnam.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-body dark:text-body-dark mb-10 max-w-3xl leading-relaxed"
            >
              A dynamic and disciplined software engineer with a youthful, creative mindset and strong technical expertise in both frontend and backend development.
              Experienced in designing enterprise workflows, building scalable web and mobile applications, and collaborating in agile teams.
              Passionate about learning emerging technologies and delivering clean, efficient code to support business growth and innovation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/NguyenThanhThai-MiddleSoftwareEngineer-CV.pdf"
                download
                className="inline-block py-3 bg-primary text-heading text-sm uppercase tracking-widest font-medium hover:bg-primary-dark transition-colors px-4"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services-section" className="py-16 sm:py-20 bg-background-gray dark:bg-background-darkGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-heading-dark">
              What I Do
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8"
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-background-dark flex items-center justify-center mb-4 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 font-heading text-heading dark:text-heading-dark">{service.title}</h3>
                </div>
                <p className="text-body dark:text-body-dark text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="works-section" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-heading-dark">
              Recent Works
            </h2>
          </motion.div>
          
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
                    checked={activeCategory === category.id}
                    onChange={() => setActiveCategory(category.id)}
                  />
                  <label 
                    htmlFor={`filter_${category.id}`}
                    className={`text-sm font-medium cursor-pointer transition-colors ${
                      activeCategory === category.id 
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white dark:bg-background-dark shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider">{item.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 font-heading text-heading dark:text-heading-dark">{item.title}</h3>
                  {item.description && (
                    <p className="text-body dark:text-body-dark mb-3 text-sm">{item.description}</p>
                  )}
                  {item.technologies && (
                    <div className="mb-4">
                      <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Technologies:</span>
                      <p className="text-sm text-body dark:text-body-dark">{item.technologies}</p>
                    </div>
                  )}
                  {item.website && (
                    <a 
                      href={item.website} 
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      {/* <section id="blog-section" className="py-16 sm:py-20 bg-background-gray dark:bg-background-darkGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-heading-dark">
              Latest Blog Posts
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogItems.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background-light dark:bg-background-dark group h-full"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center text-sm text-body dark:text-body-dark mb-3">
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.author}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 font-heading text-heading dark:text-heading-dark">
                    <a href="#" className="hover:text-primary transition-colors">
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-body dark:text-body-dark mb-4">
                    {item.excerpt}
                  </p>
                  <a href="#" className="text-sm font-medium text-primary hover:underline">
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Contact Section */}
      <section id="contact-section" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-heading-dark">
              Get In Touch
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-800 rounded-md">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-heading dark:text-heading-dark mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-background-gray dark:bg-background-darkGray border-0 focus:ring-2 focus:ring-primary text-heading dark:text-heading-dark"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-heading dark:text-heading-dark mb-1">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-background-gray dark:bg-background-darkGray border-0 focus:ring-2 focus:ring-primary text-heading dark:text-heading-dark"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-heading dark:text-heading-dark mb-1">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 bg-background-gray dark:bg-background-darkGray border-0 focus:ring-2 focus:ring-primary text-heading dark:text-heading-dark"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="btn-primary disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 md:pl-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">
                  Contact Information
                </h3>
                <p className="text-body dark:text-body-dark mb-6">
                  I'm always looking for new challenges and opportunities to grow. If you have a project in mind, don't hesitate to get in touch.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-body dark:text-body-dark">Ho Chi Minh City, Vietnam</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    <span className="text-body dark:text-body-dark">+84 965090651</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <span className="text-body dark:text-body-dark">thanhcrthai@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/ngth.thaiz/" target="_blank" className="text-heading dark:text-heading-dark hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/_blue.ntt/" target="_blank" className="text-heading dark:text-heading-dark hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  {/* <a href="#" className="text-heading dark:text-heading-dark hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-heading dark:text-heading-dark hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

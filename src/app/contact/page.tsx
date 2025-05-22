'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-primary" size={24} />,
    title: 'Address',
    content: 'Ho Chi Minh City, Vietnam'
  },
  {
    icon: <FaPhone className="text-primary" size={24} />,
    title: 'Phone',
    content: '+84 965090651'
  },
  {
    icon: <FaEnvelope className="text-primary" size={24} />,
    title: 'Email',
    content: 'thanhcrthai@gmail.com'
  }
];

export default function Contact() {
  // Form states
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
    <div className="min-h-screen py-32">
      <div className="container mx-auto ">
        {/* Page header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">
            Get In Touch
          </h1>
          <p className="text-lg text-body dark:text-body-dark max-w-2xl">
            I'm always looking for new challenges and opportunities to grow. If you have a project in mind, don't hesitate to get in touch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="col-span-1">
            <div className="space-y-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading text-heading dark:text-heading-dark">
                      {info.title}
                    </h3>
                    <p className="text-body dark:text-body-dark">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-span-1 md:col-span-2">
            {formStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-800 rounded-md mb-6">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-800 rounded-md mb-6">
                There was an error sending your message. Please try again later.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name *" 
                  className="p-3 bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone *" 
                  className="p-3 bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email *" 
                  className="p-3 bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject *" 
                  className="p-3 bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <textarea 
                name="message" 
                placeholder="Message" 
                className="w-full p-3 bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 mb-6 focus:ring-2 focus:ring-primary" 
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button 
                type="submit"
                className="inline-block bg-primary text-heading py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary-dark transition-colors px-4 disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
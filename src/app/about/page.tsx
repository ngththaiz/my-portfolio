'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

// Dữ liệu giả lập
const aboutData = {
  name: "Nguyen Thanh Thai",
  position: "Software Engineer",
  location: "Ho Chi Minh City, Vietnam",
  bio: "I'm a passionate Software Engineer with a focus on creating elegant, functional, and user-centered digital experiences.",
  description: "A dynamic and disciplined software engineer with a youthful, creative mindset and strong technical expertise in both frontend and backend development. Experienced in designing enterprise workflows, building scalable web and mobile applications, and collaborating in agile teams. Passionate about learning emerging technologies and delivering clean, efficient code to support business growth and innovation.",
  yearsExperience: 4,
  companiesWorked: 3,
  happyClients: 250,
  awardsWon: 20,
  skills: [
    { name: "HTML5 & CSS3", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "WordPress", percentage: 80 },
    { name: "Photoshop", percentage: 85 },
    { name: "Illustrator", percentage: 75 }
  ]
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Me Section */}
      <section className="py-32 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto ">
          {/* Page header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-heading dark:text-heading-dark">
              About Me
            </h1>
            <p className="text-lg text-body dark:text-body-dark max-w-2xl">
              {aboutData.bio}
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Profile Image */}
            <div className="bg-gray-200 dark:bg-gray-700 h-[500px] flex items-center justify-center">
              <Image 
                src="/images/profile.jpg" 
                alt="Profile" 
                width={500} 
                height={500} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* About Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading text-heading dark:text-heading-dark">
                {aboutData.name}
              </h2>
              
              <h3 className="text-xl mb-6 font-heading text-primary">
                {aboutData.position}
              </h3>
              
              <p className="text-body dark:text-body-dark mb-10">
                {aboutData.description}
              </p>
              
              <a 
                href="/NguyenThanhThai-MiddleSoftwareEngineer-CV.pdf"
                download
                className="inline-block py-3 bg-primary text-heading text-sm uppercase tracking-widest font-medium hover:bg-primary-dark transition-colors px-4"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      
     
      
      {/* Experience Counter Section */}
      {/* <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <span className="block text-5xl font-bold mb-2 text-primary">{aboutData.yearsExperience}+</span>
              <span className="text-lg text-heading dark:text-heading-dark font-heading">Years Experience</span>
            </div>
            
            <div className="text-center p-8">
              <span className="block text-5xl font-bold mb-2 text-primary">{aboutData.companiesWorked}</span>
              <span className="text-lg text-heading dark:text-heading-dark font-heading">Companies Worked</span>
            </div>
            
            <div className="text-center p-8">
              <span className="block text-5xl font-bold mb-2 text-primary">{aboutData.happyClients}</span>
              <span className="text-lg text-heading dark:text-heading-dark font-heading">Happy Clients</span>
            </div>
            
            <div className="text-center p-8">
              <span className="block text-5xl font-bold mb-2 text-primary">{aboutData.awardsWon}</span>
              <span className="text-lg text-heading dark:text-heading-dark font-heading">Awards Won</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
} 
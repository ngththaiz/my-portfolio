import React from 'react';
import Section from '@/components/Section';
import TimelineItem from '@/components/TimelineItem';
import { experiences } from '@/data/experiences';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Section
        title="Work Experience"
        subtitle="My career journey and positions I've held"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0 mt-8">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                title={experience.position}
                subtitle={experience.company}
                period={experience.period}
                description={experience.description}
                technologies={experience.technologies}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
          
          <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Experience Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With over 4 years of experience in software development, I have participated in various projects ranging from web applications, 
              ERP systems, e-commerce to mobile applications. These experiences have helped me develop comprehensive skills 
              in both frontend and backend, as well as the ability to work effectively in modern software development environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Applied Skills:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Developing user interfaces with modern frameworks</li>
                  <li>Building RESTful APIs and microservices</li>
                  <li>Designing and optimizing databases</li>
                  <li>Applying Agile/Scrum development methodologies</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Successfully developed and deployed multiple projects for businesses</li>
                  <li>Optimized application performance and user experience</li>
                  <li>Contributed to building sustainable software architecture</li>
                  <li>Mentored and supported other team members</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
} 
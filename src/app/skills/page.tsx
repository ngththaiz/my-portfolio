import React from 'react';
import Section from '@/components/Section';
import { skills } from '@/data/skills';
import Card from '@/components/Card';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

// Dynamic icon component
const DynamicIcon = ({ icon, className }: { icon: string; className?: string }) => {
  // Function to get the icon component dynamically
  const getIconComponent = (iconName: string): IconType | null => {
    const prefix = iconName.substring(0, 2);
    
    switch (prefix) {
      case 'Fa':
        return (FaIcons as Record<string, IconType>)[iconName];
      case 'Si':
        return (SiIcons as Record<string, IconType>)[iconName];
      case 'Md':
        return (MdIcons as Record<string, IconType>)[iconName];
      case 'Tb':
        return (TbIcons as Record<string, IconType>)[iconName];
      default:
        return null;
    }
  };
  
  const IconComponent = getIconComponent(icon);
  
  if (!IconComponent) {
    return <span className={className}>⚙️</span>;
  }
  
  return <IconComponent className={className} />;
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Section
        title="Skills & Technologies"
        subtitle="The technologies and skills I have learned and worked with"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="space-y-12">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 font-heading">
                {skillCategory.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="h-full">
                    <div className="flex items-start">
                      <div className="mr-4 text-blue-600 dark:text-blue-400 text-2xl">
                        <DynamicIcon icon={skill.icon} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 font-heading">{skill.name}</h3>
                        
                        <div className="mb-2">
                          <div className="skill-bar">
                            <div 
                              className={cn(
                                "skill-progress",
                                skill.level >= 90 ? 'bg-green-500' : 
                                skill.level >= 80 ? 'bg-blue-500' : 
                                skill.level >= 70 ? 'bg-yellow-500' : 'bg-orange-500'
                              )}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level >= 90 ? 'Expert' : 
                           skill.level >= 80 ? 'Advanced' : 
                           skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
} 
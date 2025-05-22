import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string[] | string;
  technologies?: string[];
  isLast?: boolean;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  technologies,
  isLast = false,
  className = '',
}) => {
  return (
    <div className={cn('relative pl-8 md:pl-10', !isLast && 'pb-10', className)}>
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 dark:border-gray-800 z-10" />
      
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1.5 top-5 bottom-0 w-1 bg-gray-200 dark:bg-gray-700" />
      )}
      
      <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">{subtitle}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{period}</p>
          
          {Array.isArray(description) ? (
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          )}
          
          {technologies && technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className=" py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem; 
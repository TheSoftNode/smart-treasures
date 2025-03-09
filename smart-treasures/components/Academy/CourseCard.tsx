"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: React.ElementType;
    iconColor: string;
    bgColor: string;
    darkBgColor: string;
    duration?: string;
    color?: string;
  };
  onApplyClick: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onApplyClick }) => {
  // Color mapping for course cards
  const colorMap: { [key: string]: any } = {
    yellow: {
      light: 'bg-yellow-100',
      dark: 'dark:bg-yellow-900/30',
      icon: 'text-yellow-500',
      badge: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
    },
    teal: {
      light: 'bg-teal-100',
      dark: 'dark:bg-teal-900/30',
      icon: 'text-teal-500',
      badge: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
    },
    blue: {
      light: 'bg-blue-100',
      dark: 'dark:bg-blue-900/30',
      icon: 'text-blue-500',
      badge: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    pink: {
      light: 'bg-pink-100',
      dark: 'dark:bg-pink-900/30',
      icon: 'text-pink-500',
      badge: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400',
    },
    purple: {
      light: 'bg-purple-100',
      dark: 'dark:bg-purple-900/30',
      icon: 'text-purple-500',
      badge: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    },
    emerald: {
      light: 'bg-emerald-100',
      dark: 'dark:bg-emerald-900/30',
      icon: 'text-emerald-500',
      badge: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    },
    indigo: {
      light: 'bg-indigo-100',
      dark: 'dark:bg-indigo-900/30',
      icon: 'text-indigo-500',
      badge: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
    },
  };

  // Get color scheme based on course color or default to teal
  const colorScheme = course.color ? colorMap[course.color] : colorMap.teal;
  
  // Icons we can use
  const Icon = course.icon;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <div className={`w-12 h-12 rounded-lg ${course.bgColor} ${course.darkBgColor} flex items-center justify-center mb-4`}>
            <Icon className={`h-6 w-6 ${course.iconColor}`} />
          </div>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-2 mb-4">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
          
          {course.duration && (
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-4">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            onClick={() => onApplyClick(course.id)} 
            className="w-full group bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
          >
            Apply for this Course
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
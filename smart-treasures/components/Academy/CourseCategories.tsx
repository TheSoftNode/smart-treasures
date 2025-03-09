"use client"

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Code, Database, LineChart, Monitor, Cpu, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CourseCard from './CourseCard';

interface CourseCategoriesProps {
  onCourseApplyClick: (courseId: string) => void;
}

type TabType = 'software' | 'data' | 'backend' | 'graphics' | 'web3';

const CourseCategories: React.FC<CourseCategoriesProps> = ({ onCourseApplyClick }) => {
  const [activeTab, setActiveTab] = useState<TabType>('software');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Course category data
  const categories = [
    { 
      id: 'software' as TabType, 
      label: 'Software Engineering', 
      icon: Code, 
      iconColor: 'text-yellow-500',
      description: 'Master both frontend and backend development with our comprehensive software engineering track.',
    },
    { 
      id: 'data' as TabType, 
      label: 'Data Science', 
      icon: LineChart, 
      iconColor: 'text-pink-500',
      description: 'Learn to analyze data, build models, and derive insights with our data science curriculum.',
    },
    { 
      id: 'backend' as TabType, 
      label: 'Backend Development', 
      icon: Database, 
      iconColor: 'text-teal-500',
      description: 'Focus on server-side technologies, databases, and API development.',
    },
    { 
      id: 'graphics' as TabType, 
      label: 'Graphics & Animation', 
      icon: Monitor, 
      iconColor: 'text-purple-500',
      description: 'Create stunning visual content with our graphics and animation track.',
    },
    { 
      id: 'web3' as TabType, 
      label: 'Web3 Development', 
      icon: Cpu, 
      iconColor: 'text-blue-500',
      description: 'Dive into blockchain technology and decentralized application development.',
    },
  ];

  // Course data for each category
  const courseData = {
    software: [
      {
        id: 'frontend',
        title: 'Frontend Development',
        description: 'Master modern frameworks like React and Next.js to build responsive and interactive user interfaces.',
        features: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Responsive Design'],
        duration: '11 months',
        icon: Code,
        iconColor: 'text-yellow-500',
        bgColor: 'bg-yellow-100',
        darkBgColor: 'dark:bg-yellow-900/30',
        color: 'yellow',
      },
      {
        id: 'fullstack',
        title: 'Full Stack Development',
        description: 'Become proficient in both frontend and backend technologies to build complete web applications.',
        features: ['JavaScript', 'Node.js', 'Express', 'React', 'MongoDB', 'SQL'],
        duration: '11 months',
        icon: Code,
        iconColor: 'text-teal-500',
        bgColor: 'bg-teal-100',
        darkBgColor: 'dark:bg-teal-900/30',
        color: 'teal',
      },
      {
        id: 'foundation',
        title: 'Programming Foundations',
        description: 'Build a strong foundation in computer science principles and low-level programming.',
        features: ['C Programming', 'Algorithms', 'Data Structures', 'UNIX', 'Git'],
        duration: '11 months',
        icon: Code,
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-100',
        darkBgColor: 'dark:bg-blue-900/30',
        color: 'blue',
      },
    ],
    data: [
      {
        id: 'data-analysis',
        title: 'Data Analysis',
        description: 'Learn to collect, process, and analyze data to derive actionable insights.',
        features: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Visualization'],
        duration: '11 months',
        icon: LineChart,
        iconColor: 'text-pink-500',
        bgColor: 'bg-pink-100',
        darkBgColor: 'dark:bg-pink-900/30',
        color: 'pink',
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description: 'Master algorithms and techniques for building predictive models and AI applications.',
        features: ['Python', 'TensorFlow', 'Scikit-Learn', 'Statistics', 'Deep Learning'],
        duration: '11 months',
        icon: LineChart,
        iconColor: 'text-purple-500',
        bgColor: 'bg-purple-100',
        darkBgColor: 'dark:bg-purple-900/30',
        color: 'purple',
      },
    ],
    backend: [
      {
        id: 'api-development',
        title: 'API Development',
        description: 'Learn to design, build, and deploy robust APIs and microservices.',
        features: ['Node.js', 'Express', 'Flask', 'Django', 'Database Design'],
        duration: '11 months',
        icon: Database,
        iconColor: 'text-teal-500',
        bgColor: 'bg-teal-100',
        darkBgColor: 'dark:bg-teal-900/30',
        color: 'teal',
      },
      {
        id: 'database-engineering',
        title: 'Database Engineering',
        description: 'Master both SQL and NoSQL database technologies and optimization techniques.',
        features: ['SQL', 'MongoDB', 'Redis', 'PostgreSQL', 'Database Optimization'],
        duration: '11 months',
        icon: Database,
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-100',
        darkBgColor: 'dark:bg-blue-900/30',
        color: 'blue',
      },
    ],
    graphics: [
      {
        id: '3d-modeling',
        title: '3D Modeling & Animation',
        description: 'Create stunning 3D models and animations for games, films, and interactive media.',
        features: ['Blender', 'Three.js', 'WebGL', 'Animation Principles', 'Texturing'],
        duration: '11 months',
        icon: Monitor,
        iconColor: 'text-purple-500',
        bgColor: 'bg-purple-100',
        darkBgColor: 'dark:bg-purple-900/30',
        color: 'purple',
      },
      {
        id: 'ui-design',
        title: 'UI/UX Design',
        description: 'Learn to design intuitive and beautiful user interfaces and experiences.',
        features: ['Figma', 'UI Principles', 'User Research', 'Prototyping', 'Design Systems'],
        duration: '11 months',
        icon: Monitor,
        iconColor: 'text-indigo-500',
        bgColor: 'bg-indigo-100',
        darkBgColor: 'dark:bg-indigo-900/30',
        color: 'indigo',
      },
    ],
    web3: [
      {
        id: 'blockchain-dev',
        title: 'Blockchain Development',
        description: 'Master the fundamentals of blockchain technology and decentralized application development.',
        features: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DApp Architecture'],
        duration: '11 months',
        icon: Cpu,
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-100',
        darkBgColor: 'dark:bg-blue-900/30',
        color: 'blue',
      },
      {
        id: 'crypto-economics',
        title: 'Crypto Economics',
        description: 'Understand the economic principles behind cryptocurrencies and token design.',
        features: ['Tokenomics', 'Game Theory', 'Mechanism Design', 'Protocol Analysis'],
        duration: '11 months',
        icon: Cpu,
        iconColor: 'text-emerald-500',
        bgColor: 'bg-emerald-100',
        darkBgColor: 'dark:bg-emerald-900/30',
        color: 'emerald',
      },
    ],
  };

  return (
    <section id="courses" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Learning Tracks</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Choose from our expert-crafted learning paths designed to build practical skills in your area of interest
            </p>
          </motion.div>

          <Tabs 
            defaultValue="software" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value as TabType)}
          >
            <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5 gap-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center text-sm"
                >
                  <category.icon className={`h-4 w-4 ${category.iconColor} mr-2`} />
                  <span className="hidden md:inline">{category.label}</span>
                  <span className="md:hidden">{category.label.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Selected Category Description */}
            <motion.div
              key={activeTab + "-description"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-10"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                {categories.find(c => c.id === activeTab)?.description}
              </p>
            </motion.div>

            {/* Tab Content Areas */}
            {categories.map((category) => (
              <TabsContent 
                key={category.id} 
                value={category.id}
                className="mt-0"
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {courseData[category.id].map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onApplyClick={onCourseApplyClick}
                    />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* View All Link */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => onCourseApplyClick('all')}
              className="group"
            >
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCategories;
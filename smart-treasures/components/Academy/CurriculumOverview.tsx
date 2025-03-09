"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Code, Database, GraduationCap, Terminal, GitBranch, Zap } from 'lucide-react';
import
  {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

interface CurriculumMonth
{
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  topics: string[];
  icon: React.ElementType;
  color: string;
}

const CurriculumOverview: React.FC = () =>
{
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Curriculum months data
  const curriculumData: CurriculumMonth[] = [
    {
      id: 'month-0',
      title: 'Month 0: Foundations',
      description: 'Build the mindset and core skills needed for a successful tech career',
      topics: [
        'Grit and Growth Mindset',
        'Mental Health in Tech',
        'Networking Skills',
        'Algorithms & Pseudocode',
        'Computer Basics',
        'Shell Navigation',
        'Vim Editor',
        'Git Version Control'
      ],
      icon: GraduationCap,
      color: 'text-teal-500',
    },
    {
      id: 'month-1-2',
      title: 'Month 1-2: C Programming',
      subtitle: 'Building a Strong Foundation in Low-Level Programming',
      description: 'Master the fundamentals of programming with the C language',
      topics: [
        'C Language Basics',
        'Data Types & Variables',
        'Control Flow',
        'Functions',
        'Arrays & Strings',
        'Pointers & Memory Management',
        'Structures & Unions',
        'File Handling'
      ],
      icon: Terminal,
      color: 'text-blue-500',
    },
    {
      id: 'month-3-4',
      title: 'Month 3-4: Python, HTML & CSS',
      subtitle: 'Mastering High-Level Programming',
      description: 'Learn versatile languages for web development, scripting, and more',
      topics: [
        'Python Basics',
        'Object-Oriented Programming',
        'HTML Fundamentals',
        'CSS and Responsive Design',
        'Web Layouts',
        'Python Data Structures',
        'Mini Projects'
      ],
      icon: Code,
      color: 'text-yellow-500',
    },
    {
      id: 'month-5',
      title: 'Month 5: Regular Expressions, Networking & SQL',
      description: 'Expand your skills with essential tools for data and networking',
      topics: [
        'Regular Expression Syntax',
        'Network Fundamentals',
        'IP Addressing',
        'Network Protocols',
        'SQL Basics',
        'Database Queries',
        'SQL Data Management'
      ],
      icon: Database,
      color: 'text-pink-500',
    },
    {
      id: 'month-6-7',
      title: 'Month 6-7: Advanced Systems & APIs',
      description: 'Dive deeper into complex technical systems and integrations',
      topics: [
        'JavaScript Essentials',
        'Configuration Management',
        'Python Networking',
        'Load Balancing',
        'Web Systems Deep Dive',
        'REST APIs',
        'Network Monitoring'
      ],
      icon: GitBranch,
      color: 'text-purple-500',
    },
    {
      id: 'month-8-12',
      title: 'Month 8-12: Specialization & Capstone',
      description: 'Choose your specialization path and complete your final project',
      topics: [
        'Frontend Development',
        'Backend Development',
        'Data Science',
        'Graphics & Animation',
        'Web3 Development',
        'Deployment & Performance',
        'Capstone Project'
      ],
      icon: Zap,
      color: 'text-emerald-500',
    },
  ];

  return (
    <section id="curriculum" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Curriculum Overview</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Our comprehensive 11-month program is designed to build your skills from foundations to advanced expertise
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-6">
              {curriculumData.map((month, index) => (
                <AccordionItem
                  key={month.id}
                  value={month.id}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-900/50 px-0"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center text-left">
                      <div className={`w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mr-4 ${month.color}`}>
                        <month.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{month.title}</h3>
                        {month.subtitle && (
                          <p className="text-sm text-slate-500 dark:text-slate-400">{month.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14 space-y-4">
                      <p className="text-slate-700 dark:text-slate-300">{month.description}</p>

                      <div className="mt-4">
                        <h4 className="text-md font-medium mb-2">Key Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {month.topics.map((topic, topicIndex) => (
                            <Badge
                              key={topicIndex}
                              variant="secondary"
                              className="text-sm py-1 px-3 bg-white dark:bg-slate-800"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumOverview;
"use client"

import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, BookOpen, Users, Clock } from 'lucide-react';

interface Highlight {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ProgramHighlights: React.FC = () => {
  // Program highlights data
  const highlights: Highlight[] = [
    {
      icon: GraduationCap,
      title: '11-Month Curriculum',
      description: 'From foundations to specialization, our curriculum covers essential tech skills'
    },
    {
      icon: CheckCircle2,
      title: 'Practical Projects',
      description: '90% of your grade comes from hands-on projects reflecting real-world challenges'
    },
    {
      icon: BookOpen,
      title: 'Industry Relevance',
      description: 'Our curriculum is regularly updated to align with current industry demands'
    },
    {
      icon: Users,
      title: 'Peer Learning',
      description: 'Weekly collaborative sessions to strengthen understanding and build networks'
    },
    {
      icon: Clock,
      title: 'Expert Mentorship',
      description: 'Access to experienced mentors throughout your learning journey'
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Highlights</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              What makes ST TECH ACADEMY the right choice for your tech career?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-500">
                  <highlight.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
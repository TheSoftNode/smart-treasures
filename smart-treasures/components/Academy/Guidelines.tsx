"use client"

import { JSX, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, AlertTriangle, Users, CalendarClock, Award, BookOpen } from 'lucide-react';

interface GuidelineSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: JSX.Element;
}

const Guidelines: React.FC = () => {
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

  // Guidelines sections data
  const guidlineSections: GuidelineSection[] = [
    {
      id: 'academic-integrity',
      title: 'Academic Integrity',
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            ST TECH ACADEMY upholds the highest standards of honesty and professionalism. Any form of academic dishonesty, including plagiarism and cheating, is strictly prohibited.
          </p>
          <div className="pl-4 border-l-2 border-teal-500">
            <h4 className="font-medium mb-2">Plagiarism Policy</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Plagiarism is the act of presenting someone else's work as your own. This includes:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1 ml-2">
              <li>Copying code, projects, or written content without proper attribution.</li>
              <li>Submitting assignments done by another student, AI, or external sources.</li>
              <li>Using unauthorized materials during assessments.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">Consequences for Plagiarism:</p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1 ml-2">
              <li>First offense: Warning and mandatory resubmission with a penalty.</li>
              <li>Second offense: Automatic failure for the assignment and academic probation.</li>
              <li>Third offense: Expulsion from ST TECH ACADEMY.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'grading',
      title: 'Grading and Performance Standards',
      icon: CheckCircle2,
      content: (
        <div className="space-y-4">
          <div>
            <span className="font-medium">Peer Learning Days:</span>
            <p className="text-slate-600 dark:text-slate-400">
              Every Friday at 5 PM UK Time, ST TECH ACADEMY will host peer learning sessions to encourage collaboration and knowledge sharing among students.
            </p>
          </div>
          
          <div>
            <span className="font-medium">Grading Breakdown:</span>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm mt-1 ml-2">
              <li>Projects: 90%</li>
              <li>Quizzes & Exams: 10%</li>
            </ul>
          </div>
          
          <div>
            <span className="font-medium">Failure to meet 70%:</span>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm mt-1 ml-2">
              <li>Below 70%: Probation and personalized improvement plan.</li>
              <li>Below 70% three times: Possible dismissal from the academy.</li>
            </ul>
          </div>
          
          <div>
            <span className="font-medium">Quarterly Assessment:</span>
            <p className="text-slate-600 dark:text-slate-400">
              Every three months, students must take a Quarterly Assessment to evaluate their progress. This assessment determines whether they qualify to move to the next level.
            </p>
          </div>
          
          <div>
            <span className="font-medium">Final Project:</span>
            <p className="text-slate-600 dark:text-slate-400">
              At the end of nine months, all students will be required to complete a Final Project. This project can be completed as a group or individually. Failure to complete the project will result in probation.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'conduct',
      title: 'Code of Conduct',
      icon: Users,
      content: (
        <div className="space-y-2">
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 ml-2">
            <li>Respect all instructors, peers, and academy staff.</li>
            <li>Maintain a professional attitude in discussions and collaborations.</li>
            <li>Adhere to deadlines and submit assignments on time.</li>
            <li>Communicate respectfully in all channels, including Slack, Discord, or email.</li>
            <li>Provide constructive feedback and support to fellow students.</li>
            <li>Academic dishonesty will not be tolerated in any form.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'attendance',
      title: 'Attendance Policy',
      icon: CalendarClock,
      content: (
        <div className="space-y-2">
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 ml-2">
            <li>Students are expected to attend all scheduled classes, workshops, and peer learning sessions.</li>
            <li>A minimum of 80% attendance is required each month.</li>
            <li>Absences must be communicated to instructors in advance when possible.</li>
            <li>Repeated unexcused absences may result in probation or dismissal.</li>
            <li>Students who miss sessions are responsible for catching up on missed material.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'certification',
      title: 'Certification & Graduation',
      icon: Award,
      content: (
        <div className="space-y-2">
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 ml-2">
            <li>Students who successfully complete the program and pass all requirements will receive a Certificate of Completion from ST TECH ACADEMY.</li>
            <li>Certification requires successful completion of all coursework and the capstone project.</li>
            <li>Graduating students will have the opportunity to showcase their projects at a demo day.</li>
            <li>Job placement support is available for graduates, including resume reviews and interview preparation.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="guidelines" className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academy Guidelines</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Our commitment to excellence requires adherence to the following standards
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <Accordion type="single" collapsible className="w-full">
              {guidlineSections.map((section) => (
                <AccordionItem 
                  key={section.id} 
                  value={section.id}
                  className="border-b border-slate-200 dark:border-slate-700 last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center text-left">
                      <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 text-teal-500">
                        <section.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-semibold">{section.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="pl-11">
                      {section.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guidelines;
"use client"

import { JSX } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What are the prerequisites for joining ST TECH ACADEMY?",
      answer: "There are no strict educational prerequisites. We welcome students from diverse backgrounds who have a passion for technology and a strong desire to learn. Basic computer skills and English proficiency are recommended. Our foundation month is designed to bring everyone up to speed with the fundamentals."
    },
    {
      question: "How is the program structured?",
      answer: "The program spans 11 months, with the first month focused on foundations (growth mindset, shell navigation, git, etc.). Months 1-2 cover C programming, followed by Python and web fundamentals in months 3-4. Later months cover advanced topics like databases, APIs, and networking. The final months allow for specialization in your chosen track, culminating in a capstone project."
    },
    {
      question: "What is the time commitment required?",
      answer: "Students should be prepared to dedicate approximately 30-40 hours per week to coursework, projects, and peer learning sessions. Classes are scheduled to accommodate most time zones, and peer learning sessions occur every Friday at 5 PM UK time."
    },
    {
      question: "Is the program fully remote or in-person?",
      answer: "ST TECH ACADEMY is fully remote, allowing students to learn from anywhere with a stable internet connection. We leverage digital collaboration tools to create an engaging virtual learning environment."
    },
    {
      question: "How are students evaluated and graded?",
      answer: (
        <div>
          <p>Evaluation is primarily project-based, with the following breakdown:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Projects: 90% of your grade</li>
            <li>Quizzes & Exams: 10% of your grade</li>
          </ul>
          <p className="mt-2">Quarterly assessments evaluate your progress, and a final capstone project is required to graduate. A minimum of 70% is required to pass each assessment.</p>
        </div>
      )
    },
    {
      question: "What kind of support is provided to students?",
      answer: "Students receive comprehensive support, including regular mentorship sessions, code reviews, and access to teaching assistants. Our peer learning sessions foster a collaborative environment where students help each other grow. We also provide career guidance and job placement support for graduates."
    },
    {
      question: "Can I work while enrolled in the program?",
      answer: "While the program is demanding, some students do manage to work part-time while studying. However, we recommend keeping work commitments to 20 hours or less per week to ensure you can fully engage with the curriculum and project work."
    },
    {
      question: "What certifications will I receive upon completion?",
      answer: "Graduates receive an ST TECH ACADEMY Certificate of Completion that verifies their technical skills and project portfolio. This certification is recognized by our industry partners and can significantly enhance your job prospects in the tech sector."
    },
    {
      question: "What kind of projects will I build during the program?",
      answer: "Throughout the program, you'll build a diverse portfolio of projects, from command-line applications to full-stack web platforms. These projects are designed to solve real-world problems and demonstrate your growing technical abilities. Your capstone project will be a comprehensive application that showcases all your acquired skills."
    },
    {
      question: "Is there job placement assistance after graduation?",
      answer: "Yes, we provide job placement support including resume reviews, interview preparation, and connections to our network of industry partners. Many of our graduates have secured positions at tech companies within months of completing the program."
    },
  ];
  
  return (
    <section id="faq" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Get answers to common questions about ST TECH ACADEMY
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border-b border-slate-200 dark:border-slate-700 last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors font-medium text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-300">
                    {item.answer}
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

export default FAQ;
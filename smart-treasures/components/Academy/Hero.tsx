// File: components/academy/Hero.tsx
"use client"

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, ArrowRight, Code, Database, LineChart, Monitor, Cpu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface HeroProps
{
  onApplyClick: (courseId?: string | null) => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) =>
{
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Course badges data
  const courseBadges = [
    { id: 'software-eng', label: 'Software Engineering', icon: Code, color: 'text-yellow-500' },
    { id: 'data-science', label: 'Data Science', icon: LineChart, color: 'text-pink-500' },
    { id: 'backend', label: 'Backend Development', icon: Database, color: 'text-teal-500' },
    { id: 'graphics', label: 'Graphics & Animation', icon: Monitor, color: 'text-purple-500' },
    { id: 'web3', label: 'Web3 Development', icon: Cpu, color: 'text-blue-500' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 pt-20 pb-14 md:pt-28 md:pb-20"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/3 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, 10, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      {/* Enhanced grid pattern background with subtle animation */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center mb-3 py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full">
            <GraduationCap className="h-4 w-4 text-teal-500 mr-2" />
            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide">Applications Open</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Launch Your Tech Career at <br />
            <motion.span
              className="bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0% center', '100% center', '0% center']
              }}
              transition={{
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity
              }}
            >
              ST TECH ACADEMY
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-7 max-w-3xl mx-auto">
            Our 11-month comprehensive program provides the skills, mentorship, and hands-on experience you need to excel in today's tech industry.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* Link to application page instead of dialog */}
            <Link href="/academy/apply">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
              {
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Courses
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {courseBadges.map((badge) => (
              <motion.div
                key={badge.id}
                className="inline-flex items-center bg-white dark:bg-slate-800 px-3 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <badge.icon className={`h-4 w-4 ${badge.color} mr-2`} />
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Sophisticated wave pattern for bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="relative h-16">
          {/* First wave layer */}
          <svg
            className="absolute bottom-0 w-full h-20 fill-slate-100 dark:fill-slate-800 opacity-60"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>

          {/* Second wave layer */}
          <svg
            className="absolute bottom-0 w-full h-16 fill-white dark:fill-slate-900 opacity-90"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>

          {/* Third decorative layer */}
          <svg
            className="absolute bottom-0 w-full h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity="0.1"
              className="fill-slate-700 dark:fill-slate-200"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
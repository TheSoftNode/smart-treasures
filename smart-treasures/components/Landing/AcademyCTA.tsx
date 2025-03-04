"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, ArrowRight, Code, LineChart, Database } from 'lucide-react';

const AcademyCTA: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

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
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-900/30"
                >
                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-gradient-to-br from-teal-400/20 to-transparent blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-gradient-to-tr from-pink-500/20 to-transparent blur-2xl"></div>

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                        {/* Content */}
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                            <motion.div variants={itemVariants} className="inline-flex items-center mb-3 py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full">
                                <GraduationCap className="h-4 w-4 text-teal-500 mr-2" />
                                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">ST ACADEMY</span>
                            </motion.div>

                            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                Launch Your Tech Career <br className="hidden md:block" />
                                <span className="bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent">With Expert-Led Training</span>
                            </motion.h2>

                            <motion.p variants={itemVariants} className="text-slate-600 text-justify dark:text-slate-300 mb-6">
                                Gain in-demand skills with our comprehensive tech courses. From coding to data science, our expert instructors will guide you through hands-on projects and real-world applications.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center">
                                    <Code className="h-5 w-5 text-yellow-500 mr-2" />
                                    <span className="text-sm text-slate-700 dark:text-slate-200">Web Development</span>
                                </div>
                                <div className="flex items-center">
                                    <Database className="h-5 w-5 text-teal-500 mr-2" />
                                    <span className="text-sm text-slate-700 dark:text-slate-200">Data Science</span>
                                </div>
                                <div className="flex items-center">
                                    <LineChart className="h-5 w-5 text-pink-500 mr-2" />
                                    <span className="text-sm text-slate-700 dark:text-slate-200">AI & Machine Learning</span>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Link
                                    href="/academy"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Apply Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Image/Cards Section */}
                        <div className="relative md:p-6 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-b-2xl md:rounded-br-2xl md:rounded-bl-none">
                            <div className="relative z-10 grid grid-cols-2 gap-3 max-w-md p-2">
                                {/* Course Cards */}
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-3">
                                        <Code className="h-4 w-4 text-yellow-500" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-1">Frontend Dev</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">React, Next.js, UI/UX</p>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-3">
                                        <Database className="h-4 w-4 text-teal-500" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-1">Backend Dev</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Node.js, Python, APIs</p>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="h-8 w-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-3">
                                        <LineChart className="h-4 w-4 text-pink-500" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-1">Data Science</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Python, ML, Analytics</p>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-600 p-4 rounded-lg shadow-md text-white"
                                >
                                    <div className="text-center">
                                        <p className="text-xs font-medium mb-1">Applications</p>
                                        <p className="text-xl font-bold">Open</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10 dark:opacity-5">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AcademyCTA;
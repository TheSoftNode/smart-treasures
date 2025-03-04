"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle, TrendingUp, Globe, Users, GraduationCap } from 'lucide-react';

const FinalCallToAction: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                damping: 12,
            },
        },
    };

    // More advanced animation for final section feel
    const hoverVariants = {
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            {/* Enhanced background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-pink-500/5 blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
            </div>

            {/* Subtle top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent opacity-30"></div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-10 max-w-7xl mx-auto"
            >
                {/* Section title - Added for finale feel */}
                <motion.div variants={itemVariants} className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent inline-block">
                        Join the Smart Treasures Community
                    </h2>
                    <div className="mt-4 max-w-3xl mx-auto">
                        <p className="text-slate-600 dark:text-slate-300">
                            Be part of a global movement creating opportunities through investments, education, and community.
                        </p>
                    </div>
                </motion.div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Content side - Enhanced */}
                        <motion.div
                            variants={itemVariants}
                            className="p-8 md:p-10 lg:p-12 flex flex-col justify-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                Ready to Start Your <span className="bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent">Journey?</span>
                            </h3>

                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6">
                                Join Smart Treasures today to access exclusive investment opportunities, educational resources, and our global community of like-minded individuals.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                                <motion.div whileHover="hover" variants={hoverVariants}>
                                    <Link
                                        href="/join-us"
                                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 text-white font-medium shadow-md flex items-center justify-center"
                                    >
                                        <TrendingUp className="mr-2 h-5 w-5" />
                                        Start Investing
                                    </Link>
                                </motion.div>

                                <motion.div whileHover="hover" variants={hoverVariants}>
                                    <Link
                                        href="/contact"
                                        className="px-6 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium shadow-sm flex items-center justify-center"
                                    >
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        Contact Us
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Enhanced statistics/features section */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg"
                                >
                                    <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                                        <Users className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">50,000+</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Global Members</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg"
                                >
                                    <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                        <Globe className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">25+</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Countries</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg"
                                >
                                    <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                                        <GraduationCap className="h-5 w-5 text-pink-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">12+</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Education Programs</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Decorative side - Enhanced with more animation */}
                        <motion.div
                            variants={itemVariants}
                            className="relative h-60 lg:h-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                        >
                            {/* Enhanced decorative pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 right-0 h-20 w-20 bg-yellow-400 rounded-full filter blur-xl animate-pulse" style={{ animationDuration: '5s' }}></div>
                                <div className="absolute bottom-0 left-0 h-20 w-20 bg-teal-500 rounded-full filter blur-xl animate-pulse" style={{ animationDuration: '7s' }}></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-pink-500 rounded-full filter blur-xl animate-pulse" style={{ animationDuration: '9s' }}></div>
                                <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full w-full p-6">
                                    {Array(36).fill(0).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="rounded-full bg-white/10"
                                            animate={{
                                                opacity: [0.3, 0.8, 0.3],
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                duration: Math.random() * 4 + 3,
                                                repeat: Infinity,
                                                delay: Math.random() * 2
                                            }}
                                        ></motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced testimonial quote */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center p-8"
                                animate={{
                                    rotate: [1, 2, 1, 0, 1],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs border border-white/20 transform shadow-lg">
                                    <p className="text-white text-sm italic mb-4">
                                        "Smart Treasures has completely transformed my approach to investments and provided opportunities I never thought possible."
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-sm">JD</div>
                                        <div className="ml-3">
                                            <p className="text-white text-xs font-medium">John Doe</p>
                                            <p className="text-white/70 text-xs">Member since 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom links - Expanded for finale */}
                <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <Link
                        href="/about-us"
                        className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                    >
                        <span>Our Mission</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/investment-education"
                        className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                    >
                        <span>Investment Education</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/academy"
                        className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                    >
                        <span>ST Academy</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FinalCallToAction;
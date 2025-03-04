"use client"

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Coffee, Users, GraduationCap } from 'lucide-react';

const HeroSection: React.FC = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
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
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={"/hero/hero.jpg"}
                    alt="Smart Treasures Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="transform scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70 dark:from-slate-950/90 dark:via-slate-950/80 dark:to-slate-950/70"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
                <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
                <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-3">
                        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-full"></div>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="block text-slate-800 dark:text-white mb-1">Community Investment</span>
                        <span className="block bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent">
                            Creating Global Opportunities
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-5 mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl"
                    >
                        Smart Treasures empowers communities worldwide through strategic investments, collaborative spaces, and sustainable practices. Join our growing network building the future of community-driven prosperity.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <div className="relative group w-full sm:w-auto">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <a
                                href="https://cbex18.com?code=7eps9t9r0s00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-teal-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                Invest Now
                                <TrendingUp className="ml-2 h-5 w-5" />
                            </a>
                        </div>

                        <Link
                            href="/join-us"
                            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm font-medium rounded-lg hover:bg-white hover:dark:bg-slate-800 transition-all duration-300"
                        >
                            Join Our Community
                            <Users className="ml-2 h-5 w-5" />
                        </Link>

                        <Link
                            href="/academy"
                            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm font-medium rounded-lg hover:bg-emerald-50 hover:dark:bg-emerald-900/20 transition-all duration-300"
                        >
                            ST Academy
                            <GraduationCap className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3"
                    >
                        <div className="bg-white dark:bg-slate-900 py-2 px-4 rounded-full shadow-md flex items-center">
                            <Coffee className="h-4 w-4 text-yellow-500 mr-2" />
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">5,200+ Coffee Shops</span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 py-2 px-4 rounded-full shadow-md flex items-center">
                            <Users className="h-4 w-4 text-teal-500 mr-2" />
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">50,000+ Global Members</span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 py-2 px-4 rounded-full shadow-md flex items-center">
                            <TrendingUp className="h-4 w-4 text-pink-500 mr-2" />
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Growing Investment Network</span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 py-2 px-4 rounded-full shadow-md flex items-center">
                            <GraduationCap className="h-4 w-4 text-emerald-500 mr-2" />
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Tech Academy</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Geometric accent */}
            <div className="absolute bottom-0 left-0 w-full h-16 z-0">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M0 48H1440V0C1200 32 720 48 0 48Z" fill="currentColor" className="text-slate-50 dark:text-slate-950"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;
"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
    Globe,
    TrendingUp,
    Coffee,
    Users,
    Award,
    GraduationCap,
    ArrowUpRight
} from 'lucide-react';

const FinaleSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
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

    const pillars = [
        {
            icon: <Globe className="w-full h-full text-yellow-500" />,
            title: "Global Vision",
            description: "Building networks across borders",
            link: "/about/vision",
            color: "from-yellow-500/20 to-yellow-500/5"
        },
        {
            icon: <TrendingUp className="w-full h-full text-teal-500" />,
            title: "Smart Investment",
            description: "Growing wealth together",
            link: "/investment-guide",
            color: "from-teal-500/20 to-teal-500/5"
        },
        {
            icon: <Coffee className="w-full h-full text-pink-500" />,
            title: "Connected Spaces",
            description: "Creating hubs for innovation",
            link: "/ventures",
            color: "from-pink-500/20 to-pink-500/5"
        },
        {
            icon: <Users className="w-full h-full text-indigo-500" />,
            title: "Community Power",
            description: "Strength through collaboration",
            link: "/join-us",
            color: "from-indigo-500/20 to-indigo-500/5"
        },
        {
            icon: <GraduationCap className="w-full h-full text-emerald-500" />,
            title: "Continuous Learning",
            description: "Developing skills for tomorrow",
            link: "/academy",
            color: "from-emerald-500/20 to-emerald-500/5"
        },
        {
            icon: <Award className="w-full h-full text-amber-500" />,
            title: "Excellence",
            description: "Committed to quality",
            link: "/about/values",
            color: "from-amber-500/20 to-amber-500/5"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            {/* Decorative elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-full h-full">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <radialGradient id="heroglow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.03)" />
                                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                            </radialGradient>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#heroglow)" />
                    </svg>
                </div>

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent opacity-30"></div>

                {/* Grid pattern background */}
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <rect width="80" height="80" fill="url(#smallGrid)" />
                                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col items-center"
                >
                    {/* Section header */}
                    <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center justify-center mb-4"
                        >
                            <span className="h-px w-8 bg-gradient-to-r from-yellow-400 to-transparent"></span>
                            <span className="mx-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                The Smart Treasures Way
                            </span>
                            <span className="h-px w-8 bg-gradient-to-l from-pink-400 to-transparent"></span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500">
                                Join Us in Building Tomorrow
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-600 dark:text-slate-300"
                        >
                            Smart Treasures is more than investments—it's a global movement creating opportunities
                            through technology, education, and community spaces.
                        </motion.p>
                    </motion.div>

                    {/* Pillars grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-full"
                    >
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.color} transform group-hover:scale-[1.02] transition-all duration-300`}></div>
                                <Link
                                    href={pillar.link}
                                    className="relative block h-full p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm group-hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 p-2.5">
                                            {pillar.icon}
                                        </div>
                                        <ArrowUpRight className="h-5 w-5 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {pillar.description}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full max-w-4xl"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative px-8 py-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                            {/* Background decorative elements */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                        Join the Smart Treasures Movement
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 max-w-xl">
                                        Whether you're an investor, entrepreneur, or community builder, there's a place for you in our global network.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/join-us"
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        Become a Member
                                        <Users className="ml-2 h-5 w-5" />
                                    </Link>

                                    <Link
                                        href="/about"
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium shadow-sm border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        Learn More
                                        <ArrowUpRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinaleSection;
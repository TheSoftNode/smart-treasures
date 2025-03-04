"use client";

import React, { JSX, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Users, Target, Building } from 'lucide-react';

interface StatItem {
    icon: JSX.Element;
    iconColor: string;
    title: string;
    value: string;
    description: string;
}

const StatsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const stats: StatItem[] = [
        {
            icon: <Globe className="h-8 w-8" />,
            iconColor: "yellow",
            title: "Global Presence",
            value: "20M+",
            description: "Online Users Target by 2025"
        },
        {
            icon: <Users className="h-8 w-8" />,
            iconColor: "teal",
            title: "Team Growth",
            value: "50,000+",
            description: "Active Team Members"
        },
        {
            icon: <Target className="h-8 w-8" />,
            iconColor: "pink",
            title: "Success Rate",
            value: "99.8%",
            description: "Trading Signal Accuracy"
        },
        {
            icon: <Building className="h-8 w-8" />,
            iconColor: "yellow",
            title: "Global Network",
            value: "6,000+",
            description: "Locations Worldwide"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                damping: 12,
            },
        },
    };

    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="relative pb-4 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"></div>
                    <div className="absolute top-40 right-1/3 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                            Our Growth in Numbers
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                            Smart Treasures continues to expand globally, bringing investment opportunities and community spaces to more people every day.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-4 md:p-6 relative">
                                    {/* Top accent line with gradient */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-${stat.iconColor}-500`}></div>

                                    <div className="flex flex-col items-center">
                                        <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-${stat.iconColor}-100 dark:bg-${stat.iconColor}-900/20 mb-4`}>
                                            <div className={`text-${stat.iconColor}-500`}>
                                                {stat.icon}
                                            </div>
                                        </div>

                                        <h3 className={`text-3xl font-bold text-${stat.iconColor}-500 text-center mb-1`}>
                                            {stat.value}
                                        </h3>

                                        <p className="text-base font-semibold text-slate-700 dark:text-slate-300 text-center">
                                            {stat.title}
                                        </p>

                                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-1">
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, BarChart2, TrendingUp, DollarSign } from 'lucide-react';

const InvestmentHighlight: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const benefits = [
        {
            icon: <TrendingUp className="h-10 w-10 text-yellow-500" />,
            title: "Growth Opportunities",
            description: "Access strategic investment options designed for both short and long-term returns."
        },
        {
            icon: <BarChart2 className="h-10 w-10 text-teal-500" />,
            title: "Expert Management",
            description: "Benefit from our professional approach to investment and community building."
        },
        {
            icon: <DollarSign className="h-10 w-10 text-pink-500" />,
            title: "Community Returns",
            description: "Participate in our growing network of profitable community-focused ventures."
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-slate-950">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent inline-block mb-4">
                        Start Your Investment Journey
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                        Discover opportunities with our Cebex investment platform and become part of our growing global community of investors.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">{benefit.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-r from-yellow-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Ready to get started?</h3>
                            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                                Our Cebex platform provides a secure and easy way to begin your investment journey with Smart Treasures. Join thousands of global investors today.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <a
                                href="https://cbex18.com?code=7eps9t9r0s00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                            >
                                Start Investing Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default InvestmentHighlight;
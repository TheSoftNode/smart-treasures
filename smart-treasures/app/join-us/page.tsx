"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Globe, TrendingUp, Users, Send } from 'lucide-react';

const JoinUs: React.FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const benefits = [
        {
            icon: <Check className="h-6 w-6 text-yellow-500" />,
            title: "Sustainable Investment Opportunities",
            description: "Our focus is on building lasting success, from our coffee shops and bars to the innovative solutions we create through our investments.",
            color: "yellow"
        },
        {
            icon: <Globe className="h-6 w-6 text-teal-500" />,
            title: "Global Expansion",
            description: "Be a part of our expanding footprint across the globe. With over 5,000 locations planned in key markets, your investment will help fuel our international growth.",
            color: "teal"
        },
        {
            icon: <Users className="h-6 w-6 text-pink-500" />,
            title: "Community Impact",
            description: "Join a network of like-minded investors who believe in the power of community, sustainability, and growth.",
            color: "pink"
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
            title: "Financial Growth",
            description: "Access investment opportunities designed for both short-term returns and long-term wealth building, with transparent reporting and expert guidance.",
            color: "yellow"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12 md:py-16">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Hero Section */}
                <motion.div
                    variants={itemVariants}
                    className="relative rounded-2xl overflow-hidden mb-12"
                >
                    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8 md:p-12 border border-slate-200 dark:border-transparent shadow-lg">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500"></div>
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl"></div>
                            <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-teal-500/20 blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/3 w-60 h-60 rounded-full bg-pink-500/20 blur-3xl"></div>
                        </div>

                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-6">
                                Join Us on the Journey to Success
                            </h1>
                            <p className="text-slate-700 dark:text-slate-300 text-lg mb-8">
                                At <span className="font-semibold">Smart Treasures Investment Group</span>, we are committed to creating a global network of investors and partners who share our vision of sustainable growth, collaboration, and opportunity. As we expand our presence worldwide, we invite you to be a part of this exciting journey by joining our investment platform.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-300">
                                    <Check className="h-4 w-4 mr-1" /> Trusted by 50,000+ Members
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300">
                                    <Check className="h-4 w-4 mr-1" /> 5,200+ Locations by 2025
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-100 dark:bg-pink-400/20 text-pink-700 dark:text-pink-300">
                                    <Check className="h-4 w-4 mr-1" /> Global Community
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                            Why Join Us?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Discover the advantages of becoming part of the Smart Treasures community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="flex space-x-4">
                                    <div className={`p-3 rounded-lg bg-${benefit.color}-100 dark:bg-${benefit.color}-900/20 group-hover:scale-110 transition-transform duration-300`}>
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold text-${benefit.color}-600 dark:text-${benefit.color}-400 mb-2`}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* How to Get Started Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                                How to Get Started
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Getting started is easy! Simply follow the link below to the <span className="font-semibold">Cibex</span> investment platform, where you can sign up, explore investment options, and take the next step toward a secure financial future.
                            </p>

                            <div className="relative">
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-lg blur opacity-30"></div> */}
                                <a
                                    href="https://cbex18.com?code=7eps9t9r0s00"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400  to-pink-500 hover:from-yellow-500  hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md"
                                >
                                    Start Investing on Cibex
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>

                            <div className="mt-6 text-sm text-slate-500 dark:text-slate-500">
                                By joining, you agree to our <Link href="/terms" className="text-teal-500 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-teal-500 hover:underline">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Community & Support Section */}
                <motion.div variants={itemVariants}>
                    <div className="bg-gradient-to-r from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 p-8 rounded-xl relative overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                        <div className="absolute top-0 right-0 w-full h-full opacity-20">
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-400/30 blur-3xl"></div>
                            <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-teal-500/30 blur-3xl"></div>
                            <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-pink-500/30 blur-3xl"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">Join Our Community</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                                We believe in building lasting relationships, and we want to hear from you! Join our community on <span className="font-semibold">Telegram</span>, where you can ask questions, stay up to date with our latest updates, and connect with other investors.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="YOUR_TELEGRAM_LINK"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium rounded-md flex items-center shadow-md"
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    Join Our Telegram Channel
                                </a>

                                <Link
                                    href="/contact"
                                    className="px-8 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-white font-medium rounded-md border border-slate-300 dark:border-white/20 shadow-md"
                                >
                                    Contact Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default JoinUs;
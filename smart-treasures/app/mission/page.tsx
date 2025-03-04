"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Globe, Leaf, Users, TrendingUp, CheckCircle } from 'lucide-react';

const OurMission: React.FC = () => {
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

    // Focus areas data
    const focusAreas = [
        {
            icon: <Users className="h-10 w-10 text-yellow-500" />,
            title: "Community Empowerment",
            description: "Empowering communities through strategic investments that create opportunities and foster local growth.",
            color: "yellow"
        },
        {
            icon: <Leaf className="h-10 w-10 text-teal-500" />,
            title: "Sustainability",
            description: "Promoting sustainability and responsible business practices in everything we do.",
            color: "teal"
        },
        {
            icon: <Globe className="h-10 w-10 text-pink-500" />,
            title: "Global Collaboration",
            description: "Creating global opportunities for collaboration and growth through our expanding network.",
            color: "pink"
        },
        {
            icon: <TrendingUp className="h-10 w-10 text-yellow-500" />,
            title: "Future-Focused Growth",
            description: "Building a sustainable ecosystem for future generations with long-term vision and planning.",
            color: "yellow"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-24">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Hero Section */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <div className="bg-gradient-to-r from-yellow-100 via-teal-100 to-pink-100 dark:from-yellow-900/20 dark:via-teal-900/20 dark:to-pink-900/20 p-3 rounded-xl">
                            <Target className="h-10 w-10 text-gradient-to-r from-yellow-500 via-teal-500 to-pink-500" />
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-6">
                        Our Mission
                    </h1>
                    <p className="text-slate-700 dark:text-slate-300 text-lg max-w-3xl mx-auto">
                        At Smart Treasures Investment Group, we believe in creating a future where innovation, sustainability, and collaboration drive global growth.
                    </p>
                </motion.div>

                {/* Mission Statement and Image */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden mb-16"
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                                    Our Purpose
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Our mission is to empower communities worldwide through investments that foster long-term success and mutual benefit. We are dedicated to making strategic investments that promote sustainability, support local economies, and create lasting opportunities.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Our vision for 2025 includes expanding our footprint globally by opening 5,200 coffee shops and 800 bars, designed to serve as community hubs that foster connection, collaboration, and growth.
                                </p>

                                <div className="pt-4 flex flex-wrap gap-4">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-300">
                                        <CheckCircle className="h-4 w-4 mr-1" /> Global Expansion
                                    </span>
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300">
                                        <CheckCircle className="h-4 w-4 mr-1" /> Community Building
                                    </span>
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-100 dark:bg-pink-400/20 text-pink-700 dark:text-pink-300">
                                        <CheckCircle className="h-4 w-4 mr-1" /> Sustainable Growth
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="h-full min-h-[300px] lg:min-h-0 relative">
                                <Image
                                    src="/mission/ourmission2.jpg" // Update with correct path
                                    alt="Our Mission"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:from-transparent lg:via-transparent lg:to-black/50 hidden lg:block"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Focus Areas Grid */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                            What Drives Us
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Our core values and focus areas that shape everything we do at Smart Treasures
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {focusAreas.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 group border border-slate-100 dark:border-slate-800"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-${area.color}-100 dark:bg-${area.color}-900/20 group-hover:scale-110 transition-transform duration-300`}>
                                    {area.icon}
                                </div>
                                <h3 className={`text-xl font-bold text-${area.color}-600 dark:text-${area.color}-400 mb-3`}>
                                    {area.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Vision Statement */}
                <motion.div variants={itemVariants}>
                    <div className="bg-gradient-to-r from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 p-8 rounded-xl relative overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                        <div className="absolute top-0 right-0 w-full h-full opacity-20">
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-400/30 blur-3xl"></div>
                            <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-teal-500/30 blur-3xl"></div>
                            <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-pink-500/30 blur-3xl"></div>
                        </div>

                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">Our 2025 Vision</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
                                "To create a global network of spaces where communities thrive, innovation flourishes, and sustainable practices lead to prosperity for all stakeholders."
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                                    <div className="text-yellow-500 font-bold text-4xl mb-2">5,200</div>
                                    <div className="text-slate-700 dark:text-slate-300">Coffee Shops</div>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                                    <div className="text-teal-500 font-bold text-4xl mb-2">800</div>
                                    <div className="text-slate-700 dark:text-slate-300">Community Bars</div>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                                    <div className="text-pink-500 font-bold text-4xl mb-2">50+</div>
                                    <div className="text-slate-700 dark:text-slate-300">Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default OurMission;
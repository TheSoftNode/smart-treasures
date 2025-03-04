"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Coffee, Globe } from 'lucide-react';

const AboutSection: React.FC = () =>
{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

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

    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    {/* Text Section */}
                    <motion.div variants={itemVariants} className="lg:w-1/2 text-justify lg:text-left">
                        <div className="inline-block mb-4 lg:mb-6">
                            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-full"></div>
                        </div>

                        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent mb-5">
                            About Smart Treasures Investment Group
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                            At Smart Treasures Investment Group, we are dedicated to making a significant impact globally through sustainable practices, innovation, and collaboration. Our mission is to lead in driving growth across continents and empowering communities worldwide.
                        </p>

                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            With a team of over 50,000 members and a vision to expand globally by 2025, we are creating spaces for professional networking and community building through our coffee shops and bars.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                            <div className="flex items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                                <Users className="h-5 w-5 text-teal-500 mr-2" />
                                <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">50,000+ Members</span>
                            </div>

                            <div className="flex items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                                <Coffee className="h-5 w-5 text-yellow-500 mr-2" />
                                <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">5,200+ Locations</span>
                            </div>

                            <div className="flex items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                                <Globe className="h-5 w-5 text-pink-500 mr-2" />
                                <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">Global Network</span>
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent group"
                        >
                            Learn more about us
                            <ArrowRight className="ml-2 h-4 w-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Image Section with decorative elements */}
                    <motion.div variants={itemVariants} className="lg:w-1/2 w-full relative">
                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-teal-500/10 blur-3xl"></div>

                        {/* Image frame with gradient border */}
                        <div className="relative rounded-xl p-1 bg-gradient-to-br from-yellow-400 via-teal-500 to-pink-500">
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/about/about.jpg"
                                    alt="Smart Treasures Investment Group"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-lg">
                                <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                                    Vision 2025
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
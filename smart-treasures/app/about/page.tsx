"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Coffee, Users, Lock, Globe, ChevronRight, ArrowRight } from 'lucide-react';
import SecuritySection from '@/components/About/SecuritySection';

const AboutUs: React.FC = () => {
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

    const coreValues = [
        {
            title: "Integrity",
            description: "We believe in maintaining transparency and honesty in everything we do.",
            color: "yellow"
        },
        {
            title: "Sustainability",
            description: "We are committed to creating long-lasting, positive impacts on the environment and society.",
            color: "teal"
        },
        {
            title: "Innovation",
            description: "We strive for continuous innovation in our strategies and solutions to stay ahead of the curve.",
            color: "pink"
        },
        {
            title: "Collaboration",
            description: "We value teamwork and partnerships that help achieve common goals.",
            color: "yellow"
        }
    ];

    const leadershipTeam = [
        {
            name: "Trust Otorudor",
            position: "CEO & Founder",
            imageSrc: "/about/leadership.jpg",
        },
        {
            name: "Jane Smith",
            position: "CTO",
            imageSrc: "/about/leadership2.jpg",
        },
        {
            name: "Alex Johnson",
            position: "CFO",
            imageSrc: "/about/leadership3.jpg",
        }
    ];

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20 md:py-24">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >

                {/* Hero Section */}
                <motion.div
                    variants={itemVariants}
                    className="relative rounded-2xl overflow-hidden mb-16"
                >
                    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8 md:p-12 border border-slate-200 dark:border-transparent shadow-lg">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500"></div>
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl"></div>
                            <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-teal-500/20 blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/3 w-60 h-60 rounded-full bg-pink-500/20 blur-3xl"></div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-6">
                                    About Smart Treasures
                                </h1>
                                <p className="text-slate-700 dark:text-white text-lg mb-6 max-w-2xl">
                                    Our mission is to foster innovation, sustainability, and global community growth. We are dedicated to empowering communities and creating opportunities worldwide through strategic investments and collaboration.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">50,000+ Members</span>
                                    <span className="px-4 py-2 bg-teal-100 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">5,200 Coffee Shops</span>
                                    <span className="px-4 py-2 bg-pink-100 dark:bg-pink-400/20 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">800 Community Bars</span>
                                </div>
                            </div>

                            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl transform md:translate-y-8 border border-slate-200 dark:border-slate-700">
                                <div className="relative w-full aspect-video">
                                    <Image
                                        src="/about/about.jpg"
                                        alt="Smart Treasures Community"
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission and Vision */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                        <div className="bg-yellow-100 dark:bg-yellow-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <Globe className="h-6 w-6 text-yellow-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3">Our Mission</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Our mission is to lead the way in sustainable investments, creating a positive global impact through innovation and collaboration. We aim to empower individuals and communities through forward-thinking solutions that address both present needs and future challenges.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                        <div className="bg-teal-100 dark:bg-teal-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <Users className="h-6 w-6 text-teal-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3">Our Vision</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            We envision a world where businesses thrive in harmony with nature and communities, shaping the future with integrity and a commitment to growth for everyone. By 2025, we aim to establish a global network of spaces that bring people together to learn, collaborate, and create positive change.
                        </p>
                    </div>
                </motion.div>

                {/* Core Values */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                            Our Core Values
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            These principles guide everything we do at Smart Treasures, from our investment decisions to how we build communities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-${value.color}-500`}></div>
                                <div className={`text-${value.color}-500 font-bold text-lg mb-2`}>{value.title}</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{value.description}</p>
                                <CheckCircle className={`absolute bottom-4 right-4 h-5 w-5 text-${value.color}-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Our Ventures */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                            Our Global Ventures
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg">
                                    <Coffee className="h-6 w-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Coffee Shops</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                        Our network of 5,200 coffee shops (by 2025) creates spaces for entrepreneurs, creators, and thinkers to connect and collaborate while enjoying premium coffee.
                                    </p>
                                    <Link href="/coffee-shops" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium">
                                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-teal-100 dark:bg-teal-900/20 p-3 rounded-lg">
                                    <Users className="h-6 w-6 text-teal-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Community Bars</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                        Our 800 community bars serve as evening venues for networking events, knowledge sharing, and building meaningful connections in a relaxed environment.
                                    </p>
                                    <Link href="/community-bars" className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Leadership Team */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                            Our Leadership Team
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Meet the visionaries behind Smart Treasures who are committed to making a global impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {leadershipTeam.map((leader, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden group">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={leader.imageSrc}
                                        alt={leader.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{leader.name}</h3>
                                    <p className="text-sm font-medium text-teal-500">{leader.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Security Section */}
                <SecuritySection />

                {/* Call to Action */}
                <motion.div variants={itemVariants}>
                    <div className="bg-gradient-to-r from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 p-8 rounded-xl relative overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                        <div className="absolute top-0 right-0 w-full h-full opacity-20">
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-400/30 blur-3xl"></div>
                            <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-teal-500/30 blur-3xl"></div>
                            <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-pink-500/30 blur-3xl"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">Ready to Join Us?</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                                If you're passionate about sustainability, innovation, and global growth, we'd love to have you onboard. Together, we can achieve great things.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 hover:from-yellow-500 hover:via-teal-600 hover:to-pink-600 text-white font-medium rounded-md flex items-center shadow-md">
                                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/join-us" className="px-8 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-white font-medium rounded-md border border-slate-300 dark:border-white/20 shadow-md">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutUs;
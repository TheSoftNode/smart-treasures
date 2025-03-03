"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Mail,
    MapPin,
    Phone,
    ArrowRight,
    ChevronRight,
    Coffee,
    Users
} from 'lucide-react';
import { FaFacebook, FaLinkedin, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
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
                damping: 10,
            },
        },
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <footer className="relative overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-slate-950 dark:via-black dark:to-slate-900 z-0">
                {/* Decorative elements - now with teal, pink and yellow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>
                <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-teal-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-60 h-60 rounded-full bg-pink-500/10 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-yellow-400/5 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex items-center">
                            <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-md flex items-center justify-center">
                                <span className="text-lg font-bold text-slate-800">ST</span>
                            </div>
                            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent">
                                Smart Treasures
                            </span>
                        </div>

                        <p className="text-slate-300 dark:text-slate-400">
                            Empowering communities worldwide through innovation, sustainability, and collaboration.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300 dark:text-slate-400">123 Innovation Drive, Global City, 10001</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                <span className="text-slate-300 dark:text-slate-400">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                                <span className="text-slate-300 dark:text-slate-400">contact@smarttreasures.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-semibold text-white relative">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-teal-500"></span>
                        </h3>
                        <ul className="space-y-3 pt-3">
                            <li>
                                <Link href="/about" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <ChevronRight className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/mission" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <ChevronRight className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>Our Mission</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/achievements" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <ChevronRight className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>Achievements</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <ChevronRight className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Our Ventures */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-semibold text-white relative">
                            Our Ventures
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-teal-500 to-pink-500"></span>
                        </h3>
                        <ul className="space-y-3 pt-3">
                            <li>
                                <Link href="/coffee-shops" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <Coffee className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>Coffee Shops</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/community-bars" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <Users className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>Community Bars</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/investment-education" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <ChevronRight className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>Investment Education</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tech-tutorials" className="flex items-center text-slate-300 dark:text-slate-400 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                    <ChevronRight className="h-4 w-4 text-yellow-400 mr-2" />
                                    <span>Tech Tutorials</span>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter & Social */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-semibold text-white relative">
                            Stay Connected
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-500 to-yellow-400"></span>
                        </h3>

                        <div className="pt-3">
                            <p className="text-slate-300 dark:text-slate-400 mb-4">
                                Subscribe to our newsletter for the latest updates.
                            </p>

                            <form className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 bg-slate-800/50 dark:bg-slate-950/50 border border-slate-700 dark:border-slate-800 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-slate-900 p-1 rounded-md transition-colors duration-200"
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </form>
                        </div>

                        <div>
                            <h4 className="text-white text-lg mb-3">Follow Us</h4>
                            <div className="flex space-x-4">
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full group hover:bg-yellow-400 transition-colors duration-300"
                                >
                                    <FaFacebook className="h-5 w-5 text-slate-300 group-hover:text-slate-900" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                    className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full group hover:bg-yellow-400 transition-colors duration-300"
                                >
                                    <FaTwitter className="h-5 w-5 text-slate-300 group-hover:text-slate-900" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full group hover:bg-yellow-400 transition-colors duration-300"
                                >
                                    <FaLinkedin className="h-5 w-5 text-slate-300 group-hover:text-slate-900" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    href="https://t.me/yourTelegramUsername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telegram"
                                    className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full group hover:bg-yellow-400 transition-colors duration-300"
                                >
                                    <FaTelegramPlane className="h-5 w-5 text-slate-300 group-hover:text-slate-900" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>



                {/* Footer Bottom */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    className="mt-16 pt-8 border-t border-slate-700/50 dark:border-slate-800/50 text-center"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <p className="text-slate-400 dark:text-slate-500 text-sm">
                            © {new Date().getFullYear()} <span className="font-semibold text-slate-300 dark:text-slate-400">Smart Treasures</span>. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-4 lg:mt-0">
                            <Link href="/privacy" className="text-sm text-slate-400 dark:text-slate-500 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-slate-400 dark:text-slate-500 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-sm text-slate-400 dark:text-slate-500 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors duration-200">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>


                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
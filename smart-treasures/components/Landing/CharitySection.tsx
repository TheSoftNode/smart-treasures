"use client"

import React from 'react';
import Link from 'next/link';
import { Heart, Users, Globe, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CharitySection = () =>
{
    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.4
            }
        }
    };

    const combinedVariants = {
        // From itemVariants
        hidden: { y: 15, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.4
            }
        },
        // From cardHoverVariants
        rest: {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            y: 0
        },
        hover: {
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            y: -8,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        }
    };

    return (
        <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950">
            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-yellow-400/20 blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-lighten"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl opacity-60 dark:opacity-30 mix-blend-multiply dark:mix-blend-lighten"></div>
                <div className="absolute -bottom-10 left-1/3 w-64 h-64 rounded-full bg-pink-400/20 blur-3xl opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-lighten"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 bg-[size:30px_30px] opacity-20"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="text-center mb-10"
                >
                    <motion.div variants={itemVariants} className="inline-block">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/90 via-teal-500/90 to-pink-500/90 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Making a Difference</span>
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight"
                    >
                        Our Charity <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500">Initiatives</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Through our global programs, we're empowering communities and creating sustainable change
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-5"
                >
                    {/* Initiative 1 - Enhanced with spring animations */}
                    <motion.div
                        variants={combinedVariants}
                        initial="rest"
                        whileHover="hover"
                        className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden group"
                    >
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative h-full p-7 rounded-[calc(0.75rem-1px)] bg-white dark:bg-slate-800 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center mb-5">
                                <Heart className="h-6 w-6 text-yellow-500" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                Education For All
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 mb-5 flex-grow">
                                Providing access to quality education and resources to underprivileged children worldwide.
                            </p>

                            <div className="mt-auto flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">120+ Schools</span>
                                </div>
                                <Link href="/charity/education" className="inline-flex items-center font-medium text-yellow-500 hover:text-yellow-600 group-hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-sm">Explore</span>
                                    <ArrowRight className="h-4 w-4 ml-1 opacity-70" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Initiative 2 */}
                    <motion.div
                        variants={combinedVariants}
                        initial="rest"
                        whileHover="hover"
                        className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden group"
                    >
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative h-full p-7 rounded-[calc(0.75rem-1px)] bg-white dark:bg-slate-800 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-5">
                                <Users className="h-6 w-6 text-teal-500" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                Community Development
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 mb-5 flex-grow">
                                Building sustainable infrastructure and supporting local businesses in developing regions.
                            </p>

                            <div className="mt-auto flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">50+ Communities</span>
                                </div>
                                <Link href="/charity/community" className="inline-flex items-center font-medium text-teal-500 hover:text-teal-600 group-hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-sm">Explore</span>
                                    <ArrowRight className="h-4 w-4 ml-1 opacity-70" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Initiative 3 */}
                    <motion.div
                        variants={combinedVariants}
                        initial="rest"
                        whileHover="hover"
                        className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative h-full p-7 rounded-[calc(0.75rem-1px)] bg-white dark:bg-slate-800 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-5">
                                <Globe className="h-6 w-6 text-pink-500" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                Environmental Projects
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 mb-5 flex-grow">
                                Funding ocean cleanup, reforestation, and green energy initiatives to protect our planet.
                            </p>

                            <div className="mt-auto flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">30+ Projects</span>
                                </div>
                                <Link href="/charity/environment" className="inline-flex items-center font-medium text-pink-500 hover:text-pink-600 group-hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-sm">Explore</span>
                                    <ArrowRight className="h-4 w-4 ml-1 opacity-70" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Enhanced CTA with backdrop blur */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="text-center mt-12"
                >
                    <motion.div
                        variants={itemVariants}
                        className="max-w-3xl mx-auto rounded-xl overflow-hidden backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 p-8 border border-slate-200/50 dark:border-slate-700/50"
                    >
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Join Our Mission</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
                            Be part of transformative change. Your contribution can help us extend our reach and impact more lives around the world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-shadow px-6 py-3">
                                Donate Now
                            </Button>
                            <Button variant="outline" className="border-yellow-500 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-slate-700/50 shadow-sm px-6 py-3">
                                Volunteer With Us
                            </Button>
                            <Button variant="ghost" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 px-6 py-3">
                                <span>Annual Report</span>
                                <ExternalLink className="h-3.5 w-3.5" />
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CharitySection;
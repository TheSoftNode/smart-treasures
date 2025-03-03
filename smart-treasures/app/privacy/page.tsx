"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Users, FileText, Bell, CheckCircle } from "lucide-react";

const PrivacyPolicy = () => {
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

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12 px-4 sm:px-6">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto"
            >
                {/* Header Card */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden mb-8"
                >
                    <div className="relative">
                        {/* Header gradient banner */}
                        <div className="h-24 bg-gradient-to-r from-teal-500 via-teal-400 to-pink-400"></div>

                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                <defs>
                                    <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="1" fill="none" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#pattern)" />
                            </svg>
                        </div>

                        {/* Centered icon */}
                        <div className="absolute left-0 right-0 -bottom-10 flex justify-center">
                            <div className="h-20 w-20 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center">
                                <Shield className="h-10 w-10 text-teal-500" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 pb-6 px-6 text-center">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            At Smart Treasures, we are committed to protecting your privacy and providing a secure platform for our community members.
                        </p>
                    </div>
                </motion.div>

                {/* Policy Content */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden p-6 sm:p-8"
                >
                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                            <p className="text-slate-600 dark:text-slate-400">
                                This Privacy Policy outlines how Smart Treasures collects, uses, and protects your personal information. We've designed this document to be clear and transparent, ensuring you understand how your data is handled when using our services.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <section className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded-lg">
                                    <Users className="h-6 w-6 text-teal-500" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Information We Collect</h2>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                                        We collect various types of information to provide our services:
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-700 dark:text-slate-300">Personal Data:</span> Names, email addresses, phone numbers, and account credentials.</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-700 dark:text-slate-300">Financial Information:</span> Investment preferences, transaction history, and payment details.</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-700 dark:text-slate-300">Technical Data:</span> Device information, IP addresses, and usage patterns to improve our platform.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="space-y-4 pt-2">
                            <div className="flex items-start space-x-4">
                                <div className="bg-pink-50 dark:bg-pink-900/20 p-2 rounded-lg">
                                    <FileText className="h-6 w-6 text-pink-500" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">How We Use Your Information</h2>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                                        Your information enables us to:
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Deliver and enhance our investment and educational services</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Process transactions and maintain secure records</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Communicate important updates about our platform and services</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Comply with legal requirements and financial regulations</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="space-y-4 pt-2">
                            <div className="flex items-start space-x-4">
                                <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded-lg">
                                    <Lock className="h-6 w-6 text-teal-500" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Data Protection and Compliance</h2>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                                        We implement stringent security measures to protect your data:
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">End-to-end encryption for all sensitive information</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Regular security audits and vulnerability assessments</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Compliance with global regulations including U.S. MSB license requirements</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="space-y-4 pt-2">
                            <div className="flex items-start space-x-4">
                                <div className="bg-pink-50 dark:bg-pink-900/20 p-2 rounded-lg">
                                    <Bell className="h-6 w-6 text-pink-500" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Your Rights</h2>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                                        As a Smart Treasures user, you have the right to:
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Access and review your personal information</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Request updates or corrections to your data</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Request deletion of your account and associated data</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">Opt out of certain communications or data processing activities</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Contact section */}
                        <div className="mt-8 bg-gradient-to-r from-teal-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">Questions about your privacy?</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">We're here to help with any privacy concerns.</p>
                                </div>
                                <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-pink-500 hover:from-teal-600 hover:to-pink-600 text-white rounded-lg shadow-md text-sm font-medium transition-all duration-200">
                                    Contact Our Team
                                </button>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-6 text-center">
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                Last updated: March 3, 2025. This Privacy Policy is subject to changes. We recommend reviewing it periodically.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
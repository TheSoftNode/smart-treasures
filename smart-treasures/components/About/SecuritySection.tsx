"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Lock, CheckCircle, Shield, Server, Database } from 'lucide-react';

const SecuritySection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

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

    // Security features
    const securityFeatures = [
        {
            icon: <Shield className="h-5 w-5 text-pink-500" />,
            text: "End-to-end encryption for all communications and data transfers"
        },
        {
            icon: <Lock className="h-5 w-5 text-pink-500" />,
            text: "Secure Socket Layer (SSL) technology with 256-bit encryption"
        },
        {
            icon: <Server className="h-5 w-5 text-pink-500" />,
            text: "Regular security audits and penetration testing by certified experts"
        },
        {
            icon: <Database className="h-5 w-5 text-pink-500" />,
            text: "Compliance with global security standards and regulations"
        },
        {
            icon: <CheckCircle className="h-5 w-5 text-pink-500" />,
            text: "Multi-factor authentication and advanced fraud detection systems"
        },
        {
            icon: <CheckCircle className="h-5 w-5 text-pink-500" />,
            text: "Continuous monitoring and real-time threat analysis"
        }
    ];

    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div variants={itemVariants} className="mb-12 text-center">
                    <div className="inline-block mb-4">
                        <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full">
                            <Lock className="h-8 w-8 text-pink-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent mb-4">
                        Security at Cebex
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                        Your security is our highest priority. We employ industry-leading technology to protect your data and investments.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Content Column */}
                        <div className="p-8 lg:p-10">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                                    Advanced Security Measures
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    At Smart Treasures, the security of our platform, Cebex, is a top priority. We utilize industry-leading encryption methods to ensure that user data remains private and protected. Our platform complies with global security standards and is continuously monitored to detect and mitigate any potential threats.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {securityFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="mt-0.5 mr-2 flex-shrink-0">
                                                {feature.icon}
                                            </div>
                                            <span className="text-sm text-slate-600 dark:text-slate-400">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border-l-4 border-pink-500">
                                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                                        "Whether you're making an investment or simply browsing, you can be assured that your data is safe with us. Security isn't just a feature—it's the foundation of everything we build."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative lg:h-auto">
                            <div className="relative h-full min-h-[400px] lg:min-h-full">
                                <Image
                                    src="/about/security.jpg"
                                    alt="Cebex Platform Security"
                                    layout="fill"
                                    objectFit="contain"
                                    className="lg:rounded-tr-2xl lg:rounded-br-2xl"
                                />

                                {/* Gradient overlay with content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 max-w-md">
                                        <h4 className="text-white font-semibold mb-2">Enterprise-Grade Protection</h4>
                                        <p className="text-white/90 text-sm">
                                            Your data is encrypted and secured with the latest security measures, including military-grade encryption and advanced intrusion detection systems.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Security badges */}
                            <div className="absolute bottom-6 right-6 flex space-x-2">
                                <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg">
                                    <Shield className="h-6 w-6 text-pink-500" />
                                </div>
                                <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg">
                                    <Lock className="h-6 w-6 text-teal-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional trustworthiness indicators */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                >
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                        <div className="bg-yellow-100 dark:bg-yellow-900/20 h-12 w-12 mx-auto rounded-full flex items-center justify-center mb-4">
                            <Shield className="h-6 w-6 text-yellow-500" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Data Protection</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Your personal and financial information is fully encrypted and protected with multiple security layers.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                        <div className="bg-teal-100 dark:bg-teal-900/20 h-12 w-12 mx-auto rounded-full flex items-center justify-center mb-4">
                            <Server className="h-6 w-6 text-teal-500" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Secure Infrastructure</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Our platform runs on enterprise-grade servers with redundant systems and continuous monitoring.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                        <div className="bg-pink-100 dark:bg-pink-900/20 h-12 w-12 mx-auto rounded-full flex items-center justify-center mb-4">
                            <Database className="h-6 w-6 text-pink-500" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Regulatory Compliance</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            We adhere to international standards and undergo regular audits to ensure full compliance.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SecuritySection;
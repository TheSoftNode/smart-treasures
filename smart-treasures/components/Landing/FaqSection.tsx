"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
    category?: string;
}

const FaqSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FaqItem[] = [
        {
            question: "What is Smart Treasures Investment Group?",
            answer: "Smart Treasures is a global investment company focused on creating opportunities through strategic investments in sustainable ventures, community spaces, and educational programs. We operate coffee shops and community bars that serve as hubs for networking and collaboration.",
            category: "General"
        },
        {
            question: "How can I start investing with Smart Treasures?",
            answer: "You can start by visiting our investment platform Cebex. Simply create an account, complete the verification process, and explore available investment opportunities. Our platform offers various options suitable for different investment goals and risk profiles.",
            category: "Investing"
        },
        {
            question: "What types of investment opportunities do you offer?",
            answer: "We offer a diverse range of investment opportunities including community-focused ventures, sustainability projects, real estate developments related to our coffee shops and bars, and technology initiatives. All investments are carefully vetted to align with our mission and values.",
            category: "Investing"
        },
        {
            question: "How are the coffee shops and bars connected to the investment group?",
            answer: "Our coffee shops and community bars serve as physical hubs for our investment community. They provide spaces for networking, learning, and collaboration. Part of our investment strategy includes expanding this network to 5,200 coffee shops and 800 bars globally by 2025.",
            category: "Ventures"
        },
        {
            question: "Do you offer educational resources for investors?",
            answer: "Yes, we provide comprehensive educational resources including investment courses, workshops, webinars, and one-on-one consultations. Our educational programs cover various aspects of investing, sustainability, and community building to help our members make informed decisions.",
            category: "Education"
        },
        {
            question: "How does Smart Treasures ensure security for investors?",
            answer: "We implement robust security measures including end-to-end encryption, secure payment processing, regular security audits, and compliance with international financial regulations. Our platform, Cebex, undergoes continuous monitoring to detect and prevent potential threats.",
            category: "Security"
        }
    ];

    // Animation variants
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

    const contentVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98]
            }
        }
    };

    return (
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Section header */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-full">
                                <HelpCircle className="h-8 w-8 text-yellow-500" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                            Find answers to common questions about Smart Treasures, our investment platform, and our global community initiatives.
                        </p>
                    </motion.div>

                    {/* FAQ Grid - Using display:contents for grid items to prevent layout shifts */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col"
                                style={{ height: "fit-content" }} // Fixed height issues
                            >
                                <div
                                    className={`flex items-start justify-between p-5 cursor-pointer ${activeIndex === index ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                >
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                            {faq.question}
                                        </h3>
                                        {faq.category && (
                                            <span className="inline-block text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400 mt-2">
                                                {faq.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-shrink-0 ml-2">
                                        <motion.div
                                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className={`p-1 rounded-full ${activeIndex === index ? 'bg-teal-50 dark:bg-teal-900/20' : 'bg-slate-100 dark:bg-slate-700'}`}
                                        >
                                            <ChevronDown className={`h-5 w-5 ${activeIndex === index ? 'text-teal-500' : 'text-slate-500 dark:text-slate-400'}`} />
                                        </motion.div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={contentVariants}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 pt-3">
                                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* More questions prompt */}
                    <motion.div variants={itemVariants} className="mt-12 text-center">
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Still have questions? We're here to help.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Contact Our Support Team
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FaqSection;
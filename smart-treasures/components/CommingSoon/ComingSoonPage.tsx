"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, ArrowUpRight, Calendar, GraduationCap, Coffee, Users, Briefcase, BookOpen, MessagesSquare } from 'lucide-react';

// Define page types with their specific features and details
const pageConfigs = {
    default: {
        title: "Coming Soon",
        description: "We're working hard to bring you an amazing experience. This page is currently under construction and will be available soon.",
        icon: Clock,
        iconColor: "text-yellow-500",
        features: [
            "User Profiles",
            "Advanced Analytics",
            "Interactive Dashboard",
            "Community Forums",
            "Learning Resources",
            "Investment Tools"
        ],
        progress: 65
    },
    academy: {
        title: "ST Academy",
        description: "Our comprehensive tech education platform is almost ready. Soon you'll be able to access courses, tutorials, and resources to enhance your skills.",
        icon: GraduationCap,
        iconColor: "text-emerald-500",
        features: [
            "Web Development Courses",
            "Data Science Programs",
            "AI & Machine Learning",
            "Professional Certification",
            "Live Workshops",
            "Mentorship Opportunities"
        ],
        progress: 80
    },
    investment: {
        title: "Investment Portal",
        description: "Our state-of-the-art investment platform is being finalized to provide you with the best tools for financial growth and opportunity.",
        icon: Briefcase,
        iconColor: "text-yellow-500",
        features: [
            "Investment Dashboard",
            "Portfolio Analytics",
            "Market Insights",
            "Opportunity Alerts",
            "Financial Planning Tools",
            "Performance Tracking"
        ],
        progress: 75
    },
    cafe: {
        title: "Coffee Shop Network",
        description: "Discover our global network of Smart Treasures coffee shops. This interactive map and directory will be available very soon.",
        icon: Coffee,
        iconColor: "text-amber-600",
        features: [
            "Location Directory",
            "Interactive Map",
            "Special Events Calendar",
            "Member Benefits",
            "Global Network",
            "Community Updates"
        ],
        progress: 60
    },
    community: {
        title: "Community Hub",
        description: "Connect with fellow Smart Treasures members in our upcoming community platform where you can share ideas and collaborate.",
        icon: Users,
        iconColor: "text-teal-500",
        features: [
            "Member Profiles",
            "Discussion Forums",
            "Event Calendar",
            "Collaboration Tools",
            "Project Showcase",
            "Resource Sharing"
        ],
        progress: 50
    },
    education: {
        title: "Learning Center",
        description: "Our comprehensive educational resources and investment guides are being prepared to help you make informed decisions.",
        icon: BookOpen,
        iconColor: "text-pink-500",
        features: [
            "Investment Guides",
            "Video Tutorials",
            "Financial Literacy",
            "Market Analysis",
            "Expert Webinars",
            "Resource Library"
        ],
        progress: 70
    },
    events: {
        title: "Events Calendar",
        description: "Stay updated with upcoming events, workshops, and seminars across our global network of Smart Treasures locations.",
        icon: Calendar,
        iconColor: "text-purple-500",
        features: [
            "Global Event Schedule",
            "Online Webinars",
            "Networking Opportunities",
            "Workshop Registration",
            "Speaker Profiles",
            "Event Recordings"
        ],
        progress: 55
    },
    forum: {
        title: "Community Forum",
        description: "Join discussions with fellow members and industry experts in our upcoming community forum platform.",
        icon: MessagesSquare,
        iconColor: "text-blue-500",
        features: [
            "Topic Discussions",
            "Expert Q&A",
            "Knowledge Base",
            "Member Networking",
            "Collaboration Space",
            "Resource Sharing"
        ],
        progress: 45
    }
};

// Props type with default values
interface ComingSoonPageProps {
    pageType?: keyof typeof pageConfigs;
    customTitle?: string;
    customDescription?: string;
    customFeatures?: string[];
    customProgress?: number;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
    pageType = "default",
    customTitle,
    customDescription,
    customFeatures,
    customProgress
}) => {
    // Get config for this page type, or use default
    const config = pageConfigs[pageType] || pageConfigs.default;

    // Override with custom props if provided
    const title = customTitle || config.title;
    const description = customDescription || config.description;
    const features = customFeatures || config.features;
    const baseProgress = customProgress !== undefined ? customProgress : config.progress;

    // State for progress animation
    const [progress, setProgress] = useState(baseProgress - 10);

    // Icon component
    const IconComponent = config.icon;

    // Simulate progress finishing
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random();
                return newProgress > baseProgress ? baseProgress : newProgress;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [baseProgress]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 flex flex-col">
            {/* Top decorative bar */}
            <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500"></div>

            <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
                    <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
                    <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
                </div>

                {/* Grid background */}
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
                    {/* Coming soon content */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center justify-center mb-6 p-3 rounded-full bg-gradient-to-r from-yellow-50 to-teal-50 dark:from-yellow-900/20 dark:to-teal-900/20">
                            <IconComponent className={`h-8 w-8 ${config.iconColor}`} />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent">
                                {title}
                            </span>
                        </h1>

                        <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                            {description}
                        </p>
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="w-full max-w-md mb-10"
                    >
                        <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 flex justify-between">
                            <span>Development in progress</span>
                            <span>{Math.round(progress)}% Complete</span>
                        </div>
                    </motion.div>

                    {/* Action buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link
                            href="/"
                            className="px-6 py-2.5 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-all duration-300"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Link>

                        <Link
                            href="/contact"
                            className="px-6 py-2.5 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-teal-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Contact Us
                            <ArrowUpRight className="h-4 w-4 ml-2" />
                        </Link>
                    </motion.div>

                    {/* Features in development */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-100 dark:border-slate-700 w-full"
                    >
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Coming Soon</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-700"
                                >
                                    <div className="h-2 w-2 rounded-full bg-teal-500 mr-2"></div>
                                    <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
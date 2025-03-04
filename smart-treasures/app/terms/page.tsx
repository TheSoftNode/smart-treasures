"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Shield,
    Users,
    DollarSign,
    Lock,
    BarChart4,
    Clock,
    AlertTriangle,
    FileText,
    UserCheck
} from "lucide-react";

const TermsOfService = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
            icon: <FileText className="h-5 w-5 text-teal-500" />
        },
        {
            title: "2. Platform Usage",
            content: "Users must comply with the following rules:\n- Maintain active participation in the learning group\n- Follow trading signal guidelines strictly\n- Use only 1% of account balance per trade\n- Execute trades personally without forwarding signals\n- Maintain one account per person",
            icon: <UserCheck className="h-5 w-5 text-pink-500" />
        },
        {
            title: "3. Trading Rules and Volume Requirements",
            content: "- All trades must follow the provided signals and timing\n- Trading volume requirements must be met to avoid penalties\n- A 20% fee applies when trading volume is less than twice the deposit amount\n- Trading signals are provided at 14:00 and 19:00 UK time",
            icon: <BarChart4 className="h-5 w-5 text-teal-500" />
        },
        {
            title: "4. Account Security",
            content: "Users are responsible for:\n- Maintaining account security\n- Not sharing personal account information or passwords\n- Reporting any security concerns immediately\n- Following proper verification procedures",
            icon: <Lock className="h-5 w-5 text-pink-500" />
        },
        {
            title: "5. Team Structure and Responsibilities",
            content: "- Members are encouraged to form five-person teams\n- Team leaders must maintain active communication\n- Regular participation in team activities is required\n- Support and training will be provided to team members",
            icon: <Users className="h-5 w-5 text-teal-500" />
        },
        {
            title: "6. Financial Terms",
            content: "- Deposits exceeding 10,000 USDT require special approval\n- Withdrawal processes must follow platform guidelines\n- Returns are calculated based on account balance and trading volume\n- Commission structures are based on team performance and size",
            icon: <DollarSign className="h-5 w-5 text-pink-500" />
        },
        {
            title: "7. Compliance and Conduct",
            content: "Users must:\n- Comply with anti-money laundering regulations\n- Maintain professional conduct in all communications\n- Not spread false information or market manipulation\n- Follow all applicable local laws and regulations",
            icon: <Shield className="h-5 w-5 text-teal-500" />
        },
        {
            title: "8. Termination of Service",
            content: "We reserve the right to terminate service for:\n- Violation of these terms\n- Spreading negative information\n- Unauthorized multiple accounts\n- Non-compliance with team rules",
            icon: <AlertTriangle className="h-5 w-5 text-pink-500" />
        },
        {
            title: "9. Modifications to Terms",
            content: "We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of new terms.",
            icon: <Clock className="h-5 w-5 text-teal-500" />
        }
    ];

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
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-24 px-4 sm:px-6">
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
                        <div className="h-24 bg-gradient-to-r from-pink-500 via-pink-400 to-teal-400"></div>

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
                                <FileText className="h-10 w-10 text-pink-500" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 pb-6 px-6 text-center">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
                            Terms of Service
                        </h1>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Please review these terms carefully as they govern your use of Smart Treasures' platform and services.
                        </p>
                    </div>
                </motion.div>

                {/* Terms Content */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden p-6 sm:p-8"
                >
                    <div className="space-y-6">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <div className="flex items-start space-x-3">
                                    <div className={`p-2 rounded-lg ${index % 2 === 0 ? 'bg-teal-50 dark:bg-teal-900/20' : 'bg-pink-50 dark:bg-pink-900/20'} flex-shrink-0`}>
                                        {section.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                                            {section.title}
                                        </h3>
                                        <div className="mt-3 text-slate-600 dark:text-slate-400 text-sm whitespace-pre-line leading-relaxed">
                                            {section.content.split('\n').map((item, i) => (
                                                <div key={i} className={item.startsWith('-') ? "flex items-start space-x-2 my-1" : ""}>
                                                    {item.startsWith('-') && (
                                                        <ChevronRight className={`h-4 w-4 mt-0.5 flex-shrink-0 ${index % 2 === 0 ? 'text-teal-500' : 'text-pink-500'}`} />
                                                    )}
                                                    <span className={item.startsWith('-') ? "flex-1" : "block my-2"}>
                                                        {item.startsWith('-') ? item.substring(1).trim() : item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {index < sections.length - 1 && (
                                    <div className="mt-5 border-t border-slate-200 dark:border-slate-800"></div>
                                )}
                            </motion.div>
                        ))}

                        {/* Compliance Banner */}
                        <div className="mt-8 bg-gradient-to-r from-slate-100 to-slate-100 dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Shield className="h-8 w-8 text-teal-500" />
                                <div className="text-center sm:text-left">
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Smart Treasures is committed to compliance with applicable financial regulations. By continuing to use our platform, you acknowledge that you have read, understood, and agree to these Terms of Service.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                            <p className="text-xs text-slate-500">
                                Last updated: March 3, 2025
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TermsOfService;
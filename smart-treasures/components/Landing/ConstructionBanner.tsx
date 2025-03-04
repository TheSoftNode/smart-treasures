"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, InfoIcon } from 'lucide-react';

const ConstructionBanner: React.FC = () => {
    // State to track if banner is minimized (not fully dismissed)
    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    // Reset minimized state on page reload
    useEffect(() => {
        setIsMinimized(false);
    }, []);

    return (
        <div className="w-full" style={{ height: isMinimized ? '6px' : 'auto' }}>
            <motion.div
                initial={{ opacity: 0.9 }}
                animate={{
                    opacity: 1,
                    height: isMinimized ? '6px' : 'auto'
                }}
                transition={{ duration: 0.4 }}
                className="w-full border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm text-white shadow-md"
                style={{ position: 'absolute', zIndex: 1100, top: 0, left: 0, right: 0 }}
            >
                {isMinimized ? (
                    <div
                        className="h-0 w-0 hidden bg-gradient-to-r from-teal-500/70 via-slate-500/40 to-teal-500/70 cursor-pointer"
                        onClick={() => setIsMinimized(false)}
                        title="Site under construction - Click to expand"
                    />
                ) : (
                    // Expanded state with full message
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="flex items-center">
                                <span className="flex p-1 rounded-full bg-teal-500/20 mr-3">
                                    <AlertTriangle className="h-4 w-4 text-teal-400" />
                                </span>
                                <div className="font-medium text-sm text-slate-100">
                                    <span className="hidden sm:inline">This website is currently under construction. </span>
                                    Some features may not be fully functional.
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <a
                                    href="/construction-info"
                                    className="text-xs font-medium px-2 py-1 rounded-full bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 transition-colors flex items-center"
                                >
                                    <InfoIcon className="h-3 w-3 mr-1" />
                                    Details
                                </a>
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="text-xs font-medium px-2 py-1 rounded-full bg-slate-700/50 hover:bg-slate-700/80 transition-colors"
                                    aria-label="Minimize"
                                >
                                    Minimize
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ConstructionBanner;
"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTABannerProps
{
    onApplyClick: () => void;
}

const CTABanner: React.FC<CTABannerProps> = ({ onApplyClick }) =>
{
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

    return (
        <section
            ref={containerRef}
            className="relative py-16 overflow-hidden"
        >
            {/* More mature, sophisticated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptLTI0IDZjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6TTEyIDQyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2em0wLTEyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2ek0wIDI0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02djEyem0wIDEyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02djEyem0wIDEyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02djEyeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMiA2YzMuMzE0IDAgNi0yLjY4NiA2LTZIMFYwYzAgMy4zMTQgMi42ODYgNiA2IDYgMy4zMTQgMCA2LTIuNjg2IDYtNnptMjQgMGMzLjMxNCAwIDYtMi42ODYgNi02SDI0VjBjMCAzLjMxNCAyLjY4NiA2IDYgNnptMjQgMGMzLjMxNCAwIDYtMi42ODYgNi02SDQ4VjBjMCAzLjMxNCAyLjY4NiA2IDYgNnptMCAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>

                {/* Subtle accent glow */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-teal-500/30 blur-sm"></div>

                {/* Background glows for depth */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-teal-800/20 dark:bg-teal-700/10 blur-[80px]"></div>
                <div className="absolute bottom-1/3 left-1/6 w-96 h-96 rounded-full bg-slate-700/30 dark:bg-slate-800/20 blur-[100px]"></div>
            </div>

            {/* Content Container */}
            <motion.div
                className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
                style={{ y, opacity }}
            >
                <div className="max-w-4xl mx-auto text-center py-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Ready to Begin Your Tech Journey?
                    </h2>

                    <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
                        Applications are open now for our next cohort. Secure your spot today and transform your career with ST TECH ACADEMY.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link href="/academy/apply">
                            <Button
                                size="lg"
                                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 rounded-lg"
                            >
                                Apply Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom wave decoration (retained from original) */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
                <svg
                    viewBox="0 0 1200 120"
                    className="absolute bottom-0 w-full h-20 text-slate-50 dark:text-slate-900 rotate-180"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </section>
    );
};

export default CTABanner;
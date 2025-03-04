"use client";

import React, { JSX, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Handshake, Users, Award, ArrowRight } from 'lucide-react';

interface Achievement {
    icon: JSX.Element;
    iconColor: string;
    title: string;
    description: string;
    imagePath: string;
    linkUrl: string;
}

const AchievementsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

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

    // Achievement data
    const achievements: Achievement[] = [
        {
            icon: <Leaf className="h-6 w-6" />,
            iconColor: "teal",
            title: "Sustainability Commitment",
            description: "We are committed to sustainability in every aspect of our business. From sourcing eco-friendly products for our coffee shops to reducing carbon emissions in our operations, we strive to lead the way in creating a greener, more sustainable future.",
            imagePath: "/achievements/sustainability.jpg",
            linkUrl: "/achievements#sustainability"
        },
        {
            icon: <Handshake className="h-6 w-6" />,
            iconColor: "yellow",
            title: "Innovative Partnerships",
            description: "Through innovative partnerships with local and international businesses, we continue to foster a collaborative environment, contributing to local economies and providing opportunities for growth.",
            imagePath: "/achievements/patnership.jpg",
            linkUrl: "/achievements#partnerships"
        },
        {
            icon: <Users className="h-6 w-6" />,
            iconColor: "pink",
            title: "Successful Community Engagement",
            description: "Our coffee shops and bars have become vital community hubs, hosting events, seminars, and gatherings that help connect professionals, entrepreneurs, and community members.",
            imagePath: "/achievements/achievements.jpg",
            linkUrl: "/achievements#community"
        },
        {
            icon: <Award className="h-6 w-6" />,
            iconColor: "teal",
            title: "Industry Leadership",
            description: "As an industry leader, Smart Treasures Investment Group has set the standard for excellence in business operations and customer experience. Our focus on quality, innovation, and sustainability has positioned us for continued success.",
            imagePath: "/achievements/leadership.jpg",
            linkUrl: "/achievements#leadership"
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
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        Our Achievements
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-justify text-slate-600 dark:text-slate-400">
                        Over the years, we've achieved remarkable milestones, including our target of establishing over 5,200 coffee shops and 800 bars by 2025. We are proud to lead the way in sustainable growth and community building.
                    </p>
                </motion.div>

                {/* Achievements */}
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`mb-16 lg:mb-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}
                    >
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2">
                            <div className={`flex items-center mb-4 space-x-3`}>
                                <div className={`bg-${achievement.iconColor}-100 dark:bg-${achievement.iconColor}-900/20 p-2 rounded-lg`}>
                                    <div className={`text-${achievement.iconColor}-500`}>
                                        {achievement.icon}
                                    </div>
                                </div>
                                <h3 className={`text-2xl font-bold text-slate-800 dark:text-slate-200`}>
                                    {achievement.title}
                                </h3>
                            </div>

                            <p className="text-lg text-slate-600 text-justify dark:text-slate-400 mb-6">
                                {achievement.description}
                            </p>

                            <Link
                                href={achievement.linkUrl}
                                className={`inline-flex items-center text-sm font-medium text-${achievement.iconColor}-500 group`}
                            >
                                Learn more
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                {/* Decorative elements */}
                                <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full bg-${achievement.iconColor}-400/10 blur-2xl -z-10`}></div>
                                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-${achievement.iconColor}-400/10 blur-2xl -z-10`}></div>

                                {/* Image with frame */}
                                <div className={`rounded-xl overflow-hidden shadow-xl border border-${achievement.iconColor}-200 dark:border-${achievement.iconColor}-900/30`}>
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={achievement.imagePath}
                                            alt={achievement.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Badge */}
                                <div className={`absolute -bottom-3 ${index % 2 === 1 ? 'left-3' : 'right-3'} bg-white dark:bg-slate-800 px-4 py-1 rounded-full shadow-lg border border-${achievement.iconColor}-200 dark:border-${achievement.iconColor}-900/30`}>
                                    <span className={`text-xs font-medium text-${achievement.iconColor}-500`}>Smart Treasures</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center mt-8">
                    <Link
                        href="/achievements"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-shadow"
                    >
                        View All Achievements
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AchievementsSection;
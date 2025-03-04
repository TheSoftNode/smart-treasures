// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Trophy, Expand, ChevronLeft, ChevronRight, X } from 'lucide-react';

// const Achievements: React.FC = () => {
//     const [activeImage, setActiveImage] = useState<number | null>(null);

//     // Animation variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//             },
//         },
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 12,
//             },
//         },
//     };

//     // Image gallery data
//     const galleryImages = [
//         {
//             src: "/achievements/newmembers.jpeg",
//             alt: "ST Team Welcoming New Members",
//             caption: "Welcoming New Members",
//             color: "yellow"
//         },
//         {
//             src: "/achievements/stcafe1.jpeg",
//             alt: "ST Cafe",
//             caption: "ST Cafe in Action",
//             color: "teal"
//         },
//         {
//             src: "/achievements/st branch2.jpeg",
//             alt: "ST Office",
//             caption: "ST Office Space",
//             color: "pink"
//         },
//         {
//             src: "/achievements/stcafe2.jpeg",
//             alt: "ST Cafe Expansion",
//             caption: "ST Cafe Expansion",
//             color: "yellow"
//         },
//         {
//             src: "/achievements/stbranch1.jpeg",
//             alt: "ST Branch",
//             caption: "ST Ondo Branch",
//             color: "teal"
//         },
//         {
//             src: "/achievements/stcafe3.jpeg",
//             alt: "ST Team Event",
//             caption: "ST Team Event",
//             color: "pink"
//         }
//     ];

//     // Statistics to display
//     const statistics = [
//         { value: '50,000+', label: 'Members Worldwide', color: 'yellow' },
//         { value: '22', label: 'Countries Reached', color: 'teal' },
//         { value: '5,200', label: 'Coffee Shops by 2025', color: 'pink' },
//         { value: '800', label: 'Community Bars by 2025', color: 'yellow' }
//     ];

//     // Light/dark mode aware overlay styles
//     const captionStyle = "font-medium text-white z-10 relative";
//     const overlayGradient = "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl";

//     return (
//         <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-24">
//             <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={containerVariants}
//                 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//             >
//                 {/* Hero Section */}
//                 <motion.div
//                     variants={itemVariants}
//                     className="text-center mb-16"
//                 >
//                     <div className="inline-block mb-4">
//                         <div className="bg-gradient-to-r from-yellow-100 via-teal-100 to-pink-100 dark:from-yellow-900/20 dark:via-teal-900/20 dark:to-pink-900/20 p-3 rounded-xl">
//                             <Trophy className="h-10 w-10 text-gradient-to-r from-yellow-500 via-teal-500 to-pink-500" />
//                         </div>
//                     </div>
//                     <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-6">
//                         Our Achievements
//                     </h1>
//                     <p className="text-slate-700 dark:text-slate-300 text-lg max-w-3xl mx-auto">
//                         Smart Treasures Investment Group has made significant strides in creating a global community through our coffee shops, bars, and strategic investments. Our team continuously works towards our mission of fostering sustainability, growth, and community collaboration.
//                     </p>
//                 </motion.div>

//                 {/* Statistics Section */}
//                 <motion.div variants={itemVariants} className="mb-16">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//                         {statistics.map((stat, index) => (
//                             <div key={index} className="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl shadow-md text-center transform transition-transform hover:scale-105 duration-300">
//                                 <span className={`block text-3xl md:text-4xl font-bold text-${stat.color}-500 mb-2`}>{stat.value}</span>
//                                 <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{stat.label}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Image Gallery */}
//                 <motion.div variants={itemVariants}>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {galleryImages.map((image, index) => (
//                             <motion.div
//                                 key={index}
//                                 variants={itemVariants}
//                                 whileHover={{ y: -5 }}
//                                 className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
//                                 onClick={() => setActiveImage(index)}
//                             >
//                                 <div className="aspect-[4/3] relative">
//                                     <Image
//                                         src={image.src}
//                                         alt={image.alt}
//                                         layout="fill"
//                                         objectFit="cover"
//                                         className="transform transition-transform duration-500 group-hover:scale-105"
//                                     />
//                                     <div className={overlayGradient}></div>
//                                     <div className="absolute inset-0 flex items-end p-4">
//                                         <p className={captionStyle}>{image.caption}</p>
//                                     </div>
//                                     <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <Expand className={`h-4 w-4 text-${image.color}-500`} />
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Full Screen Image Modal */}
//                 {activeImage !== null && (
//                     <div className="fixed inset-0 bg-black/90 z-2000 flex flex-col items-center justify-center">
//                         <button
//                             onClick={() => setActiveImage(null)}
//                             className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
//                         >
//                             <X className="h-6 w-6" />
//                         </button>

//                         <div className="relative w-full max-w-6xl max-h-[80vh] px-4">
//                             <div className="relative aspect-[16/9]">
//                                 <Image
//                                     src={galleryImages[activeImage].src}
//                                     alt={galleryImages[activeImage].alt}
//                                     layout="fill"
//                                     objectFit="contain"
//                                 />
//                             </div>
//                             <p className="text-white text-center mt-4 text-lg font-medium">{galleryImages[activeImage].caption}</p>
//                         </div>

//                         <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4">
//                             <button
//                                 onClick={() => setActiveImage(prev => (prev === 0 ? galleryImages.length - 1 : prev! - 1))}
//                                 className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//                             >
//                                 <ChevronLeft className="h-6 w-6 text-white" />
//                             </button>
//                             <button
//                                 onClick={() => setActiveImage(prev => (prev === galleryImages.length - 1 ? 0 : prev! + 1))}
//                                 className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//                             >
//                                 <ChevronRight className="h-6 w-6 text-white" />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Timeline Section */}
//                 <motion.div variants={itemVariants} className="mt-20">
//                     <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-md">
//                         <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
//                             Our Journey So Far
//                         </h2>

//                         <div className="relative border-l-2 border-dashed border-slate-300 dark:border-slate-700 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10">
//                             <div className="relative">
//                                 <div className={`absolute w-5 h-5 bg-yellow-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
//                                 <h3 className="text-xl font-bold text-yellow-500 mb-2">2020: Foundation</h3>
//                                 <p className="text-slate-600 dark:text-slate-400">Smart Treasures was founded with a vision to create a global community of investors focused on sustainable growth and innovation.</p>
//                             </div>

//                             <div className="relative">
//                                 <div className={`absolute w-5 h-5 bg-teal-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
//                                 <h3 className="text-xl font-bold text-teal-500 mb-2">2021: First Locations</h3>
//                                 <p className="text-slate-600 dark:text-slate-400">Opened our first coffee shops and community spaces, establishing the foundation for our global network.</p>
//                             </div>

//                             <div className="relative">
//                                 <div className={`absolute w-5 h-5 bg-pink-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
//                                 <h3 className="text-xl font-bold text-pink-500 mb-2">2022: Global Expansion</h3>
//                                 <p className="text-slate-600 dark:text-slate-400">Expanded to 12 countries across 3 continents, growing our community to over 20,000 members worldwide.</p>
//                             </div>

//                             <div className="relative">
//                                 <div className={`absolute w-5 h-5 bg-yellow-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
//                                 <h3 className="text-xl font-bold text-yellow-500 mb-2">2023: Member Milestone</h3>
//                                 <p className="text-slate-600 dark:text-slate-400">Reached 50,000 community members and launched innovative educational programs and investment opportunities.</p>
//                             </div>

//                             <div className="relative">
//                                 <div className={`absolute w-5 h-5 bg-teal-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
//                                 <h3 className="text-xl font-bold text-teal-500 mb-2">2024: Innovation & Growth</h3>
//                                 <p className="text-slate-600 dark:text-slate-400">Introduced new technology platforms and expanded our coffee shop network with a focus on sustainability and community impact.</p>
//                             </div>

//                             <div className="relative">
//                                 <div className={`absolute w-5 h-5 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
//                                 <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-2">2025: Vision</h3>
//                                 <p className="text-slate-600 dark:text-slate-400">On track to achieve our goal of 5,200 coffee shops and 800 community bars worldwide, creating a truly global network of collaborative spaces.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default Achievements;

"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Expand, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Achievements: React.FC = () => {
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside the image to close the modal
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeImage !== null && modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setActiveImage(null);
            }
        };

        // Add event listener when modal is open
        if (activeImage !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeImage]);

    // Handle escape key press to close the modal
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && activeImage !== null) {
                setActiveImage(null);
            }
        };

        // Add event listener when modal is open
        if (activeImage !== null) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [activeImage]);

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

    // Modal animation variants
    const modalVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const modalContentVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        exit: {
            scale: 0.9,
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    // Image gallery data
    const galleryImages = [
        {
            src: "/achievements/newmembers.jpeg",
            alt: "ST Team Welcoming New Members",
            caption: "Welcoming New Members",
            color: "yellow"
        },
        {
            src: "/achievements/stcafe1.jpeg",
            alt: "ST Cafe",
            caption: "ST Cafe in Action",
            color: "teal"
        },
        {
            src: "/achievements/st branch2.jpeg",
            alt: "ST Office",
            caption: "ST Office Space",
            color: "pink"
        },
        {
            src: "/achievements/stcafe2.jpeg",
            alt: "ST Cafe Expansion",
            caption: "ST Cafe Expansion",
            color: "yellow"
        },
        {
            src: "/achievements/stbranch1.jpeg",
            alt: "ST Branch",
            caption: "ST Ondo Branch",
            color: "teal"
        },
        {
            src: "/achievements/stcafe3.jpeg",
            alt: "ST Team Event",
            caption: "ST Team Event",
            color: "pink"
        }
    ];

    // Statistics to display
    const statistics = [
        { value: '50,000+', label: 'Members Worldwide', color: 'yellow' },
        { value: '22', label: 'Countries Reached', color: 'teal' },
        { value: '5,200', label: 'Coffee Shops by 2025', color: 'pink' },
        { value: '800', label: 'Community Bars by 2025', color: 'yellow' }
    ];

    // Light/dark mode aware overlay styles
    const captionStyle = "font-medium text-white z-10 relative";
    const overlayGradient = "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl";

    // Prevent modal content clicks from closing the modal
    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-24">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Hero Section */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <div className="bg-gradient-to-r from-yellow-100 via-teal-100 to-pink-100 dark:from-yellow-900/20 dark:via-teal-900/20 dark:to-pink-900/20 p-3 rounded-xl">
                            <Trophy className="h-10 w-10 text-gradient-to-r from-yellow-500 via-teal-500 to-pink-500" />
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-6">
                        Our Achievements
                    </h1>
                    <p className="text-slate-700 dark:text-slate-300 text-lg max-w-3xl mx-auto">
                        Smart Treasures Investment Group has made significant strides in creating a global community through our coffee shops, bars, and strategic investments. Our team continuously works towards our mission of fostering sustainability, growth, and community collaboration.
                    </p>
                </motion.div>

                {/* Statistics Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {statistics.map((stat, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl shadow-md text-center transform transition-transform hover:scale-105 duration-300">
                                <span className={`block text-3xl md:text-4xl font-bold text-${stat.color}-500 mb-2`}>{stat.value}</span>
                                <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Image Gallery */}
                <motion.div variants={itemVariants}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                                onClick={() => setActiveImage(index)}
                            >
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className={overlayGradient}></div>
                                    <div className="absolute inset-0 flex items-end p-4">
                                        <p className={captionStyle}>{image.caption}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Expand className={`h-4 w-4 text-${image.color}-500`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Full Screen Image Modal - Improved version */}
                {activeImage !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-2000 flex items-center justify-center p-4 sm:p-6"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        onClick={() => setActiveImage(null)} // Close when clicking outside
                    >
                        <motion.div
                            ref={modalRef}
                            className="relative w-full max-w-6xl rounded-xl overflow-hidden"
                            variants={modalContentVariants}
                            onClick={handleModalContentClick} // Prevent clicks on content from closing
                        >
                            {/* Close button positioned in the corner of the image container */}
                            <button
                                onClick={() => setActiveImage(null)}
                                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors border border-white/20 text-white hover:text-white/90 transform hover:scale-105"
                                aria-label="Close modal"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative aspect-[16/9]">
                                <Image
                                    src={galleryImages[activeImage].src}
                                    alt={galleryImages[activeImage].alt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="bg-black/50"
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-black/60 backdrop-blur-sm">
                                <p className="text-white text-center text-lg font-medium">
                                    {galleryImages[activeImage].caption}
                                </p>
                            </div>

                            {/* Navigation buttons */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImage(prev => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
                                }}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors border border-white/20 text-white hover:text-white/90"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImage(prev => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
                                }}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors border border-white/20 text-white hover:text-white/90"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}

                {/* Timeline Section */}
                <motion.div variants={itemVariants} className="mt-20">
                    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
                            Our Journey So Far
                        </h2>

                        <div className="relative border-l-2 border-dashed border-slate-300 dark:border-slate-700 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10">
                            <div className="relative">
                                <div className={`absolute w-5 h-5 bg-yellow-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
                                <h3 className="text-xl font-bold text-yellow-500 mb-2">2020: Foundation</h3>
                                <p className="text-slate-600 dark:text-slate-400">Smart Treasures was founded with a vision to create a global community of investors focused on sustainable growth and innovation.</p>
                            </div>

                            <div className="relative">
                                <div className={`absolute w-5 h-5 bg-teal-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
                                <h3 className="text-xl font-bold text-teal-500 mb-2">2021: First Locations</h3>
                                <p className="text-slate-600 dark:text-slate-400">Opened our first coffee shops and community spaces, establishing the foundation for our global network.</p>
                            </div>

                            <div className="relative">
                                <div className={`absolute w-5 h-5 bg-pink-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
                                <h3 className="text-xl font-bold text-pink-500 mb-2">2022: Global Expansion</h3>
                                <p className="text-slate-600 dark:text-slate-400">Expanded to 12 countries across 3 continents, growing our community to over 20,000 members worldwide.</p>
                            </div>

                            <div className="relative">
                                <div className={`absolute w-5 h-5 bg-yellow-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
                                <h3 className="text-xl font-bold text-yellow-500 mb-2">2023: Member Milestone</h3>
                                <p className="text-slate-600 dark:text-slate-400">Reached 50,000 community members and launched innovative educational programs and investment opportunities.</p>
                            </div>

                            <div className="relative">
                                <div className={`absolute w-5 h-5 bg-teal-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
                                <h3 className="text-xl font-bold text-teal-500 mb-2">2024: Innovation & Growth</h3>
                                <p className="text-slate-600 dark:text-slate-400">Introduced new technology platforms and expanded our coffee shop network with a focus on sustainability and community impact.</p>
                            </div>

                            <div className="relative">
                                <div className={`absolute w-5 h-5 bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 rounded-full -left-[41px] md:-left-[49px] top-0`}></div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-2">2025: Vision</h3>
                                <p className="text-slate-600 dark:text-slate-400">On track to achieve our goal of 5,200 coffee shops and 800 community bars worldwide, creating a truly global network of collaborative spaces.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Achievements;
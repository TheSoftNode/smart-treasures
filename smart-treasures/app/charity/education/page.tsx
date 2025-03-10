"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, GraduationCap, ArrowRight, Mail, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EducationCharityPage = () =>
{
    const [activeTab, setActiveTab] = useState('overview');

    // Animation variants
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    // Success stories data
    const successStories = [
        {
            id: 1,
            name: "Amara",
            location: "Kenya",
            testimony: "I never thought I would be able to attend university. Thanks to the scholarship program, I'm now studying engineering and plan to help develop sustainable infrastructure in my community.",
            title: "Amara's Journey"
        },
        {
            id: 2,
            name: "Miguel",
            location: "Colombia",
            testimony: "The new school in our village has changed everything. We now have proper classrooms, books, and teachers who care about our future.",
            title: "Miguel's School"
        }
    ];

    // Gallery images data
    const galleryImages = [
        { id: 1, caption: "New School Building", location: "Ghana, 2023" },
        { id: 2, caption: "Students Learning", location: "Kenya, 2023" },
        { id: 3, caption: "Teacher Training", location: "India, 2022" },
        { id: 4, caption: "Scholarship Recipients", location: "Brazil, 2023" },
        { id: 5, caption: "New Computer Lab", location: "Mexico, 2023" },
        { id: 6, caption: "New Library", location: "Vietnam, 2022" },
        { id: 7, caption: "Science Education", location: "Peru, 2023" },
        { id: 8, caption: "Graduation Ceremony", location: "South Africa, 2023" }
    ];

    // Programs data
    const programs = [
        {
            id: 1,
            title: "School Building Program",
            icon: <GraduationCap className="h-4 w-4 text-yellow-600" />,
            description: "Constructing modern, sustainable school buildings in underserved communities with proper facilities for effective learning.",
            stat: "42 schools built in 2023",
            link: "/charity-programs/education/school-building"
        },
        {
            id: 2,
            title: "Teacher Training",
            icon: <Users className="h-4 w-4 text-yellow-600" />,
            description: "Training local educators with modern teaching methods and providing ongoing professional development.",
            stat: "1,200+ teachers trained",
            link: "/charity-programs/education/teacher-training"
        },
        {
            id: 3,
            title: "Scholarship Initiative",
            icon: <BookOpen className="h-4 w-4 text-yellow-600" />,
            description: "Providing financial support to promising students from disadvantaged backgrounds for primary through university education.",
            stat: "3,500+ scholarships awarded",
            link: "/charity-programs/education/scholarships"
        }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className="bg-white dark:bg-slate-950 min-h-screen"
        >
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/charity/education/student1.jpg"
                        alt="Education Charity Banner"
                        width={1600}
                        height={800}
                        className="object-cover w-full h-full brightness-50"
                        priority
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div variants={itemVariants} className="max-w-3xl">
                            <span className="inline-flex items-center gap-1.5 bg-yellow-500/90 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                                <Heart className="h-3.5 w-3.5" />
                                <span>Education For All Initiative</span>
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Empowering Through Education
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8">
                                Our mission is to provide quality education and resources to underprivileged children around the world, breaking the cycle of poverty through knowledge.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-6 rounded-md text-lg">
                                    Donate Now
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 rounded-md text-lg">
                                    Become a Volunteer
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content with Tabs */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={itemVariants} className="mb-12">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex rounded-lg bg-slate-200 dark:bg-slate-800 p-1">
                                <TabsTrigger
                                    value="overview"
                                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
                                >
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger
                                    value="programs"
                                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
                                >
                                    Programs
                                </TabsTrigger>
                                <TabsTrigger
                                    value="gallery"
                                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
                                >
                                    Gallery
                                </TabsTrigger>
                                <TabsTrigger
                                    value="impact"
                                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
                                >
                                    Impact
                                </TabsTrigger>
                            </TabsList>

                            {/* Overview Tab */}
                            <TabsContent value="overview" className="mt-6">
                                <div className="grid md:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Our Mission</h2>
                                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                                            Smart Treasures' Education For All initiative is dedicated to breaking down barriers to education in underserved communities worldwide. We believe that education is the most powerful tool for transforming lives and creating sustainable change.
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                                            Since 2015, we've been building schools, training teachers, providing scholarships, and delivering educational materials to communities where children lack access to quality education.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                                                <p className="text-slate-700 dark:text-slate-300">Building modern, well-equipped schools in rural and underserved areas</p>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                                                <p className="text-slate-700 dark:text-slate-300">Training and supporting qualified teachers to provide quality education</p>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                                                <p className="text-slate-700 dark:text-slate-300">Providing scholarships to talented students from disadvantaged backgrounds</p>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                                                <p className="text-slate-700 dark:text-slate-300">Developing curriculum that combines global standards with local context</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                                            <Image
                                                src="/charity/education/student2.jpg"
                                                alt="Education Mission"
                                                width={600}
                                                height={400}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="absolute -bottom-5 -left-5 w-2/3 rounded-lg overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
                                            <Image
                                                src="/charity/education/student3.jpg"
                                                alt="Students Learning"
                                                width={400}
                                                height={300}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Programs Tab */}
                            <TabsContent value="programs" className="mt-6">
                                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Our Educational Programs</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {programs.map((program, index) => (
                                        <div key={program.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
                                            <div className="relative h-48">
                                                <Image
                                                    src={`/charity/education/student${index + 4}.jpg`}
                                                    alt={program.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                                                        {program.icon}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{program.title}</h3>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                                    {program.description}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-slate-500 dark:text-slate-400">{program.stat}</span>
                                                    <Link href={program.link} className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 flex items-center gap-1 text-sm font-medium">
                                                        Learn more <ArrowRight className="h-3 w-3" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Gallery Tab */}
                            <TabsContent value="gallery" className="mt-6">
                                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Our Impact in Pictures</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {galleryImages.map((image) => (
                                        <div key={image.id} className="relative group rounded-lg overflow-hidden">
                                            <Image
                                                src={`/charity/education/student${image.id + 6}.jpg`}
                                                alt={image.caption}
                                                width={400}
                                                height={400}
                                                className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <div>
                                                    <h4 className="text-white font-medium">{image.caption}</h4>
                                                    <p className="text-white/80 text-sm">{image.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Impact Tab */}
                            <TabsContent value="impact" className="mt-6">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Measurable Impact</h2>
                                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                                            We're committed to creating real, sustainable change through education. Every project includes rigorous impact assessment to ensure we're making a difference.
                                        </p>

                                        <div className="space-y-6">
                                            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                                                        <BookOpen className="h-5 w-5 text-yellow-600" />
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Literacy Rate Improvement</h3>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                                    Communities with our schools have seen an average 35% increase in literacy rates within 3 years.
                                                </p>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-2">
                                                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                                </div>
                                                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                                                    <span>Before: 45%</span>
                                                    <span>After: 80%</span>
                                                </div>
                                            </div>

                                            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                                                        <GraduationCap className="h-5 w-5 text-yellow-600" />
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Higher Education Access</h3>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                                    Students from our programs are 4x more likely to pursue higher education compared to regional averages.
                                                </p>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-2">
                                                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                                                </div>
                                                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                                                    <span>Regional avg: 15%</span>
                                                    <span>Our programs: 65%</span>
                                                </div>
                                            </div>

                                            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                                                        <Users className="h-5 w-5 text-yellow-600" />
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Gender Equality</h3>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                                    Our programs have achieved near gender parity in enrollment, with female students making up 48% of total enrollment.
                                                </p>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-2">
                                                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '48%' }}></div>
                                                </div>
                                                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                                                    <span>Female: 48%</span>
                                                    <span>Male: 52%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Success Stories</h2>

                                        <div className="space-y-6">
                                            {/* Map through success stories */}
                                            {successStories.map((story, index) => (
                                                <div key={story.id} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
                                                    <div className="relative h-48">
                                                        <Image
                                                            src={`/charity/education/student${index + 15}.jpg`}
                                                            alt={`${story.name} from ${story.location}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                                            <div className="p-4">
                                                                <h3 className="text-white text-lg font-semibold">{story.title}</h3>
                                                                <p className="text-white/80 text-sm">{story.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                                            "{story.testimony}"
                                                        </p>
                                                        <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                                                            — {story.name}, Scholarship Recipient
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200 dark:bg-grid-slate-700/20 bg-[size:24px_24px]"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center gap-1.5 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                <Heart className="h-3.5 w-3.5" />
                                <span>Join Our Cause</span>
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                                Together, We Can Make Education Accessible to All
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                                Your support can help us reach more children and communities in need. Donate, volunteer, or spread the word about our mission.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 rounded-md">
                                    <DollarSign className="h-5 w-5 mr-2" />
                                    Donate Now
                                </Button>
                                <Button variant="outline" className="border-yellow-500 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 px-8 py-6 rounded-md">
                                    <Mail className="h-5 w-5 mr-2" />
                                    Contact Us
                                </Button>
                                <Button variant="ghost" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-6 rounded-md">
                                    <Calendar className="h-5 w-5 mr-2" />
                                    Upcoming Events
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default EducationCharityPage;
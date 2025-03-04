"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";

const GlobalMap = dynamic(() => import("@/components/Map/GlobalMap"), { ssr: false });
import { motion, Variants } from "framer-motion";
import {
    SendIcon,
    MapPinIcon,
    PhoneIcon,
    MailIcon,
    CheckCircleIcon
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import GlobalMap from "@/components/Map/GlobalMap";

// TypeScript interface for form data
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}



const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Handle form submission (would connect to your actual API)
        setIsSubmitted(true);
        setIsLoading(false);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
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
                className="max-w-6xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-10">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Have questions about our investment education programs or community spaces? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Contact Info Section */}
                    <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Contact Information
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded-lg">
                                        <MapPinIcon className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-700 dark:text-slate-300">Address</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            123 Innovation Drive<br />
                                            Global City, 10001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="bg-teal-100 dark:bg-teal-900/20 p-2 rounded-lg">
                                        <PhoneIcon className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-700 dark:text-slate-300">Phone</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="bg-pink-100 dark:bg-pink-900/20 p-2 rounded-lg">
                                        <MailIcon className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-700 dark:text-slate-300">Email</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            contact@smarttreasures.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-800">
                                <h3 className="font-medium text-slate-700 dark:text-slate-300 mb-3">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors duration-200"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebook className="h-5 w-5 text-yellow-500" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors duration-200"
                                        aria-label="Twitter"
                                    >
                                        <FaTwitter className="h-5 w-5 text-yellow-500" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors duration-200"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram className="h-5 w-5 text-yellow-500" />
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors duration-200"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin className="h-5 w-5 text-yellow-500" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Business Hours
                            </h2>
                            <ul className="space-y-2">
                                <li className="flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">Monday - Friday:</span>
                                    <span className="font-medium text-slate-700 dark:text-slate-300">9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">Saturday:</span>
                                    <span className="font-medium text-slate-700 dark:text-slate-300">10:00 AM - 4:00 PM</span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">Sunday:</span>
                                    <span className="font-medium text-slate-700 dark:text-slate-300">Closed</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div variants={itemVariants} className="md:col-span-3">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                                Send Us a Message
                            </h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-8"
                                >
                                    <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full mb-4">
                                        <CheckCircleIcon className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                                        Thank you for contacting us. We'll get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 text-slate-800 dark:text-slate-200"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 text-slate-800 dark:text-slate-200"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 text-slate-800 dark:text-slate-200"
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 text-slate-800 dark:text-slate-200"
                                            rows={4}
                                            placeholder="Tell us how we can help..."
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`w-full py-3 px-4 rounded-lg bg-teal-500 hover:bg-teal-700 text-white font-medium flex items-center justify-center transition-all duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <SendIcon className="h-5 w-5 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div variants={itemVariants} className="mt-8">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
                        {/* Import and use GlobalMap component here */}
                        <GlobalMap />
                    </div>
                </motion.div>

                {/* Map - Optional */}
                {/* <motion.div variants={itemVariants} className="mt-8">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
                        <div className="h-60 md:h-80 w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                            <p className="text-slate-600 dark:text-slate-400 text-center p-4">
                                
                                <span className="block mb-2 text-slate-700 dark:text-slate-300 font-medium">Interactive Map</span>
                                This is where an interactive map would go in a production environment.
                            </p>
                        </div>
                    </div>
                </motion.div> */}
            </motion.div>
        </div>
    );
};

export default ContactUs;
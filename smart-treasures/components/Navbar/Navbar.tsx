"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Briefcase,
    BookOpen,
    Users,
    Coffee,
    Award,
    GraduationCap,
    LogIn,
    UserCircle,
    Bell,
    LogOut,
    Settings
} from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "../Themes/ThemeToggle";
import AuthModal from "../Auth/AuthModal";
import Image from 'next/image';

const NavBar = () => {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAuthDropdown, setShowAuthDropdown] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const pathname = usePathname();

    // Track expanded menu items
    const [expandedMenus, setExpandedMenus] = useState({
        about: false,
        learning: false,
        ventures: false
    });

    // Store scroll position
    const scrollPos = useRef(0);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            // Save current scroll position
            scrollPos.current = window.scrollY;

            // Add styles to lock scroll
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPos.current}px`;
            document.body.style.width = '100%';
        } else {
            // Restore scroll behavior and position
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';

            // Restore scroll position
            window.scrollTo(0, scrollPos.current);
        }
    }, [mobileMenuOpen]);

    // Theme switcher needs to wait for mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Toggle submenu expansion with animation support
    const toggleExpanded = (menu: 'about' | 'learning' | 'ventures') => {
        setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    // Animation variants
    const navContainerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98]
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.04, 0.62, 0.23, 0.98]
            }
        },
    };

    // Submenu animation variants
    const subMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98]
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.4,
                ease: [0.04, 0.62, 0.23, 0.98]
            }
        }
    };

    // Dropdown icon animation
    const iconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    return (
        <>
            {/* Auth Modal */}
            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                onLogin={() => setIsLoggedIn(true)}
            />

            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-1000 transition-all duration-300 font-sans",
                    scrolled
                        ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md"
                        : "bg-white dark:bg-slate-950"
                )}
            >
                {/* Gradient top border */}
                <div className="h-0.5 w-full bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={navContainerVariants}
                        className="flex items-center justify-between py-4"
                    >
                        {/* Logo */}
                        {/* <motion.div variants={navItemVariants} className="flex items-center space-x-2">
                            <Link href="/" className="flex items-center">
                                <div className="h-10 w-10 bg-yellow-500 rounded-md flex items-center justify-center">
                                    <span className="text-lg font-bold text-slate-800">ST</span>
                                </div>
                                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 dark:from-yellow-400 dark:via-teal-400 dark:to-pink-400 bg-clip-text text-transparent">
                                    Smart Treasures
                                </span>
                            </Link>
                        </motion.div> */}

                        <motion.div variants={navItemVariants} className="flex items-center space-x-2">
                            <Link href="/" className="flex items-center">
                                <div className="h-10 w-10  rounded-md flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/logo/icon.png"
                                        alt="Smart Treasures Logo"
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 dark:from-yellow-400 dark:via-teal-400 dark:to-pink-400 bg-clip-text text-transparent">
                                    Smart Treasures
                                </span>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <motion.div
                            variants={navItemVariants}
                            className="hidden lg:flex items-center space-x-1"
                        >
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    "font-medium bg-transparent",
                                                    pathname === "/" && "text-yellow-500 dark:text-yellow-400"
                                                )}
                                            >
                                                Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                "font-medium bg-transparent",
                                                pathname === "/about" && "text-teal-500  dark:text-teal-400"
                                            )}
                                        >
                                            About
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {/* About content remains the same */}
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                                                            href="/about"
                                                        >
                                                            <Users className="h-6 w-6 text-teal-500 mb-2" />
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                About Us
                                                            </div>
                                                            <p className="text-sm leading-tight text-slate-600 dark:text-slate-300">
                                                                Learn about our mission, vision, and the team behind Smart Treasures Investment Group.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <Link href="/mission" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <Award className="h-4 w-4 text-yellow-500" />
                                                                <div className="text-sm font-medium leading-none">Our Mission</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Our vision for sustainability and growth
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/achievements" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <Award className="h-4 w-4 text-pink-500" />
                                                                <div className="text-sm font-medium leading-none">Achievements</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Our milestones and success stories
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/leadership" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <Users className="h-4 w-4 text-teal-500" />
                                                                <div className="text-sm font-medium leading-none">Leadership Team</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Meet the visionaries behind Smart Treasures
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Other Desktop Navigation Items remain the same */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                "font-medium bg-transparent",
                                                (pathname === "/investment-education" || pathname === "/tech-tutorials") &&
                                                "text-pink-500 dark:text-pink-400"
                                            )}
                                        >
                                            Learning
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                                <li>
                                                    <Link href="/investment-education" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <Briefcase className="h-4 w-4 text-yellow-500" />
                                                                <div className="text-sm font-medium leading-none">Investment Education</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Learn about investment strategies and financial literacy
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/academy" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <GraduationCap className="h-4 w-4 text-teal-500" />
                                                                <div className="text-sm font-medium leading-none">ST Tech Academy</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Software engineering and other technology courses
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li className="col-span-2">
                                                    <Link href="/webinars" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <BookOpen className="h-4 w-4 text-pink-500" />
                                                                <div className="text-sm font-medium leading-none">Upcoming Webinars</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Join our live educational sessions and workshops
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                "font-medium bg-transparent",
                                                (pathname === "/coffee-shops" || pathname === "/community-bars") &&
                                                "text-yellow-500 dark:text-yellow-400"
                                            )}
                                        >
                                            Ventures
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                                <li>
                                                    <Link href="/coffee-shops" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <Coffee className="h-4 w-4 text-teal-500" />
                                                                <div className="text-sm font-medium leading-none">Coffee Shops</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Our global network of 5,200 coffee shops (by 2025)
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/community-bars" legacyBehavior passHref>
                                                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                                                            <div className="flex items-center space-x-2">
                                                                <Users className="h-4 w-4 text-pink-500" />
                                                                <div className="text-sm font-medium leading-none">Community Bars</div>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                                                                Our 800 bars designed for networking and collaboration
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <Link href="/join-us" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    "font-medium bg-transparent",
                                                    pathname === "/join-us" && "text-yellow-500 dark:text-yellow-400"
                                                )}
                                            >
                                                Join Us
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </motion.div>

                        {/* Theme Switch + Auth + Mobile Menu Trigger */}
                        <motion.div
                            variants={navItemVariants}
                            className="flex items-center space-x-4"
                        >
                            {/* Theme Switcher */}
                            {mounted && <ThemeToggle />}

                            {/* Authentication Section - Desktop */}
                            <div className="hidden md:flex items-center space-x-3">
                                {isLoggedIn ? (
                                    <>
                                        {/* Notification Icon */}
                                        <Button variant="ghost" size="icon" className="relative rounded-full">
                                            <Bell className="h-5 w-5 text-slate-500 hover:text-yellow-500" />
                                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-pink-500"></span>
                                        </Button>

                                        {/* User Profile Dropdown */}
                                        <DropdownMenu open={showAuthDropdown} onOpenChange={setShowAuthDropdown}>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="rounded-full border-2 border-gradient-to-r from-yellow-400 via-teal-500 to-pink-500">
                                                    <UserCircle className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-56">
                                                <div className="flex items-center justify-start gap-2 p-2">
                                                    <div className="rounded-full bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 p-1">
                                                        <UserCircle className="h-8 w-8 text-white" />
                                                    </div>
                                                    <div className="flex flex-col space-y-1">
                                                        <p className="text-sm font-medium">John Doe</p>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400">john.doe@example.com</p>
                                                    </div>
                                                </div>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <UserCircle className="mr-2 h-4 w-4 text-teal-500" />
                                                    <span>My Profile</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <BookOpen className="mr-2 h-4 w-4 text-yellow-500" />
                                                    <span>My Courses</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Settings className="mr-2 h-4 w-4 text-pink-500" />
                                                    <span>Settings</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="cursor-pointer text-red-500 focus:text-red-500"
                                                    onClick={() => setIsLoggedIn(false)}
                                                >
                                                    <LogOut className="mr-2 h-4 w-4" />
                                                    <span>Log out</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium"
                                            onClick={() => setShowAuthModal(true)}
                                        >
                                            Sign Up
                                        </Button>
                                        <Button
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium"
                                            size="sm"
                                            onClick={() => setShowAuthModal(true)}
                                        >
                                            <LogIn className="mr-2 h-4 w-4" />
                                            Log In
                                        </Button>
                                    </>
                                )}
                            </div>

                            {/* Mobile Menu Toggle Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                                ) : (
                                    <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                                )}
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mobile Menu - Enhanced with animation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                            className="lg:hidden fixed inset-0 top-[73px] bg-white dark:bg-slate-900 z-40 overflow-y-auto"
                        >
                            <div className="flex flex-col py-6 px-4 space-y-4">
                                <Link
                                    href="/"
                                    className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-yellow-500 dark:hover:text-yellow-400 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>

                                {/* About Dropdown with Animation */}
                                <div className="border-b border-slate-200 dark:border-slate-700 py-2">
                                    <button
                                        className="flex items-center justify-between w-full text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400"
                                        onClick={() => toggleExpanded("about")}
                                    >
                                        <span>About</span>
                                        <motion.div
                                            animate={expandedMenus.about ? "open" : "closed"}
                                            variants={iconVariants}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="h-5 w-5" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {expandedMenus.about && (
                                            <motion.div
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={subMenuVariants}
                                                className="overflow-hidden mt-2 pl-4 space-y-2"
                                            >
                                                <Link
                                                    href="/about"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    About Us
                                                </Link>
                                                <Link
                                                    href="/mission"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Our Mission
                                                </Link>
                                                <Link
                                                    href="/achievements"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Achievements
                                                </Link>
                                                <Link
                                                    href="/leadership"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Leadership Team
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Learning Dropdown with Animation */}
                                <div className="border-b border-slate-200 dark:border-slate-700 py-2">
                                    <button
                                        className="flex items-center justify-between w-full text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-pink-500 dark:hover:text-pink-400"
                                        onClick={() => toggleExpanded("learning")}
                                    >
                                        <span>Learning</span>
                                        <motion.div
                                            animate={expandedMenus.learning ? "open" : "closed"}
                                            variants={iconVariants}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="h-5 w-5" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {expandedMenus.learning && (
                                            <motion.div
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={subMenuVariants}
                                                className="overflow-hidden mt-2 pl-4 space-y-2"
                                            >
                                                <Link
                                                    href="/investment-education"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Investment Education
                                                </Link>
                                                <Link
                                                    href="/academy"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Tech Tutorials
                                                </Link>
                                                <Link
                                                    href="/webinars"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Upcoming Webinars
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Ventures Dropdown with Animation */}
                                <div className="border-b border-slate-200 dark:border-slate-700 py-2">
                                    <button
                                        className="flex items-center justify-between w-full text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-yellow-500 dark:hover:text-yellow-400"
                                        onClick={() => toggleExpanded("ventures")}
                                    >
                                        <span>Ventures</span>
                                        <motion.div
                                            animate={expandedMenus.ventures ? "open" : "closed"}
                                            variants={iconVariants}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="h-5 w-5" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {expandedMenus.ventures && (
                                            <motion.div
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={subMenuVariants}
                                                className="overflow-hidden mt-2 pl-4 space-y-2"
                                            >
                                                <Link
                                                    href="/coffee-shops"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Coffee Shops
                                                </Link>
                                                <Link
                                                    href="/community-bars"
                                                    className="block text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    Community Bars
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link
                                    href="/join-us"
                                    className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-yellow-500 dark:hover:text-yellow-400 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Join Us
                                </Link>

                                {/* Authentication in Mobile Menu - Enhanced with styling */}
                                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-700">
                                    {isLoggedIn ? (
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 rounded-xl shadow-sm">
                                                <div className="rounded-full bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 p-1">
                                                    <UserCircle className="h-8 w-8 text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-slate-800 dark:text-slate-200">John Doe</p>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400">john.doe@example.com</p>
                                                </div>
                                            </div>
                                            <Link
                                                href="/profile"
                                                className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 py-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <UserCircle className="h-5 w-5 text-teal-500" />
                                                <span>My Profile</span>
                                            </Link>
                                            <Link
                                                href="/my-courses"
                                                className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 py-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <BookOpen className="h-5 w-5 text-yellow-500" />
                                                <span>My Courses</span>
                                            </Link>
                                            <Link
                                                href="/settings"
                                                className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 py-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <Settings className="h-5 w-5 text-pink-500" />
                                                <span>Settings</span>
                                            </Link>
                                            <button
                                                className="flex items-center space-x-2 text-red-500 hover:text-red-600 py-2 w-full text-left"
                                                onClick={() => {
                                                    setIsLoggedIn(false);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                <LogOut className="h-5 w-5" />
                                                <span>Log out</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col space-y-3">
                                            <Button
                                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium w-full py-6"
                                                onClick={() => {
                                                    setShowAuthModal(true);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                <LogIn className="mr-2 h-5 w-5" />
                                                Log In
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-teal-500 text-slate-800 dark:text-slate-200 font-medium w-full py-6"
                                                onClick={() => {
                                                    setShowAuthModal(true);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                Sign Up
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default NavBar;
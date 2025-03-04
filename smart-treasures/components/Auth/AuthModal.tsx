"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, Eye, EyeOff, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: () => void;
}

const AuthModal = ({ isOpen, onClose, onLogin }: AuthModalProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState("login");

    // Form states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;

            // Add styles to prevent scrolling but maintain position
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Restore scroll position when modal is closed
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        return () => {
            // Cleanup when component unmounts
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle authentication logic
        console.log("Login attempt with:", email, password);
        onLogin();
        onClose();
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle registration logic
        console.log("Signup attempt with:", name, email, password);
        onLogin();
        onClose();
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop - separate from the content positioning */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={overlayVariants}
                        onClick={onClose}
                    />

                    {/* Modal container with overflow auto */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center pt-16 pb-5 px-4 overflow-auto"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={overlayVariants}
                        onClick={onClose}
                    >
                        <motion.div
                            className="w-full max-w-md my-auto"
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card className="border-2 border-yellow-400/20 shadow-xl dark:bg-slate-950 dark:border-yellow-500/30">
                                <CardHeader className="relative pb-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-4 top-4"
                                        onClick={onClose}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                    <CardTitle className="text-2xl text-center">
                                        Welcome to Smart Treasures
                                    </CardTitle>
                                    <CardDescription className="text-center">
                                        {activeTab === "login"
                                            ? "Sign in to access your account and programs"
                                            : "Join our community of learners and investors"}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <Tabs
                                        defaultValue="login"
                                        value={activeTab}
                                        onValueChange={setActiveTab}
                                        className="w-full"
                                    >
                                        <TabsList className="grid w-full grid-cols-2 mb-6">
                                            <TabsTrigger value="login">Login</TabsTrigger>
                                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="login">
                                            <form onSubmit={handleLogin}>
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Email</Label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                                            <Input
                                                                id="email"
                                                                placeholder="your.email@example.com"
                                                                type="email"
                                                                className="pl-10"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <Label htmlFor="password">Password</Label>
                                                            <Button
                                                                variant="link"
                                                                className="px-0 text-xs text-yellow-600 dark:text-yellow-400"
                                                            >
                                                                Forgot password?
                                                            </Button>
                                                        </div>
                                                        <div className="relative">
                                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                                            <Input
                                                                id="password"
                                                                type={showPassword ? "text" : "password"}
                                                                className="pl-10 pr-10"
                                                                placeholder="••••••••"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                required
                                                            />
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                className="absolute right-0 top-0 h-full px-3"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                            >
                                                                {showPassword ? (
                                                                    <EyeOff className="h-4 w-4 text-slate-500" />
                                                                ) : (
                                                                    <Eye className="h-4 w-4 text-slate-500" />
                                                                )}
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    <Button
                                                        type="submit"
                                                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 dark:text-slate-950"
                                                    >
                                                        Sign In
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </TabsContent>

                                        <TabsContent value="signup">
                                            <form onSubmit={handleSignup}>
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="name">Full Name</Label>
                                                        <div className="relative">
                                                            <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                                            <Input
                                                                id="name"
                                                                placeholder="John Doe"
                                                                className="pl-10"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="signup-email">Email</Label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                                            <Input
                                                                id="signup-email"
                                                                placeholder="your.email@example.com"
                                                                type="email"
                                                                className="pl-10"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="signup-password">Password</Label>
                                                        <div className="relative">
                                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                                            <Input
                                                                id="signup-password"
                                                                type={showPassword ? "text" : "password"}
                                                                className="pl-10 pr-10"
                                                                placeholder="••••••••"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                required
                                                            />
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                className="absolute right-0 top-0 h-full px-3"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                            >
                                                                {showPassword ? (
                                                                    <EyeOff className="h-4 w-4 text-slate-500" />
                                                                ) : (
                                                                    <Eye className="h-4 w-4 text-slate-500" />
                                                                )}
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    <Button
                                                        type="submit"
                                                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 dark:text-slate-950"
                                                    >
                                                        Create Account
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-4 border-t pt-4">
                                    <div className="relative w-full">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                                        </div>
                                        <div className="relative flex justify-center text-xs">
                                            <span className="bg-white dark:bg-slate-950 px-2 text-slate-500 dark:text-slate-400">
                                                or continue with
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Button variant="outline" className="font-medium">
                                            Google
                                        </Button>
                                        <Button variant="outline" className="font-medium">
                                            Microsoft
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
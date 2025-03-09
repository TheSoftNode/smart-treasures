// File: components/academy/Testimonials.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp Inc.",
      text: "ST TECH ACADEMY completely transformed my career trajectory. I went from struggling to find direction to landing a job as a frontend developer at a top tech company. The project-based curriculum was exactly what I needed to build my confidence and skills."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full Stack Engineer",
      company: "Startup Innovate",
      text: "The comprehensive curriculum at ST TECH ACADEMY prepared me for real-world development challenges. The mentors were incredible, and the peer learning environment pushed me to excel. I'm now confidently building full-stack applications and leading development teams."
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Data Scientist",
      company: "DataVision Analytics",
      text: "I came to ST TECH ACADEMY with a business background and left as a confident data scientist. The curriculum's progression from fundamentals to advanced concepts was perfectly paced, and the supportive community made the intense learning journey enjoyable."
    },
    {
      id: 4,
      name: "Jamal Washington",
      role: "Backend Developer",
      company: "Cloud Solutions",
      text: "The foundation I gained in low-level programming and systems gave me an edge that many other bootcamp graduates don't have. ST TECH ACADEMY's approach to teaching both theoretical concepts and practical skills created the perfect learning balance."
    },
  ];

  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Hear what our graduates have to say about their journey
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 p-6 md:p-10 relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-500">
                <Quote className="h-6 w-6" />
              </div>
              
              {/* Testimonial slider */}
              <div className="relative overflow-hidden min-h-[200px] md:min-h-[160px]">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: index === activeIndex ? 1 : 0,
                      x: index === activeIndex ? 0 : 20,
                      position: index === activeIndex ? 'relative' : 'absolute'
                    }}
                    transition={{ duration: 0.5 }}
                    className={index === activeIndex ? 'block' : 'hidden'}
                  >
                    <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-teal-200 dark:border-teal-900">
                        {testimonial.avatar ? (
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        ) : null}
                        <AvatarFallback className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Controls */}
              <div className="flex justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === activeIndex 
                          ? 'bg-teal-500' 
                          : 'bg-slate-300 dark:bg-slate-600 hover:bg-teal-300 dark:hover:bg-teal-700'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={prevTestimonial}
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
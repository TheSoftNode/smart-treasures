// File: app/academy/apply/page.tsx
"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Clock, Upload, Check, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card,
  CardContent, 
} from "@/components/ui/card";
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ApplicationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseParam = searchParams.get('course');

  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    courseSelection: courseParam || '',
    isMember: '',
    crexId: '',
    crexTelegram: '',
    telegramUsername: '',
    resume: null as File | null,
    additionalInfo: '',
  });

  // State for form submission
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Course options
  const courseOptions = [
    { id: 'frontend', label: 'Frontend Development' },
    { id: 'backend', label: 'Backend Development' },
    { id: 'foundation', label: 'Programming Foundations' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'graphics', label: 'Graphics & Animation' },
    { id: 'web3', label: 'Web3 Development' },
    { id: 'other', label: 'Other' },
  ];

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  // Function to handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log form data (in real app, would send to server)
      console.log('Form submitted:', formData);
      
      // Show success state
      setFormStatus('success');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage('There was an error submitting your application. Please try again.');
    }
  };

  // Reset form for a new submission
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      courseSelection: '',
      isMember: '',
      crexId: '',
      crexTelegram: '',
      telegramUsername: '',
      resume: null,
      additionalInfo: '',
    });
    setFormStatus('idle');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // If form was submitted successfully, show success message
  if (formStatus === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"
        >
          <Link 
            href="/academy" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Academy
          </Link>
          
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
            <CardContent className="pt-12 pb-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-green-500">
                <Check className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
                Thank you for applying to ST TECH ACADEMY. We've received your application and will contact you shortly regarding the next steps in the admission process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleReset}
                  className="bg-gradient-to-r from-teal-500 to-emerald-600"
                >
                  Submit Another Application
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => router.push('/academy')}
                >
                  Return to Academy
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-16">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"
      >
        <Link 
          href="/academy" 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Academy
        </Link>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-700">
            <h1 className="text-2xl md:text-3xl font-bold">Apply to ST TECH ACADEMY</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Complete the form below to start your journey to becoming a tech professional.
            </p>
          </div>
        
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-6">
                {/* Personal Information Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="+1 (234) 567-8901"
                          required
                        />
                      </div>
                    </div>

                    {/* Date of Birth */}
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">
                        Date of Birth <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {/* Gender */}
                    <div className="space-y-2">
                      <Label htmlFor="gender">
                        Gender <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) => handleSelectChange('gender', value)}
                        required
                      >
                        <SelectTrigger id="gender" className="w-full">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Address */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">
                        Address <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="123 Main St, City, Country"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Information Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                    Course Selection
                  </h2>
                  
                  {/* Course Selection */}
                  <div className="space-y-3">
                    <Label htmlFor="courseSelection">
                      Which course are you interested in? <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={formData.courseSelection}
                      onValueChange={(value) => handleSelectChange('courseSelection', value)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
                      required
                    >
                      {courseOptions.map((course) => (
                        <div key={course.id} className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                          <RadioGroupItem value={course.id} id={`course-${course.id}`} />
                          <Label htmlFor={`course-${course.id}`} className="cursor-pointer flex-1">{course.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                {/* Membership Information Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                    Additional Information
                  </h2>
                  
                  {/* ST Team Member */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="isMember">
                        Are you a Member of ST Team?
                      </Label>
                      <Select
                        value={formData.isMember}
                        onValueChange={(value) => handleSelectChange('isMember', value)}
                      >
                        <SelectTrigger id="isMember" className="w-full">
                          <SelectValue placeholder="Select One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Conditional fields for ST Team members */}
                    {formData.isMember === 'yes' && (
                      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                        <h3 className="text-sm font-semibold mb-4">ST Team Member Information</h3>
                        
                        {/* CREX ID */}
                        <div className="mb-4 space-y-2">
                          <Label htmlFor="crexId">
                            Your CREX ID <span className="text-red-500">*</span>
                            <span className="text-xs text-slate-500 ml-1">(Compulsory for CREX members)</span>
                          </Label>
                          <Input
                            id="crexId"
                            name="crexId"
                            value={formData.crexId}
                            onChange={handleInputChange}
                            required={formData.isMember === 'yes'}
                          />
                        </div>
                        
                        {/* CREX Telegram */}
                        <div className="space-y-2">
                          <Label htmlFor="crexTelegram">
                            Your CREX Telegram username <span className="text-red-500">*</span>
                            <span className="text-xs text-slate-500 ml-1">(Compulsory for CREX members)</span>
                          </Label>
                          <Input
                            id="crexTelegram"
                            name="crexTelegram"
                            value={formData.crexTelegram}
                            onChange={handleInputChange}
                            placeholder="@username"
                            required={formData.isMember === 'yes'}
                          />
                        </div>
                      </div>
                    )}

                    {/* Telegram username - for all applicants */}
                    <div className="space-y-2">
                      <Label htmlFor="telegramUsername">
                        If No, Provide your Telegram username
                      </Label>
                      <Input
                        id="telegramUsername"
                        name="telegramUsername"
                        value={formData.telegramUsername}
                        onChange={handleInputChange}
                        placeholder="@username"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="resume">
                        Upload CV <span className="text-xs text-slate-500 ml-1">(PDF, document, or image. Max 10 MB)</span>
                      </Label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-md">
                        <div className="space-y-2 text-center">
                          <Upload className="mx-auto h-10 w-10 text-slate-400" />
                          <div className="flex text-sm text-slate-600 dark:text-slate-400">
                            <label
                              htmlFor="resume-upload"
                              className="relative cursor-pointer bg-white dark:bg-slate-800 rounded-md font-medium text-teal-500 hover:text-teal-400 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input
                                id="resume-upload"
                                name="resume"
                                type="file"
                                onChange={handleFileChange}
                                className="sr-only"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {formData.resume ? formData.resume.name : "PDF, DOC, DOCX, JPG or PNG up to 10MB"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">
                        Additional Information
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Tell us anything else you think would be helpful for your application..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                  size="lg"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Application
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
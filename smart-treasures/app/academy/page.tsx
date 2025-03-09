// import ComingSoonPage from "@/components/CommingSoon/ComingSoonPage";

// export default function AcademyPage() {
//     return <ComingSoonPage pageType="academy" />;
// }

// "use client"

// import React, { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Link from 'next/link';
// import { 
//   GraduationCap, 
//   ArrowRight, 
//   Code, 
//   LineChart, 
//   Database, 
//   Monitor, 
//   Cpu, 
//   Calendar, 
//   Clock, 
//   FileText, 
//   Check, 
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar as CalendarIcon,
//   Users,
//   Upload
// } from 'lucide-react';

// const AcademyPage = () => {
//   const heroRef = useRef(null);
//   const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
//   const formRef = useRef(null);
//   const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

//   // State for form fields
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     dateOfBirth: '',
//     gender: '',
//     address: '',
//     courseSelection: '',
//     isMember: '',
//     crexId: '',
//     crexTelegram: '',
//     telegramUsername: '',
//     resume: null as File | null
//   });

//   // State for form submission
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');

//   // Function to handle input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//       const { name, value, type } = e.target;

//       if (type === 'file' && e.target instanceof HTMLInputElement) {
//         const { files } = e.target;
//         setFormData({
//           ...formData,
//           [name]: files ? files[0] : null
//         });
//       } else {
//         setFormData({
//           ...formData,
//           [name]: value
//         });
//       }
//     };

//   // Function to handle radio button changes
//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       courseSelection: e.target.value
//     });
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError('');

//     try {
//       // Normally, we would send the data to the server here
//       // For now, we'll simulate a successful submission
//       await new Promise(resolve => setTimeout(resolve, 1500));

//       console.log('Form submitted:', formData);
//       setSubmitSuccess(true);

//       // Reset form after successful submission
//       setFormData({
//         fullName: '',
//         email: '',
//         phone: '',
//         dateOfBirth: '',
//         gender: '',
//         address: '',
//         courseSelection: '',
//         isMember: '',
//         crexId: '',
//         crexTelegram: '',
//         telegramUsername: '',
//         resume: null
//       });

//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitError('There was an error submitting your application. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   };

//   // Course data
//   const courses = [
//     {
//       id: 'frontend',
//       title: 'Frontend Development',
//       shortTitle: 'Frontend Dev',
//       description: 'React, Next.js, UI/UX',
//       icon: Code,
//       iconColor: 'text-yellow-500',
//       bgColor: 'bg-yellow-100',
//       darkBgColor: 'dark:bg-yellow-900/30',
//     },
//     {
//       id: 'backend',
//       title: 'Backend Development',
//       shortTitle: 'Backend Dev',
//       description: 'Node.js, Python, APIs',
//       icon: Database,
//       iconColor: 'text-teal-500',
//       bgColor: 'bg-teal-100',
//       darkBgColor: 'dark:bg-teal-900/30',
//     },
//     {
//       id: 'data-science',
//       title: 'Data Science',
//       shortTitle: 'Data Science',
//       description: 'Python, ML, Analytics',
//       icon: LineChart,
//       iconColor: 'text-pink-500',
//       bgColor: 'bg-pink-100',
//       darkBgColor: 'dark:bg-pink-900/30',
//     },
//     {
//       id: 'graphics',
//       title: 'Graphics & Animation',
//       shortTitle: 'Graphics',
//       description: '3D, Motion, Design',
//       icon: Monitor,
//       iconColor: 'text-purple-500',
//       bgColor: 'bg-purple-100',
//       darkBgColor: 'dark:bg-purple-900/30',
//     },
//     {
//       id: 'web3',
//       title: 'Web3 Development',
//       shortTitle: 'Web3 Dev',
//       description: 'Blockchain, Smart Contracts',
//       icon: Cpu,
//       iconColor: 'text-blue-500',
//       bgColor: 'bg-blue-100',
//       darkBgColor: 'dark:bg-blue-900/30',
//     },
//   ];

//   // Program highlights
//   const highlights = [
//     {
//       icon: Calendar,
//       title: '11-Month Comprehensive Curriculum',
//       description: 'Starting with foundations, progressing to specialization in your chosen field'
//     },
//     {
//       icon: Users,
//       title: 'Peer Learning Sessions',
//       description: 'Weekly collaborative sessions every Friday at 5 PM UK Time'
//     },
//     {
//       icon: Check,
//       title: 'Hands-on Projects',
//       description: '90% of your grade comes from practical projects, not just theory'
//     },
//     {
//       icon: FileText,
//       title: 'Industry-Ready Skills',
//       description: 'Learn the exact skills employers are looking for in tech professionals'
//     },
//     {
//       icon: Clock,
//       title: 'Expert Mentorship',
//       description: 'Access to experienced mentors and instructors throughout your journey'
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 pt-20 pb-16 md:pt-28 md:pb-24">
//         {/* Background Decorations */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
//           <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
//           <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
//         </div>

//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             ref={heroRef}
//             initial="hidden"
//             animate={isHeroInView ? "visible" : "hidden"}
//             variants={containerVariants}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <motion.div variants={itemVariants} className="inline-flex items-center mb-4 py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full">
//               <GraduationCap className="h-4 w-4 text-teal-500 mr-2" />
//               <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide">Applications Open</span>
//             </motion.div>

//             <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Launch Your Tech Career at <br />
//               <span className="bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent">
//                 ST TECH ACADEMY
//               </span>
//             </motion.h1>

//             <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
//               Our 11-month comprehensive program provides the skills, mentorship, and hands-on experience you need to excel in today's tech industry.
//             </motion.p>

//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//               <a
//                 href="#apply"
//                 className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
//               >
//                 Apply Now
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </a>

//               <a
//                 href="#courses"
//                 className="px-8 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:shadow border border-slate-200 dark:border-slate-700 transition-all duration-300"
//               >
//                 View Courses
//               </a>
//             </motion.div>

//             <motion.div 
//               variants={itemVariants}
//               className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
//             >
//               {courses.map((course) => (
//                 <div key={course.id} className="inline-flex items-center bg-white dark:bg-slate-800 px-3 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
//                   <course.icon className={`h-4 w-4 ${course.iconColor} mr-2`} />
//                   <span className="text-sm font-medium">{course.shortTitle}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Program Highlights */}
//       <section id="highlights" className="py-16 bg-white dark:bg-slate-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Program Highlights</h2>
//               <p className="text-lg text-slate-700 dark:text-slate-300">
//                 What makes ST TECH ACADEMY the right choice for your tech career?
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {highlights.map((highlight, index) => (
//                 <div 
//                   key={index}
//                   className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
//                 >
//                   <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-500">
//                     <highlight.icon className="h-6 w-6" />
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
//                   <p className="text-slate-600 dark:text-slate-400">{highlight.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="py-16 bg-slate-50 dark:bg-slate-900/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
//               <p className="text-lg text-slate-700 dark:text-slate-300">
//                 Choose from our specialized tech tracks designed to build expertise in specific areas
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {courses.map((course) => (
//                 <div 
//                   key={course.id}
//                   className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300"
//                 >
//                   <div className="p-6">
//                     <div className={`h-12 w-12 rounded-full ${course.bgColor} ${course.darkBgColor} flex items-center justify-center mb-4`}>
//                       <course.icon className={`h-6 w-6 ${course.iconColor}`} />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
//                     <p className="text-slate-600 dark:text-slate-400 mb-4">{course.description}</p>
//                     <Link 
//                       href="#apply" 
//                       className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 inline-flex items-center font-medium"
//                     >
//                       Apply for this course
//                       <ArrowRight className="ml-1 h-4 w-4" />
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Application Form Section */}
//       <section id="apply" className="py-16 bg-white dark:bg-slate-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             ref={formRef}
//             initial="hidden"
//             animate={isFormInView ? "visible" : "hidden"}
//             variants={containerVariants}
//             className="max-w-3xl mx-auto"
//           >
//             <motion.div variants={itemVariants} className="text-center mb-10">
//               <h2 className="text-3xl font-bold mb-4">Apply to ST TECH ACADEMY</h2>
//               <p className="text-lg text-slate-700 dark:text-slate-300">
//                 Start your journey to becoming a tech professional today
//               </p>
//             </motion.div>

//             {submitSuccess ? (
//               <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-800/30 text-green-500 mb-4">
//                   <Check className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
//                 <p className="text-slate-700 dark:text-slate-300 mb-6">
//                   Thank you for applying to ST TECH ACADEMY. We've received your application and will contact you shortly.
//                 </p>
//                 <button
//                   onClick={() => setSubmitSuccess(false)}
//                   className="px-5 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors"
//                 >
//                   Submit Another Application
//                 </button>
//               </div>
//             ) : (
//               <motion.form 
//                 variants={itemVariants} 
//                 onSubmit={handleSubmit}
//                 className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
//               >
//                 <div className="text-sm text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
//                   <p>Please fill out this form to register as a student. All fields marked with * are required.</p>
//                 </div>

//                 {submitError && (
//                   <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800">
//                     {submitError}
//                   </div>
//                 )}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   {/* Full Name */}
//                   <div>
//                     <label htmlFor="fullName" className="block text-sm font-medium mb-1">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <User className="h-4 w-4 text-slate-400" />
//                       </div>
//                       <input
//                         type="text"
//                         id="fullName"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         required
//                         className="pl-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-1">
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Mail className="h-4 w-4 text-slate-400" />
//                       </div>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="pl-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="name@example.com"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium mb-1">
//                       Phone Number <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Phone className="h-4 w-4 text-slate-400" />
//                       </div>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         required
//                         className="pl-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="+1 (234) 567-8901"
//                       />
//                     </div>
//                   </div>

//                   {/* Date of Birth */}
//                   <div>
//                     <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">
//                       Date of Birth <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <CalendarIcon className="h-4 w-4 text-slate-400" />
//                       </div>
//                       <input
//                         type="date"
//                         id="dateOfBirth"
//                         name="dateOfBirth"
//                         value={formData.dateOfBirth}
//                         onChange={handleInputChange}
//                         required
//                         className="pl-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Gender */}
//                 <div className="mb-6">
//                   <label htmlFor="gender" className="block text-sm font-medium mb-1">
//                     Gender <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="gender"
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                     <option value="prefer-not-to-say">Prefer not to say</option>
//                   </select>
//                 </div>

//                 {/* Address */}
//                 <div className="mb-6">
//                   <label htmlFor="address" className="block text-sm font-medium mb-1">
//                     Address <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <MapPin className="h-4 w-4 text-slate-400" />
//                     </div>
//                     <input
//                       type="text"
//                       id="address"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       required
//                       className="pl-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       placeholder="123 Main St, City, Country"
//                     />
//                   </div>
//                 </div>

//                 {/* Course Selection */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium mb-2">
//                     Course Selection <span className="text-red-500">*</span>
//                   </label>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                     {courses.map((course) => (
//                       <div key={course.id} className="flex items-center">
//                         <input
//                           type="radio"
//                           id={course.id}
//                           name="courseSelection"
//                           value={course.id}
//                           checked={formData.courseSelection === course.id}
//                           onChange={handleRadioChange}
//                           required
//                           className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-slate-300 dark:border-slate-600"
//                         />
//                         <label htmlFor={course.id} className="ml-2 block text-sm">
//                           {course.title}
//                         </label>
//                       </div>
//                     ))}
//                     <div className="flex items-center">
//                       <input
//                         type="radio"
//                         id="other"
//                         name="courseSelection"
//                         value="other"
//                         checked={formData.courseSelection === 'other'}
//                         onChange={handleRadioChange}
//                         className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-slate-300 dark:border-slate-600"
//                       />
//                       <label htmlFor="other" className="ml-2 block text-sm">
//                         Other
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Member of ST Team */}
//                 <div className="mb-6">
//                   <label htmlFor="isMember" className="block text-sm font-medium mb-1">
//                     Are you a Member of ST Team?
//                   </label>
//                   <select
//                     id="isMember"
//                     name="isMember"
//                     value={formData.isMember}
//                     onChange={handleInputChange}
//                     className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                   >
//                     <option value="">Select One</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>

//                 {/* Conditional fields based on whether they're an ST member */}
//                 {formData.isMember === 'yes' && (
//                   <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
//                     <h3 className="text-sm font-semibold mb-4">ST Team Member Information</h3>

//                     {/* CREX ID */}
//                     <div className="mb-4">
//                       <label htmlFor="crexId" className="block text-sm font-medium mb-1">
//                         Your CREX ID <span className="text-red-500">*</span>
//                         <span className="text-xs text-slate-500 ml-1">(Compulsory for CREX members)</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="crexId"
//                         name="crexId"
//                         value={formData.crexId}
//                         onChange={handleInputChange}
//                         required={formData.isMember === 'yes'}
//                         className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       />
//                     </div>

//                     {/* CREX Telegram */}
//                     <div>
//                       <label htmlFor="crexTelegram" className="block text-sm font-medium mb-1">
//                         Your CREX Telegram username <span className="text-red-500">*</span>
//                         <span className="text-xs text-slate-500 ml-1">(Compulsory for CREX members)</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="crexTelegram"
//                         name="crexTelegram"
//                         value={formData.crexTelegram}
//                         onChange={handleInputChange}
//                         required={formData.isMember === 'yes'}
//                         className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="@username"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* Telegram username - for all applicants */}
//                 <div className="mb-6">
//                   <label htmlFor="telegramUsername" className="block text-sm font-medium mb-1">
//                     If No, Provide your Telegram username
//                   </label>
//                   <input
//                     type="text"
//                     id="telegramUsername"
//                     name="telegramUsername"
//                     value={formData.telegramUsername}
//                     onChange={handleInputChange}
//                     className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     placeholder="@username"
//                   />
//                 </div>

//                 {/* Resume Upload */}
//                 <div className="mb-8">
//                   <label htmlFor="resume" className="block text-sm font-medium mb-1">
//                     Upload CV <span className="text-xs text-slate-500 ml-1">(PDF, document, or image. Max 10 MB)</span>
//                   </label>
//                   <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-md">
//                     <div className="space-y-2 text-center">
//                     <Upload className="mx-auto h-10 w-10 text-slate-400" />
//                       <div className="flex text-sm text-slate-600 dark:text-slate-400">
//                         <label
//                           htmlFor="resume"
//                           className="relative cursor-pointer bg-white dark:bg-slate-800 rounded-md font-medium text-teal-500 hover:text-teal-400 focus-within:outline-none"
//                         >
//                           <span>Upload a file</span>
//                           <input
//                             id="resume"
//                             name="resume"
//                             type="file"
//                             className="sr-only"
//                             onChange={handleInputChange}
//                           />
//                         </label>
//                         <p className="pl-1">or drag and drop</p>
//                       </div>
//                       <p className="text-xs text-slate-500 dark:text-slate-400">
//                         {formData.resume ? formData.resume.name : "PDF, DOC, DOCX, JPG or PNG up to 10MB"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Processing...
//                       </>
//                     ) : (
//                       <>
//                         Submit Application
//                         <ArrowRight className="ml-2 h-5 w-5" />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </motion.form>
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* Guidelines Section */}
//       <section id="guidelines" className="py-16 bg-slate-50 dark:bg-slate-900/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Academy Guidelines</h2>
//               <p className="text-lg text-slate-700 dark:text-slate-300">
//                 Our commitment to excellence requires adherence to the following standards
//               </p>
//             </div>

//             <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">1. Academic Integrity</h3>
//                   <p className="text-slate-700 dark:text-slate-300 mb-3">
//                     ST TECH ACADEMY upholds the highest standards of honesty and professionalism. Any form of academic dishonesty, including plagiarism and cheating, is strictly prohibited.
//                   </p>
//                   <div className="pl-4 border-l-2 border-teal-500 ml-2">
//                     <h4 className="font-medium mb-2">1.1 Plagiarism Policy</h4>
//                     <p className="text-slate-600 dark:text-slate-400 mb-2">
//                       Plagiarism is the act of presenting someone else's work as your own. This includes:
//                     </p>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Copying code, projects, or written content without proper attribution.</li>
//                       <li>Submitting assignments done by another student, AI, or external sources.</li>
//                       <li>Using unauthorized materials during assessments.</li>
//                     </ul>
//                     <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">Consequences for Plagiarism:</p>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>First offense: Warning and mandatory resubmission with a penalty.</li>
//                       <li>Second offense: Automatic failure for the assignment and academic probation.</li>
//                       <li>Third offense: Expulsion from ST TECH ACADEMY.</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">2. Grading and Performance Standards</h3>
//                   <div className="space-y-3 text-slate-700 dark:text-slate-300">
//                     <p>
//                       <span className="font-medium">Peer Learning Days:</span> Every Friday at 5 PM UK Time, ST TECH ACADEMY will host peer learning sessions to encourage collaboration and knowledge sharing among students.
//                     </p>
//                     <p>
//                       <span className="font-medium">Grading Breakdown:</span>
//                     </p>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm pl-4 space-y-1">
//                       <li>Projects: 90%</li>
//                       <li>Quizzes & Exams: 10%</li>
//                     </ul>
//                     <p>
//                       <span className="font-medium">Failure to meet 70%:</span>
//                     </p>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm pl-4 space-y-1">
//                       <li>Below 70%: Probation and personalized improvement plan.</li>
//                       <li>Below 70% three times: Possible dismissal from the academy.</li>
//                     </ul>
//                     <p>
//                       <span className="font-medium">Quarterly Assessment:</span> Every three months, students must take a Quarterly Assessment to evaluate their progress. This assessment determines whether they qualify to move to the next level.
//                     </p>
//                     <p>
//                       <span className="font-medium">Final Project:</span> At the end of nine months, all students will be required to complete a Final Project. This project can be completed as a group or individually. Failure to complete the project will result in probation.
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">3. Code of Conduct</h3>
//                   <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm pl-4 space-y-2">
//                     <li>Respect all instructors, peers, and academy staff.</li>
//                     <li>Maintain a professional attitude in discussions and collaborations.</li>
//                     <li>Adhere to deadlines and submit assignments on time.</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">4. Attendance Policy</h3>
//                   <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm pl-4 space-y-2">
//                     <li>Students are expected to attend all scheduled classes, workshops, and peer learning sessions.</li>
//                     <li>A minimum of 80% attendance is required each month.</li>
//                     <li>Repeated unexcused absences may result in probation or dismissal.</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">5. Certification & Graduation</h3>
//                   <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm pl-4 space-y-2">
//                     <li>Students who successfully complete the program and pass all requirements will receive a Certificate of Completion from ST TECH ACADEMY.</li>
//                     <li>Graduating students may have the opportunity to showcase their projects at a demo day or career fair.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Curriculum Overview Section */}
//       <section id="curriculum" className="py-16 bg-white dark:bg-slate-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Curriculum Overview</h2>
//               <p className="text-lg text-slate-700 dark:text-slate-300">
//                 Our comprehensive 11-month program is designed to build your skills from fundamentals to advanced expertise
//               </p>
//             </div>

//             <div className="space-y-8">
//               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
//                 <h3 className="text-xl font-semibold mb-4 flex items-center">
//                   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-500 mr-3 text-sm font-bold">0</span>
//                   Foundations Month
//                 </h3>
//                 <p className="mb-4 text-slate-700 dark:text-slate-300">
//                   Build the core mindset and fundamental knowledge required for a successful tech career.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Key Topics</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Growth Mindset & Grit</li>
//                       <li>Computer Basics</li>
//                       <li>Shell Navigation</li>
//                       <li>Git & Version Control</li>
//                       <li>Problem-Solving Fundamentals</li>
//                     </ul>
//                   </div>
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Learning Outcomes</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Navigate command line confidently</li>
//                       <li>Manage code repositories with Git</li>
//                       <li>Solve problems algorithmically</li>
//                       <li>Build mental resilience for tech challenges</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
//                 <h3 className="text-xl font-semibold mb-4 flex items-center">
//                   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-500 mr-3 text-sm font-bold">1-4</span>
//                   Core Programming & Web Fundamentals
//                 </h3>
//                 <p className="mb-4 text-slate-700 dark:text-slate-300">
//                   Master the essential programming skills that form the foundation of modern tech development.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Key Topics</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>C Programming Fundamentals</li>
//                       <li>Python Programming</li>
//                       <li>Data Structures & Algorithms</li>
//                       <li>HTML, CSS & JavaScript Basics</li>
//                       <li>Database Fundamentals (SQL)</li>
//                     </ul>
//                   </div>
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Learning Outcomes</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Create programs in C and Python</li>
//                       <li>Build interactive web pages</li>
//                       <li>Work with databases</li>
//                       <li>Implement common algorithms</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
//                 <h3 className="text-xl font-semibold mb-4 flex items-center">
//                   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-500 mr-3 text-sm font-bold">5-9</span>
//                   Advanced Topics & Systems
//                 </h3>
//                 <p className="mb-4 text-slate-700 dark:text-slate-300">
//                   Dive deep into broader tech ecosystem with advanced programming and system concepts.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Key Topics</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Object-Oriented Programming</li>
//                       <li>Networking & API Development</li>
//                       <li>Configuration Management</li>
//                       <li>Load Balancing & System Design</li>
//                       <li>Security Fundamentals</li>
//                     </ul>
//                   </div>
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Project Focus</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Build full-stack applications</li>
//                       <li>Create and consume RESTful APIs</li>
//                       <li>Implement system-level automations</li>
//                       <li>Design scalable architecture</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
//                 <h3 className="text-xl font-semibold mb-4 flex items-center">
//                   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-500 mr-3 text-sm font-bold">10-11</span>
//                   Specialization & Capstone
//                 </h3>
//                 <p className="mb-4 text-slate-700 dark:text-slate-300">
//                   Focus on your chosen specialization and complete your capstone project.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Specialization Options</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Frontend Development (React, Next.js)</li>
//                       <li>Backend Development (Node.js, Express)</li>
//                       <li>Data Science & Machine Learning</li>
//                       <li>Graphics & Animation</li>
//                       <li>Web3 Development</li>
//                     </ul>
//                   </div>
//                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-medium mb-2">Capstone Project</h4>
//                     <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
//                       <li>Design and implement a complex project</li>
//                       <li>Work individually or in a team</li>
//                       <li>Professional code review & feedback</li>
//                       <li>Deploy to production</li>
//                       <li>Present at graduation showcase</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="py-12 bg-gradient-to-r from-teal-500 to-emerald-600 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Tech Journey?</h2>
//             <p className="text-lg mb-8 text-teal-50">
//               Applications are open now for our next cohort. Secure your spot today!
//             </p>
//             <a
//               href="#apply"
//               className="px-8 py-3 rounded-lg bg-white text-teal-600 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
//             >
//               Apply Now
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </section>      
//     </div>
//   );
// };

// export default AcademyPage;

// File: components/academy/AcademyPage.tsx
"use client"

import ApplicationModal from '@/components/Academy/ApplicationModal';
import CourseCategories from '@/components/Academy/CourseCategories';
import CTABanner from '@/components/Academy/CTABanner';
import CurriculumOverview from '@/components/Academy/CurriculumOverview';
import FAQ from '@/components/Academy/FAQ';
import Guidelines from '@/components/Academy/Guidelines';
import Hero from '@/components/Academy/Hero';
import ProgramHighlights from '@/components/Academy/ProgramHighlights';
import Testimonials from '@/components/Academy/Testimonials';
import { useState } from 'react';


export type CourseType = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  icon: any; // Using any for Lucide icon type
  iconColor: string;
  bgColor: string;
  darkBgColor: string;
  category?: string;
};

const AcademyPage = () =>
{
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const openApplicationModal = (courseId: string | null = null) =>
  {
    setSelectedCourse(courseId);
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Hero onApplyClick={openApplicationModal} />
      <ProgramHighlights />
      <CourseCategories onCourseApplyClick={openApplicationModal} />
      <CurriculumOverview />
      <Guidelines />
      <FAQ />
      <Testimonials />
      <CTABanner onApplyClick={openApplicationModal} />

      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        selectedCourse={selectedCourse}
      />
    </div>
  );
};

export default AcademyPage;
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from '@formspree/react';
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        honeypot: '' // Anti-bot honeypot field
    });
    
    const [formStartTime, setFormStartTime] = useState(null);
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [rateLimitError, setRateLimitError] = useState(false);
    const formRef = useRef(null);

    // Initialise form start time for anti-bot timing check
    useEffect(() => {
        setFormStartTime(Date.now());
    }, []);

    // Basic XSS sanitisation
    const sanitiseInput = (input) => {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    };

    // Validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Rate limiting check - prevent spam submissions
    const checkRateLimit = () => {
        const lastSubmission = localStorage.getItem('lastFormSubmission');
        const submissionCount = parseInt(localStorage.getItem('submissionCount') || '0');
        const now = Date.now();
        
        if (lastSubmission) {
            const timeSinceLastSubmission = now - parseInt(lastSubmission);
            const ONE_HOUR = 60 * 60 * 1000;
            
            // Reset count after 1 hour
            if (timeSinceLastSubmission > ONE_HOUR) {
                localStorage.setItem('submissionCount', '0');
                return true;
            }
            
            // Allow max 3 submissions per hour
            if (submissionCount >= 3) {
                return false;
            }
            
            // Prevent submissions within 30 seconds
            if (timeSinceLastSubmission < 30000) {
                return false;
            }
        }
        
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: sanitiseInput(value) });
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Check if honeypot field is filled (bot detection)
        if (formData.honeypot) {
            return { honeypot: 'Bot detected' };
        }
        
        // Timing check - forms filled too quickly are likely bots (less than 3 seconds)
        if (formStartTime && (Date.now() - formStartTime) < 3000) {
            return { timing: 'Please take your time filling out the form' };
        }
        
        // Validate required fields
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
        
        // Check for suspicious patterns (common spam indicators)
        const spamPatterns = /viagra|cialis|casino|lottery|winner|click here|buy now/i;
        if (spamPatterns.test(formData.message)) {
            newErrors.message = 'Message contains prohibited content';
        }
        
        return newErrors;
    };

    const emailKey = `${process.env.REACT_APP_EFL}`;
    const [state, handleFormspreeSubmit] = useForm(emailKey);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setRateLimitError(false);
        
        // Rate limiting check
        if (!checkRateLimit()) {
            setRateLimitError(true);
            setTimeout(() => setRateLimitError(false), 5000);
            return;
        }
        
        // Validate form
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            if (formErrors.honeypot || formErrors.timing) {
                // Silent fail for bot detection
                return;
            }
            setErrors(formErrors);
            // Scroll to first error
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        
        // Update rate limiting data
        const submissionCount = parseInt(localStorage.getItem('submissionCount') || '0');
        localStorage.setItem('lastFormSubmission', Date.now().toString());
        localStorage.setItem('submissionCount', (submissionCount + 1).toString());
        
        // Submit to Formspree
        await handleFormspreeSubmit(e);
    };

    // Handle successful submission
    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
        }
    }, [state.succeeded]);

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            honeypot: ''
        });
        setShowSuccess(false);
        setFormStartTime(Date.now());
        setErrors({});
    };

    // Success message with smooth animations
    if (showSuccess) {
        return (
            <div id='contact' className='relative h-auto bg-gray-900 flex justify-center items-center py-16'>
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className='w-11/12 md:w-3/4 lg:w-1/2 rounded-2xl border border-white/10 bg-gray-800/50 backdrop-blur-sm shadow-2xl overflow-hidden relative'
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className='h-1 w-full bg-gradient-to-r from-yellow-200/60 via-yellow-200 to-yellow-100/60 origin-left'
                        />
                        
                        <div className='p-8 md:p-12 text-center relative z-10'>
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.3,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                }}
                                className='mx-auto mb-6 inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-yellow-200/20 text-yellow-200 ring-4 ring-yellow-200/10'
                            >
                                <FaCheckCircle className='text-3xl md:text-4xl' />
                            </motion.div>
                            
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className='text-white font-semibold text-2xl md:text-3xl mb-3'
                            >
                                Message Sent Successfully!
                            </motion.h3>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className='text-gray-300 text-base md:text-lg mb-8 max-w-md mx-auto'
                            >
                                Thank you for reaching out. I'll get back to you as soon as possible.
                            </motion.p>
                            
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                onClick={resetForm}
                                className='bg-yellow-200 text-gray-900 font-medium py-3 px-8 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-yellow-200/20'
                            >
                                Send Another Message
                            </motion.button>
                        </div>
                        
                        {/* Decorative floating elements */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className='absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl'
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='absolute bottom-10 left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl'
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div id='contact' className='relative h-auto bg-gray-900 flex justify-center items-center py-14'>
            <div ref={formRef} className="w-11/12 md:w-4/5 lg:w-3/5 px-6 py-10 rounded-2xl border border-white/10 bg-gray-800/40 shadow-xl">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <p className='text-xs md:text-sm tracking-widest uppercase text-yellow-200 text-center md:text-left'>Contact</p>
                    <h3 className='text-xl md:text-2xl font-semibold text-white mt-2 text-center md:text-left'>Let’s connect</h3>
                    <p className="text-sm md:text-base font-light text-gray-200 mt-2 text-center md:text-left">Got any inquiries about the e‑book? Get in touch and fill out the form below.</p>
                </motion.div>

                <ul className='flex justify-center md:justify-start text-2xl text-white mt-4'>
                    <li className='nav-item p-4'>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                            className="mx-6 hover:text-yellow-200 transition 150">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer"
                            className="mx-6 hover:text-yellow-200 transition 150">
                            <FaThreads />
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"
                            className="mx-6 hover:text-yellow-200 transition 150">
                            <FaTiktok />
                        </a>
                    </li>
                </ul>

                {/* Rate limit error message */}
                <AnimatePresence>
                    {rateLimitError && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
                        >
                            <FaExclamationTriangle className="text-red-400 text-xl flex-shrink-0" />
                            <p className="text-red-200 text-sm">
                                Too many submissions. Please wait before trying again.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Formspree error message */}
                <AnimatePresence>
                    {state.errors && state.errors.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
                        >
                            <FaExclamationTriangle className="text-red-400 text-xl flex-shrink-0" />
                            <p className="text-red-200 text-sm">
                                There was an error submitting your form. Please try again.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <form onSubmit={handleSubmit}
                    className="mt-2 flex flex-wrap gap-x-5 text-sm md:text-base">
                    
                    {/* Honeypot field - hidden from users, visible to bots */}
                    <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                        tabIndex="-1"
                        autoComplete="off"
                        aria-hidden="true"
                    />
                    <div className="mb-4 flex-grow">
                        <label htmlFor="firstName" className="block text-white text-left">
                            First Name <span className="text-yellow-200">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            className={`form-input mt-1 px-3 py-2 rounded-xl block w-full transition-all 150 text-gray-900 bg-white/95 border ${
                                errors.firstName ? 'border-red-400 focus:ring-2 focus:ring-red-400' : 'border-white/10'
                            } hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none`}
                            aria-invalid={errors.firstName ? 'true' : 'false'}
                            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        />
                        {errors.firstName && (
                            <motion.p 
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                id="firstName-error"
                                className="mt-1 text-xs text-red-300"
                            >
                                {errors.firstName}
                            </motion.p>
                        )}
                    </div>
                    <div className="mb-4 flex-grow">
                        <label htmlFor="lastName" className="block text-white text-left">
                            Last Name <span className="text-yellow-200">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            className={`form-input mt-1 px-3 py-2 rounded-xl block w-full transition-all 150 text-gray-900 bg-white/95 border ${
                                errors.lastName ? 'border-red-400 focus:ring-2 focus:ring-red-400' : 'border-white/10'
                            } hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none`}
                            aria-invalid={errors.lastName ? 'true' : 'false'}
                            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        />
                        {errors.lastName && (
                            <motion.p 
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                id="lastName-error"
                                className="mt-1 text-xs text-red-300"
                            >
                                {errors.lastName}
                            </motion.p>
                        )}
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="email" className="block text-white text-left">
                            Email <span className="text-yellow-200">*</span>
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={`form-input mt-1 px-3 py-2 rounded-xl block w-full transition-all 150 text-gray-900 bg-white/95 border ${
                                errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-400' : 'border-white/10'
                            } hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none`}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <motion.p 
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                id="email-error"
                                className="mt-1 text-xs text-red-300"
                            >
                                {errors.email}
                            </motion.p>
                        )}
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="message" className="block text-white text-left">
                            Message <span className="text-yellow-200">*</span>
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className={`form-textarea mt-1 px-3 py-2 rounded-xl block w-full transition-all 150 text-gray-900 bg-white/95 border ${
                                errors.message ? 'border-red-400 focus:ring-2 focus:ring-red-400' : 'border-white/10'
                            } hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none resize-none`}
                            rows="5"
                            aria-invalid={errors.message ? 'true' : 'false'}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                        ></textarea>
                        {errors.message && (
                            <motion.p 
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                id="message-error"
                                className="mt-1 text-xs text-red-300"
                            >
                                {errors.message}
                            </motion.p>
                        )}
                    </div>
                    <div className="w-full my-2 text-center md:text-left">
                        <button 
                            type="submit"
                            disabled={state.submitting}
                            className="bg-yellow-200 text-black font-medium py-2 px-12 rounded-full hover:bg-yellow-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 inline-flex items-center gap-2"
                        >
                            {state.submitting ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'send message'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

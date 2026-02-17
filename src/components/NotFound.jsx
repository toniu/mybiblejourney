import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaHome, FaBookOpen } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className='min-h-screen bg-gray-900 flex items-center justify-center px-4'>
            <div className='max-w-2xl w-full text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12'
                >
                    {/* 404 Number */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='mb-6'
                    >
                        <h1 className='text-8xl md:text-9xl font-bold text-yellow-200/20'>
                            404
                        </h1>
                    </motion.div>

                    {/* Icon */}
                    <div className='mb-6 flex justify-center'>
                        <div className='relative'>
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className='absolute inset-0 rounded-full bg-yellow-200/20 blur-xl'
                            />
                            <FaBookOpen className='relative w-16 h-16 text-yellow-200' aria-hidden='true' />
                        </div>
                    </div>

                    {/* Message */}
                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                        Page Not Found
                    </h2>

                    <p className='text-gray-300 mb-2'>
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <p className='text-gray-400 text-sm mb-8 italic'>
                        "Seek and you will find" — but perhaps start from the home page!
                    </p>

                    {/* Action Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            to='home'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className='inline-flex items-center justify-center gap-2 bg-yellow-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 cursor-pointer'
                        >
                            <FaHome aria-hidden='true' />
                            <span>Go Home</span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className='inline-flex items-center justify-center gap-2 border border-yellow-200 text-yellow-200 px-8 py-3 rounded-full font-semibold hover:bg-yellow-200 hover:text-black transition-colors duration-200'
                        >
                            Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;

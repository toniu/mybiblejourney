import React, { useRef, useEffect } from 'react';
import videoBg from '../assets/mbj-moving-bg.mp4';
import bookMockup from '../assets/mbj-book-mockup.png';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

const Home = () => {
    const homeRef = useRef(null);
    const videoRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: homeRef, offset: ["start start", "end start"] });
    const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Reduce playback rate on mobile for better performance
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            video.playbackRate = 0.75;
        }

        // Pause video when page is hidden to save resources
        const handleVisibilityChange = () => {
            if (document.hidden) {
                video.pause();
            } else {
                video.play().catch(() => {
                    // Auto-play was prevented, ignore the error
                });
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div id='home' ref={homeRef} className='relative min-h-screen h-screen bg-gray-900 overflow-hidden'>

            <div className='absolute inset-0 overflow-hidden select-none'>
                <video
                    ref={videoRef}
                    className='object-cover w-full h-full select-none'
                    src={videoBg}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
                    webkit-playsinline="true"
                />

                <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-gray-900' />

                <div aria-hidden className='pointer-events-none absolute inset-0'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-yellow-200/5 blur-[100px]' />
                </div>
            </div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            style={{ opacity: bgOpacity }}
            className='absolute inset-0 flex flex-col justify-center items-center text-white px-3 sm:px-4 pt-16 pb-6 overflow-hidden'>
                <div className='w-full max-w-3xl mx-auto flex flex-col items-center justify-center'>
                    <div className='space-y-4 sm:space-y-6'>
                        {/* Main Headline - BOLD & CLEAR */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto px-2 text-center'
                        >
                            Bible notes for all 66 books,<br/>
                            <span className='text-yellow-200'>one unified story about Jesus Christ</span>
                        </motion.h1>

                        {/* Book Visual - Hero Piece */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className='flex justify-center py-1 sm:py-2'
                        >
                            <motion.img
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                className='w-36 sm:w-48 md:w-56 lg:w-64 filter drop-shadow-2xl select-none'
                                src={bookMockup}
                                alt='My Bible Journey book cover'
                            />
                        </motion.div>

                        {/* Call to Action - PROMINENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className='flex flex-col items-center'
                        >
                            <a className='inline-block bg-yellow-200 text-black px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-2xl shadow-yellow-200/30
                            hover:bg-yellow-300 hover:scale-105 transition-all duration-200'
                                href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                                Get Early Access Now
                            </a>
                            <Link
                                to='preview'
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={500}
                                className="mt-3 inline-block text-yellow-200/90 hover:text-yellow-200 text-xs sm:text-sm font-medium underline underline-offset-4 cursor-pointer transition-colors"
                            >
                                See what's inside →
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ delay: 2, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className='absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20'
            >
                <Link to='preview' smooth={true} duration={500} offset={-100} className='flex flex-col items-center text-yellow-200/50 cursor-pointer hover:text-yellow-200/80 transition-colors'>
                    <FaChevronDown className='text-base sm:text-lg md:text-xl animate-bounce' />
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;

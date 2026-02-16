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
        <div id='home' ref={homeRef} className='relative min-h-screen h-screen bg-gray-900 overflow-x-hidden'>

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
            className='absolute inset-0 flex flex-col justify-start sm:justify-center items-center text-white px-3 sm:px-4 pt-20 pb-6 sm:pt-24 sm:pb-12 md:py-28 overflow-x-hidden'>
                <div className='w-full max-w-5xl mx-auto flex flex-col justify-center py-1 sm:pt-8 md:pt-12 sm:pb-2 md:pb-4'>
                    <div className='space-y-2 sm:space-y-3 md:space-y-4 flex-shrink'>
                        {/* Emotional Hook */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className='text-xs sm:text-sm md:text-base text-gray-300 font-light leading-snug sm:leading-relaxed max-w-2xl mx-auto px-2 text-center'
                        >
                            Ever feel lost in the pages of the Bible?<br className='block md:hidden'/> Looking for digestible notes to guide your journey?
                        </motion.p>

                        {/* Main Headline - BOLD & CLEAR */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className='text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-4xl mx-auto px-2 text-center'
                        >
                            Personal Bible notes covering all 66 books,<br/>
                            <span className='text-yellow-200'> revealing the unified story about Jesus Christ</span>
                        </motion.h1>

                        {/* Middle Section - Quote + Bullets (Side by Side on Desktop) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 max-w-4xl mx-auto px-2'
                        >
                            {/* Trust Signal - Augustine - Hidden on mobile */}
                            <div className='hidden sm:block text-sm sm:text-base text-gray-200 font-light italic border-l-2 border-yellow-200/40 pl-3 sm:pl-4 py-1 sm:py-2 text-left flex-shrink-0'>
                                <p>"The Old (Testament) is in the New (Testament) revealed,<br className='hidden md:block'/> the New is in the Old concealed."</p>
                                <p className='text-[12.5px] sm:text-xs md:text-sm text-yellow-200/80 not-italic mt-1 font-semibold'>- Saint Augustine (4th century)</p>
                            </div>

                            {/* Value Proposition - Streamlined */}
                            <div className='text-xs sm:text-sm md:text-base text-gray-100 font-light space-y-1 sm:space-y-1.5 md:space-y-2 flex-shrink-0 sm:col-span-1 col-span-1'>
                                <p className='flex items-start'>
                                    <span className='text-yellow-200 mr-2 text-xs sm:text-base flex-shrink-0 mt-0.5'>✓</span>
                                    <span className='text-left'>Context, themes & storyline for every book—with definitions, genealogies & glossary</span>
                                </p>
                                <p className='flex items-start'>
                                    <span className='text-yellow-200 mr-2 text-xs sm:text-base flex-shrink-0 mt-0.5'>✓</span>
                                    <span className='text-left'>Christ-centered lens taught by Jesus and the Apostles</span>
                                </p>
                            </div>
                        </motion.div>
                        {/* Call to Action - PROMINENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            className="p-1.5 sm:p-3 md:p-4"
                        >
                            <a className='inline-block bg-yellow-200 text-black px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold shadow-2xl shadow-yellow-200/30
                            hover:bg-yellow-300 hover:scale-105 transition-all duration-200'
                                href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                                Get Early Access Now
                            </a>
                            <div className="p-1 sm:p-2">
                                <Link
                                    to='preview'
                                    spy={true}
                                    offset={-100}
                                    smooth={true}
                                    duration={500}
                                    className="inline-block text-yellow-200/90 hover:text-yellow-200 text-xs sm:text-sm md:text-base font-medium underline underline-offset-4 cursor-pointer transition-colors"
                                >
                                    Or see what's inside first →
                                </Link>
                            </div>
                        </motion.div>

                        {/* Bottom Section - Book + Scripture (Flex on MD) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-6 pt-0 sm:pt-2 md:pt-3 max-w-5xl mx-auto flex-shrink'
                        >
                            {/* Book Visual - Compact */}
                            <div className='flex-shrink-0 p-0 sm:p-2'>
                                <motion.img
                                    animate={{
                                        y: [0, -6, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                    className='w-20 sm:w-32 md:w-36 lg:w-40 filter drop-shadow-2xl select-none hidden sm:block'
                                    src={bookMockup}
                                    alt='My Bible Journey book cover'
                                />
                            </div>

                            {/* Scripture Arc - Connection Display */}
                            <div className='flex-1 max-w-3xl px-2 sm:px-4 w-full'>
                                <div className='rounded-lg border border-blue-300/20 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm p-2.5 sm:p-3.5 md:p-5'>
                                    <div className='space-y-1.5 sm:space-y-1.5 md:space-y-2'>
                                        {/* John 1:1 - The Word */}
                                        <div className='text-left p-2'>
                                            <p className='text-[10px] sm:text-sm text-blue-200/80 font-semibold mb-0.5 sm:mb-1'>John 1:1 <span className='hidden sm:inline text-blue-200/60 font-normal'>— The Blueprint</span></p>
                                            <p className='text-xs sm:text-sm md:text-base text-blue-300 italic font-light leading-snug sm:leading-relaxed'>
                                                "In the beginning was the Word, and the Word was with God, and the Word was God."
                                            </p>
                                        </div>
                                        
                                        {/* Connection Arrow */}
                                        <div className='flex items-center py-0.5 sm:py-1'>
                                            <div className='h-px flex-1 bg-yellow-200/30'></div>
                                            <span className='mx-2 text-yellow-200 text-sm md:text-base'>↓</span>
                                            <div className='h-px flex-1 bg-yellow-200/30'></div>
                                        </div>
                                        
                                        {/* Revelation 22:13 */}
                                        <div className='text-left p-2'>
                                            <p className='text-[10px] sm:text-sm text-blue-200/80 font-semibold mb-0.5 sm:mb-1'>Revelation 22:13 <span className='hidden sm:inline text-blue-200/60 font-normal'>— The Fulfilment</span></p>
                                            <p className='text-xs sm:text-sm md:text-base text-blue-300 italic font-light leading-snug sm:leading-relaxed'>
                                                "I am the Alpha and the Omega, the First and the Last, the Beginning and the End."
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Summary */}
                                    <div className='pt-1.5 sm:pt-2 mt-1.5 sm:mt-2 border-t border-white/10'>
                                        <p className='text-[10px] sm:text-sm text-gray-300 font-light text-center leading-snug sm:leading-relaxed'>
                                            <span className='hidden sm:inline'>The story about the Word made flesh - Jesus - the beginning and the end, uniting all Scripture in the eternal plan of the Triune God.</span>
                                            <span className='text-sm sm:hidden'>Scripture fulfilled in Christ, revealed by the Holy Spirit.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
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

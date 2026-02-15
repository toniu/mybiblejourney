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
        <div id='home' ref={homeRef} className='relative min-h-screen h-screen bg-gray-900'>

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
            className='absolute inset-0 flex flex-col justify-center items-center text-white px-4 py-16 sm:py-14 md:py-20 overflow-hidden'>
                <div className='w-full max-w-5xl mx-auto flex flex-col justify-center h-full max-h-screen py-4 sm:py-2 md:py-4'>
                    <div className='space-y-3 sm:space-y-3 md:space-y-3 flex-shrink'>
                        {/* Emotional Hook */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className='text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto px-2 text-center'
                        >
                            Ever feel lost in the pages of the Bible? Wonder where and who it all points to?
                        </motion.p>

                        {/* Main Headline - BOLD & CLEAR */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto px-2 text-center'
                        >
                            The unified Bible story<br className='hidden md:block' />
                            <span className='text-yellow-200'> reveals Jesus Christ</span>
                        </motion.h1>

                        {/* Middle Section - Quote + Bullets (Side by Side on Desktop) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 max-w-4xl mx-auto px-2'
                        >
                            {/* Trust Signal - Augustine */}
                            <div className='text-xs sm:text-sm md:text-base text-gray-200 font-light italic border-l-2 border-yellow-200/40 pl-3 sm:pl-4 py-2 text-left flex-shrink-0'>
                                <p>"The Old (Testament) is in the New (Testament) revealed, the New is in the Old concealed."</p>
                                <p className='text-[10px] sm:text-xs md:text-sm text-yellow-200/80 not-italic mt-1'>— Saint Augustine (4th century)</p>
                            </div>

                            {/* Value Proposition - Streamlined */}
                            <div className='text-sm sm:text-base md:text-base text-gray-100 font-light space-y-1.5 md:space-y-2 flex-shrink-0'>
                                <p className='flex items-center'>
                                    <span className='text-yellow-200 mr-2 text-sm sm:text-lg flex-shrink-0'>✓</span>
                                    <span className='text-left'>Trace God's covenant story from Genesis to Revelation</span>
                                </p>
                                <p className='flex items-center'>
                                    <span className='text-yellow-200 mr-2 text-sm sm:text-lg flex-shrink-0'>✓</span>
                                    <span className='text-left'>Rooted in the historic, orthodox faith of Jesus and the Apostles</span>
                                </p>
                            </div>
                        </motion.div>
                        {/* Call to Action - PROMINENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            className='pt-1 md:pt-2 space-y-1.5 sm:space-y-2 text-center flex-shrink-0'
                        >
                            <a className='inline-block bg-yellow-200 text-black px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-2xl shadow-yellow-200/30
                            hover:bg-yellow-300 hover:scale-105 transition-all duration-200'
                                href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                                Get Early Access Now
                            </a>
                            <div>
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
                            className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3 md:gap-6 pt-2 md:pt-3 max-w-5xl mx-auto flex-shrink'
                        >
                            {/* Book Visual - Compact */}
                            <div className='flex-shrink-0'>
                                <motion.img
                                    animate={{
                                        y: [0, -6, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                    className='w-20 sm:w-32 md:w-36 lg:w-40 filter drop-shadow-2xl select-none'
                                    src={bookMockup}
                                    alt='My Bible Journey book cover'
                                />
                            </div>

                            {/* Scripture Arc - Connection Display */}
                            <div className='flex-1 max-w-xl px-4'>
                                <div className='rounded-lg border border-blue-300/20 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm p-3 sm:p-3.5 md:p-5'>
                                    <div className='space-y-2 sm:space-y-1.5 md:space-y-2'>
                                        {/* Genesis 1:1 */}
                                        <div className='text-left'>
                                            <p className='text-[9px] sm:text-[10px] md:text-xs text-blue-200/80 font-semibold mb-1'>Genesis 1:1</p>
                                            <p className='text-[10px] sm:text-xs md:text-sm text-blue-300 italic font-light leading-relaxed'>
                                                "In the beginning, God created the heavens and the earth."
                                            </p>
                                        </div>
                                        
                                        {/* Connection Arrow */}
                                        <div className='flex items-center py-1'>
                                            <div className='h-px flex-1 bg-yellow-200/30'></div>
                                            <span className='mx-2 text-yellow-200 text-sm md:text-base'>↓</span>
                                            <div className='h-px flex-1 bg-yellow-200/30'></div>
                                        </div>
                                        
                                        {/* Revelation 22:21 */}
                                        <div className='text-left'>
                                            <p className='text-[9px] sm:text-[10px] md:text-xs text-blue-200/80 font-semibold mb-1'>Revelation 22:21</p>
                                            <p className='text-[10px] sm:text-xs md:text-sm text-blue-300 italic font-light leading-relaxed'>
                                                "The grace of the Lord Jesus be with all. Amen."
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Summary */}
                                    <div className='pt-2 mt-2 border-t border-white/10'>
                                        <p className='text-[9px] sm:text-[10px] md:text-xs text-gray-300 font-light text-center'>
                                            One story. One Lord. One faith. One baptism. One Saviour.<br/>All Scripture pointing to Jesus Christ.
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
                className='absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20'
            >
                <Link to='preview' smooth={true} duration={500} offset={-100} className='flex flex-col items-center text-yellow-200/50 cursor-pointer hover:text-yellow-200/80 transition-colors'>
                    <FaChevronDown className='text-base sm:text-lg md:text-xl animate-bounce' />
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;

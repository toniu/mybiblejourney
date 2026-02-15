import React, { useRef, useEffect } from 'react';
import videoBg from '../assets/mbj-moving-bg.mp4';
import bookMockup from '../assets/mbj-book-mockup.png';
import logo from '../assets/mbj-icon.png';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from "framer-motion"
import { FaChevronDown, FaQuoteLeft } from "react-icons/fa"

const Home = () => {
    const delayConst = 1;
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
            initial={{ x: 0, opacity: 1, scale: 1 }}
            animate={{ x: 0, opacity: 0, scale: 1 }}
            transition={{ duration: delayConst * 0.75 }}
            className='h-screen flex items-center justify-center'>
                <img className='w-[150px] h-[150px] md:w-[300px] md:h-[300px]' src={logo} alt='intro-logo'/>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delayConst, duration: 1, ease: 'easeOut' }}
            style={{ opacity: bgOpacity }}
            className='absolute inset-0 flex flex-col justify-start md:justify-center items-center text-white pt-16 md:pt-0 pb-20 md:pb-0 overflow-y-auto md:overflow-visible'>
                <div className='flex flex-col md:flex-row md:w-full pt-6'>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: delayConst + 0.3, duration: 0.6, ease: 'easeOut' }}
                        className='relative select-none flex-shrink-0 mt-0 md:mt-10 px-4 py-2 md:py-4 mx-auto md:mx-5 flex justify-center h-[100px] w-[100px] md:h-[350px] md:w-[350px] group cursor-pointer'
                    >
                        <div className='absolute inset-0 bg-yellow-200/8 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
                        <motion.img
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: -4,
                                z: 30,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                            className='select-none w-full h-full filter drop-shadow-2xl'
                            src={bookMockup}
                            alt='book-mockup'
                            style={{ transformStyle: 'preserve-3d' }}
                        />
                    </motion.div>

                    <div className='w-full md:w-1/2'>
                        <div className='text-center md:text-left px-5 md:px-0'>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: delayConst + 0.5, duration: 0.6 }}
                                className='text-xs md:text-sm tracking-[0.25em] uppercase text-yellow-200 font-medium'
                            >
                                E-book launch
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: delayConst + 0.7, duration: 0.6 }}
                                className='mt-2 mb-1 text-xl md:text-3xl font-bold tracking-wide text-yellow-200'
                            >
                                MY BIBLE JOURNEY
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: delayConst + 0.9, duration: 0.6 }}
                                className='text-sm md:text-lg font-light text-gray-100 tracking-wide'
                            >
                                Discover how all 66 books tell one unified story
                            </motion.h2>
                            
                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: delayConst + 1.2, duration: 0.6 }}
                                className='mt-3 md:mt-4 text-left pl-5 md:pl-0 text-[12px] md:text-base font-light text-gray-200 list-disc space-y-1 leading-relaxed'
                            >
                                <li>Author's notes showing how each book reveals Christ and His redemptive work</li>
                                <li>Relevant context, structure and key takeaways to see each book's role in God's unfolding plan of salvation and righteousness in Christ</li>
                                <li>Visual genealogies and key themes that trace God's promises through Scripture</li>
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: delayConst + 1.3, duration: 0.6 }}
                                className='mt-3 md:mt-5'
                            >
                                <div className='rounded-xl border border-yellow-200/20 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm p-2.5 md:p-3 space-y-2 md:space-y-2.5'>
                                    {/* Saint Augustine Quote */}
                                    <div>
                                        <FaQuoteLeft className='text-yellow-200/40 text-sm md:text-base mb-1' />
                                        <p className='text-xs md:text-sm font-light text-gray-100 leading-relaxed italic'>
                                            "The Old (Testament) is in the New (Testament) revealed, the New is in the Old concealed."
                                        </p>
                                        <p className='text-[10px] md:text-xs text-yellow-200/80 mt-1.25 md:mt-1 text-right font-medium'>
                                            - Saint Augustine
                                        </p>
                                    </div>

                                    {/* Genesis & Revelation Quote */}
                                    <div className='pt-1 md:pt-1.5 border-t border-white/10'>
                                        <FaQuoteLeft className='text-blue-300/40 text-sm md:text-base mb-1' />
                                        <div className='text-xs md:text-sm font-light text-gray-100 leading-relaxed space-y-1.25 md:space-y-1'>
                                            <p className='italic'>
                                                "In the beginning, God created the heavens and the earth…"
                                                <span className='block text-right text-blue-200/70 not-italic text-[10px] md:text-xs mt-1'>- Genesis 1:1</span>
                                            </p>
                                            <div className='flex justify-center'>
                                                <div className='w-8 h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent'></div>
                                            </div>
                                            <p className='italic'>
                                                "…The grace of the Lord Jesus be with God's people. Amen."
                                                <span className='block text-right text-blue-200/70 not-italic text-[10px] md:text-xs mt-1'>- Revelation 22:21</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: delayConst + 1.5, duration: 0.6 }}
                                className='mt-4 md:mt-6 pb-4 md:pb-8 space-y-2'
                            >
                                <a className='block text-center bg-yellow-200 text-black px-8 md:px-10 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg shadow-yellow-200/20
                                hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-200/30 transition-all duration-150'
                                    href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                                    Join the Waitlist
                                </a>
                                <Link
                                    to='preview'
                                    spy={true}
                                    offset={-100}
                                    smooth={true}
                                    duration={500}
                                    className="block text-center border border-yellow-200/60 text-yellow-200 px-8 md:px-10 py-2 md:py-2.5 rounded-full text-sm md:text-base font-normal
                                hover:border-yellow-200 hover:bg-yellow-200/10 transition-all duration-150"
                                >
                                    View Preview
                                </Link>
                                <Link
                                    to='about'
                                    spy={true}
                                    offset={-100}
                                    smooth={true}
                                    duration={500}
                                    className="block text-center text-gray-300 px-8 md:px-10 py-1.5 text-sm md:text-base uppercase font-bold
                                hover:text-yellow-200 transition-colors duration-150"
                                >
                                    Learn More →
                                </Link>
                            </motion.div>
                            
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ delay: delayConst + 2.5, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className='absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10'
            >
                <Link to='about' smooth={true} duration={500} offset={-100} className='flex flex-col items-center text-yellow-200/60 cursor-pointer hover:text-yellow-200/90 transition-colors'>
                    <p className='text-[10px] md:text-xs tracking-widest uppercase mb-1'>Scroll to explore</p>
                    <FaChevronDown className='text-base md:text-lg animate-bounce' />
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;

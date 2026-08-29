import React, { useRef, useState, useEffect } from 'react';
import mbjIcon from '../assets/zoom-in-img-a.png'
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from "framer-motion";


const About = () => {
    const aboutRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect - image moves slower than scroll (disabled on mobile)
    const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);

    // Zoom effect - image scales based on scroll position (subtle on mobile)
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], isMobile ? [1, 1.05, 1] : [0.9, 1.15, 0.95]);

    // Opacity for the background blur effect
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]);

    // Background scale and position for parallax (disabled on mobile)
    const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], isMobile ? [1, 1, 1] : [1.2, 1.5, 1.3]);
    const bgY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -50]);

    // Text parallax (disabled on mobile)
    const textY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -30]);

    return (
        <div id='about' ref={aboutRef} className='relative h-auto bg-gray-900 overflow-hidden'>
            {/* Animated background with faded parallax image */}
            <motion.div
                className='absolute inset-0 pointer-events-none'
                style={{ opacity: bgOpacity }}
            >
                <motion.div
                    className='absolute top-0 left-0 w-full h-full'
                    style={{ y: bgY, scale: bgScale }}
                >
                    <div className='relative w-full h-full'>
                        <img
                            src={mbjIcon}
                            alt=''
                            loading='lazy'
                            className='absolute top-1/2 left-0 md:left-10 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover blur-3xl opacity-20'
                            role='presentation'
                        />
                        {/* Dark blue gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-900/30 to-transparent'></div>
                    </div>
                </motion.div>
            </motion.div>

            <div className='flex flex-col md:flex-row md:w-full py-12 relative z-10'>
                {/* Main image with parallax and zoom effects */}
                <div className='relative px-8 md:px-5 pt-10 pb-6 md:pb-0 mx-auto md:mx-5 flex justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        style={{ y: imageY, scale: imageScale }}
                        className='relative'
                    >
                        {/* Glow effect ring */}
                        <motion.div
                            className='absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/30 via-blue-400/20 to-transparent blur-xl'
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Main image */}
                        <img
                            className='relative h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full ring-4 ring-yellow-200/20 shadow-2xl'
                            src={mbjIcon}
                            alt='My Bible Journey book icon featuring an open Bible'
                            loading='lazy'
                        />
                    </motion.div>
                </div>

                {/* Text content with subtle parallax */}
                <motion.div
                    className='px-1 w-full md:w-[70%]'
                    style={{ y: textY }}
                >
                    <div className='text-center md:text-left w-full'>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='mx-5 pt-6 text-xs md:text-sm tracking-widest uppercase text-yellow-200'
                        >
                            About the book
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='mx-5 px-2 md:px-1 my-4 text-sm md:text-base font-light text-white'
                        >
                            <span className='font-bold'>My Bible Journey</span> offers a Christ-centered reading of Scripture, following the pattern established by the early Church and affirmed by believers across centuries.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='mx-5 px-2 md:px-1 my-4 text-sm md:text-base font-light text-white'
                        >
                            Each book is explored through the lens taught by Jesus and His apostles: the Hebrew Scriptures - what we call the Old Testament - are illuminated and fulfilled in Christ. This isn't a new interpretation; it's the historic Christian way of reading Scripture, practised by the Church from the beginning. The Hebrew Bible testifies to God's living Word, now seen in the fuller light of Christ the Messiah.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className='mx-5 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left'
                        >
                            <motion.div
                                className='relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-white/5 overflow-hidden'
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Background accent */}
                                <div className='absolute top-0 right-0 w-32 h-32 bg-yellow-200/5 rounded-full blur-2xl' />

                                <p className='relative text-yellow-200 font-semibold mb-3'>What you'll find</p>
                                <ul className='relative text-sm md:text-base font-light text-white list-disc pl-5 space-y-2'>
                                    <li>Context, themes, and storyline for every book</li>
                                    <li>Key definitions, genealogies, and terms</li>
                                    <li>Glossary and appendices for deeper study</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className='relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-white/5 overflow-hidden'
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Background accent */}
                                <div className='absolute bottom-0 left-0 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl' />

                                <p className='relative text-yellow-200 font-semibold mb-3'>New to the Bible?</p>
                                <p className='relative text-sm md:text-base font-light text-white'>
                                    The Bible is a sacred library revealing God's covenant with humanity. Start with the Gospels: eyewitness accounts of Jesus' life, death, and resurrection that have transformed lives for two thousand years.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Author's Testimony Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='mx-5 mt-12'
                        >
                            <p className='text-xs md:text-sm tracking-widest uppercase text-yellow-200'>Author's testimony</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='mx-5 mt-6 rounded-2xl border border-white/10 bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 text-left relative overflow-hidden'
                        >
                            {/* Background gradient accent */}
                            <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-full blur-3xl' />
                            <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-900/10 to-transparent rounded-full blur-3xl' />

                            <div className='relative space-y-4 text-sm md:text-base font-light text-white'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                >
                                    <FaQuoteLeft className='block mx-0 text-base md:text-xl text-gray-500 font-bold' />
                                </motion.div>
                                <p>
                                    Thank you for exploring this book. Its inspiration came from a personal journey - from spiritual disconnection to discovering a deeper coherence in Scripture, guided by the witness of the historic Church.
                                </p>

                                <p>
                                    Reading the Bible once felt fragmented and like a chore. I would read isolated verses, like a "verse of the day" on Bible apps, but sensed they belonged to a larger story. So I began again - Genesis to Revelation, creation to new creation - and everything began to connect as I discovered what the early Christians knew: <span className='font-semibold'>all Scripture testifies to Christ</span>.
                                </p>

                                <p>
                                    As Jesus Himself taught the disciples after His resurrection, <strong className="font-semibold">beginning with Moses and all the Prophets, He interpreted to them throughout the Scriptures the things concerning Himself (Luke 24:27; John 5:39).</strong> This Christ-centred reading was not invented - it was revealed by Jesus and practised by the Church from Pentecost onwards.
                                </p>

                                <p>
                                    Writing became my own journey of formation - learning, unlearning, and being shaped by the <span className='font-semibold text-yellow-200'>Logos</span>, the eternal Word made flesh. Scripture is God-breathed, bearing witness to the Son who reveals the Father through the Spirit. This Trinitarian lens, confessed in the historic Creeds, brings clarity to God's self-revelation.
                                </p>

                                <p>
                                    The Bible presents a God who is faithful and unchanging - the God of Abraham, Isaac, and Jacob, who brings His covenant promises to fullness in Christ. Through progressive revelation, God disclosed His eternal plan of redemption, inviting all people - Jew and Gentile - into the New Covenant through the Father's Son by the Holy Spirit. This is the Gospel proclaimed for two millennia, rooted in the Hebrew Scriptures and revealed in Jesus the Messiah.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bible Project Credit */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className='mx-5 mt-6 rounded-xl border border-yellow-200/20 bg-gray-800/30 backdrop-blur-sm p-5 text-left relative overflow-hidden'
                        >
                            <div className='absolute top-0 right-0 w-40 h-40 bg-yellow-200/5 rounded-full blur-2xl' />

                            <p className='relative text-sm md:text-base font-light text-white'>
                                A special thanks to <a className='font-bold text-yellow-200 hover:text-yellow-300 underline decoration-yellow-200/30 hover:decoration-yellow-300 transition-all' href="https://bibleproject.com/" target="_blank" rel="noopener noreferrer">The Bible Project</a> - their visual storytelling and insights made diving into Scripture engaging and accessible. This book draws profound inspiration from their resources. Explore their website to expand your own theological study.
                            </p>
                        </motion.div>


                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className='mx-5 px-2 md:px-1 mt-8 text-sm md:text-base font-light text-white'
                        >
                            <span className='font-semibold text-yellow-200'>Immanuel.</span> God is with us.<br />
                            The risen King Jesus is Lord and Savior.<br />
                            Grace be to you all, and God bless.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='mx-5 mt-4 text-white font-bold'
                        >
                            - Neka Toni-Uebari
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className='flex flex-col md:flex-row md:items-center md:gap-4 justify-center md:justify-start mt-8'
                        >
                            <Link
                                key={'statement'}
                                to={'statement'}
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={500}
                                className='my-2 mx-5 text-center border border-yellow-200 text-yellow-200 px-10 py-2 rounded-full text-base md:text-lg font-normal hover:cursor-pointer hover:bg-yellow-200 hover:text-black transition 150'
                            >
                                read statement of faith
                            </Link>
                            <a className='my-2 mx-5 text-center bg-yellow-200 text-black px-10 py-2 rounded-full text-base md:text-lg font-normal
                                hover:cursor-pointer hover:bg-yellow-300 transition 150'
                                href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                                join the waitlist
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
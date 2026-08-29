import React, { useRef, useState, useEffect } from 'react';
import iconsTop from '../assets/mbj-icons-top.png';
import iconsBottom from '../assets/mbj-icons-bottom.png';
import { motion, useInView, useMotionValue, useAnimationFrame, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

/* Preview-book images */
import otImg from '../assets/mbj-ot-show.png';
import ntImg from '../assets/mbj-nt-show.png';
import gnImg from '../assets/mbj-gn-show.png';

/* Category icons */
import miTorah from '../assets/mi-torah.png';
import miHistory from '../assets/mi-history.png';
import miWisdom from '../assets/mi-wisdom.png';
import miMajor from '../assets/mi-majorprophets.png';
import miMinor from '../assets/mi-minorprophets.png';

import miGospels from '../assets/mi-gospels.png';
import miActs from '../assets/mi-earlychurch.png';
import miPauline from '../assets/mi-pauline.png';
import miGeneral from '../assets/mi-general.png';
import miRevelation from '../assets/mi-revelation.png';

// Wraps a value into [min, max) for a seamless, endlessly looping marquee position
const wrapValue = (min, max, v) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
};

// Marquee that idles at a slow constant speed and speeds up with scroll velocity (parallax feel)
const useMarqueeX = (baseVelocity, isActive) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [-2000, 2000], [-8, 8], { clamp: true });
    const prefersReducedMotion = useRef(false);

    useEffect(() => {
        prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    useAnimationFrame((t, delta) => {
        if (!isActive || prefersReducedMotion.current) return;
        let moveBy = baseVelocity * (delta / 1000);
        moveBy += moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return useTransform(baseX, (v) => `${wrapValue(0, 100, v)}%`);
};

const Preview = () => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [imageToZoom, setZoomImage] = useState(null);
    const sectionRef = useRef(null);
    const isMarqueeInView = useInView(sectionRef, { margin: '-10% 0px', once: false });

    // Idle speed matches the previous 30s/100% CSS loop; scroll velocity speeds it up either way
    const topX = useMarqueeX(100 / 30, isMarqueeInView);
    const bottomX = useMarqueeX(100 / 30, isMarqueeInView);

    const otIcons = [
        { title: 'TORAH', img: miTorah, description: 'Origins of creation and God\'s covenant with Israel; the Law through Moses and the formation of God\'s people.' },
        { title: 'HISTORY', img: miHistory, description: 'Israel\'s story - conquest, kingdom, exile, and return - told through the lens of covenant faithfulness.' },
        { title: 'POETRY', img: miWisdom, description: 'Worship and wisdom in prayer, praise, suffering, and the pursuit of God\'s wisdom.' },
        { title: 'MAJOR PROPHETS', img: miMajor, description: 'Longer prophetic books calling for faithfulness and promising restoration under God\'s kingdom.' },
        { title: 'MINOR PROPHETS', img: miMinor, description: 'The Twelve: shorter prophetic messages confronting idolatry and injustice, pointing to renewal.' },
    ]

    const ntIcons = [
        { title: 'GOSPELS', img: miGospels, description: 'The good news of Jesus the Messiah - His life, death, and resurrection as the climax of God\'s story.' },
        { title: 'ACTS', img: miActs, description: 'The Spirit-led mission of the early church, uniting Israel and the nations in Christ.' },
        { title: 'PAUL\'S LETTERS', img: miPauline, description: 'Apostolic teaching to local churches for gospel-shaped faith and practice.' },
        { title: 'GENERAL LETTERS', img: miGeneral, description: 'Letters from other apostles to strengthen and exhort the wider church.' },
        { title: 'REVELATION', img: miRevelation, description: 'The unveiling of Christ\'s victory and the renewal of creation.' },
    ]

    const toggleZoom = (id) => {
        setIsZoomed(!isZoomed);
        setZoomImage(id);
    };

    const iconsSliderContainer = "w-full h-[330px] overflow-hidden relative";

    return (
        <div id='preview' ref={sectionRef} className='relative z-10 -mt-28 sm:-mt-36 md:-mt-40 h-auto md:h-auto pb-12 lg:pb-3 bg-gray-900 overflow-x-hidden'>
            <div className={iconsSliderContainer}>
                <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30' />
                <motion.div className='h-full opacity-50 absolute top-0 right-0 w-full bg-repeat' style={{ backgroundImage: `url(${iconsTop})`, x: topX }} />
                <motion.div className='h-full opacity-50 absolute top-0 right-full w-full bg-repeat' style={{ backgroundImage: `url(${iconsTop})`, x: topX }} />
            </div>

            {/* Scripture Arc - John 1:1 to Revelation 22:13 */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className='px-6 md:px-10 pt-10'
            >
                <div className='max-w-3xl mx-auto rounded-2xl border border-blue-300/10 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm p-5 md:p-7'>
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
                        <div className='text-center sm:text-left flex-1'>
                            <p className='text-[10px] md:text-xs uppercase tracking-widest text-blue-200/70 font-semibold'>John 1:1</p>
                            <p className='text-sm md:text-base text-blue-300 font-light mt-1'>"In the beginning was the Word, and the Word was with God, and the Word was God."</p>
                        </div>

                        <div className='flex sm:flex-col items-center gap-2 shrink-0 text-yellow-200/70'>
                            <div className='hidden sm:block h-px w-8 bg-yellow-200/30' />
                            <span className='text-lg leading-none sm:hidden'>&#8595;</span>
                            <span className='text-lg leading-none hidden sm:inline'>&#8594;</span>
                            <div className='hidden sm:block h-px w-8 bg-yellow-200/30' />
                        </div>

                        <div className='text-center sm:text-right flex-1'>
                            <p className='text-[10px] md:text-xs uppercase tracking-widest text-blue-200/70 font-semibold'>Revelation 22:13</p>
                            <p className='text-sm md:text-base text-blue-300 font-light mt-1'>"I am the Alpha and the Omega, the Beginning and the End."</p>
                        </div>
                    </div>

                    <p className='text-center text-xs md:text-base text-gray-300 font-light mt-5 pt-4 border-t border-white/10'>
                        From before creation to the new creation - the revelation of God in Christ.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className='p-10'>
                <div className='text-center mb-6'>
                    <p className='text-xs md:text-sm tracking-widest uppercase text-yellow-200'>Preview</p>
                    <h3 className='text-xl md:text-2xl font-semibold text-white mt-2'>Inside the notes</h3>
                    <p className='text-sm md:text-base font-light text-gray-200 mt-2'>A quick look at the book’s structure, categories, and sample pages.</p>
                </div>
                <div className='mx-auto rounded-2xl border border-white/10 bg-gray-800/40 p-6 text-left'>
                    <p className='text-yellow-200 font-semibold mb-2'>The structure of the notes</p>
                    <ul className='text-sm md:text-base font-light text-white list-disc pl-5 space-y-2'>
                        <li><span className='font-semibold'>Context:</span> The relevant historical, cultural, and literary background</li>
                        <li><span className='font-semibold'>Sections:</span> The book’s structured sections and narrative flow</li>
                        <li><span className='font-semibold'>Gospel:</span> The key theological takeaways of the book and how it points to the Gospel of Jesus Christ</li>
                    </ul>
                </div>
                
                <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                        <p className='text-yellow-200 text-xs md:text-sm tracking-widest uppercase'>Old Testament tradition</p>
                        <h4 className='text-lg md:text-xl text-white font-semibold mt-2'>The Hebrew Bible's promise</h4>
                        <div className='mt-4 grid grid-cols-1 gap-4'>
                            {otIcons.map(({ title, img, description }) => (
                                <div key={title} className='flex gap-4 items-center justify-center rounded-xl bg-gray-900/40 p-5 border border-white/5 hover:border-yellow-200/40 hover:bg-gray-900/60 hover:scale-[1.02] transition-all duration-300 ease-out group cursor-default'>
                                    <img src={img}
                                        alt={title}
                                        className='w-[64px] h-[64px] rounded-full drop-shadow-lg flex-shrink-0 filter brightness-75 contrast-90 saturate-50 hue-rotate-[15deg] group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100 group-hover:hue-rotate-0 group-hover:scale-110 transition-all duration-300'
                                    />
                                    <div className='flex-1 text-center'>
                                        <p className='text-white font-semibold tracking-wide'>{title}</p>
                                        <p className='text-sm text-gray-300 mt-1'>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                        <p className='text-yellow-200 text-xs md:text-sm tracking-widest uppercase'>New Testament tradition</p>
                        <h4 className='text-lg md:text-xl text-white font-semibold mt-2'>The Hebrew Bible's fulfilment</h4>
                        <div className='mt-4 grid grid-cols-1 gap-4'>
                            {ntIcons.map(({ title, img, description }) => (
                                <div key={title} className='flex gap-4 items-center justify-center rounded-xl bg-gray-900/40 p-5 border border-white/5 hover:border-yellow-200/40 hover:bg-gray-900/60 hover:scale-[1.02] transition-all duration-300 ease-out group cursor-default'>
                                    <img src={img}
                                        alt={title}
                                        className='w-[64px] h-[64px] rounded-full drop-shadow-lg flex-shrink-0 filter brightness-75 contrast-90 saturate-50 hue-rotate-[15deg] group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100 group-hover:hue-rotate-0 group-hover:scale-110 transition-all duration-300'
                                    />
                                    <div className='flex-1 text-center'>
                                        <p className='text-white font-semibold tracking-wide'>{title}</p>
                                        <p className='text-sm text-gray-300 mt-1'>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: false }}
                className='px-10 mx-auto w-full flex flex-col items-center'>
                <div className='w-full block lg:flex justify-center gap-x-5'>
                    <div className='p-1 flex justify-center'>
                        <img className='w-[160px] lg:w-[300px] hover:scale-[1.05] hover:cursor-zoom-in transition 150'
                            src={otImg} alt='old testament examples'
                            onClick={() => toggleZoom(otImg)} />
                        <img className='w-[160px] lg:w-[300px] hover:scale-[1.05] hover:cursor-zoom-in transition 150'
                            src={ntImg} alt='new testament examples'
                            onClick={() => toggleZoom(ntImg)} />
                    </div>
                    <div className='p-1 flex justify-center'>
                        <img id='gnImg' className='w-[470px] lg:w-[600px] hover:scale-[1.05] hover:cursor-zoom-in transition 150'
                            src={gnImg} alt='genealogies'
                            onClick={() => toggleZoom(gnImg)} />
                    </div>
                </div>
                <p className='text-center text-xs md:text-sm text-gray-300 mt-2'>Tap an image to zoom</p>


                <div className='mt-8 text-center pb-12'>
                    <p className='text-white text-sm md:text-base mb-4'>Ready to dive deeper into Scripture?</p>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                        <a
                            className='bg-yellow-200 text-black px-8 py-2 rounded-full text-base md:text-lg font-normal hover:cursor-pointer hover:bg-yellow-300 transition 150'
                            href='https://www.amazon.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            join the waitlist
                        </a>
                    </div>
                </div>
                {isZoomed && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hover:cursor-zoom-out"
                        onClick={() => toggleZoom(null)}>
                        <img src={imageToZoom} alt='Zoomed preview' className="max-w-full max-h-full" />
                    </div>
                )}
            </motion.div>
            <div className={iconsSliderContainer}>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/30' />
                <motion.div className='h-full opacity-50 absolute top-0 right-0 w-full bg-repeat' style={{ backgroundImage: `url(${iconsBottom})`, x: bottomX }} />
                <motion.div className='h-full opacity-50 absolute top-0 right-full w-full bg-repeat' style={{ backgroundImage: `url(${iconsBottom})`, x: bottomX }} />
            </div>
        </div>
    );
};

export default Preview;

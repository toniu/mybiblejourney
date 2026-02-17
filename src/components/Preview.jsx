import React, { useRef, useState } from 'react';
import iconsTop from '../assets/mbj-icons-top.png';
import iconsBottom from '../assets/mbj-icons-bottom.png';
import { motion, useInView } from "framer-motion";

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

const Preview = () => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [imageToZoom, setZoomImage] = useState(null);
    const sectionRef = useRef(null);
    const isMarqueeInView = useInView(sectionRef, { margin: '-10% 0px', once: false });

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
        <div id='preview' ref={sectionRef} className='relative h-auto md:h-auto pb-12 lg:pb-3 bg-gray-900 overflow-x-hidden'>
            <div className={iconsSliderContainer}>
                <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30' />
                <div className={`h-full absolute top-0 right-0 w-full bg-repeat ${isMarqueeInView ? 'animate-slide-left' : ''}`} style={{ backgroundImage: `url(${iconsTop})` }} />
                <div className={`h-full absolute top-0 right-full w-full bg-repeat ${isMarqueeInView ? 'animate-slide-left' : ''}`} style={{ backgroundImage: `url(${iconsTop})` }} />
            </div>

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
                <div className={`h-full absolute top-0 left-0 w-full bg-repeat ${isMarqueeInView ? 'animate-slide-right' : ''}`} style={{ backgroundImage: `url(${iconsBottom})` }} />
                <div className={`h-full absolute top-0 left-full w-full bg-repeat ${isMarqueeInView ? 'animate-slide-right' : ''}`} style={{ backgroundImage: `url(${iconsBottom})` }} />
            </div>
        </div>
    );
};

export default Preview;

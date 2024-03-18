import React from 'react';
import videoBg from '../assets/mbj-moving-bg.mp4';
import bookMockup from '../assets/mbj-book-mockup.png';
import logo from '../assets/mbj-icon.png';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"

const Home = () => {
    const delayConst = 1;

    return (
        <div id='home' className='relative h-screen bg-gray-900'>

            <div className='absolute inset-0 overflow-hidden select-none'>
                <video className='object-cover w-full h-full select-none' src={videoBg} autoPlay loop muted />
            </div>
            <motion.div
            initial={{ x: 0, opacity: 1, scale: 1 }}
            animate={{ x: 0, opacity: 0, scale: 1 }}
            transition={{ duration: delayConst * 0.75 }}
            className='h-screen flex items-center justify-center'>
                <img className='w-[200px] h-[200px] md:w-[300px] md:h-[300px]' src={logo} alt='intro-logo'/>
            </motion.div>
            <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: delayConst, duration: delayConst * 0.75 }}
            className='absolute inset-0 flex flex-col justify-center items-center text-white'>
                <div className='flex flex-col md:flex-row md:w-full'>

                    <img className='select-none mt-10 px-7 py-7 mx-auto md:mx-5 flex justify-center h-[200px] w-[200px] md:h-[350px] md:w-[350px] filter brightness-60 hover:scale-110 transition 100'
                        src={bookMockup} alt='book-mockup' />

                    <div className='w-full md:w-1/2'>
                        <div className='text-center md:text-left'>
                            <h2 className='py-3 text-base md:text-xl font-normal text-white'> The official website of the release of the e-book</h2>
                            <h3 className='px-4 text-xl md:text-3xl font-semibold text-yellow-200 md:border-l-4 md:border-yellow-200'> MY BIBLE JOURNEY </h3>
                            <ul className='mx-5 text-left px-7 md:px-1 my-6 text-sm md:text-base font-light list-disc'>
                                <li>access to the author's personal notes on key events, themes and takeaways of all 66 books of the bible </li>
                                <li>gain deeper insight by exploring the relevant context of the biblical books</li>
                                <li>an illustration of how the dots of the entire biblical story are connected, including key genealogies</li>
                            </ul>
                            <div className='block mx-auto md:mx-2 w-4/5'>
                                <Link
                                    key={'about'}
                                    to={'about'}
                                    spy={true}
                                    offset={-100}
                                    smooth={true}
                                    duration={500}
                                    className="my-5 mx-10 block text-center bg-yellow-200 text-black px-15 py-1 rounded-full text-base md:text-lg font-normal
                                hover:cursor-pointer hover:bg-yellow-300 transition 100"
                                >
                                    learn more
                                </Link>
                                <a className='my-3 mx-10 block text-center bg-yellow-200 text-black px-15 py-1 rounded-full text-base md:text-lg font-normal
                                hover:cursor-pointer hover:bg-yellow-300 transition 100'
                                    href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                                    buy this e-book now
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;

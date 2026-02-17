import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Transition } from '@headlessui/react';
import logo from '../assets/mbj-icon.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const delayConst = 1.75;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            setIsScrolled(scrollTop > 20);
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    const links = [
        { id: "home", title: "home", offset: -100 },
        { id: "preview", title: "preview", offset: 60 },
        { id: "about", title: "about", offset: -60 },
        { id: "statement", title: "faith", offset: -60 },
        { id: "contact", title: "contact", offset: -60 },
        { id: "donate", title: "donate", offset: -60 },
    ];

    return (
        <nav id='navbar' role='navigation' aria-label='Main navigation' className={`bg-gray-900 w-full fixed z-50 ${isScrolled && !isOpen ? 'bg-opacity-70 backdrop-blur-md' : ''}`}>
            {/* Scroll Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800/50" role='progressbar' aria-label='Page scroll progress' aria-valuenow={Math.round(scrollProgress)} aria-valuemin='0' aria-valuemax='100'>
                <div 
                    className="h-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: delayConst, duration: delayConst * 0.5 }}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-2xl rounded-md text-white transition 100
                            hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {/* Icon when menu is closed */}
                            {!isOpen ? (
                                <GiHamburgerMenu aria-hidden='true' />
                            ) : (
                                // Icon when menu is open
                                <RxCross2 aria-hidden='true' />
                            )}
                        </motion.button>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        {/* Logo */}
                        <Link
                            to="home"
                            spy={true}
                            offset={-100}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="flex-shrink-0 flex items-center select-none cursor-pointer group"
                        >
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ 
                                    delay: delayConst, 
                                    duration: delayConst * 0.5,
                                    ease: "linear"
                                }}
                                className="block h-12 w-auto select-none group-hover:drop-shadow-[0_0_6px_rgba(254,240,138,0.3)] transition-all duration-300"
                                src={logo}
                                alt="MBJ-LOGO"
                            />
                            <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                delay: delayConst, 
                                duration: delayConst * 0.5,
                                ease: "linear"
                            }}
                            className="hidden lg:block h-8 mx-5 w-auto
                            text-yellow-200 font-semibold text-lg tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                                my bible journey
                            </motion.h2>
                        </Link>
                        {/* Desktop version: Navigation links */}
                        <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: delayConst, duration: delayConst * 0.5 }}
                        className="hidden md:flex md:ml-auto md:mr-6 my-3">
                            <div className="flex space-x-3">
                                {links.map(({ id, title, offset }) => (
                                    <Link
                                        key={id}
                                        to={id}
                                        spy={true}
                                        offset={offset}
                                        smooth={true}
                                        duration={500}
                                        className='text-gray-300 px-5 py-1.5 rounded-full text-sm font-normal border border-white/5 bg-gray-800/30
                                        hover:cursor-pointer hover:bg-gray-800/60 hover:text-white hover:border-white/10 transition-all duration-200'
                                        activeClass='bg-gray-800/70 text-yellow-200 border-yellow-200/20 hover:bg-gray-800/80'
                                    >
                                        {title}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile version: Navigation links */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-4 pt-2 pb-3 space-y-2 bg-gray-900/95 border-b border-white/5">
                        {links.map(({ id, title, offset }) => (
                            <Link
                                key={id}
                                to={id}
                                spy={true}
                                offset={offset}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:bg-gray-800/60 hover:text-white select-none
                                block px-4 py-2.5 rounded-xl text-base hover:cursor-pointer border border-white/5 bg-gray-800/30 transition-all duration-200"
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                    <div id='overlay'
                    className='h-screen backdrop-blur-lg bg-gray-900/60'
                    onClick={() => setIsOpen(!isOpen)}/>
                </div>
            </Transition>
        </nav>
    );
};

export default Navbar;

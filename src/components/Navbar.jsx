import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Transition } from '@headlessui/react';
import logo from '../assets/mbj-icon.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 20); // Set the threshold as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        { id: "home", title: "home", offset: -100 },
        { id: "about", title: "about", offset: -55 },
        { id: "contact", title: "contact", offset: -60 },
        { id: "donate", title: "charity", offset: -100 },
    ];

    return (
        <nav id='navbar' className={`bg-gray-900 w-full fixed z-50 ${isScrolled && !isOpen ? 'bg-opacity-70 backdrop-blur-md' : ''}`}>
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-2xl rounded-md text-white transition 100
                            hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {/* Icon when menu is closed */}
                            {!isOpen ? (
                                <GiHamburgerMenu/>
                            ) : (
                                // Icon when menu is open
                                <RxCross2/>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center select-none">
                            <img
                                className="block h-12 w-auto select-none"
                                src={logo}
                                alt="MBJ-LOGO"
                            />
                            <h2 className="hidden lg:block h-8 mx-5 w-auto
                            text-yellow-200 font-semibold text-xl">
                                my bible journey
                            </h2>
                        </div>
                        {/* Desktop version: Navigation links */}
                        <div className="hidden md:flex md:ml-auto md:mr-6 my-3">
                            <div className="flex space-x-5">
                                {links.map(({ id, title, offset }) => (
                                    <Link
                                        key={id}
                                        to={id}
                                        spy={true}
                                        offset={offset}
                                        smooth={true}
                                        duration={500}
                                        className='bg-gray-900 text-white px-7 py-1 rounded-full text-lg font-normal
                                        hover:cursor-pointer hover:bg-gray-700 transition 100'
                                        activeClass='bg-gray-700 text-white hover:bg-gray-800'
                                    >
                                        {title}
                                    </Link>
                                ))}
                            </div>
                        </div>
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
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                        {links.map(({ id, title, offset }) => (
                            <Link
                                key={id}
                                to={id}
                                spy={true}
                                offset={offset}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:bg-gray-700 select-none
                                block px-3 py-2 rounded-md text-lg hover:cursor-pointer"
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                    <div id='overlay'
                    className='h-screen backdrop-blur-md bg-gray-900'
                    onClick={() => setIsOpen(!isOpen)}/>
                </div>
            </Transition>
        </nav>
    );
};

export default Navbar;

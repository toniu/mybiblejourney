import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';

const StickyCTA = () => {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeEl = document.getElementById('home');
            const donateEl = document.getElementById('donate');
            if (!homeEl) return;

            const pastHome = window.scrollY > homeEl.offsetHeight - 200;
            const scrollBottom = window.scrollY + window.innerHeight;
            const nearFooter = donateEl ? scrollBottom > donateEl.offsetTop + 80 : false;

            setVisible(pastHome && !nearFooter);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && !dismissed && (
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 80, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className='fixed bottom-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-md border-t border-white/10'
                >
                    <div className='max-w-5xl mx-auto flex items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3'>
                        <p className='hidden sm:block text-sm text-gray-200 font-light truncate'>
                            Personal Bible notes covering all 66 books
                        </p>
                        <div className='flex-1 flex justify-center sm:justify-end'>
                            <a
                                className='inline-block bg-yellow-200 text-black px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-yellow-200/20 hover:bg-yellow-300 hover:scale-105 transition-all duration-200'
                                href='https://www.amazon.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Get Early Access
                            </a>
                        </div>
                        <button
                            type='button'
                            aria-label='Dismiss'
                            onClick={() => setDismissed(true)}
                            className='shrink-0 text-gray-400 hover:text-white transition-colors p-1'
                        >
                            <RxCross2 className='text-base sm:text-lg' />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;

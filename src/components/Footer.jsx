import React from 'react'
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='footer w-full bg-gray-900 text-[#eee] px-4 py-8' role='contentinfo' aria-label='Site footer'>
            <div className='container max-w-[1240px] text-center m-auto'>
                <nav aria-label='Social media links'>
                    <ul className='flex justify-center text-3xl'>
                        <li className='nav-item p-4'>
                            <a 
                                href="https://www.instagram.com/mybiblejourneyig" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mx-8 hover:text-yellow-200 transition 100"
                                aria-label="Follow us on Instagram"
                            >
                                <FaInstagram aria-hidden='true' />
                            </a>
                        </li>
                        <li className='nav-item p-4'>
                            <a 
                                href="https://www.threads.net" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mx-8 hover:text-yellow-200 transition 100"
                                aria-label="Follow us on Threads"
                            >
                                <FaThreads aria-hidden='true' />
                            </a>
                        </li>
                        <li className='nav-item p-4'>
                            <a 
                                href="https://www.tiktok.com/@mybiblejourneytt" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mx-8 hover:text-yellow-200 transition 100"
                                aria-label="Follow us on TikTok"
                            >
                                <FaTiktok aria-hidden='true' />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='bottom text-center pt-12'>
                    <span className='line mb-4' aria-hidden='true'></span>
                    <p>&copy; {new Date().getFullYear()} toni., inc. all rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
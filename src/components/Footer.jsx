import React from 'react'
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
// import './css/Footer.css'

const Footer = () => {
    return (
        <div className='footer w-full bg-gray-900 text-[#eee] px-4 py-8'>
            <div className='container max-w-[1240px] text-center m-auto'>
                <ul className='flex justify-center text-3xl'>
                    <li className='nav-item p-4'>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-yellow-200 transition 100">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-yellow-200 transition 100">
                            <FaThreads/>
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-yellow-200 transition 100">
                            <FaTiktok/>
                        </a>
                    </li>
                </ul>
                <div className='bottom text-center pt-12'>
                    <span className='line mb-4'></span>
                    <p>2024 toni., inc. all rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
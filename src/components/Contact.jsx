import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { FaPaperPlane } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const emailKey = `${process.env.REACT_APP_EFL}`

    const [state, handleSubmit] = useForm(emailKey);
    if (state.succeeded) {
        return (
        <div className='block pt-20 md:pt-5 pb-20 hover:scale-110 cursor-default transition 100'>
            <FaPaperPlane className='mx-auto text-5xl text-yellow-200' />
            <p className='  py-2 bg-gray-900 text-yellow-200 font-bold text-xl text-center cursor-default'>
            Message sent!
            </p>
            <p className='bg-gray-900 text-white text-xl text-center cursor-default'>
            Thank you for sending your inquiry
            </p>
        </div>
        )

    }

    return (
        <div id='contact' className='relative h-auto bg-gray-900 flex justify-center items-center'>
            <div className="w-4/5 px-5 py-10 rounded-lg shadow-md">
                <p className="text-base md:text-lg font-light text-center md:text-left text-white mb-4">Got any inquries about the e-book? Get in touch and fill out the form below</p>
                <ul className='flex justify-center md:justify-start text-2xl text-white'>
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
                            <FaThreads />
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-yellow-200 transition 100">
                            <FaTiktok />
                        </a>
                    </li>
                </ul>

                <form onSubmit={handleSubmit}
                    className="flex flex-wrap gap-x-5">
                    <div className="mb-4 flex-grow">
                        <label htmlFor="firstName" className="block text-white text-lg text-left">First Name </label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input mt-1 px-3 py-1 rounded-full block w-full transition-all 100 text-black hover:bg-yellow-100 focus:bg-yellow-100" required />
                    </div>
                    <div className="mb-4 flex-grow">
                        <label htmlFor="lastName" className="block text-white text-lg text-left">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input mt-1 px-3 py-1 rounded-full block w-full transition-all 100 text-black hover:bg-yellow-100 focus:bg-yellow-100" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="email" className="block text-white text-lg text-left">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 px-3 py-1 rounded-full block w-full transition-all 100 text-black hover:bg-yellow-100 focus:bg-yellow-100" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="message" className="block text-white text-lg text-left">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-textarea mt-1 px-3 py-1 rounded-lg block w-full transition-all text-black hover:bg-yellow-100 focus:bg-yellow-100" rows="5" required></textarea>
                    </div>
                    <div className="w-full my-2 text-center md:text-left">
                        <button type="submit"
                            className="bg-yellow-200 text-black text-lg py-1 px-24 rounded-full hover:bg-yellow-300 transition duration-200">
                            submit message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

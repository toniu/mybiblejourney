import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement logic to send the form data
        console.log(formData);
    };

    return (
        <div id='contact' className='relative h-screen bg-gray-900 flex justify-center items-center'>
            <div className="w-4/5 p-2 rounded-lg shadow-md">
            <p className="text-lg font-light text-center md:text-left text-white mb-4">Got any inquries about the e-book? Get in touch and fill out the form below</p>
            <ul className='flex justify-center md:justify-start text-2xl text-white'>
                    <li className='nav-item p-4'>
                        <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-yellow-200 transition 100">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-yellow-200 transition 100">
                            <FaThreads/>
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-yellow-200 transition 100">
                            <FaTiktok/>
                        </a>
                    </li>
                </ul>
            
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-x-5">
                    <div className="mb-4 flex-grow">
                        <label htmlFor="firstName" className="block text-white text-lg text-left">First Name</label>
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
                        <button type="submit" className="bg-yellow-200 text-black text-lg py-1 px-16 rounded-full hover:bg-yellow-300 transition duration-200">submit message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import { Link } from 'react-scroll';
import mbjIcon from '../assets/zoom-in-img.png'
import { FaQuoteLeft  } from "react-icons/fa";


const About = () => {
    return (
        <div id='about' className='relative h-screen bg-gray-900'>
            <div className='flex flex-col md:flex-row md:w-full py-2'>
                <img className='px-5 pt-10 mx-auto md:mx-5 flex justify-center
                h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full'
                    src={mbjIcon} alt='book-icon' />
                <div className='px-1 w-full md:w-[70%]'>
                    <div className='text-center md:text-left w-full'>
                        <p className='mx-5 px-7 md:px-1 my-6 text-sm md:text-base font-light text-white'>
                        <FaQuoteLeft className='font-3xl text-gray-600 font-bold'/>
                       "My Bible Journey" is a project created by the author, <span className='font-bold'> Neka Toni-Uebari </span>, who is a devout follower of Jesus and is British-Nigerian. The intention of this book is to provide a digestive understanding of each book of the Bible for all students of the Bible. A massive shout-out and credit to <a className='font-bold hover:text-yellow-200 transition 100' href="https://bibleproject.com/" target="_blank" rel="noopener noreferrer"> The Bible Project</a> for inspiring the content. While this book is not affiliated with them, it draws heavily from their resources, including visual summaries of each Bible book.
                        </p>
                        <p className='mx-5 px-7 md:px-1 my-6 text-sm md:text-base font-light text-white'>
                        The inspiration for the idea came from a testimony of myself wanting to grow deep intimacy with God’s Word. Reading the bible had initially felt like a chore and nothing was going to change until I had a hunger for it. Everyday I was flicking through “verse of the day” and calling it a day… something felt missing. Surely all these different passages I was reading all connected in some way to produce a beautiful story that pointed to the truth. I had to start all over again, all the way from Genesis… to Revelation… From the Old Testament… to the New Testament… The dots truly connect. The law, the history, the wisdom, the prophecy, the gospels, the early church, the letters and the revelation. The creation once destroyed by mankind but restored by God into a new creation. Embark in this journey so that you can follow the One who is <span className='font-bold'> the way, the truth and the life. </span>
                        </p>
                        <p className='mx-2 pb-5 text-white'> - Neka Toni-Uebari </p>
                        <Link
                            key={'buy'}
                            to={'buy'}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            duration={500}
                            className="bg-yellow-200 text-black px-12 py-1 rounded-full text-lg font-normal
                                hover:cursor-pointer hover:bg-yellow-300 transition 100"
                            activeClass="bg-yellow-200 text-gray-900 hover:bg-yellow-200"
                        >
                            buy the e-book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
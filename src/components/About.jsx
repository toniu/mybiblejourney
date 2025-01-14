import React from 'react';
import mbjIcon from '../assets/zoom-in-img.png'
import { FaQuoteLeft } from "react-icons/fa";


const About = () => {
    return (
        <div id='about' className='relative h-auto bg-gray-900'>
            <div className='flex flex-col md:flex-row md:w-full py-10'>
                <img className='px-5 pt-10 mx-auto md:mx-5 flex justify-center
                h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full'
                    src={mbjIcon} alt='book-icon' />
                <div className='px-1 w-full md:w-[70%]'>
                    <div className='text-center md:text-left w-full'>
                        <FaQuoteLeft className='block mx-5 font-3xl text-gray-500 font-bold' />
                        <p className='mx-5 px-2 md:px-1 my-6 text-sm md:text-base font-light text-white'>
                            "My Bible Journey" is a project created by the author, <span className='font-bold'> Neka Toni-Uebari </span>, who is a devout follower of Jesus and is British-Nigerian. The intention of this book is to help Christians have a digestive understanding and summary of the context, themes and key events (in accordance to the writers’ understanding of the books they wrote) wrapped up with final takeaways of each of the 66 books of the Bible. The book also includes helpful key definitions, genealogies and terminologies throughout the Bible. Readers should be guided by the illumination of the infallible Holy Spirit that directs them to all truth and opens up the Christological reading of the Scriptures in understanding God in Christ.
                        </p>
                        <p className='mx-5 px-2 md:px-1 my-6 text-sm md:text-base font-light text-white'>
                        The inspiration for this idea came from a testimony of myself wanting to grow in the knowledge and love of Christ which is revealed in the Scriptures. Reading the Bible had initially felt like a chore and it seemed boring. Everyday I was flicking through “verse of the day” and calling it a day, where something felt missing. Surely all these different passages I was reading all connected in some way to produce a beautiful story that pointed to the truth of God. I had to start all over again, all the way from Genesis... to Revelation... and the dots truly connect. The revelation of the New Testament which connects the testimony of God in the Old Testament that ultimately pointed to Christ. The Logos of God has always been present and is revealed in the person of Jesus, who is eternal Word of God. The Scriptures are also indeed God-breathed.
                        </p>
                        <p className='mx-5 px-2 md:px-1 my-6 text-sm md:text-base font-light text-white'>
                        Writing and editing this book has been a journey (yes, like the name of the book itself I know!). I was revealed to a lot of learning and unlearning which drew me into much stronger faith in Christ and how I used to understand the Scriptures. The lens we read our Scriptures must be centred on Christ to solve the shadows and mysteries we read in Scriptures. The Scriptures testify of Him, who is the Son of God that reveals the Father. The whole world is invited to enter into fellowship and union with the Father through the Son by the Holy Spirit. The love of God that came running for His creation that was once ruined by mankind, so that He can restore and reconcile His creation to Him. The Scriptures present the journey of the one true God who never changed, but where our understanding of Him changed instead.
                        </p>
                        <p className='mx-5 px-2 md:px-1 my-6 text-sm md:text-base font-light text-white'>
                        I also want to give a big shout-out to
                        <a className='font-bold hover:text-yellow-200 transition 100' href="https://bibleproject.com/" target="_blank" rel="noopener noreferrer"> The Bible Project. </a>
                        
                        While this book is not affiliated with them, they have been a game changer in sparking the ideas, influence and inspiration behind this book. Their visual videos and insights made diving into the Bible a lot more fun and understandable. A huge thanks to the entire team at The Bible Project for creating such fantastic resources. Feel encouraged to also explore and expand on your theological study of the Bible using their resources provided in their website.

Immanuel. God is with us.
The risen King Jesus is Lord and Saviour.
Grace be to you all and God bless.
                        </p>
                        <p className='mx-2 pb-5 text-white'> - Neka Toni-Uebari </p>
                        <a className='bg-yellow-200 text-black px-20 py-1 rounded-full text-lg font-normal
                                hover:cursor-pointer hover:bg-yellow-300 transition 100'
                            href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                            coming soon
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
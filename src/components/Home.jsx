import React from 'react';
import videoBg from '../assets/mbj-moving-bg.mp4';
import bookMockup from '../assets/mbj-book-mockup.png';
const Home = () => {

    return (
        <div id='home' className='relative h-screen'>
            
            <div className='absolute inset-0 overflow-hidden'>
                <video className='object-cover w-full h-full' src={videoBg} autoPlay loop muted />
            </div>
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
                <div className='flex flex-col md:flex-row md:w-full'>

                    <img className='flex justify-center w-[200px] md:w-[350px] filter brightness-60'
                        src={bookMockup} alt='book-mockup' />

                    <div className='w-full md:w-1/2'>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold'>Content on top of video background</h1>
                            <p className='mt-4 text-lg'>Additional content here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

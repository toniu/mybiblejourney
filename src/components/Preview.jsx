import React from 'react';
import otImg from '../assets/mbj-ot-show.png'
import ntImg from '../assets/mbj-nt-show.png'
import gnImg from '../assets/mbj-gn-show.png'

const Preview = () => {
    return (
        <div id='preview' className='relative h-screen md:h-auto py-12 lg:py-3 bg-gray-900'>
            <div className='px-10 mx-auto w-full block lg:flex justify-center gap-x-5'>
                <div className='flex justify-center'>
                    <img className='w-[200px] lg:w-[300px] hover:scale-110 transition 100'
                        src={otImg} alt='old testament examples' />
                    <img className='w-[200px] lg:w-[300px] hover:scale-110 transition 100'
                        src={ntImg} alt='new testament examples' />
                </div>
                <div className='flex justify-center'>
                    <img className='w-[500px] lg:w-[600px] hover:scale-110 transition 100'
                        src={gnImg} alt='genealogies' />
                </div>
            </div>

        </div>
    );
};

export default Preview;
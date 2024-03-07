import React, { useState } from 'react';
import otImg from '../assets/mbj-ot-show.png';
import ntImg from '../assets/mbj-nt-show.png';
import gnImg from '../assets/mbj-gn-show.png';

const Preview = () => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [imageToZoom, setZoomImage] = useState(null);

    const toggleZoom = (id) => {
        setIsZoomed(!isZoomed);
        setZoomImage(id);
    };

    return (
        <div id='preview' className='relative h-screen md:h-auto py-12 lg:py-3 bg-gray-900'>
            <div className='px-10 mx-auto w-full block lg:flex justify-center gap-x-5'>
                <div className='flex justify-center'>
                    <img className='w-[200px] lg:w-[300px] hover:scale-110 hover:cursor-zoom-in transition 100'
                        src={otImg} alt='old testament examples'
                        onClick={() => toggleZoom(otImg)}/>
                    <img className='w-[200px] lg:w-[300px] hover:scale-110 hover:cursor-zoom-in transition 100'
                        src={ntImg} alt='new testament examples'
                        onClick={() => toggleZoom(ntImg)}/>
                </div>
                <div className='flex justify-center'>
                    <img id='gnImg' className='w-[500px] lg:w-[600px] hover:scale-110 hover:cursor-zoom-in transition 100'
                        src={gnImg} alt='genealogies'
                        onClick={() => toggleZoom(gnImg)}/>
                </div>
                {isZoomed && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hover:cursor-zoom-out"
                    onClick={() => toggleZoom(null)}>
                        <img src={imageToZoom} alt={'alt'} className="max-w-full max-h-full" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Preview;

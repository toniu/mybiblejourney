import React, { useState } from 'react';
import iconsTop from '../assets/mbj-icons-top.png'
import iconsBottom from '../assets/mbj-icons-bottom.png'
/* Preview-book images */
import otImg from '../assets/mbj-ot-show.png';
import ntImg from '../assets/mbj-nt-show.png';
import gnImg from '../assets/mbj-gn-show.png';

/* Category icons */
import miTorah from '../assets/mi-torah.png';
import miHistory from '../assets/mi-history.png';
import miWisdom from '../assets/mi-wisdom.png';
import miMajor from '../assets/mi-majorprophets.png';
import miMinor from '../assets/mi-minorprophets.png';

import miGospels from '../assets/mi-gospels.png';
import miActs from '../assets/mi-earlychurch.png';
import miPauline from '../assets/mi-pauline.png';
import miGeneral from '../assets/mi-general.png';
import miRevelation from '../assets/mi-revelation.png';

const Preview = () => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [imageToZoom, setZoomImage] = useState(null);

    const otIcons = [
        { title: 'Torah', img: miTorah, description: '' },
        { title: 'History', img: miHistory, description: '' },
        { title: 'Poetry', img: miWisdom, description: '' },
        { title: 'Major Prophets', img: miMajor, description: '' },
        { title: 'Minor Prophets', img: miMinor, description: '' },
    ]

    const ntIcons = [
        { title: 'Gospels', img: miGospels, description: '' },
        { title: 'History of the early church', img: miActs, description: '' },
        { title: `Paul's letters to the churches`, img: miPauline, description: '' },
        { title: 'General letters', img: miGeneral, description: '' },
        { title: 'Revelation', img: miRevelation, description: '' },
    ]

    const toggleZoom = (id) => {
        setIsZoomed(!isZoomed);
        setZoomImage(id);
    };

    const iconsSliderContainer = "w-full h-[330px] overflow-hidden relative";

    return (
        <div id='preview' className='relative h-auto md:h-auto pb-12 lg:pb-3 bg-gray-900'>
            <div className={iconsSliderContainer}>
                <div className="h-full absolute top-0 right-0 w-full bg-repeat animate-slide-left" style={{ backgroundImage: `url(${iconsTop})` }} />
                <div className="h-full absolute top-0 right-full w-full bg-repeat animate-slide-left" style={{ backgroundImage: `url(${iconsTop})` }} />
            </div>

            <div className='p-10'>
                {/* Old Testament categories */}
                <div className='py-2 flex flex-wrap justify-center gap-x-7 gap-y-3'>
                    {otIcons.map(({ title, img }) => (
                        <div className="relative">
                            <img
                                src={img}
                                alt={title}
                                className='max-w-1/4 h-auto drop-shadow-2xl w-[115px] md:w-[180px] rounded-full transition duration-300 ease-in-out'
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black rounded-full bg-opacity-90 transition duration-200 ease-in-out
                cursor-default hover:opacity-100 focus:opacity-100">
                                <span className="text-white text-center text-sm md:text-base font-semibold select-none">{title}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* New Testament categories */}
                <div className='py-2 flex flex-wrap justify-center gap-x-7 gap-y-3'>
                    {ntIcons.map(({ title, img }) => (
                        <div className="relative">
                            <img
                                src={img}
                                alt={title}
                                className='max-w-1/4 h-auto drop-shadow-2xl w-[115px] md:w-[180px] rounded-full transition duration-300 ease-in-out'
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black rounded-full bg-opacity-90 transition duration-200 ease-in-out
                cursor-default hover:opacity-100 focus:opacity-100">
                                <span className="text-white text-center text-sm md:text-base font-semibold select-none">{title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>





            <div className='px-10 mx-auto w-full block lg:flex justify-center gap-x-5'>
                <div className='flex justify-center'>
                    <img className='w-[200px] lg:w-[300px] hover:scale-110 hover:cursor-zoom-in transition 100'
                        src={otImg} alt='old testament examples'
                        onClick={() => toggleZoom(otImg)} />
                    <img className='w-[200px] lg:w-[300px] hover:scale-110 hover:cursor-zoom-in transition 100'
                        src={ntImg} alt='new testament examples'
                        onClick={() => toggleZoom(ntImg)} />
                </div>
                <div className='flex justify-center'>
                    <img id='gnImg' className='w-[500px] lg:w-[600px] hover:scale-110 hover:cursor-zoom-in transition 100'
                        src={gnImg} alt='genealogies'
                        onClick={() => toggleZoom(gnImg)} />
                </div>
                {isZoomed && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hover:cursor-zoom-out"
                        onClick={() => toggleZoom(null)}>
                        <img src={imageToZoom} alt={'alt'} className="max-w-full max-h-full" />
                    </div>
                )}
            </div>
            <div className={iconsSliderContainer}>
                <div className="h-full absolute top-0 left-0 w-full bg-repeat animate-slide-right" style={{ backgroundImage: `url(${iconsBottom})` }} />
                <div className="h-full absolute top-0 left-full w-full bg-repeat animate-slide-right" style={{ backgroundImage: `url(${iconsBottom})` }} />
            </div>
        </div>
    );
};

export default Preview;

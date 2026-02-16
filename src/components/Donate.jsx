import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import React from 'react';

/* Charity-logo Images */
import img1 from '../assets/bc-world-vision.png';
import img2 from '../assets/bc-compassion-international.png';
import img3 from '../assets/bc-convoy-of-hope.png';
import img4 from '../assets/bc-the-salvation-army.png';
import img5 from '../assets/bc-world-relief.png';
import img6 from '../assets/bc-hope-international.png';
import img7 from '../assets/bc-samaritans-purse.png';
import img8 from '../assets/bc-childrens-hunger-fund.png';
import img9 from '../assets/bc-cross-international.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Custom arrows for slider */
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className='text-4xl z-30 text-white hover:text-yellow-200 transition 100 absolute top-1/2 right-0 transform -translate-y-1/2'
        onClick={onClick}
      >
        <FaCircleArrowRight/>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className='text-4xl z-30 text-white hover:text-yellow-200 transition 100 absolute top-1/2 left-0 transform -translate-y-1/2'
        onClick={onClick}
      >
        <FaCircleArrowLeft/>
      </button>
    );
  }


const Donate = () => {

    const charities = [
        {
            title: 'World Vision',
            description: '“Working with the poor and oppressed to promote human transformation, seek justice, and bear witness to the good news of the Kingdom of God.”',
            imageUrl: img1,
            link: 'https://www.wvi.org/',
        },
        {
            title: 'Compassion International',
            description: '“We blend physical, social, economic and spiritual care together to help children in poverty fully mature in every facet of life.”',
            imageUrl: img2,
            link: 'https://www.compassion.com/',
        },
        {
            title: 'Convoy of Hope',
            description: '“A humanitarian, faith-based organization on a mission to feed the hungry and bring help and hope to communities that need it most.”',
            imageUrl: img3,
            link: 'https://convoyofhope.org/#content',
        },
        {
            title: 'The Salvation Army',
            description: '“The Salvation Army meets human need wherever, whenever, and however we can.”',
            imageUrl: img4,
            link: 'https://www.salvationarmy.org.uk/',
        },
        {
            title: 'World Relief',
            description: '“Together we’re creating change that lasts—today, tomorrow and for generations to come.”',
            imageUrl: img5,
            link: 'https://worldrelief.org/?utm_source=adwords&utm_medium=ppc&utm_campaign=LM-WR-Search-GBL-All-NAV-Home&utm_term=world%20relief&gad=1',
        },
        {
            title: 'Hope International',
            description: '“We invest in the dreams of families in the world’s underserved communities as we proclaim and live the Gospel.”',
            imageUrl: img6,
            link: 'https://www.hopeinternational.org/',
        },
        {
            title: `Samaritan's Purse`,
            description: '“To suffering people in a broken world, we share the news of the only One who can bring true peace—Jesus Christ, the Prince of Peace.”',
            imageUrl: img7,
            link: 'https://www.samaritanspurse.org/',
        },
        {
            title: `Children's Hunger Fund`,
            description: '“Our mission is to deliver hope to suffering children.”',
            imageUrl: img8,
            link: 'https://childrenshungerfund.org/about/',
        },
        {
            title: 'Cross International',
            description: '“We partner with churches and local Christian ministries to deliver critical aid and long‑term solutions.”',
            imageUrl: img9,
            link: 'https://crossinternational.org/',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,

        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    };

    return (
        <div id='donate' className="bg-gray-900 relative h-auto py-12 overflow-x-hidden">
            <div className='w-10/12 md:w-9/12 mx-auto'>
                <div className='text-center md:text-left'>
                    <p className='text-xs md:text-sm tracking-widest uppercase text-yellow-200'>Charity</p>
                    <h3 className='text-xl md:text-2xl font-semibold text-white mt-2'>Giving Plan</h3>
                    <p className='mt-3 text-sm md:text-base font-light text-gray-200'>
                        A percentage of profits from this book will be donated to Christian charities that serve vulnerable people with compassion and integrity. You’re invited to explore these ministries and prayerfully support one of them.
                    </p>
                </div>

                <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-4'>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200 text-gray-900 font-bold text-sm flex-shrink-0'>
                                1
                            </div>
                            <p className='text-yellow-200 font-semibold'>Choose a focus</p>
                        </div>
                        <p className='text-sm text-gray-200 mt-1 pl-9'>Children, relief, church missions, or long‑term development.</p>
                    </div>
                    <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-4'>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200 text-gray-900 font-bold text-sm flex-shrink-0'>
                                2
                            </div>
                            <p className='text-yellow-200 font-semibold'>Visit & verify</p>
                        </div>
                        <p className='text-sm text-gray-200 mt-1 pl-9'>Review their mission, transparency, and impact reports.</p>
                    </div>
                    <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-4'>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200 text-gray-900 font-bold text-sm flex-shrink-0'>
                                3
                            </div>
                            <p className='text-yellow-200 font-semibold'>Give prayerfully</p>
                        </div>
                        <p className='text-sm text-gray-200 mt-1 pl-9'>Even a small, consistent gift makes a lasting difference.</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <Slider {...settings}>
                        {charities.map((p, index) => (
                            <a key={index} className='px-6 h-[520px] text-black flex justify-center text-center
                            hover:-translate-y-2 hover:shadow-2xl transition 200'
                            href={p.link} target="_blank" rel="noopener noreferrer">

                                <div
                                    className='rounded-t-2xl bg-gray-500 flex justify-center text-center items-center'
                                    style={{
                                        backgroundImage: `url(${p.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '45%',
                                        width: '100%',
                                    }}
                                />

                                <div className='flex flex-col rounded-b-2xl bg-white justify-between text-base md:text-lg items-center gap-4 p-6 h-[55%]'>
                                    <div>
                                        <p className='font-bold text-gray-900'> {p.title} </p>
                                        <p className='font-normal text-sm md:text-base text-gray-700 mt-3'> {p.description} </p>
                                    </div>
                                    <span className='text-sm font-semibold text-yellow-700'>visit website →</span>
                                </div>
                            </a>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Donate;

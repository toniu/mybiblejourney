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
            link: 'https://www.compassion.com//',
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
            title: 'The Salvation Army',
            description: '“The Salvation Army meets human need wherever, whenever, and however we can.”',
            imageUrl: img5,
            link: 'https://www.salvationarmy.org.uk/',
        },
        {
            title: 'World Relief',
            description: '“Together we’re creating change that lasts—today, tomorrow and for generations to come.”',
            imageUrl: img6,
            link: 'https://worldrelief.org/?utm_source=adwords&utm_medium=ppc&utm_campaign=LM-WR-Search-GBL-All-NAV-Home&utm_term=world%20relief&gad=1',
        },
        {
            title: 'Hope International',
            description: '“We invest in the dreams of families in the world’s underserved communities as we proclaim and live the Gospel.”',
            imageUrl: img7,
            link: 'https://www.hopeinternational.org/',
        },
        {
            title: `Samaritan's Purse`,
            description: '“To suffering people in a broken world, we share the news of the only One who can bring true peace—Jesus Christ, the Prince of Peace.”',
            imageUrl: img8,
            link: 'https://www.samaritanspurse.org/',
        },
        {
            title: `Children's Hunger Fund`,
            description: '“Our mission is to deliver hope to suffering children.”',
            imageUrl: img9,
            link: 'https://childrenshungerfund.org/about/',
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
        <div id='donate' className="bg-gray-900 relative h-auto">
            <p className='px-10 py-5 text-center md:text-left text-sm md:text-base font-light text-white w-full'>
            Thank you for exploring my e-book. A percentage of profits from this book will be shared for donations to Christian charities of choice. As a gesture of care and compassion, I've included links to external Christian charities here. Your support for these organizations can help make a profound difference in the lives of others. Even the choice of donation to one charity of your choice will make a difference. Together, let's spread generosity to those in need as the body of Christ.
            </p>
            <div className='w-9/12 mx-auto'>
                <div className='mt-10'>
                    <Slider {...settings}>
                        {charities.map((p, index) => (
                            <a key={index} className='px-10 h-[500px] text-black flex justify-center text-center
                            hover:scale-110 transition 200'
                            href={p.link} target="_blank" rel="noopener noreferrer">

                                <div
                                    className=' bg-gray-500 flex justify-center text-center items-center'
                                    style={{
                                        backgroundImage: `url(${p.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '40%', // Set a fixed height for the image container
                                        width: '100%', // Let the width adjust automatically
                                    }}
                                >
                                    {/* No img tag */}
                                </div>

                                <div className='flex flex-col  bg-white justify-center text-base md:text-lg items-center gap-4 p-6 '>
                                    <p className='font-bold'> {p.title} </p>
                                    <p className='font-normal h-[100px] overflow-scroll text-base text-black'> {p.description} </p>
                       
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

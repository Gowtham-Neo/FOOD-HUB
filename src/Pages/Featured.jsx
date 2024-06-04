import React from 'react';
import featuredImg from '../assets/home/featured.jpg';
import SectionTitle from '../components/SectionTitle';
import './Featured.css';

const Featured = () => {
    return (
        <div className='pt-8 my-20 text-white bg-fixed featured-items'>
            <div className='p-1 bg-black bg-opacity-30'>
                <SectionTitle
                    subHeading={"Check it Out"}
                    heading={"Featured Items"}></SectionTitle>
            </div>
            <div className='flex flex-col items-center justify-center px-4 pt-12 pb-20 bg-opacity-50 md:flex-row md:px-36 bg-slate-600'>
                <div className='w-full md:w-1/2'>
                    <img src={featuredImg} alt="" className='w-full'/>
                </div>
                <div className='w-full mt-8 text-center md:w-1/2 md:ml-10 md:mt-0 md:text-left'>
                    <p className='mb-3'>23 July 2025</p>
                    <p className='mt-3 font-bold uppercase'>Where Can I Get Some?</p>
                    <p className='mt-3'>Discover the pinnacle of culinary delight in our Featured Items, where we showcase the epitome of our chef's expertise. Each dish is a carefully curated masterpiece, offering a symphony of flavors and textures that will tantalize your taste buds. From succulent cuts of prime steak to the freshest seafood creations, these highlighted selections represent the essence of FOOD HUB's culinary artistry.</p>
                    <button className="mt-3 border-0 border-b-4 btn btn-outline btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;

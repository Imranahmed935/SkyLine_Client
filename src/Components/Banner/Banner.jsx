import React from 'react';
import banner from '../../assets/images/banner.webp';

const Banner = () => {
    return (
        <div 
            className="relative w-full h-[800px] bg-cover bg-center" 
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Welcome to SkyLine Services
                </h1>
                <p className="text-xl md:text-2xl mt-4">
                    Experience luxury and efficiency with our top-notch helicopter rides!
                </p>
                <p className="mt-6 text-lg md:text-xl italic">
                    "Fly high, travel fast, and arrive in style."
                </p>
            </div>
        </div>
    );
};

export default Banner;

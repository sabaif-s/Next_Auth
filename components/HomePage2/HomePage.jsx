'use client';
import React from 'react';
import NavBarTwo from './NavBar2/NavBar2';
import Image from 'next/image';
import data from './Data.json';

export async function generateStaticProps() {
    return {
        props: {
            message: data.message,
        },
    };
}

const HomePage = () => {
    console.log("message:",data.message);
    return (
        <div className="w-full h-screen bg-white p-20">
            <div className="w-full h-full bg-black flex justify-center items-center relative">
                <div className="absolute left-0 h-full w-1/12" style={{ borderRight: "1px solid #f5f5f5" }}>
                    <div className='flex flex-col gap-y-6 py-4 h-4/6 relative z-50 justify-end items-center'>
                        {data.socialMedia.map((social, index) => (
                            <Image
                                key={index}
                                priority
                                className='cursor-pointer'
                                src={social.icon}
                                width={24}
                                height={24}
                                alt={`${social.platform} Icon`}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full h-2/3 flex relative justify-center items-start">
                    <div className="rounded-full absolute" style={{ border: "1px solid #f5f5f5", width: "260px", height: "260px" }}>
                    </div>
                    <div className="w-1/2 h-full flex justify-end items-center">
                        <div className="w-5/6 h-full flex justify-start items-center">
                            <div className="w-11/12 h-full flex flex-col gap-y-4 justify-center items-center relative">
                                <div className="w-full h-1/3 flex flex-row justify-start items-center">
                                    <div className="h-full w-6 mr-6">
                                    </div>
                                    <div>
                                        <span className="w-full flex justify-start word-break text-2xl items-center text-yellow-600">
                                            {data.agencyName}
                                        </span>
                                        <span className="w-full xl:text-4xl 2xl:text-6xl font-sans flex word-break justify-start items-center text-white">
                                            {data.mainHeadline}
                                        </span>
                                        <span className="w-full relative flex justify-center items-end font-bold xl:text-4xl 2xl:text-6xl flex word-break justify-start items-center text-yellow-400">
                                            <span className="w-full h-2/3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-yellow-200 absolute bottom-0 bg-opacity-10">
                                            </span>
                                            {data.secondaryHeadline}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full h-1/6 overflow-hidden pl-12">
                                    <span className="w-full word-break text-white">
                                        {data.description}
                                    </span>
                                </div>
                                <div className="w-full h-1/6 pl-12">
                                    <div className='w-1/2 py-4 cursor-pointer z-50 shadow-inner shadow-yellow-200 border-2 border-yellow-300 relative flex justify-start xl:justify-center items-center'>
                                        <span className='h-full flex xl:justify-center justify-start items-center text-white'>
                                            {data.buttonText}
                                        </span>
                                        <img src="/homePage2/right arrow.png" className='w-10 h-6 absolute right-2' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full pl-8 py-4 flex justify-center items-center gap-x-8">
                        <div className='w-3/4 h-full bg-red-400 relative z-50'>
                            <Image
                                priority
                                src={data.images.chair}
                                layout='fill'
                                className='w-full h-full'
                                alt="Chair Home"
                            />
                        </div>
                        <div className='w-3/4 h-full bg-green-400 relative'>
                            <Image
                                priority
                                src={data.images.plant}
                                layout='fill'
                                className='w-full h-full'
                                alt="Plant Home"
                            />
                        </div>
                        <div className='w-1/4 h-full bg-gray-400 relative'>
                            <Image
                                priority
                                src={data.images.light}
                                layout='fill'
                                className='w-full h-full object-cover'
                                alt="Light Home"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end items-end top-0 left-0 h-1/6 w-full" style={{ borderBottom: "1px solid #f5f5f5" }}>
                    <NavBarTwo />
                </div>
                <div className="absolute bottom-0 left-0 flex justify-end items-center w-full h-1/6" style={{ borderTop: "1px solid #f5f5f5" }}>
                    <div className='w-1/6 h-full bg-yellow-400 relative z-50'>
                        <div className="absolute z-50 inset-0 -top-[4px] -left-[4px] shadow-lg shadow-yellow-400"></div>
                    </div>
                </div>
                <div className="left-0 bottom-0 w-1/2 h-5/6" style={{ position: "absolute", borderRight: "1px solid #f5f5f5" }}>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

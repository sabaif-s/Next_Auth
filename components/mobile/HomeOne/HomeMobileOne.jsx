import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import data from './Data.json';
const HomeMobileOne = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

    const isInView1 = useInView(section1Ref, { once: false });
    const isInView2 = useInView(section2Ref, { once: false });
    const isInView3 = useInView(section3Ref, { once: false });
    const isInView4 = useInView(section4Ref, { once: false });
    const isInView5 = useInView(section5Ref, { once: false });

    return (
        <div className='w-full relative bg-blue-100 flex flex-col justify-center items-center pb-4'>
            <motion.div
                ref={section1Ref}
                className='w-full h-full flex flex-col justify-center items-center bg-red-400'
                initial={{ opacity: 0, y: -10 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5 , delay:0.5}}
            >
                <div className='w-full flex justify-between px-6 pt-4 items-start bg-blue-600' style={{ height: "80px" }}>
                    <div>
                        <span className='text-white font-bold'>
                             {data.sections[0].title}
                        </span>
                    </div>
                    <div>
                        <span className='text-yellow-600 font-semibold'>
                        {data.sections[0].website}
                        </span>
                    </div>
                </div>
                <div className='w-full relative bg-yellow-400' style={{ height: "250px" }}>
                    <div className='absolute inset-0  z-50 flex justify-center -top-6'>
                        <div className='w-2/3 h-20 bg-gray-700 bg-opacity-50 flex flex-col justify-center items-center py-2 gap-y-0'>
                            <span className='text-white font-semibold text-xl'>
                            {data.sections[0].newsletter.name}
                            </span>
                            <span className='text-yellow-400'>
                            {data.sections[0].newsletter.subtitle}
                            </span>
                        </div>
                    </div>
                    <Image src="/mobileHome/stretch4.jpg" objectFit='cover' className='z-10' layout='fill' alt="top Image"/>
                    {/* <img src="/mobileHome/stretch4.jpg" className='w-full h-full object-cover' alt="" /> */}
                </div>
            </motion.div>

            <motion.div
                ref={section2Ref}
                className='w-full bg-white flex flex-col gap-y-2 justify-start items-center'
                style={{ height: "200px" }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }}
            >
                <div className='w-1/4 h-4 bg-yellow-400'></div>
                <div className='flex flex-col gap-y-2 justify-start items-center'>
                    <span className='text-xl text-blue-400'>
                    {data.sections[1].highlight}
                    </span>
                    <span className='w-full px-4 text-center word-break'>
                    {data.sections[1].description}
                    </span>
                </div>
                <div>
                    <button className='px-6 py-2 rounded-full bg-yellow-400 text-black cursor-pointer hover:bg-yellow-500 transition duration-300'>
                    {data.sections[1].buttonText}
                    </button>
                </div>
            </motion.div>

            <motion.div
                ref={section3Ref}
                className='w-full flex justify-center items-center bg-pink-400'
                style={{ height: "240px" }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5 , delay:0.5 }}
            >
                <div className='w-1/3 h-full'>
                    <img src="/mobileHome/stretch3.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='w-2/3 h-full bg-blue-600 overflow-hidden px-4 py-4 flex flex-col gap-y-4 justify-center items-center'>
                    <span className='text-yellow-500 font-bold text-xl word-break'>
                    {data.sections[2].title}
                    </span>
                    <span className='text-white text-sm leading-relaxed word-break'>
                    {data.sections[2].description}
                    </span>
                    <button className='px-6 py-2 rounded-full bg-yellow-300 text-black cursor-pointer hover:bg-yellow-400 transition duration-300'>
                    {data.sections[2].buttonText}
                    </button>
                </div>
            </motion.div>

            <motion.div
                ref={section4Ref}
                className='w-full bg-white flex flex-col gap-y-4 px-4 py-6'
                style={{ height: "680px" }}
                initial={{ opacity: 0, x:-10 }}
                animate={isInView4 ? { opacity: 1, x:0 } : { opacity: 0 ,x:-10 }}
                transition={{ duration: 0.2 ,delay:0.5 }}
            >
                <span className='w-full text-center text-xl text-blue-700 font-bold'>
                {data.sections[3].title}
                </span>
                <div className='w-full h-3/4 flex justify-start items-center gap-x-2'>
                    <div className='h-full relative flex flex-col gap-y-4' style={{ width: "200px" }}>
                        <img src="/mobileHome/stretch5.jpg" className='w-full h-1/2 object-cover' alt="" />
                        <div className='w-1/2 h-4 bg-yellow-400' style={{ position: "absolute", bottom: "50%", left: "0px" }}></div>
                        <div className='w-full flex flex-col px-2 gap-y-2 justify-center items-center'>
                            <span className='text-xl text-blue-600 font-bold'>
                            {data.sections[3].articles[0].title}
                            </span>
                            <span className='w-full text-center text-sm'>
                            {data.sections[3].articles[0].description}
                            </span>
                        </div>
                    </div>
                    <div className='h-full flex relative gap-y-4 flex-col' style={{ width: "200px" }}>
                        <img src="/mobileHome/stretch2.jpg" className='w-full h-1/2 object-cover' alt="" />
                        <div className='w-1/2 h-4 bg-yellow-400' style={{ position: "absolute", bottom: "50%", left: "0px" }}></div>
                        <div className='w-full flex flex-col px-2 gap-y-2 justify-center items-center'>
                            <span className='text-xl text-blue-600 font-bold'>
                            {data.sections[3].articles[1].title}
                            </span>
                            <span className='w-full text-center text-sm'>
                            {data.sections[3].articles[1].description}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center'>
                    <div className='h-full relative flex flex-col justify-start items-center gap-y-4' style={{ width: "200px" }}>
                        <img src="/mobileHome/stretch.jpg" className='w-full h-1/2 object-cover' alt="" />
                        <div className='w-1/2 h-4 bg-yellow-400' style={{ position: "absolute", bottom: "50%", left: "0px" }}></div>
                        <div className='w-full flex flex-col px-2 gap-y-2 justify-center items-center'>
                            <span className='text-xl text-blue-600 font-bold'>
                            {data.sections[3].articles[2].title}
                            </span>
                            <span className='w-full text-center text-sm'>
                            {data.sections[3].articles[2].description}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center w-full'>
                    <button className='px-6 py-2 w-1/2 rounded-full bg-yellow-300 text-black cursor-pointer hover:bg-yellow-400 transition duration-300'>
                        READ MORE
                    </button>
                </div>
            </motion.div>

            <motion.div
                ref={section5Ref}
                className='w-full px-2 flex justify-between items-center bg-gray-400'
                style={{ height: "80px" }}
                initial={{ opacity: 0, y: -10 }}
                animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
            >
                <div className='flex flex-col gap-y-0 justify-center items-center'>
                    <span className='text-xl text-white'>
                    {data.sections[4].websiteName}
                    </span>
                    <span className='text-yellow-400 font-semibold text-sm'>
                    {data.sections[4].youtube}
                    </span>
                </div>
                <div className='flex gap-x-4'>
                    <div className='w-6 h-6 cursor-pointer'>
                        <img src="/mobileHome/facebook.png" className='w-full h-full' alt="" />
                    </div>
                    <div className='w-6 h-6 cursor-pointer'>
                        <img src="/mobileHome/twitter.png" className='w-full h-full' alt="" />
                    </div>
                    <div className='w-6 h-6 cursor-pointer'>
                        <img src="/mobileHome/instagram.png" className='w-full h-full' alt="" />
                    </div>
                </div>
                <div></div>
            </motion.div>
        </div>
    );
};

export default HomeMobileOne;
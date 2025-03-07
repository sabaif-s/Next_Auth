import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import data from './Data.json';
import CheckTemplateButton from '../CheckTemplateButton/CheckTemplate';
import { AnimatePresence } from 'framer-motion';

const HomeDesktopOne = () => {
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
        <div className='w-full relative flex flex-col pb-4 mt-0'>
            {/* Section 1 */}
            <AnimatePresence>
                {true && (
                    <CheckTemplateButton key="check-template-button" linkTemplate={data.sections[0].templateFirst} />
                )}
            </AnimatePresence>

            <motion.div
                ref={section1Ref}
                className='w-full h-full flex justify-between items-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-12'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className='flex flex-col gap-y-4'>
                    <span className='text-white font-bold text-3xl xl:text-6xl'>
                        {data.sections[0].title}
                    </span>
                    <span className='text-yellow-300 font-semibold text-2xl xl:text-4xl'>
                        {data.sections[0].website}
                    </span>
                </div>
                <div className='relative w-1/3 xl:w-1/2 h-60'>
                    <Image
                        src="/mobileHome/stretch4.jpg"
                        objectFit='cover'
                        layout='fill'
                        alt="Top Image"
                        className='rounded-lg shadow-lg'
                    />
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                ref={section2Ref}
                className='w-full bg-white px-8 py-16 flex justify-between items-center shadow-lg'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className='w-1/2'>
                    <span className='text-3xl xl:text-4xl text-blue-500 font-bold'>
                        {data.sections[1].highlight}
                    </span>
                    <p className='mt-4 text-gray-700 text-lg xl:text-2xl'>
                        {data.sections[1].description}
                    </p>
                    <button className='mt-6 px-8 py-3 rounded-full xl:scale-125 bg-yellow-400 text-black hover:bg-yellow-500 transition duration-300'>
                        {data.sections[1].buttonText}
                    </button>
                </div>
                <div className='relative w-1/3 h-64'>
                    <Image
                        src="/mobileHome/stretch7.jpg"
                        objectFit='cover'
                        layout='fill'
                        alt="Section 2 Image"
                        className='rounded-lg shadow-lg'
                    />
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                ref={section3Ref}
                className='w-full bg-pink-400 flex px-8 py-12 gap-x-8 shadow-lg'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className='relative w-1/2 h-64'>
                    <Image
                        src="/mobileHome/stretch5.jpg"
                        objectFit='contain'
                        layout='fill'
                        alt="Section 3 Image"
                        className='rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <span className='text-yellow-500 font-bold xl:text-4xl text-2xl mb-4'>
                        {data.sections[2].title}
                    </span>
                    <p className='text-white text-lg xl:text-2xl leading-relaxed'>
                        {data.sections[2].description}
                    </p>
                    <button className='mt-6 px-8 py-3 rounded-full w-1/2 bg-yellow-300 text-black hover:bg-yellow-400 transition duration-300'>
                        {data.sections[2].buttonText}
                    </button>
                </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
                ref={section4Ref}
                className='w-full bg-white px-8 py-16 shadow-lg'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <span className='block text-center text-3xl text-blue-700 font-bold mb-8'>
                    {data.sections[3].title}
                </span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {data.sections[3].articles.map((article, index) => (
                        <div key={index} className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md'>
                            <div className='w-full h-40 xl:h-72 relative'>
                                <Image
                                    src={`/mobileHome/stretch${index + 1}.jpg`}
                                    objectFit='contain'
                                    layout='fill'
                                    alt={`Article ${index + 1}`}
                                    className='rounded-lg'
                                />
                            </div>
                            <span className='mt-4 text-xl xl:text-2xl text-blue-600 font-bold'>
                                {article.title}
                            </span>
                            <p className='mt-2 text-center xl:text-xl text-sm text-gray-700'>
                                {article.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='mt-8 flex justify-center'>
                    <button className='px-8 py-3 rounded-full xl:scale-125 bg-yellow-300 text-black hover:bg-yellow-400 transition duration-300'>
                        READ MORE
                    </button>
                </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
                ref={section5Ref}
                className='w-full px-8 py-4 bg-gray-700 flex justify-between items-center shadow-lg'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div>
                    <span className='text-xl xl:text-2xl text-white'>{data.sections[4].websiteName}</span>
                    <span className='block text-yellow-400 xl:text-2xl font-semibold text-sm'>
                        {data.sections[4].youtube}
                    </span>
                </div>
                <div className='flex gap-x-4 xl:gap-x-8'>
                    <img src="/mobileHome/facebook.png" className='w-8 h-8 xl:w-12 xl:h-12 cursor-pointer' alt="Facebook" />
                    <img src="/mobileHome/twitter.png" className='w-8 h-8 xl:w-12 xl:h-12 cursor-pointer' alt="Twitter" />
                    <img src="/mobileHome/instagram.png" className='w-8 h-8 xl:w-12 xl:h-12 cursor-pointer' alt="Instagram" />
                </div>
            </motion.div>
        </div>
    );
};

export default HomeDesktopOne;
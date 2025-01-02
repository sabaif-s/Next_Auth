import React from 'react';
import { motion } from 'framer-motion';
import data from "./Data.json";

const MainRight = () => {
     
    console.log(data);
    return (
        <div className='w-full h-full flex items-center pr-20 justify-start relative'>
            <motion.img
                src={data.images[0].mainImage.src}
                className='w-full max-h-full'
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2,delay:2 }}
            />
            <div className='absolute inset-0 flex'>
                <div className='w-full h-full relative'>
                    <div>
                        <motion.img
                            src={data.images[0].imageKey.src}
                            className='w-20 rotate-[135deg] absolute z-50 bottom-6 -left-4'
                            alt=""
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0 ,rotate:-45 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.img
                             src={data.images[0].imageKey.src}
                            className='w-20 rotate-[135deg] absolute z-50 top-6 right-20'
                            alt=""
                            initial={{ opacity: 0, x: 50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0, rotate:135 }}
                            transition={{ duration: 2, delay: 1.5 }}
                        />
                        <motion.div
                            className='w-6 h-6 rounded-full bg-pink-400 absolute bottom-20 left-20 z-50'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        />
                         <motion.div
                            className='w-6 h-6 rounded-full bg-blue-400 absolute top-20 right-40 z-50'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        />
                        <motion.div
                            style={{ height: "6px" }}
                            className='w-48 bg-green-300'
                            initial={{ width: 0 }}
                            animate={{ width: "12rem" }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainRight;
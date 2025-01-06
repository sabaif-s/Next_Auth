'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import data from './Data.json';
import CheckTemplateButton from '../CheckTemplateButton/CheckTemplate';
import NavBarTwoMobile from './NavBar2/NavBar2Mobile';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const HomePageMobile = () => {
    const [clickedDiv, setClickedDiv] = useState("left");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const [navBarClicked,setNavBarClicked]=useState(false);

    useEffect(() => {
        console.log("component mounted");
    }, []);
   const backStyle = {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%",  
    backgroundImage: `url(${data.images.plant})`,
    backgroundSize: "cover",  
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}
const clickedNavBar=()=>{
   setNavBarClicked(true);
}
const closeNavBar=()=>{
    setNavBarClicked(false);
}
    return (
        <motion.div
        ref={ref}
            className="w-full h-screen bg-white  relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >  
        <AnimatePresence>
        {
            navBarClicked && (
                <div className='w-1/2 h-full  absolute z-50 left-0' >
                <NavBarTwoMobile closeNavBar={closeNavBar} />
                </div>
            )
        }
        </AnimatePresence>
            
            <AnimatePresence>
                {!navBarClicked && (
                    <CheckTemplateButton key="check-template-button" linkTemplate={data.templateFirst} />
                )}
            </AnimatePresence>

            <motion.div
                className="w-full h-full bg-black flex flex-col justify-center items-center relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
            >
              
                <motion.div
                    className="w-full h-1/6 flex justify-between items-center px-4"
                    style={{ borderBottom: "1px solid #f5f5f5" }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                >

                     <img 
                     onClick={clickedNavBar}
                     src="/mobileNavbar/collapse.png" className='w-12 h-12 rotate-180' alt="" />
                    
                    <div className='flex gap-x-4'>
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
                </motion.div>
              

                <motion.div
                 style={backStyle}
                    className="w-full h-2/3 sm:px-20 py-8 flex flex-col justify-center sm:justify-end items-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1 }}
                >
                    <div className="rounded-full absolute top-4 " style={{ border: "1px solid #f5f5f5", width: "160px", height: "160px" }}>
                    </div>
                    <motion.div
    className='flex w-full flex-col items-center justify-center absolute top-0 gap-y-2 bg-black bg-opacity-40'
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5,delay:2 }}
>
    <span className="text-white text-3xl">{data.agencyName}</span>
    <span className="text-yellow-600 text-3xl">{data.mainHeadline}</span>
    <div>
        <span className="text-yellow-600 font-bold text-3xl">{data.secondaryHeadline}</span>
    </div>
</motion.div>
                    <div className="w-full flex flex-col justify-start gap-y-2 items-center">
                      
                        <div className='bg-black bg-opacity-40' >
                        <span className="text-gray-100 text-lg font-bold px-2 mt-2">{data.description}</span>
                        </div>
                        
                        <div className='w-1/2 py-4 cursor-pointer z-40 shadow-inner shadow-yellow-200 border-2 border-yellow-300 mt-4 flex justify-center items-center'>
                            <span className='text-white text-lg'>{data.buttonText}</span>
                            <img src="/homePage2/right arrow.png" className='w-12 h-12 ml-2' alt="" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full h-1/6 flex justify-center items-center gap-x-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className='w-1/3 h-full bg-red-400 relative'
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            priority
                            src={data.images.chair}
                            layout='fill'
                            className='w-full h-full'
                            alt="Chair Home"
                        />
                    </motion.div>
                    <motion.div
                        className='w-1/3 h-full bg-green-400 relative'
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            priority
                            src={data.images.plant}
                            layout='fill'
                            className='w-full h-full'
                            alt="Plant Home"
                        />
                    </motion.div>
                    <motion.div
                        className='w-1/3 h-full bg-gray-400 relative'
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            priority
                            src={data.images.light}
                            layout='fill'
                            className='w-full h-full object-cover'
                            alt="Light Home"
                        />
                    </motion.div>
                </motion.div>
             
            </motion.div>
        </motion.div>
    );
};

export default HomePageMobile;
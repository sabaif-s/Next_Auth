
import React,{useRef,useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import MainRight from './MainRight';
import data from "./Data.json";
import Image from 'next/image';
const Main= ({NavBarHeight}) => {
    const containerRef=useRef(null);
    const ref = useRef(null);
    const [isInView,setInView]=useState(false);
    const  [leftWidth,setLeftWidth]=useState(null);
    const [rightWidth,setRightWidth]=useState(null);
    const [readyRender,setReadyRender]=useState(false);
    const [smallContent,setSmallContent]=useState(null);
    const [slideDownLeft,setSlideDownLeft]=useState(false);
    const [slideUpSmall,setSlideUpSmall]=useState(false);
    const [animateEmail,setAnimateEmail]=useState(false);
    const [animateCv,setAnimateCv]=useState(false);
    const [fadeInPicture,setFadeInPicture]=useState(false);
    const typingVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };
    const text = data.leftData.content;
     useEffect(()=>{
      if(containerRef.current && readyRender){
          setLeftWidth(containerRef.current.clientWidth/2 + 9);
          setRightWidth(containerRef.current.clientWidth/2 - 9);
          console.log("Left Width:", leftWidth);
          console.log("Right Width:", rightWidth);
          console.log("Is In View:", isInView);
          if(ref.current){
            setInView(true);
          }
          
          
      }
     },[leftWidth,rightWidth,readyRender]);
     useEffect(()=>{
        if(!slideDownLeft){
            setTimeout(() => {
                setFadeInPicture(true);
            },  6500);
            
            setTimeout(() => {
                setSlideDownLeft(true);
                setTimeout(() => {
                    setSlideUpSmall(true);
                },  1000);
              
                setTimeout(()=>{
                      setAnimateEmail(true);
                              
                },9500); 
            },  8500);
        }
                
     },[slideDownLeft]);
     
     useEffect(()=>{
           if(animateEmail){
            setTimeout(() => {
                 setSlideDownLeft(false);
                 setAnimateEmail(false);
                 setFadeInPicture(false);
            },  9000);
           }
     },[animateEmail]);
     useEffect(()=>{
         if(data?.leftData?.smallContent){
            console.log("Data:", data.leftData.smallContent);
            setReadyRender(true);
            setSmallContent(data.leftData.smallContent);

         }
     },[]);
     
    return (
        <>
       
        {
            readyRender && (
                <div
                ref={containerRef}
                 style={{ paddingLeft:"12px"}}
                className='w-full flex flex-row  bg-opacity-10 absolute top-32'>
                    <div className='w-20 sm:h-full h-0 absolute left-0 z-50 bg-white' >

                    </div>
                    <div className='w-20 sm:h-full h-0 absolute right-0 z-50 bg-white' >

                    </div>
                     {
                    leftWidth && rightWidth && (
                        <>
                        <motion.div
  className="flex relative z-20 flex-col gap-y-4 w-full bg-opacity-40 py-20 "
  initial={{ opacity: 1, y: 0 }}
  animate={slideDownLeft ? { x: 600, opacity: 1 } : { x: 0, y: 0, opacity: 1 }}
  transition={{ duration: 3.5 }}
>
                          
                         <div className='w-full h-6 flex justify-between items-center pr-12' >
                         <motion.div
            style={{ height: "4px" }}
            className='w-44 bg-green-600'
            initial={{ x: -100 }}
            
            transition={{ duration: 1 }}
        >
        </motion.div>
                               
                               <motion.div
                    ref={ref}
                    className='flex flex-row gap-x-4 justify-end items-center'
                    initial={{ opacity: 0, y: 100 , x:-100, rotate:-45}}
                    animate={isInView ? { opacity: 1, x:0, y: 0 , rotate:0} : {}}
                    transition={{ duration: 1.5 }}
                >
                     <Image className='rounded-full' src='/mainHome/icon1.png' alt='Next 1' width={16} height={16} />
                    <Image className='rounded-full' src='/mainHome/icon2.png' alt='Next 2' width={16} height={16} />
                    <Image className='rounded-full' src='/mainHome/icon6.png' alt='Next 3' width={16} height={16} />
                    <Image className='rounded-full' src='/mainHome/icon4.png' alt='Next 4' width={16} height={16} />
                    <div className='flex flex-col w-4 h-4 justify-center items-center relative'>
                      <Image
                        className='rounded-full absolute top-6 right-8 z-50'
                        src='/mainHome/icon7.png'
                        alt='Next 4'
                        width={16}
                        height={16}
                      />
                    </div>
                </motion.div>
                         </div>
                        
                         <div className='pt-2 sm:px-20 flex flex-row pl-2 w-full '>
                         <motion.span
      className="text-black font-semibold w-full word-break font-serif"
      initial={{ opacity: 0, y: -100 }}
      animate={slideDownLeft ? { y: 0, opacity: 1 } : { x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          className="text-4xl tracking-wider leading-20"
          key={index}
          custom={index}
          variants={typingVariants}
          initial="hidden"
          animate="visible"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
        </div>
        <div className='mt-8 absolute bottom-0 sm:px-20'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={ slideUpSmall ? {opacity:1, x:-600}:{ opacity: 0 }}
                transition={{ duration: 2 }}
                className='p-4 bg-gradient-to-r leading-relaxed from-gray-100 via-gray-100 to-white rounded-md xxl:p-2 bg-opacity-20'
            >
                 
                         
                                <span className='text-md text-black'>
                                        {smallContent}
                                     </span>
                             
                    
                    
               
            </motion.div>
        </div>
        <div className='flex flex-col sm:px-20 2xl:mt-10 xl:mt-4 gap-y-4'>
            <div className='mb-4 flex relative flex-row justify-start items-center'>
            <a href="https://sabaif.netlify.app/" target="_blank" rel="noopener noreferrer">
    <motion.button
        style={{ paddingTop: "6px", paddingBottom: "6px" }}
        className='px-10 rounded-full absolute z-0  bg-green-600 text-white hover:bg-green-700 flex items-center gap-2'
        initial={{ opacity: 0, x: -200, y: -100 }}
        animate={animateEmail ? { opacity: 1, x: -580, y: -260 } : { opacity: 0, x: 0, y: 0 }}
        transition={{ duration: 2.5 }}
    >
        <img src="/mainHome/website.png" alt="Icon" className='w-6 h-6' />
        <span>sabaif.netlify</span>
    </motion.button>
</a>
<a href="https://sabaif.netlify.app/" target="_blank" rel="noopener noreferrer">
    <motion.button
        style={{ paddingTop: "6px", paddingBottom: "6px" }}
        className='px-10 rounded-full relative z-20 bg-green-600 text-white hover:bg-green-700 flex items-center gap-2'
        initial={{ opacity: 0, x: 100, y: 100, rotate: -45 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 2.5 }}
    >
        <img src="/mainHome/website.png" alt="Icon" className='w-6 h-6' />
        <span>sabaif.netlify</span>
    </motion.button>
</a>
                <motion.div
                    className='gap-x-2  rounded flex flex-row items-center justify-start ml-6 bg-black'
                    initial={{ opacity: 0, x: -20 , y:50, rotate:45 }}
                    animate={{ opacity: 1, x: 0 , y:0, rotate: 0}}
                    transition={{ duration: 1.5 }}
                >
                    <Image src={"/mainHome/meta.png"} alt="Meta" width={32} height={32} className='object-cover' />
                     
                    <span className='text-lg tracking-wider text-white font-normal'> +251701479847</span>
                </motion.div>
            </div>
            <div className='mb-4 flex flex-row justify-end w-full items-center pr-6'>
                 <div className='w-64 bg-orange-300 h-1' >
        
                 </div>
            </div>
            <div className='flex relative '>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
    <motion.button
        style={{ paddingTop: "6px", paddingBottom: "6px" }}
        className='px-10 rounded-full bg-blue-600 text-white hover:bg-green-700 relative z-50 flex items-center gap-2'
        initial={{ opacity: 0, x: -200, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
    >
        <img src="/mainHome/github2.png" alt="GitHub" className='w-6 h-6' />
        <span className='text-white font-bold'>sabaif-s</span>
    </motion.button>
</a>
                <div className='flex flex-row justify-start items-center absolute left-48' >
        
                 <div className='relative' >

                 <a href="mailto:sebaifmuhammed33@gmail.com">
    <motion.button
        style={{ paddingTop: "6px", paddingBottom: "6px" }}
        className='px-10 rounded-full absolute z-0 sm:hidden bg-white text-white hover:bg-gray-200 flex items-center gap-2'
        initial={{ opacity: 0, x: -200, y: -100 }}
        animate={animateEmail ? { opacity: 1, x: -800, y: -400 } : { opacity: 0, x: 0, y: 0 }}
        transition={{ duration: 2.5 }}
    >
        <img src="/mainHome/email.png" alt="Icon" className='w-6 h-6' />
        <span className='text-gray-400'>
             sebaifmuhammed33@gmail.com
        </span>
    </motion.button>
</a>
<a href="mailto:sebaifmuhammed33@gmail.com">
    <motion.button
        style={{ paddingTop: "6px", paddingBottom: "6px" }}
        className='px-10 rounded-full bg-blue-400 text-white hover:bg-gray-200 flex items-center gap-2'
        initial={{ opacity: 0, x: -200, y: -100 }}
        animate={{ opacity:1,x:0,y:0 }}
        transition={{ duration: 2.5 }}
    >
        <img src="/mainHome/email.png" alt="Icon" className='w-6 h-6' />
        <span className='text-green-400 font-bold'>
             Email Me.
        </span>
    </motion.button>
</a>
                </div>
                 
                {/* <motion.div
    className='w-10 h-10 object-cover'
    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    whileHover={{ scale: 1.1, rotate: 10 }}
    whileTap={{ scale: 0.9, rotate: -10 }}
>
    <Image
        src="/mainHome/search.png"
        alt="Search Icon"
        width={40}
        height={40}
        className='object-cover'
    />
</motion.div> */}
                 
               
                </div>
            </div>
            <motion.div
                    ref={ref}
                    className='flex flex-row mt-4 pt-8 justify-start items-center relative'
                    initial={{ opacity: 0, y: 100 , x:-100, rotate:-45}}
                    animate={isInView ? { opacity: 1, x:0, y: 0 , rotate:0} : {}}
                    transition={{ duration: 1.5 }}
                >    
                    <div className='flex flex-col w-4 h-4 justify-center items-center relative' >
                        <Image src={"/mainHome/icon7.png"} alt="Next 4" width={16} height={16} className='rounded-full absolute bottom-8 -left-8 z-50' />
                         
                       
                     </div>
                     <div className='absolute flex gap-x-4 -left-8' >
        
                     <Image
                      src={'/mainHome/icon1.png'}
                        alt='Next 1'
                        width={16}
                        height={16}
                        className='rounded-full'

                     />
                      <Image
                      src={'/mainHome/icon2.png'}
                        alt='Next 1'
                        width={16}
                        height={16}
                        className='rounded-full'
                        
                     />
                       <Image
                      src={'/mainHome/icon6.png'}
                        alt='Next 1'
                        width={16}
                        height={16}
                        className='rounded-full'
                        
                     />
                       <Image
                      src={'/mainHome/icon4.png'}
                        alt='Next 1'
                        width={16}
                        height={16}
                        className='rounded-full'
                        
                     />
                    </div>
                    
                </motion.div>
        </div>
        
                       
                        </motion.div>
                        {
                            fadeInPicture && (
                                <div className=" w-full sm:px-20 absolute top-32 z-0">
                                <MainRight key="main" />
                               </div>
                            )
                        }
                       
                        </>
                       
                    )
                     }
                </div>
            )
        }
       </>
        
        );

};

export default Main;
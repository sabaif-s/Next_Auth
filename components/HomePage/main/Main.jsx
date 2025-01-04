
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
                 style={{height:`${NavBarHeight}px`, paddingLeft:"128px"}}
                className='w-full flex flex-row bg-red-100 bg-opacity-40 '>
                     {
                    leftWidth && rightWidth && (
                        <>
                         <div style={{width:`${leftWidth}px`}} className=" flex flex-col  bg-opacity-40 py-20">
                         <div className='w-full h-6 flex justify-between items-center pr-12' >
                         <motion.div
            style={{ height: "4px" }}
            className='w-44 bg-green-600'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
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
                         <div className='pt-2 flex flex-row pl-2 w-full pr-10 '>
            <motion.span
                className="text-black font-semibold w-full word-break font-serif "
                initial="hidden"
                animate="visible"
            >
                {text.split("").map((char, index) => (
                    <motion.span
                     className='text-4xl tracking-wider leading-20'
                    key={index} custom={index} variants={typingVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        </div>
        <div className='mt-10'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className='pr-4 bg-gradient-to-r from-gray-100 via-gray-100 to-white rounded-md xxl:p-2 bg-opacity-20'
            >
                 
                         
                                <span className='text-md text-black'>
                                        {smallContent}
                                     </span>
                             
                    
                    
               
            </motion.div>
        </div>
        <div className='flex flex-col 2xl:mt-10 xl:mt-4 gap-y-4'>
            <div className='mb-4 flex flex-row justify-start items-center'>
                <motion.button
                style={{paddingTop:"6px",paddingBottom:"6px"}}
                    className='px-10 rounded-full bg-green-600 text-white  hover:bg-green-700'
                    initial={{ opacity: 0, x: 100 , y:100, rotate:-45 }}
                    animate={{ opacity: 1, x: 0 , y:0, rotate: 0}}
                    transition={{ duration: 2.5 }}
                >
                    Read More
                </motion.button>
                <motion.div
                    className='gap-x-4  rounded flex flex-row items-center justify-start ml-10'
                    initial={{ opacity: 0, x: -20 , y:50, rotate:45 }}
                    animate={{ opacity: 1, x: 0 , y:0, rotate: 0}}
                    transition={{ duration: 1.5 }}
                >
                    <Image src={"/mainHome/meta.png"} alt="Meta" width={40} height={40} className='object-cover' />
                     
                    <span className='text-sm tracking-wider text-gray-500 font-normal'> +251701479847</span>
                </motion.div>
            </div>
            <div className='mb-4 flex flex-row justify-end w-full items-center pr-6'>
                 <div className='w-64 bg-orange-300 h-1' >
        
                 </div>
            </div>
            <div className='flex relative '>
                <motion.button
                style={{paddingTop:"6px",paddingBottom:"6px"}}
                    className='px-10  rounded-full bg-black  text-white hover:bg-green-700 relative z-50'
                    initial={{ opacity: 0, x: -200, y:20 }}
                    animate={{ opacity: 1, x: 0,y:0 }}
                    transition={{ duration: 1.5 }}
                >
                   <span className='text-white font-bold' >Find a Psychologist</span> 
                </motion.button>
                <div className='flex flex-row justify-start items-center absolute left-48' >
        
               
                <motion.button
                style={{paddingTop:"6px",paddingBottom:"6px"}}
                    className='px-10  rounded-full bg-white  text-white hover:bg-gray-200 '
                    initial={{ opacity: 0, x: -200 ,y:-100 }}
                    animate={{ opacity: 1, x: 0 , y:0}}
                    transition={{ duration: 2.5 }}
                >
                    <span className='text-gray-400' >
                    City Or Postcode...
                    </span>
                    
                </motion.button>
                 
                <motion.div
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
</motion.div>
                 
               
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
                        </div>
                        <div style={{width:`${rightWidth}px`}} className=" bg-opacity-20 relative z-40">
                         <MainRight key="main" />
                        </div>
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
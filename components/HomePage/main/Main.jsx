
import React,{useRef,useEffect,useState} from 'react';
import { motion } from 'framer-motion';
 

const Main= ({NavBarHeight}) => {
    const containerRef=useRef(null);
    const ref = useRef(null);
    const [isInView,setInView]=useState(false);
    const  [leftWidth,setLeftWidth]=useState(null);
    const [rightWidth,setRightWidth]=useState(null);
    const typingVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };
    const text = "The Peace You Need Starts Deep In Your Mind.";
     useEffect(()=>{
      if(containerRef.current){
          setLeftWidth(containerRef.current.clientWidth/2 + 9);
          setRightWidth(containerRef.current.clientWidth/2 - 9);
          console.log("Left Width:", leftWidth);
          console.log("Right Width:", rightWidth);
          console.log("Is In View:", isInView);
          if(ref.current){
            setInView(true);
          }
          
          
      }
     },[leftWidth,rightWidth]);
     
    return (
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
            <img className='rounded-full h-4 w-4' src="/mainHome/icon1.png" alt="Next 1" />
            <img className='rounded-full h-4 w-4' src="/mainHome/icon2.png" alt="Next 2" />
            <img className='rounded-full w-4 h-4' src="/mainHome/icon6.png" alt="Next 3" />
            <img className='rounded-full w-4 h-4' src="/mainHome/icon4.png" alt="Next 4" />
            <div className='flex flex-col w-4 h-4 justify-center items-center relative' >
                <img className='rounded-full w-4 h-4 absolute top-6 right-8 z-50' src="/mainHome/icon7.png" alt="Next 4" />
               
             </div>
        </motion.div>
                 </div>
                 <div className='pt-2 flex flex-row pl-2 w-full pr-10 bg-gray-100'>
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
        className='pr-4 bg-gray-100 bg-opacity-20'
    >
        <span className='text-sm text-gray-500 font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
    </motion.div>
</div>
<div className='flex flex-col mt-10'>
    <div className='mb-4 flex flex-row justify-between items-center'>
        <motion.button
        style={{paddingTop:"6px",paddingBottom:"6px"}}
            className='px-10 rounded-full bg-green-600 text-white  hover:bg-green-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Read More
        </motion.button>
        <motion.div
            className='p-4 bg-green-200 rounded'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            Content Here
        </motion.div>
    </div>
    <div className='mb-4 flex flex-row justify-end w-full items-center pr-6'>
         <div className='w-1/2 bg-orange-300 h-1' >

         </div>
    </div>
    <div className='flex space-x-4'>
        <motion.button
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            Button 1
        </motion.button>
        <motion.button
            className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            Button 2
        </motion.button>
    </div>
</div>
                </div>
                <div style={{width:`${rightWidth}px`}} className="bg-red-200 bg-opacity-40">
                Right
                </div>
                </>
               
            )
             }
        </div>
        );

};

export default Main;
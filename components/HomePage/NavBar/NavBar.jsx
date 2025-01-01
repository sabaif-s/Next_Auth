"use client";
import React, { useEffect, useRef,useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import mindImage from '@/components/HomePage/assets/mind.png';
import keyImage from '@/components/HomePage/assets/key.png';
import geometry from '@/components/HomePage/assets/geometry.png';

const NavBar = () => {
    const canvasRef = useRef(null);
    const canvasRef2 = useRef(null);
    const [showKey, setShowKey] = useState(false);
    const [clickedAnchor,setClickedAnchor]=useState(null);

    useEffect(() => {
        const imageSources = [
            mindImage.src,
            keyImage.src,
            geometry.src,
        ];
        const loadImagesAndCache = async () => {
            const canvas = canvasRef.current;
             
            const ctx = canvas.getContext("2d");
             
            
          
            canvas.width = 100; // Adjust canvas dimensions
            canvas.height = 100;
             

            // Load all images
            const images = await Promise.all(
                imageSources.map(
                    (src) =>
                        new Promise((resolve, reject) => {
                            const img = new Image();
                            img.crossOrigin = "anonymous"; // To handle cross-origin images
                            img.src = src;
                            img.onload = () => resolve(img);
                            img.onerror = (err) => reject(err);
                        })
                )
            );
            ctx.drawImage(images[0], 0, 0, 100, 100);
            setTimeout(() => {
                 

                // Save the current state
                 

                // Draw the image
                // Adjust coordinates to center the image
                 setShowKey(true);

                // Restore the canvas state
                 

            }, 1000);
        };

        loadImagesAndCache();
    }, []);

    return (
        <nav className="flex justify-between items-center py-4 ml-40 border-2 border-gray-100 shadow-md shadow-gray-200 bg-white">
            <div className="flex  relative">
                <motion.canvas
                    ref={canvasRef}
                    className="mr-2 "
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                     
                ></motion.canvas>
                <AnimatePresence>
            {showKey && (
               <motion.img
               src={keyImage.src}
               className='w-10 h-10 absolute top-0'
               style={{ left: "30px" }}
               initial={{ opacity: 0, y: -50, rotate: 0 }}
               animate={{ opacity: 1, y: 0, rotate: -45 }}
               exit={{ opacity: 0, y: -50, rotate: 0 }}
               transition={{ duration: 0.5 }}
           />
            )}
        </AnimatePresence>
                 <div className='flex flex-col relative justify-center' style={{width:"200px"}} >
                        <span className='text-black text-2xl' style={{marginBottom:"2px"}} >
                          Mindful
                        </span>
                        <span className='text-gray-400' >
                          Psychological Therapy
                        </span>
                 </div>
            </div>
            <div className="flex w-full justify-end text-gray-400 items-center gap-x-10 " style={{paddingRight:"140px"}}>
            <a
                onClick={()=>setClickedAnchor('home')}
                href="#home" className="hover:text-green-400">
                  <span className={ clickedAnchor == "home" ? "text-green-400":""} >Home</span>
                  </a>
                  <a
                onClick={()=>setClickedAnchor('about')}
                href="#about" className="hover:text-green-400">
                  <span className={ clickedAnchor == "about" ? "text-green-400":""} >About</span>
                  </a>
                
                  <a
                onClick={()=>setClickedAnchor('services')}
                href="#services" className="hover:text-green-400">
                  <span className={ clickedAnchor == "services" ? "text-green-400":""} >Services</span>
                  </a>
                  <a
                onClick={()=>setClickedAnchor('portfolio')}
                href="#portfolio" className="hover:text-green-400">
                  <span className={ clickedAnchor == "portfolio" ? "text-green-400":""} >Portfolio</span>
                  </a>
                  <a
                                      
                onClick={()=>setClickedAnchor('contact')}
                href="#contact" className="hover:text-green-400">
                  <span className={ clickedAnchor == "contact" ? "text-green-400":""} >Contact</span>
                  </a>
                <motion.button
    className="border border-green-500 p-4 shadow-md shadow-green-400 hover:bg-gradient-to-r hover:from-red-100 hover:to-blue-300 hover:bg-white hover:text-gray-800"
    style={{ borderRadius: "20px" }}
    initial={{ opacity: 0, y: -50, x:-100, rotate: -45 }}
    animate={{ opacity: 1, y: 0, x:0, rotate: 0 }}
    transition={{ duration: 1 }}
    whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0", color: "#333" }}
    whileTap={{ scale: 0.9 }}
>
    Contact Us
</motion.button>
            </div>
        </nav>
    );
};

export default NavBar;
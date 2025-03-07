"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "./Data.json";
import Image from "next/image";
 
const NextImage = Image;
const NavBar = React.memo(({heightNav}) => {
  const [isOpen, setIsOpen] = useState(false);

 
  const canvasRef = useRef(null);
  const [showKey, setShowKey] = useState(false);
  const [clickedAnchor, setClickedAnchor] = useState(null);
  const [navClicked,setNavClicked]=useState(false);
  const navRef=useRef(null);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
    setNavClicked(!navClicked);
};
  useEffect(() => {
    const loadImagesAndCache = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = 100;
      canvas.height = 100;

      const images = await Promise.all(
        data.navbar.images.map(
          (imgData) =>
            new Promise((resolve, reject) => {
              const img = new window.Image();
              img.crossOrigin = "anonymous";
              img.src = imgData.src;
              img.onload = () => resolve(img);
              img.onerror = (err) => reject(err);
            })
        )
      );

      // Draw the first image onto the canvas as an example
      if (images[0]) {
        ctx.drawImage(images[0], 0, 0, 100, 100);
      }

      setTimeout(() => {
        setShowKey(true);
      }, 1000);
    };

    loadImagesAndCache();
  }, []);
  useEffect(()=>{
      if(navRef.current){

         console.log(typeof(heightNav));
          console.log(navRef.current.clientHeight);
          heightNav(navRef.current.clientHeight);
      }
  },[heightNav]);

  return (
    <nav 
    ref={navRef}
    style={{zIndex:"9999"}}
      // style={{ width: `${width}px` }}
    className={"absolute flex-col fixed top-0 justify-between w-full items-start py-4 pl-0 xl:pl-0  xl:ml-8  border-2 border-gray-100 shadow-md shadow-gray-200 bg-gradient-to-r from-white via-gray-100 to-white"}>
      
      <div className="flex justify-start relative z-50">
        <motion.canvas
          ref={canvasRef}
          className="mr-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.canvas>
        <AnimatePresence>
  {showKey && (
    <motion.div
      className="absolute"
      style={data.navbar.images[1].style}
      initial={{ opacity: 0, y: -50, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: -45 }}
      exit={{ opacity: 0, y: -50, rotate: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <NextImage
        src={data.navbar.images[1].src} // Path from your `data.json`
        alt={data.navbar.images[1].alt} // Alt text from your `data.json`
        width={50} // Replace with the actual width of the image
        height={50} // Replace with the actual height of the image
        className="object-contain" // Optional: Tailwind class for styling
        priority={true} // Ensures it loads quickly if needed immediately
      />
    </motion.div>
  )}
</AnimatePresence>
        <div
          className="flex flex-col relative justify-center "
          style={{ width: "200px" }}
        >
          <span className="text-black text-2xl mb-2">{data.navbar.logo.title}</span>
          <span className="text-gray-400">{data.navbar.logo.subtitle}</span>
        </div>
        <div className="w-full absolute z-50 top-4 right-2 flex justify-end items-center h-24">
            <motion.img
                src={isOpen ? "/LandingNavBar/collapse.png" : "/LandingNavBar/collapse.png"}
                className="w-12 h-12 object-cover cursor-pointer"
                alt={isOpen ? "Close" : "Collapse"}
                onClick={toggleNavBar}
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            />
        </div>
      </div>
      <AnimatePresence>
      {
        navClicked && (
          <motion.div
          className="flex flex-col w-full xl:ml-16 pl-12 justify-start pr-4 xl:pr-0 text-gray-400 items-center gap-y-4 gap-x-8 xl:gap-x-8 xl:pl-32"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.2 * Math.random(), duration: 1,ease:"easeInOut" }}
          
      >
          {data.navbar.links.map((link) => (
            <motion.a
              key={link.label}
              onClick={() => setClickedAnchor(link.href)}
              href={link.href}
              target="_blank"
              className={`hover:text-green-400 transition-colors duration-300 ${
                clickedAnchor === link.href ? "text-green-400" : ""
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{opacity:0,y:-20}}
              transition={{ delay: 0.2 * Math.random(), duration: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span>{link.label}</span>
            </motion.a>
          ))}
          <a href="mailto:sebaifmuhammed33@gmail.com">

          
        <motion.button
      className="bg-gradient-to-r hover:bg-gradient-to-l  from-sky-400 via-sky-300 to-red-400 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      style={{ borderRadius: "20px" }}
      initial={{ opacity: 0, y: -50, x: -100, rotate: -45 }}
      animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
      exit={{opacity:0,y:-50,x:-100, rotate:-45}}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileHover={{
          scale: 1.1,
          backgroundColor: "#f0f0f0",
          color: "#f0f0f0",
          boxShadow: "0px 5px 15px rgba(0, 128, 0, 0.5)",
          transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
  >
      {data.navbar.button.text}
  </motion.button>
  </a>
        
        </motion.div>
        )
      }
      
      </AnimatePresence>
     
    </nav>
  );
});

export default NavBar;

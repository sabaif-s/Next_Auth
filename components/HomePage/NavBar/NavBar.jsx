"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import mindImage from '@/components/HomePage/assets/mind.png';
import keyImage from '@/components/HomePage/assets/key.png';
import geometry from '@/components/HomePage/assets/geometry.png';

const NavBar = () => {
    const canvasRef = useRef(null);

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
           console.log(canvas);
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
      
            // Draw the images onto the canvas
            images.forEach((image, index) => {
              const x = 100 * index; // Adjust position dynamically
              const y = 50 * index+2;
              ctx.drawImage(image, x, y, 200, 200); // Draw image with specific dimensions
            });
      
            // Cache the combined canvas image as a Data URL
            
          };
      
          loadImagesAndCache();
    }, []);

    return (
        <nav className="flex justify-between items-center py-4 ml-40 bg-gray-800 text-white">
            <div className="flex items-center">
                <motion.canvas
                    ref={canvasRef}
                    className=" mr-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                ></motion.canvas>
                <span className="text-xl font-bold">BrandName</span>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#home" className="hover:text-gray-400">Home</a>
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#services" className="hover:text-gray-400">Services</a>
                <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
                <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Sign Up</button>
            </div>
        </nav>
    );
};

export default NavBar;
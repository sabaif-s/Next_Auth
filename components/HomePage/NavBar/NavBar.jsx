"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import mindImage from '@/components/HomePage/assets/mind.png'

const NavBar = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = mindImage.src;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }, []);

    return (
        <nav className="flex justify-between items-center py-4 ml-40 bg-gray-800 text-white">
            <div className="flex items-center">
                <motion.canvas
                    ref={canvasRef}
                    className="h-8 w-8 mr-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
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
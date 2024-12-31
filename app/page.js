"use client";
import FadeInWrapper from "@/components/animationWrapper/FadeInWrapper";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/HomePage/NavBar/NavBar";

export default function Home() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
 
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 160);
      setHeight(window.innerHeight - 160);
      
      console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
    };

    // Set initial width and height
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width && height) {
      console.log(`Width: ${width}, Height: ${height}`);
       
    }
  }, [width, height]);

  return (
    <FadeInWrapper>
      <div className="w-full h-screen bg-yellow-200 bg-opacity-60 flex justify-center items-center">
        {width && height && (
          <div className="bg-white absolute  z-50" style={{ width: `${width}px`, height: `${height}px` }}>
             <NavBar/>
          </div>
        )}
      </div>
    </FadeInWrapper>
  );
}
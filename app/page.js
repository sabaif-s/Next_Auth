"use client";
import React, { useState, useEffect,useCallback } from "react";
import dynamic from 'next/dynamic';
import HomePage from "@/components/HomePage2/HomePage";
const NavBar = dynamic(() => import('@/components/HomePage/NavBar/NavBar'), {
  ssr: false, // Disable SSR for this component
});

// Dynamically import Main component with client-side only rendering
const Main = dynamic(() => import('@/components/HomePage/main/Main'), {
  ssr: false, // Disable SSR for this component
});
 
export default function Home() {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const [smallScreen, setSmallScreen] = useState(false);
  const [NavBarHeight,setHeightNavBar]=useState(0)

  useEffect(() => {
    const calculateDimensions = () => {
      if(window.innerWidth <= 1024){
        setSmallScreen(true);
      }
      const newWidth = window.innerWidth - 160;
      let newHeight2;
      if(window.innerHeight <= 800){
        newHeight2 = window.innerHeight - 80;
      }
      else{
        newHeight2= window.innerHeight - 160;
      }
      ;

      // Only update state if dimensions actually change
      if (newWidth !== dimensions.width || newHeight2 !== dimensions.height) {
        setDimensions({ width: newWidth, height: newHeight2 });
      }
    };

    // Initial dimensions calculation
    calculateDimensions();

    // Add resize event listener
    window.addEventListener("resize", calculateDimensions);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [dimensions]);

  const { width, height } = dimensions;
  const heightNav= useCallback((data) => {
    let mainHeight2;
    if(window.innerHeight <= 800){
      mainHeight2 = window.innerHeight - 80 - data;
    }
    else{
      mainHeight2= window.innerHeight - 160 - data;
    }
    console.log(mainHeight2);
    console.log(dimensions);
            setHeightNavBar(mainHeight2);
  }, []);
  return (
    <>
    
    {
      true && (
        <div key="top" className="w-full h-screen overflow-hidden bg-yellow-200 bg-opacity-60 xl:px-20 flex justify-center items-center">
        {width && height && (
          <div
            className="bg-white w-full  overflow-hidden mx-auto "
            style={{  height: `${height}px` }}
          >
            {/* Passing a slightly reduced width to NavBar */}
            <NavBar key={"nav"} heightNav={heightNav}  />
            {
              NavBarHeight != 0 && (
                <Main key={"main"} NavBarHeight={NavBarHeight} />
              )
            }
          </div>
        )}
      </div>
      )
    }
    {
      true && (
        <HomePage/>
      )
    }
 
   
    </>
  );
}

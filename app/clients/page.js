"use client";
import React, { useState, useEffect,useCallback } from "react";
import NavBar from "@/components/HomePage/NavBar/NavBar";
import Main from "@/components/HomePage/main/Main";
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
      const newHeight = window.innerHeight - 160;

      // Only update state if dimensions actually change
      if (newWidth !== dimensions.width || newHeight !== dimensions.height) {
        setDimensions({ width: newWidth, height: newHeight });
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
    const mainHeight=window.innerHeight - 160 - data;
    console.log(mainHeight);
    console.log(dimensions);
            setHeightNavBar(mainHeight);
  }, []);
  return (
    <div key="top" className="w-full h-screen overflow-hidden bg-yellow-200 bg-opacity-60 xl:px-20 flex justify-center items-center">
      {width && height && (
        <div
          className="bg-white w-full  overflow-hidden mx-auto "
          style={{  height: `${height}px` }}
        >
          {/* Passing a slightly reduced width to NavBar */}
          <NavBar key={"nav"} heightNav={heightNav}  />
          {/* {
            NavBarHeight != 0 && (
              <Main key={"main"} NavBarHeight={NavBarHeight} />
            )
          } */}
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/HomePage/NavBar/NavBar";

export default function Home() {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const [smallScreen, setSmallScreen] = useState(false);

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

  return (
    <div className="w-full h-screen overflow-hidden bg-yellow-200 bg-opacity-60 xl:px-20 flex justify-center items-center">
      {width && height && (
        <div
          className="bg-white w-full  overflow-x-hidden mx-auto "
          style={{  height: `${height}px` }}
        >
          {/* Passing a slightly reduced width to NavBar */}
          <NavBar width={width - 160}  />
        </div>
      )}
    </div>
  );
}

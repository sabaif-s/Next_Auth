import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import data from "./Data.json";

const drawCurve = (ctx, startX, startY, cp1X, cp1Y, cp2X, cp2Y, endX, endY) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 4;
    ctx.stroke();
};

const MainRight = () => {
    const canvasRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const isFetched = useRef(false);
    const [hideCanvas, setHideCanvas] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const widthRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [imageMain, setImageMain] = useState(null);
    const [imageKeys, setImageKeys] = useState(null);

    useEffect(() => {
        if (widthRef.current) {
            const { clientWidth, clientHeight } = widthRef.current;
            setDimensions({ width: clientWidth, height: clientHeight });
        }
    }, []);

    useEffect(() => {
        if (data?.images?.[0]?.mainImage?.src && data?.images?.[0]?.imageKey?.src && !imageLoaded && !isFetched.current) {
            console.log("Fetching Main Image");
            isFetched.current = true;
            fetch(data.images[0].mainImage.src)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch Main Image");
                    }
                    return response.blob();
                })
                .then((blob) => {
                    const file = new Blob([blob], { type: 'image/jpeg' });
                     
                    const blobSrc = URL.createObjectURL(blob);
                    setImageMain(blobSrc);

                    const img2 = new window.Image();
                    img2.src = data.images[0].imageKey.src;

                    img2.onload = () => {
                        console.log("Image Key Loaded");
                        setImageKeys(img2.src);
                        setImageLoaded(true);
                    };

                    img2.onerror = () => {
                        console.error("Failed to load Image Key");
                        setImageLoaded(false); // Optionally set a fallback state
                    };
                })
                .catch((error) => {
                    console.error("Failed to fetch Main Image blob", error);
                });
        }

        return () => {
            if (imageMain) {
                URL.revokeObjectURL(imageMain);
            }
            if (imageKeys) {
                URL.revokeObjectURL(imageKeys);
            }
        };
    }, [data]);

    useEffect(() => {
        if (dimensions.width && dimensions.height && imageLoaded) {
            canvasRefs.forEach((ref, index) => {
                const canvas = ref.current;
                const ctx = canvas.getContext('2d');
                canvas.width = dimensions.width;
                canvas.height = dimensions.height;
                switch (index) {
                    case 0:
                        drawCurve(ctx, 50, 50, dimensions.width / 2, 0, dimensions.width - 50, dimensions.height / 2, dimensions.width - 50, 50);
                        break;
                    case 1:
                        drawCurve(ctx, 50, dimensions.height - 50, dimensions.width / 2, dimensions.height, dimensions.width - 50, dimensions.height / 2, dimensions.width - 50, dimensions.height - 50);
                        break;
                    case 2:
                        drawCurve(ctx, 50, 50, 0, dimensions.height / 2, dimensions.width / 2, dimensions.height - 50, 50, dimensions.height - 50);
                        break;
                    case 3:
                        drawCurve(ctx, dimensions.width - 50, 50, dimensions.width, dimensions.height / 2, dimensions.width / 2, dimensions.height - 50, dimensions.width - 50, dimensions.height - 50);
                        break;
                    default:
                        break;
                }
            });

            // Set a timeout to hide the canvases after 5 seconds
            const timeout = setTimeout(() => {
                setHideCanvas(true);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [dimensions, imageLoaded]);

    return (
        <div
            ref={widthRef}
            className='w-full h-full flex items-center pr-20 justify-start relative bg-opacity-30'>
          <AnimatePresence>
    {imageLoaded && (
        <motion.div
            className="w-full max-h-full relative" // Ensure the parent is relative for proper positioning
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
        >
            <motion.img
                src={imageMain}
                alt="Main Image"
                className="object-cover z-50 w-full h-full" // Ensuring the image covers the full container
                 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2,delay:2.5 }}
            />
        </motion.div>
    )}
</AnimatePresence>

            {imageLoaded && (
                <div className='absolute inset-0 flex'>
                    <div className='w-full h-full relative'>
                        <div>
                            <motion.div
                                className='w-20 rotate-[135deg] absolute z-50 bottom-6 -left-4'
                                initial={{ opacity: 0, x: -50, y: 50 }}
                                animate={{ opacity: 1, x: 0, y: 0, rotate: -45 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Image
                                    src={imageKeys}
                                    alt=""
                                    width={80}
                                    height={80}
                                    className='rounded-full'
                                />
                            </motion.div>
                            <motion.div
                                className='w-20 rotate-[135deg] absolute z-50 top-6 right-20'
                                initial={{ opacity: 0, x: 50, y: -50 }}
                                animate={{ opacity: 1, x: 0, y: 0, rotate: 135 }}
                                transition={{ duration: 2, delay: 1.5 }}
                            >
                                <Image
                                    src={data.images[0].imageKey.src}
                                    alt=""
                                    width={80}
                                    height={80}
                                    className='rounded-full'
                                />
                            </motion.div>
                            <motion.div
                                className='w-6 h-6 rounded-full bg-pink-400 absolute bottom-20 left-20 z-50'
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                            <motion.div
                                className='w-6 h-6 rounded-full bg-pink-400 absolute top-20 right-20 z-50'
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                            {Array.from({ length: 10 }, (_, i) => i * 10).map((i, index) => (
                                <motion.div
                                    key={index}
                                    className={`w-4 h-4 rounded-full absolute ${index % 2 === 0 ? "bg-gray-400" : "bg-green-400"} z-50`}
                                    initial={{ opacity: 1, scale: 0, x: 10, y: 0 }}
                                    animate={{ opacity: 0, scale: 1, x: -10, y: -10 }}
                                    transition={{ duration: 2, delay: 4, repeat: 4, repeatType: "reverse" }}
                                    style={{
                                        right: index % 2 === 0 ? `${i}px` : "auto",
                                        bottom: index % 2 === 0 ? `${i}px` : "auto",
                                        left: index % 2 !== 0 ? `${i}px` : "auto",
                                        top: index % 2 !== 0 ? `${i}px` : "auto",
                                    }}
                                />
                            ))}
                            <motion.div
                                className='w-4 h-4 rounded-full bg-sky-400 absolute bottom-20 right-40 z-50'
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 3.5 }}
                            />
                            <motion.div
                                style={{ height: "6px" }}
                                className='w-48 bg-green-300'
                                initial={{ width: 0 }}
                                animate={{ width: "12rem" }}
                                transition={{ duration: 1, delay: 1.5 }}
                            />
                            <AnimatePresence>
                                {!hideCanvas && (
                                    <>
                                        <motion.div
                                            className='absolute top-0 left-0'
                                            initial={{ opacity: 0, x: -100, y: -100 }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                        >
                                            <canvas ref={canvasRefs[0]} />
                                        </motion.div>
                                        <motion.div
                                            className='absolute top-0 left-0'
                                            initial={{ opacity: 0, x: -100, y: -100 }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                        >
                                            <canvas ref={canvasRefs[1]} />
                                        </motion.div>
                                        <motion.div
                                            className='absolute top-0 left-0'
                                            initial={{ opacity: 0, x: -100, y: -100 }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1, delay: 0.9 }}
                                        >
                                            <canvas ref={canvasRefs[2]} />
                                        </motion.div>
                                        <motion.div
                                            className='absolute top-0 left-0'
                                            initial={{ opacity: 0, x: -100, y: -100 }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1, delay: 1.2 }}
                                        >
                                            <canvas ref={canvasRefs[3]} />
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainRight;
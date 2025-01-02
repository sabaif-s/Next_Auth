import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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

    useEffect(() => {
        canvasRefs.forEach((ref, index) => {
            const canvas = ref.current;
            const ctx = canvas.getContext('2d');
            switch (index) {
                case 0:
                    drawCurve(ctx, 50, 50, 150, 0, 250, 100, 350, 50);
                    break;
                case 1:
                    drawCurve(ctx, 50, 350, 150, 400, 250, 300, 350, 350);
                    break;
                case 2:
                    drawCurve(ctx, 50, 50, 0, 150, 100, 250, 50, 350);
                    break;
                case 3:
                    drawCurve(ctx, 350, 50, 400, 150, 300, 250, 350, 350);
                    break;
                default:
                    break;
            }
        });
    }, []);

    return (
        <div className='w-full h-full flex items-center pr-20 justify-start relative'>
            <motion.img
                src={data.images[0].mainImage.src}
                className='w-full max-h-full'
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 2.5 }}
            />
            <div className='absolute inset-0 flex'>
                <div className='w-full h-full relative'>
                    <div>
                        <motion.img
                            src={data.images[0].imageKey.src}
                            className='w-20 rotate-[135deg] absolute z-50 bottom-6 -left-4'
                            alt=""
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0, rotate: -45 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.img
                            src={data.images[0].imageKey.src}
                            className='w-20 rotate-[135deg] absolute z-50 top-6 right-20'
                            alt=""
                            initial={{ opacity: 0, x: 50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0, rotate: 135 }}
                            transition={{ duration: 2, delay: 1.5 }}
                        />
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
        initial={{ opacity: 1, scale: 0,x:10,y:0 }}
        animate={{ opacity: 0, scale: 1,x:-10, y:-10 }}
        transition={{ duration: 2, delay: 4, repeat: 4, repeatType: "reverse" }}
        style={{
            right: index % 2 === 0 ? `${i}px` : "auto",
            bottom: index % 2 === 0 ? `${i}px` : "auto",
            left: index % 2 !== 0 ? `${i}px`: "auto",
            top: index % 2 !== 0 ? `${i}px`: "auto",
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
                        <motion.div
                            className='absolute top-0 left-0'
                            initial={{ opacity: 0, x: -100, y: -100 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <canvas ref={canvasRefs[0]} width={400} height={400} />
                        </motion.div>
                        <motion.div
                            className='absolute top-0 left-0'
                            initial={{ opacity: 0, x: -100, y: -100 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <canvas ref={canvasRefs[1]} width={400} height={400} />
                        </motion.div>
                        <motion.div
                            className='absolute top-0 left-0'
                            initial={{ opacity: 0, x: -100, y: -100 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <canvas ref={canvasRefs[2]} width={400} height={400} />
                        </motion.div>
                        <motion.div
                            className='absolute top-0 left-0'
                            initial={{ opacity: 0, x: -100, y: -100 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <canvas ref={canvasRefs[3]} width={400} height={400} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainRight;
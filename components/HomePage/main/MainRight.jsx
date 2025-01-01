import React, { useEffect, useRef } from 'react';

const draw = (ctx) => {
    const img = new Image();
    img.src = '/mainHome/saboo1.jpg'; // Replace with your image path

    img.onload = () => {
        // Define multiple custom clipping paths
        ctx.beginPath();
        ctx.moveTo(50, 50); // Start of the first clipping path
        ctx.quadraticCurveTo(200, 0, 350, 50); // Top curve
        ctx.lineTo(350, 350); // Right side
        ctx.quadraticCurveTo(200, 400, 50, 350); // Bottom curve
        ctx.closePath(); // Close the path
        ctx.clip(); // Apply the clipping path

        // Draw the image
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);

        // Optional: Add a border around the clipping area
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.quadraticCurveTo(200, 0, 350, 50);
        ctx.lineTo(350, 350);
        ctx.quadraticCurveTo(200, 400, 50, 350);
        ctx.closePath();
        ctx.strokeStyle = 'pink';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Define another custom clipping path
        ctx.beginPath();
        ctx.moveTo(100, 100); // Start of the second clipping path
        ctx.quadraticCurveTo(250, 50, 400, 100); // Top curve
        ctx.lineTo(400, 400); // Right side
        ctx.quadraticCurveTo(250, 450, 100, 400); // Bottom curve
        ctx.closePath(); // Close the path
        ctx.clip(); // Apply the clipping path

        // Draw the image again within the new clipping path
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);

        // Optional: Add a border around the second clipping area
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.quadraticCurveTo(250, 50, 400, 100);
        ctx.lineTo(400, 400);
        ctx.quadraticCurveTo(250, 450, 100, 400);
        ctx.closePath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Draw additional shapes to hide parts of the image
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
        ctx.fillRect(150, 150, 100, 100); // Draw a rectangle to hide part of the image
    };
};

const MainRight = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        draw(ctx);
    }, []);

    return (
        <div className='w-full h-full flex items-center justify-center relative'>
            <canvas ref={canvasRef} width={400} height={400} />
            <div className='absolute bg-green-100 bg-opacity-30 ' style={{ height: '400px', width: "380px" }}>
            </div>
        </div>
    );
};

export default MainRight;
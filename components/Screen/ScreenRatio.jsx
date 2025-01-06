import React, { useState, useEffect } from 'react';

const ScreenRatio = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <p>Width: {windowSize.width}px</p>
            <p>Height: {windowSize.height}px</p>
        </div>
    );
};

export default ScreenRatio;
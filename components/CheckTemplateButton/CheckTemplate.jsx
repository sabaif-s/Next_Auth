import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CheckTemplateButton = ({linkTemplate}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
   const watchTemplateClicked=()=>{
    window.open(linkTemplate, '_blank', 'noopener,noreferrer');
   }
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 , delay:0.5 }}
            style={{
                position: 'absolute',
                 top: '10px',
                 display:"flex",
                 flexDirection:"row",
                 justifyContent:"center",
                 width:"100%",
                zIndex: 1000
            }}
        >
            <button
            onClick={watchTemplateClicked}
            className='bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 text-white text-xl rounded-lg'
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Watch Template
            </button>
        </motion.div>
    );
};

export default CheckTemplateButton;
import React from 'react';
import { motion } from 'framer-motion';

const NavBarTwoMobile = ({ closeNavBar }) => {

    const closedNavBar = () => {
        closeNavBar();
    };

    return (
        <motion.div
            className='w-full flex flex-col justify-around items-center h-full p-4 bg-black relative'
            initial={{ opacity: 0, x:-50 }}
            animate={{ opacity: 1, x:0 }}
            exit={{ opacity: 0, x:-50}}
            transition={{ duration: 0.5 }}
        >
            <div className='absolute top-10 right-2'>
                <img
                    onClick={closedNavBar}
                    src="/mobileNavbar/collapse.png"
                    className='w-12 h-12 cursor-pointer'
                    alt="Collapse"
                />
            </div>
            <div className='w-full flex flex-col gap-y-6 justify-around items-center mb-4'>
                <div>
                    <span className='text-white hover:text-green-400 cursor-pointer text-lg'>
                        Home
                    </span>
                </div>
                <div>
                    <span className='text-white hover:text-green-400 cursor-pointer text-lg'>
                        About Us
                    </span>
                </div>
                <div>
                    <span className='text-white hover:text-green-400 cursor-pointer text-lg'>
                        Services
                    </span>
                </div>
                <div>
                    <span className='text-white hover:text-green-400 cursor-pointer text-lg'>
                        Contact
                    </span>
                </div>
                <div>
                    <span className='text-white hover:text-green-400 cursor-pointer text-lg'>
                        Blog
                    </span>
                </div>
            </div>
            <div className='w-full flex flex-col justify-around items-center mb-4'>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-full flex flex-col justify-center items-center gap-y-4 rounded-lg p-2'>
                    <div className='flex w-full bg-yellow-400 flex-col justify-center items-center gap-x-4'>
                        <img src="/homePage2/user.png" className='w-8 h-8 object-cover' alt="User" />
                        <span className='text-white text-lg font-bold'>Sign Up</span>
                    </div>
                    <div className='flex w-full bg-green-400 flex-col justify-center items-center gap-x-4'>
                        <img src="/homePage2/user.png" className='w-8 h-8 object-cover' alt="User" />
                        <span className='text-white text-lg font-bold'>Log In</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default NavBarTwoMobile;
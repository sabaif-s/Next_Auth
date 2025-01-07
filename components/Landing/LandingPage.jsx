import React from 'react';
import NavBar from './NavBar/NavBar';
const  LandingPage = () => {
    const heightNav=()=>{
        console.log("Height Nav");
    }
    return (
        <div className='w-full min-h-screen bg-blue-400' >
                    <NavBar heightNav={heightNav} />      
        </div>
    );
};

export default  LandingPage;
import React from 'react';
import NavBar from './NavBar/NavBar';
import Main from './main/Main';
import MainRight from './main/MainRight';
const  LandingPage = () => {
    const heightNav=()=>{
        console.log("Height Nav");
    }
    return (
        <div className='min-h-screen bg-white w-full relative overflow-x-hidden' >
                    <NavBar heightNav={heightNav} />  
                     
                    <Main key={"main"} NavBarHeight={40} />
        </div>
    );
};

export default  LandingPage;
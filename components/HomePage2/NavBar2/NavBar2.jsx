import React from 'react';

const  NavBarTwo = () => {
    return (
        <div className='w-11/12 flex justify-center items-end h-full overflow-hidden ' >
        <div className='xl:w-1/2 w-1/3 h-1/2  flex justify-around items-start' >
               <div>
                <span className='text-white hover:text-green-400 cursor-pointer xl:text-xl' >
                Home
                </span>
                
               </div>
               <div>
               <span className='text-white hover:text-green-400 cursor-pointer xl:text-xl' >
                About Us
                </span>
               </div>
               <div>
               <span className='text-white hover:text-green-400 cursor-pointer xl:text-xl' >
                Services
                </span>
               </div>
        </div>
        <div className='2xl:w-1/2 w-2/3 h-full flex justify-between items-end ' >
                 <div className='xl:w-1/2 w-1/3 h-1/2  flex xl:justify-between justify-center xl:gap-x-0 gap-x-8 items-start' >
                 <div>
                <span className='text-white hover:text-green-400 cursor-pointer xl:text-xl' >
                Contact
                </span>
                
               </div>
               <div>
               <span className='text-white hover:text-green-400 cursor-pointer xl:text-xl' >
                Blog
                </span>
               </div>
                 </div>
                 <div className='w-1/2  h-full cursor-pointer  flex justify-end items-end' >
                      <div className='xl:w-2/3 w-full h-1/2 flex justify-center items-center gap-x-4 bg-yellow-400 rounded-l-[30]' >
                               <div className='flex justify-center items-center gap-x-4' >
                                   <img src="/homePage2/user.png" className='w-8 h-8 object-cover' alt="" />
                                   <span className='text-white 2xl:text-xl font-bold' >sign up</span>
                               </div>
                               <div className=' h-2/3 bg-white' style={{width:"4px"}} >

                               </div>
                               <div className='flex justify-center items-center' >
                                    <span className='text-white 2xl:text-xl font-bold' >
                                        Log in
                                    </span>
                               </div>
                      </div>
                 </div>
        </div>
  </div>
    );
};

export default  NavBarTwo;
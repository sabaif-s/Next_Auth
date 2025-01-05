import React from 'react';


const 
HomePage = () => {
    return (
        <div className="w-full h-screen bg-white p-20" >
        <div className="w-full h-full bg-black flex justify-center items-center relative" >
        <div className="absolute bg-gray-300 flex flex-col gap-y-2 h-4/6 py-4 justify-end items-center left-0 h-full w-1/12" style={{  borderRight: "1px solid #f5f5f5" }}>
            <img src="/homePage2/" className='w-8 h-6' alt="" />
        </div>
        <div className="w-full h-2/3 flex  relative  justify-center items-start" >
          <div className=" rounded-full absolute " style={{border:"1px solid #f5f5f5", width:"260px",height:"260px"}} >

          </div>
          <div className="w-1/2 h-full  flex justify-end items-center" >
                    <div className="w-5/6  h-full flex justify-start items-center" >
                       <div className="w-11/12 h-full  flex flex-col gap-y-4 justify-center items-center relative" >
                                <div className="w-full h-1/3  flex flex-row justify-start items-center" >
                                   <div className="h-full w-6  mr-6" >

                                   </div>
                                   <div className="" >
                                         <span className="w-full flex justify-start word-break text-2xl items-center text-yellow-600" >
                                            Interior Design Agency
                                         </span>
                                         <span className="w-full xl:text-4xl 2xl:text-6xl font-sans flex word-break justify-start items-center text-white" >
                                            We create more
                                         </span>
                                         <span className="w-full relative flex justify-center items-end  font-bold  xl:text-4xl 2xl:text-6xl flex word-break justify-start items-center text-yellow-400" >
                                           <span className="w-full h-2/3  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  bg-yellow-200  absolute bottom-0 bg-opacity-10 ">

                                           </span>
                                            than just Interior.
                                         </span>

                                   </div>
                                </div>
                                <div className="w-full h-1/6 overflow-hidden pl-12" >
                                  <span className="w-full  word-break text-white" >
                                   Lorem ipsum dolor sit amet, consectetur adipiscing voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  </span>
                                 </div>
                                 <div className="w-full h-1/6  pl-12" >
                                 <div className='w-1/2 py-4 cursor-pointer z-50  border-2 border-yellow-300 relative flex justify-center items-center' >
                                       <span className=' h-full flex justify-center items-center text-white' >
                                       Know more
                                       </span>
                                    
                                    <img src="/homePage2/right arrow.png" className='w-10 h-6 absolute right-2 ' alt="" />
                                   
                                 </div>
                                  
                                 </div>
                                 <div className='w-full h-12  flex gap-x-4 justify-end items-center pr-6 absolute bottom-4 right-4' >
                                   <div className='w-6 h-6 rounded-full bg-yellow-300 ' >

                                   </div>
                                   <div className='w-6 h-6 rounded-full bg-white ' >

</div>
                                 </div>
                       </div>
                    </div>
                 
          </div>
          <div className="w-1/2 h-full  pl-8 py-4 flex justify-center items-center gap-x-8" >
                          <div className='w-3/4 h-full bg-red-400 relative z-50' >
                                  <img src="/homePage2/chairHome.jpg" className='w-full h-full' alt="" />
                          </div>
                          <div className='w-3/4 h-full bg-green-400' >
                          <img src="/homePage2/plantHome.jpg" className='w-full h-full' alt="" />
</div>
<div className='w-1/4 h-full bg-gray-400' >
<img src="/homePage2/bulbLight.jpg" className='w-full h-full object-cover' alt="" />
</div>
          </div>
        </div>
               <div className="absolute top-0 left-0 h-1/6 w-full" style={{ borderBottom: "1px solid #f5f5f5" }}>
</div>
<div className="absolute bottom-0 left-0 flex justify-end items-center  w-full h-1/6" style={{ borderTop: "1px solid #f5f5f5" }}>
<div className='w-1/6 h-full bg-yellow-400' >

</div>
</div>
<div className=" left-0 bottom-0 w-1/2 h-5/6" style={{ position:"absolute",  borderRight: "1px solid #f5f5f5" }}>
</div>
        </div>
</div>
    );
};

export default 
HomePage;
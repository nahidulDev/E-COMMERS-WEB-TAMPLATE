import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";

const Popup = ({showpopup,setShowpopup}) => {
  return (
   <>
        {showpopup && (
        <div>
         <div className=' h-screen  w-screen  fixed  top-0  left-0   bg-black/50 z-50  backdrop:blur-sm'>
                   <div className=' fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  p-4  shadow-md  bg-white  rounded-md  duration-200 w-[300px]'>
                    {/* header section*/}
                    <div className=' flex items-center justify-between'>
                    <h1 className='text-2xl font-bold  text-primaryDark '> Login 
                    
                    </h1>
                   
                    <RxCross2  className=' text-2xl  cursor-pointer ' onClick={()=> setShowpopup(false)}/>
                    </div>
                     {/* Login section*/}
          <div className=' mt-4'>
                     
                   <input type="email"
                   placeholder=' Enter Email'
                    className=' w-full rounded-md  border
                     border-gray-300 dark:border-gray-500 px-2 py-1 mb-4' />

                      <input type="email"
                   placeholder=' Enter Email'
                    className=' w-full rounded-md  border
                     border-gray-300 dark:border-gray-500 px-2 py-1 mb-4' />

                       {/* Login Button section*/}

                       <div>
                       <button
                       className=' w-full  bg-primary text-white p-2  rounded-md'>
                       Login
                       </button>
                       </div>
                        {/* Social Login section*/}
                        <div className=' mt-4 '>
                        <p className=' text-center '> Or login with </p>
                         <div className=' flex justify-center gap-2 mt-2 '>
                          <FaFacebook className='text-3xl  hover:text-blue-600 duration-200 '/>
                          <FaGoogle className=' text-3xl  hover:text-blue-600 duration-200'/>
                         </div>
                        </div>
          </div>                         
                   </div>

                  
                   <div/>
         </div>
        </div>
        )
        
        }
   </>
  )
}

export default Popup
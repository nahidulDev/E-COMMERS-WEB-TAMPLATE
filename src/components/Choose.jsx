import React from 'react'
import { FaBus } from 'react-icons/fa'

const Choose = () => {
  return (
<>
        <div className='py-14 md:py-28  bg-gray-100'> 
           <div className=' container '>
            <h1 className='pb-16 tracking-wider text-2xl  font-semibold
             text-primaryDark text-center'> Why Choose Us </h1>

            {/* card*/}
                 <div >
                         <div className="grid grid-cols-4  md:grid-cols4  gap-14  sm:gap-4">
                          <div data-aos="fade-up"
                            data-aos-dely="500" className='text-center  flex justify-center items-center flex-col  gap-2 px-2'>
                           <p   className=' text-pink-900   font-semibold '> Loren ispn color sit amet ispn coloe sit amet</p>
                           <p  
                           className='text-5xl rotate-90 text-pink-500 text-center translate-x-5'>....</p>
                           <FaBus  data-aos="fade-up"
                            data-aos-dely="500" className='text-5xl text-primary'/>
                          </div>
                           <div  data-aos="fade-down"
                            data-aos-dely="500" className='text-center  flex justify-center items-center flex-col  gap-2 px-2'>
                              <FaBus className='text-5xl text-primary'/>
                               <p className='text-5xl rotate-90 text-pink-500 text-center translate-x-5'>....</p>
                           <p className=' text-pink-900   font-semibold '> Loren ispn color sit amet ispn coloe sit amet</p>
                          
                       
                          </div>
                          <div  data-aos="fade-up"
                            data-aos-dely="500" className='text-center  flex justify-center items-center flex-col  gap-2 px-2'>
                           <p className=' text-pink-900   font-semibold '> Loren ispn color sit amet ispn coloe sit amet</p>
                           <p className='text-5xl rotate-90 text-pink-500 text-center translate-x-5'>....</p>
                           <FaBus className='text-5xl text-primary'/>
                          </div>
                            <div  data-aos="fade-down"
                            data-aos-dely="500" className='text-center  flex justify-center items-center flex-col  gap-2 px-2'>
                              <FaBus className='text-5xl text-primary'/>
                               <p className='text-5xl rotate-90 text-pink-500 text-center translate-x-5'>....</p>
                           <p className=' text-pink-900   font-semibold '> Loren ispn color sit amet ispn coloe sit amet</p>
                          
                       
                          </div>
                         </div>
                         
                 </div>
           </div>
        </div>
</>
  )
}

export default Choose
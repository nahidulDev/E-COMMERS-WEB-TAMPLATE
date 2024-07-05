import React from 'react'
import { IoLocateSharp,} from 'react-icons/io5'
import { MdForwardToInbox } from "react-icons/md";
import { FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
  <>
 <div data-aos="fade-up"
                            data-aos-dely="500" className=' text-white  mt-20 '>
 <div className=' container  bg- bg-gradient-to-b    from-red-800 to-primaryDark rounded-t-3xl '>
  {/* Heading Section*/}
   <h1 className=' py-10  text-3xl font-bold  text-yellow-700 text-center'>
   Contract Us </h1>
  {/* Grid Section*/}
   <div className='  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-14 border-b-2
     border-white pb-6 '>
           <div className=' text-center space-y-4'>
             <div className='flex justify-center'>
             <IoLocateSharp className=' text-5xl '/>
             </div>
              <p className=' text-xl'>#92, 3rd Main, Virgo Nagar, Post, 
               Seegehalli, Bengaluru, Karnataka 560049</p>
               
           </div>
                {/* Email Section*/}
            <div className=' text-center space-y-4'>
             <div className='flex justify-center'>
             <MdForwardToInbox className=' text-5xl '/>
             </div>
              <p> info@goodfood.com<br/>

                     hr@goodfood.com</p>
               
           </div>
                         {/* Number Section*/}

                         <div className=' text-center space-y-4'>
             <div className='flex justify-center'>
             <FaPhone  className=' text-5xl '/>
             </div>
              <p >+91 9643224232 - Sales and Services <br/>

             +91 9623423436 - Hiring Queries <br/>

                  +91 2345232445 - Whatsapp</p>
               
           </div>
                        
   </div>
    {/* Number Section*/}  
               <div className='flex justify-between pb-10 py-5'>
               <p>© 2022 TCJ. All rights reserved</p>
                       <div>
                       <a href=""> Privacy Policy</a>
                       <a href=""> Terms & Conditions</a>
                       </div>
               </div>
 </div>
 </div>
  </>
  )
}

export default Footer
import React from 'react'
import PrimaryButton from './PrimaryButton'
import Leaf  from "../assets/leaf.png"
import Lemon from "../assets/lemon.png"
import Tometo from "../assets/tomato.png"
import Apple from "../assets/apple.png"
import Kivi from "../assets/kivi.png"
const Banner = () => {
  return (
    <>
    <div   className='container py-4 relative'>
    <div className='relative z-20'>
    <h1  data-aos="fade-up"
    data-aos-dely="500" className='py-8 tracking-wider text-2xl
     font-semibold text-primaryDark text-center'> 
     Taste the healthy Differents </h1>

    <div className='space-y-10'>
    <div  data-aos="fade-up"
    data-aos-dely="500" className='grid  grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
    
    <div>
    <p data-aos="fade-up" className=' text-xl p-2'> {""} 
    We know that  <span className=' text-pink-700'> time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.

    </p>
    </div>
    </div>
        <div></div>
       <div  data-aos="fade-up"
    data-aos-dely="500" className='grid  grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
    <div></div>
    <div>
    <p className='text-xl p-2'> {""} 
    We know that  <span className=' text-pink-700'> time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.

    </p>
    </div>
    </div>
    </div>

    {/*button section */}
    <div  data-aos="fade-up"
    data-aos-dely="300" className='flex justify-center mt-10 sm:mt-14'>
    <PrimaryButton  title={"Choose Your Meal Plan "}/>
    </div>

     {/* bg-images */ }
     <div  data-aos="fade-left"
    data-aos-dely="500" className=' absolute top-5 left-16 sm:bottom-0 sm:left-0  opacity-50 sm:opacity-100  '>
     <img 
     src={Leaf} className=' max-w-[160px]' alt="" />
     </div>

       <div  data-aos="fade-right"
    data-aos-dely="500" className=' absolute bottom-16 left-16 sm:bottom-0 sm:left-0  opacity-50 sm:opacity-100  '>
     <img src={Tometo} className=' max-w-[280px]' alt="" />
     </div>

       <div  data-aos="fade-left"
    data-aos-dely="500" className=' absolute top-10 right-16  sm:right-20  opacity-50 sm:opacity-100  '>
     <img src={Lemon} className=' max-w-[160px]' alt=" no picture" />
     </div>

     
       <div  data-aos="fade-right"
    data-aos-dely="500" className=' hidden sm:block absolute  bottom-0  right-0  '>
     <img src={Apple} className=' max-w-[160px]' alt="" />
     </div>

     
       <div  data-aos="fade-left"
    data-aos-dely="500" className=' absolute top-1/2 translate-y-1/2 left-1/3 translate-x-1/2  opacity-50 sm:opacity-100  '>
     <img src={Kivi} className=' max-w-[160px]' alt="" />
     </div>

    </div>
    </div>
    </>
  )
}

export default Banner
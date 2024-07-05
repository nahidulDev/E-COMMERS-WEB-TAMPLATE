import React from 'react'
import HeroImgn from "../assets/hero.png"
import PrimaryButton from './PrimaryButton'
import HeroBg from "../assets/herobg.png"
 
const Hero = () => {
  return (
   <>
        <div  className='relative z-[-1] mt-0   h-[100%] bg-cover  w-[100%] bg-center  bg-no-repeat' style={{backgroundImage:`url(${HeroBg})`}}>

        <div className=' container '>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] '>
          {/* text-content*/}
          <div className=' space-y-7  text-dark order-2 sm:order-1'>
          <h1 data-aos="fade-up"  className='text-5xl'> Fresh & Healthy Meal plan{" "}  <span className='text-pink-500 text-7xl font-cursive'> Delivered</span>  {""} in Miami</h1>
          <p data-aos="fade-up" data-aos-delay="300" className='lg:pr-64'> 
          Delicious Meals Delivered to Your Door From $132.95 per week
          </p>
            {/*Button Content*/}
           <PrimaryButton data-aos="fade-up" data-aos-delay="600" title={"Choose Your Meal Plan"}/>
          </div>
          {/*Images Content*/}
          <div  className='relative z-30 order-1  sm:order-2'>
          <img data-aos="fade-up" src={HeroImgn} alt="" className=' w-full sm:scale-125 sm:translate-y-16' />
          </div>
           
         </div>
        </div>
      
        </div>
   </>
  )
}

export default Hero
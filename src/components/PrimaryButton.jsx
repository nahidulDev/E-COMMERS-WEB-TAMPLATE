import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimaryButton = ({title}) => {
  return (
    <>
    <div className='flex items-center  group'>
    <button className=' bg-pink-800 h-[40px] text-white  px-3 py-2 '>
    {title} 
    </button>
    <FaArrowRight className='inline-block  group-hover:!translate-x-4  duration-200 p-2  text-base h-[40px] w-[40px] bg-pink-700 text-white'/>
    </div>
    </>
  )
}

export default PrimaryButton
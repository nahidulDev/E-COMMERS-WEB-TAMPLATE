import React from 'react'
import {FaCaretDown, FaUber} from "react-icons/fa"
 const Navlinks=[
 {
 id :1,
 name:"Home",
 link:"/#",
 },
 {
 id :2,
 name:"About",
 link:"/#",
 },
 {
 id :3,
 name:"Contract",
 link:"/#",
 },

 ];
 const DropLinks=[
 {
 id:1,
 name:"Vegetables",
 link:"/#"
 },
  {
 id:2,
 name:"Fruits",
 link:"/#"
 },
  {
 id:1,
 name:"Grains",
 link:"/#"
 },
 
 ]

const Navbar = ({HandleShow}) => {
  return (
    <>
    <div data-aos="fade" className='bg-white shadow-sm'>
    <div className='container flex justify-between py-4 sm:py-3'>
    <div className='font-bold text-3xl'>Logo</div>
    <div>
    <ul className='flex items-center gap-10'>
    {
             Navlinks.map(({id,name,link})=>(
              <li key={id}>
              <a className='inline-block hover:text-gray-400 font-semibold text-xl' href={link}>{name}</a>
              </li>
             ))
    }
    <li className='cursor-pointer group '>
    <a href="#" className='inline-block hover:text-gray-500 font-semibold text-xl group-hover:rotate-180 duration-300'>  
    <div className='flex items-center gap-[2px] py-2'>
    Category <span><FaCaretDown/></span>
    </div></a>
    <div className=' text-xl 
     z-[9999]font-semibold bg-white p-4 text-black group-hover:block hidden shadow-md w-[200px] rounded-md  absolute'>
    <ul>
    {

               DropLinks.map(({id , name,link})=>(
               <li  key={id}>
               <a href={ link} className='inline-block font-semibold w-full hover:bg-gray-400 p-2 rounded-md text-xl '> { name}</a>
               </li>
               ))

    }
    </ul>
    </div>
    </li>
    <li>
    <button onClick={HandleShow} className='flex justify-center items-center gap-2 bg-pink-600 rounded-sm text-white px-5 py-2 hover:scale-105 duration-300 text-xl h-[40px]'><FaUber/>My Account</button>
    </li>
    </ul>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Navbar
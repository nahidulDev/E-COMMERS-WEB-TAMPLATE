import React from 'react'
import Img from "../assets/about.png"
import {FaUser} from "react-icons/fa"
import Img2 from "../assets/vector.png"
const About = ({HandleShow}) => {
  return (
    <>
    <div  className='relative  mt-0 py-14  h-[100%] bg-cover  w-[100%] bg-center  bg-no-repeat' style={{backgroundImage:`url(${Img})`}}>
    <div className='container relative     min-h-[500px]  '>
    <h1 data-aos="fade-up"
                            data-aos-dely="500" className='pt-20 tracking-wider text-4xl  font-semibold text-white text-center '>
    About Us </h1>
    {/* Card Section*/}
    <div data-aos="fade-up"
                            data-aos-dely="500"
                             className=' bg-pink-500 p-10 my-16 '>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Fuga doloribus blanditiis culpa ipsa autem! Quas in ut cumque quo, eum ab ea
     inventore voluptatum at dignissimos repellat placeat quaerat veniam fugit?
      Quasi quidem, saepe tenetur quam nihil velit nobis eum ad hic odio mollitia 
      itaque consectetur eaque unde cumque possimus reprehenderit quas beatae 
      praesentium consequatur? Eum magni doloremque obcaecati necessitatibus soluta 
      doloribus quos temporibus aperiam, at harum earum, commodi, eligendi omnis fugiat
       error exercitationem ullam labore culpa aliquam possimus pariatur? Atque repudiandae beatae animi ducimus voluptate minima temporibus neque libero dolore ipsam, accusamus omnis ullam id aspernatur, quas fuga esse.
               <div className=' pt-10 flex justify-center '>
                            <button onClick={HandleShow} className='flex justify-center items-center gap-2 bg-pink-900 rounded-sm
                             text-white px-5 py-2 hover:scale-105 duration-300 text-xl h-[40px]'>
                            <FaUser/>My Account</button>
               </div>
    </div>
    </div>
     <div>
     <img className='absolute top-0 right-0 w-full mx-auto' src={Img2} alt="" />
     </div>
    </div>
    </>
  )
}

export default About
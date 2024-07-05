import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Choose from './components/Choose'
import About from './components/About'
import Footer from './components/Footer'
import Popup from './components/Popup'
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

 const [showpapup,setShowpapup] =useState(false);
  const HandleShow=()=>{
  setShowpapup (true);
  }

    useEffect(()=>{
 
 AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  AOS.refresh()
 },[]);
 
  return (
    <>
    <div className='overflow-x-hidden'>
    <Navbar HandleShow={HandleShow}/>
    <Hero/>
    <Banner/>
    <Choose/>
    <About HandleShow={HandleShow}/>
    <Banner/>
    <Footer/>
    <Popup showpopup={showpapup} setShowpopup={setShowpapup}/>
    </div>
    </>
  )
}

export default App;

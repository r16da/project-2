import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/pfp.png)] bg-right lg:bg-[15%] bg-cover'
     style={{backgroundSize:"35%"}}
     >
        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[50px] sm:text-[30px] font-bold leading-tight flex justify-center items-center text-pink-400' >
            <div>
                <p data-aos="fade-left">I am RIDA</p>
                <p data-aos="fade-left">a recent O-Level Graduate</p>
                <p data-aos="fade-left">Currently doing A-Levels and pursuing programming as my career.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen ] = useState(false)

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center text-pink-400'>
            <div className='text-xl font-medium '>Portfolio</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menulink hover:text-pink-300 hover:underline'><a href='#hero'>Home</a></li>
                <li className='menulink hover:text-pink-300 hover:underline'><a href='#about'>About</a></li>
                <li className='menulink hover:text-pink-300 hover:underline'><a href='#skills'>Skills</a></li>
                <li className='menulink hover:text-pink-300 hover:underline'><a href='#contact'>Contact</a></li>
            </ul>


            <IoMenuSharp/>
           </div>

        </div>



  )
}

export default Navbar

import React from 'react'
import {AiOutlineSearch, AiOutlineClose} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';



export default function Navbar() {
  return (
    <div className='flex justify-between items -center px-14 h-14 bg-[#E0E9F7] opacity-95 sticky top-0 z-50'>
        <div className='flex gap-8 items-center text-2xl'>
            <div>
                <GiHamburgerMenu />
            </div>
            <Link to="/">
              <div className='flex gap-1 items-center justify-center'>
              
                <img src={logo} alt='logo'/>
                {/* <span className='text-xl font-medium'>OC</span> */}
              </div>
            </ Link>
        </div>

        <div>
            
        </div>
      
    </div>
  )
}

"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XmarkIcon} from '@heroicons/react/24/solid'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import MenuOverlay from './MenuOverlay'


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const NavLinks=[{
        title: 'About',
        path: '#about'
    },
{
    title:"Projects",
    path:"#projects"
},{
    title:"Contact",
    path:"#contact"
    
}]
  return (
    <nav className='fixed border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 '>
  <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 ">
      <Link href={"/"} className="text-2xl md:text-3xl text-white font-semibold">MY PROFILE</Link>
    <div className='mobile-menu block md:hidden'>
<button className='flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white '
onClick={()=>setNavbarOpen(!navbarOpen)}
>
{
  navbarOpen? (< IoClose className='h-5 w-5'/>):(< FaBars className='h-5 w-5'/>)
}
</button>
    </div>
      <div className='menu hidden md:block md:w-auto' id="navbar">
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>  
        {
            NavLinks.map((item, index)=>(
                <li key={index}>
                    <NavLink title={item.title} href={item.path}/>
                </li>
            ))
        }
        </ul>
      </div>
      </div>
      {navbarOpen? <MenuOverlay links={NavLinks}/>: null}
    </nav>
  
  )
}

export default Navbar

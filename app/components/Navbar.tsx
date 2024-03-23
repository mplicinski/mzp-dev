"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { Source_Code_Pro } from 'next/font/google'

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

const sourceCodePro = Source_Code_Pro({subsets: ['latin']})

const Navbar = () => {
const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 bg-[#000000] bg-opacity-95 border border-b-[#33353F] border-l-transparent border-r-transparent border-t-transparent z-20'>
      <div className='flex flex-wrap container lg:py-4 items-center justify-between mx-auto px-4 py-2'>
        <Link className={sourceCodePro.className + " text-2xl md:text-5xl"} href={"/"}>
          mzp.dev
        </Link>
        <div className='block md:hidden'>
          {!navbarOpen ? (
              <button onClick={()=> setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5'/>
              </button>
            ) : (
              <button onClick={()=> setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5'/>
                </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar
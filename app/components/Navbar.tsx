"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';


const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
    {
        title: "Portfolio",
        path: "#portfolio"
    },
]

export const Navbar = () => {
    // navbar icon states
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-slate-800 bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">

            {/* Logo on top of screen */}
            <Link 
                href={"/#portfolio"} 
                className="text-2xl md:text-4xl text-purple-500 font-semibold"
            >
                    Portfolio
            </Link>

            {/* Mobile menu */}
            <div className="mobile-menu block md:hidden">
                {
                    // Navbar Icons: Bars and X-mark
                    navbarOpen ? (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-purple-500 text-purple-500 hover:text-white hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-purple-500 text-purple-500 hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    )
                }

            </div>

            {/* Navbar options */}
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    <li className="block py-2 pl-3 pr-4 text-purple-500 sm:text-xl rounded md:p-0 hover:text-white">
                        <a href="#about">About</a>
                    </li>
                    <li className="block py-2 pl-3 pr-4 text-purple-500 sm:text-xl rounded md:p-0 hover:text-white">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="block py-2 pl-3 pr-4 text-purple-500 sm:text-xl rounded md:p-0 hover:text-white">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
  )
}

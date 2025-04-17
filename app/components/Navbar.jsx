import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { Dog, Keyboard, Menu, X } from 'lucide-react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if(scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, [])

  return (
    <>
      <nav className={`transition-all duration-400 w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-(--color-blue)  text-(--color-beige) dark:text-stone-700 dark:shadow-sm dark:brder-b-[5px] dark:bg-stone-200 dark:border-stone-700" : ""}`}>
        <a hef="#top">
          <Image alt="" src={isDarkMode ? assets.kaya_logo : isScroll? assets.kaya_logo_color : assets.kaya_logo_blue} className='w-8 mr-14'/>
        </a>
        <ul className={`hidden md:flex items-center rounded-full px-6 py-1 font-semibold ${ isScroll? "": "bg-(--color-blue-light)/50 bg-opacity-50  dark:border dark:border-stone-700 dark:bg-white/0" } `}>
          <li><Link className='cursor-pointer group relative px-5 py-2' href="#top"><span className={`dark:hidden absolute w-full h-full rounded-full top-0 left-0 bg-(--color-blue-light) round-full opacity-0 transition ${ isScroll? "group-hover:opacity-100": "" }`}></span><span className='relative'>Home</span></Link></li>
          <li><Link className='cursor-pointer group relative px-5 py-2' href="#about"><span className={`dark:hidden absolute w-full h-full rounded-full top-0 left-0 bg-(--color-blue-light) round-full opacity-0 transition ${ isScroll? "group-hover:opacity-100": "" }`}></span><span className='relative'>About Me</span></Link></li>
          <li><Link className='cursor-pointer group relative px-5 py-2' href="#hire"><span className={`dark:hidden absolute w-full h-full rounded-full top-0 left-0 bg-(--color-blue-light) round-full opacity-0 transition ${ isScroll? "group-hover:opacity-100": "" }`}></span><span className='relative'>Hire</span></Link></li>
          <li><Link className='cursor-pointer group relative px-5 py-2' href="#work"><span className={`dark:hidden absolute w-full h-full rounded-full top-0 left-0 bg-(--color-blue-light) round-full opacity-0 transition ${ isScroll? "group-hover:opacity-100": "" }`}></span><span className='relative'>My Work</span></Link></li>
          <li><Link className='cursor-pointer group relative px-5 py-2' href="#contact"><span className={`dark:hidden absolute w-full h-full rounded-full top-0 left-0 bg-(--color-blue-light) round-full opacity-0 transition ${ isScroll? "group-hover:opacity-100": "" }`}></span><span className='relative'>Contact Me</span></Link></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            { isDarkMode ? <Dog /> : <Keyboard /> }  
          </button>
          <button onClick={openMenu} className='block md:hidden ml-3'><Menu /></button>
        </div>

        {/* mobile menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-(--color-blue) text-white transition duration-500 dark:bg-stone-800 dark:text-white">
          <button className='absolute right-6 top-6' onClick={closeMenu}>
            <X />
          </button>
          <li><Link href="#top" onClick={closeMenu}>Home</Link></li>
          <li><Link href="#about" onClick={closeMenu}>About Me</Link></li>
          <li><Link href="#hire" onClick={closeMenu}>Hire</Link></li>
          <li><Link href="#work" onClick={closeMenu}>My Work</Link></li>
          <li><Link href="#contact" onClick={closeMenu}>Contact Me</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;

import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Mail } from 'lucide-react';

const Footer = ({isDarkMode}) => {
  return (
    <div className='pt-20 bg-(--color-yellow)/40 dark:bg-stone-200'>
      <div className='text-center '>
        <Image src={isDarkMode ? assets.kaya_logo : assets.kaya_logo_blue} alt='' className='w-14 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Mail />
          kayakimcreates@gmail.com
        </div>
      </div>
      <div className='dark:bg-stone-800 dark:text-stone-200 bg-(--color-blue-light) text-(--color-beige)'>
        <div className='text-center sm:flex items-center justify-between mx-[10%] mt-12 py-4'>
          <p>@ 2025 Kayacreates. All rights reserved.</p>
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><Link target='_blank' href='https://www.linkedin.com/in/kayakim/'>LinkedIn</Link></li>          
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

import { assets, hireData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

const Hire = ({isDarkMode}) => {
  return (
    <div id='hire' className='w-full dark:border-b-[0.5px] bg-(--color-beige) dark:bg-stone-200 border-stone-700 px-[12%] py-10 scroll-mt-20 relative'>
      <div className='w-full h-full absolute top-0 left-0 opacity-20 bg-center bg-size-[auto_800px] bg-[url(../assets/circle-bg.png)]  dark:bg-none'></div>
      <div className='my-16 z-5 relative'>
        <motion.h4
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.3}}
          className='text-center mb-2 text-lg uppercase font-semibold tracking-[3px]'>Why hire me</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl '>What sets me apart</motion.h2>
        <motion.p
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.6, delay: 0.8}}
          className='text-center max-w-xl mx-auto mt-5 mb-12 '>I build clean, responsive WordPress sites that bring designs to life. With a background in both design and code, I focus on usability, performance, and keeping things easy to maintain.</motion.p>
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.8, delay: 1}}
          className='grid grid-cols-auto gap-6 my-10'>
          {hireData.map(({icon, iconDark, title, description, link}, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='rounded-lg px-8 py-12 bg-(--color-yellow-light) shadow-c-blue dark:shadow-c-black dark:hover:shadow-c-black hover:-translate-y-1 duration-500 dark:bg-stone-200 dark:border-[.5px] dark:border-stone-700' key={index}>
              <Image src={isDarkMode? iconDark : icon } alt={title} className='w-10' />
              <h3 className='text-lg my-4 font-semibold'>{title}</h3>
              <p className='text-sm leading-5'>{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Hire

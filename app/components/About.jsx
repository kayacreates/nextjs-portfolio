import { assets, skillData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { CodeXml, GraduationCap, SwatchBook } from 'lucide-react';

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full bg-(--color-blue) text-[color:var(--color-beige)] dark:bg-inherit dark:border-b-[0.5px] dark:shadow-c-black dark:text-stone-700 px-[12%] py-10 scroll-mt-20 relative'>
      <div className='w-full h-full absolute top-0 left-0 opacity-5 bg-center bg-[url(../assets/stripes.png)]  dark:bg-none'></div>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row gap-20 my-20 relative z-2'>
        <div>
          <motion.h4
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.3}}
          className='uppercase font-semibold tracking-[3px] mb-2 text-lg '>Introduction</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-5xl'>About me</motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.6, delay: 0.8}}
          className='flex-1'>
          <p className='mb-10 max-w-xl '>I’m comfortable speaking the language of both designers and developers, which allows me to build websites that not only function smoothly but also stay true to the visual intent. Whether I’m translating Figma mockups into pixel-perfect layouts or troubleshooting cross-browser issues, I focus on delivering polished, user-centered experiences from start to finish.</p>
          <motion.ul
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl text-(--color-blue) dark:text-stone-700'>
            {skillData.map(({title, detail, icon}, index) => (
              <motion.li key={index}
              whileHover={{ scale: 1.05 }}
              className='dark:border-[0.5px] rounded-full flex flex-col text-center items-center bg-(--color-yellow) shadow-c-blue dark:bg-stone-200 dark:shadow-stone-700 dark:rounded-xl p-10 dark:p-6 hover:bg-motion.ghtHover hover:-translate-y-1 duration-500 dark:shadow-c-black dark:hover:shadow-stone-800'>
                { icon }
                <h3 className='my-4 font-semibold '>{title}</h3>
                <p className='opacity-80 text-sm'>{detail}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y:20, opacity: 0}}
            whileInView={{ y:0, opacity: 1 }}
            transition={{delay: 1.3, duration: 0.5}}
            className='mt-6 mb-4  uppercase tracking-[3px] font-semibold dark:text-stone-700'>Tools I use</motion.h4>
          <motion.ul
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{delay: 1.5, duration: 0.6}}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map(({icon, iconDark}, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square dark:border-[.5px] dark:shadow-c-black rounded-lg bg-(--color-yellow-light) dark:bg-stone-200 hover:-translate-y-1 duration-500' key={index}>
                <Image src={isDarkMode? iconDark : icon } alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About

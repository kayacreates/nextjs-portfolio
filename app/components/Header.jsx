import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"
import { ArrowDownToLine, ArrowRight } from 'lucide-react';

const Header = ({isDarkMode}) => {
  return (
    <div className='relative bg-(--color-yellow-light) dark:bg-stone-200 dark:border-b-[0.5px] dark:border-stone-700'>
      <div className="dark:hidden paw-track absolute top-6 right-[20%] rotate-20 opacity-30">
        <motion.div
          animate={{
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="paw w-40 h-40 bg-contain -rotate-6 bg-[url(../assets/paw.png)]"></motion.div>
        <motion.div
          animate={{
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            delay: 0.5
          }}
          className="paw mt-[60px] w-40 h-40 bg-contain rotate-6  bg-[url(../assets/paw.png)]"></motion.div>
        <motion.div
          animate={{
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            delay: 1
          }}
          className="paw w-40 h-40 bg-contain -rotate-6 bg-[url(../assets/paw.png)]"></motion.div>
        <motion.div
          animate={{
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            delay: 1.5
          }}
          className="paw w-40 h-40 mt-[60px] rotate-6 bg-contain bg-[url(../assets/paw.png)]"></motion.div>
        <motion.div
          animate={{
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            delay: 2
          }}
          className="paw w-40 h-40 bg-contain -rotate-6 bg-[url(../assets/paw.png)]"></motion.div>
        <motion.div
          animate={{
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            delay: 2.5
          }}
          className="paw w-40 h-40 bg-contain bg-[url(../assets/paw.png)]"></motion.div>  
        <motion.div
          animate={{
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            delay: 3
          }}
          className="paw w-40 h-40 bg-contain bg-[url(../assets/paw.png)]"></motion.div>
      </div>
      <div className='relative h-screen w-11/12 max-w-2xl text-center mx-auto flex flex-col items-center justify-center gap-4'>
        <motion.div
          initial={{ scale: 0}}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
          <Image src={isDarkMode ? assets.kaya_profile : assets.cheeyu_profile} alt='profile picture' className='rounded-full w-32 dark:grayscale dark:contrast-70 dark:brightness-125' />
        </motion.div>
        <motion.h3
          initial={{ y: -20, scale: 0}}
          whileInView={{ y: 0, scale: 1 }}
          transition={{duration: 0.6, delay: 0.3}}
          className='flex items-center gap-2 text-xl md:text-2xl mb-3 '>Hi! I'm Kaya Kim <Image src={isDarkMode ? assets.hand_icon : assets.tail_icon} alt='wave icon' className='rounded-full w-6' /></motion.h3>
        <motion.h1
          initial={{ y: -30, scale: 0}}
          whileInView={{ y: 0, scale: 1 }}
          transition={{duration: 0.8, delay: 0.5}}
          className='text-3xl sm:text-6xl lg:text-[66px] '>frontend developer with a designer's eye</motion.h1>
        <motion.p
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.6, delay: 0.7}}
        className='max-w-xl mx-auto '>With over 7 years of experience in frontend development and a formal education in visual arts, I bring a unique perspective to my work—one that values both clean code and thoughtful design.</motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <motion.a
            initial={{ y: 30, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1}}
            href='#contact' className='px-10 py-3 border border-[--color-blue] bg-(--color-blue) rounded-xl dark:rounded-full text-white flex items-center gap-2 dark:bg-white/0 dark:text-stone-700 dark:border-stone-700 hover:-translate-y-2 duration-300 font-semibold font-unica-one dark:font-nunito dark:border-stone-700'>contact me <ArrowRight /></motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1.2}}
            href='/sample-resume.pdf' download className='px-10 py-3 border rounded-xl dark:rounded-full border-[--color-blue] flex items-center gap-2 dark:bg-stone-700 dark:text-stone-200 hover:-translate-y-2 duration-300 font-semibold font-unica-one dark:font-nunito dark:border-stone-700'>my resume <ArrowDownToLine /></motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header

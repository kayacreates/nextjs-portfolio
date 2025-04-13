import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1de8d692-1bcc-4ebe-98a8-4fce795c2a03");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='relative dark:border-b-[0.5px] border-stone-700  w-full px-[12%] py-10 scroll-mt-20 bg-(--color-yellow-light) dark:bg-stone-200 dark:bg-none bg-no-repeat bg-center bg-[length:90%_auto]'>
      <div className='w-full h-full absolute top-0 left-0 opacity-30 bg-center bg-size-[auto_400px] bg-[url(../assets/brush-bg.png)]  dark:bg-none'></div>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{duration: 0.8}} className='my-20 relative'>
        <motion.h4
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.3}}
          className='text-center mb-2 text-lg  uppercase tracking-[3px]'>Connect with me</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl '>Get in touch</motion.h2>
        <motion.p
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.6, delay: 0.8}}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 '>Let’s build something great together. Whether you have a project in mind, a question, or just want to connect, I’d love to hear from you. Feel free to drop me a message—I'll get back to you as soon as I can!</motion.p>
        <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
          <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <motion.input
            initial={{ x: -30, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1}}
            className='flex-1 p-3 outline-none bg-(--color-yellow) dark:bg-stone-200 dark:shadow-c-black dark:border-[0.5px] rounded-md' type="text" name='name' placeholder='Enter your name' required/>
            <motion.input
              initial={{ x: 30, opacity: 0}}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{duration: 0.6, delay: 1}}
              className='flex-1 p-3 outline-none bg-(--color-yellow) dark:bg-stone-200 dark:shadow-c-black dark:border-[0.5px] rounded-md' type="email" name='email' placeholder='Enter your email' required/>
          </div>
          <motion.textarea
            initial={{ y: 30, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1}}
            className='w-full p-4 outline-none bg-(--color-yellow) dark:bg-stone-200 dark:shadow-c-black dark:border-[0.5px] rounded-md mb-6' name='message' rows='6' placeholder='Enter your message' required></motion.textarea>
          <motion.button
            initial={{ y: 30, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1}}
            href='#contact' type='submit' className='px-10 py-3 border border-[--color-blue] bg-(--color-blue) rounded-xl dark:rounded-full text-white flex items-center gap-2 dark:bg-white/0 dark:text-stone-700 dark:border-stone-700 hover:-translate-y-2 duration-300 font-semibold font-unica-one dark:font-nunito dark:border-stone-700'>Submit now<ArrowRight /></motion.button>
          
          <p className='mt-4'>{result}</p>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact

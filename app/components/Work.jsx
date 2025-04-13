import { assets, workData } from '@/assets/assets'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <div id='work' className='relative w-full bg-(--color-blue-light)/20 dark:bg-stone-200 dark:border-b-[0.5px] border-stone-700 px-[12%] py-10 scroll-mt-20'>
      <div className='my-16'>
        <motion.h4
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.3}}
          className='text-center mb-2 text-lg uppercase font-semibold tracking-[3px]'>My portfolio</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl '>My featured projects</motion.h2>
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.8, delay: 1}}
          className='flex flex-row flex-wrap md:flex-nowrap my-10 gap-5 min-h-[400px] works'>
          {workData.map((project, index) => (
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{duration: 0.6, delay: index* 0.4 }}
              target="_blank" href={project.link} className='work shadow-c-blue dark:shadow-c-black relative transition-all  dark:min-h-[400px] dark:md:h-[400px]  flex-1 md:basis-1/3 dark:hover:basis-1/2 bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group dark:border-[.5px] bg-(--color-beige) dark:bg-stone-200 h-full' key={index}>
              <div className='w-full h-full absolute top-0 left-0 opacity-40 bg-center bg-size-[auto_800px] bg-[url(../assets/triangle-bg.png)]  dark:bg-none'></div>
              <div className='work-c relative dark:static flex flex-col justify-between h-full rounded-md pt-5 pb-7 px-5 duration-500'>
                <div className='w-full flex items-start justify-between gap-2'>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-full bg-(--color-blue-light) text-white font-unica-one font-bold dark:bg-stone-800 dark:text-stone-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className='hidden shrink-0 grow-0 dark:flex border rounded-full border-black w-9 aspect-square items-center justify-center shadow-[2px_2px_0_#000] group-hover:-rotate-45 transition'>
                    <ArrowRight />
                  </div>
                </div>
                <div className='mt-6'>
                  <h2 className='text-lg my-4 font-semibold'>{project.title}</h2>
                  <p className='text-sm'>{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
        {/* <Link className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500' href="">Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' /></Link> */}
      </div>
    </div>
  )
}

export default Work

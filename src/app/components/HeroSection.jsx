"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


import { TypeAnimation } from 'react-type-animation';


    
 

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} 
            className='col-span-8 place-self-center text-center  sm:text-left'>

            <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-secondary-500'> Hi, I&apos;m{" "}</span>
                <br/>
                
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hamza Qadeer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'a web Developer',
        1500,
        'a FullStack Developer',
        1500,
        
      ]}
      wrapper="span"
      speed={50}
      
      repeat={0}
    />
                 
                 </h1>
            <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>I&apos;m a Jr.FullStack Developer</p>
            <div>
                <button className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white w-full sm:w-fit'>Hire Me</button>
                <button className='px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border w-full sm:w-fit border-white mt-4'>Download CV</button>
            </div>
            </motion.div>

            <motion.div
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            className='col-span-4 place-self-center'>
                <div className='rounded-full relative  bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] mt-4 lg:mt-0'>
                <Image src='/images/man-with-laptop.png' 
                className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
alt='hero-image'
height={500}
width={500}
/>
                </div>

            </motion.div>
        
        </div>
        

    </section>
  )
}

export default HeroSection

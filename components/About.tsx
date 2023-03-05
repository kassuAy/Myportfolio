import React from 'react'
import {motion} from 'framer-motion'
import { once } from 'events';
type Props = {}

export default function About({}: Props) {

  return <motion.div
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:1.5}}



   className=" bg-black flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
    <motion.img
    initial={{
        x:-200,
        opacity:0,
    }}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    transition={{
        duration:1.2,
    }}
     src="me2.jpg" alt=''
     className='-md-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 h-96
     xl:w-[500px xl:h-[600px'
     />
     <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline'>little </span> background</h4>
        <p className='text-sm'> knows how to design, code, test, correct and document complex programs and program modifications from supplied specifications
             using agreed standards and tools, to achieve a well-engineered result. Takes part in reviews of own work. He communicates 
             and interfaces with clients and business users on a regular basis and represents (company) in a positive and professional manner.
              Experience of the full software development lifecycle with a focus on Agile processes.

        </p>
    
     </div>

     </motion.div>;
  
  
}


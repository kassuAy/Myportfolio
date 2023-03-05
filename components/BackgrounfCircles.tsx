import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function BackgrounfCircles({}: Props) {
  return (
    <motion.div initial={{opacity:0,}}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
 
    }}
    transition={{
duraduration:2.5,
    }}

    
    
    className='relative flex justify-center items-center'>
        <div className='absolute border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='border border #333333 rounded-full h-[300px] w-[300px] mt-52 absolute mt-52'/>
        <div className="border border #333333 rounded-full h-[500px] w-[500px] mt-52 absolute mt-52"/>
        <div className="rounded-full border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
        <div/>
    </motion.div>
  )
}

export default BackgrounfCircles
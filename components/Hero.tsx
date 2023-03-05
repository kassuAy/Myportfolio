import React from 'react';
import { Cursor,useTypewriter } from 'react-simple-typewriter';
import BackgrounfCircles from './BackgrounfCircles';
import Link from 'next/link';
// import Image from 'next/image';
type Props = {};

export default function Hero({}: Props) {
   const [text,count]= useTypewriter({
    words:["Hi, My Name is Kasanesh Ayalew",
     "I hated every minute of trainig , but I said",
     "Don't quit.",
     "Suffer now and live the rest of your life as achampion!"],
     loop:true,
     delaySpeed:2000,
   });
   return <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
    <BackgrounfCircles/>
   <img className='relative rounded-full h-32 w-32 mx-auto' src="developer.jpg" alt='' />
    <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 p-2 tracking-[15px]'>I want to  be a Software Enginneer</h2>
    
    </div>
    <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 text-white'>
    <span>{text}</span>
    
    <Cursor cursorColor='#F7AB0A'/>
    </h1>
   <div className='pt-5'>
    <Link href="#About">
    <button className='heroBtnClass'>About</button>
    </Link>
    <Link href="#resume">
    <button className='heroBtnClass'>Resume</button>
    </Link>
    <Link href="#skills">
    <button className='heroBtnClass'>Skills</button>
    </Link>
    <Link href="#Projects">
    <button className='heroBtnClass'>Projects</button>
    </Link>
   </div>

   </div>;
 
   
}

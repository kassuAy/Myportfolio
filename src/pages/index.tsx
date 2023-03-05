import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'

import { Inter } from 'next/font/google'
import Header from '../../components/Header'
// import { global } from 'styled-jsx/css'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Resume from '../../components/Resume'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import ContactMe from '../../components/ContactMe'


const inter = Inter({ subsets: ['latin'] });

const Home:NextPage=()=> {
  return (
   
    <div className='bg-black text-white h-screen z-0 snap-y snap-mandatory overflow-y-scroll scroll-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Kassu Portfolio</title>
      
        </Head>
      <Header/>
      <section id="hero" className='snap-start'> 
       <Hero/>
      </section>      
      {/* About */}
  <section id='about' className='snap-center'>
    <About/>
  </section>
{/* Resume */}
 <section id="resume"className='snap-center'>
  <Resume/>
 </section>
 <section id="skills"className='snap-center'>
  <Skills/>
 </section>
 <section id='projects' className='snap-start'>
  <Projects/>
 </section>
<section id='contact' className='snap-start'>
  <ContactMe/>
</section>



<Link href="#hero">
<footer className='relative top-24 sticky- bottom-5 w-full cursor-pointer '>
  <div className=' absolute top-36 flex items-center justify-center '>
    <img 
    
    className=' rounded-full filter grayscale:grayscale-0 cursor-pointer'
     src='upwardarrow.png'
     alt=''/>
  </div>
</footer>
</Link>

     </div>



 )
}
export default Home;

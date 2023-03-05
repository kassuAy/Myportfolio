import React from 'react'
import {motion} from 'framer-motion';
type Props = {}

function Projects({}: Props) {
    const projects=[1,2,3,4,5];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

    >
    <div className=' bg-black h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full jusitfy-evenly mx-auto items-center z-0
   '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className=' relative top-36 w-full flex overflow-x-scroll overflor-y-hidden snap-x 
        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {projects.map((project, i) => (
            <div className=' relative top-36 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen 
            '>

                <img
                // initial={{
                //    y: -300,
                //    opacity:1,}}
                // transition={{duration:1.5}}
                // whileInView={{opacity:0,y:1}}
                // viewport={{once:true}}
                 src="download.png"alt=""
            />

            <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50  '>
                        SIS project {i + 1 } of {Projects.length}:
                        </span>{" "}
                        Fourth year
                        </h4>
                        <p className='text-lg text-center md:text-left'>It is a web-based platform or framework that is useful to students, project managers and project managers. Firstly, 
                            all students must register using the registration form. Then registered students can log in with their ID and password to authenticate.
                             When the students log into the system, they form their own classes.</p>
                        </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
     
    </div>
    </motion.div>
  )
}

export default Projects
import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


import { FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { animate, delay, motion } from "framer-motion";

const iconVariants=(duration)=>({
initial: {y:-10},
animate:{
  y:[10, -10],
  transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse"
  },
},
})

const Technologies = () => {
  return (
    <div className='pb-20' id='tech'>

<motion.h2 
          whileInView={{opacity: 1,y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:1.5}}
className='my-20 text-center text-4xl'>Technologies</motion.h2>
<motion.div 
whileInView={{opacity:1,y:0}}
initial={{opacity:0, y:100}}
transition={{duration:1.5}}

className='flex flex-wrap items-center justify-center gap-4'>
<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaJava className='text-5xl text-red-300'/>
<small className='ml-1 text-extrabold text-sm'>JAVA</small>
</motion.div>

<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaPython className='ml-2 text-5xl text-yellow-400'/>
<small className='ml-1 text-extrabold text-sm'>PYTHON</small>
</motion.div>

<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaPhp className='text-5xl text-purple-600'/>
<small className='ml-3 text-extrabold text-sm'>PHP</small>
</motion.div>

<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaWordpress className='ml-4 text-5xl text-blue-400'/>
<small className='text-extrabold text-sm'>WORDPRESS</small>
</motion.div>

<motion.div
variants={iconVariants(3)}
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiMysql className='text-5xl text-orange-500'/>
<small className='ml-1 text-extrabold text-sm'>MySQL</small>
</motion.div>

<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiMongodb className='ml-3 text-5xl text-green-700'/>
<small className='ml-1 text-extrabold text-sm'>MongoDB</small>
</motion.div>

<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiPostgresql className='ml-3 text-5xl text-blue-400'/>
<small className='ml-1 text-extrabold text-sm'>PostgreSQL</small>
</motion.div>

<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='rounded-2xl border-4 p-4'>
<SiFlutter className='text-5xl text-blue-500'/>
<small className='ml-1 text-extrabold text-sm'>FLUTTER</small>
</motion.div>


<motion.div
variants={iconVariants(4)}
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiReactjsLine className='ml-2 text-5xl text-cyan-500'/>
<small className='ml-1 text-extrabold text-sm'>React JS</small>
</motion.div>

</motion.div>
</div>
  )
}

export default Technologies
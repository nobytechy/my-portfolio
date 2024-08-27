import React from 'react';
import aboutPic from '../assets/gif-1.gif';
import { ABOUT_TEXT } from '../constants';
import { delay, motion } from "framer-motion";
import "../constants/custom.css";

const About = () => {
  return (
<div className='pb-2' id='about'>
<h1 className='my-20 text-center text-4xl'>About Me</h1>
<div className='flex flex-wrap'>
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0, x:-100}}
    transition={{duration:0.5}}
    className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex items-center justify-center'>
<img 
className='w-21 h-21' src={aboutPic} alt='about'/>
    </div>
    </motion.div>

<motion.div 
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0, x:100}}
     transition={{duration:0.5}}  
className='w-full lg:w-1/2'>
<div className='flex justify-center lg:justify-start'>
<p className='my-2 max-w-xl py-6'>
I’m a Full Stack Developer with expertise in both front-end and 
back-end technologies. I specialize in creating dynamic applications
 using a range of technologies including Java, Python, PHP, React JS, 
 and Flutter.
</p>
</div>


<h3 className='mb-3'>Skills & Expertise</h3>
<motion.ul 
whileInView={{opacity:1,x:0}}
initial={{opacity:0, x:-100}}
transition={{duration:1}}
className="custom-bullets">
<li className='mb-5'>
<motion.p>
<span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'>Back-End:</span>
PHP,Java, Python, Javascript
</motion.p>
</li>

<li className='mb-5'>
<motion.p>
<span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'>Databases:</span>
 MySQL, MongoDB, PostgreSQL
</motion.p>
</li>

<li className='mb-5'>
<motion.p>
<span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'>Front-End:</span>
React JS, VueJS, Tailwind CSS,Bootstrap CSS
</motion.p>
</li>

<li className='mb-5'>
<motion.p>
<span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'>Mobile Development:</span>
Flutter, React Native, Java
</motion.p>
</li>


<li>
<motion.p>
<span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'>CMS:</span>
WordPress, Joomla
</motion.p>
</li>

</motion.ul>


<p className='my-2 max-w-xl py-6'>I’m dedicated to delivering high-quality solutions that 
  are both user-friendly and efficient. Let’s connect and build 
  something great together!</p>
</motion.div>

</div>
</div>
  )
}

export default About
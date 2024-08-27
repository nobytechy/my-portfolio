import {HERO_CONTENT} from "../constants";
import profilePic from '../assets/image-2.png';
import { delay, motion } from "framer-motion";
import "../constants/custom.css";
import { FaCircle } from 'react-icons/fa'; 

const container=(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  },
})

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

const Hero = () => {
  return (
<div className="pb-4 lg:mb-35">
<div className="flex flex-wrap">
<div className="w-full lg:w-1/2">
<div className="flex flex-col items-center lg:items-start">
<motion.h3 
variants={container(0)}
initial="hidden"
animate="visible"

className="pb-5 text-2xl tracking-tight lg:mt-14 lg:text-3xl">
  Hi, I’m Noby Tebulo
<motion.span 
variants={container(0.5)}
initial="hidden"
animate="visible"
className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
 bg-clip-text text-3xl tracking-tight text-transparent">, Full Stack Developer</motion.span>
 </motion.h3>

<motion.p
variants={container(0.5)}
initial="hidden"
animate="visible"
>
I specialize in creating cutting-edge web and mobile applications that
 are both functional and visually stunning. With a passion for 
 technology and a keen eye for detail, I bring ideas to life 
 through a blend of creative problem-solving and technical expertise.
</motion.p>

<ul className="list-none pl-5">
<li>
<motion.p 
variants={container(1)}
initial="hidden"
animate="visible"
className="text-white my-2 max-w-xl py-6 font-light tracking-tighter">
<FaCircle className="text-blue-500 p-1" /> 
<span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'>Innovative Solutions:</span>From concept to deployment, 
I build dynamic applications tailored to your needs using the 
 latest technologies.
</motion.p>
</li>

<li>
<motion.p 
variants={container(1)}
initial="hidden"
animate="visible"
className="text-white my-2 max-w-xl py-6 font-light tracking-tighter">
  <FaCircle className="text-blue-500 p-1" /> 
<span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'>Full Stack Development:</span> Expertise in front-end and back-end 
 development ensures a seamless and integrated approach to building applications.
</motion.p>
</li>

<li>
<motion.p 
variants={container(1)}
initial="hidden"
animate="visible"
className="text-white my-2 max-w-xl py-6 font-light tracking-tighter">
  <FaCircle className="text-blue-500 p-1" /> 
 <span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm 
     font-medium text-purple-300'> Cross-Platform Expertise: </span> Experience in developing 
 applications for both web and mobile platforms, 
 delivering a consistent user experience across devices.
</motion.p>
</li>
</ul>

<motion.p 
variants={container(1)}
initial="hidden"
animate="visible"
className="text-white my-2 max-w-xl py-6 font-light tracking-tighter">
Browse through my portfolio to see examples of my recent projects. 
Whether you’re looking to build a new application or enhance an 
existing one, I’m here to help. Let’s turn your ideas into reality!
</motion.p>

</div>
</div>
<div className="w-full lg:w-1/2 lg:p-8">
<div className="flex justify-center">
<motion.div
variants={iconVariants(4)}
initial="initial"
animate="animate">
  <motion.img 
  initial={{x:100, opacity:0}}
  animate={{x:0, opacity:1}}
  transition={{duration:1, delay:1.1}}
  src={profilePic}
  className="w-21 h-21" 
  alt="Pro Pic"/>
  </motion.div>
</div>
</div>
</div>
</div>
  )
}

export default Hero
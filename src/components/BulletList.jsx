import React from 'react';
import { motion } from 'framer-motion';
import "../constants/custom.css";

const BulletList = () => {
return (
<ul className="custom-bullets">
<li>
<motion.p 
variants={container(1)}
initial="hidden"
animate="visible"
className="text-white my-2 max-w-xl py-6 font-light tracking-tighter">
 Hello
    
    </motion.p>

</li>



</ul>
);
};

export default BulletList;

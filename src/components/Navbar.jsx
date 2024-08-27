import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='mb-20 py-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
          <h1 className='mx-2 text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600'>
            Nobytechy Systems
          </h1>
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-xl'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center justify-center gap-4 md:gap-6 lg:gap-8 text-lg'>
          <a href="#home" className='hover:text-blue-500'>Home</a>
          <a href="#about"  className='hover:text-blue-500'>About</a>
          <a href="#services" className='hover:text-blue-500'>Experience</a>
          <a href="#projects"  className='hover:text-blue-500'>Projects</a>
          <a href="#contact" className='hover:text-blue-500'>Contact</a>
          <a href="https://github.com/nobytechy/" target="_blank" className='hover:text-blue-500'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nobytechy/" target="_blank" className='hover:text-blue-200 text-blue-600'><FaLinkedin /></a>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden mt-4 flex flex-col gap-4'>
          <a href="#home" onClick={toggleMenu} className='hover:text-blue-500'>Home</a>
          <a href="#about" onClick={toggleMenu} className='hover:text-blue-500'>About</a>
          <a href="#services" onClick={toggleMenu} className='hover:text-blue-500'>Experience</a>
          <a href="#projects" onClick={toggleMenu} className='hover:text-blue-500'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='hover:text-blue-500'>Contact</a>
          <a href="https://github.com/nobytechy/" target="_blank" onClick={toggleMenu} className='hover:text-blue-500'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nobytechy/" target="_blank" onClick={toggleMenu} className='hover:text-blue-200 text-blue-600'><FaLinkedin /></a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

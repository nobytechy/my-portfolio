import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaCodeBranch } from "react-icons/fa6";
import { VscLayersDot } from "react-icons/vsc";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2; // Number of projects per page

  // Calculate the indexes for the current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = PROJECTS.slice(indexOfFirstProject, indexOfLastProject);

  // Calculate total pages needed
  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='border-b border-neutral-900 pb-4' id='projects'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>
      <div>
        {currentProjects.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
             <VscLayersDot 
                className='text-7xl text-purple-700 hover:text-purple-900 transition duration-300 
                shadow-lg rounded-full p-4 bg-neutral-400'
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
            
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                >
                  {tech}
                </span>
              ))}<br></br>

              <a 
                className='mb-4 text-neutral-200 underline cursor-pointer hover:text-purple-600' 
                href={project.url}
              >
                Discover More
              </a>


            </motion.div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 ${
              index + 1 === currentPage ? 'bg-purple-800 text-white' : 'bg-gray-200 text-neutral-900'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Projects;

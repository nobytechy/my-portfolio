import React from 'react';
import { FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const StartMenu = ({ isOpen, onItemClick }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-900 text-white w-64 h-64 absolute bottom-12 left-4 p-4 rounded-lg shadow-lg">
      <h1 className="text-lg mb-4">Start Menu</h1>
      <ul>
        <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-800 p-2 rounded" onClick={() => onItemClick('about')}>
          <FaUser className="mr-2" /> About Me
        </li>
        <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-800 p-2 rounded" onClick={() => onItemClick('projects')}>
          <FaProjectDiagram className="mr-2" /> Projects
        </li>
        <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-800 p-2 rounded" onClick={() => onItemClick('resume')}>
          <FaFileAlt className="mr-2" /> Resume
        </li>
        <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-800 p-2 rounded" onClick={() => onItemClick('contact')}>
          <FaEnvelope className="mr-2" /> Contact
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;

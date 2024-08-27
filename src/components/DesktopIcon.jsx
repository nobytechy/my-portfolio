import React from 'react';
import { FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa'; // Example icons

const DesktopIcon = ({ icon, title, onClick }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="text-6xl text-cyan-700 mb-2">{icon}</div>
      <span className="text-white text-sm">{title}</span>
    </div>
  );
};

export default DesktopIcon;

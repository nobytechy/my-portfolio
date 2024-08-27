import React, { useState, useEffect } from 'react';
import { FaWindows, FaSearch, FaFolder, FaClock } from 'react-icons/fa'; // Example icons

const Taskbar = ({ onStartClick }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-gray-800 h-12 flex items-center justify-between px-4 fixed bottom-0 left-0 right-0">
      <div className="flex items-center space-x-4">
        {/* Start Menu Icon */}
        <FaWindows className="text-white text-2xl cursor-pointer" onClick={onStartClick} />
      
      </div>
      <div className="flex items-center space-x-4">
        {/* Time Display */}
        <div className="text-white text-sm flex items-center space-x-2">
          <FaClock className="text-xl" />
          <span>{time}</span>
        </div>
      
      </div>
    </div>
  );
};

export default Taskbar;

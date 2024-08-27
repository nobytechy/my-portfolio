import React from 'react';

const Window = ({ title, children, onClose }) => {
  return (
    <div className="absolute top-16 left-0 right-0 mx-auto w-full max-w-lg h-3/4 bg-white border border-gray-300 shadow-lg overflow-hidden">
      <div className="flex justify-between items-center p-2 bg-gray-200 border-b border-gray-300">
        <span className="text-lg font-semibold">{title}</span>
        <button onClick={onClose} className="text-red-500 text-xl">X</button>
      </div>
      <div className="p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Window;

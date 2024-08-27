import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/gif-1.gif';
import profilePic2 from '../assets/gif-2.gif';

const ImageSlider = () => {
  const images = [profilePic,profilePic2,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="flex justify-center">
      <motion.img
        key={currentImage} // Key prop to force re-render on image change
        src={images[currentImage]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-21 h-21 object-cover"
        alt="Slideshow"
      />
    </div>
  );
};

export default ImageSlider;

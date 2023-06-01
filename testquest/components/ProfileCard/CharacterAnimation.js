import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

const CharacterAnimation = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const totalFrames = 4; // Total number of frames in the animation

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % totalFrames);
    }, 100); // Adjust the interval time based on the desired animation speed

    return () => clearInterval(interval);
  }, []);

  const spriteImages = [
    require('../../assets/images/dude1.png'),
    require('../../assets/images/dude2.png'),
    require('../../assets/images/dude3.png'),
    require('../../assets/images/dude4.png'),
  ];

  return (
    <Image
      source={spriteImages[frameIndex % totalFrames]} // Ensure the correct image is loaded for iOS devices
      style={{
        width: 48, // Adjust the dimensions based on your sprite size
        height: 48,
      }}
    />
  );
};

export default CharacterAnimation;

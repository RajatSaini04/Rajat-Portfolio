// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const BlurBlob = ({ position = {}, size = {} }) => {
  const {
    top = '50%',
    left = '50%',
  } = position;

  const {
    width = '300px',
    height = '300px',
  } = size;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0, 20, 0], // floating animation
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute pointer-events-none z-0"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl" />
    </motion.div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;

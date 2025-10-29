import React from "react";
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const LeetCodeSkeleton = () => {
  return (
    <motion.div
      className="bg-[#15121e] border border-white rounded-2xl shadow-2xl max-w-4xl mx-auto p-6 sm:p-10 animate-pulse"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left side: avatar + text */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-4 flex-1 w-full"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-700" />
          <div className="space-y-2 w-full max-w-[200px] text-center lg:text-left">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-600 rounded w-1/2"></div>
            <div className="h-3 bg-gray-600 rounded w-2/3"></div>
          </div>
          <div className="h-8 w-40 bg-purple-700 rounded-full mt-2"></div>
        </motion.div>

        {/* Right side: circular + bars */}
        <motion.div
          className="flex flex-col gap-6 flex-1 items-center w-full"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Circular Placeholder */}
          <div className="w-24 h-24 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
          <div className="h-4 w-32 bg-gray-600 rounded"></div>

          {/* Difficulty Skeleton Bars */}
          <div className="w-full space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="h-3 w-16 bg-gray-600 rounded"></div>
                  <div className="h-3 w-20 bg-gray-600 rounded"></div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="h-2 bg-gray-500 rounded-full w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeetCodeSkeleton;

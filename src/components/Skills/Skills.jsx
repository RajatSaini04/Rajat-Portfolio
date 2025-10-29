import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const skillCardVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: [ -40, 40, 0, 0 ][i % 4],
    y: [ 0, 0, -40, 40 ][i % 4],
    scale: 0.8,
    filter: "blur(4px)",
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.05,
      duration: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  }),
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-skills-gradient clip-path-custom relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-20">
        <motion.h2 className="text-4xl font-extrabold tracking-tight text-white">
          SKILLS
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        />
        <motion.p
          className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Technologies I’ve worked with across different projects, reflecting a blend of backend, frontend, and tooling experience.
        </motion.p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            custom={index}
            variants={skillCardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1500}
              gyroscope={true}
              className="bg-[#1a162a] group hover:shadow-[0_0_30px_5px_rgba(130,69,236,0.2)] transition-all duration-500 ease-in-out rounded-2xl p-6 border border-[#2e2b3f] backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center border-b border-[#333] pb-3">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    custom={idx}
                    variants={skillCardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center gap-2 bg-[#241d35] border border-gray-700 rounded-xl px-3 py-2 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 group-hover:scale-[1.05]"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                    <span className="text-sm sm:text-[15px] text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

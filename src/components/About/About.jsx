import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/rajat-new.png';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../About/About.css'

AOS.init();

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-[8vw] lg:px-[18vw] font-sans"
    >
      <div
        className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-24"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        {/* === Left: Text Content === */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Rajat Saini
          </h2>

          <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-6 text-[#11b7ff]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Web Developer']}
              speed={100}
              eraseSpeed={60}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#c6eeff]">{cursor}</span>
              )}
            />
          </h3>

          <div className="text-base italic sm:text-lg text-gray-400 leading-relaxed mb-8">
            <p>
              Learning — Picking up new skills every day.
            </p>
            <p>
              Building — Creating projects that matter.
            </p>
            <p>
              Breaking — Pushing code to its limits.
            </p>
            <p>
              Fixing — Making things work again.
            </p>
          </div>

          <div className="box inline-block">
            {/* <div className="in"> */}
            <motion.a
              href="https://drive.google.com/file/d/1KuCxhiND6XE_pbGZc28DDYW4PRl1i22x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="in inline-block text-center text-white py-3 px-8 text-lg font-bold transition-transform duration-300 hover:scale-102"
              whileHover={{ scale: 1.02 }}
              style={{
                // background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                // boxShadow:
                // '0 0 4px #8245ec, 0 0 8px #8245ec, 0 0 20px #a855f7',
              }}
            >
              Download CV
            </motion.a>
            {/* </div> */}
          </div>



        </motion.div>

        {/* === Right: Profile Image with Tilt === */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Tilt
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] border-4 border-blue-600 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1200}
            scale={1.07}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rajat Image"
              className="w-full h-full object-cover scale-110 object-[90%_top] rounded-full drop-shadow-[0_10px_30px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

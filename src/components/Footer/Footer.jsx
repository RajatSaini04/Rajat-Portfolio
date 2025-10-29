import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      className="text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      data-aos="fade-up"
      data-aos-duration="1000"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-6">
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-purple-500 tracking-wide">Rajat Saini</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-medium">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-purple-500 transition-colors duration-300 px-2 py-1 hover:underline underline-offset-4"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl text-gray-300 mt-4">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rajat-saini-2092a62ba/" },
            { icon: <FaGithub />, link: "https://github.com/RajatSaini04" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transform hover:scale-110 transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-3/4 mx-auto bg-gray-700 mt-6"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4">
          © 2025 <span className="text-purple-400 font-semibold">Rajat Saini</span>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

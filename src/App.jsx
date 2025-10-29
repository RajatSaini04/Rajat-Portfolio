import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import LeetCodeSection from "./components/LeetCode/LeetCodeSection";

// Optional: AOS if you're still using it for some scroll triggers
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative bg-[#050414] overflow-hidden">

      {/* 🎨 Ambient Motion Blur Blobs */}
      <BlurBlob position={{ top: "20%", left: "10%" }} size={{ width: "400px", height: "400px" }} />
      <BlurBlob position={{ top: "60%", left: "90%" }} size={{ width: "300px", height: "300px" }} />
      <BlurBlob position={{ top: "80%", left: "30%" }} size={{ width: "350px", height: "350px" }} />

      {/* 🎛 Grid Texture Layer */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 🌐 Main Content */}
      <div className="relative z-10 pt-20">
        <Navbar />

        {/* Section wrappers with motion (Framer variants can be added here) */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <About />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {/* <LeetCodeSection /> */}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Skills />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <Experience />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <Work />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}>
          <Education />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default App;

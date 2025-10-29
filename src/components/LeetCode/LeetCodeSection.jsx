import React, { useEffect, useState } from "react";
import { leetcodeStats } from "../../constants.js";
import { SiLeetcode } from "react-icons/si";
import leetcodeLogo from "../../assets/tech_logo/leetCode.png";
import LeetCodeSkeleton from "./LeetCodeSkelton.jsx";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.2 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.2 },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

const LeetCodeSection = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(leetcodeStats.apiUrl);
        const data = await res.json();

        if (data.status === "error") {
          setError("Profile not found");
        } else {
          const totalQuestions =
            data.totalEasy + data.totalMedium + data.totalHard;
          setStats({ ...data, totalQuestions });
        }
      } catch (err) {
        setError("API Error");
      }
    };

    fetchStats();
  }, []);

  if (error)
    return (
      <section id="leetcode" className="py-24 px-6 font-sans">
        <p className="text-center text-red-500 text-lg font-semibold">
          {error}
        </p>
      </section>
    );

  if (!stats)
    return (
      <section id="leetcode" className="py-24 px-6 font-sans">
        <LeetCodeSkeleton />
      </section>
    );

  return (
    <motion.section
      id="leetcode"
      className="py-24 px-6 sm:px-[12vw] font-sans relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      {/* Section Title */}
      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h2 className="text-4xl font-bold text-white">LEETCODE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {leetcodeStats.heading ||
            "LeetCode stats fetched from live API using React"}
        </p>
      </motion.div>

      {/* Profile Card */}
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={800}
        gyroscope={true}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          className="bg-[#15121e] rounded-2xl shadow-2xl p-6 sm:p-10 transition duration-300 hover:shadow-purple-500/30"
          variants={zoomIn}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left Profile */}
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 flex-1"
              variants={fadeRight}
            >
              <img
                src={leetcodeLogo}
                alt="LeetCode Logo"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-purple-500 drop-shadow-md"
              />
              <div>
                <h3 className="text-white text-2xl font-bold">Harsh</h3>
                <p className="text-purple-500 text-lg font-semibold">
                  {leetcodeStats.username}
                </p>
                <p className="text-gray-400 text-sm">
                  Global Ranking:{" "}
                  <span className="text-white font-semibold">
                    {stats.ranking}
                  </span>
                </p>
              </div>

              {/* Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                href={leetcodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-white px-5 py-2 rounded-full text-sm font-bold transition-transform duration-300"
                style={{
                  background: "linear-gradient(90deg, #8245ec, #a855f7)",
                  boxShadow:
                    "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                }}
              >
                <SiLeetcode className="text-xl" />
                View Full Profile
              </motion.a>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              className="flex flex-col gap-6 flex-1 items-center w-full"
              variants={fadeLeft}
            >
              {/* Circular Bar */}
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={(stats.totalSolved / stats.totalQuestions) * 100}
                  text={`${Math.round(
                    (stats.totalSolved / stats.totalQuestions) * 100
                  )}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#f97316",
                    trailColor: "#333",
                    textSize: "16px",
                  })}
                />
              </div>
              <p className="text-white text-sm text-center">
                <span className="text-2xl font-bold">
                  {stats.totalSolved}
                </span>{" "}
                / {stats.totalQuestions} Completed
              </p>

              {/* Difficulty Bars */}
              <div className="w-full space-y-4">
                <LevelStat
                  label="Easy"
                  solved={stats.easySolved}
                  total={stats.totalEasy}
                  color="bg-green-500"
                />
                <LevelStat
                  label="Medium"
                  solved={stats.mediumSolved}
                  total={stats.totalMedium}
                  color="bg-yellow-400"
                />
                <LevelStat
                  label="Hard"
                  solved={stats.hardSolved}
                  total={stats.totalHard}
                  color="bg-red-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

// Level Bar Subcomponent
const LevelStat = ({ label, solved, total, color }) => {
  const percentage = (solved / total) * 100;

  return (
    <div>
      <div className="flex justify-between mb-1 text-sm text-gray-300">
        <span>{label}</span>
        <span>
          {solved} / {total} completed
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LeetCodeSection;

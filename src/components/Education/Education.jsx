import React, { useEffect } from "react";
import { education } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <div className="text-center mb-16" data-aos="fade-up" data-aos-offset="200">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full z-0" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
            data-aos-offset="250"
            className={`relative flex flex-col sm:flex-row items-center gap-4 mb-20 z-10 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 border-4 border-purple-500 rounded-full flex items-center justify-center z-20">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-[90%] md:max-w-[500px] p-6 sm:p-8 rounded-2xl shadow-xl  bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } mt-16 sm:mt-0`}
            >
              {/* Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:text-left gap-4">
                {/* Logo */}
                <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade & Desc */}
              <p className="mt-4 text-purple-400 font-semibold text-sm">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-300 text-sm">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

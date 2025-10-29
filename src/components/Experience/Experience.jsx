import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 scroll-mt-20"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full z-0" />

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center gap-4 mb-20 z-10 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-16 sm:h-16 bg-gray-900 border-4 border-purple-500 rounded-full flex items-center justify-center z-20">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Experience Card */}
            <div
              className={`w-full sm:max-w-[90%] md:max-w-[500px] p-6 sm:p-8 rounded-2xl shadow-xl bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } mt-16 sm:mt-0`}
            >
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-4 text-center sm:text-left">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role + Company */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">{experience.company}</h4>
                  <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white mb-2">Skills:</h5>
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
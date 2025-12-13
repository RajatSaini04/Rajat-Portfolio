import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu4Line } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionRefs = useRef({});
  const mobileMenuRef = useRef(null); // ✅ NEW

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // Scroll shadow logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // ✅ Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // ✅ Close mobile menu on scroll
  useEffect(() => {
    if (!isOpen) return;

    const closeOnScroll = () => setIsOpen(false);
    window.addEventListener("scroll", closeOnScroll);

    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [isOpen]);

  // Scroll to section on click
  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        data-aos="fade-down"
      >
        <div className="text-white py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#11b7ff]">&lt; </span>
            <span className="text-white font-normal tracking-wide">Rajat </span>
            <span className="text-[#11b7ff]">/</span>
            <span className="text-white font-normal tracking-wide"> Saini </span>
            <span className="text-[#11b7ff]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#11b7ff] transition ${
                  activeSection === item.id
                    ? "text-[#11b7ff] font-medium"
                    : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/RajatSaini04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#11b7ff]"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajat-saini-2092a62ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#11b7ff]"
            >
              <FiLinkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#11b7ff] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <RiMenu4Line
                className="text-3xl text-[#11b7ff] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef} // ✅ attached here
          className="fixed top-16 left-1/2 transform -translate-x-1/2 w-full bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-md z-50 rounded-lg shadow-lg md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition ${
                  activeSection === item.id ? "text-[#11b7ff]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/RajatSaini04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajat-saini-2092a62ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

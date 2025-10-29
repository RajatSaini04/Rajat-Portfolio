import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_712sf9h",
        "template_0czsptq",
        form.current,
        "le8zFy7MZ1zx2xDBq"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
        toast.error("Message failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-6 md:px-12 lg:px-32 bg-[#0d081f] overflow-hidden"
    >
      {/* Background Blur Blob */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] rounded-full bg-purple-500 opacity-20 blur-3xl animate-blob" />

      <ToastContainer />

      {/* Title */}
      <motion.div
        className="text-center mb-16"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Let's Connect
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          I’d love to hear from you—reach out for collaborations, queries or just a hello!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
        className="relative z-20 mx-auto max-w-xl bg-[#131025] rounded-2xl p-8 shadow-xl border border-[#2e2b3f]"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {[
            { name: "user_name", type: "text", placeholder: "Your Name" },
            { name: "user_email", type: "email", placeholder: "Your Email" },
            { name: "subject", type: "text", placeholder: "Subject" },
          ].map((input, idx) => (
            <motion.div
              key={input.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <input
                type={input.type}
                name={input.name}
                required
                placeholder={input.placeholder}
                className="w-full p-3 rounded-lg bg-[#1c1830] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-[#1c1830] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
            />
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="submit"
            className="w-full py-3 font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Send Message ✉️
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

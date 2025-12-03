import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/profile.png";

export default function About() {
  const stats = [
    { label: "Experience", value: "1 Year" },
    { label: "Speciality", value: "Full-Stack Development" },
    { label: "Focus", value: "Web Development" },
  ];

  const glows = [
    "-top-10 -left-10 w-[300px] h-[300px] blur-[120px] opacity-30",
    "-bottom-0 right-0 w-[420px] h-[420px] blur-[140px] opacity-16",
    "-top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] blur-[100px] opacity-10",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white px-5 sm:px-8 py-16 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((g, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${g}`}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col gap-14">

        {/* Profile Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        > 
          {/* Profile Image */}
          <motion.div
            className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]">
              Ashutosh Mishra
            </h1>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-white/90">
              Full-Stack Developer
            </p>

            <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              I build scalable and modern applications with clean architecture,
              smooth UX, and high performance. My toolkit includes React, Next.js,
              TypeScript, Tailwind CSS, Supabase, and Node.js. I turn ideas into
              production-ready solutions with robust APIs and intuitive interfaces.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md shadow-sm"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="text-sm text-gray-400">{s.label}</div>
                  <div className="text-base font-semibold">{s.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-6 py-3 hover:bg-gray-300 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-white hover:bg-white/20"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            About Me
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              I’m a Full-Stack Developer who writes clean, scalable code and turns
            ideas into real-world apps using modern JavaScript—React, Next.js,
            Node.js, Express.js, and Supabase.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg mt-2">
            I’m passionate about designing clean UIs, engineering strong APIs, and
            building smart, real-world solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

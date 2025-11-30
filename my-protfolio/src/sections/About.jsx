import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/profile.png"

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
      className="min-h-screen flex w-full items-center justify-center relative bg-black text-white overflow-hidden"
    >

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">

        {/* Profile + Intro */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 max-w-3xl mx-auto text-center md:text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.7 }}
        >

          {/* Profile Image */}
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] md:top-[-150px]"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 40 }}
          >
            <img
              src={profile}
              alt="Profile"
              className="p-2 object-cover rounded-full w-full h-full"
            />
          </motion.div>

          {/* Name + Details */}
          <div className="flex-1 flex-col gap-1 flex justify-center items-center md:items-start mt-[-90px]">

            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]">
              Ashutosh Mishra
            </h1>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full-Stack Developer
            </p>

            <p className="mt-1 text-base sm:text-lg text-gray-300 leading-relaxed">
              I build scalable and modern applications with clean architecture,
              smooth UX, and high performance. My toolkit includes React, Next.js,
              TypeScript, Tailwind CSS, Supabase, and Node.js. I turn ideas into
              production-ready solutions with robust APIs and intuitive interfaces.
            </p>

            {/* Stats */}
            <div className="mt-4 grid gap-3 sm:gap-4 max-w-xl sm:grid-cols-3">
              {stats.map((items, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="text-sm text-gray-400">{items.label}</div>
                  <div className="text-base font-semibold">{items.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-3 flex flex-row gap-4 sm:gap-5 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-6 py-4 hover:bg-gray-300 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white hover:bg-white/20 px-4 py-3 text-center transition"
              >
                Get in Touch
              </a>
            </div>

          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white">
            About Me
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
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

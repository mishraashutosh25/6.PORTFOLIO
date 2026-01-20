import React, { useMemo, useState, useEffect } from "react";
import ParticlesBackground from "../compnents/ParticlesBackground";
import { motion, scale } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import yash from "../assets/yash.png";


const socials = [
  { Icon: FaXTwitter, link: "https://x.com/devma25" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/ashutoshmishradev12/" },
  { Icon: FaGithub, link: "https://github.com/mishraashutosh25" },
  { Icon: FaEnvelope, link: "mailto:ashutoshmishra.dev25@gmail.com" },
]

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0px rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -5,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 8px rgba(16,185,129,0.8))",
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Software Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing Effect Logic
  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <ParticlesBackground />

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[140px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex items-center h-full px-6 lg:px-40">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello I'm <br />
            <span className="text-[#1cd8d2]">Ashutosh Mishra</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Where creative vision meets scalable engineering —
            building fast, intuitive and future-ready digital experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="relative z-30 mt-8 flex gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* EXPLORE BUTTON */}
            <a
              href="#projects"
              className="cursor-pointer px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-110 transition-transform flex items-center gap-2"
            >
              Explore My Work →
            </a>

            {/* RESUME BUTTON */}
            <a
              href="Resume.pdf"
              download
              className="cursor-pointer px-8 py-3 rounded-full text-black bg-white font-medium shadow-lg hover:bg-gray-300 hover:scale-105 transition-transform"
            >
              My Resume
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="relative z-30 mt-8 flex gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {socials.map(({ Icon, link }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:border-cyan-400 transition"
              >
                <Icon size={24} className="text-gray-400 hover:text-white" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.img
          src={yash}
          alt="Ashutosh Mishra"
          className="absolute right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 w-[75vw] md:w-[40vw] pointer-events-none select-none z-10"
          initial={{ opacity: 0, x: 120, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
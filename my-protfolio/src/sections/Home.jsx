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
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />

      {/* Gradient Blobs */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[600px] max-h-[600px]
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        ></div>

        <div
          className="absolute bottom-0 right-0
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[600px] max-h-[600px]
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full px-18  lg:px-40 flex items-center">

        <div className="max-w-8xl">
          <div className="w-full sm:pr-4 mx-auto max-w-[42rem]">
            <motion.div
              className="sm:px-12 text-xl lg:text-2xl md:text-4xl sm:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="inline-block w-[2px] ml-1 bg-white animate-pulse h-[1em]"
                style={{ height: "1em" }}
              >

              </span>
            </motion.div>
            <motion.h1 className=" sm:mx-12 md:text-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm
              <br />
              <span className="text-[#1cd8d2]">Ashutosh Mishra</span>
            </motion.h1>


            <motion.p
              className="text-base sm:text-lg md:text-1xl text-gray-400 max-w-2xl mx-auto sm:mx-10 mt-4 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Where creative vision meets precise, scalable engineering—designing experiences that feel beautifully fast, intuitively smooth, and future-ready.
              Let’s shape what comes next, together.
            </motion.p>

            <motion.div className="mt-9 sm:px-12 flex flex-wrap items-center justify-center sm:justify-start gap-8"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a href="#Projects"
                className="px-5 py-3 rounded-full font-medium text-lg text-white  bg-gradient-to-r from-pink-500 
                 to-blue-500 shadow-lg hover:scale-110 transition-all flex items-center gap-3">Explore my work
                <motion.span

                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={22} className="drop-shadow-lg" />
                </motion.span>
              </a>
              <a href="/Resume.pdf"
                download
                className="px-8 py-3 rounded-full text-lg font-medium text-black bg-white  hover:bg-gray-300 shadow-lg hover:scale-105 transition-all"
              >My Resume</a>
            </motion.div>

            <motion.div
              className="mt-8 sm:px-12 flex items-center gap-5 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {socials.map(({ Icon, label, link }) => (
                <motion.a
                  key={link}
                  href={link}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-gray-400"
                >
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300">
                    <Icon size={28} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>

        <div>
          <motion.img
            src={yash}
            alt="Ashutosh Mishra"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "-100px",
              width: "min(48vw, 780px)",
              maxHeight: "90vh"
            }}
            initial={{
              opacity: 0,
              y: 60,
              x: 100,
              scale: 0.95,
              rotate: 5
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 1.5,
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1] // Custom easing for smooth effect
            }}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              transition: { duration: 0.4 }
            }}
          />
        </div>

      </div>
    </section>
  );
}

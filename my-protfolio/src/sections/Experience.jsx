import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ===================== DATA ===================== */

const experience = [
  {
    role: "Backend Development Intern",
    company: "CodeAlpha",
    duration: "Aug 2025 – Oct 2025",
    description:
      "Completed a virtual backend internship focused on scalable server-side logic, RESTful APIs, authentication, database operations, and secure backend architecture in a remote team environment.",
  },
  {
    role: "Full-Stack Web Developer Intern",
    company: "NullClass",
    duration: "2025",
    description:
      "Building end-to-end web solutions with a focus on responsive UI, backend logic, API integration, database management, and real-world deployment.",
  },
  {
    role: "Full-Stack Developer",
    company: "Krishiora – Smart Farming Platform",
    duration: "2025",
    description:
      "Developing an AI-powered farming platform enabling soil analysis, weather-based crop planning, smart irrigation, fertilizer recommendations, and an online mandi system.",
  },
  {
    role: "Full-Stack Developer",
    company: "Real-Time Ride Booking App (Uber-Clone)",
    duration: "2024 – 2025",
    description:
      "Built a real-time Uber-style ride booking system with JWT authentication, maps-based tracking, OTP verification, and real-time ride updates.",
  },
];

/* ===================== ITEM ===================== */

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [idx % 2 === 0 ? 30 : -30, 0]);
  const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}
        />
        <motion.div
          className={`absolute ${idx % 2 === 0 ? "-top-8" : "-bottom-8"} w-[3px] bg-white/40`}
          style={{ height: 40, opacity }}
        />
        <motion.article
          className={`absolute ${idx % 2 === 0 ? "bottom-12" : "top-12"}
          bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl
          p-7 w-[320px] shadow-lg`}
          style={{ opacity, y }}
        >
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-sm text-gray-400 mb-3">
            {exp.company} | {exp.duration}
          </p>
          <p className="text-sm text-gray-300">{exp.description}</p>
        </motion.article>
      </div>
    );
  }

  /* ===================== MOBILE ===================== */

  return (
    <div className="relative flex items-start">
      {/* DOT */}
      <motion.div
        className="absolute left-[18px] -translate-x-1/2 z-20 w-5 h-5 rounded-full bg-white
        shadow-[0_0_0_6px_rgba(255,255,255,0.15)]"
        style={{ scale, opacity }}
      />

      {/* CARD */}
      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl
        p-6 w-[85vw] ml-10 shadow-lg mb-24"
        style={{ opacity, x }}
      >
        <h3 className="text-lg font-semibold">{exp.role}</h3>
        <p className="text-sm text-gray-400 mb-2">
          {exp.company} | {exp.duration}
        </p>
        <p className="text-sm text-gray-300">{exp.description}</p>
      </motion.article>
    </div>
  );
}

/* ===================== MAIN ===================== */

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop SAME, mobile space adjusted
  const SCENE_HEIGHT_VH = isMobile ? 220 * experience.length : 120;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => experience.map((_, i) => (i + 1) / experience.length),
    []
  );

  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative bg-black text-white">
      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
        className="relative"
      >
             <div className="sticky top-0 h-screen flex flex-col">
          <div className="pt-12 pb-6 sm:pt-16 sm:pb-8">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            > <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Experience
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-gray-400 mt-3 text-sm sm:text-base px-4"
            >
              My professional journey and contributions
            </motion.p>
          </div>

          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {/* DESKTOP – unchanged */}
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-[6px] bg-white rounded origin-left"
                    style={{ width: lineSize }}
                  />
                </div>

                <div className="relative flex justify-between mt-0">
                  {experience.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* MOBILE – fixed */}
            {isMobile && (
              <div className="relative w-full max-w-md">
                <div className="absolute left-[18px] top-0 bottom-0 w-[3px] bg-white/25">
                  <motion.div
                    className="absolute left-0 top-0 w-[3px] bg-white origin-top"
                    style={{ height: lineSize }}
                  />
                </div>

                <div className="relative flex flex-col gap-16 ml-6 mt-8 pb-48">
                  {experience.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

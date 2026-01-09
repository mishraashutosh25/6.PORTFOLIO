import { useEffect, useMemo, useRef, useState } from "react"
import {
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from "framer-motion"
import { Github, ExternalLink } from "lucide-react"


import img1 from "../assets/photo1.png"
import img2 from "../assets/photo2.png"
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"

/* ===================== MOBILE DETECTION HOOK ===================== */

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )

  useEffect(() => {
    if (typeof window === "undefined") return

    const mql = window.matchMedia(query)
    const handler = (e) => setIsMobile(e.matches)

    mql.addEventListener("change", handler)
    setIsMobile(mql.matches)

    return () => mql.removeEventListener("change", handler)
  }, [query])

  return isMobile
}

/* ===================== PROJECTS COMPONENT ===================== */

export default function Projects() {
  const isMobile = useIsMobile()
  const sceneRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  /* ---------- PROJECT DATA ---------- */
  const projects = useMemo(
    () => [
      {
        title: "Krishiora",
        link: "https://www.krishior.in/",
        github: "https://github.com/mishraashutosh25/krishiora",
        bgcolor: "#0f2e1c",
        description: "Agricultural innovation platform",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "ArogayLink",
        link: "https://www.ArogayLink-.com/",
        github: "https://github.com/mishraashutosh25/ArogayLink-",
        bgcolor: "#357a95ff",
        description: "Healthcare connectivity solution",
        image: isMobile ? photo2 : img2,
      },
    ],
    [isMobile]
  )

  /* ---------- SCROLL TRACKING ---------- */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  })

  const thresholds = useMemo(
    () => projects.map((_, i) => (i + 1) / projects.length),
    [projects]
  )

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t)
    const safeIndex = idx === -1 ? thresholds.length - 1 : idx
    if (safeIndex !== activeIndex) setActiveIndex(safeIndex)
  })

  const activeProject = projects[activeIndex]

  /* ===================== UI ===================== */

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white transition-colors duration-500"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgcolor,
      }}
    >
      {/* ===== BACKGROUND ENHANCEMENT (SAFE) ===== */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_60%)]" />
      <div className="absolute -top-48 -right-48 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-[520px] h-[520px] rounded-full bg-black/20 blur-3xl pointer-events-none" />
      {/* ===== BACKGROUND ENHANCEMENT END ===== */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-6 px-4">
        <h2
          className={`text-5xl md:text-6xl font-semibold text-center transition-all duration-300 ${isMobile ? "mt-2" : "mt-4"
            }`}
        >
          My Work
        </h2>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${isMobile ? "mt-4" : ""
            }`}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              style={{ width: "100%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <>
    
                    {/* Project Title */}
                    <motion.h3
                      key={project.title}
                      initial={{ opacity: 0, y: -50, scale: 0.9, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, y: 50, scale: 0.9, rotateX: 15 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`block text-center text-[clamp(2.5rem,8vw,7rem)] font-black tracking-[-0.02em] bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent sm:absolute sm:-top-28 sm:left-[25%] lg:left-[-12%] ${isMobile ? "-mt-16" : ""
                        }`}
                      style={{
                        zIndex: 5,
                        textAlign: isMobile ? "center" : "left",
                        textShadow: "0 5px 32px rgba(0,0,0,0.4)",
                        fontStyle: "italic",
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {project.title}
                    </motion.h3>
                  </>
                )}
              </AnimatePresence>
              <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl md:shadow-[0_35px_60_-15px_rgba(0,0,0,0.7)] ${isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
                }
            h-[62vh] sm:h-[66vh]`}
                style={{ zIndex: 10, transition: "box-shadow 250ms ease" }}>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-contain sm:object-cover drop-shadow-xl md:drop-shadow-2xlxl shadow-2xl"
                  style={{
                    position: "relative",
                    zIndex: 15,
                    filter: "drop-shadow(0,16px 40px rgba(0,0,0,0.65)",
                    transition: "filter 200ms ease",
                  }}
                  loading=""
                />
                <div className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.12)0%, rgba(0,0,0,0)40%)",
                  }}>

                </div>
              </div>
            </div>
          ))}
      </div>
             {/* CTA Buttons */}
        <motion.div
          className="relative z-30 -mt-6 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {/* View Project Button */}
          <motion.a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2.5 rounded-full bg-white text-black px-8 py-3.5 text-sm font-bold shadow-[0_8px_30px_rgba(255,255,255,0.35),0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden group"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span className="relative z-10 tracking-wide">View Project</span>
            <ExternalLink size={16} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ 
                backgroundSize: "200% 100%",
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
            />
          </motion.a>

          {/* GitHub Button */}
          <motion.a
            href={activeProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2.5 rounded-full border-2 border-white/40 backdrop-blur-xl bg-white/[0.12] px-7 py-3.5 text-sm font-bold shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden group hover:border-white/60"
            whileHover={{ scale: 1.06, y: -2, backgroundColor: "rgba(255,255,255,0.18)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Github size={18} className="relative z-10 transition-all group-hover:rotate-[360deg] duration-700" />
            <span className="relative z-10 tracking-wide">GitHub</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full"
              whileHover={{ translateX: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>

    </div>

      
    </section >
  )
}

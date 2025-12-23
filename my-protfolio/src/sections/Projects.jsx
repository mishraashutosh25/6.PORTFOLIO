import { useEffect, useMemo, useRef, useState } from "react"
import {
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from "framer-motion"
import { Github } from "lucide-react"


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
        image: isMobile ? photo1 : img1,
      },
      {
        title: "ArogayLink",
        link: "https://www.ArogayLink-.com/",
        github: "https://github.com/mishraashutosh25/ArogayLink-",
        bgcolor: "#357a95ff",
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
          className={`text-5xl md:text-6xl font-semibold text-center transition-all duration-300 ${isMobile ? "mt-4" : "mt-8"
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
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`block text-center text-[clamp(3rem,6vw,5rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[30%] lg:left-[-8%] italic font-semibold ${isMobile ? "-mt-24" : ""
                      }`}
                    style={{
                      zIndex: 9,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {project.title}
                  </motion.h3>
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
<motion.div
  className="relative z-30 -mt-11 +mt-3 flex items-center gap-4"
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  {/* View Project */}
  <a
    href={activeProject.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-full bg-black/80 px-5 py-2.5 text-sm font-medium hover:bg-black transition"
  >
    View Project →
  </a>

  {/* GitHub */}
  <a
    href={activeProject.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 rounded-full border border-white/40 px-3 py-2.5 text-sm font-medium backdrop-blur-md hover:bg-white hover:text-black transition"
  >
    <Github size={18} />
    GitHub
  </a>
</motion.div>

        </div>

      
    </section>
  )
}

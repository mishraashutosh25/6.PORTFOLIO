import { FaJava, FaReact } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython, 
  SiDocker, SiMongodb, SiSupabase, SiPostgresql, SiJavascript, 
  SiExpress, SiFlutter, SiFirebase, SiGit, SiGithub, SiHtml5, 
  SiCss3, SiPostman 
} from "react-icons/si";
import { SiCplusplus, SiMysql } from "react-icons/si";
import { DiAws } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

export default function Skills() {





const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <DiNodejsSmall />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "SQL" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <DiAws />, name: "AWS Cloud" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiPostman />, name: "REST APIs" },
];


  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  // INTERSECTION OBSERVER
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // WHEEL + TOUCH SCROLL EFFECT
  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current == null) return;

      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [active]);

  // ANIMATION LOOP
  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 90;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px] animate-pulse delay-600" />
      </div>

      <motion.h2
        className="text-4xl mt-4 sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="text-base mt-2 mb-8 text-white/90 sm:text-lg z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Modern Application | Modern Technologies
      </motion.p>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-7xl text-[#1cd8d2]"
          style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              aria-label={s.name}
              title={s.name}
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

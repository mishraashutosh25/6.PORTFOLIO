import { FaJava, FaReact } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython, 
  SiDocker, SiMongodb, SiSupabase, SiPostgresql, SiJavascript, 
  SiExpress, SiFlutter, SiFirebase, SiGit, SiGithub, SiHtml5, 
  SiCss3, SiPostman, SiCplusplus, SiMysql
} from "react-icons/si";
import { DiAws, DiNodejsSmall } from "react-icons/di";

import img1 from "../assets/photo1.png";
import img2 from "../assets/photo2.png";
import orlyticsImg from "../assets/orlytics.png"; // Placeholder for the actual image
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";

export const SKILLS_DATA = [
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

export const getProjectsData = () => [
  {
    title: "Krishiora",
    link: "https://www.krishior.in/",
    github: "https://github.com/mishraashutosh25/krishiora",
    bgcolor: "#0f2e1c",
    description: "An AI-powered agricultural ecosystem enabling comprehensive soil analysis, real-time weather-based crop planning, and integrated smart irrigation tools to maximize yields.",
    image: img1,
  },
  {
    title: "ArogayLink",
    link: "https://www.ArogayLink-.com/",
    github: "https://github.com/mishraashutosh25/ArogayLink-",
    bgcolor: "#357a95ff",
    description: "A secure, HIPAA-compliant healthcare platform streamlining patient-doctor connectivity, appointment scheduling, and remote consultation capabilities.",
    image: img2,
  },
  {
    title: "Oralytics AI",
    link: "https://oralytics-ai.vercel.app/",
    github: "https://github.com/mishraashutosh25/Oralytics-AI",
    bgcolor: "#0b1613", 
    description: "Your Personal AI Interview Coach. Designed with modern voice intelligence, it allows job seekers to practice real interview questions tailored to their resume and receive instant, honest AI feedback.",
    image: orlyticsImg,
  },
];

export const EXPERIENCE_DATA = [
  {
    role: "Backend Development Intern",
    company: "CodeAlpha",
    duration: "Aug 2025 – Oct 2025",
    description:
      "Completed a virtual backend internship focused on scalable server-side logic, RESTful APIs, authentication, database operations, and secure backend architecture in a remote team environment.",
    icon: "🔧"
  },
  {
    role: "Full-Stack Developer Intern",
    company: "NullClass",
    duration: "2025",
    description:
      "Building end-to-end web solutions with a focus on responsive UI, backend logic, API integration, database management, and real-world deployment.",
    icon: "💻"
  },
  {
    role: "Full-Stack Developer",
    company: "Krishiora – Smart Farming Platform",
    duration: "2025",
    description:
      "Developing an AI-powered farming platform enabling soil analysis, weather-based crop planning, smart irrigation, fertilizer recommendations, and an online mandi system.",
    icon: "🌾"
  },
  {
    role: "Full-Stack Developer",
    company: "Real-Time Ride Booking App",
    duration: "2024 – 2025",
    description:
      "Built a real-time Uber-style ride booking system with JWT authentication, maps-based tracking, OTP verification, and real-time ride updates.",
    icon: "🚗"
  },
];

export const TESTIMONIALS_DATA = [
  {
    name: "Project Manager",
    role: "Full-Stack Developer",
    review:
      "Ashutosh was responsible for backend APIs and database design. He writes clean code and communicates clearly during development.",
    image: m1,
  },
  {
    name: "Hackathon Partner",
    role: "Frontend Developer",
    review:
      "Very consistent and focused. Ashutosh always looks for scalable and practical solutions.",
    image: m2,
  },
  {
    name: "Hackathon Teammate",
    role: "UI Developer",
    review:
      "He is disciplined and reliable. Ashutosh focuses on writing scalable solutions and always completes tasks on time.",
    image: m3,
  },
  {
    name: "College Project Guide",
    role: "Backend Developer",
    review:
      "Ashutosh managed the backend APIs and database for our project. His structured approach made frontend integration straightforward.",
    image: m4,
  },
];

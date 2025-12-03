import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const socials = [
  { Icon: FaXTwitter, link: "https://x.com/devma25", label: "Twitter" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/ashutoshmishradev12/", label: "LinkedIn" },
  { Icon: FaGithub, link: "https://github.com/mishraashutosh25", label: "GitHub" },
  { Icon: FaEnvelope, link: "mailto:ashutoshmishra.dev25@gmail.com", label: "Email" },
];

const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.25,
    y: -6,
    filter: "drop-shadow(0 0 10px rgba(0,255,255,0.8))",
  },
  tap: { scale: 0.92, y: 0, transition: { duration: 0.08 } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black py-20">

      {/* Subtle Floating Lights (unique effect) */}
      <div className="pointer-events-none absolute top-10 left-10 w-[200px] h-[200px] bg-cyan-400/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[250px] h-[250px] bg-emerald-400/20 blur-[140px] rounded-full animate-bounce"></div>

      {/* Soft Aurora Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(0,255,200,0.15),transparent_70%)]" />

      <motion.div
        className="relative z-10 px-6 flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Clean Name (white, elegant, not big) */}
        <h1
          className="text-white font-bold tracking-wide"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 4.2rem)",
            textShadow: "0 2px 12px rgba(255,255,255,0.2)",
          }}
        >
          Ashutosh Mishra
        </h1>

        {/* Minimal Underline Glow */}
        <div className="h-[3px] w-24 md:w-32 rounded-full bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

        {/* Social Icons */}
        <div className="flex gap-7 text-3xl md:text-4xl mt-3">
          {socials.map(({ Icon, label, link }) => (
            <motion.a
              href={link}
              key={label}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 hover:text-white transition-all duration-200 inline-flex items-center justify-center"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} Ashutosh Mishra • All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}

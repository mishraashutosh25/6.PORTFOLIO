import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  // Detect hover on buttons & links
  useEffect(() => {
    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () =>
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x - 25}px, ${position.y - 25}px, 0)`,
        transition: "transform 0.06s linear",
        willChange: "transform",
      }}
    >
      <div
        className={`rounded-full blur-2xl 
          bg-gradient-to-r from-pink-500 to-blue-500 
          opacity-80 transition-all duration-150
          ${hovering ? "w-16 h-16 scale-125" : "w-12 h-12 scale-100"}
        `}
      />
    </div>
  );
}

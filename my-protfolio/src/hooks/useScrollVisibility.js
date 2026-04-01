import { useState, useEffect, useRef } from "react";

export function useScrollVisibility(elementSelector, delay = 3000) {
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const el = document.querySelector(elementSelector);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setForceVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [elementSelector]);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up

        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, delay);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible, delay]);

  return visible;
}

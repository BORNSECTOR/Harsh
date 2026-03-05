import { useEffect, useRef } from "react";

export function useRevealAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const children = el.querySelectorAll(".reveal-up");
    children.forEach((child) => observer.observe(child));
    if (el.classList.contains("reveal-up")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

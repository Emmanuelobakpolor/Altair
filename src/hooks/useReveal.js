import { useEffect, useRef } from "react";

/**
 * Intersection Observer hook for scroll-triggered reveal animations.
 * Adds `.visible` when the element enters the viewport.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      threshold = 0.15,
      rootMargin = "0px 0px -40px 0px",
      once = true,
    } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("visible");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return ref;
}

/**
 * Observe multiple children under a parent for staggered reveals.
 */
export function useRevealChildren(selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale") {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll(selector);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [selector]);

  return ref;
}

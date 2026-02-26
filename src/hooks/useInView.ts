import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer hook — returns a ref and a boolean indicating
 * whether the element is (or has been) visible in the viewport.
 * Once triggered, it stays true so the fade-in animation only plays once.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}

import { type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Reusable section wrapper with consistent spacing and scroll-triggered fade-in. */
export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`
        py-16 px-6 md:py-24 md:px-8
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

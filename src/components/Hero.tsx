import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import type { PersonalInfo } from "../data/resume";

interface HeroProps {
  personal: PersonalInfo;
}

export function Hero({ personal }: HeroProps) {
  return (
    <section
      id="about"
      className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center md:py-32"
    >
      <p className="mb-3 text-sm font-medium tracking-widest text-accent-600 uppercase">
        {personal.title}
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
        {personal.name}
      </h1>
      <p className="mb-6 max-w-xl text-lg text-gray-500 md:text-xl">
        {personal.tagline}
      </p>
      <p className="mb-10 max-w-2xl leading-relaxed text-gray-600">
        {personal.about}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-700"
        >
          <FiMail size={16} />
          Get in Touch
        </a>
        {personal.resumeUrl && (
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        )}
      </div>
      <a
        href="#experience"
        className="mt-16 animate-bounce text-gray-300 transition-colors hover:text-accent-500"
        aria-label="Scroll to experience"
      >
        <FiArrowDown size={24} />
      </a>
    </section>
  );
}

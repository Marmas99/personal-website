import { SectionWrapper } from "./SectionWrapper";
import type { ExperienceEntry } from "../data/resume";

interface ExperienceProps {
  entries: ExperienceEntry[];
}

export function Experience({ entries }: ExperienceProps) {
  return (
    <SectionWrapper id="experience">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 md:text-3xl">
        Work Experience
      </h2>

      <div className="relative space-y-10 border-l-2 border-gray-100 pl-8">
        {entries.map((entry) => (
          <article key={entry.id} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-accent-500 bg-white" />

            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {entry.role}
              </h3>
              <span className="text-sm whitespace-nowrap text-gray-400">
                {entry.startDate} &ndash; {entry.endDate}
              </span>
            </div>

            <p className="mb-3 text-sm text-gray-500">
              {entry.companyUrl ? (
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-300 underline-offset-2 hover:text-accent-600"
                >
                  {entry.company}
                </a>
              ) : (
                entry.company
              )}{" "}
              &middot; {entry.location}
            </p>

            <ul className="space-y-1.5">
              {entry.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="relative pl-4 text-sm leading-relaxed text-gray-600 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

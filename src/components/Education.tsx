import { SectionWrapper } from "./SectionWrapper";
import type { EducationEntry } from "../data/resume";

interface EducationProps {
  entries: EducationEntry[];
}

export function Education({ entries }: EducationProps) {
  return (
    <SectionWrapper id="education">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 md:text-3xl">
        Education
      </h2>

      <div className="space-y-8">
        {entries.map((entry) => (
          <article key={entry.id} className="flex flex-col gap-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {entry.degree}
              </h3>
              <span className="text-sm whitespace-nowrap text-gray-400">
                {entry.startYear} &ndash; {entry.endYear}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              {entry.institutionUrl ? (
                <a
                  href={entry.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-300 underline-offset-2 hover:text-accent-600"
                >
                  {entry.institution}
                </a>
              ) : (
                entry.institution
              )}{" "}
              &middot; {entry.location}
            </p>

            {entry.description && (
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                {entry.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

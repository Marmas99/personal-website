import { SectionWrapper } from "./SectionWrapper";
import type { SkillCategory } from "../data/resume";

interface SkillsProps {
  categories: SkillCategory[];
}

export function Skills({ categories }: SkillsProps) {
  return (
    <SectionWrapper id="skills" className="bg-gray-50/60">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 md:text-3xl">
        Skills &amp; Technologies
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition-colors hover:border-accent-300 hover:text-accent-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

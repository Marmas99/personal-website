// Resume Data - Edit this file to update your website content

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  location: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "website" | "twitter";
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  startYear: number;
  endYear: number | "Present";
  description?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: ExperienceEntry[];
  skills: SkillCategory[];
  education: EducationEntry[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Markus Ma",
    title: "Software Engineer",
    tagline: "Building elegant solutions to complex problems",
    about:
      "I'm a passionate software engineer with experience in full-stack development, " +
      "modern web technologies, and a drive for writing clean, maintainable code. " +
      "I enjoy tackling challenging problems and continuously learning new technologies " +
      "to deliver high-quality software that makes a difference.",
    email: "hello@example.com",
    location: "Sweden",
    socialLinks: [
      { label: "GitHub", url: "https://github.com/markusma", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/markusma", icon: "linkedin" },
      { label: "Email", url: "mailto:hello@example.com", icon: "email" },
    ],
  },

  experience: [
    {
      id: "exp-1",
      role: "Senior Software Engineer",
      company: "Tech Company",
      companyUrl: "https://example.com",
      location: "Stockholm, Sweden",
      startDate: "Jan 2023",
      endDate: "Present",
      highlights: [
        "Led the development of a customer-facing web application serving 50k+ users",
        "Architected a micro-frontend solution reducing deployment time by 60%",
        "Mentored junior developers and established code review best practices",
        "Implemented CI/CD pipelines using GitHub Actions and Docker",
      ],
    },
    {
      id: "exp-2",
      role: "Software Engineer",
      company: "Another Company",
      companyUrl: "https://example.com",
      location: "Malmo, Sweden",
      startDate: "Jun 2020",
      endDate: "Dec 2022",
      highlights: [
        "Developed and maintained RESTful APIs using Node.js and TypeScript",
        "Built responsive web interfaces with React and modern CSS",
        "Improved application performance by 40% through code optimization",
        "Collaborated with cross-functional teams in an agile environment",
      ],
    },
    {
      id: "exp-3",
      role: "Junior Developer",
      company: "Startup Inc",
      location: "Remote",
      startDate: "Aug 2018",
      endDate: "May 2020",
      highlights: [
        "Contributed to the development of a SaaS platform from the ground up",
        "Wrote unit and integration tests achieving 85% code coverage",
        "Participated in daily standups and sprint planning ceremonies",
      ],
    },
  ],

  skills: [
    { id: "sk-lang", name: "Languages", skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS", "SQL"] },
    { id: "sk-fe", name: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Vite", "Storybook"] },
    { id: "sk-be", name: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL"] },
    { id: "sk-tools", name: "Tools & DevOps", skills: ["Git", "Docker", "GitHub Actions", "AWS", "Linux", "CI/CD"] },
    { id: "sk-practices", name: "Practices", skills: ["Agile / Scrum", "Test-Driven Development", "Code Review", "Pair Programming", "Accessibility (WCAG)"] },
  ],

  education: [
    {
      id: "edu-1",
      degree: "M.Sc. Computer Science",
      institution: "University of Technology",
      location: "Sweden",
      startYear: 2016,
      endYear: 2018,
      description: "Focused on distributed systems and software engineering. Thesis on scalable web architectures.",
    },
    {
      id: "edu-2",
      degree: "B.Sc. Computer Science",
      institution: "University of Technology",
      location: "Sweden",
      startYear: 2013,
      endYear: 2016,
      description: "Foundation in algorithms, data structures, and object-oriented programming.",
    },
  ],
};

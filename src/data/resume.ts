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

export interface CertificateEntry {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: ExperienceEntry[];
  skills: SkillCategory[];
  certificates: CertificateEntry[];
  education: EducationEntry[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Markus Masalkovski",
    title: "Software Developer",
    tagline: "Enthusiastic developer with one eye on the future",
    about:
      "System developer with a passion for cloud and AI. " +
      "Knowledgeable with serverless systems in AWS and programming languages such as GO, Typescript and C#. " +
      "Loves new challenges and learning new things.",
    email: "markus.masalkovski@gmail.com",
    location: "Sweden",
    socialLinks: [
      { label: "GitHub", url: "https://github.com/marmas99", icon: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/markus-masalkovski-b94095209/", icon: "linkedin" },
      { label: "Email", url: "mailto:markus.masalkovski@gmail.com", icon: "email" },
    ],
    resumeUrl: "/resume.pdf",
  },

  experience: [
    {
      id: "exp-1",
      role: "Cloud Software Developer",
      company: "Axis Communications",
      companyUrl: "https://www.axis.com/",
      location: "Lund, Sweden",
      startDate: "Sep 2022",
      endDate: "Present",
      highlights: [
       "Developing and testing the axis Cloud Connect platform",
       "Connecting on-premise devices to the cloud, making them accessible and manageable remotely",
      ],
    },
    {
      id: "exp-2",
      role: "(Consultant) Cloud Software Developer",
      company: "Axis Communications (via Gigstep AB)",
      companyUrl: "https://www.gigstep.se/",
      location: "Lund, Sweden",
      startDate: "July 2021",
      endDate: "Sep 2022",
      highlights: [
        "Hired as a Young Professional consultat to work on the Axis Cloud Connect platform",
      ],
    },
    {
      id: "exp-3",
      role: "Developer",
      company: "Jägersro Trav",
      location: "Malmö, Sweden",
      startDate: "June 2021",
      endDate: "July 2021",
      highlights: [
        "Hired together with other students from Malmö University",
        "Worked on a project called Smart Arena",
        "Focused on exploring innovative solutions to modernize the setup of horse races",
      ],
    },
  ],

  skills: [
    { id: "sk-lang", name: "Languages", skills: ["Go", "TypeScript", "React", "C#", "SQL"] },
    { id: "sk-be", name: "Cloud", skills: ["AWS", "Serverless", "REST APIs", "GraphQL"] },
    { id: "sk-tools", name: "Tools & DevOps", skills: ["Git", "Docker", "GitHub Actions", "CI/CD", "Kafka", "Automatic Testing",] },
    { id: "sk-practices", name: "Practices", skills: ["Agile / Scrum", "Code Review",] },
    { id: "sk-ai", name: "AI & ML", skills: ["GitHub Copilot", "Agentic driven development", "Agent Skills"] },
    { id: "sk-cloud", name: "AWS Cloud", skills: ["Lambda", "DynamoDB", "RDS", "API Gateway"] }, 
  ],

  certificates: [
    {
      id: "cert-1",
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
    },
  ],

  education: [
    {
      id: "edu-1",
      degree: "Computer Science & Application development",
      institution: "Malmö University",
      location: "Sweden",
      startYear: 2018,
      endYear: 2021,
      description: "Focused on learning professional software development, with courses on languages, agile frameworks, databases, and software architecture.",
    },
    {
      id: "edu-2",
      degree: "Economy -  Law Specialization",
      institution: "Sundsgymnaiset Vellinge",
      location: "Sweden",
      startYear: 2015,
      endYear: 2018,
      description: "Basic economics and law courses, focused on entrepreneurship and basic law and legal systems.",
    },
  ],
};

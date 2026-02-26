import { FiGithub, FiLinkedin, FiMail, FiGlobe, FiTwitter } from "react-icons/fi";
import type { SocialLink } from "../data/resume";

const ICON_MAP = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  website: FiGlobe,
  twitter: FiTwitter,
} as const;

interface FooterProps {
  name: string;
  socialLinks: SocialLink[];
}

export function Footer({ name, socialLinks }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50 px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div className="flex gap-5">
          {socialLinks.map((link) => {
            const Icon = ICON_MAP[link.icon];
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.icon === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-accent-600"
                aria-label={link.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-400">
          &copy; {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

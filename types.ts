export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  color: string;
  icon: string;
}
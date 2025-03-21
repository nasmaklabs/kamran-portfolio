export interface Project {
  title: string;
  description: string;
  problem: string;
  role: string;
  outcome: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level?: number;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}
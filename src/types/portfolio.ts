export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: number;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

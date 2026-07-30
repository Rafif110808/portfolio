export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  overview: string;
  features: string[];
  challenges: string;
  futureImprovements: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  category: "backend" | "frontend" | "database" | "tools";
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

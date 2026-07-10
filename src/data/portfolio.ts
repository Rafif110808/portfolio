import type { Project, Skill, Experience, SocialLink } from "@/types/portfolio";

export const personal = {
  name: "Raff",
  role: "Backend Developer",
  tagline: "Building reliable backend systems and modern web applications",
  description:
    "I enjoy building reliable backend systems and solving real-world problems through clean, maintainable code. Currently focused on Laravel, CodeIgniter 4, PostgreSQL, and Node.js.",
  email: "rafif@example.com",
  location: "Indonesia",
  avatar: "👨‍💻",
  available: true,
  availableText: "Available for Internship",
  resumeUrl: "/cv.pdf",
};

export const skills: Skill[] = [
  { name: "Laravel", category: "backend", level: 90, icon: "⚡" },
  { name: "CodeIgniter 4", category: "backend", level: 85, icon: "🔥" },
  { name: "Node.js", category: "backend", level: 75, icon: "💚" },
  { name: "Express.js", category: "backend", level: 70, icon: "🚀" },
  { name: "PostgreSQL", category: "database", level: 85, icon: "🐘" },
  { name: "MySQL", category: "database", level: 80, icon: "🗄️" },
  { name: "React", category: "frontend", level: 60, icon: "⚛️" },
  { name: "Next.js", category: "frontend", level: 55, icon: "▲" },
  { name: "Tailwind CSS", category: "frontend", level: 70, icon: "🎨" },
  { name: "Git", category: "tools", level: 85, icon: "📦" },
  { name: "Docker", category: "tools", level: 60, icon: "🐳" },
  { name: "REST API", category: "backend", level: 90, icon: "🔗" },
  { name: "Linux", category: "tools", level: 75, icon: "🐧" },
];

export const projects: Project[] = [
  {
    id: "ecommerce-api",
    title: "Project 1",
    description:
      "Kosong",
    tech: ["Laravel", "PostgreSQL", "REST API", "JWT"],
    github: "https://github.com/rafif/ecommerce-api",
  },
  {
    id: "pos-system",
    title: "Project 2",
    description:
      "Kosong",
    tech: ["CodeIgniter 4", "MySQL", "Bootstrap", "JavaScript"],
    demo: "https://pos.example.com",
  },
  {
    id: "realtime-chat",
    title: "Project 3",
    description:
      "kosong",
    tech: ["Node.js", "Socket.IO", "Express.js", "MongoDB"],
    github: "https://github.com/rafif/chat-app",
    demo: "https://chat.example.com",
  },
  {
    id: "blog-platform",
    title: "Project 4",
    description:
      "kosong",  
    tech: ["Laravel", "PostgreSQL", "Tailwind CSS", "Alpine.js"],
    github: "https://github.com/rafif/blog-platform",
  },
  {
    id: "inventory-management",
    title: "Project 5",
    description:
      "kosong",
    tech: ["CodeIgniter 4", "MySQL", "jQuery", "Bootstrap"],
    demo: "https://inventory.example.com",
  },
  {
    id: "api-gateway",
    title: "Project 6",
    description:
      "kosong",
    tech: ["Node.js", "Express.js", "Redis", "Docker"],
    github: "https://github.com/rafif/api-gateway",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Backend Developer Intern",
    company: "Tech Solutions Inc.",
    period: "Jan 2026 - Present",
    description:
      "Developing and maintaining RESTful APIs for internal tools. Optimizing database queries and improving API response times by 40%.",
    tech: ["Laravel", "PostgreSQL", "Redis"],
  },
  {
    id: "exp-2",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jun 2025 - Dec 2025",
    description:
      "Built custom web applications for small businesses including POS systems, company profiles, and inventory management systems.",
    tech: ["CodeIgniter 4", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    id: "exp-3",
    role: "Junior Developer",
    company: "StartupHub",
    period: "Mar 2025 - May 2025",
    description:
      "Collaborated on building a marketplace platform. Contributed to backend architecture, database design, and API development.",
    tech: ["Node.js", "Express.js", "MongoDB", "Docker"],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/rafif", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rafif",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:rafif@example.com", icon: "mail" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

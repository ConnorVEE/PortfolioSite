export type Technology = 'React' | 'Django' | 'PostgreSQL' | 'TypeScript' | 'Tailwind' | 'Next.js';

export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: readonly Project[] = [
  {
    title: "TodoAllDay",
    description: "TodoAllDay was built to solve a personal need for a centralized productivity dashboard that could manage both short-term tasks and long-term goals.",
    technologies: ["React", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/ConnorVEE/GoalTracker",
    liveUrl: "https://todoallday.com",
  },
  {
    title: "Portfolio Website",
    description: "My own personal portfolio website built to act as a living resume and place to showcase myself and projects.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/ConnorVEE/PortfolioSite",
    liveUrl: "",
  }
] as const;
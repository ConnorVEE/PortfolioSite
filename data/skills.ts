export type SkillCategory = {
    name: string;
    skills: string[];
  };
  
  export const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "C#",
        "HTML/CSS",
        "SQL",
      ],
    },
    {
      name: "Frameworks",
      skills: [
        "React",
        "Django",
        "Node.js",
        "Next.js",
      ],
    },
    {
      name: "Databases",
      skills: [
        "PostgreSQL", 
        "MySQL", 
        "MongoDB",
      ],
    },
    {
      name: "Tools",
      skills: [
        "Git", 
        "Github", 
        "Vercel", 
        "Render", 
        "Cursor", 
        "Docker",
      ],
    },
  ];
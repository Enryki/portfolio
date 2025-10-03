export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Back-end",
    items: ["C", "Java", "Python", "JavaScript", "VBA", "ABAP", "Spring Boot", "Node.js", "Flask"],
  },
  {
    category: "Front-end",
    items: ["Angular", "Bootstrap", "React", "Java/Type Script", "HTML", "CSS"],
  },
  {
    category: "Outras Tecnologias",
    items: ["SQL", "Bancos de dados", "Power BI", "Git", "Docker", "Selenium", "Pandas"],
  },
];

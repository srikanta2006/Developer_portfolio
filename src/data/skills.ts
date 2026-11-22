export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core languages used across system architecture, algorithms, and applications.",
    skills: ["Python", "C++", "Java", "JavaScript", "C", "TypeScript"],
  },
  {
    category: "AI & Machine Learning",
    description: "Generative AI, computer vision, deep learning, and agentic systems.",
    skills: [
      "Agentic AI",
      "LLM Orchestration",
      "Deep Learning",
      "YOLOv8",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    category: "Frontend Development",
    description: "Modern, accessible, component-driven web user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & APIs",
    description: "Server architecture, microservices, and asynchronous API design.",
    skills: ["FastAPI", "Flask", "Node.js", "RESTful APIs"],
  },
  {
    category: "Data & Storage",
    description: "Databases, cloud persistence, and data pipelines.",
    skills: ["SQLite", "Firebase", "Supabase", "Azure"],
  },
  {
    category: "DevOps & Tooling",
    description: "Version control, containerization, automation, and hosting platforms.",
    skills: ["Git", "Docker", "Linux", "Jenkins", "Vercel"],
  },
];

export type ProficiencyLevel = "Advanced" | "Intermediate" | "Beginner";
export type SkillProficiency = ProficiencyLevel;

export interface SkillItem {
  name: string;
  proficiency: ProficiencyLevel;
}

export interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    category: "Programming Languages",
    description: "Core languages used across system architecture, algorithms, and application backends.",
    skills: [
      { name: "Python", proficiency: "Advanced" },
      { name: "C++", proficiency: "Intermediate" },
      { name: "JavaScript", proficiency: "Intermediate" },
      { name: "C", proficiency: "Intermediate" },
      { name: "Java", proficiency: "Beginner" },
    ],
  },
  {
    category: "Applied AI & Machine Learning",
    description: "Agentic orchestration, retrieval pipelines, LLMs, and computer vision models.",
    skills: [
      { name: "LangChain", proficiency: "Intermediate" },
      { name: "ChromaDB", proficiency: "Intermediate" },
      { name: "Groq API", proficiency: "Intermediate" },
      { name: "Google Gemini API", proficiency: "Intermediate" },
      { name: "OpenAI API", proficiency: "Intermediate" },
      { name: "Scikit-learn", proficiency: "Intermediate" },
      { name: "YOLOv8", proficiency: "Intermediate" },
      { name: "LangGraph", proficiency: "Beginner" },
      { name: "Hugging Face", proficiency: "Beginner" },
      { name: "TensorFlow / Keras", proficiency: "Beginner" },
      { name: "PyTorch", proficiency: "Beginner" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Component architectures, responsive web interfaces, and modern styling.",
    skills: [
      { name: "HTML5", proficiency: "Advanced" },
      { name: "React.js", proficiency: "Intermediate" },
      { name: "CSS3", proficiency: "Intermediate" },
      { name: "Tailwind CSS", proficiency: "Beginner" },
    ],
  },
  {
    category: "Backend Development",
    description: "API design, asynchronous servers, and full-stack runtime systems.",
    skills: [
      { name: "FastAPI", proficiency: "Intermediate" },
      { name: "Node.js", proficiency: "Intermediate" },
      { name: "Express.js", proficiency: "Beginner" },
    ],
  },
  {
    category: "Databases & Cloud",
    description: "Relational, document, and cloud databases with deployment platforms.",
    skills: [
      { name: "PostgreSQL", proficiency: "Intermediate" },
      { name: "SQLite", proficiency: "Intermediate" },
      { name: "Firebase", proficiency: "Intermediate" },
      { name: "Supabase", proficiency: "Intermediate" },
      { name: "Vercel", proficiency: "Intermediate" },
      { name: "MongoDB", proficiency: "Beginner" },
      { name: "MySQL", proficiency: "Beginner" },
      { name: "Google Cloud Platform", proficiency: "Beginner" },
    ],
  },
  {
    category: "Developer Tools & Workflows",
    description: "Version control, code environments, notebook experimentation, and developer utilities.",
    skills: [
      { name: "VS Code", proficiency: "Advanced" },
      { name: "Git", proficiency: "Intermediate" },
      { name: "GitHub", proficiency: "Intermediate" },
      { name: "Jupyter Notebook", proficiency: "Intermediate" },
      { name: "NPM", proficiency: "Intermediate" },
      { name: "Linux", proficiency: "Beginner" },
      { name: "Command Line / Terminal", proficiency: "Beginner" },
      { name: "Postman", proficiency: "Beginner" },
      { name: "GitHub Actions", proficiency: "Beginner" },
    ],
  },
];

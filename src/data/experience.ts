export type ExperienceType = "internship" | "education" | "achievement" | "leadership";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  typeLabel: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  metaBadge?: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "celebal-internship",
    type: "internship",
    typeLabel: "Professional Experience",
    title: "Data Science Intern",
    organization: "Celebal Technologies",
    period: "May 2026 – July 2026",
    location: "Remote",
    metaBadge: "Internship",
    description:
      "Worked on end-to-end data science pipelines, from data preprocessing and feature engineering to classification model development using algorithms like XGBoost. Explored Retrieval-Augmented Generation (RAG) through hands-on GenAI mini-projects, gaining practical experience building LLM-powered applications.",
    highlights: [
      "Engineered automated data cleaning and feature extraction pipelines for machine learning models",
      "Trained and evaluated classification models utilizing XGBoost and Scikit-learn",
      "Built hands-on Retrieval-Augmented Generation (RAG) mini-projects combining vector search with LLMs",
      "Technology areas: Python, Scikit-learn, Machine Learning, Deep Learning, RAG, Agentic AI",
    ],
  },
  {
    id: "cvr-education",
    type: "education",
    typeLabel: "Education",
    title: "Bachelor of Technology — Computer Science and Engineering",
    organization: "CVR College of Engineering",
    period: "Expected May 2027",
    location: "Hyderabad, Telangana, India",
    description:
      "Pursuing Computer Science and Engineering with a focus on Data Structures & Algorithms, Backend Engineering, System Design, and Applied Artificial Intelligence.",
    highlights: [
      "Core coursework in Data Structures, Algorithms, Operating Systems, and Database Management",
      "Deep practical focus on Backend Architecture, Distributed Systems, and Autonomous AI Agents",
    ],
  },
  {
    id: "sih-2024-winner",
    type: "achievement",
    typeLabel: "Hackathons & Achievements",
    title: "First Place Winner & Team Lead",
    organization: "Smart India Hackathon (SIH) 2024",
    period: "2024",
    location: "National Competition · India",
    metaBadge: "1st Place Winner",
    description:
      "Led a cross-functional engineering team to secure 1st Place in Smart India Hackathon 2024, architecting and prototyping an end-to-end scalable solution for a real-world national problem statement.",
    highlights: [
      "Led cross-functional team through competitive multi-round national problem solving",
      "Architected end-to-end scalable MVP balancing system design, clean UX, and algorithmic accuracy",
    ],
  },
  {
    id: "kalakriti-leadership",
    type: "leadership",
    typeLabel: "Leadership & Community",
    title: "Operational Head & Event Management Lead",
    organization: "Kalakriti Art Club",
    period: "2023 – Present",
    location: "CVR College of Engineering",
    metaBadge: "Leadership",
    description:
      "Spearheaded club operations and event management, orchestrating large-scale collegiate cultural and creative initiatives, coordinating logistics, and mentoring junior organizers.",
    highlights: [
      "Directed operational planning and cross-team execution for high-attendance campus events",
      "Fostered collaborative environments and practical project coordination among student teams",
    ],
  },
  {
    id: "isf-2024-volunteer",
    type: "leadership",
    typeLabel: "Leadership & Community",
    title: "Volunteer Coordinator",
    organization: "International Startup Festival 2024",
    period: "2024",
    location: "Hyderabad, India",
    metaBadge: "Volunteer",
    description:
      "Contributed to event management and founder coordination at the International Startup Festival 2024, engaging with startup founders, tech investors, and international builders.",
  },
];

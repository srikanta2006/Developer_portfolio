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
    id: "sih-internal-winner",
    type: "achievement",
    typeLabel: "Hackathons & Achievements",
    title: "First Place Winner — Internal SIH Screening & 7+ Hackathons & Tech Events",
    organization: "Smart India Hackathon Internal College Screening & Collegiate Hackathons",
    period: "2024 – Present",
    location: "Hyderabad, India",
    metaBadge: "1st Place (Internal SIH) · 7+ Hackathons",
    description:
      "Led engineering team to win 1st Place in the competitive internal screening hackathon for Smart India Hackathon (SIH) selection. In addition, competed in 7 hackathons plus collegiate tech events, mastering high-pressure zero-to-one prototyping, async state debugging, and production deployments.",
    highlights: [
      "Secured 1st Place in the competitive internal screening hackathon for Smart India Hackathon (SIH) selection",
      "Competed in 7 hackathons plus collegiate tech events, accumulating 250+ hours of rapid MVP development and team leadership",
      "Built HackOS directly from firsthand hackathon sprint experience to eliminate developer context switching",
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

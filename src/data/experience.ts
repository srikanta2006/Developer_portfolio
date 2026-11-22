export type TimelineCategory =
  | "education"
  | "training"
  | "hackathons"
  | "leadership";

export interface TimelineItem {
  id: string;
  category: TimelineCategory;
  categoryLabel: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  verificationNeeded?: boolean;
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "agentathon-2025",
    category: "hackathons",
    categoryLabel: "Hackathons & Competitions",
    title: "Participant & AI Builder",
    organization: "Agentathon 2025",
    period: "2025",
    location: "National / Virtual",
    description:
      "Built and presented autonomous agent workflows focusing on real-world multi-tool execution and reasoning capabilities.",
    highlights: [
      "Prototyped multi-step agent reasoning pipeline using modern LLM APIs",
      "Collaborated on agentic memory models and deterministic decision verification",
    ],
    verificationNeeded: true,
  },
  {
    id: "sih-2024",
    category: "hackathons",
    categoryLabel: "Hackathons & Competitions",
    title: "Screened Participant",
    organization: "Smart India Hackathon (SIH) 2024",
    period: "2024",
    location: "India",
    description:
      "Advanced through internal college screening rounds, developing solutions targeting national technical problem statements.",
    highlights: [
      "Engineered working MVP prototype under competitive screening timelines",
      "Focused on architectural feasibility and clean presentation",
    ],
    verificationNeeded: true,
  },
  {
    id: "startup-party",
    category: "hackathons",
    categoryLabel: "Hackathons & Competitions",
    title: "Participant / Selected Builder",
    organization: "Startup Party",
    period: "2024",
    location: "Hyderabad, India",
    description:
      "Participated in fast-paced founder pitch and build events, collaborating with developers and founders on rapid software validation.",
    verificationNeeded: true,
  },
  {
    id: "tekworks-training",
    category: "training",
    categoryLabel: "Technical Training",
    title: "Practical Technical Training",
    organization: "TekWorks",
    period: "2024",
    location: "Hyderabad, India",
    description:
      "Hands-on technical training program focused on core software engineering practices, system programming fundamentals, and modern full-stack workflows.",
    highlights: [
      "Applied structured software design patterns and modular code organization",
      "Practiced collaborative version control, debugging techniques, and deployment basics",
    ],
    verificationNeeded: true,
  },
  {
    id: "btech-education",
    category: "education",
    categoryLabel: "Education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Undergraduate Degree Program",
    period: "In Progress",
    location: "Hyderabad, India",
    description:
      "Pursuing Bachelor of Technology with focus on data structures, algorithms, computer systems, and artificial intelligence fundamentals.",
    verificationNeeded: true,
  },
  {
    id: "community-leadership",
    category: "leadership",
    categoryLabel: "Leadership & Community",
    title: "Technical Community Member & Mentor",
    organization: "Peer Developer Initiatives",
    period: "2023 – Present",
    location: "Hyderabad, India",
    description:
      "Active participant in collegiate technical clubs and open developer forums, assisting peers with debugging, Git workflows, and AI tool adoption.",
    verificationNeeded: true,
  },
];

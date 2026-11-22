import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { FeatureStatusList } from "@/components/projects/FeatureStatusList";
import { DecisionsTable } from "@/components/projects/DecisionsTable";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [
    { slug: "biznexus" },
    { slug: "burst" },
    { slug: "hackos" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — Technical Case Study | Srikanta Bellamkonda`,
    description: project.tagline,
  };
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];
  if (!project) notFound();

  // Project navigation sequence
  const projectKeys = ["biznexus", "burst", "hackos"];
  const currentIndex = projectKeys.indexOf(slug);
  const prevSlug =
    projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextSlug = projectKeys[(currentIndex + 1) % projectKeys.length];
  const previousProject = CASE_STUDIES[prevSlug];
  const nextProject = CASE_STUDIES[nextSlug];

  return (
    <article className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Header & Breadcrumb */}
      <Container>
        <div className="space-y-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#706E6B] hover:text-[#171717] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Selected Work</span>
          </Link>

          {/* Project Title & Metadata Bar */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
                Case Study {project.number}
              </span>
              <span className="text-[#E8E5DD]" aria-hidden="true">/</span>
              <Badge variant="accent">{project.category}</Badge>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717] leading-[1.15]">
              {project.title}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#706E6B] max-w-3xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-y border-[#E8E5DD] py-4 text-xs">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#706E6B] block">
                  Role
                </span>
                <span className="font-medium text-[#171717] block pt-0.5">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#706E6B] block">
                  Timeline
                </span>
                <span className="font-medium text-[#171717] block pt-0.5">
                  {project.timeframe}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#706E6B] block">
                  Discipline
                </span>
                <span className="font-medium text-[#171717] block pt-0.5">
                  {project.category}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#706E6B] block">
                  Repository
                </span>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#6D5DFB] hover:underline pt-0.5"
                  >
                    <span>View GitHub</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-[#706E6B] pt-0.5 block">Internal</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Visual Media Frame */}
      <Container>
        <div className="relative aspect-[16/10] w-full rounded-2xl border border-[#E8E5DD] bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#F7F6F2]">
            <Image
              src={project.heroImage}
              alt={project.heroImageAlt}
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      </Container>

      {/* 3. Overview & Problem Context */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              01 / Overview
            </span>
            <h2 className="font-display text-2xl font-normal text-[#171717]">
              Project Background & Goals
            </h2>
            <p className="text-sm sm:text-base text-[#706E6B] leading-relaxed">
              {project.overview}
            </p>

            <div className="space-y-2 pt-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#171717] block">
                Primary Engineering Goals:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#706E6B]">
                {project.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#6D5DFB] font-bold" aria-hidden="true">✓</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              02 / The Challenge
            </span>
            <h2 className="font-display text-2xl font-normal text-[#171717]">
              Context & Technical Constraints
            </h2>
            <p className="text-sm sm:text-base text-[#706E6B] leading-relaxed">
              {project.problem}
            </p>

            <div className="space-y-2 pt-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#171717] block">
                Operating Constraints:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#706E6B]">
                {project.constraints.map((constraint, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#171717] font-bold" aria-hidden="true">—</span>
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* 4. Solution & User Flows */}
      <Container>
        <div className="rounded-2xl border border-[#E8E5DD] bg-white p-6 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              03 / Solution
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#171717]">
              Engineered Solution & Key User Flows
            </h2>
            <p className="text-sm sm:text-base text-[#706E6B] leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E5DD]">
            {project.keyFlows.map((flow, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-[#E8E5DD] bg-[#F7F6F2] space-y-1.5">
                <span className="font-mono text-[11px] text-[#6D5DFB] uppercase tracking-wider">
                  Flow Step 0{idx + 1}
                </span>
                <p className="text-xs text-[#171717] leading-relaxed">
                  {flow}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 5. System Architecture Diagram */}
      <Container>
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
            04 / Architecture
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#171717]">
            System Architecture Diagram
          </h2>
          <p className="text-sm text-[#706E6B] max-w-2xl leading-relaxed">
            {project.architectureDescription}
          </p>

          <ArchitectureDiagram
            type={project.architectureDiagramType}
            title={project.title}
          />
        </div>
      </Container>

      {/* 6. Engineering Decisions & Trade-offs */}
      <Container>
        <DecisionsTable decisions={project.technicalDecisions} />
      </Container>

      {/* 7. Challenges & How They Were Solved */}
      <Container>
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
            05 / Engineering Challenges
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#171717]">
            Technical Challenges & Concrete Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challenges.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E8E5DD] bg-white p-6 space-y-3 shadow-xs"
              >
                <span className="font-mono text-xs text-[#706E6B] uppercase tracking-wider">
                  Challenge {idx + 1}
                </span>
                <h4 className="font-sans text-base font-semibold text-[#171717]">
                  {item.challenge}
                </h4>
                <div className="pt-2 border-t border-[#E8E5DD]">
                  <span className="font-mono text-[11px] text-[#4F5B40] uppercase tracking-wider block mb-1">
                    Solution Implemented
                  </span>
                  <p className="text-xs text-[#706E6B] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 8. Feature Status: Implemented vs Planned */}
      <Container>
        <FeatureStatusList status={project.featureStatus} />
      </Container>

      {/* 9. Outcomes, Learnings & Technology Stack */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Outcomes & Learnings */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              06 / Outcomes & Learnings
            </span>
            <h2 className="font-display text-2xl font-normal text-[#171717]">
              Key Engineering Learnings
            </h2>
            <ul className="space-y-3 text-sm text-[#706E6B]">
              {project.outcomesAndLearnings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#6D5DFB] font-bold text-base" aria-hidden="true">
                    —
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Inventory */}
          <div className="lg:col-span-5 rounded-xl border border-[#E8E5DD] bg-white p-6 space-y-4 shadow-xs">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              Technology Stack
            </h3>
            <div className="space-y-3">
              {project.techStack.map((group) => (
                <div key={group.category} className="space-y-1.5">
                  <span className="font-mono text-[11px] text-[#171717] font-semibold uppercase block">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {project.githubUrl && (
              <div className="pt-4 border-t border-[#E8E5DD]">
                <Button
                  variant="primary"
                  size="sm"
                  href={project.githubUrl}
                  isExternal
                  className="w-full justify-center gap-2"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>View Repository on GitHub</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* 10. Previous & Next Project Navigation */}
      <Container>
        <ProjectNavigation
          previousProject={{
            slug: previousProject.slug,
            title: previousProject.title,
            tagline: previousProject.tagline,
          }}
          nextProject={{
            slug: nextProject.slug,
            title: nextProject.title,
            tagline: nextProject.tagline,
          }}
        />
      </Container>
    </article>
  );
}

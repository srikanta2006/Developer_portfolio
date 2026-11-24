import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
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
    { slug: "legal-arena" },
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
    title: `${project.title} — Technical Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Technical Case Study | Srikanta Bellamkonda`,
      description: project.tagline,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Technical Case Study`,
      description: project.tagline,
    },
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

  // Project navigation sequence across all 4 projects
  const projectKeys = ["biznexus", "burst", "hackos", "legal-arena"];
  const currentIndex = projectKeys.indexOf(slug);
  const prevSlug =
    projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextSlug = projectKeys[(currentIndex + 1) % projectKeys.length];
  const previousProject = CASE_STUDIES[prevSlug];
  const nextProject = CASE_STUDIES[nextSlug];

  return (
    <article className="pt-28 sm:pt-36 pb-20 space-y-16 sm:space-y-24">
      {/* 1. Header & Breadcrumb */}
      <Container>
        <div className="space-y-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Selected Work</span>
          </Link>

          {/* Project Title & Metadata Bar */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Project {project.number}
              </span>
              <span className="text-white/20" aria-hidden="true">/</span>
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="neutral">{project.ownership}</Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              {project.title}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-y border-white/10 py-4 text-xs">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                  Role
                </span>
                <span className="font-semibold text-white block pt-0.5">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                  Timeline
                </span>
                <span className="font-semibold text-white block pt-0.5">
                  {project.timeframe}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                  Discipline
                </span>
                <span className="font-semibold text-white block pt-0.5">
                  {project.category}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                  Links
                </span>
                <div className="flex items-center gap-3 pt-0.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Live App</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Visual Media Frame */}
      <Container>
        <div className="relative aspect-[16/10] w-full rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-3 sm:p-4 shadow-xl overflow-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 border border-white/5">
            <Image
              src={project.heroImage}
              alt={project.heroImageAlt}
              fill
              priority
              className="object-cover object-top opacity-90 transition-opacity hover:opacity-100"
            />
          </div>
        </div>
      </Container>

      {/* 3. Overview & Problem Context */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              01 / Overview
            </span>
            <h2 className="font-heading text-2xl font-bold text-white">
              Project Background & Goals
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.overview}
            </p>

            <div className="space-y-2 pt-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold block">
                Primary Engineering Goals:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold" aria-hidden="true">✓</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              02 / The Challenge
            </span>
            <h2 className="font-heading text-2xl font-bold text-white">
              Context & Operating Constraints
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.problem}
            </p>

            <div className="space-y-2 pt-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold block">
                Technical Constraints:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.constraints.map((constraint, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold" aria-hidden="true">—</span>
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
        <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              03 / Solution Architecture
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Engineered Solution & Key User Flows
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            {project.keyFlows.map((flow, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/10 bg-[#111827]/70 space-y-1.5">
                <span className="font-mono text-[11px] text-indigo-400 font-semibold uppercase tracking-wider">
                  Flow Step 0{idx + 1}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
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
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            04 / Systems Design
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            System Architecture Diagram
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            {project.architectureDescription}
          </p>

          <ArchitectureDiagram
            type={project.architectureDiagramType}
            title={project.title}
          />
        </div>
      </Container>

      {/* 6. Individual Contribution (if applicable) */}
      {project.individualContribution && project.individualContribution.length > 0 && (
        <Container>
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/20 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">Team Project Leadership</Badge>
              <span className="font-mono text-xs text-indigo-300 font-semibold">
                Srikanta&apos;s Specific Contributions
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Agent Architecture & Orchestration Implementation
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {project.individualContribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <span className="text-indigo-400 font-bold" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      )}

      {/* 7. Engineering Decisions & Trade-offs */}
      <Container>
        <DecisionsTable decisions={project.technicalDecisions} />
      </Container>

      {/* 8. Challenges & How They Were Solved */}
      <Container>
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            05 / Technical Hurdles
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Engineering Challenges & Concrete Resolutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challenges.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 space-y-3 shadow-xl"
              >
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Challenge 0{idx + 1}
                </span>
                <h4 className="font-heading text-base font-semibold text-white">
                  {item.challenge}
                </h4>
                <div className="pt-2 border-t border-white/10">
                  <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider block mb-1 font-semibold">
                    Resolution Applied
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 9. Feature Status: Implemented vs Planned */}
      <Container>
        <FeatureStatusList status={project.featureStatus} />
      </Container>

      {/* 10. Outcomes & Technology Stack */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Outcomes & Learnings */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              06 / Outcomes & Learnings
            </span>
            <h2 className="font-heading text-2xl font-bold text-white">
              Key Engineering Takeaways
            </h2>
            <ul className="space-y-3 text-sm text-slate-300">
              {project.outcomesAndLearnings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-indigo-400 font-bold text-base" aria-hidden="true">
                    —
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Inventory */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-6 space-y-4 shadow-xl">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Technology Stack
            </h3>
            <div className="space-y-3">
              {project.techStack.map((group) => (
                <div key={group.category} className="space-y-1.5">
                  <span className="font-mono text-[11px] text-slate-200 font-semibold uppercase block">
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

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              {project.liveUrl && (
                <Button
                  variant="accent"
                  size="sm"
                  href={project.liveUrl}
                  isExternal
                  className="w-full justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Launch Live Application</span>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  href={project.githubUrl}
                  isExternal
                  className="w-full justify-center gap-2"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>View Repository on GitHub</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* 11. Previous & Next Project Navigation */}
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

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles, ChevronDown, ChevronUp, Network } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LegalArenaSimulator } from "@/components/projects/LegalArenaSimulator";
import { ArchitectureBlueprint } from "@/components/projects/ArchitectureBlueprint";
import { PROJECT_BLUEPRINTS } from "@/data/projectBlueprints";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isLegalArena = project.slug === "legal-arena";
  const [showSimulator, setShowSimulator] = useState<boolean>(isLegalArena);
  const [showBlueprint, setShowBlueprint] = useState<boolean>(false);

  const blueprint = PROJECT_BLUEPRINTS[project.slug];

  return (
    <article className="group relative rounded-3xl border border-white/10 bg-[#111827]/60 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Project Visual / Image Frame */}
        <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[320px] bg-[#0B0F19] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden flex items-center justify-center p-6">
          <div className="relative w-full h-full max-h-[320px] rounded-2xl border border-white/10 bg-[#0E1424] shadow-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
                Project {project.number} · {project.timeframe}
              </span>
              <div className="flex items-center gap-1.5">
                {project.ownership && (
                  <Badge variant="outline" size="sm">
                    {project.ownership}
                  </Badge>
                )}
                <Badge variant="accent" size="sm">
                  {project.category}
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#A5B4FC] transition-colors">
                <Link href={`/work/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <p className="font-sans text-sm font-medium text-[#94A3B8] pt-1">
                {project.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>

            {/* Individual Contribution Note if present */}
            {project.individualContribution && (
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-200">
                <strong className="text-white">My Architecture Contribution:</strong>{" "}
                {project.individualContribution}
              </div>
            )}

            {/* Key Engineering Highlights */}
            <div className="space-y-2 pt-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                Architecture Highlights
              </span>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#818CF8] font-bold" aria-hidden="true">
                      —
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="neutral" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.08]">
            <Button
              variant="primary"
              size="sm"
              href={`/work/${project.slug}`}
              className="gap-1.5"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>

            {project.liveUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.liveUrl}
                isExternal
                className="gap-1.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#34D399]" aria-hidden="true" />
              </Button>
            )}

            {/* Architecture Blueprint Toggle Button */}
            {blueprint && (
              <button
                type="button"
                onClick={() => setShowBlueprint(!showBlueprint)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                  showBlueprint
                    ? "bg-[#6366F1]/20 text-[#A5B4FC] border-[#6366F1]/50"
                    : "bg-white/[0.06] text-slate-300 border-white/10 hover:bg-white/[0.1] hover:text-white"
                }`}
              >
                <Network className="h-3.5 w-3.5 text-[#A5B4FC]" />
                <span>{showBlueprint ? "Hide Blueprint" : "Architecture Blueprint"}</span>
                {showBlueprint ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            )}

            {isLegalArena && (
              <button
                type="button"
                onClick={() => setShowSimulator(!showSimulator)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/15 hover:bg-indigo-500/25 text-[#A5B4FC] text-xs font-semibold transition-colors cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>{showSimulator ? "Hide Live Simulator" : "Try Interactive Simulator"}</span>
                {showSimulator ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            )}

            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.githubUrl}
                isExternal
                className="gap-1.5"
              >
                <span>Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Architecture Blueprint Pipeline View */}
      {blueprint && showBlueprint && (
        <div className="p-6 sm:p-8 border-t border-white/10 bg-[#0B0F19]/90 animate-in fade-in duration-200">
          <ArchitectureBlueprint projectId={project.slug} nodes={blueprint} />
        </div>
      )}

      {/* Interactive Courtroom Debate Widget (Proof in Action!) */}
      {isLegalArena && showSimulator && (
        <div className="p-6 sm:p-8 border-t border-white/10 bg-[#0B0F19]/90">
          <LegalArenaSimulator />
        </div>
      )}
    </article>
  );
}

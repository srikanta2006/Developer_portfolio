"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Globe, Cpu, Network, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import { LegalArenaSimulator } from "@/components/projects/LegalArenaSimulator";
import { ArchitectureBlueprint } from "@/components/projects/ArchitectureBlueprint";
import { PROJECT_BLUEPRINTS } from "@/data/projectBlueprints";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isLegalArena = project.slug === "legal-arena";
  const [showSimulator, setShowSimulator] = useState<boolean>(false);
  const [showBlueprint, setShowBlueprint] = useState<boolean>(false);

  const blueprint = PROJECT_BLUEPRINTS[project.slug];
  const isAI = project.category.toLowerCase().includes("ai");

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0C0E12] p-6 sm:p-7 transition-all duration-200 hover:border-[#3B82F6]/40 hover:bg-[#0F1218]">
      <div className="space-y-4">
        {/* Top Row: Category Icon + Label & Diagonal Arrow */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#64748B]">
            {isAI ? (
              <Cpu className="h-3.5 w-3.5 text-[#3B82F6]" aria-hidden="true" />
            ) : (
              <Globe className="h-3.5 w-3.5 text-[#3B82F6]" aria-hidden="true" />
            )}
            <span>{project.category}</span>
          </div>

          <Link
            href={`/work/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="text-[#64748B] group-hover:text-[#60A5FA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Title & Concise Description */}
        <div className="space-y-2">
          <h3 className="font-heading text-xl font-bold tracking-tight text-[#ECEEF0] group-hover:text-[#60A5FA] transition-colors">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Monospace Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-[#94A3B8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Footer Actions */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium text-[#ECEEF0] hover:text-[#60A5FA] transition-colors"
          >
            <span>Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#94A3B8] hover:text-[#ECEEF0] transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span>Live Demo</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-3">
          {blueprint && (
            <button
              type="button"
              onClick={() => setShowBlueprint(!showBlueprint)}
              className="inline-flex items-center gap-1 font-mono text-[11px] text-[#64748B] hover:text-[#60A5FA] transition-colors cursor-pointer"
            >
              <Network className="h-3 w-3" aria-hidden="true" />
              <span>{showBlueprint ? "Hide Blueprint" : "Blueprint"}</span>
            </button>
          )}

          {isLegalArena && (
            <button
              type="button"
              onClick={() => setShowSimulator(!showSimulator)}
              className="inline-flex items-center gap-1 font-mono text-[11px] text-[#60A5FA] hover:text-[#93C5FD] transition-colors cursor-pointer"
            >
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              <span>{showSimulator ? "Hide Simulator" : "Try Simulator"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable Blueprint Drawer */}
      {showBlueprint && blueprint && (
        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <ArchitectureBlueprint nodes={blueprint} />
        </div>
      )}

      {/* Expandable Legal Arena Simulator */}
      {isLegalArena && showSimulator && (
        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <LegalArenaSimulator />
        </div>
      )}
    </article>
  );
}

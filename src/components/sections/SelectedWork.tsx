"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";

type CategoryFilter = "all" | "ai" | "fullstack";

export function SelectedWork() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "ai") return p.id === "legal-arena" || p.id === "biznexus";
    if (filter === "fullstack") return p.id === "burst" || p.id === "hackos";
    return true;
  });

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-white/[0.08] scroll-mt-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading
            number="02 / Selected Work"
            title="Featured Projects & Case Studies"
            description="Software systems and AI applications engineered with verified architecture and working code."
            className="mb-0"
          />

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#111827]/80 border border-white/10 text-xs font-medium self-start sm:self-auto shrink-0 shadow-lg">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-white text-[#0B0F19] font-bold shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === "ai"
                  ? "bg-[#6366F1] text-white font-bold shadow-xs shadow-indigo-500/20"
                  : "text-slate-400 hover:text-[#A5B4FC]"
              }`}
            >
              Applied AI (2)
            </button>
            <button
              type="button"
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === "fullstack"
                  ? "bg-[#10B981] text-white font-bold shadow-xs shadow-emerald-500/20"
                  : "text-slate-400 hover:text-[#6EE7B7]"
              }`}
            >
              Full-Stack Web (2)
            </button>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

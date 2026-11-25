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
    <section id="work" className="py-20 sm:py-24 border-t border-white/[0.08] scroll-mt-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            number="Featured Work"
            title="Selected Projects"
            description="Software systems and applied AI applications engineered with verified architecture and working code."
            className="mb-0"
          />

          {/* Clean Segmented Filter Pills */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0C0E12] border border-white/[0.08] text-xs font-medium self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === "all"
                  ? "bg-white/[0.08] text-[#60A5FA] font-semibold"
                  : "text-[#94A3B8] hover:text-[#ECEEF0]"
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai")}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === "ai"
                  ? "bg-white/[0.08] text-[#60A5FA] font-semibold"
                  : "text-[#94A3B8] hover:text-[#ECEEF0]"
              }`}
            >
              Applied AI (2)
            </button>
            <button
              type="button"
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === "fullstack"
                  ? "bg-white/[0.08] text-[#60A5FA] font-semibold"
                  : "text-[#94A3B8] hover:text-[#ECEEF0]"
              }`}
            >
              Full-Stack (2)
            </button>
          </div>
        </div>

        {/* RNR-Style 2-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

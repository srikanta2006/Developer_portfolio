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
    <section id="work" className="py-20 sm:py-28 border-t border-[#E2E8F0] scroll-mt-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading
            number="02 / Selected Work"
            title="Featured Projects & Case Studies"
            description="Software systems and AI applications engineered with verified architecture and working code."
            className="mb-0"
          />

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-medium self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-white text-[#0F172A] font-semibold shadow-2xs"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === "ai"
                  ? "bg-white text-[#4F46E5] font-semibold shadow-2xs"
                  : "text-[#64748B] hover:text-[#4F46E5]"
              }`}
            >
              Applied AI (2)
            </button>
            <button
              type="button"
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === "fullstack"
                  ? "bg-white text-[#059669] font-semibold shadow-2xs"
                  : "text-[#64748B] hover:text-[#059669]"
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

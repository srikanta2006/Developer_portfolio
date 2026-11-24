"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES, SkillCategoryGroup } from "@/data/skills";
import { Search, Sparkles } from "lucide-react";

type FilterTab = "All" | "Applied AI & ML" | "Programming Languages" | "Full-Stack" | "Databases & Cloud" | "Developer Tools";

export function Capabilities() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [onlyStrong, setOnlyStrong] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    let list: SkillCategoryGroup[] = [];

    if (activeTab === "All") {
      list = SKILL_CATEGORIES;
    } else if (activeTab === "Full-Stack") {
      list = SKILL_CATEGORIES.filter(
        (c) => c.category === "Frontend Development" || c.category === "Backend Development"
      );
    } else {
      list = SKILL_CATEGORIES.filter((c) => c.category.includes(activeTab) || c.category === activeTab);
    }

    // Filter by strong skills (Advanced / Intermediate) if toggled
    return list.map((category) => {
      let skills = category.skills;
      if (onlyStrong) {
        skills = skills.filter((s) => s.proficiency === "Advanced" || s.proficiency === "Intermediate");
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        skills = skills.filter((s) => s.name.toLowerCase().includes(q));
      }
      return {
        ...category,
        skills,
      };
    }).filter((category) => category.skills.length > 0);
  }, [activeTab, onlyStrong, searchQuery]);

  const totalVisibleSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="capabilities" className="py-20 sm:py-28 border-t border-white/[0.08] scroll-mt-20">
      <Container>
        <SectionHeading
          number="03 / Capabilities"
          title="Technical Skills & Proficiencies"
          description="Assessed and verified technologies applied across multi-agent systems, backend engineering, and web applications."
        />

        {/* Interactive Controls Bar */}
        <div className="mt-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#111827]/80 border border-white/10 text-xs shadow-lg">
            {(
              [
                { label: "All", id: "All" },
                { label: "Applied AI", id: "Applied AI & ML" },
                { label: "Languages", id: "Programming Languages" },
                { label: "Full-Stack", id: "Full-Stack" },
                { label: "Databases & Cloud", id: "Databases & Cloud" },
                { label: "Tools", id: "Developer Tools" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as FilterTab)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${activeTab === tab.id
                  ? "bg-[#6366F1] text-white shadow-xs font-semibold shadow-indigo-500/25"
                  : "text-slate-400 hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search & Strong Skills Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. Python, LangChain)..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-white/10 bg-[#0B0F19] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#6366F1]"
              />
            </div>

            <button
              type="button"
              onClick={() => setOnlyStrong(!onlyStrong)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer shrink-0 ${onlyStrong
                ? "bg-[#6366F1]/20 text-[#A5B4FC] border-[#6366F1] font-semibold"
                : "bg-white/[0.04] text-slate-300 border-white/10 hover:text-white hover:bg-white/[0.08]"
                }`}
              title="Show Advanced & Intermediate proficiencies only"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#818CF8]" />
              <span className="hidden sm:inline">Core Strengths Only</span>
              <span className="sm:hidden">Core</span>
            </button>
          </div>
        </div>

        {/* Legend & Count Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs text-slate-400 pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Proficiency:</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              <span className="text-slate-300">Advanced</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#6366F1]" />
              <span className="text-slate-300">Intermediate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              <span className="text-slate-300">Beginner</span>
            </div>
          </div>

          <div className="font-mono text-[11px] text-slate-400">
            Showing <span className="font-bold text-white">{totalVisibleSkills}</span> skills
          </div>
        </div>

        {/* Grid of Skill Categories */}
        {filteredCategories.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-sm text-slate-400">
            No skills found matching &ldquo;{searchQuery}&rdquo;. Try clearing your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCategories.map((category) => (
              <div
                key={category.category}
                className="rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-6 space-y-3 shadow-xl hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shimmer-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-sm font-bold text-white">
                    {category.category}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-400 bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-white/10">
                    {category.skills.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-200 hover:border-indigo-400/40 hover:bg-white/[0.08] hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full shrink-0 ${skill.proficiency === "Advanced"
                          ? "bg-[#10B981]"
                          : skill.proficiency === "Intermediate"
                            ? "bg-[#6366F1]"
                            : "bg-slate-500"
                          }`}
                        aria-hidden="true"
                      />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

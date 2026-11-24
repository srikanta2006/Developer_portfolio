import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/data/skills";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 border-t border-[#E2E8F0] scroll-mt-20">
      <Container>
        <SectionHeading
          number="03 / Capabilities"
          title="Technical Skills & Proficiencies"
          description="Verified technologies applied across backend architecture, machine learning, and full-stack systems."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-xs text-[#64748B]">
          <span className="font-mono text-xs uppercase tracking-wider">Proficiency:</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#059669]" />
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#4F46E5]" />
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#94A3B8]" />
            <span>Beginner</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-[#E2E8F0] bg-white p-5 space-y-3 shadow-2xs hover:border-[#4F46E5]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-sm font-bold text-[#0F172A]">
                  {category.category}
                </h3>
                <span className="font-mono text-[11px] text-[#64748B]">
                  {category.skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                        skill.proficiency === "Advanced"
                          ? "bg-[#059669]"
                          : skill.proficiency === "Intermediate"
                          ? "bg-[#4F46E5]"
                          : "bg-[#94A3B8]"
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
      </Container>
    </section>
  );
}

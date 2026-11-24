import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES, SkillProficiency } from "@/data/skills";

function getProficiencyBadge(proficiency: SkillProficiency) {
  switch (proficiency) {
    case "Advanced":
      return (
        <span className="font-mono text-[10px] font-semibold text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded border border-[#A7F3D0]">
          Advanced
        </span>
      );
    case "Intermediate":
      return (
        <span className="font-mono text-[10px] font-semibold text-[#4F46E5] bg-[#EEF2FF] px-1.5 py-0.5 rounded border border-[#C7D2FE]">
          Intermediate
        </span>
      );
    case "Beginner":
      return (
        <span className="font-mono text-[10px] font-medium text-[#475569] bg-[#F1F5F9] px-1.5 py-0.5 rounded border border-[#E2E8F0]">
          Beginner
        </span>
      );
    default:
      return null;
  }
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 border-t border-[#E2E8F0] scroll-mt-20">
      <Container>
        <SectionHeading
          number="03 / Capabilities"
          title="Technical Skills & Proficiencies"
          description="Strictly reflecting verified technologies used in hands-on projects, systems architectures, and competitive builds. Unused tools are excluded."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-xs text-[#475569]">
          <span className="font-mono uppercase tracking-wider text-[#64748B]">Assessed Proficiency:</span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] font-semibold text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded border border-[#A7F3D0]">
              Advanced
            </span>
            <span>Primary / production mastery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] font-semibold text-[#4F46E5] bg-[#EEF2FF] px-1.5 py-0.5 rounded border border-[#C7D2FE]">
              Intermediate
            </span>
            <span>Hands-on implementation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] font-medium text-[#475569] bg-[#F1F5F9] px-1.5 py-0.5 rounded border border-[#E2E8F0]">
              Beginner
            </span>
            <span>Applied fundamentals</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-[#E2E8F0] bg-white p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#4F46E5]/40 transition-colors"
            >
              <div className="space-y-1">
                <h3 className="font-heading text-base font-bold text-[#0F172A]">
                  {category.category}
                </h3>
                <span className="font-mono text-[11px] text-[#64748B]">
                  {category.skills.length} verified technologies
                </span>
              </div>

              <div className="space-y-2 pt-3 border-t border-[#E2E8F0]">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between py-1 px-2 rounded-lg bg-[#F8FAFC] border border-[#F1F5F9]"
                  >
                    <span className="text-xs font-medium text-[#0F172A]">
                      {skill.name}
                    </span>
                    {getProficiencyBadge(skill.proficiency)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note Callout */}
        <div className="mt-8 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-xs text-[#475569] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            <strong>Proficiency Integrity:</strong> Technologies not yet used in production or project code (e.g. Flask, OpenCV, FAISS, Jenkins) are omitted to maintain accuracy.
          </span>
          <span className="font-mono text-[11px] text-[#059669] font-medium">
            Assessed & verified
          </span>
        </div>
      </Container>
    </section>
  );
}

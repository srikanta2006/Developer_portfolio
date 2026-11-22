import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SKILL_GROUPS } from "@/data/skills";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 border-t border-[#E8E5DD]/70 scroll-mt-20">
      <Container>
        <SectionHeading
          number="03 / Capabilities"
          title="Technical Capabilities & Disciplines"
          description="Grouped by engineering discipline. No arbitrary skill percentages or vanity meters—only concrete technologies and tools applied in real projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-[#E8E5DD] bg-white p-6 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#6D5DFB]/30 transition-colors"
            >
              <div className="space-y-2">
                <h3 className="font-sans text-base font-semibold text-[#171717]">
                  {group.category}
                </h3>
                <p className="text-xs text-[#706E6B] leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E8E5DD]/60">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="neutral" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note Callout */}
        <div className="mt-8 rounded-lg border border-dashed border-[#E8E5DD] bg-[#F7F6F2] p-4 text-xs text-[#706E6B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            <strong>Inventory Note:</strong> Technology proficiency reflects practical usage across academic, personal, and hackathon projects.
          </span>
          <span className="font-mono text-[11px] text-[#706E6B]">
            Verified for production suitability
          </span>
        </div>
      </Container>
    </section>
  );
}

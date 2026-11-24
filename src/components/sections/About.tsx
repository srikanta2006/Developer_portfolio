import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Cpu, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Education Context */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              number="01 / About"
              title="The Engineer Who Builds Intelligent Products."
              description="Combining software engineering fundamentals with applied artificial intelligence to build practical, real-world solutions."
            />

            {/* Academic Card (Clean, no CGPA) */}
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#0F172A] font-semibold text-sm">
                <GraduationCap className="h-4 w-4 text-[#4F46E5]" />
                <span>CVR College of Engineering</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Bachelor of Technology in Computer Science and Engineering
              </p>
              <div className="text-xs font-mono text-[#64748B]">
                Expected Graduation: May 2027 · Hyderabad, India
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white text-xs text-[#475569] italic">
              “I believe in learning by building, taking ownership of ideas, and transforming concepts into working products.”
            </div>
          </div>

          {/* Right Column: Narrative Biography & Core Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 font-sans text-base text-[#475569] leading-relaxed">
              <p>
                I&apos;m a Computer Science undergraduate at CVR College of Engineering, interested in Software Engineering and Applied AI.
              </p>
              <p>
                I enjoy building complete applications, designing backend systems, solving engineering problems, and experimenting with intelligent technologies. My work spans full-stack web development, AI-powered business applications, multi-agent systems, and retrieval-augmented generation.
              </p>
            </div>

            {/* Core Interest Pillars (Clean pills, no clutter) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Pillar 1: Software Engineering */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white space-y-3 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#EEF2FF] text-[#4F46E5]">
                    <Code2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h5 className="font-heading text-sm font-bold text-[#0F172A]">
                    Software Engineering
                  </h5>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="neutral" size="sm">Backend APIs</Badge>
                  <Badge variant="neutral" size="sm">Data Structures & Algorithms</Badge>
                  <Badge variant="neutral" size="sm">System Design</Badge>
                </div>
              </div>

              {/* Pillar 2: Applied AI */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white space-y-3 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#059669]">
                    <Cpu className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h5 className="font-heading text-sm font-bold text-[#0F172A]">
                    Applied AI
                  </h5>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="neutral" size="sm">Agentic AI & Multi-Agent</Badge>
                  <Badge variant="neutral" size="sm">LLMs & Orchestration</Badge>
                  <Badge variant="neutral" size="sm">RAG & ChromaDB</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

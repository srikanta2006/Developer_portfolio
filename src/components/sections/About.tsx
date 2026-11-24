import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, GraduationCap, Cpu, Code2, Server, Database } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophical Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              number="01 / About"
              title="The Engineer Who Builds Intelligent Products."
              description="Combining software engineering fundamentals with applied artificial intelligence to build practical, real-world solutions."
            />

            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 space-y-4 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
                Core Philosophy
              </span>
              <p className="font-heading text-lg text-[#0F172A] font-medium leading-snug">
                “I believe in learning by building, taking ownership of ideas, and transforming concepts into working products.”
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <Badge variant="accent" size="sm">
                  Autonomous Product Builder
                </Badge>
                <Badge variant="sage" size="sm">
                  Hands-on Developer
                </Badge>
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-2">
              <div className="flex items-center gap-2 text-[#0F172A] font-semibold text-sm">
                <GraduationCap className="h-4 w-4 text-[#4F46E5]" />
                <span>CVR College of Engineering</span>
              </div>
              <p className="text-xs text-[#475569]">
                Bachelor of Technology in Computer Science and Engineering
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pt-1">
                <span>Expected Graduation: May 2027</span>
                <span className="font-semibold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                  GPA: 8.74
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Core Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 font-sans text-base text-[#475569] leading-relaxed">
              <p>
                I&apos;m a Computer Science undergraduate at CVR College of Engineering, interested in Software Engineering and Applied AI.
              </p>
              <p>
                I enjoy building complete applications, designing backend systems, solving engineering problems, and experimenting with intelligent technologies. My work spans full-stack web development, AI-powered business applications, multi-agent systems, and retrieval-augmented generation.
              </p>
              <p>
                I thrive on taking problems end-to-end: from designing clean data structures and APIs to orchestrating multi-agent LLM systems with structured outputs and robust guardrails.
              </p>
            </div>

            {/* Core Interest Pillars */}
            <div className="space-y-4 pt-2">
              <h4 className="font-heading text-base font-semibold text-[#0F172A]">
                Core Technical Interests
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pillar 1: Software Engineering */}
                <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white space-y-3 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#EEF2FF] text-[#4F46E5]">
                      <Code2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h5 className="font-heading text-sm font-bold text-[#0F172A]">
                        Software Engineering
                      </h5>
                      <span className="text-xs text-[#64748B]">Systems & Infrastructure</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#475569]">
                    <li className="flex items-center gap-2">
                      <Server className="h-3.5 w-3.5 text-[#4F46E5] shrink-0" />
                      <span>Backend Engineering & REST / Async APIs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                      <span>Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                      <span>System Design & Architecture</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2: Applied AI */}
                <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white space-y-3 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#059669]">
                      <Cpu className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h5 className="font-heading text-sm font-bold text-[#0F172A]">
                        Applied AI
                      </h5>
                      <span className="text-xs text-[#64748B]">Intelligent Systems</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#475569]">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#059669] shrink-0" />
                      <span>Agentic AI & Multi-Agent Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#059669] shrink-0" />
                      <span>Large Language Models (LLMs) & Orchestration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Database className="h-3.5 w-3.5 text-[#059669] shrink-0" />
                      <span>RAG & Vector Databases (ChromaDB)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Contact Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="md" href="#contact" className="gap-2">
                <span>Get In Touch</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <span className="font-mono text-xs text-[#64748B]">
                Open for Software Engineer & Applied AI roles
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

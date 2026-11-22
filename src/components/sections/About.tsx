import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, GraduationCap, Cpu, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophical Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              number="01 / About"
              title="A little about how I think."
              description="Engineering software with clarity, intentional systems design, and an unwavering respect for fundamentals."
            />

            <div className="rounded-xl border border-[#E8E5DD] bg-white p-6 space-y-4 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
                Guiding Principle
              </span>
              <p className="font-display text-lg text-[#171717] italic leading-snug">
                “Build systems that explain themselves in code, remain verifiable in production, and prioritize real users over decorative complexity.”
              </p>
              <div className="pt-2 flex items-center gap-2">
                <Badge variant="sage" size="sm">
                  Pragmatic Engineering
                </Badge>
                <Badge variant="accent" size="sm">
                  Agentic Workflows
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 font-sans text-base text-[#706E6B] leading-relaxed">
              <p>
                I am a software developer and creative technologist based in Hyderabad,
                India. My work centers on the bridge where dependable software engineering
                meets generative intelligence—turning cutting-edge models into deterministic,
                practical workflows.
              </p>
              <p>
                Whether orchestrating multi-agent business analytics tools, architecting
                responsive web platforms, or building focused developer utilities during
                hackathons, I care deeply about clean interfaces, low latency, and maintainable
                codebases.
              </p>
              <p>
                Rather than treating AI as a black box, I focus on system observability,
                citation accuracy, and deterministic guardrails so software remains
                trustworthy and predictable.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#E8E5DD] bg-white space-y-2">
                <Code2 className="h-5 w-5 text-[#6D5DFB]" aria-hidden="true" />
                <h4 className="font-sans text-sm font-semibold text-[#171717]">
                  Software Architecture
                </h4>
                <p className="text-xs text-[#706E6B] leading-normal">
                  Clean modular code, strict typing, and high-performance server/client boundaries.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#E8E5DD] bg-white space-y-2">
                <Cpu className="h-5 w-5 text-[#4F5B40]" aria-hidden="true" />
                <h4 className="font-sans text-sm font-semibold text-[#171717]">
                  Agentic & AI Systems
                </h4>
                <p className="text-xs text-[#706E6B] leading-normal">
                  Tool-augmented agent loops, document retrieval, and structured JSON outputs.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#E8E5DD] bg-white space-y-2">
                <GraduationCap className="h-5 w-5 text-[#171717]" aria-hidden="true" />
                <h4 className="font-sans text-sm font-semibold text-[#171717]">
                  Continuous Learning
                </h4>
                <p className="text-xs text-[#706E6B] leading-normal">
                  Pursuing B.Tech in CSE with deep curiosity for distributed systems and ML.
                </p>
              </div>
            </div>

            {/* Resume Callout Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="md" href="#contact" className="gap-2">
                <span>Request Resume / CV</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <span className="font-mono text-xs text-[#706E6B]">
                Available for software developer & AI engineering roles
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

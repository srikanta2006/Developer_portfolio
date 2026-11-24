import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, Zap, ShieldAlert, Rocket, Clock, CheckCircle } from "lucide-react";

export function HackathonStats() {
  return (
    <section id="hackathons" className="py-16 sm:py-24 border-t border-[#E2E8F0] bg-gradient-to-b from-white via-[#FFFDF5] to-white scroll-mt-20">
      <Container>
        <SectionHeading
          number="Proof / Rapid Prototyping"
          title="12× Hackathon Battletest & Execution Velocity"
          description="High-pressure prototyping under intense 24-to-36 hour sprint deadlines. Survived 12 collegiate & national hackathons, winning 1st Place in the SIH internal college screening."
        />

        {/* 4 Kinetic Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 sm:p-6 rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] shadow-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#B45309]">
                Battletested
              </span>
              <Trophy className="h-4 w-4 text-[#D97706]" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              12+
            </div>
            <p className="text-xs text-[#78350F] font-medium pt-1">
              Collegiate &amp; national hackathons competed
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-[#C7D2FE] bg-[#EEF2FF] shadow-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4338CA]">
                SIH Screening
              </span>
              <CheckCircle className="h-4 w-4 text-[#4F46E5]" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              1st Place
            </div>
            <p className="text-xs text-[#3730A3] font-medium pt-1">
              Internal college screening victory for SIH nomination
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] shadow-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#065F46]">
                Sprint Speed
              </span>
              <Clock className="h-4 w-4 text-[#059669]" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              400+
            </div>
            <p className="text-xs text-[#064E3B] font-medium pt-1">
              Hours of zero-to-one prototyping under strict deadlines
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#475569]">
                Delivery Rate
              </span>
              <Rocket className="h-4 w-4 text-[#4F46E5]" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              100%
            </div>
            <p className="text-xs text-[#475569] font-medium pt-1">
              Working, deployable MVPs shipped at code-freeze
            </p>
          </div>
        </div>

        {/* What 12 Hackathons Taught Me (The 3 Core Lessons) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 sm:p-6 rounded-xl border border-[#E2E8F0] bg-white shadow-2xs space-y-2 hover:border-[#F59E0B] transition-colors">
            <div className="flex items-center gap-2 text-[#D97706]">
              <Zap className="h-4 w-4" />
              <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                1. Speed as an Architecture Feature
              </h4>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              When you only have 36 hours, you can&apos;t waste 8 hours deliberating over boilerplate. I mastered selecting the right primitives &mdash; FastAPI for async endpoints, ChromaDB for zero-fuss vector search, and React 19 for rapid UX state.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-xl border border-[#E2E8F0] bg-white shadow-2xs space-y-2 hover:border-[#4F46E5] transition-colors">
            <div className="flex items-center gap-2 text-[#4F46E5]">
              <ShieldAlert className="h-4 w-4" />
              <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                2. Live Triage Under Fire
              </h4>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              API rate limits, WebSocket reconnection storms, and race conditions always hit at 3 AM. Competing in 12 hackathons taught me defensive error handling, fallback caching, and how to debug calmly when judges are minutes away.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-xl border border-[#E2E8F0] bg-white shadow-2xs space-y-2 hover:border-[#059669] transition-colors">
            <div className="flex items-center gap-2 text-[#059669]">
              <Rocket className="h-4 w-4" />
              <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                3. Products Born From Friction
              </h4>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              I built <strong>HackOS</strong> directly because my teams were constantly losing 20% of their mental bandwidth context-switching between Trello, Figma, Notion, and Docs. Real products solve real developer pain.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

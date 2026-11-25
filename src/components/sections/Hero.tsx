import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { LiveClock } from "@/components/ui/LiveClock";
import { RecruiterLens } from "@/components/ui/RecruiterLens";

export function Hero() {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-white/[0.08]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#3B82F6]/25 text-xs font-medium text-[#60A5FA]">
              Student Developer · Software &amp; Applied AI
            </div>

            {/* Two-tone Crisp Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-[-0.03em] leading-[1.08]">
                <span className="block text-[#ECEEF0]">
                  Building intelligent software.
                </span>
                <span className="block text-[#94A3B8]">
                  Web · Backend · Applied AI.
                </span>
              </h1>
              <p className="font-sans text-base sm:text-[1.0625rem] text-[#94A3B8] leading-relaxed max-w-xl">
                Computer Science student at CVR College of Engineering turning ideas into production-ready web applications, backend architectures, and multi-agent AI systems.
              </p>
            </div>

            {/* Clean CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button variant="primary" size="lg" href="#work" className="gap-2 group">
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>

              <Button variant="secondary" size="lg" href="#contact">
                Start a Conversation
              </Button>

              <CopyButton
                text="srikantacvr@gmail.com"
                label="Copy Email"
                className="h-12 px-4 text-sm font-medium rounded-xl bg-[#0C0E12] border-white/[0.1] hover:border-[#3B82F6]/50"
              />
            </div>

            {/* Single Clean Availability & Location Line */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#94A3B8]">
              <span className="inline-flex items-center gap-2 text-[#CBD5E1]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>
                <span>Open to engineering &amp; AI roles</span>
              </span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#94A3B8]">
                <MapPin className="h-3.5 w-3.5 text-[#3B82F6]" />
                <span>Hyderabad, India</span>
              </span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <LiveClock />
            </div>
          </div>

          {/* Right Column: RNR-Style Framed Portrait with Blue Corner Brackets & 0x00 / EOF */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up animation-delay-150">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] p-3">
              {/* Top-left blue L-bracket */}
              <span
                className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#3B82F6]/70 rounded-tl-sm"
                aria-hidden="true"
              />
              {/* Bottom-right blue L-bracket */}
              <span
                className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#3B82F6]/70 rounded-br-sm"
                aria-hidden="true"
              />

              {/* Monospace Technical Annotations */}
              <span
                className="pointer-events-none absolute -top-2.5 left-8 font-mono text-[10px] tracking-wider text-[#60A5FA]/80 bg-[#070809] px-1.5"
                aria-hidden="true"
              >
                0x00
              </span>
              <span
                className="pointer-events-none absolute -bottom-2.5 right-8 font-mono text-[10px] tracking-wider text-[#60A5FA]/80 bg-[#070809] px-1.5"
                aria-hidden="true"
              >
                EOF
              </span>

              {/* Portrait Frame */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#0C0E12] border border-white/[0.08] shadow-2xl shadow-black/80 group">
                <Image
                  src="/images/portrait-v2.jpg"
                  alt="Srikanta Bellamkonda — Student Developer & Applied AI Engineer"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 380px"
                  priority
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div
                  className="absolute inset-0 shadow-[inset_0_0_40px_rgba(7,8,9,0.45)] pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RNR-Style Centered Bottom Stats Bar */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-[#0C0E12] px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#ECEEF0]">
                7+
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                Hackathons &amp; Events
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#ECEEF0]">
                1st
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                SIH Screening
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#ECEEF0]">
                4+
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                Shipped Systems
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#ECEEF0]">
                CVR &apos;27
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                B.Tech CSE
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Recruiter Perspective Lens */}
        <div className="mt-10 pt-8 border-t border-white/[0.06]">
          <RecruiterLens />
        </div>
      </Container>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Terminal as TerminalIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Terminal } from "@/components/terminal/Terminal";

export const metadata: Metadata = {
  title: "Interactive Terminal — Srikanta Bellamkonda",
  description:
    "Full-screen command-line interface for exploring Srikanta Bellamkonda's software projects, multi-agent AI simulations, capabilities, and hackathon logs.",
};

export default function TerminalPage() {
  return (
    <main className="pt-28 sm:pt-32 pb-16 min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <Container>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back Navigation & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#60A5FA] transition-colors p-1 -ml-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </Link>

            <span className="font-mono text-[11px] text-[#94A3B8] bg-[#0C0E12] px-3 py-1 rounded-full border border-white/[0.08] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Interactive Shell Mode</span>
            </span>
          </div>

          {/* Page Heading */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#2563EB]/15 border border-[#3B82F6]/30 text-[#60A5FA]">
                <TerminalIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#ECEEF0]">
                Portfolio Terminal
              </h1>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
              A deterministic command-line interface designed for engineers who prefer navigating via keyboard. Safe, sandboxed, and responsive. Type{" "}
              <span className="font-mono text-[#ECEEF0] font-semibold bg-white/[0.06] px-1.5 py-0.5 rounded border border-white/[0.1]">
                help
              </span>{" "}
              or click the shortcuts below.
            </p>
          </div>

          {/* Full Terminal Container */}
          <div className="pt-2">
            <Terminal />
          </div>
        </div>
      </Container>
    </main>
  );
}

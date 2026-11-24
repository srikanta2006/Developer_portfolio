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
    <main className="py-12 sm:py-20 min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <Container>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back Navigation & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#475569] hover:text-[#4F46E5] transition-colors p-1 -ml-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>&larr; Back to Portfolio</span>
            </Link>

            <span className="font-mono text-[11px] text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full border border-[#E2E8F0] flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
              <span>Interactive Shell Mode</span>
            </span>
          </div>

          {/* Page Heading */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#EEF2FF] text-[#4F46E5]">
                <TerminalIcon className="h-5 w-5" />
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                Portfolio Terminal
              </h1>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl">
              A deterministic command-line interface designed for engineers who prefer navigating via keyboard. Safe, sandboxed, and responsive. Type <span className="font-mono text-[#0F172A] font-semibold bg-[#F1F5F9] px-1 py-0.5 rounded border border-[#E2E8F0]">help</span> or click the shortcuts below.
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

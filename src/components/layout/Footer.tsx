"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { ArrowUp, Check, Copy } from "lucide-react";
import { Container } from "./Container";

function DynamicYear() {
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("srikantacvr@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070809] pt-14 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Block */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="font-heading text-base font-bold text-[#ECEEF0]">
                Srikanta Bellamkonda
              </span>
              <span className="font-mono text-xs font-bold text-[#3B82F6] bg-[#2563EB]/10 border border-[#3B82F6]/25 px-2 py-0.5 rounded-md">
                SB
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Software developer &amp; applied AI builder crafting intelligent, production-ready systems.
            </p>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:justify-items-end">
            <div className="space-y-3">
              <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B]">
                Navigation
              </span>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>
                  <Link href="/#about" className="hover:text-[#ECEEF0] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-[#ECEEF0] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#capabilities" className="hover:text-[#ECEEF0] transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/#experience" className="hover:text-[#ECEEF0] transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/terminal" className="hover:text-[#60A5FA] transition-colors font-mono text-xs">
                    /terminal
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B]">
                Connect
              </span>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>
                  <a
                    href="https://github.com/srikanta2006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ECEEF0] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/srikanta-bellamkonda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ECEEF0] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 hover:text-[#ECEEF0] transition-colors cursor-pointer"
                  >
                    <span>{copied ? "Copied!" : "Email"}</span>
                    {copied ? (
                      <Check className="h-3 w-3 text-[#10B981]" />
                    ) : (
                      <Copy className="h-3 w-3 text-[#64748B]" />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Live Status Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            &copy; <Suspense fallback={<span>2026</span>}><DynamicYear /></Suspense> Srikanta Bellamkonda. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#ECEEF0] transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>Open to new projects</span>
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#94A3B8] hover:text-[#ECEEF0] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

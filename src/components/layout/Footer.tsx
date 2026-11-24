"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { Container } from "./Container";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 5.8a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

function DynamicYear() {
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[#E2E8F0] bg-white pt-14 pb-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2E8F0]">
          {/* Identity & Mission */}
          <div className="md:col-span-6 space-y-3">
            <Link
              href="/"
              className="inline-block font-heading text-xl font-bold tracking-tight text-[#0F172A] hover:opacity-85 transition-opacity"
            >
              Srikanta Bellamkonda
            </Link>
            <p className="text-sm text-[#475569] leading-relaxed max-w-md">
              Student Developer · Software Engineer & Applied AI Engineer.
              Building intelligent products through software and AI with practical engineering rigor.
            </p>
            <div className="text-xs font-mono text-[#64748B] pt-1">
              Hyderabad, India · B.Tech CSE at CVR College of Engineering
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="#capabilities"
                  className="text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  Capabilities & Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  Experience & Journey
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/srikanta2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>github.com/srikanta2006</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/srikanta-bellamkonda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  <LinkedInIcon className="h-4 w-4 text-[#4F46E5]" />
                  <span>linkedin.com/in/srikanta-bellamkonda</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:srikantabellamkonda@gmail.com"
                  className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#4F46E5]" />
                  <span>srikantabellamkonda@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & System Verification Footer Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <span>
              &copy; <Suspense fallback={<span>2026</span>}><DynamicYear /></Suspense> Srikanta Bellamkonda.
            </span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#059669]">
              Built with Next.js & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#0F172A] hover:text-[#4F46E5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded p-1"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

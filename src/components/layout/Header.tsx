"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Hackathons", href: "/#hackathons" },
  { label: "Skills", href: "/#capabilities" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
  { label: "Terminal", href: "/terminal", isTerminal: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[#0B0F19] focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
      >
        Skip to main content
      </a>

      {/* Framer-Style Floating Pill Navbar */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-fit rounded-full bg-[#0D121F]/80 backdrop-blur-xl border border-white/10 px-4 sm:px-5 py-2 shadow-2xl shadow-black/60 flex items-center gap-3 sm:gap-6">
          {/* Wordmark / Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-sans transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-full px-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-heading text-sm font-bold tracking-tight text-white">
              Srikanta Bellamkonda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.isTerminal
                    ? "ml-2 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold rounded-full bg-[#6366F1]/15 text-[#A5B4FC] border border-[#6366F1]/30 hover:bg-[#6366F1]/25 hover:border-[#6366F1]/50 shadow-xs transition-all"
                    : "px-3 py-1 text-xs font-medium text-[#94A3B8] hover:text-white hover:bg-white/[0.08] transition-all rounded-full"
                }
              >
                {item.isTerminal && <Terminal className="h-3 w-3 text-[#A5B4FC]" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-4 top-20 z-50 bg-[#0D121F]/95 backdrop-blur-2xl md:hidden flex flex-col p-6 rounded-2xl border border-white/10 shadow-2xl shadow-black animate-in fade-in duration-150 overflow-y-auto max-w-sm mx-auto"
        >
          <nav className="flex flex-col gap-2 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#64748B] mb-2">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  item.isTerminal
                    ? "py-2.5 text-base font-mono font-semibold text-[#A5B4FC] border-b border-white/10 flex items-center gap-2"
                    : "py-2.5 text-base font-medium text-slate-200 border-b border-white/10 hover:text-white transition-colors rounded"
                }
              >
                {item.isTerminal && <Terminal className="h-4 w-4 text-[#818CF8]" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

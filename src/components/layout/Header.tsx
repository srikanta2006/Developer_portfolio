"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#capabilities" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
  { label: "Terminal", href: "/terminal", isTerminal: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[#070809] focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
      >
        Skip to main content
      </a>

      {/* RNR-Inspired Wide Floating Glass Pill Header */}
      <header className="fixed top-0 md:top-4 inset-x-0 z-50 md:px-6 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-6xl md:rounded-2xl bg-[#0C0E12]/85 backdrop-blur-xl border-b md:border border-white/[0.08] px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/50 flex items-center justify-between gap-4">
          {/* Left Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-sans transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg px-1"
          >
            <span className="font-heading text-sm sm:text-base font-extrabold tracking-tight text-[#ECEEF0]">
              SB<span className="text-[#3B82F6]">.</span>
            </span>
            <span className="hidden sm:inline text-xs font-medium text-[#94A3B8] group-hover:text-[#ECEEF0] transition-colors">
              Srikanta Bellamkonda
            </span>
          </Link>

          {/* Right Segmented Pill Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 rounded-xl bg-white/[0.03] border border-white/[0.06] p-1"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.isTerminal
                    ? "ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#2563EB]/15 text-[#60A5FA] border border-[#3B82F6]/25 hover:bg-[#2563EB]/25 transition-colors"
                    : "px-3 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#ECEEF0] hover:bg-white/[0.06] transition-colors rounded-lg"
                }
              >
                {item.isTerminal && <Terminal className="h-3 w-3 text-[#60A5FA]" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-4 top-16 z-50 bg-[#0C0E12]/95 backdrop-blur-2xl md:hidden flex flex-col p-5 rounded-2xl border border-white/[0.08] shadow-2xl shadow-black overflow-y-auto max-w-sm mx-auto"
        >
          <nav className="flex flex-col gap-1 text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#64748B] mb-2">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  item.isTerminal
                    ? "py-2.5 px-2 text-sm font-mono font-medium text-[#60A5FA] border-b border-white/[0.06] flex items-center gap-2"
                    : "py-2.5 px-2 text-sm font-medium text-[#CBD5E1] border-b border-white/[0.06] hover:text-white transition-colors"
                }
              >
                {item.isTerminal && <Terminal className="h-4 w-4 text-[#60A5FA]" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

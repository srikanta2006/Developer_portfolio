"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[#171717] focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6D5DFB]"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-[#FAFAFC]/90 backdrop-blur-md transition-colors">
        <Container>
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Wordmark / Brand Identity */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex flex-col font-sans transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-sm"
              >
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#0F172A]">
                  Srikanta Bellamkonda
                </span>
                <span className="hidden sm:inline-block font-mono text-[11px] text-[#64748B] tracking-wider uppercase">
                  Student Developer · Software & Applied AI
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-1 lg:gap-2"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors rounded-md hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#171717] hover:bg-black/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D5DFB]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 top-16 sm:top-20 z-30 bg-[#FAFAFC] md:hidden flex flex-col px-6 py-8 border-b border-[#E2E8F0] shadow-lg animate-in fade-in duration-150 overflow-y-auto"
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
                className="py-3 text-lg font-medium text-[#0F172A] border-b border-[#E2E8F0] hover:text-[#4F46E5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

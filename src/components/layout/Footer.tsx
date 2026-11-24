"use client";

import { Suspense } from "react";
import { ArrowUp } from "lucide-react";
import { Container } from "./Container";

function DynamicYear() {
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[#E2E8F0] bg-[#FAFAFC] py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            &copy; <Suspense fallback={<span>2026</span>}><DynamicYear /></Suspense> Srikanta Bellamkonda. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#4F46E5] font-medium transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </Container>
    </footer>
  );
}

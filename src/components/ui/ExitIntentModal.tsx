"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, MessageSquare, X } from "lucide-react";

const SESSION_KEY = "sb_exit_intent_shown";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "true") return;

    const mountedAt = Date.now();

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when cursor exits toward the top browser chrome after 4s on page
      if (e.clientY > 4) return;
      if (Date.now() - mountedAt < 4000) return;
      if (sessionStorage.getItem(SESSION_KEY) === "true") return;

      sessionStorage.setItem(SESSION_KEY, "true");
      setOpen(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!open) return null;

  const handleContactClick = () => {
    setOpen(false);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.getElementById("contact-name")?.focus();
      }, 400);
    } else {
      router.push("/#contact");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/[0.1] bg-[#0C0E12] p-6 sm:p-7 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#64748B] hover:text-[#ECEEF0] hover:bg-white/[0.06] transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-2 pr-6">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#60A5FA]">
            Before you go
          </span>
          <h2
            id="exit-intent-title"
            className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#ECEEF0]"
          >
            Want my resume or a quick chat?
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Grab a copy of my latest resume or send me a direct message before heading out.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-1">
          <a
            href="/resume.pdf"
            download="Srikanta_Bellamkonda_Resume.pdf"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold border border-[#3B82F6]/40 transition-colors"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          <button
            type="button"
            onClick={handleContactClick}
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-[#070809] hover:border-[#3B82F6]/50 hover:text-[#60A5FA] text-[#ECEEF0] text-sm font-medium border border-white/[0.1] transition-colors cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
            <span>Contact Directly</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-1 py-2 text-xs font-medium text-[#64748B] hover:text-[#CBD5E1] transition-colors cursor-pointer"
          >
            No, I&apos;m good
          </button>
        </div>
      </div>
    </div>
  );
}

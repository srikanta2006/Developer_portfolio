"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log isolated component rendering errors
    console.error("Application error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow">
        <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-red-400 bg-red-950/40 px-3 py-1 rounded-full border border-red-500/30">
            Rendering Issue Encountered
          </span>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-white">
            Something unexpected occurred.
          </h1>

          <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            An isolated component error occurred during rendering. You can attempt to re-render the view or return to the portfolio home.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button
              variant="primary"
              onClick={() => reset()}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Try Again</span>
            </Button>
            <Button variant="secondary" href="/" className="gap-2">
              <Home className="h-4 w-4" />
              <span>Return Home</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

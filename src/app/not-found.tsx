import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow">
        <div className="rounded-2xl border border-white/10 bg-[#0D121F]/80 backdrop-blur-xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              404 · Page Not Found
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            This page does not exist.
          </h1>

          <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            The page you are looking for may have been moved, renamed, or is currently being drafted.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button variant="primary" href="/" className="gap-2">
              <Home className="h-4 w-4" />
              <span>Return Home</span>
            </Button>
            <Button variant="secondary" href="/#work" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Browse Selected Work</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

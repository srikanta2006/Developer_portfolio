import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow">
        <div className="rounded-2xl border border-[#E8E5DD] bg-white p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F6F2] border border-[#E8E5DD]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              404 · Page Not Found
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#171717]">
            This editorial page does not exist.
          </h1>

          <p className="font-sans text-sm text-[#706E6B] leading-relaxed max-w-md mx-auto">
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

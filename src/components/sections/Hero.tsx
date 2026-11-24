import Image from "next/image";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

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

export function Hero() {
  return (
    <section className="pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Location Meta Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent" className="gap-1.5 py-1">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                <span>Student Developer · Software & Applied AI</span>
              </Badge>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#475569] font-mono">
                <MapPin className="h-3.5 w-3.5 text-[#475569]" aria-hidden="true" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Typography-Led Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#0F172A] leading-[1.14]">
                Building intelligent products through software and AI.
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                I&apos;m a Computer Science student and developer passionate about building intelligent products through software engineering and applied AI. I enjoy turning ideas into practical applications by combining full-stack development, AI-powered systems, and problem-solving.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="primary" size="lg" href="#work" className="gap-2">
                <span>Explore Featured Projects</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="mailto:srikantacvr@gmail.com"
                className="gap-2"
              >
                <Mail className="h-4 w-4 text-[#4F46E5]" aria-hidden="true" />
                <span>Get in touch</span>
              </Button>
            </div>

            {/* Verified Public Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#475569]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#64748B]">Connect:</span>
              <a
                href="https://github.com/srikanta2006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#4F46E5] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span className="text-[#CBD5E1]" aria-hidden="true">/</span>
              <a
                href="https://linkedin.com/in/srikanta-bellamkonda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#4F46E5] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#CBD5E1]" aria-hidden="true">/</span>
              <a
                href="mailto:srikantacvr@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#4F46E5] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
              >
                <Mail className="h-4 w-4 text-[#4F46E5]" />
                <span>srikantacvr@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Supporting Visual / Portrait Frame (Right Column) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-sm">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#F8FAFC]">
                <Image
                  src="/images/placeholder-portrait.svg"
                  alt="Srikanta Bellamkonda professional portrait placeholder"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Status Caption Tag */}
              <div className="absolute -bottom-3 -right-2 bg-white border border-[#E2E8F0] rounded-lg px-3 py-1.5 shadow-sm hidden sm:block">
                <span className="font-mono text-[11px] font-semibold text-[#0F172A]">
                  Student Developer · Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

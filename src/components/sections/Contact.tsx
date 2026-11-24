import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 5.8a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

export function Contact() {
  const emailAddress = "srikantacvr@gmail.com";

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[#E2E8F0] scroll-mt-20">
      <Container>
        <div className="max-w-2xl mx-auto rounded-2xl border border-[#E2E8F0] bg-white p-8 sm:p-12 shadow-sm text-center space-y-6">
          <SectionHeading
            number="05 / Contact"
            title="Let's build something intelligent."
            description="Open for software engineering challenges, multi-agent AI systems, and internship or full-time opportunities."
            className="text-center mx-auto"
          />

          {/* Effortless Contact Options */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${emailAddress}`}
              className="gap-2 text-sm sm:text-base px-6 py-3 w-full sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Send Email</span>
            </Button>
            <CopyButton
              text={emailAddress}
              label="Copy Email"
              className="py-3 px-4 text-sm w-full sm:w-auto justify-center"
            />
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#475569]">
            <a
              href="https://github.com/srikanta2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#4F46E5] font-medium transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-[#64748B]" />
            </a>

            <span className="text-[#CBD5E1]" aria-hidden="true">/</span>

            <a
              href="https://linkedin.com/in/srikanta-bellamkonda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#4F46E5] font-medium transition-colors"
            >
              <LinkedInIcon className="h-4 w-4 text-[#4F46E5]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3 text-[#64748B]" />
            </a>

            <span className="text-[#CBD5E1]" aria-hidden="true">/</span>

            <span className="inline-flex items-center gap-1.5 text-[#64748B] font-mono text-xs">
              <MapPin className="h-3.5 w-3.5 text-[#4F46E5]" />
              <span>Hyderabad, India</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

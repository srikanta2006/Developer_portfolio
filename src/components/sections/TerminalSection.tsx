import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Terminal } from "@/components/terminal/Terminal";

export function TerminalSection() {
  return (
    <section id="terminal" className="py-20 sm:py-28 border-t border-[#E2E8F0] scroll-mt-20">
      <Container>
        <SectionHeading
          number="06 / Interactive Shell"
          title="Portfolio Terminal"
          description="A deterministic command-line interface for engineers who prefer navigating via keyboard. Safe, sandboxed, and responsive."
        />

        <div className="max-w-4xl mx-auto">
          <Terminal />
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <div className="py-12 sm:py-16 space-y-20 sm:space-y-28">
      {/* Overview & Phase Status Hero */}
      <Container>
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="accent">Phase 1 In Progress</Badge>
            <Badge variant="sage">Light Theme Only</Badge>
            <Badge variant="neutral">Editorial System</Badge>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#171717] leading-[1.12]">
            Minimal Editorial Foundation & Site Shell
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#706E6B] leading-relaxed">
            Building intelligent products at the intersection of software and AI.
            This preview verifies typography pairings, color tokens, layout containers,
            sticky navigation, and accessible UI primitives before Phase 2 content assembly.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button variant="primary" href="#ui-primitives">
              Inspect UI Primitives
            </Button>
            <Button variant="secondary" href="#color-tokens">
              View Design Tokens
            </Button>
            <Button variant="outline" href="#work">
              Test Anchor Nav
            </Button>
          </div>
        </div>
      </Container>

      {/* Design System Tokens Showcase */}
      <Container id="color-tokens" className="scroll-mt-24">
        <div className="rounded-2xl border border-[#E8E5DD] bg-white p-6 sm:p-10 shadow-xs">
          <SectionHeading
            number="01 / Tokens"
            title="Color Palette & Contrast Hierarchy"
            description="Restrained editorial palette adhering to light-only design and WCAG AA contrast standards."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-2">
            {/* Page Background */}
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg border border-[#E8E5DD] bg-[#F7F6F2]" />
              <div className="text-xs">
                <p className="font-medium text-[#171717]">Page Background</p>
                <p className="font-mono text-[#706E6B]">#F7F6F2</p>
              </div>
            </div>

            {/* Surface */}
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg border border-[#E8E5DD] bg-[#FFFFFF]" />
              <div className="text-xs">
                <p className="font-medium text-[#171717]">Surface / Card</p>
                <p className="font-mono text-[#706E6B]">#FFFFFF</p>
              </div>
            </div>

            {/* Primary Text */}
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-[#171717]" />
              <div className="text-xs">
                <p className="font-medium text-[#171717]">Primary Text</p>
                <p className="font-mono text-[#706E6B]">#171717</p>
              </div>
            </div>

            {/* Secondary Text */}
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-[#706E6B]" />
              <div className="text-xs">
                <p className="font-medium text-[#171717]">Secondary (AA)</p>
                <p className="font-mono text-[#706E6B]">#706E6B</p>
              </div>
            </div>

            {/* Accent Violet */}
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-[#6D5DFB]" />
              <div className="text-xs">
                <p className="font-medium text-[#171717]">Accent Violet</p>
                <p className="font-mono text-[#706E6B]">#6D5DFB</p>
              </div>
            </div>

            {/* Muted Sage */}
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-[#B8C6A5]" />
              <div className="text-xs">
                <p className="font-medium text-[#171717]">Muted Sage</p>
                <p className="font-mono text-[#706E6B]">#B8C6A5</p>
              </div>
            </div>

            {/* Border */}
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-[#E8E5DD]" />
              <div className="text-xs">
                <p className="font-medium text-[#171717]">Border Token</p>
                <p className="font-mono text-[#706E6B]">#E8E5DD</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Typography Showcase */}
      <Container>
        <div className="rounded-2xl border border-[#E8E5DD] bg-white p-6 sm:p-10 shadow-xs space-y-8">
          <SectionHeading
            number="02 / Typography"
            title="Editorial Type System"
            description="A triple-font pairing combining Playfair Display (editorial serif), Inter (functional UI sans), and JetBrains Mono (technical code)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl border border-[#E8E5DD] bg-[#F7F6F2]/50 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#706E6B]">
                Display & Headings
              </span>
              <p className="font-display text-2xl sm:text-3xl font-normal text-[#171717]">
                Playfair Display
              </p>
              <p className="font-display text-sm text-[#706E6B] italic">
                “Building intelligent products at the intersection of software and AI.”
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E5DD] bg-[#F7F6F2]/50 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#706E6B]">
                Body & Interface
              </span>
              <p className="font-sans text-xl sm:text-2xl font-medium text-[#171717]">
                Inter Sans
              </p>
              <p className="font-sans text-sm text-[#706E6B] leading-relaxed">
                Clean, neutral, and readable across all viewport sizes and dense technical matrices.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E5DD] bg-[#F7F6F2]/50 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#706E6B]">
                Technical & Terminal
              </span>
              <p className="font-mono text-lg sm:text-xl font-medium text-[#171717]">
                JetBrains Mono
              </p>
              <p className="font-mono text-xs text-[#706E6B] leading-relaxed">
                $ git status --short<br />
                $ next build --turbopack
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* UI Primitives Showcase */}
      <Container id="ui-primitives" className="scroll-mt-24">
        <div className="rounded-2xl border border-[#E8E5DD] bg-white p-6 sm:p-10 shadow-xs space-y-10">
          <SectionHeading
            number="03 / Primitives"
            title="Reusable UI Components"
            description="Polymorphic, accessible button variants, tags, badges, and link styles."
          />

          {/* Button Variants */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              Button Variants & Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg">
                Primary Large
              </Button>
              <Button variant="primary" size="md">
                Primary Medium
              </Button>
              <Button variant="secondary" size="md">
                Secondary
              </Button>
              <Button variant="accent" size="md">
                Accent Violet
              </Button>
              <Button variant="outline" size="md">
                Outline
              </Button>
              <Button variant="ghost" size="md">
                Ghost Action
              </Button>
              <Button variant="secondary" size="sm">
                Small Size
              </Button>
            </div>
          </div>

          <div className="h-px w-full bg-[#E8E5DD]" />

          {/* Badge & Technology Tags */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              Technology & Status Badges
            </h3>
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="default">Next.js 16</Badge>
              <Badge variant="accent">TypeScript</Badge>
              <Badge variant="sage">Tailwind CSS</Badge>
              <Badge variant="neutral">Python</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="accent" size="sm">
                FastAPI
              </Badge>
              <Badge variant="sage" size="sm">
                YOLOv8
              </Badge>
            </div>
          </div>

          <div className="h-px w-full bg-[#E8E5DD]" />

          {/* Accessible Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#706E6B]">
              Text Links & Indicators
            </h3>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <TextLink href="#work">Internal case study link</TextLink>
              <TextLink href="https://github.com/srikanta2006" isExternal showIcon>
                External GitHub link
              </TextLink>
              <TextLink href="mailto:contact@srikanta.dev" isExternal showIcon>
                Contact email link
              </TextLink>
            </div>
          </div>
        </div>
      </Container>

      {/* Navigation Anchor Clearance Test Sections */}
      <div className="space-y-16">
        <Container id="about" className="scroll-mt-24">
          <div className="rounded-xl border border-dashed border-[#E8E5DD] bg-white/60 p-8 sm:p-12 text-center space-y-3">
            <Badge variant="neutral">Anchor Target</Badge>
            <h3 className="font-display text-2xl font-normal text-[#171717]">
              #about Section Anchor Target
            </h3>
            <p className="text-sm text-[#706E6B] max-w-lg mx-auto">
              This placeholder anchors the About section to verify sticky header clearance, smooth scrolling, and responsive container padding.
              Full biographical and engineering background will be implemented in Phase 2.
            </p>
          </div>
        </Container>

        <Container id="work" className="scroll-mt-24">
          <div className="rounded-xl border border-dashed border-[#E8E5DD] bg-white/60 p-8 sm:p-12 text-center space-y-3">
            <Badge variant="neutral">Anchor Target</Badge>
            <h3 className="font-display text-2xl font-normal text-[#171717]">
              #work Section Anchor Target
            </h3>
            <p className="text-sm text-[#706E6B] max-w-lg mx-auto">
              Selected Work (BizNexus, Burst, HackOS) card layouts and case study previews will be populated in Phase 2.
            </p>
          </div>
        </Container>

        <Container id="experience" className="scroll-mt-24">
          <div className="rounded-xl border border-dashed border-[#E8E5DD] bg-white/60 p-8 sm:p-12 text-center space-y-3">
            <Badge variant="neutral">Anchor Target</Badge>
            <h3 className="font-display text-2xl font-normal text-[#171717]">
              #experience Section Anchor Target
            </h3>
            <p className="text-sm text-[#706E6B] max-w-lg mx-auto">
              The vertical editorial timeline displaying education, hackathons, and technical training will be constructed in Phase 2.
            </p>
          </div>
        </Container>

        <Container id="contact" className="scroll-mt-24">
          <div className="rounded-xl border border-dashed border-[#E8E5DD] bg-white/60 p-8 sm:p-12 text-center space-y-3">
            <Badge variant="neutral">Anchor Target</Badge>
            <h3 className="font-display text-2xl font-normal text-[#171717]">
              #contact Section Anchor Target
            </h3>
            <p className="text-sm text-[#706E6B] max-w-lg mx-auto">
              Contact invitations, direct links, and social connections will be placed here in Phase 2.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

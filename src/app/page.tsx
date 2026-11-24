import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HackathonStats } from "@/components/sections/HackathonStats";
import { Capabilities } from "@/components/sections/Capabilities";
import { Experience } from "@/components/sections/Experience";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Hero with Recruiter Lens */}
      <Hero />

      {/* 2. About Identity & Bento Proof */}
      <About />

      {/* 3. Selected Work with Architecture Blueprints & Interactive Courtroom Simulator */}
      <SelectedWork />

      {/* 4. 12x Hackathon Battletest & Execution Velocity */}
      <HackathonStats />

      {/* 5. Technical Capabilities with Live Filter */}
      <Capabilities />

      {/* 6. Experience & Journey */}
      <Experience />

      {/* 7. GitHub Activity */}
      <GitHubActivity />

      {/* 8. Interactive Terminal */}
      <TerminalSection />

      {/* 9. Contact */}
      <Contact />
    </>
  );
}

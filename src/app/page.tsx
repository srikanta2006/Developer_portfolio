import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Capabilities } from "@/components/sections/Capabilities";
import { Experience } from "@/components/sections/Experience";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About */}
      <About />

      {/* 3. Selected Work */}
      <SelectedWork />

      {/* 4. Technical Capabilities */}
      <Capabilities />

      {/* 5. Experience & Journey */}
      <Experience />

      {/* 6. GitHub Activity */}
      <GitHubActivity />

      {/* 7. Interactive Terminal */}
      <TerminalSection />

      {/* 8. Contact */}
      <Contact />
    </>
  );
}

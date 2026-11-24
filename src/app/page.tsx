import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HackathonStats } from "@/components/sections/HackathonStats";
import { Capabilities } from "@/components/sections/Capabilities";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Hero with Recruiter Perspective Lens */}
      <Hero />

      {/* 2. About Identity & Bento Proof */}
      <About />

      {/* 3. Selected Work with Architecture Blueprints & Interactive Courtroom Simulator */}
      <SelectedWork />

      {/* 4. 7+ Hackathons & Tech Events Battletest */}
      <HackathonStats />

      {/* 5. Technical Capabilities with Dynamic Category Filter */}
      <Capabilities />

      {/* 6. Experience & Journey Timeline */}
      <Experience />

      {/* 7. Effortless Contact */}
      <Contact />
    </>
  );
}

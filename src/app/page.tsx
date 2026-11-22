import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Capabilities } from "@/components/sections/Capabilities";
import { Experience } from "@/components/sections/Experience";
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

      {/* 6. Contact */}
      <Contact />
    </>
  );
}

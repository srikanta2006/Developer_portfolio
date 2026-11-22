import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#E8E5DD]/70 scroll-mt-20">
      <Container>
        <SectionHeading
          number="02 / Selected Work"
          title="Featured Projects & Case Studies"
          description="A selection of software systems and AI applications engineered with verifiable architecture, explicit trade-offs, and clean interfaces."
        />

        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

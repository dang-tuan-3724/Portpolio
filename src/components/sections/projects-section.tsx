import MotionSection from "@/components/motion-section";
import ProjectCard from "./project-card";
import { projectsData } from "@/data/portfolioData";

export default function ProjectsSection() {
  return (
    <MotionSection id="projects" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.1}>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Featured <span className="text-accent">Projects</span>
        </h2>
        </MotionSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <MotionSection key={project.id} delay={0.2 + index * 0.1} className="h-full flex"> {/* Ensure cards stretch */}
              <ProjectCard project={project} />
            </MotionSection>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

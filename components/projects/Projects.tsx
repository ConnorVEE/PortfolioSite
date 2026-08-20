import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects"

export default function Projects () {
    return (
        <section id="projects" className="py-18">
            <Container>
                <h2 className="text-2xl font-bold text-primary md:text-3xl py-4">Projects</h2>

                <div className="grid gap-4 py-4 md:grid-cols-3">

                    {projects.map((project) => (
                        <ProjectCard
                          key={project.title}
                          title={project.title}
                          description={project.description}
                          technologies={project.technologies}
                          githubUrl={project.githubUrl}
                          liveUrl={project.liveUrl}
                        />
                    ))}
                    
                </div>

            </Container>
        </section>
    )
}
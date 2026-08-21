import { Project } from "@/data/projects"
import SkillPill from "../ui/SkillPill"

export default function ProjectCard ({title, description, technologies, githubUrl, liveUrl}: Project) {
    return (
        <div className="rounded-lg border border-secondary p-6">
            <h3 className="text-lg font-semibold text-primary">
                {title}
            </h3>

            <div className="flex flex-col gap-4">
                <p>
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <SkillPill key={technology}>
                            {technology}
                        </SkillPill>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a 
                      href={githubUrl}
                      className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        GitHub →
                    </a>

                    {liveUrl && (
                        <a 
                          href={liveUrl}
                          className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                        Live Demo →
                        </a>
                    )}
                </div>
            </div>
            
        </div>
    )
}
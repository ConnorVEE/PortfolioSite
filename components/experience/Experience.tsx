import Container from "../ui/Container";
import CompanyExperience from "./CompanyExperience";
import { experience } from "@/data/experience";

export default function Experience () {
    return (
        <section id="experience" className="py-18">
            <Container>
                <h2 className="text-2xl font-bold text-primary md:text-3xl py-4">Experience</h2>

                <div className="flex flex-col gap-2">
                    
                    {experience.map((job) => (
                        <CompanyExperience
                            key={job.company}
                            company={job.company}
                            employmentType={job.employmentType}
                            totalDuration={job.totalDuration}
                            positions={job.positions} 
                        />
                    ))}

                </div>
            </Container>
        </section>
    )
}
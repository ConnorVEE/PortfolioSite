import Container from "../ui/Container";
import SkillsCategory from "./SkillsCategory";
import { skillCategories } from "@/data/skills";

export default function Skills () {
    return (
        <section id="skills" className="py-18">
            <Container>
                <h2 className="text-2xl font-bold text-primary md:text-3xl py-4">Skills</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {skillCategories.map((category) => (
                        <SkillsCategory
                            key={category.name}
                            name={category.name}
                            skills={category.skills}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}
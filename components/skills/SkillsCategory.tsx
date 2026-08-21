import { SkillCategory } from "@/data/skills" 
import SkillPill from "@/components/ui/SkillPill"

export default function SkillsCategory ({name, skills}: SkillCategory) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-primary">{name}</h3>

            <div className="flex flex-wrap gap-2 py-3">
                {skills.map((skill) => (
                    <SkillPill key={skill}>
                        {skill}
                    </SkillPill>
                ))}
            </div>
        </div>
    )
}
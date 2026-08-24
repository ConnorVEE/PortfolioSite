import Position from "./Position"
import { ExperienceType } from "@/data/experience";

export default function CompanyExperience ({company, employmentType, totalDuration, positions}: ExperienceType) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-secondary md:text-2xl">{company}</h3>
                <span>{employmentType} · {totalDuration}</span>
            </div>

            <div className="flex flex-col gap-6 border-l-2 border-secondary pl-6">
                {positions.map((position) => (
                    <Position 
                        key={position.title}
                        {...position}
                    />
                ))}
            </div>
        </div>
    )
}
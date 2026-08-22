import Position from "./Position"
import { ExperienceType } from "@/data/experience";

export default function CompanyExperience ({company, employmentType, totalDuration, positions}: ExperienceType) {
    return (
        <div className="p-3">
            <h3 className="text-xl font-bold text-secondary md:text-2xl">{company}</h3>

            <span>{employmentType} · {totalDuration}</span>

            <div className="flex flex-col gap-4">
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
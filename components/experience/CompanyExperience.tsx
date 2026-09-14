import Position from "./Position"
import { ExperienceType, getCompanyDuration } from "@/data/experience";

export default function CompanyExperience ({company, employmentType, positions}: ExperienceType) {
    const totalDuration = getCompanyDuration(positions);

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
import { PositionType } from "@/data/experience";

export default function Position ({title, startDate, endDate, duration, location, responsibilities}: PositionType) {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h4 className="text-lg font-bold text-primary md:text-xl">{title}</h4>

            <div className="flex flex-col">
                <span>{startDate} - {endDate} · {duration}</span>
                <span>{location}</span>
            </div>

            <ul className="list-disc pl-5">
                {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export type PositionType = {
    title: string;
    startDate: string;
    endDate?: string;
    location: string;
    responsibilities: string[];
  };
  
  export type ExperienceType = {
    company: string;
    employmentType: string;
    positions: PositionType[];
  };

  // 1. Core duration calculator
export function calculateDuration(startDateStr: string, endDateStr?: string): string {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  totalMonths += 1; // Include starting month

  if (totalMonths <= 0) return "1 mo";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearStr = years > 0 ? `${years} ${years === 1 ? "yr" : "yrs"}` : "";
  const monthStr = months > 0 ? `${months} ${months === 1 ? "mo" : "mos"}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

// 2. Company-wide duration calculator
export function getCompanyDuration(positions: PositionType[]): string {
  if (!positions || !positions.length) return "";

  const earliestStart = positions[positions.length - 1].startDate;
  const hasCurrentPosition = positions.some((p) => !p.endDate);
  const latestEnd = hasCurrentPosition ? undefined : positions[0].endDate;

  return calculateDuration(earliestStart, latestEnd);
}

  export const experience: ExperienceType[] = [
    {
      company: "Starbucks",
      employmentType: "Part-time",
      positions: [
        {
          title: "Shift Supervisor",
          startDate: "Oct 2025",
          location: "Kennesaw, Georgia, United States",
          responsibilities: [
            "I lead my team of partners to deliver an exceptional customer experience while meeting production and operational goals",
            "I strategically manage partner shifts, breaks, and task assignments to maximize efficiency and support team objectives",
            "I oversee store closing and opening procedures to ensure a clean, organized, and prepared environment for the next day",
            "I accurately manage cash handling, including counting down drawers and the safe, to maintain accountability and compliance",
            "I support and coach partners in real-time, providing guidance and feedback to foster professional growth",
          ],
        },
        {
          title: "Barista",
          startDate: "June 2022",
          endDate: "Oct 2025",
          location: "Georgia, United States",
          responsibilities: [
            "Craft and prepare drinks and food to the specifications of customers",
            "Maintain a clean workspace per all safety standards and regulations",
            "Process register transactions",
            "Greet customers and recommend drink options based on their stated preferences and dietary needs",
          ],
        },
      ],
    },
  ];  
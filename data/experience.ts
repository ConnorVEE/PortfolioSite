export type PositionType = {
    title: string;
    startDate: string;
    endDate: string;
    duration: string;
    location: string;
    responsibilities: string[];
  };
  
  export type ExperienceType = {
    company: string;
    employmentType: string;
    totalDuration: string;
    positions: PositionType[];
  };

  export const experience: ExperienceType[] = [
    {
      company: "Starbucks",
      employmentType: "Part-time",
      totalDuration: "4 yrs 3 mos",
      positions: [
        {
          title: "Shift Supervisor",
          startDate: "Oct 2025",
          endDate: "Present",
          duration: "11 mos",
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
          duration: "3 yrs 5 mos",
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
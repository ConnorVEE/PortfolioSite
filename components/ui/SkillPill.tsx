type SkillPillProps = {
    children: React.ReactNode;
  };
  
  export default function SkillPill({ children }: SkillPillProps) {
    return (
      <span className="rounded-full border border-secondary px-3 py-1 text-sm text-secondary">
        {children}
      </span>
    );
  }
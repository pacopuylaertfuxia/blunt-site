interface SectionLabelProps {
  num: string;
  label?: string;
}

export default function SectionLabel({ num, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span
        className="inline-block w-5 h-px"
        style={{ background: "#00C2FF" }}
      />
      <span
        className="font-display text-xs tracking-[0.3em]"
        style={{ color: "#00C2FF" }}
      >
        {num}
        {label ? ` — ${label}` : ""}
      </span>
    </div>
  );
}

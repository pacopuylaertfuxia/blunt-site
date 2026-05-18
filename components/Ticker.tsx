const ITEMS = [
  "RTD Creatine",
  "7.8 / 10",
  "Europe First",
  "Copenhagen",
  "Competition Gap 9/10",
  "Strong → Go",
  "180M TAM",
  "Padel · Cycling · CrossFit",
  "First Mover",
  "15% CAGR",
];

export default function Ticker() {
  const text = [...ITEMS, ...ITEMS].join("  ·  ");

  return (
    <div
      className="overflow-hidden select-none"
      style={{
        background: "#00C2FF",
        borderTop: "1px solid rgba(0,12,24,0.12)",
        borderBottom: "1px solid rgba(0,12,24,0.12)",
        padding: "11px 0",
      }}
    >
      <div
        className="flex whitespace-nowrap font-display tracking-[0.18em] text-sm"
        style={{
          color: "#001824",
          animation: "ticker 22s linear infinite",
          width: "max-content",
        }}
      >
        <span className="mr-8">{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

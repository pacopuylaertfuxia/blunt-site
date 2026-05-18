"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        className="font-display text-xl tracking-[0.15em]"
        style={{ color: "rgba(232,240,245,0.3)" }}
      >
        BLUNT<span style={{ color: "#00C2FF" }}>.</span>
      </div>

      <div
        className="flex items-center gap-6 flex-wrap justify-center"
      >
        {["Market", "Competition", "Scores", "Monetization", "Verdict"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-display text-xs tracking-[0.2em] transition-colors duration-150"
            style={{ color: "rgba(232,240,245,0.25)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(232,240,245,0.6)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(232,240,245,0.25)")
            }
          >
            {item}
          </a>
        ))}
      </div>

      <p
        className="text-xs font-light"
        style={{ color: "rgba(232,240,245,0.25)" }}
      >
        Market Opportunity Analysis — Confidential · {year}
      </p>
    </footer>
  );
}

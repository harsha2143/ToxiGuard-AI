const METRICS = [
  { key: "before",              label: "Before",     color: "#dc2626", bg: "rgba(220,38,38,0.06)",  border: "rgba(220,38,38,0.15)"  },
  { key: "after",               label: "After",      color: "#16a34a", bg: "rgba(22,163,74,0.06)",  border: "rgba(22,163,74,0.15)"  },
  { key: "reduction",           label: "Reduction",  color: "#2563eb", bg: "rgba(37,99,235,0.06)",  border: "rgba(37,99,235,0.15)"  },
  { key: "semantic_similarity", label: "Similarity", color: "#4a7c59", bg: "rgba(74,124,89,0.07)",  border: "rgba(74,124,89,0.18)"  },
];

export default function EvaluationGrid({ evaluation }) {
  return (
    <div style={{
      background: "var(--ivory-card)",
      border: "1px solid var(--ivory-border)",
      borderRadius: 16, padding: "22px 24px",
      boxShadow: "0 2px 16px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.9)",
      flex: 1, display: "flex", flexDirection: "column",
    }}>
      <div className="section-title">Evaluation Metrics</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1 }}>
        {METRICS.map((m) => (
          <div key={m.key} className="metric-tile" style={{ background: m.bg, border: `1px solid ${m.border}` }}>
            <div style={{
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: m.color,
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: 10,
              display: "flex", alignItems: "center", gap: 5,
            }}>
              <span style={{ width: 12, height: 1.5, background: m.color, display: "inline-block", borderRadius: 2 }} />
              {m.label}
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30, fontWeight: 600,
              color: m.color, lineHeight: 1, letterSpacing: "-0.5px",
            }}>
              {evaluation[m.key]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
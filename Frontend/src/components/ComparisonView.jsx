export default function ComparisonView({ original, refined }) {
  return (
    <div style={{
      background: "var(--ivory-card)",
      border: "1px solid var(--ivory-border)",
      borderRadius: 16, padding: "22px 24px",
      boxShadow: "0 2px 16px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.9)",
    }}>
      <div className="section-title">Side-by-Side Comparison</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

        {/* Original */}
        <div style={{
          background: "rgba(220,38,38,0.04)",
          border: "1px solid rgba(220,38,38,0.12)",
          borderLeft: "2.5px solid #dc2626",
          borderRadius: "0 12px 12px 0",
          padding: "16px 18px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#dc2626",
              boxShadow: "0 0 0 3px rgba(220,38,38,0.15)",
            }} />
            <span style={{
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.18em", color: "#dc2626",
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase",
            }}>Original</span>
          </div>
          <p style={{
            margin: 0, fontSize: 13, lineHeight: 1.8,
            color: "var(--ink-mid)",
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
          }}>
            {original}
          </p>
        </div>

        {/* Refined */}
        <div style={{
          background: "var(--sage-pale)",
          border: "1px solid var(--border)",
          borderLeft: "2.5px solid var(--sage)",
          borderRadius: "0 12px 12px 0",
          padding: "16px 18px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--sage)",
              boxShadow: "0 0 0 3px rgba(74,124,89,0.2)",
            }} />
            <span style={{
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.18em", color: "var(--sage)",
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase",
            }}>Refined</span>
          </div>
          <p style={{
            margin: 0, fontSize: 13, lineHeight: 1.8,
            color: "var(--ink)",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic", fontWeight: 400,
          }}>
            {refined}
          </p>
        </div>

      </div>
    </div>
  );
}
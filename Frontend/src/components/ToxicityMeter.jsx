export default function ToxicityMeter({ intensity }) {
  const pct = (intensity * 100).toFixed(1);

  const getCfg = () => {
    if (intensity > 0.6) return { label: "High Toxicity",  color: "#dc2626", track: "rgba(220,38,38,0.1)",   bar: "#dc2626" };
    if (intensity > 0.3) return { label: "Moderate",       color: "#d97706", track: "rgba(217,119,6,0.1)",   bar: "#d97706" };
    return                       { label: "Low / Neutral", color: "#16a34a", track: "rgba(22,163,74,0.1)",   bar: "#16a34a" };
  };

  const cfg = getCfg();

  return (
    <div>
      <div className="section-title">Toxicity Level</div>

      <div style={{
        background: cfg.track, border: `1px solid ${cfg.color}22`,
        borderRadius: 12, padding: "16px 18px", marginBottom: 16,
        display: "flex", alignItems: "flex-end", gap: 10,
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 52, fontWeight: 600,
          color: cfg.color, lineHeight: 1, letterSpacing: "-2px",
        }}>
          {pct}
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 15, color: cfg.color, opacity: 0.6, paddingBottom: 7,
        }}>%</span>
        <div style={{ paddingBottom: 8, marginLeft: 4 }}>
          <div style={{
            display: "inline-flex", padding: "3px 10px", borderRadius: 20,
            background: `${cfg.color}15`, border: `1px solid ${cfg.color}25`,
            fontSize: 9, fontWeight: 600, color: cfg.color,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            {cfg.label}
          </div>
        </div>
      </div>

      <div style={{ height: 5, borderRadius: 5, background: "#e8ddd0", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 5,
          width: `${pct}%`, background: cfg.bar,
          transition: "width 1.2s cubic-bezier(.22,1,.36,1)",
        }} />
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", marginTop: 5,
        fontSize: 9, color: "#b5a898",
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        {["0", "25", "50", "75", "100"].map(v => <span key={v}>{v}</span>)}
      </div>
    </div>
  );
}
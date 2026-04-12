const EMOTIONS = {
  anger:   { emoji: "😤", color: "#dc2626", bg: "rgba(220,38,38,0.07)"   },
  sadness: { emoji: "😢", color: "#2563eb", bg: "rgba(37,99,235,0.07)"   },
  joy:     { emoji: "😊", color: "#16a34a", bg: "rgba(22,163,74,0.07)"   },
  fear:    { emoji: "😨", color: "#7c3aed", bg: "rgba(124,58,237,0.07)"  },
  disgust: { emoji: "😖", color: "#b45309", bg: "rgba(180,83,9,0.07)"    },
};

export default function EmotionCard({ emotion }) {
  const key = emotion.label.toLowerCase();
  const cfg = EMOTIONS[key] || { emoji: "😐", color: "#4a7c59", bg: "rgba(74,124,89,0.07)" };
  const pct = (emotion.confidence * 100).toFixed(1);
  const circumference = 2 * Math.PI * 32;
  const dash = (emotion.confidence * circumference).toFixed(2);

  return (
    <div>
      <div className="section-title">Detected Emotion</div>

      <div style={{
        display: "flex", alignItems: "center", gap: 18,
        background: cfg.bg, border: `1px solid ${cfg.color}20`,
        borderRadius: 12, padding: "16px 18px",
      }}>
        <div style={{ position: "relative", flexShrink: 0, width: 76, height: 76 }}>
          <svg width="76" height="76" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="38" cy="38" r="32" fill="none" stroke="#e8ddd0" strokeWidth="5" />
            <circle cx="38" cy="38" r="32" fill="none"
              stroke={cfg.color} strokeWidth="5" strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
              style={{ transition: "stroke-dasharray 1.2s cubic-bezier(.22,1,.36,1)" }}
            />
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26,
          }}>
            {cfg.emoji}
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 30, fontWeight: 600,
            color: cfg.color, lineHeight: 1,
            letterSpacing: "-0.3px", marginBottom: 8,
          }}>
            {emotion.label.charAt(0).toUpperCase() + emotion.label.slice(1)}
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center",
            padding: "4px 12px", borderRadius: 20,
            background: `${cfg.color}12`, border: `1px solid ${cfg.color}25`,
            fontSize: 10, fontWeight: 500, color: cfg.color,
            fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em",
          }}>
            {pct}% confidence
          </div>
        </div>
      </div>
    </div>
  );
}
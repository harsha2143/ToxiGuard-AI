import { Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function RewriteCard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: "var(--ivory-card)",
      border: "1px solid var(--ivory-border)",
      borderRadius: 16, padding: "22px 24px",
      boxShadow: "0 2px 16px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.9)",
      flex: 1, display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
    }}>
      {/* Sage corner wash */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 100, height: 100,
        background: "radial-gradient(circle at top right, rgba(74,124,89,0.06), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "var(--sage)",
        }}>
          <div style={{
            width: 26, height: 26, borderRadius: 7,
            background: "var(--sage-pale)",
            border: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Sparkles style={{ width: 12, height: 12, color: "var(--sage)" }} />
          </div>
          Refined Output
        </div>
        <button onClick={handleCopy} className={`copy-btn ${copied ? "copied" : ""}`}>
          {copied
            ? <><Check style={{ width: 12, height: 12 }} /> Copied</>
            : <><Copy style={{ width: 12, height: 12 }} /> Copy</>
          }
        </button>
      </div>

      <div style={{
        flex: 1, padding: "14px 16px",
        background: "var(--sage-pale)",
        border: "1px solid var(--border-dim)",
        borderRadius: 10,
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 16, fontStyle: "italic",
          fontWeight: 400, lineHeight: 1.9,
          color: "var(--ink)", margin: 0,
          letterSpacing: "0.01em",
        }}>
          {text}
        </p>
      </div>
    </div>
  );
}
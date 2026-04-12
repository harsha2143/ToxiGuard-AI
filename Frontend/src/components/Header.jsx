import { ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%" }}>
      <div style={{
        width: 34, height: 34, borderRadius: 9, flexShrink: 0,
        background: "linear-gradient(135deg, #4a7c59, #7ab08a)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 3px 12px rgba(74,124,89,0.28)",
      }}>
        <ShieldCheck style={{ width: 18, height: 18, color: "#fff" }} />
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 21, fontWeight: 600,
          color: "#1c2b1e", letterSpacing: "-0.2px",
        }}>
          ToxiGuard
        </span>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 21, fontStyle: "italic", fontWeight: 400,
          color: "#4a7c59",
        }}>
          AI
        </span>
      </div>

      <div style={{ width: 1, height: 20, background: "#e8ddd0", margin: "0 4px" }} />

      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, fontWeight: 400,
        color: "#7a9480", letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>
        Adaptive Text Refinement Engine
      </span>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%",
          background: "#4a7c59",
          boxShadow: "0 0 0 3px rgba(74,124,89,0.2)",
        }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, color: "#4a7c59",
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          Online
        </span>
      </div>
    </div>
  );
}
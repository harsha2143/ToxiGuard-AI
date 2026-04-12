import { useState } from "react";
import Header from "./components/Header";
import TextInputCard from "./components/TextInputCard";
import ToxicityMeter from "./components/ToxicityMeter";
import EmotionCard from "./components/EmotionCard";
import RewriteCard from "./components/RewriteCard";
import EvaluationGrid from "./components/EvaluationGrid";
import ComparisonView from "./components/ComparisonView";

const API_URL = "http://127.0.0.1:8000/analyze";

const TABS = [
  { id: "analysis",    label: "Analysis",    icon: "◎" },
  { id: "refinement",  label: "Refinement",  icon: "✦" },
  { id: "comparison",  label: "Comparison",  icon: "⇌" },
];

export default function App() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("professional");
  const [context, setContext] = useState("social_media");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("analysis");

  const analyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, style, context }),
      });
      const data = await res.json();
      setResult(data);
      setActiveTab("analysis");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Nunito+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; margin: 0; }

        :root {
          --cream:        #fdf6ee;
          --cream-deep:   #f7ede0;
          --cream-card:   #fffaf4;
          --cream-border: #e9d8c4;
          --terra:        #b85c38;
          --terra-mid:    #c96b45;
          --terra-light:  #d98060;
          --terra-pale:   #faeee7;
          --ink:          #2a1a0e;
          --ink-mid:      #3d2812;
          --muted:        #9a7a62;
          --border:       rgba(184,92,56,0.15);
          --border-dim:   rgba(184,92,56,0.08);
          --shadow:       rgba(42,26,14,0.1);
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes tabReveal {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%,100% { opacity:0.5; transform:scale(1); }
          50%     { opacity:1;   transform:scale(1.2); }
        }
        @keyframes progressFill {
          from { width: 0%; }
        }

        .reveal { animation: fadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }
        .tab-content { animation: tabReveal 0.4s cubic-bezier(.22,1,.36,1) both; }
        .d1 { animation-delay: 0.04s; }
        .d2 { animation-delay: 0.09s; }
        .d3 { animation-delay: 0.14s; }
        .d4 { animation-delay: 0.19s; }

        .card {
          background: var(--cream-card);
          border: 1px solid var(--cream-border);
          border-radius: 14px;
          box-shadow: 0 2px 14px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.85);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          border-color: rgba(184,92,56,0.25);
          box-shadow: 0 4px 22px var(--shadow);
        }

        .section-label {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--terra);
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 16px;
        }
        .section-label::before {
          content: '';
          width: 14px; height: 2px;
          background: var(--terra);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .text-input {
          width: 100%; resize: none; outline: none;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 14px; line-height: 1.75; font-weight: 400;
          color: var(--ink);
          background: var(--cream);
          border: 1px solid var(--cream-border);
          border-radius: 10px;
          padding: 14px 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .text-input:focus {
          border-color: var(--terra-light);
          box-shadow: 0 0 0 3px rgba(184,92,56,0.1);
        }
        .text-input::placeholder { color: #c4a98a; }

        .select-field {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          color: var(--ink-mid);
          background: var(--cream);
          border: 1px solid var(--cream-border);
          border-radius: 8px;
          padding: 8px 12px;
          outline: none; cursor: pointer;
          transition: border-color 0.2s;
          appearance: none;
        }
        .select-field:focus { border-color: var(--terra-light); }

        .analyze-btn {
          background: var(--terra);
          color: #fff;
          border: none; cursor: pointer;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.05em;
          padding: 12px 28px; border-radius: 10px;
          display: flex; align-items: center; gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(184,92,56,0.28);
          white-space: nowrap;
        }
        .analyze-btn:hover:not(:disabled) {
          background: var(--terra-mid);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(184,92,56,0.36);
        }
        .analyze-btn:active:not(:disabled) { transform: translateY(0); }
        .analyze-btn:disabled { opacity: 0.45; cursor: not-allowed; }

        .copy-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 6px 14px; border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--terra);
          font-size: 12px; font-weight: 600; cursor: pointer;
          font-family: 'Nunito Sans', sans-serif;
          transition: all 0.2s ease;
        }
        .copy-btn:hover { background: var(--terra-pale); border-color: var(--terra-light); }
        .copy-btn.copied { color: #15803d; border-color: rgba(21,128,61,0.3); }

        .tab-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .tab-btn:hover { color: var(--terra); background: var(--terra-pale); }
        .tab-btn.active {
          color: var(--terra);
          background: var(--terra-pale);
          border-color: rgba(184,92,56,0.2);
          box-shadow: 0 2px 8px rgba(184,92,56,0.1);
        }
        .tab-btn .tab-icon {
          font-size: 14px;
          opacity: 0.8;
        }

        .metric-tile {
          border-radius: 12px; padding: 16px 18px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          cursor: default;
        }
        .metric-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--shadow);
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: var(--cream-deep); }
        ::-webkit-scrollbar-thumb { background: var(--terra-light); border-radius: 4px; }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--cream-border), transparent);
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "var(--cream)",
        fontFamily: "'Nunito Sans', sans-serif",
        color: "var(--ink)",
      }}>

        {/* ── TOP BAR ── */}
        <div style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "rgba(253,246,238,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--cream-border)",
          padding: "0 32px", height: 58,
          display: "flex", alignItems: "center",
          boxShadow: "0 1px 0 rgba(255,255,255,0.8)",
        }}>
          <Header />
        </div>

        {/* ── MAIN ── */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 60px" }}>

          {/* Input section */}
          <div className="card reveal" style={{ padding: "28px 32px", marginBottom: 24 }}>

            {/* Top row: tagline + analyze button */}
            <div style={{
              display: "flex", alignItems: "flex-start",
              justifyContent: "space-between", gap: 20, marginBottom: 24,
            }}>
              <div>
                <h2 style={{
                  fontFamily: "'Lora', serif",
                  fontSize: 22, fontWeight: 500,
                  color: "var(--ink)", lineHeight: 1.3,
                  marginBottom: 5,
                }}>
                  Detect. Refine.{" "}
                  <span style={{ color: "var(--terra)", fontStyle: "italic" }}>
                    Communicate better.
                  </span>
                </h2>
                <p style={{
                  fontSize: 12, color: "var(--muted)",
                  fontWeight: 400, lineHeight: 1.6,
                }}>
                  Paste any text to analyze its toxicity, detect emotion, and get a refined version.
                </p>
              </div>
              <button
                className="analyze-btn"
                onClick={analyze}
                disabled={loading || !text.trim()}
                style={{ flexShrink: 0, marginTop: 4 }}
              >
                {loading ? (
                  <>
                    <div style={{
                      width: 14, height: 14, borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTop: "2px solid #fff",
                      animation: "spin 0.8s linear infinite",
                    }} />
                    Analyzing...
                  </>
                ) : (
                  <> ◎ &nbsp;Analyze Text </>
                )}
              </button>
            </div>

            <div className="divider" style={{ marginBottom: 20 }} />

            {/* Textarea + selects */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <textarea
                className="text-input"
                rows={4}
                placeholder="Paste or type the text you want to analyze for toxicity..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Tone Style
                  </span>
                  <select value={style} onChange={(e) => setStyle(e.target.value)} className="select-field">
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="formal">Formal</option>
                    <option value="empathetic">Empathetic</option>
                    <option value="neutral">Neutral</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Context
                  </span>
                  <select value={context} onChange={(e) => setContext(e.target.value)} className="select-field">
                    <option value="social_media">Social Media</option>
                    <option value="workplace">Workplace</option>
                    <option value="customer_review">Customer Review</option>
                  </select>
                </div>

                {/* Result summary pills */}
                {result && !loading && (
                  <div style={{ display: "flex", gap: 8, marginLeft: "auto", flexWrap: "wrap" }}>
                    {[
                      { label: "Toxicity", value: `${(result.intensity * 100).toFixed(1)}%`, color: result.intensity > 0.6 ? "#b91c1c" : result.intensity > 0.3 ? "#b45309" : "#15803d" },
                      { label: "Emotion",  value: result.emotion.label.charAt(0).toUpperCase() + result.emotion.label.slice(1), color: "var(--terra)" },
                    ].map(item => (
                      <div key={item.label} style={{
                        padding: "6px 14px", borderRadius: 20,
                        background: "var(--cream-deep)",
                        border: "1px solid var(--cream-border)",
                        display: "flex", alignItems: "center", gap: 6,
                      }}>
                        <span style={{ fontSize: 10, color: "var(--muted)", fontWeight: 600, letterSpacing: "0.08em" }}>
                          {item.label}
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── TABS ── */}
          {result && !loading && (
            <div className="reveal d1">

              {/* Tab bar */}
              <div style={{
                display: "flex", gap: 6,
                padding: "6px",
                background: "var(--cream-deep)",
                border: "1px solid var(--cream-border)",
                borderRadius: 14,
                marginBottom: 20,
                width: "fit-content",
              }}>
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="tab-icon">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* ── TAB: ANALYSIS ── */}
              {activeTab === "analysis" && (
                <div className="tab-content" style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
                }}>
                  <div className="card d1 reveal" style={{ padding: "24px 26px" }}>
                    <ToxicityMeter intensity={result.intensity} />
                  </div>
                  <div className="card d2 reveal" style={{ padding: "24px 26px" }}>
                    <EmotionCard emotion={result.emotion} />
                  </div>
                </div>
              )}

              {/* ── TAB: REFINEMENT ── */}
              {activeTab === "refinement" && (
                <div className="tab-content" style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignItems: "stretch",
                }}>
                  <div className="d1 reveal" style={{ display: "flex", flexDirection: "column" }}>
                    <RewriteCard text={result.rephrased} />
                  </div>
                  {result.evaluation && (
                    <div className="d2 reveal" style={{ display: "flex", flexDirection: "column" }}>
                      <EvaluationGrid evaluation={result.evaluation} />
                    </div>
                  )}
                </div>
              )}

              {/* ── TAB: COMPARISON ── */}
              {activeTab === "comparison" && (
                <div className="tab-content d1 reveal">
                  <ComparisonView original={text} refined={result.rephrased} />
                </div>
              )}

            </div>
          )}

          {/* Empty state */}
          {!result && !loading && (
            <div className="reveal d2" style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "60px 24px", gap: 16,
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                border: "1px solid var(--cream-border)",
                background: "var(--cream-card)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, color: "var(--terra)",
                boxShadow: "0 4px 20px var(--shadow)",
              }}>
                ◎
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: 17, fontWeight: 400,
                  color: "var(--ink-mid)", marginBottom: 6,
                }}>
                  Enter text above and click Analyze
                </p>
                <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 400 }}>
                  Results will appear here in tabbed sections
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
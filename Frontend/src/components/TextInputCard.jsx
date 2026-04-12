import { ScanText } from "lucide-react";

export default function TextInputCard({ text, setText, style, setStyle, context, setContext, onAnalyze, loading }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

      <div className="section-title">Input Text</div>

      <textarea
        className="text-input"
        rows={5}
        placeholder="Paste or type text to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div>
          <div style={{
            fontSize: 9, fontFamily: "'JetBrains Mono', monospace",
            color: "#7a9480", letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 5,
          }}>Tone Style</div>
          <select value={style} onChange={(e) => setStyle(e.target.value)} className="select-field" style={{ width: "100%" }}>
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="formal">Formal</option>
            <option value="empathetic">Empathetic</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>
        <div>
          <div style={{
            fontSize: 9, fontFamily: "'JetBrains Mono', monospace",
            color: "#7a9480", letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 5,
          }}>Context</div>
          <select value={context} onChange={(e) => setContext(e.target.value)} className="select-field" style={{ width: "100%" }}>
            <option value="social_media">Social Media</option>
            <option value="workplace">Workplace</option>
            <option value="customer_review">Customer Review</option>
          </select>
        </div>
      </div>

      <button className="analyze-btn" onClick={onAnalyze} disabled={loading || !text.trim()}>
        <ScanText style={{ width: 15, height: 15 }} />
        Analyze Text
      </button>
    </div>
  );
}
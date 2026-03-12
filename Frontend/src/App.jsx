import { useState } from "react";
import Header from "./components/Header";
import TextInputCard from "./components/TextInputCard";
import ToxicityMeter from "./components/ToxicityMeter";
import EmotionCard from "./components/EmotionCard";
import RewriteCard from "./components/RewriteCard";
import EvaluationGrid from "./components/EvaluationGrid";
import ComparisonView from "./components/ComparisonView";

const API_URL = "http://127.0.0.1:8000/analyze";

export default function App() {

  const [text, setText] = useState("");
  const [style, setStyle] = useState("professional");
  const [context, setContext] = useState("social_media");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, style, context })
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">

        <Header />

        <TextInputCard
          text={text}
          setText={setText}
          style={style}
          setStyle={setStyle}
          context={context}
          setContext={setContext}
          onAnalyze={analyze}
        />

        {result && (
          <>
            <ToxicityMeter intensity={result.intensity} />
            <EmotionCard emotion={result.emotion} />
            <RewriteCard text={result.rephrased} />
            {result.evaluation && (
              <EvaluationGrid evaluation={result.evaluation} />
            )}
            <ComparisonView
              original={text}
              refined={result.rephrased}
            />
          </>
        )}

      </div>
    </div>
  );
}

import { Sparkles } from "lucide-react";

export default function RewriteCard({ text }) {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-8 rounded-3xl shadow-2xl overflow-hidden">

      <Sparkles className="absolute top-4 right-4 opacity-20 w-12 h-12" />

      <h2 className="font-bold mb-3">Refined Version</h2>
      <p className="text-lg italic leading-relaxed">{text}</p>
    </div>
  );
}
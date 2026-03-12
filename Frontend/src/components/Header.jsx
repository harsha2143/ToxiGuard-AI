import { Shield } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg">
        <Shield className="text-white w-8 h-8 space-y-10 animate-faded-in" />
      </div>
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight space-y-10 animate-fade-in">
          ToxiGuard <span className="text-indigo-600">AI</span>
        </h1>
        <p className="text-slate-500 text-sm space-y-1 animate-faded-in">
          Adaptive Emotion-Guided Toxic Text Refinement
        </p>
      </div>
    </div>
  );
}
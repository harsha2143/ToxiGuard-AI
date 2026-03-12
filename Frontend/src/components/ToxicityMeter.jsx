export default function ToxicityMeter({ intensity }) {
  const percentage = (intensity * 100).toFixed(1);

  const getColor = () => {
    if (intensity > 0.6) return "from-red-500 to-rose-600";
    if (intensity > 0.3) return "from-yellow-400 to-orange-500";
    return "from-green-400 to-emerald-600";
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border space-y-4">
      <div className="flex justify-between">
        <h2 className="font-bold">Toxicity Level</h2>
        <span className="font-semibold">{percentage}%</span>
      </div>

      <div className="h-5 bg-gray-200 rounded-full overflow-hidden relative">
        <div
          className={`h-full bg-gradient-to-r ${getColor()} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-sm text-slate-500">
        {intensity > 0.6
          ? "High Toxicity"
          : intensity > 0.3
          ? "Moderate Toxicity"
          : "Low / Neutral"}
      </p>
    </div>
  );
}
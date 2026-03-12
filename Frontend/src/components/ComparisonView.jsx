export default function ComparisonView({ original, refined }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white p-6 rounded-3xl shadow-lg border">
        <h2 className="font-bold mb-3 text-red-500">Original Text</h2>
        <p className="text-slate-700 leading-relaxed">{original}</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-6 rounded-3xl shadow-2xl">
        <h2 className="font-bold mb-3">Refined Version</h2>
        <p className="italic leading-relaxed">{refined}</p>
      </div>

    </div>
  );
}
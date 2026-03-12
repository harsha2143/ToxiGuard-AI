export default function EvaluationGrid({ evaluation }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border grid grid-cols-2 gap-6">

      <Metric title="Before" value={evaluation.before} />
      <Metric title="After" value={evaluation.after} />
      <Metric title="Reduction" value={evaluation.reduction} />
      <Metric title="Similarity" value={evaluation.semantic_similarity} />

    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
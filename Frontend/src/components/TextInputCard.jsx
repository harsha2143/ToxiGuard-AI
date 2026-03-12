export default function TextInputCard({
  text,
  setText,
  style,
  setStyle,
  context,
  setContext,
  onAnalyze
}) {
  return (
    <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-slate-200 space-y-6">

      <textarea
        className="w-full resize-none text-lg p-4 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
        rows="4"
        placeholder="Enter your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap gap-4 items-center">

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="p-3 rounded-xl border"
        >
          <option value="professional">Professional</option>
          <option value="friendly">Friendly</option>
          <option value="formal">Formal</option>
          <option value="empathetic">Empathetic</option>
          <option value="neutral">Neutral</option>
        </select>

        <select
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="p-3 rounded-xl border"
        >
          <option value="social_media">Social Media</option>
          <option value="workplace">Workplace</option>
          <option value="customer_review">Customer Review</option>
        </select>

        <button
          onClick={onAnalyze}
          className="ml-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all"
        >
          Analyze
        </button>

      </div>
    </div>
  );
}
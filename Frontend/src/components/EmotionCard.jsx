export default function EmotionCard({ emotion }) {

  const getColor = () => {
    switch (emotion.label.toLowerCase()) {
      case "anger":
        return "bg-red-500";
      case "sadness":
        return "bg-blue-500";
      case "joy":
        return "bg-green-500";
      case "fear":
        return "bg-purple-500";
      case "disgust":
        return "bg-rose-600";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border">
      <h2 className="font-bold mb-3">Detected Emotion</h2>

      <div className="flex items-center gap-4">
        <span
          className={`px-4 py-2 text-white rounded-full text-sm font-semibold ${getColor()}`}
        >
          {emotion.label.toUpperCase()}
        </span>

        <span className="text-slate-600">
          {(emotion.confidence * 100).toFixed(1)}% confidence
        </span>
      </div>
    </div>
  );
}
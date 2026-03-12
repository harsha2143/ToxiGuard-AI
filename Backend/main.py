from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

from schemas import Data
from models.toxicity import detect_toxicity
from models.rewriter import rewrite_text
from services.evaluator import evaluate
from models.emotion import detect_emotion

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# -----------------------------
# Emotion → Style Mapping
# -----------------------------
def map_emotion_to_style(emotion: str):

    emotion = emotion.lower()

    if emotion in ["anger", "disgust"]:
        return "empathetic"

    elif emotion in ["sadness"]:
        return "friendly"

    elif emotion in ["fear"]:
        return "neutral"

    elif emotion in ["joy"]:
        return "professional"

    else:
        return "professional"


@app.post("/analyze")
def analyze(data: Data):

    if not data.text.strip():
        return {
            "is_toxic": False,
            "intensity": 0,
            "rephrased": "",
            "categories": {},
            "emotion": None,
            "evaluation": None,
            "metrics": {"time": 0}
        }

    start_time = time.time()

    # 1️⃣ Toxicity Detection
    toxic_prob, scores = detect_toxicity(data.text)
    is_toxic = toxic_prob > 0.60

    # 2️⃣ Emotion Detection
    emotion_label, emotion_score = detect_emotion(data.text)

    # 3️⃣ Decide Style (Auto or Manual)
    if data.style is None:
        selected_style = map_emotion_to_style(emotion_label)
    else:
        selected_style = data.style

    # 4️⃣ Rewrite if toxic
    if is_toxic:
        rephrased = rewrite_text(
            data.text,
            selected_style,
            data.context
        )
        evaluation = evaluate(data.text, rephrased, toxic_prob)
    else:
        rephrased = data.text
        evaluation = None

    return {
        "is_toxic": is_toxic,
        "intensity": round(toxic_prob, 4),
        "rephrased": rephrased,
        "categories": scores,
        "emotion": {
            "label": emotion_label,
            "confidence": round(emotion_score, 4)
        },
        "evaluation": evaluation,
        "metrics": {
            "time": round(time.time() - start_time, 2)
        }
    }
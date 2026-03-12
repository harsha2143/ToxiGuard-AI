from transformers import pipeline
from config import DEVICE

emotion_pipe = pipeline(
    task="text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    device=0 if DEVICE.type == "cuda" else -1
)

def detect_emotion(text: str):
    results = emotion_pipe(text)

    # results is a list of dictionaries
    top_result = results[0]

    return top_result["label"], float(top_result["score"])
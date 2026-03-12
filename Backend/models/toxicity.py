from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
from config import TOX_MODEL_PATH, DEVICE

# Load once at startup
tox_tokenizer = AutoTokenizer.from_pretrained(TOX_MODEL_PATH)
tox_model = AutoModelForSequenceClassification.from_pretrained(TOX_MODEL_PATH)
tox_model.to(DEVICE)

tox_pipe = pipeline(
    task="text-classification",
    model=tox_model,
    tokenizer=tox_tokenizer,
    top_k=None,
    device=0 if DEVICE.type == "cuda" else -1
)

def detect_toxicity(text: str):
    results = tox_pipe(text)[0]
    scores = {res["label"]: float(res["score"]) for res in results}
    toxic_prob = scores.get("toxic", 0.0)
    return toxic_prob, scores
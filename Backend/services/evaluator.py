from models.toxicity import detect_toxicity
from models.similarity import compute_similarity

# def evaluate(original: str, rewritten: str):

#     before_prob, _ = detect_toxicity(original)
#     after_prob, _ = detect_toxicity(rewritten)

#     reduction = before_prob - after_prob
#     similarity = compute_similarity(original, rewritten)

#     return {
#         "before": round(before_prob, 4),
#         "after": round(after_prob, 4),
#         "reduction": round(reduction, 4),
#         "semantic_similarity": round(similarity, 4)
#     }


def evaluate(original: str, rewritten: str, before_prob: float):

    after_prob, _ = detect_toxicity(rewritten)

    reduction = before_prob - after_prob
    similarity = compute_similarity(original, rewritten)

    return {
        "before": round(before_prob, 4),
        "after": round(after_prob, 4),
        "reduction": round(reduction, 4),
        "semantic_similarity": round(similarity, 4)
    }
from sentence_transformers import SentenceTransformer, util

sim_model = SentenceTransformer('all-MiniLM-L6-v2')

def compute_similarity(text1: str, text2: str):
    emb1 = sim_model.encode(text1, convert_to_tensor=True)
    emb2 = sim_model.encode(text2, convert_to_tensor=True)
    similarity = util.cos_sim(emb1, emb2).item()
    return similarity

# import os
# from transformers import AutoTokenizer, AutoModelForSequenceClassification, AutoModelForSeq2SeqLM
# import torch

# models = {
#     "tox": "s-nlp/roberta_toxicity_classifier",
#     "rephrase": "google/gemma-2-2b-it" 
# }
# 
# import os
# import torch
# from transformers import (
#     AutoTokenizer,
#     AutoModelForSequenceClassification,
#     AutoModelForCausalLM
# )

# models = {
#     "tox": "s-nlp/roberta_toxicity_classifier",
#     "rephrase": "microsoft/phi-2"
# }

# def download():
#     os.environ["HF_HUB_DISABLE_TELEMETRY"] = "1"

#     for key, path in models.items():
#         save_path = f"./{key}_model"
#         print(f"\n--- Processing {key} model ---")

#         tokenizer = AutoTokenizer.from_pretrained(path)
#         tokenizer.save_pretrained(save_path)

#         if key == "tox":
#             model = AutoModelForSequenceClassification.from_pretrained(path)
#         else:
#             model = AutoModelForCausalLM.from_pretrained(
#                 path,
#                 torch_dtype=torch.float32,   # CPU safe
#                 low_cpu_mem_usage=True,
#                 trust_remote_code=True
#             )

#         model.save_pretrained(save_path)
#         print(f"✅ Saved {key} model")

# if __name__ == "__main__":
#     download()


# Version 3
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from transformers import AutoModelForSequenceClassification

models = {
    "tox": "s-nlp/roberta_toxicity_classifier",
    "rephrase": "google/flan-t5-large"
}

def download():
    for key, repo_id in models.items():
        save_path = f"./{key}_model"
        print(f"\n--- Downloading {repo_id} ---")

        tokenizer = AutoTokenizer.from_pretrained(repo_id)
        tokenizer.save_pretrained(save_path)

        if key == "tox":
            model = AutoModelForSequenceClassification.from_pretrained(repo_id)
        else:
            model = AutoModelForSeq2SeqLM.from_pretrained(repo_id)

        model.save_pretrained(save_path)
        print(f"✅ Saved to {save_path}")

if __name__ == "__main__":
    download()
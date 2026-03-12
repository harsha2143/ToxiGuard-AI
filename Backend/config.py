import os
import torch

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

TOX_MODEL_PATH = os.path.join(BASE_DIR, "tox_model")
REPHRASE_MODEL_PATH = os.path.join(BASE_DIR, "rephrase_model")

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print("Using device:", DEVICE)
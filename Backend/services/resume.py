# import os
# from huggingface_hub import snapshot_download

# # Direct download/resume tool
# def resume_download():
#     print("Resuming Gemma download... checking existing files...")
#     try:
#         snapshot_download(
#             repo_id="google/gemma-2-2b-it",
#             local_dir="./rephrase_model",
#             local_dir_use_symlinks=False, # Better for Windows
#             token=True
#         )
#         print("\nSUCCESS: All files moved to ./rephrase_model")
#     except Exception as e:
#         print(f"Error: {e}")

# if __name__ == "__main__":
#     resume_download()

import os
from huggingface_hub import snapshot_download

def resume_download():
    print("Resuming Phi-2 download... checking existing files...")

    os.environ["HF_HUB_ENABLE_HF_TRANSFER"] = "1"
    os.environ["HF_HUB_DISABLE_TELEMETRY"] = "1"

    try:
        snapshot_download(
            repo_id="microsoft/phi-2",
            local_dir="./rephrase_model",
            local_dir_use_symlinks=False,  # important for Windows
        )

        print("\nSUCCESS: All files downloaded to ./rephrase_model")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    resume_download()
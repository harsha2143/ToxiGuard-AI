# from transformers import AutoTokenizer, AutoModelForCausalLM
# import torch
# from config import REPHRASE_MODEL_PATH, DEVICE

# # Load once
# re_tokenizer = AutoTokenizer.from_pretrained(REPHRASE_MODEL_PATH)

# re_model = AutoModelForCausalLM.from_pretrained(
#     REPHRASE_MODEL_PATH,
#     torch_dtype=torch.float16 if DEVICE.type == "cuda" else torch.float32,
#     low_cpu_mem_usage=True
# )

# re_model.to(DEVICE)

# def rewrite_text(text: str):

#     prompt = (
#         f"Instruction: Rephrase the toxic text to be professional and polite. "
#         f"Provide ONLY the rephrased text.\n\n"
#         f"Toxic Text: {text}\n"
#         f"Refined Text:"
#     )

#     inputs = re_tokenizer(prompt, return_tensors="pt").to(DEVICE)

#     with torch.no_grad():
#         outputs = re_model.generate(
#             **inputs,
#             max_new_tokens=60,
#             do_sample=False,
#             num_beams=1,
#             pad_token_id=re_tokenizer.eos_token_id,
#             eos_token_id=re_tokenizer.eos_token_id
#         )

#     full_output = re_tokenizer.decode(outputs[0], skip_special_tokens=True)

#     rephrased = full_output.split("Refined Text:")[-1].strip()
#     rephrased = rephrased.replace('"', '').split('\n')[0]

#     return rephrased

# from transformers import AutoTokenizer, AutoModelForCausalLM
# import torch
# from config import REPHRASE_MODEL_PATH, DEVICE

# # -----------------------------
# # Load Model Once (Startup)
# # -----------------------------
# re_tokenizer = AutoTokenizer.from_pretrained(REPHRASE_MODEL_PATH)

# re_model = AutoModelForCausalLM.from_pretrained(
#     REPHRASE_MODEL_PATH,
#     torch_dtype=torch.float16 if DEVICE.type == "cuda" else torch.float32,
#     low_cpu_mem_usage=True
# )

# re_model.to(DEVICE)


# # -----------------------------
# # Rewrite Function (Improved Prompt)
# # -----------------------------
# def rewrite_text(text: str, style: str = "professional"):

#     style_instructions = {
#         "professional": "Use professional and workplace-appropriate language.",
#         "friendly": "Use a calm and friendly tone while remaining respectful.",
#         "formal": "Use formal and structured language.",
#         "empathetic": "Use understanding and emotionally considerate language.",
#         "neutral": "Use neutral and objective language."
#     }

#     style_rule = style_instructions.get(
#         style.lower(),
#         style_instructions["professional"]
#     )

#     prompt = f"""
#             You are an AI assistant specialized in constructive communication.

#             Task:
#             Rewrite the following toxic or aggressive text.

#             Style Requirement:
#             {style_rule}

#             Strict Rules:
#             - Preserve the original meaning and intent.
#             - Do NOT change the main message.
#             - Only remove offensive, insulting, or aggressive wording.
#             - Do NOT invent new information.
#             - Keep the rewritten sentence close in meaning to the original.
#             - Output ONLY the rewritten sentence.

#             Original Text:
#             {text}

#             Rewritten Text:
#             """

#     inputs = re_tokenizer(prompt, return_tensors="pt").to(DEVICE)

#     with torch.no_grad():
#         outputs = re_model.generate(
#             **inputs,
#             max_new_tokens=50,
#             do_sample=False,
#             num_beams=1,
#             early_stopping=True,
#             pad_token_id=re_tokenizer.eos_token_id,
#             eos_token_id=re_tokenizer.eos_token_id
#         )

#     full_output = re_tokenizer.decode(outputs[0], skip_special_tokens=True)

#     if "Rewritten Text:" in full_output:
#         rephrased = full_output.split("Rewritten Text:")[-1].strip()
#     else:
#         rephrased = full_output.strip()

#     rephrased = rephrased.replace('"', '').split('\n')[0].strip()

#     return rephrased

# from transformers import AutoTokenizer, AutoModelForCausalLM
# import torch
# from config import REPHRASE_MODEL_PATH, DEVICE

# # Load Falcon
# re_tokenizer = AutoTokenizer.from_pretrained(REPHRASE_MODEL_PATH)
# re_model = AutoModelForCausalLM.from_pretrained(
#     REPHRASE_MODEL_PATH,
#     torch_dtype=torch.float32,
#     low_cpu_mem_usage=True,
#     trust_remote_code=True
# )

# re_model.to(DEVICE)


# # -----------------------------
# # Softening Layer
# # -----------------------------
# def soften_text(text: str):
#     softened = text.replace("trash", "poor quality") \
#                    .replace("incompetent", "not meeting expectations") \
#                    .replace("useless", "not contributing effectively") \
#                    .replace("stupid", "not appropriate")
#     return softened


# # -----------------------------
# # Context Layer
# # -----------------------------
# def apply_context(text: str, context: str):

#     context = context.lower()

#     if context == "workplace":
#         return f"In a professional setting, {text}"

#     elif context == "customer_review":
#         return f"As a customer, {text}"

#     return text


# # -----------------------------
# # Style Layer
# # -----------------------------
# def apply_style(text: str, style: str):

#     style = style.lower()

#     if style == "professional":
#         return f"Rewrite professionally: {text}"

#     elif style == "friendly":
#         return f"Rewrite in a friendly tone: {text}"

#     elif style == "formal":
#         return f"Rewrite formally: {text}"

#     elif style == "empathetic":
#         return f"Rewrite with empathy: {text}"

#     return f"Rewrite clearly: {text}"


# # -----------------------------
# # Final Rewrite
# # -----------------------------
# def rewrite_text(text: str, style: str, context: str):

#     softened = soften_text(text)
#     context_text = apply_context(softened, context)
#     styled_prompt = apply_style(context_text, style)

#     full_prompt = f"""
# You are an AI assistant that rewrites toxic or aggressive messages into constructive communication.

# Instructions:
# - Preserve original meaning
# - Remove aggressive wording
# - Keep message professional and respectful
# - Do not add new information

# Input: {styled_prompt}

# Rewritten Output:
# """

#     inputs = re_tokenizer(full_prompt, return_tensors="pt").to(DEVICE)

#     with torch.no_grad():
#         outputs = re_model.generate(
#             **inputs,
#             max_new_tokens=80,
#             do_sample=False,
#             num_beams=1,
#             pad_token_id=re_tokenizer.eos_token_id
#         )

#     output_text = re_tokenizer.decode(outputs[0], skip_special_tokens=True)

#     # Extract only rewritten part
#     if "Rewritten Output:" in output_text:
#         rewritten = output_text.split("Rewritten Output:")[-1].strip()
#     else:
#         rewritten = output_text.strip()

#     return rewritten


# from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
# import torch
# from config import REPHRASE_MODEL_PATH, DEVICE

# # -----------------------------
# # Load Parrot (T5 Seq2Seq)
# # -----------------------------
# re_tokenizer = AutoTokenizer.from_pretrained(REPHRASE_MODEL_PATH)
# re_model = AutoModelForSeq2SeqLM.from_pretrained(
#     REPHRASE_MODEL_PATH,
#     torch_dtype=torch.float32,
#     low_cpu_mem_usage=True
# )

# re_model.to(DEVICE)


# # -----------------------------
# # Softening Layer
# # -----------------------------
# def soften_text(text: str):

#     TOXIC_MAP = {
#         "trash": "poor quality",
#         "incompetent": "not meeting expectations",
#         "useless": "not contributing effectively",
#         "stupid": "not appropriate",
#         "idiot": "acting unprofessionally",
#         "worst": "below expectations"
#     }

#     softened = text
#     for toxic_word, replacement in TOXIC_MAP.items():
#         softened = softened.replace(toxic_word, replacement)

#     return softened


# # -----------------------------
# # Context Layer
# # -----------------------------
# def apply_context(text: str, context: str):

#     context = context.lower()

#     if context == "workplace":
#         return f"In a professional workplace context, {text}"

#     elif context == "customer_review":
#         return f"As a customer providing feedback, {text}"

#     return text


# # -----------------------------
# # Style Layer
# # -----------------------------
# def apply_style(text: str, style: str):

#     style = style.lower()

#     if style == "professional":
#         return text

#     elif style == "friendly":
#         return f"I would like to share that {text.lower()}"

#     elif style == "formal":
#         return f"It is observed that {text.lower()}"

#     elif style == "empathetic":
#         return f"I understand there may be concerns, but {text.lower()}"

#     elif style == "neutral":
#         return text

#     return text


# # -----------------------------
# # Final Rewrite (Controlled Parrot)
# # -----------------------------
# def rewrite_text(text: str, style: str, context: str):

#     # 1️⃣ Softening
#     softened = soften_text(text)

#     # 2️⃣ Context
#     context_text = apply_context(softened, context)

#     # 3️⃣ Style (simple prefix adjustment, not instruction block)
#     styled_text = apply_style(context_text, style)

#     # 4️⃣ Proper Parrot prompt
#     prompt = f"paraphrase: {styled_text} </s>"

#     inputs = re_tokenizer(
#         prompt,
#         return_tensors="pt",
#         truncation=True,
#         padding=True
#     ).to(DEVICE)

#     with torch.no_grad():
#         outputs = re_model.generate(
#             **inputs,
#             max_new_tokens=60,
#             num_beams=5,
#             early_stopping=True
#         )

#     rewritten = re_tokenizer.decode(
#         outputs[0],
#         skip_special_tokens=True
#     ).strip()

#     return rewritten



from transformers import AutoTokenizer, AutoModelForCausalLM
import torch
from config import REPHRASE_MODEL_PATH, DEVICE

# =====================================================
# Load Gemma 2B (Instruction-Tuned LLM)
# =====================================================
re_tokenizer = AutoTokenizer.from_pretrained(REPHRASE_MODEL_PATH)

re_model = AutoModelForCausalLM.from_pretrained(
    REPHRASE_MODEL_PATH,
    torch_dtype=torch.float32,   # Safe for CPU
    low_cpu_mem_usage=True
)

re_model.to(DEVICE)


# =====================================================
# Style Instruction Helper
# =====================================================
def get_style_instruction(style: str):

    style = style.lower()

    if style == "professional":
        return "Use a professional and workplace-appropriate tone."

    elif style == "friendly":
        return "Use a calm and friendly tone."

    elif style == "formal":
        return "Use formal and structured language."

    elif style == "empathetic":
        return "Use an empathetic and understanding tone."

    elif style == "neutral":
        return "Use neutral and objective language."

    return "Maintain a respectful tone."


# =====================================================
# Context Framing Helper
# =====================================================
def apply_context(text: str, context: str):

    context = context.lower()

    if context == "workplace":
        return f"In a workplace setting, {text}"

    elif context == "customer_review":
        return f"As customer feedback, {text}"

    return text


# =====================================================
# Final Rewrite Function (LLM-Based Constructive Reframing)
# =====================================================
def rewrite_text(text: str, style: str, context: str):

    # Context adaptation
    context_text = apply_context(text, context)

    # Style instruction
    style_instruction = get_style_instruction(style)

    # Strong but stable prompt
    prompt = f"""
        Rewrite the message to remove toxic or aggressive language.

        Constraints:
        - Preserve original sentence structure as much as possible.
        - Do not add new information.
        - Do not expand the sentence.
        - Keep wording close to the original.
        - Replace hostile expressions with constructive alternatives.
        - Return only one sentence.

        Message:
        {text}

        Rewritten:
        """

    inputs = re_tokenizer(prompt, return_tensors="pt").to(DEVICE)

    with torch.no_grad():
        outputs = re_model.generate(
            **inputs,
            max_new_tokens=40,   # Reduce from 70
            do_sample=False,     # Deterministic
            temperature=0.2,
            repetition_penalty=1.2,
            pad_token_id=re_tokenizer.eos_token_id,
            eos_token_id=re_tokenizer.eos_token_id
        )

    full_output = re_tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Extract only rewritten part
    if "Rewritten:" in full_output:
        rewritten = full_output.split("Rewritten:")[-1].strip()
    else:
        rewritten = full_output.strip()

    # Remove extra lines
    rewritten = rewritten.split("\n")[0].strip()

    # 🔥 Remove unwanted surrounding quotes
    rewritten = rewritten.strip().strip('"').strip("'")

    return rewritten
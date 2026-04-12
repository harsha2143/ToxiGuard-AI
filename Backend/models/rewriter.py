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
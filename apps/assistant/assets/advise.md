1. Use OpenAI or Claude for the “brain” — feed it prompts with your structured data and history, ask for evaluation, recommendations, etc.
2. Optionally have a “filter / safety / fact-check” layer (you or rule-based) to check the model’s output (especially for health advice).
3. Gradually, as you scale or handle sensitive data, move to a more controlled / fine-tuned model or a closed-domain health LLM.

## prompt examples

“You are a medical-assistant AI. The following is the patient’s lab data and history. Provide an evaluation, flag abnormal results, suggest dietary and lifestyle changes (non-pharmaceutical), and mention when to consult a doctor. Use evidence-based reasoning.”

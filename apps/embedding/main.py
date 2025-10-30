from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
import requests
import os

OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://ec_ollama:11434")
MODEL_NAME = os.getenv("OLLAMA_MODEL", "gemma:4b")

app = FastAPI(title="Embedding + Reasoning Service")

# Lightweight embedder for semantic search
embedder = SentenceTransformer("all-MiniLM-L6-v2")

class TextReq(BaseModel):
    text: str

@app.post("/embed_only")
def embed_only(req: TextReq):
    vec = embedder.encode(req.text).tolist()
    return {"embedding": vec}

@app.post("/embed_batch")
def embed_batch(items: list[TextReq]):
    texts = [i.text for i in items]
    vecs = embedder.encode(texts)
    return {"embeddings": [v.tolist() for v in vecs]}

@app.post("/reason")
def reason(req: TextReq):
    """
    Calls Gemma 4B through Ollama to get reasoning or health suggestions.
    Example: {"text": "User has high stress, heart rate 110, what do you suggest?"}
    """
    payload = {"model": MODEL_NAME, "prompt": req.text}
    try:
        r = requests.post(f"{OLLAMA_HOST}/api/generate", json=payload, timeout=120)
        r.raise_for_status()
        # Stream response is in chunks; handle final text
        full_text = ""
        for line in r.text.splitlines():
            if line.strip():
                try:
                    data = eval(line)
                    if "response" in data:
                        full_text += data["response"]
                except Exception:
                    pass
        return {"response": full_text.strip()}
    except Exception as e:
        return {"error": str(e)}

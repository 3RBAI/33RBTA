from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import APIKeyHeader
from pydantic import BaseModel
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import os

# --- 1. إعدادات الأمان ومفتاح الـ API ---

# هذا هو مفتاح الـ API "السري" الخاص بك. في تطبيق حقيقي، يجب أن يكون أكثر تعقيداً ويُدار بأمان.
API_KEY = "MySuperSecret-API-Key-2024" 
API_KEY_NAME = "X-API-KEY"

api_key_header = APIKeyHeader(name=API_KEY_NAME, auto_error=False)

async def get_api_key(api_key: str = Depends(api_key_header)):
    if api_key == API_KEY:
        return api_key
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials"
        )

# --- 2. تحميل النموذج المصقول ---

app = FastAPI(
    title="API للنموذج اللغوي المخصص",
    description="واجهة برمجية لاستخدام النموذج اللغوي المصقول.",
    version="1.0.0"
)

model = None
tokenizer = None

@app.on_event("startup")
def load_model():
    global model, tokenizer
    model_path = "./models/my-finetuned-model/final_checkpoint"
    if not os.path.exists(model_path):
        raise RuntimeError("Model checkpoint not found. Please run finetune.py first.")
        
    print("⏳ جارٍ تحميل النموذج المصقول إلى الذاكرة...")
    # استخدم device_map="auto" إذا كان لديك GPU
    model = AutoModelForCausalLM.from_pretrained(
        model_path, 
        device_map="auto", 
        torch_dtype=torch.float16
    )
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    print("✅ النموذج جاهز للاستخدام!")

# --- 3. تعريف نقطة النهاية (Endpoint) ---

class GenerationRequest(BaseModel):
    prompt: str
    max_new_tokens: int = 150
    temperature: float = 0.7
    top_p: float = 0.95
    top_k: int = 50

class GenerationResponse(BaseModel):
    generated_text: str
    prompt: str

@app.post("/generate", response_model=GenerationResponse, dependencies=[Depends(get_api_key)])
async def generate_text(request: GenerationRequest):
    """
    يولد نصاً بناءً على التعليمات المدخلة.
    """
    if not model or not tokenizer:
        raise HTTPException(status_code=503, detail="Model is not loaded yet.")

    # تنسيق الـ prompt بنفس الطريقة المستخدمة في التدريب
    formatted_prompt = f"<s>[INST] {request.prompt} [/INST]"
    
    inputs = tokenizer(formatted_prompt, return_tensors="pt").to(model.device)
    
    print("🤖... جارٍ توليد الإجابة")
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=request.max_new_tokens,
            pad_token_id=tokenizer.eos_token_id,
            do_sample=True,  # استخدم العينات للحصول على إجابات أكثر إبداعًا
            temperature=request.temperature,
            top_k=request.top_k,
            top_p=request.top_p,
        )
    
    # فك تشفير الإجابة وتنظيفها
    response_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    # إزالة الـ prompt من الإجابة
    clean_response = response_text.replace(formatted_prompt, "").strip()
    
    return GenerationResponse(
        generated_text=clean_response,
        prompt=request.prompt
    )

@app.get("/health")
def health_check():
    """فحص صحة الخادم"""
    return {
        "status": "healthy",
        "model_loaded": model is not None,
        "tokenizer_loaded": tokenizer is not None
    }

@app.get("/")
def read_root():
    return {
        "message": "مرحباً بك في API النموذج اللغوي الخاص بك! توجه إلى /docs للتوثيق.",
        "docs_url": "/docs",
        "health_url": "/health"
    }

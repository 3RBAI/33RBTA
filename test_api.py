import requests
import json

# إعدادات الاتصال
API_URL = "http://127.0.0.1:8000"
API_KEY = "MySuperSecret-API-Key-2024"

headers = {
    "X-API-KEY": API_KEY,
    "Content-Type": "application/json"
}

def test_health():
    """اختبار صحة الخادم"""
    response = requests.get(f"{API_URL}/health")
    print("Health Check:", response.json())

def test_generation(prompt, max_tokens=100):
    """اختبار توليد النص"""
    data = {
        "prompt": prompt,
        "max_new_tokens": max_tokens,
        "temperature": 0.7
    }
    
    response = requests.post(
        f"{API_URL}/generate",
        headers=headers,
        json=data
    )
    
    if response.status_code == 200:
        result = response.json()
        print(f"السؤال: {result['prompt']}")
        print(f"الإجابة: {result['generated_text']}")
        print("-" * 50)
    else:
        print(f"خطأ: {response.status_code} - {response.text}")

if __name__ == "__main__":
    print("🧪 اختبار API النموذج اللغوي...")
    
    # اختبار صحة الخادم
    test_health()
    
    # اختبارات مختلفة
    test_prompts = [
        "ما هي أفضل طريقة لتعلم البرمجة؟",
        "اكتب دالة بايثون لحساب المضروب",
        "ما هو الذكاء الاصطناعي؟",
        "كيف يعمل التعلم العميق؟"
    ]
    
    for prompt in test_prompts:
        test_generation(prompt)

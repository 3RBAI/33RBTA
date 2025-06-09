# دليل شامل لتدريب وخدمة نموذجك اللغوي الخاص

مرحباً بك في دليلك لإنشاء نموذج لغوي مخصص! هذا الدليل سيوجهك خلال عملية صقل (Fine-Tuning) لنموذج لغوي مفتوح المصدر، ومن ثم إنشاء واجهة برمجية (API) له.

## المتطلبات الأساسية

- جهاز كمبيوتر مزود ببطاقة رسوميات (GPU) قوية من NVIDIA (ذاكرة 16 جيجابايت VRAM أو أكثر موصى بها)
- كبديل: خدمات سحابية توفر GPUs مثل Google Colab أو Kaggle Notebooks
- نظام تشغيل Linux (مثل Ubuntu) أو WSL على ويندوز
- Python 3.8 أو أحدث

## الخطوات

### 1. إعداد البيئة

\`\`\`bash
# تشغيل سكربت الإعداد
python scripts/setup.py
\`\`\`

### 2. تحضير البيانات

البيانات موجودة في `data/dataset.jsonl` بتنسيق:
\`\`\`json
{"text": "<s>[INST] السؤال [/INST] الإجابة </s>"}
\`\`\`

### 3. تدريب النموذج

\`\`\`bash
python finetune.py
\`\`\`

### 4. تشغيل الخادم

\`\`\`bash
uvicorn api_server:app --host 0.0.0.0 --port 8000
\`\`\`

### 5. اختبار API

\`\`\`bash
python test_api.py
\`\`\`

أو باستخدام curl:

\`\`\`bash
curl -X 'POST' \
  'http://127.0.0.1:8000/generate' \
  -H 'accept: application/json' \
  -H 'X-API-KEY: MySuperSecret-API-Key-2024' \
  -H 'Content-Type: application/json' \
  -d '{
  "prompt": "ما هي أفضل طريقة لتعلم البرمجة؟",
  "max_new_tokens": 100
}'
\`\`\`

## هيكل المشروع

\`\`\`
├── data/
│   └── dataset.jsonl          # بيانات التدريب
├── models/
│   └── my-finetuned-model/    # النموذج المدرب
├── scripts/
│   └── setup.py               # سكربت الإعداد
├── finetune.py                # سكربت التدريب
├── api_server.py              # خادم API
├── test_api.py                # اختبار API
└── README.md                  # هذا الملف
\`\`\`

## الميزات

- ✅ تدريب فعال باستخدام Quantization
- ✅ API آمن مع مفاتيح الوصول
- ✅ واجهة تفاعلية مع FastAPI
- ✅ اختبارات شاملة
- ✅ دعم اللغة العربية

## ملاحظات مهمة

1. تأكد من وجود GPU متوافق مع CUDA
2. قم بتعديل مفتاح API في الإنتاج
3. راقب استهلاك الذاكرة أثناء التدريب
4. يمكن تخصيص معاملات التدريب حسب احتياجاتك

تهانينا! لقد نجحت في بناء نموذج لغوي مخصص مع API كامل.

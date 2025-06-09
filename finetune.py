import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments,
)
from trl import SFTTrainer
import os

# --- 1. إعدادات النموذج والتوكينيزر ---

# اسم النموذج الأساسي من Hugging Face (نموذج صغير نسبياً لسهولة التجربة)
base_model_name = "mistralai/Mistral-7B-Instruct-v0.2"
# اسم المجلد لحفظ النموذج المصقول
output_dir = "./models/my-finetuned-model"

# إعدادات Quantization لتقليل استهلاك الذاكرة (NF4)
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=False,
)

# --- 2. تحميل النموذج والتوكينيزر ---

print("⏳ جارٍ تحميل النموذج الأساسي والتوكينيزر...")
model = AutoModelForCausalLM.from_pretrained(
    base_model_name,
    quantization_config=bnb_config,
    device_map="auto"  # توزيع النموذج على الـ GPU المتاح
)
# منع استخدام cache ليتوافق مع التدريب
model.config.use_cache = False
model.config.pretraining_tp = 1

tokenizer = AutoTokenizer.from_pretrained(base_model_name, trust_remote_code=True)
# إضافة padding token إذا لم يكن موجوداً
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

print("✅ تم تحميل النموذج والتوكينيزر.")

# --- 3. تحميل البيانات ---

print("⏳ جارٍ تحميل مجموعة البيانات...")
dataset = load_dataset("json", data_files="data/dataset.jsonl", split="train")
print("✅ تم تحميل البيانات.")

# --- 4. إعدادات التدريب ---

training_args = TrainingArguments(
    output_dir=output_dir,
    num_train_epochs=1,              # عدد دورات التدريب (epoch)، ابدأ بـ 1
    per_device_train_batch_size=4,   # حجم الدفعة لكل GPU
    gradient_accumulation_steps=1,   # خطوات تجميع التدرج
    learning_rate=2e-4,              # معدل التعلم
    weight_decay=0.001,              # انحلال الوزن
    optim="paged_adamw_32bit",       # المُحسِّن
    fp16=False,                      # استخدام الدقة المختلطة
    bf16=True,                       # استخدام BF16 (موصى به لـ Ampere GPUs)
    max_grad_norm=0.3,               # أقصى معيار للتدرج
    max_steps=-1,                    # أقصى عدد خطوات (تجاوز num_train_epochs)
    warmup_ratio=0.03,               # نسبة خطوات الإحماء
    group_by_length=True,            # تجميع التسلسلات حسب الطول
    lr_scheduler_type="constant",    # نوع مجدول معدل التعلم
    logging_steps=2,                 # تسجيل الخسارة كل خطوتين
    save_steps=10,                   # حفظ نقطة تفتيش كل 10 خطوات
    save_total_limit=2,              # الاحتفاظ بآخر نقطتي تفتيش فقط
)

# --- 5. إنشاء وبدء المدرب ---

trainer = SFTTrainer(
    model=model,
    train_dataset=dataset,
    dataset_text_field="text",
    max_seq_length=512,  # أقصى طول للتسلسل
    tokenizer=tokenizer,
    args=training_args,
)

print("🚀 بدء عملية الصقل (Fine-Tuning)...")
trainer.train()
print("🎉 انتهت عملية الصقل بنجاح!")

# --- 6. حفظ النموذج النهائي ---
print("💾 جارٍ حفظ النموذج النهائي...")
final_model_path = os.path.join(output_dir, "final_checkpoint")
trainer.model.save_pretrained(final_model_path)
tokenizer.save_pretrained(final_model_path)
print(f"✅ تم حفظ النموذج في: {final_model_path}")

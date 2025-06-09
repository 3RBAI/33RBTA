// مجموعة من الردود الاحتياطية للاستخدام عند فشل الاتصال بـ Google Gemini API

const fallbackResponses = {
  general: [
    "أنا هنا لمساعدتك! يمكنك طرح أسئلة محددة حول الدرس وسأحاول الإجابة عليها بأفضل طريقة ممكنة. 😊",
    "يسعدني مساعدتك في فهم هذا الدرس. هل يمكنك تحديد الجزء الذي تواجه صعوبة فيه؟",
    "التعلم عملية تدريجية، ولا بأس من طلب المساعدة. أخبرني بالتحديد ما الذي تريد فهمه بشكل أفضل.",
    "أحياناً تحتاج المفاهيم الصعبة إلى شرح من زوايا مختلفة. دعني أساعدك في ذلك!",
  ],
  programming: [
    "البرمجة تحتاج إلى الممارسة المستمرة. هل تواجه مشكلة في كود معين؟ يمكنني مساعدتك في تحليله خطوة بخطوة.",
    "فهم أساسيات البرمجة أمر مهم جداً. هل تريد شرحاً لمفهوم معين في Python؟",
    "عند تعلم البرمجة، من المفيد كتابة الكود بنفسك وتجربته. هل جربت تنفيذ الأمثلة المقدمة في الدرس؟",
  ],
  mental_support: [
    "من الطبيعي الشعور بالتوتر أثناء التعلم. خذ استراحة قصيرة، وتنفس بعمق، ثم عد للدراسة بذهن صافٍ. 💙",
    "تذكر أن كل متعلم يمر بصعوبات. أنت لست وحدك في هذا، والاستمرار هو مفتاح النجاح.",
    "قسّم المهام الكبيرة إلى خطوات صغيرة، واحتفل بإنجاز كل خطوة. هذا سيساعدك على التقدم دون شعور بالإرهاق.",
  ],
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category") || "general"

  const responses = fallbackResponses[category as keyof typeof fallbackResponses] || fallbackResponses.general
  const randomResponse = responses[Math.floor(Math.random() * responses.length)]

  return Response.json({ response: randomResponse })
}

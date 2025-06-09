import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json()

    // استخدام محاولة/استثناء لمعالجة الأخطاء بشكل أفضل
    try {
      const { text } = await generateText({
        model: google("gemini-1.5-pro", {
          apiKey: "AIzaSyAcKAuJKw1kzOEJa-QHTtkTaFZyiXkJJLs",
        }),
        prompt: `أنت مساعد تعليمي ذكي ومتعاطف في منصة تعلم أونلاين عربية. 
        
        مهامك:
        1. تقديم إجابات تعليمية مفيدة وواضحة
        2. دعم الطلاب نفسياً وتشجيعهم
        3. تقديم نصائح للتعلم الفعال
        4. مساعدة في حل المشاكل التقنية والأكاديمية
        5. شرح المفاهيم البرمجية بطريقة مبسطة
        
        السياق التعليمي: ${context || "دورة تعليمية عامة"}
        
        سؤال/رسالة الطالب: ${message}
        
        قدم إجابة مفيدة وتعليمية باللغة العربية. كن ودوداً ومشجعاً ومتفهماً. 
        إذا كان السؤال يتعلق بالصحة النفسية أو التوتر، قدم نصائح داعمة ومطمئنة.
        إذا كان السؤال تقنياً، قدم أمثلة عملية وكود إذا لزم الأمر.
        استخدم الرموز التعبيرية بشكل مناسب لجعل الرد أكثر ودية.`,
        maxTokens: 1000,
        temperature: 0.7,
      })

      return Response.json({ response: text })
    } catch (aiError) {
      console.error("خطأ في استدعاء Google Gemini API:", aiError)

      // استخدام رد احتياطي في حالة فشل الاتصال بـ Google Gemini
      return Response.json({
        response:
          "أنا هنا لمساعدتك في فهم الدرس! يمكنك طرح أسئلة محددة عن الموضوع الذي تواجه صعوبة فيه، وسأحاول تقديم شرح مبسط وأمثلة توضيحية. 🌟 لا تتردد في توضيح النقاط التي تحتاج مساعدة فيها.",
      })
    }
  } catch (error) {
    console.error("خطأ عام في API:", error)
    return Response.json(
      {
        response: "أنا هنا لمساعدتك! يرجى إعادة صياغة سؤالك أو طلبك بطريقة أخرى. 😊",
      },
      { status: 200 }, // استخدام 200 بدلاً من 500 لتجنب أخطاء العميل
    )
  }
}

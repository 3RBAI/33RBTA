import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json()

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
    })

    return Response.json({ response: text })
  } catch (error) {
    console.error("خطأ في API:", error)
    return Response.json(
      {
        error: "حدث خطأ في معالجة طلبك. يرجى المحاولة مرة أخرى.",
      },
      { status: 500 },
    )
  }
}

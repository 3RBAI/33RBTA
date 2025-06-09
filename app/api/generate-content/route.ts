import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { topic, type, level } = await request.json()

    const { text } = await generateText({
      model: google("gemini-1.5-pro", {
        apiKey: "AIzaSyAcKAuJKw1kzOEJa-QHTtkTaFZyiXkJJLs",
      }),
      prompt: `أنت خبير في إنشاء المحتوى التعليمي. قم بإنشاء ${type} حول موضوع "${topic}" للمستوى ${level}.

      المطلوب:
      - محتوى تعليمي شامل ومفصل
      - أمثلة عملية وتطبيقية
      - تمارين أو أسئلة للتقييم
      - نصائح للتعلم الفعال
      
      اكتب المحتوى باللغة العربية بطريقة واضحة ومنظمة.`,
    })

    return Response.json({ content: text })
  } catch (error) {
    console.error("خطأ في توليد المحتوى:", error)
    return Response.json({ error: "فشل في توليد المحتوى" }, { status: 500 })
  }
}

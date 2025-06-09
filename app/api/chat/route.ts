import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json()

    const { text } = await generateText({
      model: google("gemini-1.5-pro"),
      prompt: `أنت مساعد تعليمي ذكي في منصة تعلم أونلاين. 
      
      السياق: ${context || "دورة تعليمية عامة"}
      
      سؤال الطالب: ${message}
      
      قدم إجابة مفيدة وتعليمية باللغة العربية. كن ودوداً ومشجعاً.`,
    })

    return Response.json({ response: text })
  } catch (error) {
    console.error("Error:", error)
    return Response.json({ error: "حدث خطأ في معالجة طلبك" }, { status: 500 })
  }
}

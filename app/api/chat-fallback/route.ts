// نسخة احتياطية من API المحادثة تستخدم ردود مخزنة مسبقاً

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json()

    // تحديد نوع الرد بناءً على محتوى الرسالة
    let category = "general"

    if (
      message.toLowerCase().includes("python") ||
      message.toLowerCase().includes("كود") ||
      message.toLowerCase().includes("برمجة") ||
      message.toLowerCase().includes("code")
    ) {
      category = "programming"
    }

    if (
      message.toLowerCase().includes("توتر") ||
      message.toLowerCase().includes("قلق") ||
      message.toLowerCase().includes("صعب") ||
      message.toLowerCase().includes("تعب")
    ) {
      category = "mental_support"
    }

    // الحصول على رد احتياطي من API الردود الاحتياطية
    const fallbackResponse = await fetch(`${new URL(request.url).origin}/api/fallback-responses?category=${category}`)
    const data = await fallbackResponse.json()

    return Response.json({ response: data.response })
  } catch (error) {
    console.error("خطأ في API الاحتياطي:", error)
    return Response.json({
      response: "أنا هنا لمساعدتك! يرجى إعادة صياغة سؤالك أو طلبك بطريقة أخرى.",
    })
  }
}

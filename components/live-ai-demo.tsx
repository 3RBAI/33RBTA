"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Play, Pause, RotateCcw } from "lucide-react"
import { useState, useEffect } from "react"

const demoQuestions = [
  "ما هي أساسيات البرمجة؟",
  "كيف أتعلم Python بسرعة؟",
  "أشعر بالتوتر من الامتحان، ماذا أفعل؟",
  "اشرح لي مفهوم الذكاء الاصطناعي",
  "كيف أحسن مهاراتي في البرمجة؟",
]

export function LiveAIDemo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const askQuestion = async (question: string) => {
    setIsLoading(true)
    setResponse("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          context: "عرض تجريبي للمنصة",
        }),
      })

      const data = await res.json()
      setResponse(data.response || "عذراً، حدث خطأ في الاستجابة")
    } catch (error) {
      setResponse("عذراً، لا يمكن الاتصال بالخادم حالياً")
    } finally {
      setIsLoading(false)
    }
  }

  const nextQuestion = () => {
    const next = (currentQuestion + 1) % demoQuestions.length
    setCurrentQuestion(next)
    if (isPlaying) {
      askQuestion(demoQuestions[next])
    }
  }

  const toggleDemo = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      askQuestion(demoQuestions[currentQuestion])
    }
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setCurrentQuestion(0)
    setResponse("")
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && !isLoading) {
      interval = setInterval(nextQuestion, 8000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, isLoading, currentQuestion])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-blue-600" />
          عرض تجريبي مباشر للذكاء الاصطناعي
          <Badge variant="outline" className="text-green-600 border-green-200">
            مباشر
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* أزرار التحكم */}
        <div className="flex gap-2">
          <Button onClick={toggleDemo} variant={isPlaying ? "destructive" : "default"} size="sm">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? "إيقاف" : "تشغيل"}
          </Button>
          <Button onClick={resetDemo} variant="outline" size="sm">
            <RotateCcw className="h-4 w-4" />
            إعادة تعيين
          </Button>
          <Button onClick={nextQuestion} variant="outline" size="sm" disabled={isLoading}>
            السؤال التالي
          </Button>
        </div>

        {/* السؤال الحالي */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
              {currentQuestion + 1}
            </div>
            <span className="text-sm font-medium text-blue-800">السؤال:</span>
          </div>
          <p className="text-blue-900">{demoQuestions[currentQuestion]}</p>
        </div>

        {/* الاستجابة */}
        <div className="bg-gray-50 border rounded-lg p-4 min-h-[120px]">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">استجابة AI:</span>
          </div>
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">جاري التفكير...</span>
            </div>
          ) : (
            <p className="text-gray-900 text-sm leading-relaxed">{response || "اضغط 'تشغيل' لبدء العرض التجريبي"}</p>
          )}
        </div>

        {/* مؤشر التقدم */}
        <div className="flex justify-center gap-2">
          {demoQuestions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentQuestion ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

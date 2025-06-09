"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User, Heart, AlertCircle, RefreshCw } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Message {
  id: number
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content: "مرحباً! أنا مساعدك الذكي في هذه الدورة. كيف يمكنني مساعدتك اليوم؟",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // التمرير التلقائي إلى أسفل عند إضافة رسائل جديدة
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          context: "دورة البرمجة - Python للمبتدئين",
        }),
      })

      const data = await response.json()

      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content: data.response || "عذراً، حدث خطأ في معالجة طلبك. يرجى المحاولة مرة أخرى.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setRetryCount(0) // إعادة تعيين عداد المحاولات عند النجاح
    } catch (error) {
      console.error("خطأ في الاتصال:", error)
      const errorMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content: "عذراً، لا أستطيع الاتصال بالخادم حالياً. يمكنك المحاولة مرة أخرى أو طرح سؤال مختلف.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      setRetryCount((prev) => prev + 1)
    } finally {
      setIsLoading(false)
    }
  }

  // إعادة المحاولة مع آخر رسالة
  const handleRetry = () => {
    if (messages.length > 1) {
      const lastUserMessage = [...messages].reverse().find((m) => m.type === "user")
      if (lastUserMessage) {
        setInput(lastUserMessage.content)
      }
    }
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-600" />
            مساعد AI الذكي
          </div>
          {retryCount > 0 && (
            <Button variant="ghost" size="sm" onClick={handleRetry} className="h-8 px-2">
              <RefreshCw className="h-3 w-3 mr-1" />
              إعادة المحاولة
            </Button>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 mb-4 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* أزرار الدعم السريع */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInput("أشعر بالتوتر من الدراسة، كيف يمكنني التعامل مع ذلك؟")}
          >
            <Heart className="h-3 w-3 mr-1" />
            دعم نفسي
          </Button>
          <Button variant="outline" size="sm" onClick={() => setInput("أحتاج مساعدة في فهم هذا الدرس")}>
            <AlertCircle className="h-3 w-3 mr-1" />
            مساعدة سريعة
          </Button>
        </div>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اسأل أي سؤال..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

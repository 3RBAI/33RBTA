"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Download, Copy } from "lucide-react"
import { useState } from "react"

export function AIContentGenerator() {
  const [topic, setTopic] = useState("")
  const [type, setType] = useState("")
  const [level, setLevel] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (!topic || !type || !level) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, type, level }),
      })

      const data = await response.json()
      setGeneratedContent(data.content || "فشل في توليد المحتوى")
    } catch (error) {
      setGeneratedContent("حدث خطأ في توليد المحتوى")
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          مولد المحتوى بالذكاء الاصطناعي
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">موضوع الدرس</label>
            <Input
              placeholder="مثال: أساسيات البرمجة، الذكاء الاصطناعي..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">نوع المحتوى</label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع المحتوى" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="درس تفاعلي">درس تفاعلي</SelectItem>
                <SelectItem value="تمرين عملي">تمرين عملي</SelectItem>
                <SelectItem value="اختبار تقييمي">اختبار تقييمي</SelectItem>
                <SelectItem value="مشروع تطبيقي">مشروع تطبيقي</SelectItem>
                <SelectItem value="ملخص شامل">ملخص شامل</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">مستوى الصعوبة</label>
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger>
                <SelectValue placeholder="اختر المستوى" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="مبتدئ">مبتدئ</SelectItem>
                <SelectItem value="متوسط">متوسط</SelectItem>
                <SelectItem value="متقدم">متقدم</SelectItem>
                <SelectItem value="خبير">خبير</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleGenerate} disabled={isLoading || !topic || !type || !level} className="w-full">
            {isLoading ? "جاري التوليد..." : "توليد المحتوى"}
            <Sparkles className="h-4 w-4 mr-2" />
          </Button>
        </div>

        {generatedContent && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">المحتوى المولد:</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Textarea
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              className="min-h-[300px] text-sm"
              placeholder="المحتوى المولد سيظهر هنا..."
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

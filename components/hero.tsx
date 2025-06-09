import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Brain, Users } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                تعلم بذكاء مع
                <br />
                الذكاء الاصطناعي
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                منصة تعليمية متطورة تستخدم Google Gemini AI لتوفير تجربة تعلم مخصصة وتفاعلية لكل طالب
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/courses">
                  ابدأ التعلم الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">جرب المنصة مجاناً</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">+10,000 طالب</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">+500 دورة</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">AI مدعوم</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-blue-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-purple-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">🤖 مساعد AI: "مرحباً! كيف يمكنني مساعدتك في التعلم اليوم؟"</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Star } from "lucide-react"
import Link from "next/link"

const recommendations = [
  {
    id: 1,
    title: "علوم البيانات مع Python",
    reason: "بناءً على تقدمك في البرمجة",
    rating: 4.8,
    category: "علوم البيانات",
  },
  {
    id: 2,
    title: "تطوير تطبيقات الجوال",
    reason: "مكمل لمهاراتك في تطوير الويب",
    rating: 4.6,
    category: "تطوير تطبيقات",
  },
  {
    id: 3,
    title: "الأمن السيبراني المتقدم",
    reason: "مجال مطلوب في السوق",
    rating: 4.7,
    category: "أمن سيبراني",
  },
]

export function AIRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-blue-600" />
          توصيات AI المخصصة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((course) => (
          <div key={course.id} className="border rounded-lg p-4 space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {course.category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">{course.rating}</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm">{course.title}</h3>
              <p className="text-xs text-gray-600">{course.reason}</p>
            </div>

            <Button size="sm" variant="outline" className="w-full" asChild>
              <Link href={`/courses/${course.id}`}>استكشف الدورة</Link>
            </Button>
          </div>
        ))}

        <div className="text-center pt-4">
          <Button variant="ghost" size="sm">
            عرض المزيد من التوصيات
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

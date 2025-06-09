import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Users, Bot } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "أساسيات البرمجة مع Python",
    description: "تعلم البرمجة من الصفر مع مساعد AI ذكي يرشدك في كل خطوة",
    level: "مبتدئ",
    duration: "8 أسابيع",
    students: 1250,
    rating: 4.8,
    price: "مجاني",
    category: "برمجة",
    hasAI: true,
  },
  {
    id: 2,
    title: "الذكاء الاصطناعي للمبتدئين",
    description: "اكتشف عالم الذكاء الاصطناعي وتطبيقاته العملية",
    level: "مبتدئ",
    duration: "6 أسابيع",
    students: 890,
    rating: 4.9,
    price: "299 ريال",
    category: "ذكاء اصطناعي",
    hasAI: true,
  },
  {
    id: 3,
    title: "تطوير تطبيقات الويب",
    description: "بناء تطبيقات ويب حديثة باستخدام React و Next.js",
    level: "متوسط",
    duration: "12 أسبوع",
    students: 650,
    rating: 4.7,
    price: "499 ريال",
    category: "تطوير ويب",
    hasAI: true,
  },
  {
    id: 4,
    title: "علوم البيانات مع Python",
    description: "تحليل البيانات والتعلم الآلي مع أدوات Python المتقدمة",
    level: "متوسط",
    duration: "10 أسابيع",
    students: 420,
    rating: 4.6,
    price: "399 ريال",
    category: "علوم البيانات",
    hasAI: true,
  },
  {
    id: 5,
    title: "الأمن السيبراني الأساسي",
    description: "تعلم أساسيات الأمن السيبراني وحماية الأنظمة",
    level: "مبتدئ",
    duration: "6 أسابيع",
    students: 380,
    rating: 4.5,
    price: "350 ريال",
    category: "الأمن السيبراني",
    hasAI: false,
  },
  {
    id: 6,
    title: "تصميم واجهات المستخدم",
    description: "تصميم واجهات جميلة وسهلة الاستخدام مع Figma",
    level: "مبتدئ",
    duration: "8 أسابيع",
    students: 720,
    rating: 4.8,
    price: "450 ريال",
    category: "التصميم",
    hasAI: true,
  },
]

export function CourseGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          عرض {courses.length} دورة من أصل {courses.length}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  {course.hasAI && (
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      <Bot className="h-3 w-3 mr-1" />
                      AI مدعوم
                    </Badge>
                  )}
                </div>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">{course.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.students}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {course.rating}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                <Button asChild>
                  <Link href={`/courses/${course.id}`}>ابدأ الآن</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

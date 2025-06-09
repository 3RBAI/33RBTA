import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Users } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "أساسيات البرمجة مع Python",
    description: "تعلم البرمجة من الصفر مع مساعد AI ذكي يرشدك في كل خطوة",
    image: "/placeholder.svg?height=200&width=300",
    level: "مبتدئ",
    duration: "8 أسابيع",
    students: 1250,
    rating: 4.8,
    price: "مجاني",
    category: "برمجة",
  },
  {
    id: 2,
    title: "الذكاء الاصطناعي للمبتدئين",
    description: "اكتشف عالم الذكاء الاصطناعي وتطبيقاته العملية",
    image: "/placeholder.svg?height=200&width=300",
    level: "مبتدئ",
    duration: "6 أسابيع",
    students: 890,
    rating: 4.9,
    price: "299 ريال",
    category: "ذكاء اصطناعي",
  },
  {
    id: 3,
    title: "تطوير تطبيقات الويب",
    description: "بناء تطبيقات ويب حديثة باستخدام React و Next.js",
    image: "/placeholder.svg?height=200&width=300",
    level: "متوسط",
    duration: "12 أسبوع",
    students: 650,
    rating: 4.7,
    price: "499 ريال",
    category: "تطوير ويب",
  },
]

export function Courses() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">الدورات الأكثر شعبية</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر من مجموعة واسعة من الدورات المصممة بعناية مع دعم الذكاء الاصطناعي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-6xl opacity-20">📚</div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
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

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/courses">عرض جميع الدورات</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

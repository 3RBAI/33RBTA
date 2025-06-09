import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play } from "lucide-react"
import Link from "next/link"

const recentCourses = [
  {
    id: 1,
    title: "أساسيات البرمجة مع Python",
    progress: 65,
    nextLesson: "الحلقات التكرارية",
    timeLeft: "25 دقيقة",
  },
  {
    id: 2,
    title: "الذكاء الاصطناعي للمبتدئين",
    progress: 30,
    nextLesson: "مقدمة في التعلم الآلي",
    timeLeft: "40 دقيقة",
  },
  {
    id: 3,
    title: "تطوير تطبيقات الويب",
    progress: 15,
    nextLesson: "مقدمة في React",
    timeLeft: "35 دقيقة",
  },
]

export function RecentCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الدورات الحالية</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentCourses.map((course) => (
          <div key={course.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">{course.title}</h3>
              <Button size="sm" asChild>
                <Link href={`/courses/${course.id}`}>
                  <Play className="h-4 w-4 mr-2" />
                  متابعة
                </Link>
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>التقدم: {course.progress}%</span>
                <span>الدرس التالي: {course.nextLesson}</span>
              </div>
              <Progress value={course.progress} className="h-2" />
              <p className="text-xs text-gray-500">الوقت المتبقي: {course.timeLeft}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, CheckCircle, Clock, Users, Star } from "lucide-react"
import { useState } from "react"

const courseData = {
  title: "أساسيات البرمجة مع Python",
  description: "تعلم البرمجة من الصفر مع مساعد AI ذكي يرشدك في كل خطوة",
  instructor: "د. أحمد محمد",
  duration: "8 أسابيع",
  students: 1250,
  rating: 4.8,
  progress: 35,
  modules: [
    {
      id: 1,
      title: "مقدمة في البرمجة",
      lessons: [
        { id: 1, title: "ما هي البرمجة؟", duration: "15 دقيقة", completed: true },
        { id: 2, title: "تثبيت Python", duration: "20 دقيقة", completed: true },
        { id: 3, title: "كتابة أول برنامج", duration: "25 دقيقة", completed: false },
      ],
    },
    {
      id: 2,
      title: "المتغيرات وأنواع البيانات",
      lessons: [
        { id: 4, title: "المتغيرات في Python", duration: "30 دقيقة", completed: false },
        { id: 5, title: "أنواع البيانات الأساسية", duration: "35 دقيقة", completed: false },
        { id: 6, title: "تحويل أنواع البيانات", duration: "20 دقيقة", completed: false },
      ],
    },
    {
      id: 3,
      title: "العمليات والتحكم",
      lessons: [
        { id: 7, title: "العمليات الحسابية", duration: "25 دقيقة", completed: false },
        { id: 8, title: "جمل الشرط", duration: "40 دقيقة", completed: false },
        { id: 9, title: "الحلقات التكرارية", duration: "45 دقيقة", completed: false },
      ],
    },
  ],
}

export function CourseContent({ courseId }: { courseId: string }) {
  const [activeLesson, setActiveLesson] = useState(1)

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge className="bg-blue-100 text-blue-800">برمجة</Badge>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {courseData.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {courseData.students}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {courseData.rating}
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl">{courseData.title}</CardTitle>
          <p className="text-gray-600 text-lg">{courseData.description}</p>
          <p className="text-sm text-gray-500">المدرب: {courseData.instructor}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>التقدم في الدورة</span>
              <span>{courseData.progress}%</span>
            </div>
            <Progress value={courseData.progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Course Modules */}
      <div className="space-y-4">
        {courseData.modules.map((module) => (
          <Card key={module.id}>
            <CardHeader>
              <CardTitle className="text-xl">{module.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                      activeLesson === lesson.id ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveLesson(lesson.id)}
                  >
                    <div className="flex items-center gap-3">
                      {lesson.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Play className="h-5 w-5 text-blue-600" />
                      )}
                      <div>
                        <h4 className="font-medium">{lesson.title}</h4>
                        <p className="text-sm text-gray-500">{lesson.duration}</p>
                      </div>
                    </div>
                    <Button variant={lesson.completed ? "outline" : "default"} size="sm">
                      {lesson.completed ? "مراجعة" : "ابدأ"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

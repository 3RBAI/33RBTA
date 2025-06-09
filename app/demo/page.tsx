"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LiveAIDemo } from "@/components/live-ai-demo"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

const demoFeatures = [
  {
    title: "مساعد AI ذكي",
    description: "يجيب على أسئلتك ويوجهك في رحلة التعلم",
    icon: "🤖",
  },
  {
    title: "تعلم تفاعلي",
    description: "دروس تفاعلية مع أمثلة عملية",
    icon: "💡",
  },
  {
    title: "دعم نفسي",
    description: "مساعدة في التعامل مع ضغوط التعلم",
    icon: "💚",
  },
  {
    title: "تتبع التقدم",
    description: "راقب تقدمك وحقق أهدافك",
    icon: "📊",
  },
]

const sampleCourse = {
  title: "أساسيات البرمجة مع Python",
  description: "تعلم البرمجة من الصفر مع مساعد AI ذكي",
  duration: "8 أسابيع",
  students: 1250,
  rating: 4.8,
  lessons: [
    { title: "مقدمة في البرمجة", duration: "15 دقيقة", completed: false },
    { title: "تثبيت Python", duration: "20 دقيقة", completed: false },
    { title: "كتابة أول برنامج", duration: "25 دقيقة", completed: false },
  ],
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">عرض تجريبي مجاني</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">جرب منصتنا الآن</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            اكتشف قوة التعلم المدعوم بالذكاء الاصطناعي من خلال هذا العرض التجريبي التفاعلي
          </p>
          <Button size="lg" asChild>
            <Link href="#demo">
              <Play className="h-5 w-5 mr-2" />
              ابدأ العرض التجريبي
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ماذا ستجرب؟</h2>
                <div className="grid gap-6">
                  {demoFeatures.map((feature, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{feature.icon}</div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sample Course Preview */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">دورة تجريبية</Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {sampleCourse.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {sampleCourse.students}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {sampleCourse.rating}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{sampleCourse.title}</CardTitle>
                  <p className="text-gray-600">{sampleCourse.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold">الدروس:</h4>
                    {sampleCourse.lessons.map((lesson, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-gray-400" />
                          <div>
                            <h5 className="font-medium">{lesson.title}</h5>
                            <p className="text-sm text-gray-500">{lesson.duration}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          معاينة
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live AI Demo */}
            <div id="demo">
              <LiveAIDemo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">مستعد لبدء رحلة التعلم؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب الذين يتعلمون بذكاء مع منصتنا المدعومة بالذكاء الاصطناعي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/courses">تصفح الدورات</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { AIContentGenerator } from "@/components/ai-content-generator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, TrendingUp, Plus } from "lucide-react"

const instructorStats = [
  { title: "الدورات المنشورة", value: "12", icon: BookOpen, color: "text-blue-600" },
  { title: "إجمالي الطلاب", value: "1,250", icon: Users, color: "text-green-600" },
  { title: "معدل التقييم", value: "4.8", icon: TrendingUp, color: "text-purple-600" },
  { title: "الإيرادات الشهرية", value: "15,000 ريال", icon: Plus, color: "text-orange-600" },
]

export default function InstructorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">لوحة تحكم المدرب</h1>
          <p className="text-xl text-gray-600">إدارة دوراتك وإنشاء محتوى تعليمي بالذكاء الاصطناعي</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* إحصائيات المدرب */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructorStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* مولد المحتوى */}
            <AIContentGenerator />
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* إجراءات سريعة */}
            <Card>
              <CardHeader>
                <CardTitle>إجراءات سريعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  إنشاء دورة جديدة
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  إدارة الدورات
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  عرض الطلاب
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  تقارير الأداء
                </Button>
              </CardContent>
            </Card>

            {/* نصائح AI */}
            <Card>
              <CardHeader>
                <CardTitle>نصائح ذكية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800">💡 استخدم مولد المحتوى لإنشاء دروس تفاعلية بسرعة</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800">📈 الدورات التفاعلية تحقق معدل إكمال أعلى بـ 40%</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800">🎯 أضف تمارين عملية لتحسين تجربة التعلم</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Phone, MessageCircle, BookOpen } from "lucide-react"

const supportResources = [
  {
    title: "الدعم النفسي الفوري",
    description: "تحدث مع مستشار نفسي متخصص",
    icon: Phone,
    action: "اتصل الآن",
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    title: "مجتمع الدعم",
    description: "انضم لمجموعات الدعم مع طلاب آخرين",
    icon: MessageCircle,
    action: "انضم للمجتمع",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    title: "تمارين الاسترخاء",
    description: "تمارين التنفس والتأمل لتقليل التوتر",
    icon: Heart,
    action: "ابدأ التمارين",
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    title: "مكتبة الموارد",
    description: "مقالات ونصائح للصحة النفسية",
    icon: BookOpen,
    action: "تصفح المكتبة",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
]

export function MentalHealthSupport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          الدعم النفسي والعاطفي
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            💡 <strong>تذكر:</strong> طلب المساعدة علامة قوة وليس ضعف. نحن هنا لدعمك في رحلة التعلم.
          </p>
        </div>

        <div className="grid gap-3">
          {supportResources.map((resource, index) => (
            <div key={index} className={`border rounded-lg p-4 ${resource.color}`}>
              <div className="flex items-start gap-3">
                <resource.icon className="h-5 w-5 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{resource.title}</h3>
                  <p className="text-xs opacity-80 mt-1">{resource.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 h-8 px-3">
                    {resource.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4 border-t">
          <p className="text-xs text-gray-600 mb-2">في حالة الطوارئ النفسية</p>
          <Button variant="outline" size="sm" className="text-red-600 border-red-200">
            <Phone className="h-4 w-4 mr-2" />
            خط المساعدة: 920033360
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

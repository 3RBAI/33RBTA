import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Target, TrendingUp, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "مساعد AI ذكي",
    description: "مساعد شخصي يجيب على أسئلتك ويوجهك في رحلة التعلم",
    color: "text-blue-600",
  },
  {
    icon: Target,
    title: "تعلم مخصص",
    description: "مسارات تعليمية مصممة خصيصاً لمستواك وأهدافك",
    color: "text-purple-600",
  },
  {
    icon: MessageSquare,
    title: "تفاعل مباشر",
    description: "محادثات تفاعلية مع AI لفهم أعمق للمواضيع",
    color: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "تتبع التقدم",
    description: "راقب تقدمك وحقق أهدافك التعليمية بسهولة",
    color: "text-orange-600",
  },
  {
    icon: Users,
    title: "مجتمع تعليمي",
    description: "تواصل مع طلاب آخرين وشارك في المناقشات",
    color: "text-red-600",
  },
  {
    icon: Zap,
    title: "تعلم سريع",
    description: "تقنيات متطورة لتسريع عملية التعلم والفهم",
    color: "text-yellow-600",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا تختار منصتنا؟</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم تجربة تعليمية فريدة تجمع بين أحدث تقنيات الذكاء الاصطناعي والمحتوى التعليمي عالي الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

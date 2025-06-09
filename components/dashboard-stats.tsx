import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Trophy, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "الدورات المكتملة",
    value: "12",
    change: "+2 هذا الشهر",
    icon: Trophy,
    color: "text-green-600",
  },
  {
    title: "ساعات التعلم",
    value: "48",
    change: "+8 هذا الأسبوع",
    icon: Clock,
    color: "text-blue-600",
  },
  {
    title: "الدورات الجارية",
    value: "3",
    change: "نشطة الآن",
    icon: BookOpen,
    color: "text-purple-600",
  },
  {
    title: "معدل التقدم",
    value: "85%",
    change: "+5% من الأسبوع الماضي",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

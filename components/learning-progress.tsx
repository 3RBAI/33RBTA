import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const weeklyProgress = [
  { day: "السبت", hours: 2 },
  { day: "الأحد", hours: 1.5 },
  { day: "الاثنين", hours: 3 },
  { day: "الثلاثاء", hours: 2.5 },
  { day: "الأربعاء", hours: 1 },
  { day: "الخميس", hours: 2 },
  { day: "الجمعة", hours: 1.5 },
]

export function LearningProgress() {
  const maxHours = Math.max(...weeklyProgress.map((d) => d.hours))

  return (
    <Card>
      <CardHeader>
        <CardTitle>تقدم التعلم الأسبوعي</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {weeklyProgress.map((day, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 text-sm text-gray-600">{day.day}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(day.hours / maxHours) * 100}%` }}
                ></div>
              </div>
              <div className="w-12 text-sm text-gray-600 text-left">{day.hours}س</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">13.5</div>
            <div className="text-sm text-gray-600">ساعة هذا الأسبوع</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

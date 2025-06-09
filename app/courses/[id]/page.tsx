import { CourseContent } from "@/components/course-content"
import { AIAssistant } from "@/components/ai-assistant"
import { NetworkStatus } from "@/components/network-status"
import { Card } from "@/components/ui/card"

export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseContent courseId={params.id} />
          </div>
          <div className="lg:col-span-1 space-y-4">
            <div className="flex justify-end">
              <NetworkStatus />
            </div>
            <AIAssistant />
            <Card className="p-4 bg-blue-50 border-blue-200">
              <p className="text-sm text-blue-800">
                💡 <strong>نصيحة:</strong> إذا واجهت مشكلة في الاتصال بالمساعد الذكي، يمكنك تحديث الصفحة أو طرح سؤالك
                بطريقة مختلفة.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

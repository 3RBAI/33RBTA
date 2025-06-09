import { CourseContent } from "@/components/course-content"
import { AIAssistant } from "@/components/ai-assistant"

export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseContent courseId={params.id} />
          </div>
          <div className="lg:col-span-1">
            <AIAssistant />
          </div>
        </div>
      </div>
    </div>
  )
}

import { CourseGrid } from "@/components/course-grid"
import { CourseFilters } from "@/components/course-filters"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">جميع الدورات التدريبية</h1>
          <p className="text-xl text-gray-600">اكتشف مجموعة واسعة من الدورات المدعومة بالذكاء الاصطناعي</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CourseFilters />
          </div>
          <div className="lg:col-span-3">
            <CourseGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

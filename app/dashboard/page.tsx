import { DashboardStats } from "@/components/dashboard-stats"
import { RecentCourses } from "@/components/recent-courses"
import { LearningProgress } from "@/components/learning-progress"
import { AIRecommendations } from "@/components/ai-recommendations"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
          <p className="text-xl text-gray-600">مرحباً بك مرة أخرى! تابع رحلة التعلم الخاصة بك</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DashboardStats />
            <RecentCourses />
            <LearningProgress />
          </div>
          <div className="lg:col-span-1">
            <AIRecommendations />
          </div>
        </div>
      </div>
    </div>
  )
}

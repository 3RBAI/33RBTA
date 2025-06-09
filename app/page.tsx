import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Courses } from "@/components/courses"
import { Stats } from "@/components/stats"
import { LiveAIDemo } from "@/components/live-ai-demo"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />

      {/* العرض التجريبي المباشر */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">جرب الذكاء الاصطناعي الآن</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              شاهد كيف يعمل مساعدنا الذكي في الإجابة على أسئلة الطلاب بذكاء وتفاعل
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LiveAIDemo />
          </div>
        </div>
      </section>

      <Courses />
    </div>
  )
}

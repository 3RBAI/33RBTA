import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Courses } from "@/components/courses"
import { Stats } from "@/components/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Courses />
    </div>
  )
}

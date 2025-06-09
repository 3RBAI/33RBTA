import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "10,000+", label: "طالب نشط" },
  { number: "500+", label: "دورة تدريبية" },
  { number: "50+", label: "مدرب خبير" },
  { number: "95%", label: "معدل الرضا" },
]

export function Stats() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

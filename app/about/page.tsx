import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, Users, Award, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Brain,
    title: "الابتكار",
    description: "نستخدم أحدث تقنيات الذكاء الاصطناعي لتطوير تجربة تعليمية فريدة",
  },
  {
    icon: Target,
    title: "التميز",
    description: "نسعى لتقديم أعلى جودة في المحتوى التعليمي والخدمات",
  },
  {
    icon: Users,
    title: "المجتمع",
    description: "نؤمن بقوة التعلم الجماعي والدعم المتبادل بين الطلاب",
  },
  {
    icon: Award,
    title: "الجودة",
    description: "نضمن معايير عالية في جميع دوراتنا ومحتوانا التعليمي",
  },
  {
    icon: Heart,
    title: "الشغف",
    description: "نحب ما نفعله ونسعى لنقل هذا الشغف للتعلم إلى طلابنا",
  },
  {
    icon: Zap,
    title: "السرعة",
    description: "نوفر طرق تعلم سريعة وفعالة تناسب العصر الحديث",
  },
]

const team = [
  {
    name: "د. أحمد محمد",
    role: "المؤسس والرئيس التنفيذي",
    description: "خبير في الذكاء الاصطناعي والتعليم الإلكتروني مع أكثر من 15 عام خبرة",
  },
  {
    name: "م. فاطمة العلي",
    role: "مديرة التطوير التقني",
    description: "متخصصة في تطوير المنصات التعليمية وتقنيات التعلم الآلي",
  },
  {
    name: "د. محمد السعيد",
    role: "مدير المحتوى التعليمي",
    description: "خبير في تصميم المناهج والمحتوى التعليمي التفاعلي",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">من نحن</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن فريق من المتخصصين في التعليم والتكنولوجيا، نسعى لثورة حقيقية في مجال التعليم الإلكتروني من خلال دمج أحدث
            تقنيات الذكاء الاصطناعي مع أفضل الممارسات التعليمية
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  أن نكون المنصة التعليمية الرائدة في المنطقة العربية، حيث يحصل كل متعلم على تجربة تعليمية مخصصة ومدعومة
                  بالذكاء الاصطناعي تمكنه من تحقيق أهدافه وطموحاته
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">مهمتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  تمكين الأفراد من التعلم والنمو من خلال توفير محتوى تعليمي عالي الجودة، مدعوم بتقنيات الذكاء الاصطناعي،
                  في بيئة تعليمية تفاعلية وداعمة تراعي احتياجات كل متعلم
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">قيمنا</h2>
            <p className="text-xl text-gray-600">المبادئ التي توجه عملنا وتحدد هويتنا</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">فريقنا</h2>
            <p className="text-xl text-gray-600">الخبراء الذين يقودون رحلة التطوير والابتكار</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">طالب نشط</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">دورة تدريبية</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">مدرب خبير</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">معدل الرضا</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

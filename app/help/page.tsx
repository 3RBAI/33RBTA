import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageCircle, Phone, Mail, Book } from "lucide-react"

const faqs = [
  {
    question: "كيف يمكنني التسجيل في دورة؟",
    answer:
      "يمكنك التسجيل في أي دورة بالنقر على زر 'ابدأ الآن' في صفحة الدورة. ستحتاج إلى إنشاء حساب أولاً إذا لم يكن لديك حساب.",
  },
  {
    question: "هل يمكنني الوصول للدورات بعد انتهائها؟",
    answer: "نعم، يمكنك الوصول لجميع محتويات الدورة مدى الحياة بعد التسجيل فيها.",
  },
  {
    question: "كيف يعمل المساعد الذكي؟",
    answer:
      "المساعد الذكي يستخدم تقنية Google Gemini AI لتقديم إجابات مخصصة لأسئلتك حول المحتوى التعليمي والدعم النفسي.",
  },
  {
    question: "هل أحصل على شهادة بعد إكمال الدورة؟",
    answer: "نعم، تحصل على شهادة إكمال معتمدة بعد إنهاء جميع دروس الدورة بنجاح.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل جميع بطاقات الائتمان الرئيسية، والدفع عبر PayPal، والتحويل البنكي المحلي.",
  },
  {
    question: "كيف يمكنني تتبع تقدمي في الدورة؟",
    answer: "يمكنك متابعة تقدمك من خلال لوحة التحكم الشخصية التي تعرض نسبة الإكمال والدروس المتبقية.",
  },
  {
    question: "هل يمكنني إلغاء اشتراكي؟",
    answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت من إعدادات الحساب. ستحتفظ بالوصول حتى نهاية فترة الاشتراك المدفوعة.",
  },
  {
    question: "كيف أتواصل مع المدرب؟",
    answer: "يمكنك التواصل مع المدرب من خلال منطقة الأسئلة والأجوبة في كل درس، أو عبر الرسائل المباشرة.",
  },
]

const supportOptions = [
  {
    title: "دردشة مباشرة",
    description: "تحدث مع فريق الدعم فوراً",
    icon: MessageCircle,
    action: "بدء المحادثة",
    available: "متاح الآن",
  },
  {
    title: "الهاتف",
    description: "اتصل بنا مباشرة",
    icon: Phone,
    action: "اتصل الآن",
    available: "9:00 - 17:00",
  },
  {
    title: "البريد الإلكتروني",
    description: "أرسل لنا رسالة مفصلة",
    icon: Mail,
    action: "إرسال رسالة",
    available: "رد خلال 24 ساعة",
  },
  {
    title: "مركز المساعدة",
    description: "تصفح الأدلة والموارد",
    icon: Book,
    action: "تصفح الأدلة",
    available: "متاح دائماً",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">مركز المساعدة</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            نحن هنا لمساعدتك! ابحث عن إجابات لأسئلتك أو تواصل مع فريق الدعم
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="ابحث عن إجابة..." className="pl-10 h-12 text-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQs */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">الأسئلة الشائعة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-right hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Support Options */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>تحتاج مساعدة إضافية؟</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <option.icon className="h-6 w-6 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{option.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                          <p className="text-xs text-green-600 mb-3">{option.available}</p>
                          <Button variant="outline" size="sm" className="w-full">
                            {option.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>نصائح سريعة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">💡 استخدم المساعد الذكي في أي دورة للحصول على مساعدة فورية</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">📱 حمل التطبيق للوصول للدورات في أي مكان</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-800">🎯 راجع لوحة التحكم لمتابعة تقدمك</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

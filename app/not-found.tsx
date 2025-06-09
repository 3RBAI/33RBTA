import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <Card className="max-w-2xl mx-auto border-0 shadow-lg">
          <CardContent className="p-12">
            <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h1>
            <p className="text-xl text-gray-600 mb-8">
              عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="h-5 w-5 mr-2" />
                  العودة للرئيسية
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">
                  <Search className="h-5 w-5 mr-2" />
                  تصفح الدورات
                </Link>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="font-semibold text-lg mb-4">روابط مفيدة:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  لوحة التحكم
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Link>
                <Link
                  href="/help"
                  className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  مركز المساعدة
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  حولنا
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  اتصل بنا
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

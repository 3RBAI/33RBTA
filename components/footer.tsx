import Link from "next/link"
import { Brain, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">منصة التعلم الذكي</span>
            </Link>
            <p className="text-gray-400 text-sm">
              منصة تعليمية متطورة تستخدم الذكاء الاصطناعي لتوفير تجربة تعلم مخصصة وتفاعلية لكل طالب
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <div className="space-y-2">
              <Link href="/courses" className="block text-gray-400 hover:text-white transition-colors">
                الدورات
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                حولنا
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                اتصل بنا
              </Link>
              <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                المساعدة
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">التصنيفات</h3>
            <div className="space-y-2">
              <Link
                href="/courses?category=programming"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                البرمجة
              </Link>
              <Link href="/courses?category=ai" className="block text-gray-400 hover:text-white transition-colors">
                الذكاء الاصطناعي
              </Link>
              <Link href="/courses?category=web" className="block text-gray-400 hover:text-white transition-colors">
                تطوير الويب
              </Link>
              <Link href="/courses?category=data" className="block text-gray-400 hover:text-white transition-colors">
                علوم البيانات
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>البريد الإلكتروني: info@smartlearning.com</p>
              <p>الهاتف: +966 11 123 4567</p>
              <p>العنوان: الرياض، المملكة العربية السعودية</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 منصة التعلم الذكي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

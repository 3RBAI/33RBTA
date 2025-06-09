import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Shield, Key, Eye, Lock, AlertTriangle } from "lucide-react"

const securityFeatures = [
  {
    id: "two-factor",
    title: "المصادقة الثنائية",
    description: "حماية إضافية لحسابك",
    enabled: true,
    level: "عالي",
  },
  {
    id: "session-timeout",
    title: "انتهاء الجلسة التلقائي",
    description: "تسجيل خروج تلقائي بعد فترة عدم نشاط",
    enabled: true,
    level: "متوسط",
  },
  {
    id: "login-alerts",
    title: "تنبيهات تسجيل الدخول",
    description: "إشعارات عند تسجيل الدخول من جهاز جديد",
    enabled: false,
    level: "متوسط",
  },
  {
    id: "data-encryption",
    title: "تشفير البيانات",
    description: "تشفير جميع البيانات الشخصية",
    enabled: true,
    level: "عالي",
  },
]

export function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-600" />
          إعدادات الأمان
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* حالة الأمان العامة */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">حسابك محمي</h3>
              <p className="text-sm text-green-700">جميع إعدادات الأمان الأساسية مفعلة</p>
            </div>
            <Badge className="bg-green-100 text-green-800">آمن</Badge>
          </div>
        </div>

        {/* إعدادات الأمان */}
        <div className="space-y-4">
          {securityFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{feature.title}</h4>
                  <Badge
                    variant="outline"
                    className={
                      feature.level === "عالي" ? "text-red-600 border-red-200" : "text-yellow-600 border-yellow-200"
                    }
                  >
                    {feature.level}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
              <Switch checked={feature.enabled} />
            </div>
          ))}
        </div>

        {/* إدارة كلمات المرور */}
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Key className="h-4 w-4" />
            إدارة كلمات المرور
          </h3>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Lock className="h-4 w-4 mr-2" />
              تغيير كلمة المرور
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Eye className="h-4 w-4 mr-2" />
              عرض الأجهزة المتصلة
            </Button>
          </div>
        </div>

        {/* تحذيرات الأمان */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800">نصائح أمنية</h4>
              <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                <li>• لا تشارك كلمة المرور مع أحد</li>
                <li>• استخدم كلمة مرور قوية ومعقدة</li>
                <li>• فعل المصادقة الثنائية دائماً</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

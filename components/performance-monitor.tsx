"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, Zap, Clock, Target } from "lucide-react"
import { useState, useEffect } from "react"

interface PerformanceMetrics {
  loadTime: number
  apiResponseTime: number
  userEngagement: number
  completionRate: number
  errorRate: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    apiResponseTime: 0,
    userEngagement: 85,
    completionRate: 78,
    errorRate: 2.1,
  })

  useEffect(() => {
    // قياس وقت تحميل الصفحة
    const loadTime = performance.now()
    setMetrics((prev) => ({ ...prev, loadTime: Math.round(loadTime) }))

    // محاكاة قياس وقت استجابة API
    const measureApiResponse = async () => {
      const start = performance.now()
      try {
        await fetch("/api/health")
        const end = performance.now()
        setMetrics((prev) => ({ ...prev, apiResponseTime: Math.round(end - start) }))
      } catch (error) {
        console.error("خطأ في قياس الأداء:", error)
      }
    }

    measureApiResponse()
  }, [])

  const getPerformanceStatus = (value: number, type: "time" | "percentage" | "error") => {
    if (type === "time") {
      if (value < 100) return { status: "excellent", icon: TrendingUp, color: "text-green-600" }
      if (value < 300) return { status: "good", icon: Minus, color: "text-yellow-600" }
      return { status: "poor", icon: TrendingDown, color: "text-red-600" }
    }

    if (type === "error") {
      if (value < 1) return { status: "excellent", icon: TrendingUp, color: "text-green-600" }
      if (value < 5) return { status: "good", icon: Minus, color: "text-yellow-600" }
      return { status: "poor", icon: TrendingDown, color: "text-red-600" }
    }

    // percentage
    if (value > 80) return { status: "excellent", icon: TrendingUp, color: "text-green-600" }
    if (value > 60) return { status: "good", icon: Minus, color: "text-yellow-600" }
    return { status: "poor", icon: TrendingDown, color: "text-red-600" }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-600" />
          مراقب الأداء
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* وقت التحميل */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm">وقت التحميل</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{metrics.loadTime}ms</span>
              {(() => {
                const status = getPerformanceStatus(metrics.loadTime, "time")
                return <status.icon className={`h-4 w-4 ${status.color}`} />
              })()}
            </div>
          </div>
          <Progress value={Math.max(0, 100 - metrics.loadTime / 10)} className="h-2" />
        </div>

        {/* وقت استجابة API */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm">استجابة API</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{metrics.apiResponseTime}ms</span>
              {(() => {
                const status = getPerformanceStatus(metrics.apiResponseTime, "time")
                return <status.icon className={`h-4 w-4 ${status.color}`} />
              })()}
            </div>
          </div>
          <Progress value={Math.max(0, 100 - metrics.apiResponseTime / 10)} className="h-2" />
        </div>

        {/* معدل التفاعل */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">معدل التفاعل</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{metrics.userEngagement}%</span>
              {(() => {
                const status = getPerformanceStatus(metrics.userEngagement, "percentage")
                return <status.icon className={`h-4 w-4 ${status.color}`} />
              })()}
            </div>
          </div>
          <Progress value={metrics.userEngagement} className="h-2" />
        </div>

        {/* معدل الإكمال */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">معدل إكمال الدورات</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{metrics.completionRate}%</span>
              {(() => {
                const status = getPerformanceStatus(metrics.completionRate, "percentage")
                return <status.icon className={`h-4 w-4 ${status.color}`} />
              })()}
            </div>
          </div>
          <Progress value={metrics.completionRate} className="h-2" />
        </div>

        {/* معدل الأخطاء */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">معدل الأخطاء</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{metrics.errorRate}%</span>
              {(() => {
                const status = getPerformanceStatus(metrics.errorRate, "error")
                return <status.icon className={`h-4 w-4 ${status.color}`} />
              })()}
            </div>
          </div>
          <Progress value={Math.max(0, 100 - metrics.errorRate * 10)} className="h-2" />
        </div>

        {/* حالة عامة */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">الحالة العامة</span>
            <Badge variant="outline" className="text-green-600 border-green-200">
              ممتاز
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

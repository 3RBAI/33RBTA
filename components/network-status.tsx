"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff } from "lucide-react"

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [apiStatus, setApiStatus] = useState<"available" | "unavailable" | "checking">("checking")

  // مراقبة حالة الاتصال بالإنترنت
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // فحص حالة API
  useEffect(() => {
    const checkApiStatus = async () => {
      if (!isOnline) {
        setApiStatus("unavailable")
        return
      }

      try {
        const response = await fetch("/api/health")
        if (response.ok) {
          setApiStatus("available")
        } else {
          setApiStatus("unavailable")
        }
      } catch (error) {
        setApiStatus("unavailable")
      }
    }

    checkApiStatus()
    const interval = setInterval(checkApiStatus, 60000) // فحص كل دقيقة

    return () => clearInterval(interval)
  }, [isOnline])

  if (!isOnline) {
    return (
      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
        <WifiOff className="h-3 w-3 mr-1" />
        أنت غير متصل بالإنترنت
      </Badge>
    )
  }

  if (apiStatus === "unavailable") {
    return (
      <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">
        <Wifi className="h-3 w-3 mr-1" />
        الخدمة غير متاحة حالياً
      </Badge>
    )
  }

  return (
    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
      <Wifi className="h-3 w-3 mr-1" />
      متصل
    </Badge>
  )
}

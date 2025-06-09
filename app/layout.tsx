import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "منصة التعلم الذكي - مدعومة بالذكاء الاصطناعي",
  description: "منصة تعليمية متطورة تستخدم Google Gemini AI لتوفير تجربة تعلم مخصصة وتفاعلية",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

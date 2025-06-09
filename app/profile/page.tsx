"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Edit, Camera, Award, BookOpen, Clock, Star } from "lucide-react"
import { useState } from "react"

const userStats = [
  { label: "الدورات المكتملة", value: "12", icon: Award },
  { label: "ساعات التعلم", value: "48", icon: Clock },
  { label: "الدورات الجارية", value: "3", icon: BookOpen },
  { label: "متوسط التقييم", value: "4.8", icon: Star },
]

const completedCourses = [
  { title: "أساسيات البرمجة مع Python", progress: 100, rating: 5 },
  { title: "مقدمة في الذكاء الاصطناعي", progress: 100, rating: 4 },
  { title: "تطوير تطبيقات الويب", progress: 100, rating: 5 },
]

const currentCourses = [
  { title: "علوم البيانات مع Python", progress: 65 },
  { title: "الأمن السيبراني الأساسي", progress: 30 },
  { title: "تصميم واجهات المستخدم", progress: 15 },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "أحمد محمد",
    email: "ahmed@example.com",
    bio: "مطور برمجيات مهتم بالذكاء الاصطناعي وتطوير الويب",
    location: "الرياض، السعودية",
    joinDate: "يناير 2024",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  الملف الشخصي
                  <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profile.name.charAt(0)}
                    </div>
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      placeholder="الاسم"
                    />
                    <Input
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      placeholder="البريد الإلكتروني"
                    />
                    <Input
                      value={profile.location}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      placeholder="الموقع"
                    />
                    <Textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      placeholder="نبذة عنك"
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => setIsEditing(false)}>
                        حفظ
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                        إلغاء
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{profile.name}</h3>
                      <p className="text-gray-600">{profile.email}</p>
                    </div>
                    <p className="text-sm text-gray-600">{profile.bio}</p>
                    <div className="text-sm text-gray-500">
                      <p>📍 {profile.location}</p>
                      <p>📅 انضم في {profile.joinDate}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>إحصائياتي</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <stat.icon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{stat.label}</span>
                    </div>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Courses */}
            <Card>
              <CardHeader>
                <CardTitle>الدورات الجارية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentCourses.map((course, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{course.title}</h4>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Completed Courses */}
            <Card>
              <CardHeader>
                <CardTitle>الدورات المكتملة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedCourses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{course.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          مكتمل
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < course.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      عرض الشهادة
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>الإنجازات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-medium">متعلم نشط</h4>
                    <p className="text-xs text-gray-600">أكمل 10 دورات</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-medium">متميز</h4>
                    <p className="text-xs text-gray-600">حصل على تقييم 5 نجوم</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-medium">مثابر</h4>
                    <p className="text-xs text-gray-600">50 ساعة تعلم</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

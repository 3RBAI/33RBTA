"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const categories = ["برمجة", "ذكاء اصطناعي", "تطوير ويب", "علوم البيانات", "الأمن السيبراني", "التصميم"]

const levels = ["مبتدئ", "متوسط", "متقدم"]

export function CourseFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>التصنيفات</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2 space-x-reverse">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المستوى</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2 space-x-reverse">
              <Checkbox id={level} />
              <Label htmlFor={level} className="text-sm">
                {level}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>نطاق السعر</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={50} className="w-full" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{priceRange[0]} ريال</span>
            <span>{priceRange[1]} ريال</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

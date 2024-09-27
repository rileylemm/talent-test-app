'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type UserStatus = 'highSchool' | 'college' | 'employed' | null

export function UserStatus() {
  const t = useTranslations('userStatus')
  const router = useRouter()
  const [status, setStatus] = useState<UserStatus>(null)

  const handleStatusChange = (value: UserStatus) => {
    setStatus(value)
  }

const handleNext = () => {
  if (status) {
    localStorage.setItem('userStatus', status)
    router.push('/favorite-subjects')  // Changed from '/suggestions' to '/favorite-subjects'
  }
}

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
        <RadioGroup value={status || ''} onValueChange={(value) => handleStatusChange(value as UserStatus)}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="highSchool" id="highSchool" />
            <Label htmlFor="highSchool">{t('highSchool')}</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="college" id="college" />
            <Label htmlFor="college">{t('college')}</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="employed" id="employed" />
            <Label htmlFor="employed">{t('employed')}</Label>
          </div>
        </RadioGroup>
        <Button onClick={handleNext} disabled={!status} className="w-full mt-6">
          {t('next')}
        </Button>
      </CardContent>
    </Card>
  )
}

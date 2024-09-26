'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function Interests() {
  const t = useTranslations('interests')
  const router = useRouter()
  const [interests, setInterests] = useState(['', '', ''])

  const handleInterestChange = (index: number, value: string) => {
    const newInterests = [...interests]
    newInterests[index] = value
    setInterests(newInterests)
  }

  const addInterest = () => {
    if (interests.length < 5) {
      setInterests([...interests, ''])
    }
  }

  const handleNext = () => {
    const filledInterests = interests.filter(interest => interest.trim() !== '')
    if (filledInterests.length >= 3) {
      localStorage.setItem('userInterests', JSON.stringify(filledInterests))
      router.push('/suggestions')
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-4">
          {interests.map((interest, index) => (
            <Input
              key={index}
              placeholder={t('interestPlaceholder')}
              value={interest}
              onChange={(e) => handleInterestChange(index, e.target.value)}
            />
          ))}
        </div>
        {interests.length < 5 && (
          <Button onClick={addInterest} className="mt-4">
            {t('addMore')}
          </Button>
        )}
        <Button 
          onClick={handleNext} 
          className="w-full mt-6"
          disabled={interests.filter(interest => interest.trim() !== '').length < 3}
        >
          {t('next')}
        </Button>
      </CardContent>
    </Card>
  )
}


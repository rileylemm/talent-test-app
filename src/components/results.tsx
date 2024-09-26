'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

type TalentScore = {
  talent: string;
  score: number;
}

export function Results() {
  const t = useTranslations('results')
  const router = useRouter()
  const [topTalents, setTopTalents] = useState<TalentScore[]>([])
  const [allTalents, setAllTalents] = useState<TalentScore[]>([])

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('talentTestResults') || '{}')
    const sortedTalents = Object.entries(results)
      .map(([talent, score]) => ({ talent, score: score as number }))
      .sort((a, b) => b.score - a.score)
    
    setTopTalents(sortedTalents.slice(0, 5))
    setAllTalents(sortedTalents)
  }, [])

  const maxScore = Math.max(...topTalents.map(t => t.score), 1)

  const handleNextStep = () => {
    localStorage.setItem('allTalentScores', JSON.stringify(allTalents))
    router.push('/interests')  // Changed from '/suggestions' to '/interests'
  }

  return (
    <div className="space-y-6">
      <p className="text-lg">{t('description')}</p>
      {topTalents.map((talent, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{talent.talent}</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={(talent.score / maxScore) * 100} className="mt-2" />
            <p className="mt-2">{t('scoreDescription', { score: talent.score })}</p>
          </CardContent>
        </Card>
      ))}
      <Button onClick={handleNextStep} className="w-full">
        {t('nextStep')}
      </Button>
    </div>
  )
}
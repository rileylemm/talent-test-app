'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import storage from '@/lib/storage'

type TalentScore = {
  talent: string;
  score: number;
}

export function Results() {
  const t = useTranslations('results')
  const router = useRouter()
  const [talents, setTalents] = useState<TalentScore[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTalentScores()
  }, [])

  const fetchTalentScores = () => {
    try {
      setIsLoading(true)
      const talentScores = storage.getTalents()
      if (talentScores.length === 0) {
        setError(t('noScores'))
      } else {
        const sortedTalents = talentScores.sort((a, b) => b.score - a.score)
        setTalents(sortedTalents)
      }
    } catch (error) {
      console.error('Error fetching talent scores:', error)
      setError(t('error'))
    } finally {
      setIsLoading(false)
    }
  }

  const handleNextStep = () => {
    router.push('/interests')
  }

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    fetchTalentScores()
  }

  if (isLoading) {
    return <div className="text-center">{t('loading')}</div>
  }

  if (error) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{t('errorTitle')}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button onClick={handleRetry} className="w-full">
          {t('retry')}
        </Button>
      </div>
    )
  }

  if (talents.length === 0) {
    return (
      <div className="space-y-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{t('noScoresTitle')}</AlertTitle>
          <AlertDescription>{t('noScoresDescription')}</AlertDescription>
        </Alert>
        <Button onClick={() => router.push('/test')} className="w-full">
          {t('takeTest')}
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{t('description')}</p>
          {talents.map((talent, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{t(`talents.${talent.talent}`)}</span>
                <span>{t('scoreDescription', { score: talent.score })}</span>
              </div>
              <Progress value={talent.score} max={100} className="w-full" />
            </div>
          ))}
        </CardContent>
      </Card>
      <Button onClick={handleNextStep} className="w-full">
        {t('nextStep')}
      </Button>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { scenarios, talents } from '@/lib/scenarios'

export default function TalentTest() {
  const t = useTranslations('test')
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(undefined)
  const [talentScores, setTalentScores] = useState<Record<string, number>>(
    Object.fromEntries(talents.map(talent => [talent, 0]))
  )

  const router = useRouter()

  const handleAnswer = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNext = () => {
    if (selectedAnswer !== undefined) {
      const answer = scenarios[currentScenario].answers[parseInt(selectedAnswer)]
      const newScores = { ...talentScores }

      Object.entries(answer.positiveScores).forEach(([talent, score]) => {
        newScores[talent] = (newScores[talent] || 0) + score
      })

      Object.entries(answer.negativeScores).forEach(([talent, score]) => {
        newScores[talent] = (newScores[talent] || 0) + score
      })

      setTalentScores(newScores)

      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(prevScenario => prevScenario + 1)
        setSelectedAnswer(undefined)
      } else {
        localStorage.setItem('talentTestResults', JSON.stringify(newScores))
        router.push('/results')
      }
    }
  }

  const progress = ((currentScenario + 1) / scenarios.length) * 100

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <Progress value={progress} className="mb-4" />
        <h2 className="text-2xl font-bold mb-4">{scenarios[currentScenario].question}</h2>
        <RadioGroup 
          key={currentScenario} 
          value={selectedAnswer} 
          onValueChange={handleAnswer}
        >
          {scenarios[currentScenario].answers.map((answer, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={index.toString()} id={`answer-${index}`} />
              <Label htmlFor={`answer-${index}`}>{answer.text}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleNext} disabled={selectedAnswer === undefined} className="mt-4">
          {currentScenario < scenarios.length - 1 ? t('next') : t('finish')}
        </Button>
        <div className="mt-4 text-sm text-gray-500">
          {t('progress', { current: currentScenario + 1, total: scenarios.length })}
        </div>
      </CardContent>
    </Card>
  )
}

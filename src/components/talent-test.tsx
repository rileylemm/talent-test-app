'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import storage from '@/lib/storage'
import { scenarios, Scenario, Answer, Talent, ScoreMapping, talents } from '@/lib/scenarios'

type TalentScore = {
  talent: Talent;
  score: number;
}

export function TalentTest() {
  const t = useTranslations('test')
  const router = useRouter()
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [talentScores, setTalentScores] = useState<TalentScore[]>(
    talents.map(talent => ({ talent, score: 0 }))
  )

  const handleAnswer = () => {
    if (selectedAnswer === null) return

    console.log('Selected answer:', selectedAnswer)

    const updatedScores: Record<Talent, number> = { ...talentScores.reduce((acc, curr) => ({ ...acc, [curr.talent]: curr.score }), {}) }

    const selectedAnswerData = scenarios[currentScenario].answers[selectedAnswer]
    
    // Apply positive scores
    Object.entries(selectedAnswerData.positiveScores).forEach(([talent, score]) => {
      updatedScores[talent as Talent] = (updatedScores[talent as Talent] || 0) + score
    })

    // Apply negative scores
    Object.entries(selectedAnswerData.negativeScores).forEach(([talent, score]) => {
      updatedScores[talent as Talent] = (updatedScores[talent as Talent] || 0) + score
    })

    const newScores = Object.entries(updatedScores).map(([talent, score]) => ({ talent: talent as Talent, score }))
    console.log('Updated talent scores:', newScores)
    setTalentScores(newScores)

    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setSelectedAnswer(null)
    } else {
      console.log('Test complete. Final talent scores:', newScores)
      storage.setTalents(newScores)
      console.log('Talent scores saved to storage')
      router.push('/results')
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{t('progress', { current: currentScenario + 1, total: scenarios.length })}</p>
        <p className="mb-4">{scenarios[currentScenario].question}</p>
        <RadioGroup value={selectedAnswer?.toString() || ''} onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
          {scenarios[currentScenario].answers.map((answer, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={index.toString()} id={`answer-${index}`} />
              <Label htmlFor={`answer-${index}`}>{answer.text}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleAnswer} className="mt-4 w-full" disabled={selectedAnswer === null}>
          {currentScenario < scenarios.length - 1 ? t('next') : t('finish')}
        </Button>
      </CardContent>
    </Card>
  )
}
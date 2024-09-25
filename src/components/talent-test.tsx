"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { scenarios, ScoreMapping, Scenario } from "@/lib/scenarios"

export default function TalentTest() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [scores, setScores] = useState<ScoreMapping>({})
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      const answerIndex = parseInt(selectedAnswer)
      const answer = scenarios[currentScenario].answers[answerIndex]
      const newScores = { ...scores }

      Object.entries(answer.positiveScores).forEach(([talent, score]) => {
        newScores[talent] = (newScores[talent] || 0) + score
      })
      Object.entries(answer.negativeScores).forEach(([talent, score]) => {
        newScores[talent] = (newScores[talent] || 0) + score
      })

      setScores(newScores)

      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1)
        setSelectedAnswer(null)
      } else {
        setShowResults(true)
      }
    }
  }

  const getTopTalents = () => {
    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
  }

  if (showResults) {
    const topTalents = getTopTalents()
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Your Top Talents</CardTitle>
          <CardDescription>Based on your responses</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {topTalents.map(([talent, score], index) => (
              <li key={talent} className="flex justify-between items-center">
                <span>{index + 1}. {talent}</span>
                <span className="font-semibold">Score: {score}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    )
  }

  const currentQuestion: Scenario = scenarios[currentScenario]
  const progress = ((currentScenario + 1) / scenarios.length) * 100

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Talent Test</CardTitle>
        <CardDescription>Scenario {currentScenario + 1} of {scenarios.length}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-lg">{currentQuestion.question}</p>
        <RadioGroup value={selectedAnswer || ""} onValueChange={setSelectedAnswer}>
          {currentQuestion.answers.map((answer, index) => (
            <div key={index} className="flex items-start space-x-2 mb-4">
              <RadioGroupItem value={index.toString()} id={`answer-${index}`} className="mt-1" />
              <Label htmlFor={`answer-${index}`} className="flex-grow">{answer.text}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Button 
          onClick={handleSubmit} 
          disabled={selectedAnswer === null}
          className="w-full mb-4"
        >
          Submit
        </Button>
        <Progress value={progress} className="w-full mb-2" />
        <p className="text-sm text-muted-foreground">
          Progress: {currentScenario + 1} / {scenarios.length}
        </p>
      </CardFooter>
    </Card>
  )
}

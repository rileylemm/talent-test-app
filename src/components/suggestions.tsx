'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCompletion } from 'ai/react'

type TalentScore = {
  talent: string;
  score: number;
}

export function Suggestions() {
  const t = useTranslations('suggestions')
  const [talents, setTalents] = useState<TalentScore[]>([])
  const [suggestions, setSuggestions] = useState<{ jobs: string[], education: string[] }>({ jobs: [], education: [] })

  const { complete } = useCompletion({
    api: '/api/suggestions',
  })

  useEffect(() => {
    const talentScores = JSON.parse(localStorage.getItem('allTalentScores') || '[]')
    setTalents(talentScores)
  }, [])

  useEffect(() => {
    if (talents.length > 0) {
      getSuggestions()
    }
  }, [talents])

  const getSuggestions = async () => {
    const talentString = talents.map(t => `${t.talent}: ${t.score}`).join(', ')
    const prompt = `Based on the following talent scores: ${talentString}, suggest 5 suitable jobs and 5 education paths. Format the response as JSON with 'jobs' and 'education' arrays.`
    
    try {
      const result = await complete(prompt)
      const parsedResult = JSON.parse(result)
      setSuggestions(parsedResult)
    } catch (error) {
      console.error('Error getting suggestions:', error)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('jobSuggestions')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {suggestions.jobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t('educationSuggestions')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {suggestions.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Button onClick={getSuggestions} className="w-full">
        {t('refreshSuggestions')}
      </Button>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import storage from '@/lib/storage'
import { PromptData } from '@/lib/promptStructures'
import ReactMarkdown from 'react-markdown'

export function Suggestions() {
  const t = useTranslations('suggestions')
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [suggestions, setSuggestions] = useState<string>('')

  useEffect(() => {
    fetchSuggestions()
  }, [])

  const fetchSuggestions = async () => {
    try {
      setIsLoading(true)
      const talents = storage.getTalents()
      const promptData: PromptData = {
        topTalents: talents.slice(0, 5),
        lowestTalents: talents.slice(-5).reverse(),
        interests: storage.getInterests(),
        currentStatus: storage.getCurrentStatus(),
        favoriteSubjects: storage.getFavoriteSubjects(),
      }

      const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(promptData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonData = JSON.parse(line.slice(6))
              if (jsonData.choices && jsonData.choices[0].delta.content) {
                accumulatedContent += jsonData.choices[0].delta.content
                setSuggestions(accumulatedContent)
              }
            } catch (e) {
              console.error('Error parsing JSON:', e)
            }
          }
        }
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error)
      setError(t('error'))
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    fetchSuggestions()
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
        </CardHeader>
        <CardContent>
          {suggestions ? (
            <ReactMarkdown>{suggestions}</ReactMarkdown>
          ) : (
            <p>{t('noSuggestions')}</p>
          )}
        </CardContent>
      </Card>
      <Button onClick={() => router.push('/dashboard')} className="w-full">
        {t('viewDashboard')}
      </Button>
    </div>
  )
}
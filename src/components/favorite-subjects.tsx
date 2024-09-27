'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import storage from '@/lib/storage'
import { Category, SelectedSubjects } from '@/lib/types'

const categories: Category[] = [
  {
    name: "Mathematics",
    id: "math",
    subcategories: [
      { name: "Algebra", id: "algebra" },
      { name: "Geometry", id: "geometry" },
      { name: "Calculus", id: "calculus" },
      { name: "Statistics", id: "statistics" },
      { name: "Other Math", id: "other_math" },
    ],
  },
  {
    name: "Sciences",
    id: "science",
    subcategories: [
      { name: "Physics", id: "physics" },
      { name: "Chemistry", id: "chemistry" },
      { name: "Biology", id: "biology" },
      { name: "Earth Science", id: "earth_science" },
      { name: "Astronomy", id: "astronomy" },
      { name: "Other Science", id: "other_science" },
    ],
  },
  {
    name: "Languages",
    id: "language",
    subcategories: [
      { name: "English", id: "english" },
      { name: "Spanish", id: "spanish" },
      { name: "French", id: "french" },
      { name: "German", id: "german" },
      { name: "Mandarin", id: "mandarin" },
      { name: "Japanese", id: "japanese" },
      { name: "Other Language", id: "other_language" },
    ],
  },
  {
    name: "Social Studies",
    id: "social_studies",
    subcategories: [
      { name: "History", id: "history" },
      { name: "Geography", id: "geography" },
      { name: "Economics", id: "economics" },
      { name: "Political Science", id: "political_science" },
      { name: "Psychology", id: "psychology" },
      { name: "Sociology", id: "sociology" },
      { name: "Other Social Studies", id: "other_social_studies" },
    ],
  },
  {
    name: "Arts and Humanities",
    id: "arts_humanities",
    subcategories: [
      { name: "Literature", id: "literature" },
      { name: "Visual Arts", id: "visual_arts" },
      { name: "Music", id: "music" },
      { name: "Theater", id: "theater" },
      { name: "Philosophy", id: "philosophy" },
      { name: "Other Arts/Humanities", id: "other_arts_humanities" },
    ],
  },
  {
    name: "Physical Education and Health",
    id: "pe_health",
    subcategories: [
      { name: "Team Sports", id: "team_sports" },
      { name: "Individual Sports", id: "individual_sports" },
      { name: "Fitness", id: "fitness" },
      { name: "Health Education", id: "health_education" },
      { name: "Other PE/Health", id: "other_pe_health" },
    ],
  },
  {
    name: "Technology and Computer Science",
    id: "tech_cs",
    subcategories: [
      { name: "Programming", id: "programming" },
      { name: "Web Development", id: "web_development" },
      { name: "Data Science", id: "data_science" },
      { name: "Cybersecurity", id: "cybersecurity" },
      { name: "Other Tech/CS", id: "other_tech_cs" },
    ],
  },
  {
    name: "Vocational Studies",
    id: "vocational",
    subcategories: [
      { name: "Business", id: "business" },
      { name: "Engineering", id: "engineering" },
      { name: "Agriculture", id: "agriculture" },
      { name: "Culinary Arts", id: "culinary_arts" },
      { name: "Other Vocational", id: "other_vocational" },
    ],
  },
  {
    name: "Other",
    id: "other",
    subcategories: [
      { name: "Other Subject", id: "other_subject" },
    ],
  },
];

export function FavoriteSubjects() {
  const t = useTranslations('favoriteSubjects')
  const router = useRouter()
  const [selectedSubjects, setSelectedSubjects] = useState<SelectedSubjects>({})
  const [otherSubjects, setOtherSubjects] = useState<{ [key: string]: string }>({})

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedSubjects(prev => {
      const categoryState = prev[categoryId];
      const allSelected = categoryState && Object.values(categoryState).every(Boolean);
      
      const newCategoryState = categories
        .find(c => c.id === categoryId)?.subcategories
        .reduce((acc, sub) => ({ ...acc, [sub.id]: !allSelected }), {});

      return { ...prev, [categoryId]: newCategoryState };
    });
  };

  const handleSubjectToggle = (categoryId: string, subcategoryId: string) => {
    setSelectedSubjects(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [subcategoryId]: !prev[categoryId]?.[subcategoryId]
      }
    }))
  }

  const handleOtherSubjectChange = (categoryId: string, value: string) => {
    setOtherSubjects(prev => ({
      ...prev,
      [categoryId]: value
    }))
  }

  const isCategorySelected = (categoryId: string) => {
    const categoryState = selectedSubjects[categoryId];
    return categoryState && Object.values(categoryState).some(Boolean);
  };

  const handleSubmit = () => {
    const formattedSelection = Object.entries(selectedSubjects).flatMap(([categoryId, subcategories]) => 
      Object.entries(subcategories)
        .filter(([, isSelected]) => isSelected)
        .map(([subcategoryId]) => {
          const category = categories.find(c => c.id === categoryId)
          const subcategory = category?.subcategories.find(s => s.id === subcategoryId)
          return `${category?.name} - ${subcategory?.name}`
        })
    )

    Object.entries(otherSubjects).forEach(([categoryId, value]) => {
      if (value) {
        const category = categories.find(c => c.id === categoryId)
        formattedSelection.push(`${category?.name} - ${value}`)
      }
    })

    storage.setFavoriteSubjects(formattedSelection)
    router.push('/suggestions')
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{t('instruction')}</p>
        <Accordion type="multiple" className="w-full">
          {categories.map((category) => (
            <AccordionItem value={category.id} key={category.id}>
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={isCategorySelected(category.id)}
                    onCheckedChange={() => handleCategoryToggle(category.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${category.id}-${subcategory.id}`}
                        checked={selectedSubjects[category.id]?.[subcategory.id] || false}
                        onCheckedChange={() => handleSubjectToggle(category.id, subcategory.id)}
                      />
                      <Label
                        htmlFor={`${category.id}-${subcategory.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {subcategory.name}
                      </Label>
                    </div>
                  ))}
                  {category.id !== 'other' && (
                    <div className="col-span-2">
                      <Label htmlFor={`${category.id}-other`} className="text-sm font-medium">
                        Other (please specify)
                      </Label>
                      <Input
                        id={`${category.id}-other`}
                        value={otherSubjects[category.id] || ''}
                        onChange={(e) => handleOtherSubjectChange(category.id, e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button onClick={handleSubmit} className="w-full mt-6">
          {t('submit')}
        </Button>
      </CardContent>
    </Card>
  )
}
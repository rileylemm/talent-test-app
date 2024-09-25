import { useTranslations } from 'next-intl'

export function LandingHero() {
  const t = useTranslations('landing');

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {t('title')}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {t('description')}
      </p>
    </div>
  )
}

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { TalentTest } from "@/components/talent-test"

export default function TestPage() {
  const t = useTranslations('test');

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" passHref>
        <Button variant="outline" className="mb-4">
          {t('backToHome')}
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-6">{t('description')}</p>
      <TalentTest />
    </div>
  )
}
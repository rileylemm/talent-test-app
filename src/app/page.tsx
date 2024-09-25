import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LandingHero } from "@/components/landing-hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <LandingHero />
      <Link href="/test" passHref>
        <Button size="lg" className="mt-8">
          Take Test
        </Button>
      </Link>
    </main>
  )
}

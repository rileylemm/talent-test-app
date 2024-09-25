import Link from 'next/link'
import { Button } from "@/components/ui/button"
import TalentTest from "@/components/talent-test"

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" passHref>
        <Button variant="outline" className="mb-4">
          Back to Home
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Talent Test</h1>
      <p className="mb-6">
        This test consists of 23 scenarios. For each scenario, choose the answer that best reflects how you would respond. Your choices will help determine your unique talents and potential career paths.
      </p>
      <TalentTest />
    </div>
  )
}

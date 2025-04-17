import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreventativeCareCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">The Future of Preventative Care</h1>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              HealthBridge is the platform powered by wearable technology & health coaches. The Sleep Monitoring pilot
              using Oura rings was a commercial success, including various permutations of synchronous and asynchronous
              individual and group coaching.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The health system's $400M loss during the COVID-19 pandemic prompted a critical reassessment of how to
              deliver U.S. healthcare in a cost-effective, patient-centered manner.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>So What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This initiative repositioned wellness as a primary touchpoint for patients at Sutter, established a
              scalable model for pre-symptomatic illness prevention, and demonstrated a viable pathway for health care
              automation and expansion.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <h2>Project Overview</h2>
        <p>
          I led the development of HealthBridge, a platform for sustainably monitoring patients' health using
          decentralized health signals and health coaches. This innovative approach to preventative care was validated
          through successful pilots of a Sleep Monitoring Program and Metabolic Wellness Program.
        </p>

        <h2>Challenges</h2>
        <ul>
          <li>Financial pressures on the healthcare system following the COVID-19 pandemic</li>
          <li>Need for cost-effective, scalable preventative care solutions</li>
          <li>Integration of wearable technology with healthcare coaching</li>
          <li>Creating sustainable models for pre-symptomatic illness prevention</li>
        </ul>

        <h2>Solution</h2>
        <p>The HealthBridge platform combined several innovative elements:</p>
        <ol>
          <li>
            <strong>Wearable Technology Integration:</strong> Utilized Oura rings for sleep monitoring and other
            wearables for health data collection
          </li>
          <li>
            <strong>Health Coaching Models:</strong> Developed various coaching approaches including synchronous and
            asynchronous, individual and group formats
          </li>
          <li>
            <strong>Data Analytics:</strong> Created systems to analyze health data and provide actionable insights
          </li>
          <li>
            <strong>Scalable Program Design:</strong> Structured programs that could be efficiently scaled across large
            patient populations
          </li>
        </ol>

        <h2>Results</h2>
        <p>The HealthBridge platform and its pilot programs achieved significant outcomes:</p>
        <ul>
          <li>Repositioned wellness as a primary touchpoint for patients at Sutter Health</li>
          <li>Established a scalable model for pre-symptomatic illness prevention</li>
          <li>Demonstrated a viable pathway for healthcare automation and expansion</li>
          <li>The Sleep Monitoring pilot using Oura rings was a commercial success</li>
        </ul>

        <h2>Key Learnings</h2>
        <p>
          This project highlighted the potential for technology-enabled preventative care to transform healthcare
          delivery. By combining wearable technology with personalized coaching, we created a model that was both
          effective for patients and financially sustainable for healthcare providers.
        </p>
      </div>
    </div>
  )
}

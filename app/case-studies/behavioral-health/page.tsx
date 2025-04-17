import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BehavioralHealthCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Behavioral Health Clinical Systems</h1>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I led the redesign of the clinical toolset, focusing on treatment planning, data collection, and session
              documentation to address the challenges faced by overworked clinicians.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To enhance the delivery of ABA therapy by hundreds of providers, Xolv required a streamlined and scalable
              clinician interface to support rapid organizational growth.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>So What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The revamped tools facilitated EasterSeals Hawaii in transitioning to a paperless environment, improved
              operational efficiency at EasterSeals NorCal, and enabled the adoption of Xolv by additional provider
              organizations, enhancing service delivery, stickiness & clinician satisfaction.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <h2>Project Overview</h2>
        <p>
          As the product leader for Xolv's behavioral health clinical systems, I managed the transformation of
          independently developed utilities into a centralized EMR optimized for scale and efficient user experience.
          This system improved clinical and operational workflows while facilitating adoption by new providers.
        </p>

        <h2>Challenges</h2>
        <ul>
          <li>Overworked clinicians struggling with documentation burden</li>
          <li>Fragmented tools and systems</li>
          <li>Need for scalable solutions to support organizational growth</li>
          <li>Requirement for detailed data collection and analysis</li>
        </ul>

        <h2>Solution</h2>
        <p>I led a comprehensive redesign of the clinical toolset with a focus on three key areas:</p>
        <ol>
          <li>
            <strong>Treatment Planning:</strong> Streamlined the process for creating and updating treatment plans
          </li>
          <li>
            <strong>Data Collection:</strong> Implemented intuitive interfaces for capturing clinical data
          </li>
          <li>
            <strong>Session Documentation:</strong> Developed efficient workflows for documenting therapy sessions
          </li>
        </ol>

        <h2>Results</h2>
        <p>The revamped clinical systems delivered significant benefits:</p>
        <ul>
          <li>Enabled EasterSeals Hawaii to transition to a paperless environment</li>
          <li>Improved operational efficiency at EasterSeals NorCal</li>
          <li>Facilitated the adoption of Xolv by additional provider organizations</li>
          <li>Enhanced service delivery, stickiness, and clinician satisfaction</li>
        </ul>

        <h2>Key Learnings</h2>
        <p>
          This project reinforced the importance of user-centered design in healthcare technology. By focusing on the
          needs of clinicians and streamlining their workflows, we were able to create a system that not only improved
          efficiency but also enhanced the quality of care provided to patients.
        </p>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ElectronicHealthRecordCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Electronic Health Record</h1>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I orchestrated the creation of a bespoke EMR system to enhance clinical decision-making, provide detailed
              analytics on patient engagement and outcomes, and integrate seamless billing processes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Existing EMR systems could not accommodate our specialized equipment or the depth of data analysis we
              required.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>So What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The implementation of this EMR revealed a 60% reduction in back pain and a 59% decrease in neck pain,
              showcasing its effectiveness and the potential for broader application.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <h2>Project Overview</h2>
        <p>
          I led the development of a custom clinical records and decision support software system that facilitated
          detailed analysis of patient progress and outcomes. This bespoke EMR was designed specifically to meet the
          unique needs of our specialized physical therapy practice.
        </p>

        <h2>Challenges</h2>
        <ul>
          <li>Existing EMR systems lacked support for our specialized equipment</li>
          <li>Need for deeper data analysis capabilities than off-the-shelf solutions provided</li>
          <li>Requirement for seamless integration of clinical and billing processes</li>
          <li>Necessity for robust decision support to guide clinical interventions</li>
        </ul>

        <h2>Solution</h2>
        <p>The custom EMR system I developed included several key features:</p>
        <ol>
          <li>
            <strong>Clinical Decision Support:</strong> Tools to enhance therapist decision-making
          </li>
          <li>
            <strong>Patient Engagement Analytics:</strong> Detailed tracking of patient participation and adherence
          </li>
          <li>
            <strong>Outcomes Monitoring:</strong> Comprehensive measurement of treatment effectiveness
          </li>
          <li>
            <strong>Integrated Billing:</strong> Seamless connection between clinical documentation and billing
            processes
          </li>
          <li>
            <strong>Specialized Equipment Integration:</strong> Support for our unique therapeutic equipment
          </li>
        </ol>

        <h2>Results</h2>
        <p>The implementation of this custom EMR system yielded impressive results:</p>
        <ul>
          <li>60% reduction in back pain among patients</li>
          <li>59% decrease in neck pain among patients</li>
          <li>Enhanced ability to demonstrate treatment effectiveness to partners and payers</li>
          <li>Improved clinical decision-making based on comprehensive data analysis</li>
        </ul>

        <h2>Key Learnings</h2>
        <p>
          This project highlighted the value of purpose-built technology solutions in healthcare. By creating an EMR
          system tailored to our specific needs, we were able to capture and analyze data in ways that off-the-shelf
          solutions couldn't accommodate, ultimately leading to better patient outcomes and more effective demonstration
          of our program's value.
        </p>
      </div>
    </div>
  )
}

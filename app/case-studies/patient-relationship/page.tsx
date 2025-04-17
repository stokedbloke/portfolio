import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PatientRelationshipCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Patient Relationship Management</h1>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I implemented a customized Zoho CRM system for automation of patient scheduling, referral monitoring, and
              business development operations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The clinic's reliance on manual processes and outdated tools for managing patient interactions was
              hindering growth.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>So What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This transformation has positioned SpineZone for national expansion by streamlining operations and
              enhancing scalability.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <h2>Project Overview</h2>
        <p>
          I developed a comprehensive CRM and analytics system that provided a real-time view of business health,
          complemented by a Patient Advisory Board to ensure a customer-centric experience. This initiative transformed
          how the organization managed patient relationships and monitored business performance.
        </p>

        <h2>Challenges</h2>
        <ul>
          <li>Manual processes for patient scheduling and follow-up</li>
          <li>Inefficient tracking of referrals from healthcare partners</li>
          <li>Limited visibility into business development metrics</li>
          <li>Lack of structured patient feedback mechanisms</li>
        </ul>

        <h2>Solution</h2>
        <p>My approach included two key components:</p>
        <ol>
          <li>
            <strong>Customized Zoho CRM Implementation:</strong>
            <ul>
              <li>Automated patient scheduling workflows</li>
              <li>Comprehensive referral tracking system</li>
              <li>Business development operations dashboard</li>
              <li>Real-time analytics on business health</li>
            </ul>
          </li>
          <li>
            <strong>Patient Advisory Board:</strong>
            <ul>
              <li>Structured forum for gathering patient feedback</li>
              <li>Mechanism for testing new service concepts</li>
              <li>Channel for ensuring customer-centric experience</li>
            </ul>
          </li>
        </ol>

        <h2>Results</h2>
        <p>The implementation of these systems delivered significant benefits:</p>
        <ul>
          <li>Streamlined operations through automation of key processes</li>
          <li>Enhanced scalability of the business model</li>
          <li>Improved visibility into business performance metrics</li>
          <li>More responsive and customer-centric service delivery</li>
          <li>Positioned SpineZone for national expansion</li>
        </ul>

        <h2>Key Learnings</h2>
        <p>
          This project demonstrated how effective patient relationship management can be a strategic enabler for
          healthcare business growth. By combining technology automation with structured patient feedback mechanisms, we
          created a system that not only improved operational efficiency but also enhanced the quality of patient
          experience.
        </p>
      </div>
    </div>
  )
}
